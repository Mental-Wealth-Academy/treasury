# Treasury

**Community-owned USDC treasury with autonomous trading model**

## Overview

Treasury is the prediction-market trading engine for Mental Wealth Academy. It prices binary outcome markets using a **Black-Scholes model** adapted for prediction contracts, sizes positions with **Kelly criterion** bankroll management, and quotes two-sided liquidity through an **Avellaneda-Stoikov market-making** spread. Live market signals flow in from **Polymarket** (CLOB order-book data, holder snapshots, and recent trades). A trade is only placed when the model detects at least a **3 % edge** between its fair-value estimate and the current market price.

Key capabilities:

- Black-Scholes binary pricing with implied-volatility surface
- Kelly-criterion position sizing constrained to half-Kelly for drawdown control
- Avellaneda-Stoikov optimal bid/ask spread for market-making
- Real-time Polymarket CLOB integration (order book, trades, holders)
- CoinGecko spot-price feeds for crypto-correlated markets
- Execution logging and P&L tracking
- Community governance hooks (on-chain treasury controlled by token holders)

## Architecture

```
app/
  api/treasury/          -- 9 API routes (market data, signals, execution, P&L)
  treasury/page.tsx      -- Main treasury dashboard UI

components/
  treasury-display/      -- Portfolio table, position cards, P&L charts
  treasury-how-to/       -- Onboarding walkthrough overlay
  soul-gems/             -- Gem-based reward visualisations

lib/
  market-api.ts          -- CoinGecko + market-data aggregation
  trading-engine.ts      -- Black-Scholes pricer, Kelly sizer, Avellaneda-Stoikov quoter
  polymarket-clob.ts     -- Polymarket CLOB REST client
  apple-holders.ts       -- Holder-snapshot utilities
  execution-log-store.ts -- Trade execution journal
```

### Trading pipeline

1. **Fetch** -- pull live order-book and trade data from Polymarket CLOB; pull spot prices from CoinGecko.
2. **Price** -- run Black-Scholes binary pricer to get model fair value for each outcome.
3. **Size** -- Kelly criterion determines optimal allocation given edge and bankroll.
4. **Quote** -- Avellaneda-Stoikov sets optimal bid/ask spread around fair value.
5. **Execute** -- if edge exceeds 3 %, place limit order on Polymarket; log to execution store.

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Blockchain | ethers.js v5 |
| Market data | CoinGecko API, Polymarket CLOB |
| Styling | CSS Modules + MWA design tokens |

## Part of Mental Wealth Academy

This repository is one module of the [Mental Wealth Academy](https://github.com/MentalWealthAcademy) platform.
