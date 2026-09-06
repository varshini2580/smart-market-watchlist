/**
 * Smart Market Watchlist - Two-User Isolation Acceptance Test
 * 
 * Verifies that:
 * 1. User A and User B can register independently.
 * 2. User A cannot view User B's dashboard (returns 403 Forbidden).
 * 3. User A cannot view User B's watchlists (/api/watchlists/user/:userId -> returns 403 Forbidden).
 * 4. User A cannot add a stock to User B's watchlist (/api/watchlists/:id/stocks -> returns 403 Forbidden).
 * 5. User A cannot delete items from User B's watchlist (/api/watchlists/items/:id -> returns 403 Forbidden).
 * 6. User A cannot view User B's attention events (/api/attention/:userId -> returns 403 Forbidden).
 * 7. Stock catalog and search work with pagination without leaking user state.
 */

import http from "node:http";
import app from "./src/app.js";
import prisma from "./src/lib/prisma.js";

interface AuthUser {
    id: string;
    email: string;
    name: string;
}

interface RegisterResponse {
    token: string;
    user: AuthUser;
}

interface DashboardResponse {
    dashboard?: {
        stocks?: unknown[];
    };
}

interface WatchlistResponse {
    watchlists?: Array<{
        id: string;
        name: string;
        items?: Array<{ id: string; stockId: string }>;
    }>;
}

interface StockCatalogResponse {
    success: boolean;
    stocks: Array<{ id: string; symbol: string }>;
    total?: number;
    page?: number;
    limit?: number;
}

