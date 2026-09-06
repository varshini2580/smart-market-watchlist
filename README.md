# Smart Market Watchlist

> A real-time, event-driven stock watchlist platform that transforms market data into actionable portfolio awareness.

Smart Market Watchlist is a full-stack fintech application designed to help investors monitor stocks, understand price movement, and surface important events without constantly checking the market.

The platform combines live market data, persistent watchlists, historical price analysis, automated change detection, and an attention system into a single dashboard.

---

## Product Overview

Traditional watchlists answer:

> "What are my stocks doing?"

Smart Market Watchlist goes one step further:

> "What changed, and what deserves my attention?"

The system evaluates watched stocks and converts market movement into meaningful events such as significant price changes, target-price proximity, and volume-based signals.

### Core Capabilities

- Live stock quotes through Yahoo Finance
- Persistent user watchlists
- Historical price charts
- Market open/closed status
- Automated market monitoring
- Price and volume change detection
- Attention/event generation
- Dashboard-level market awareness
- Stock-level historical analysis
- Watchlist filtering and sorting
- Market movers derived from real portfolio data
- Analytics and performance insights
- Financial news discovery
- Persistent client-side preferences
- Responsive dark fintech interface

---

# Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                            │
│                    React + TypeScript                       │
│                                                             │
│ Dashboard │ Watchlist │ Market │ Alerts │ News │ Insights  │
│                          │                                  │
│                     Axios / HTTP                            │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                         BACKEND                             │
│                  Express + TypeScript                       │
│                                                             │
│ Routes → Controllers → Services → Repositories              │
│                           │                                 │
│              ┌────────────┴────────────┐                    │
│              ▼                         ▼                    │
│       Market Provider             PostgreSQL                │
│       Yahoo Finance               Prisma ORM                │
│              │                         │                    │
│              └────────────┬────────────┘                    │
│                           ▼                                 │
│                  Change Detection                           │
│                           │                                 │
│                           ▼                                 │
│                   Attention Events                          │
│                                                             │
│                  Background Monitor                         │
└─────────────────────────────────────────────────────────────┘
```

---

# Engineering Architecture

The backend follows a layered architecture to keep responsibilities separated.

### Routes
Responsible for HTTP endpoint definitions.

```text
backend/src/routes/
```

### Controllers
Responsible for request validation and HTTP responses.

```text
backend/src/controllers/
```

### Services
Contain application and business logic.

```text
backend/src/services/
```

### Repositories
Handle database access.

```text
backend/src/repositories/
```

### Providers
Abstract external market-data sources.

```text
backend/src/providers/
```

This separation allows the market-data implementation to change without rewriting business logic.

---

# Market Data Abstraction

The application uses a provider interface rather than coupling business logic directly to Yahoo Finance.

```text
MarketDataProvider
        │
        ├── getQuote()
        ├── getHistoricalPrices()
        └── getMarketStatus()
```

The production implementation uses Yahoo Finance:

```text
RealMarketDataProvider
        ↓
Yahoo Finance
```

A mock provider is also available for development and testing.

This makes the system easier to test and allows another market-data provider to be introduced later without changing the service layer.

---

# Data Flow

## Quote Flow

```text
Client
  │
  │ GET /api/market/:symbol/quote
  ▼
Controller
  │
  ▼
Market Service
  │
  ├── Find Stock
  │
  ├── Check stored snapshot
  │
  └── Fetch external quote when required
  │
  ▼
Yahoo Finance
  │
  ▼
Market Snapshot
  │
  ▼
PostgreSQL
  │
  ▼
API Response
```

---

# Smart Attention System

The key product feature is the attention pipeline.

The application does not treat every price movement as an alert.

Instead, market changes are evaluated and converted into structured attention events.

```text
Market Quote
     ↓
Previous Snapshot
     ↓
Change Detection
     ↓
Rule Evaluation
     ↓
Attention Event
     ↓
