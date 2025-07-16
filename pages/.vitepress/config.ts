import { defineConfig } from "vitepress";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";

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

  markdown: {
    config: (md) => {
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [
      groupIconVitePlugin(),
    ],
  },

  ignoreDeadLinks: true, // Included MD files contain links which designed for GitHub
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
      ],
    },
    {
      text: "Services",
      collapsible: true,
      items: [
        { text: "Getting Started", link: "/docs/getting-started" },
        { text: "Codegen", link: "/docs/codegen" },
      ],
    },
    {
      text: "Packages",
      collapsible: true,
      items: [
        { text: "S3", link: "/docs/s3" },
        { text: "Lambda", link: "/docs/lambda" },
        { text: "DynamoDB", link: "/docs/dynamodb" },
        { text: "Secrets Manager", link: "/docs/secrets-manager" },
        { text: "Systems Manager", link: "/docs/ssm" },
        { text: "Http Handler", link: "/docs/http-handler" },
      ],
    },
    {
      text: "Powertools",
      collapsible: true,
      items: [
        { text: "Logger", link: "/docs/logger" },
        { text: "Tracer", link: "/docs/tracer" },
      ],
    },
  ];
}
