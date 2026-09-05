import { Request, Response } from "express";
import https from "https";
import YahooFinance from "yahoo-finance2";
import NodeCache from "node-cache";

const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Cache news results for 10 minutes to deliver instant sub-millisecond responses
const newsCache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

const yahooFinance = new YahooFinance({
  suppressNotices: ["yahooSurvey"],
});

interface GNewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string | null;
  publishedAt: string;
  source: { name: string; url: string };
}

interface GNewsResponse {
  totalArticles: number;
  articles: GNewsArticle[];
}

function fetchJson<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let raw = "";
        res.on("data", (chunk) => (raw += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(raw) as T);
          } catch (e) {
            reject(new Error("Invalid JSON response"));
          }
        });
      })
      .on("error", reject);
  });
}

// Live Yahoo Finance news fallback for Indian markets & stocks
async function getYahooFinanceNews(query?: string) {
  try {
    let tickers = ["^NSEI", "RELIANCE.NS", "HDFCBANK.NS"];

    if (query && query.trim() && query !== "India Stock Market" && query !== "stock market india") {
      const cleanQ = query.trim().toUpperCase();
      if (cleanQ.includes("TECH")) {
        tickers = ["TCS.NS", "INFY.NS"];
      } else if (cleanQ.includes("BANK")) {
        tickers = ["HDFCBANK.NS", "ICICIBANK.NS"];
      } else if (cleanQ.includes("GLOBAL")) {
        tickers = ["^DJI", "^IXIC"];
      } else {
        tickers = [cleanQ.endsWith(".NS") || cleanQ.startsWith("^") ? cleanQ : `${cleanQ}.NS`];
      }
    }

    const results = await Promise.all(
      tickers.map((t) => {
        const searchPromise = yahooFinance
          .search(t, { newsCount: 5 })
          .then((r: any) => r.news || [])
          .catch(() => []);
        const timeoutPromise = new Promise<any[]>((resolve) =>
          setTimeout(() => resolve([]), 3500)
        );
        return Promise.race([searchPromise, timeoutPromise]);
      })
    );

    const seenUrls = new Set<string>();
    const allNews: any[] = [];

    for (const items of results) {
      for (const item of items) {
        if (item.link && !seenUrls.has(item.link)) {
          seenUrls.add(item.link);
          const thumb =
            item.thumbnail?.resolutions?.[0]?.url ||
            item.thumbnail?.resolutions?.[1]?.url ||
            null;

          allNews.push({
            title: item.title,
            description: item.publisher ? `${item.title} — Reported by ${item.publisher}.` : item.title,
            content: item.title,
            url: item.link,
            image: thumb,
            publishedAt: item.providerPublishTime
              ? new Date(item.providerPublishTime).toISOString()
              : new Date().toISOString(),
            source: {
              name: item.publisher || "Yahoo Finance",
              url: item.link,
            },
          });
        }
      }
    }

    return allNews;
  } catch (err) {
    console.error("[news] Yahoo Finance news error:", err);
    return [];
  }
}

export async function getNews(req: Request, res: Response): Promise<void> {
  const category = (req.query.category as string) || "general";
  const q = (req.query.q as string) || "India Stock Market";
  const page = parseInt((req.query.page as string) || "1", 10);

  const cacheKey = `news_${category}_${q}_${page}`;
  const cached = newsCache.get<any>(cacheKey);
  if (cached) {
    res.json(cached);
    return;
  }

  // 1. If GNews API key is configured, try it
  if (NEWS_API_KEY) {
    try {
      const encoded = encodeURIComponent(q);
      const url = `https://gnews.io/api/v4/search?q=${encoded}&category=${category}&lang=en&country=in&max=12&page=${page}&apikey=${NEWS_API_KEY}`;
      const data = await fetchJson<GNewsResponse>(url);

      if (data.articles && data.articles.length > 0) {
        const responseData = {
          success: true,
          available: true,
          totalArticles: data.totalArticles ?? data.articles.length,
          articles: data.articles.map((a) => ({
            title: a.title,
            description: a.description,
            content: a.content,
            url: a.url,
            image: a.image,
            publishedAt: a.publishedAt,
            source: a.source,
          })),
        };
        newsCache.set(cacheKey, responseData);
        res.json(responseData);
        return;
      }
    } catch (err) {
      console.warn("[news] GNews failed, falling back to Yahoo Finance:", err);
    }
  }

  // 2. Real Yahoo Finance market news
  try {
    const yahooArticles = await getYahooFinanceNews(q);
    const responseData = {
      success: true,
      available: true,
      totalArticles: yahooArticles.length,
      articles: yahooArticles,
    };
    if (yahooArticles.length > 0) {
      newsCache.set(cacheKey, responseData);
    }
    res.json(responseData);
  } catch (err) {
    console.error("[news] fetch error:", err);
    res.json({
      success: true,
      available: true,
      totalArticles: 0,
      articles: [],
    });
  }
}