Dashboard / Alerts
```

Examples of events include:

- Significant price movement
- Target-price proximity
- Volume changes
- Other watchlist-relevant market changes

Events are assigned severity levels:

```text
HIGH
MEDIUM
LOW
```

This creates a distinction between **data that exists** and **information that matters**.

---

# Market Data Freshness

The application uses a freshness window to avoid unnecessary external market-data requests.

Configured through:

```env
MARKET_FRESHNESS_WINDOW_MINUTES=10
```

When a stored snapshot is still considered fresh, the application can return the cached snapshot instead of immediately requesting another external quote.

This reduces unnecessary provider calls while keeping the application responsive.

---

# Background Market Monitor

The backend includes a background monitoring job.

```text
Background Monitor
        ↓
User Watchlists
        ↓
Watched Stocks
        ↓
Market Data Provider
        ↓
Latest Snapshot
        ↓
Change Detection
        ↓
Attention Events
```

This allows the application to detect meaningful changes without requiring the user to manually refresh every stock.

---

# Frontend

The frontend is built with:

- React
- TypeScript
- Vite
- React Router
- Axios
- Recharts
- date-fns

### Application Areas

| Page | Responsibility |
|---|---|
| Dashboard | Portfolio-level overview |
| Watchlist | Manage tracked stocks |
| Market | Market status and watchlist movers |
| Alerts | Attention events |
| News | External financial news |
| Insights | Portfolio analytics |
| Stock Detail | Historical price analysis |
| Settings | Client-side preferences |

---

# Dashboard

The dashboard is designed as the application's primary decision surface.

It provides:

- Watchlist overview
- Current prices
- Price movement
- Intent classification
- Target information
- Attention events
- Quick access to detailed stock analysis

The dashboard uses real backend data rather than fabricated stock values.

---

# Watchlist

The watchlist provides a dedicated workspace for managing tracked stocks.

Supported operations include:

- Add stock
- Remove stock
- Search stocks
- Filter by intent
- Sort by symbol
- Sort by price
- Sort by performance
- Open detailed stock analysis

---

# Market

The Market page provides a watchlist-focused market view.

It includes:

- Current market status
- Watchlist gainers
- Watchlist losers
- Stock-level market information

Market movers are derived from actual watchlist data rather than fabricated values.

---

# Alerts

The Alerts page surfaces attention events generated by the backend.

Users can filter events by:

- Severity
- Price change
- Target
- Volume

The goal is to provide a focused feed of events that deserve review.

---

# Insights

The Insights page transforms watchlist data into higher-level analytics.

Examples include:

- Total tracked stocks
- Holdings vs interested stocks
- Gainers vs losers
- Best performer
- Worst performer
- Target-price proximity
- Attention-event distribution

Charts are generated from actual application data.

---

# Stock Detail

Stock detail pages provide historical price analysis across multiple time ranges.

Supported ranges:

```text
1D
1W
1M
3M
6M
1Y
```

Historical data is retrieved through the market-data provider and rendered using Recharts.

---

# News

The News page uses an external financial-news provider.

News is intentionally separated from the core market-data pipeline because there is no first-party news service in the backend.

When configured, the frontend can retrieve external financial news and display:

- Headline
- Source
- Timestamp
- Summary
- External article link
- Category

If the external provider is unavailable or not configured, the application displays a graceful empty state instead of inventing news.

---

# Settings

Application preferences are stored using browser `localStorage`.

Current preferences include:

- Animation preference
- Watchlist sorting
- Watchlist display mode

No backend settings API is required for these client-specific preferences.

---

# API

### Dashboard

```http
GET /api/dashboard/:userId
POST /api/dashboard/:userId/refresh
```

### Market

```http
POST /api/market/:symbol/quote?exchange=NSE
GET /api/market/:symbol/quote?exchange=NSE
GET /api/market/:symbol/history?exchange=NSE&range=1m
GET /api/market/status
```

### Stocks

```http
GET /api/stocks
```

### Watchlists

```http
POST /api/watchlists/:id/stocks
DELETE /api/watchlists/items/:itemId
```

### Attention

```http
GET /api/attention/:userId
```

### Health

```http
GET /api/health
```

---

# Database

The application uses PostgreSQL with Prisma ORM.

Core entities include:

```text
User
Watchlist
WatchlistItem
Stock
MarketSnapshot
UserStockCheckpoint
AttentionEvent
```

Conceptually:

```text
User
 │
 └── Watchlist
       │
       └── WatchlistItem
               │
               └── Stock
                    │
                    ├── MarketSnapshot
                    │
                    └── AttentionEvent