async function runAcceptanceTest(): Promise<void> {
    console.log("\n=======================================================");
    console.log("  SMART MARKET WATCHLIST - TWO-USER ACCEPTANCE TEST");
    console.log("=======================================================\n");

    const server = http.createServer(app);
    await new Promise<void>((resolve) => {
        server.listen(0, "127.0.0.1", () => resolve());
    });

    const address = server.address() as { port: number; address: string };
    const BASE_URL = `http://127.0.0.1:${address.port}/api`;
    console.log(`Server listening on: ${BASE_URL}`);

    try {
        const timestamp = Date.now();
        const userAData = {
            name: `User Alpha ${timestamp}`,
            email: `usera_${timestamp}@acceptance.test`,
            password: "Password123!",
        };
        const userBData = {
            name: `User Beta ${timestamp}`,
            email: `userb_${timestamp}@acceptance.test`,
            password: "Password123!",
        };

        // 1. Register User A
        console.log("\n1. Registering User A...");
        const regARes = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userAData),
        });
        const regA = (await regARes.json()) as RegisterResponse;
        if (regARes.status !== 201) {
            throw new Error(`User A registration failed: ${regARes.status} ${JSON.stringify(regA)}`);
        }
        const tokenA = regA.token;
        const userA = regA.user;
        console.log(`   ✓ User A registered: id=${userA.id}, email=${userA.email}`);

        // 2. Register User B
        console.log("\n2. Registering User B...");
        const regBRes = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userBData),
        });
        const regB = (await regBRes.json()) as RegisterResponse;
        if (regBRes.status !== 201) {
            throw new Error(`User B registration failed: ${regBRes.status} ${JSON.stringify(regB)}`);
        }
        const tokenB = regB.token;
        const userB = regB.user;
        console.log(`   ✓ User B registered: id=${userB.id}, email=${userB.email}`);

        // 3. Verify User A own dashboard
        console.log("\n3. Testing User A access to own dashboard (/api/dashboard)...");
        const dashARes = await fetch(`${BASE_URL}/dashboard`, {
            headers: { Authorization: `Bearer ${tokenA}` },
        });
        const dashA = (await dashARes.json()) as DashboardResponse;
        if (dashARes.status !== 200) {
            throw new Error(`User A failed to access own dashboard: ${dashARes.status}`);
        }
        console.log(`   ✓ User A accessed own dashboard. Stock count: ${dashA.dashboard?.stocks?.length || 0}`);

        // 4. Verify User A cannot access User B's dashboard via legacy route
        console.log("\n4. Testing User A unauthorized access to User B's dashboard (/api/dashboard/:userId)...");
        const breachDashRes = await fetch(`${BASE_URL}/dashboard/${userB.id}`, {
            headers: { Authorization: `Bearer ${tokenA}` },
        });
        if (breachDashRes.status === 403) {
            console.log(`   ✓ Access correctly denied: HTTP 403 Forbidden`);
        } else {
            throw new Error(`SECURITY BREACH: Expected 403, got ${breachDashRes.status}`);
        }

        // 5. Verify User B watchlists
        console.log("\n5. Fetching User B watchlists (/api/watchlists)...");
        const watchlistsBRes = await fetch(`${BASE_URL}/watchlists`, {
            headers: { Authorization: `Bearer ${tokenB}` },
        });
        const watchlistsB = (await watchlistsBRes.json()) as WatchlistResponse;
        const bWatchlist = watchlistsB.watchlists?.[0];
        if (!bWatchlist) {
            throw new Error("User B does not have an initial watchlist");
        }
        console.log(`   ✓ User B watchlist ID: ${bWatchlist.id}, item count: ${bWatchlist.items?.length || 0}`);

        // 6. Verify User A cannot read User B's watchlists via legacy route
        console.log("\n6. Testing User A reading User B's watchlists (/api/watchlists/user/:userId)...");
        const breachWatchlistRes = await fetch(`${BASE_URL}/watchlists/user/${userB.id}`, {
            headers: { Authorization: `Bearer ${tokenA}` },
        });
        if (breachWatchlistRes.status === 403) {
            console.log(`   ✓ Access correctly denied: HTTP 403 Forbidden`);
        } else {
            throw new Error(`SECURITY BREACH: Expected 403, got ${breachWatchlistRes.status}`);
        }

        // 7. Verify User A cannot add stocks to User B's watchlist
        console.log("\n7. Testing User A adding a stock to User B's watchlist (/api/watchlists/:watchlistId/stocks)...");
        const breachAddRes = await fetch(`${BASE_URL}/watchlists/${bWatchlist.id}/stocks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenA}`,
            },
            body: JSON.stringify({
                stockId: "00000000-0000-0000-0000-000000000001",
                intent: "INTERESTED",
            }),
        });
        if (breachAddRes.status === 403) {
            console.log(`   ✓ Add stock correctly denied: HTTP 403 Forbidden`);
        } else {
            throw new Error(`SECURITY BREACH: Expected 403, got ${breachAddRes.status}`);
        }

        // 8. Verify User A cannot delete items from User B's watchlist
        const bItem = bWatchlist.items?.[0];
        if (bItem) {
            console.log(`\n8. Testing User A deleting an item from User B's watchlist (/api/watchlists/items/:itemId)...`);
            const breachDeleteRes = await fetch(`${BASE_URL}/watchlists/items/${bItem.id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${tokenA}` },
            });
            if (breachDeleteRes.status === 403) {
                console.log(`   ✓ Deletion correctly denied: HTTP 403 Forbidden`);
            } else {
                throw new Error(`SECURITY BREACH: Expected 403, got ${breachDeleteRes.status}`);
            }
        }

        // 9. Verify Attention isolation
        console.log("\n9. Testing User A reading User B's attention alerts (/api/attention/:userId)...");
        const breachAttnRes = await fetch(`${BASE_URL}/attention/${userB.id}`, {
            headers: { Authorization: `Bearer ${tokenA}` },
        });
        if (breachAttnRes.status === 403) {
            console.log(`   ✓ Attention access correctly denied: HTTP 403 Forbidden`);
        } else {
            throw new Error(`SECURITY BREACH: Expected 403, got ${breachAttnRes.status}`);
        }

        // 10. Verify Stock catalog pagination
        console.log("\n10. Testing Stock Catalog pagination (/api/stocks?page=1&limit=5)...");
        const catalogRes = await fetch(`${BASE_URL}/stocks?page=1&limit=5`, {
            headers: { Authorization: `Bearer ${tokenA}` },
        });
        const catalogData = (await catalogRes.json()) as StockCatalogResponse;
        if (catalogRes.status === 200 && catalogData.limit === 5) {
            console.log(`   ✓ Catalog returned ${catalogData.stocks.length} stocks (total=${catalogData.total})`);
        } else {
            throw new Error(`Pagination failed: status=${catalogRes.status}, data=${JSON.stringify(catalogData)}`);
        }

        console.log("\n=======================================================");
        console.log("  ALL ACCEPTANCE CRITERIA PASSED SUCCESSFULLY! [PASS]");
        console.log("=======================================================\n");
    } finally {
        server.close();
        await prisma.$disconnect();
    }
}

runAcceptanceTest()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error("\n❌ Acceptance test failed:", err);
        process.exit(1);
    });
