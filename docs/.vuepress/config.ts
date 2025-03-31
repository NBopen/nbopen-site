import { container } from "@mdit/plugin-container";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { path } from "vuepress/utils";
import theme from "./theme.js";
import { getAllFrontmatter } from "./getAllFrontmatter.js";

import ElementPlus from 'unplugin-element-plus/vite'



export default defineUserConfig({
  title: "开源宁波(NBopen)社区",
  description: "宁波开源社区",
  shouldPrefetch: false,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/NBopen.svg",
      },
    ],
    [
      "script",
      { src: "//at.alicdn.com/t/c/font_4865960_b2fw4herhsb.js", async: true },
    ],
    // ["script", { src: "/js/baidu.js" ,"async":true}],
    ["script", { src: "/js/gtag.js", async: true }],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y8G30ZWCYE');
    `,
    ],
    // ["script", { src: "https://cdn.wwads.cn/js/makemoney.js" }],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  

  bundler: viteBundler({
    viteOptions:{
      plugins: [
        ElementPlus()
      ],
      ssr: {
        noExternal: ['workbox-window', /vue-i18n/, /element-plus/],
      },
    },
    vuePluginOptions: {
      
    },
    
  }),

  theme,

  pagePatterns: ["**/*.md", "!*.snippet.md", "!.vuepress", "!node_modules"],

  alias: {
    "@theme-hope/layouts/Layout": path.resolve(import.meta.dirname, "./layouts/Layout.vue",),
    "@theme-hope/components/PageFooter": path.resolve(__dirname, "./components/PageFooter.vue"),
    "@SiteSection": path.resolve(__dirname, "./components/SiteSection.vue"),
    "@ProjectList": path.resolve(__dirname, "./components/ProjectList.vue"),
    "@Join": path.resolve(__dirname, "./components/Join.vue")
  },

  plugins: [
    getAllFrontmatter,
  ],
  
  extendsMarkdown: (md) => {
    md.use(container, {
      name: "hint",
      openRender: (tokens, index, _options) => {
        const info = tokens[index].info.trim().slice(4).trim();
        let style = "background:#262626";

        if (info.indexOf("style") > -1) {
          style = info.split("style=")[1].split('"')[1];
        }

        const title = info.replace('style="' + style + '"', "") || "Hint";
        return `<div class="custom-container hint" style="${style}">\n<p class="custom-container-title">${title}</p>\n`;
      },
    });
  },
});
