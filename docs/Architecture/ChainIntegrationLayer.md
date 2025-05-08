---
title: Chain Integration Layer
sidebar_position: 3
---

# 🌐 Chain Integration Layer

UtopiaSwap supports multiple EVM-compatible chains and is built with a modular, extensible integration layer that enables seamless access to liquidity across different networks. This layer abstracts the complexity of cross-chain environments while maintaining security and performance.

---

## 🧬 Supported Networks

UtopiaSwap currently supports:

- Ethereum (Mainnet)
- Polygon (POS)
- BNB Smart Chain
- Base
- Optimism
- Celo

More chains will be integrated as the platform evolves, prioritizing networks with strong DeFi ecosystems and reliable infrastructure.

---

## 🔌 Integration Approach

Each supported chain is integrated through a **chain adapter module**, which standardizes and isolates chain-specific logic. This includes:

- Native token and gas handling
- RPC node management
- Token address and decimal normalization
- Chain-specific quirks (e.g., nonce behavior, confirmations)

These adapters communicate with the routing layer, smart contracts, and frontend via a shared interface.

---

## 🧱 Architecture (Horizontal Flow)

| 🧑‍💻 Frontend UI | 🔌 Chain Adapter Interface | 🧩 Chain Adapter (ETH/POLY/etc.) | 🛠️ Smart Contracts | 💧 Liquidity Sources |
|------------------|-----------------------------|----------------------------------|---------------------|-----------------------|
| User interacts with UI and selects chain/token | Normalized gateway for chain logic | Handles gas, RPC, decimals, token mapping | Executes routed swaps | DEXs like Uniswap, Balancer, etc. |


---

## 🔄 Runtime Chain Switching

- Users can seamlessly switch chains using their wallet (e.g., MetaMask).
- UtopiaSwap detects the selected chain and automatically updates:
  - RPC endpoints
  - Available tokens
  - Supported DEX aggregators
- No page reload or reconnection needed.

---

## 🧠 Chain Metadata Management

Each chain is defined in a metadata registry, which includes:

- Chain ID
- Native token symbol
- Wrapped native token address (e.g., WETH, WBNB)
- Explorer URL
- Contract addresses
- Enabled features (e.g., gas estimation logic, slippage tuning)

---

## 🔒 Security Considerations

- RPC failover and fallback nodes are configured to avoid downtime.
- Strict validation of token lists and contract responses.
- Per-chain gas limits and error handling strategies prevent failed transactions from affecting the broader platform.

---

## 🛠 Adding New Chains

Adding a new chain to UtopiaSwap requires:

1. Creating a new adapter module
2. Deploying contracts to the new chain
3. Registering token pairs and DEX routes
4. Updating frontend chain registry
5. Running test scenarios for routing, slippage, and edge cases

---

> For detailed contract deployments per chain, see [Smart Contracts](./SmartContracts).
