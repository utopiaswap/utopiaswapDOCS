// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DOCS",
  tagline: "Utopiaswap docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://utopiaswap.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/utopiaswapDOCS/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "utopiaswap", // Usually your GitHub org/user name.
  projectName: "DOCS", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // ← This removes the /docs prefix
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/utopiaswap/DOCS",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/utopLogo.png",
      navbar: {
        title: "Utopiaswap",
        logo: {
          alt: "Utopiaswap DOCS",
          src: "img/utopLogo.png",
          href: "https://utopiaswap.net",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "DOCS",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Architecture",
                to: "Architecture/SystemInteraction",
              },
              {
                label: "Tutorials",
                to: "Tutorials/Swap",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/utopiaswap",
              },
              {
                label: "X",
                href: "https://x.com/UtopiaSwap",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Swap",
                to: "/",
              },
              {
                label: "GitHub",
                href: "https://github.com/utopiaswap",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Utopiaswap, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
