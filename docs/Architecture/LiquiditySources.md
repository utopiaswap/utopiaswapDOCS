---
title: Liquidity Sources
sidebar_position: 4
---

# 💧 Liquidity Sources

UtopiaSwap aggregates liquidity from a growing number of decentralized exchanges (DEXs) and on-chain liquidity venues. This enables our **Best Rate Tunnel (BRT)** to find and execute trades at the most competitive prices available.

By sourcing from multiple pools across protocols and chains, UtopiaSwap minimizes slippage, maximizes output, and ensures better execution for all users.

---

## 🔗 Primary DEX Integrations (per chain)

| Chain     | Integrated DEXs                                       |
|-----------|--------------------------------------------------------|
| Ethereum  | Uniswap V2/V3, Balancer, Curve, SushiSwap             |
| Polygon   | QuickSwap, Uniswap V3, Balancer, SushiSwap            |
| BNB Chain | PancakeSwap, Biswap, Thena                            |
| Base      | Aerodrome, Uniswap V3, SushiSwap                      |
| Optimism  | Velodrome, Uniswap V3, Beethoven X                    |
| Celo      | Ubeswap, Mento, SushiSwap                             |

> ⚠️ Support may vary by token and liquidity availability. BRT automatically excludes routes with insufficient depth.

---

## 🔍 How Liquidity Is Accessed

UtopiaSwap connects directly to DEX smart contracts using protocol-specific adapters. These adapters handle:

- Reading on-chain pool data (reserves, swap fees)
- Simulating routes through different protocols
- Executing swaps via standard and custom interfaces

The routing logic (BRT) uses this information to score and compare routes based on:
- Effective output after fees and slippage
- Gas cost per route
- Contract reliability and liquidity depth

---

## 🧩 Why Aggregated Liquidity Matters

| ✅ Benefit            | 🔎 Description                                                       |
|-----------------------|----------------------------------------------------------------------|
| Better prices         | Utopia selects the route with the best net output                   |
| Less slippage         | Multi-protocol routing finds deeper pools                           |
| Improved reliability  | If one DEX fails, others can be fallback options                    |
| Token availability    | Access to rare or less liquid tokens across protocols               |

---

## 🔧 Extensibility

UtopiaSwap is built to support rapid onboarding of new liquidity sources. Adding a new DEX involves:

1. Implementing a protocol adapter (if needed)
2. Defining swap and pool read functions
3. Registering the source in BRT’s scoring engine
4. Testing slippage handling, gas estimates, and error cases

This architecture ensures that as new DEXs launch or grow in importance, UtopiaSwap can quickly integrate them and keep users ahead of the curve.

---

## 🔜 Coming Soon

- Integration with lending protocols for routed **flash swaps**
- Support for **RFQ-based liquidity** (e.g., 0x, 1inch Fusion)
- Off-chain market makers for hybrid order flow

---

> Liquidity is the lifeblood of DeFi. UtopiaSwap’s goal is to ensure you always have access to the deepest, most efficient routes across any chain.
