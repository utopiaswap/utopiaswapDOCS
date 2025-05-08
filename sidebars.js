
/**
 *  @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "UtopiaSwap",
      link: { type: "doc", id: "welcome" }, // makes the category label link to a doc
      collapsed: false, // always show the children
      items: [
        { type: "doc", id: "general/overview", label: "What is Utopiaswap?" },
        {
          type: "category",
          label: "🏗️Architecture", // Parent category for "Architecture"
          collapsed: false, // Make sure the child sections are visible
          items: [
            {
              type: "doc",
              id: "Architecture/SystemInteraction",
              label: "System Interactions"
            },
            {
              type: "doc",
              id: "Architecture/ChainIntegrationLayer",
              label: "Chain Interaction Layer"
            },
            {
              type: "doc",
              id: "Architecture/BestRateTunnel",
              label: "Best Rate Tunnel (BRT)"
            },
            {
              type: "doc",
              id: "Architecture/LiquiditySources",
              label: "Liquidity Sources"
            },
            {
              type: "doc",
              id: "Architecture/SmartContracts",
              label: "Deployments"
            },
            { type: "doc", id: "Architecture/Security", label: "Security" },
          ],
        },
        {
          type: "category",
          label: "💡Tutorials", // Parent category for "Architecture"
          collapsed: false, // Make sure the child sections are visible
          items: [
            {
              type: "doc",
              id: "Tutorials/Swap",
              label: "Make your first swap",
            },
            {
              type: "doc",
              id: "Tutorials/Bridge",
              label: "Bridge tokens",
            },
            {
              type: "doc",
              id: "Tutorials/Earn",
              label: "Earn",
            },
          ],
        },
        { type: "doc", id: "general/Airdrop", label: "🪂Airdrop" },
        { type: "doc", id: "general/Roadmap", label: "🧭Roadmap" },
      ],
    },
  ],
};

export default sidebars;
