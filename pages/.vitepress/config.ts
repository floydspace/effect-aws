import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Effect AWS",
  description: "Use AWS services with Effect",

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/docs/": sidebar(),
    },

    editLink: {
      pattern: "https://github.com/floydspace/effect-aws/edit/main/pages/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/floydspace/effect-aws" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Victor Korzunin",
    },

    search: {
      provider: "local",
    },
  },
});

function nav() {
  return [
    { text: "Docs", link: "/docs/what-is", activeMatch: "/docs/" },
    { text: "API Reference", link: "https://floydspace.github.io/effect-aws" },
  ];
}

function sidebar() {
  return [
    {
      text: "Introduction",
      collapsible: true,
      items: [
        { text: "What is Effect AWS?", link: "/docs/what-is" },
        { text: "Getting Started", link: "/docs/getting-started" },
      ],
    },
  ];
}
