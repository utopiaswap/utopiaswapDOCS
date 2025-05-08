---
title: Best Rate Tunnel (BRT)
sidebar_position: 3
---

# 🚇 Best Rate Tunnel (BRT)

The **Best Rate Tunnel (BRT)** is the core routing algorithm behind UtopiaSwap. It's responsible for determining the most cost-effective, optimized path for every token swap by aggregating liquidity from multiple on-chain sources.

BRT ensures that users always receive the **best possible rate**, even in volatile or low-liquidity environments, by scanning and evaluating multiple DEXs in real-time.

---

## 🧠 What is BRT?

BRT is a **real-time, chain-specific routing engine** that:

- Queries multiple decentralized exchanges (DEXs) simultaneously
- Considers slippage, fees, gas costs, and route depth
- Selects the optimal path (single hop or multi-hop)
- Executes via UtopiaSwap’s modular smart contracts

It acts as a dynamic liquidity router rather than relying on a single protocol.

---

## 🔍 How It Works

1. **User selects tokens + chain**
2. **BRT identifies possible liquidity sources**:
   - Uniswap
   - Balancer
   - SushiSwap
   - PancakeSwap
   - Others (based on chain)
3. **Simulates potential swap routes**:
   - Direct swap (Token A → Token B)
   - Multi-hop swap (A → WETH → B)
   - Split routes (if enabled in future versions)
4. **Calculates effective return**:
   - Adjusts for slippage, liquidity depth, gas cost
5. **Selects best route** and sends instruction to smart contract layer
6. **Executes transaction**, and user receives tokens directly

---

## ⚙️ Components of BRT

| Component              | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Route Simulator        | Simulates all viable swap paths in real time                                |
| Slippage Optimizer     | Calculates expected return after slippage and liquidity impact              |
| Gas Estimator          | Compares gas costs across routing options to avoid expensive paths          |
| Protocol Adapter Layer | Allows BRT to interact with external DEX contracts uniformly                |
| Result Scorer          | Scores each path based on net output, reliability, and execution success    |

---

## 📊 Example

Imagine a user wants to swap **USDC → ETH** on Polygon:

- BRT detects 3 options:
  - Uniswap: 0.087 ETH
  - Balancer: 0.086 ETH
  - SushiSwap (via WETH): 0.088 ETH (but high gas)
- After accounting for gas and slippage, BRT selects **Uniswap** for optimal execution.

---

## 🔒 Why It Matters

- **User-first routing**: Always maximizes value returned to the user
- **Cross-chain capable**: BRT logic runs per-chain but shares architecture
- **Extensible**: New protocols or chains can be added without rewriting routing logic

---

## 🛣 Future Upgrades

- **Multi-DEX split routes**: Combine multiple sources for better rates
- **Cross-chain aggregation**: Bridge-aware routing in future versions
- **Private order flow / MEV resistance**: Enhance protection against front-running

---

> The Best Rate Tunnel is what makes UtopiaSwap not just another DEX aggregator — but a smart, adaptive liquidity layer across chains.