```

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- React Router
- Axios
- Recharts
- date-fns

## Backend

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- Yahoo Finance
- node-cache
- CORS
- dotenv

## Development

- Git
- GitHub
- npm
- Docker Compose

---

# Local Development

## Prerequisites

Install:

- Node.js
- npm
- PostgreSQL or Docker

## Clone

```bash
git clone https://github.com/varshini2580/smart-market-watchlist.git
cd smart-market-watchlist
```

## Backend

```bash
cd backend
npm install
```

Create:

```text
backend/.env
```

Example:

```env
DATABASE_URL=your_postgresql_connection_string
REDIS_URL=your_redis_connection_string
MARKET_FRESHNESS_WINDOW_MINUTES=10
PORT=5000
```

Run migrations:

```bash
npx prisma migrate deploy
```

Start development server:

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

Health check:

```text
GET /api/health
```

## Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The Vite development server will provide the frontend URL.

---

# Production Builds

Frontend:

```bash
cd frontend
npm run build
```

Backend:

```bash
cd backend
npm run build
```

Both builds should complete without TypeScript errors.

---

# Environment Variables

Never commit secrets to Git.

The repository intentionally ignores:

```text
.env
.env.*
node_modules/
dist/
.vite/
```

Production deployments should provide environment variables through the hosting platform's secret/environment configuration.

---

# Design System

The application uses a premium dark fintech visual system.

### Core Principles

- Deep black surfaces
- Purple accent system
- High-contrast typography
- Clear positive/negative market states
- Layered cards
- Subtle gradients
- Motion used for hierarchy rather than decoration
- Responsive layouts
- Reduced-motion accessibility support

The visual language is inspired by modern financial products while maintaining an original interface.

---

# Reliability Considerations

The application is designed around several failure cases.

### Market Provider Failure
External market-data failures are handled without crashing the entire API.

### Missing Market Data
The UI provides explicit empty states instead of displaying fabricated values.

### Stale Data
Cached market snapshots can be reused within the configured freshness window.

### External News Failure
News gracefully falls back to an unavailable/empty state.

### Reduced Motion
Animations respect:

```css
prefers-reduced-motion
```

---

# Engineering Trade-offs

### Yahoo Finance

Yahoo Finance provides a practical source for development and demonstration.

For a production brokerage platform, a licensed market-data provider with defined SLAs, exchange agreements, and commercial usage rights would be preferable.

### Client-side News

News currently uses an external public provider because a dedicated backend news pipeline is outside the current scope.

A production implementation should proxy and cache news through the backend.

### Authentication

Authentication is intentionally simplified for the current version.

The application currently uses a fixed user identifier.

A production system would replace this with:

- Authentication
- Session management
- Authorization
- User-specific data isolation

---

# Current Limitations

- No user authentication
- No order execution
- No brokerage integration
- Yahoo Finance is used as the market-data provider
- News depends on an external provider
- Settings are client-side
- Background monitoring is currently application-process based
- Market data may be delayed depending on the upstream provider

---

# Future Roadmap

## Phase 1 — Core Platform

- Watchlist persistence
- Market-data provider abstraction
- Historical prices
- Market snapshots
- Dashboard
- Change detection

## Phase 2 — Intelligence Layer

- Attention events
- Background market monitoring
- Severity classification
- Target-price signals
- Volume signals

## Phase 3 — Product Experience

- Premium dark fintech UI
- Dedicated Watchlist
- Market workspace
- Alerts center
- Insights
- News
- Settings
- Responsive/mobile experience

## Future

- Authentication
- Multi-user support
- Real-time WebSocket updates
- Redis-backed job processing
- Notification channels
- Portfolio analytics
- Brokerage integrations
- Advanced technical indicators
- ML-based anomaly detection
- Event-driven architecture
- Production-grade market-data provider

---

# Testing & Verification

Before deployment:

```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm run build
```

Manual verification should cover:

- Dashboard loading
- Watchlist CRUD
- Market status
- Historical charts
- Alerts
- Insights
- News fallback
- Settings persistence
- Route navigation
- Browser refresh
- Responsive layouts
- Backend health endpoint

---

# Project Structure

```text
smart-market-watchlist/
│
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   │
│   └── src/
│       ├── controllers/
│       ├── jobs/
│       ├── providers/
│       ├── repositories/
│       ├── routes/
│       ├── services/
│       ├── lib/
│       ├── app.ts
│       └── server.ts
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── styles/
│       ├── App.tsx
│       ├── Dashboard.tsx
│       └── StockDetail.tsx
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# Authentication & Multi-User Architecture

