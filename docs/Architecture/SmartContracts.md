---
title: Deployment
sidebar_position: 5
---

# 🚀 UtopiaSwap Deployment

UtopiaSwap is deployed on multiple EVM-compatible chains. Each chain hosts a deployed instance of the UtopiaSwap smart contract, responsible for handling token swaps and tracking swap activity.

These contracts interface with liquidity sources and execute swaps based on pre-processed routing results from the **Best Rate Tunnel (BRT)**, which runs off-chain.

---

## 🌍 Live Deployments

Below are the currently deployed contract addresses for UtopiaSwap across supported chains:

| Chain       | Contract Address                                   |
|-------------|----------------------------------------------------|
| **Celo**    | `0x95f54C8a157ED563A0b5Fe410C7B5E4106a8E306`        |
| **Polygon** | `0x072575D44F95C04d769C63d5a8D78B7e324c5021`        |
| **Optimism**| `0x072575D44F95C04d769C63d5a8D78B7e324c5021`        |
| **BNB Chain**| `0x072575D44F95C04d769C63d5a8D78B7e324c5021`       |
| **Ethereum**| `0x95f54C8a157ED563A0b5Fe410C7B5E4106a8E306`        |
| **Base**    | `0x072575D44F95C04d769C63d5a8D78B7e324c5021`        |

> 🔐 All addresses are immutable, verified on-chain, and consistent with the current frontend interface.

---

## ⚙️ Contract Responsibilities

Each deployed UtopiaSwap contract:

- Receives user swap transactions
- Executes the pre-selected route provided by the BRT
- Interacts with external DEX contracts for final swap execution
- Emits events for swap activity and tracking
- Records the **trade volume per user** (in USD-equivalent points)

This architecture ensures that each swap is accurately reflected in the platform's reward or loyalty systems without adding computation overhead to the smart contracts.

---

## 🧠 Off-Chain Routing

The heavy computation for best route calculation (slippage, gas, liquidity analysis) is done **off-chain** by the BRT engine. When a user initiates a trade:

1. The frontend fetches the best route from the BRT.
2. The selected path and input data are sent to the UtopiaSwap contract.
3. The contract executes the swap as instructed, without needing to recalculate logic on-chain.

This hybrid model improves performance, reduces gas costs, and makes the system more flexible and extensible.

---

## 📈 User Swap Tracking

- Each contract tracks the **dollar-equivalent value of swaps per user**.
- This is done via emitted events and lightweight on-chain point storage.
- These points may be used in future for:
  - Loyalty rewards
  - Airdrops
  - Governance weight
  - Protocol fee rebates

> Example: Swapping $500 worth of tokens on Optimism will give you 500 points recorded in that chain’s Utopia contract.

## 🧱 Future Deployments

Chains currently under consideration for future support:

- Arbitrum
- Avalanche
- zkSync Era
- Scroll

Stay tuned via our announcements and dev blog for updates.

---

> Each UtopiaSwap deployment acts as a lightweight, high-speed gateway to on-chain liquidity, while remaining tightly integrated with our off-chain optimization engine.
