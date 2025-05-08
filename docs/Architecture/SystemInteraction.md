---
title: System Interaction
sidebar_position: 1
---

# 🔄 System Interaction

Understanding how UtopiaSwap operates behind the scenes is key to appreciating its efficiency and flexibility. This page breaks down the interaction between users, smart contracts, and third-party protocols across multiple chains.

---

## 🧑‍💻 User Interaction Flow

1. **User connects wallet**

   - Supports EVM-compatible wallets (e.g., MetaMask, WalletConnect).
   - Automatically detects selected network (ETH, BNB, POLY, etc.).

2. **Token Pair & Chain Selection**

   - User selects input and output tokens.
   - UtopiaSwap dynamically fetches available routes on the selected chain.

3. **Quote Aggregation**

   - UtopiaSwap queries rates from multiple DEXs (e.g., Uniswap, Balancer).
   - The **Best Rate Tunnel** selects the optimal path based on price, liquidity depth, and gas efficiency.

4. **Transaction Preview**

   - User is shown expected output, slippage, and gas estimates.
   - All routing is abstracted — even multi-hop swaps are shown as a single action.

5. **Transaction Signing & Execution**

   - User signs the transaction via their wallet.
   - Smart contract executes the trade using the selected route.

6. **Settlement**
   - Tokens are received directly in the user's wallet.
   - UtopiaSwap does not custody assets at any point.

---

## 🧠 Behind the Scenes

### 🔗 Chain Adapters

- Each supported blockchain (ETH, POLY, BNB, BASE, OP, CELO) has its own **adapter layer**.
- Adapters standardize interaction between the frontend and contract layer, abstracting differences in token standards and gas models.

### 🚇 Best Rate Tunnel

- Central routing engine that:
  - Queries on-chain DEXs for current swap rates.
  - Compares slippage-adjusted output across protocols.
  - Chooses the most cost-effective route.
- Extensible to support new DEXs and chains.

### 🧩 Smart Contracts

- Modular contracts for:
  - Swapping
  - Routing logic
  - Token validation
- Gas-optimized and auditable

---

## 📊 System Architecture (Simplified)

[User Wallet]<br></br>
↓<br></br>
[Utopia Frontend]<br></br>
↓<br></br>
[Chain Adapter + Best Rate Tunnel]<br></br>
↓<br></br>
[Smart Contracts]<br></br>
↓<br></br>
[DEXes / Liquidity Sources]<br></br>

---

## ✅ Key Guarantees

- **Non-custodial**: UtopiaSwap never holds user funds.
- **Optimized Routing**: Always attempts best price including gas.
- **Cross-chain scalability**: New networks can be added with minimal change.

---

> Want a deeper dive? Head to [Architecture](./ChainIntegrationLayer) next for a more technical breakdown.