The platform provides secure, personalized user authentication while preserving all existing market monitoring, change-detection, and attention engine logic.

```text
                                  ┌─────────────────────────────┐
                                  │      Client (Browser)       │
                                  └──────────────┬──────────────┘
                                                 │
                        ┌────────────────────────┴────────────────────────┐
                        ▼                                                 ▼
             [Email + Password Login]                         [Continue with Google]
                        │                                                 │
                        ▼                                                 ▼
             bcrypt Password Compare                           OAuth 2.0 Token Exchange
                        │                                                 │
                        └────────────────────────┬────────────────────────┘
                                                 ▼
                                     Unified User Record
                                    (PostgreSQL via Prisma)
                                                 │
                                                 ▼
                                     Signed JWT Token Issued
                           (HttpOnly Cookie + Bearer Token Fallback)
                                                 │
                                                 ▼
                                   requireAuth Middleware
                              (Extracts User Identity from JWT)
                                                 │
                        ┌────────────────────────┼────────────────────────┐
                        ▼                        ▼                        ▼
                 User Watchlist          User Checkpoints          Attention Events
               (Isolated Data)           (Isolated State)         (Isolated Signals)
```

### Key Principles

1. **Server-Side Identity Verification**: The backend derives the user ID strictly from the verified JWT payload (`req.user.id`). Client-provided IDs in request bodies or URLs are never trusted for authorization.
2. **Unified User Model**: Both Email/Password and Google OAuth resolve to the same underlying `User` record in PostgreSQL.
3. **Session Persistence ("Remember Me")**:
   - **Default Session**: 24-hour expiration.
   - **Remember Me Active**: 30-day expiration.
   - Raw passwords are never stored. Passwords are salted and hashed using bcrypt (`12` rounds).
4. **Resilient Token Delivery**:
   - Primary: Secure, `HttpOnly`, `SameSite=None` cookie for protection against XSS.
   - Secondary: `Authorization: Bearer <token>` fallback header automatically attached by Axios interceptor for cross-origin / third-party cookie restricted environments.

---

# Multi-User Data Isolation & Acceptance Testing

Smart Market Watchlist enforces strict tenant isolation across all layers:

```text
User A (e.g., userA@example.com)
 ├── Watchlist A ("My Watchlist" with personalized stocks)
 ├── Checkpoints A (Private price baselines)
 └── Attention A (Private change signals)

User B (e.g., userB@example.com)
 ├── Watchlist B ("My Watchlist" with distinct stocks)
 ├── Checkpoints B (Private price baselines)
 └── Attention B (Private change signals)
```

### Two-User Isolation Acceptance Test

An automated end-to-end multi-user isolation verification suite is included in `backend/test-two-users.ts`. It verifies:

1. **User Registration & Seeding**: Registers User A and User B; verifies automatic default watchlist creation for each user.
2. **Dashboard Isolation**: User A cannot read User B's dashboard. Legacy routes (`GET /api/dashboard/:userId`) reject unauthorized access with `403 Forbidden`.
3. **Watchlist Isolation**: User A cannot view, add items to, or delete items from User B's watchlist (`403 Forbidden`).
4. **Attention Isolation**: User A cannot view User B's attention notifications (`403 Forbidden`).
5. **Catalog & Pagination**: Global stock catalog supports efficient pagination (`page`, `limit`) and search without leaking user-specific checkpoints.

Run the test suite locally:
```bash
cd backend
npx tsx test-two-users.ts
```

---

# Pragmatic Scalability Rationale

Smart Market Watchlist is engineered to handle substantial growth using solid database and architectural primitives without unnecessary operational complexity (e.g., no premature Redis/Kafka dependencies):

1. **Connection Pooling**: Uses the Node `pg` Pool adapter with managed connections (`max: 10`, idle timeouts), preventing connection exhaustion on PostgreSQL.
2. **Comprehensive Indexing**:
   - `User.email` (Unique index)
   - `User.googleId` (Unique index)
   - `Watchlist.userId` (B-tree index for instant watchlist lookups)
   - `WatchlistItem(watchlistId, stockId)` (Composite unique index)
   - `MarketSnapshot.stockId` (B-tree index for snapshot freshness queries)
   - `Checkpoint(userId, stockId)` (Composite index for per-user checkpoint lookups)
   - `AttentionEvent(userId, detectedAt)` (Composite index for chronological user alerts)
3. **Shared Market Ingestion**: The background market monitor updates shared `MarketSnapshot` records once per interval across all symbols, ensuring API calls to Yahoo Finance scale with the number of *distinct symbols*, NOT the number of *users*.
4. **Pagination**: Global endpoints (e.g., `/api/stocks`, `/api/attention`) support `page` and `limit` query parameters with safety caps to prevent memory spikes on large collections.
5. **Stateless Backend**: Express authentication is stateless (JWT), allowing horizontal autoscaling behind a load balancer without sticky sessions.

---

# Local Setup & Verification

### Prerequisites
- Node.js 18+
- PostgreSQL database (local or cloud like Render/Neon/Supabase)

### 1. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env and supply your DATABASE_URL, JWT_SECRET, etc.

# Run database migrations
npx prisma migrate deploy

# Seed stock catalog
npm run seed

# Start development server
npm run dev
```
Backend runs on `http://localhost:5000`.

### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```
Frontend runs on `http://localhost:5173`.

---

# Production Deployment (Render)

### Backend Web Service (Render)
1. Create a **Web Service** pointing to the repository root with root directory `backend`.
2. **Build Command**: `npm install && npm run build && npx prisma migrate deploy`
3. **Start Command**: `npm start`
4. **Environment Variables**:
   - `DATABASE_URL`: PostgreSQL connection string (with `?sslmode=require`).
   - `NODE_ENV`: `production`
   - `PORT`: `5000` (or leave default Render port)
   - `JWT_SECRET`: Secure 64-character random string.
   - `FRONTEND_URL`: URL of your deployed frontend (e.g., `https://smart-market-watchlist.vercel.app` or Render frontend URL).
   - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`: (Optional) Credentials from Google Cloud Console.
   - `GOOGLE_CALLBACK_URL`: `https://<your-backend>.onrender.com/api/auth/google/callback`

### Frontend Static Site (Render / Vercel)
1. Create a **Static Site** pointing to `frontend`.
2. **Build Command**: `npm install && npm run build`
3. **Publish Directory**: `dist`
4. **Environment Variables**:
   - `VITE_API_URL`: `https://<your-backend>.onrender.com`

---

# Product Philosophy

Smart Market Watchlist is built around a simple idea:

> **A good financial product should not just show more data. It should help users understand what deserves their attention.**

The system therefore separates three concerns:

```text
DATA
What happened?

INTELLIGENCE
What changed?

ATTENTION
What should I look at?
```

That separation forms the foundation of the application's architecture and product experience.

---

# Disclaimer

This project is an educational and engineering demonstration.

It is not a brokerage platform and does not provide financial advice, investment recommendations, or order execution.

Market data may be delayed or subject to the terms and limitations of the upstream provider.

---

## License

This project is currently intended as a portfolio/engineering project.

License terms can be added when the project is prepared for public distribution.
