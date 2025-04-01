import { path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar.js";
import {  zhSidebar } from "./sidebar.js";
import { getAllFrontmatter } from "./getAllFrontmatter.js";

export default hopeTheme(
  {
    hostname: "https://nbopen.github.io/nbopen-site",
    logo: "/img/nbopen.svg",

    repo: "https://github.com/NBopen\n",
    docsDir: "docs",
    docsBranch: "master",

    copyright: "Copyright © 2025-present NBopen",
    displayFooter: true,

    pageInfo: false,
    fullscreen: false,
    editLink: false,
    contributors: false,

    darkmode: "disable",
    locales: {
      "/": {
        navbar: zhNavbar,
        sidebar: zhSidebar,
      },
    },
  navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "SocialLink", "Repo", "Outlook", "Search"],
  },

    markdown: {
      highlighter: {
        type: "shiki",
        lineNumbers: 10,
      },
      align: true,
      chartjs: true,
      component: true,
      include: {
        resolvePath: (file) =>
          file.startsWith("@src")
            ? file.replace("@src", path.resolve(import.meta.dirname, ".."))
            : file,
      },
      mark: true,
      tasklist: true,
      imgLazyload: true,
      imgSize: true,
      tabs: true,
      codeTabs: true,
    },

    plugins: {
      components: {
        components: [
          "Badge",
          "BiliBili",
          "SiteInfo",
          "VPBanner",
          "VPCard",
          "VidStack",
        ],
      },
      search:{
         locales: {
           '/': {
             placeholder: '',
           },
         },
       }
       ,
        
      // docsearch: {
      //   appId: "6CYP6DKPIT",
      //   apiKey: "35f9f152a5203e42231a73eb0de1546d",
      //   indexName: "api-buddy",
      //   locales: {
      //     "/en/": {
      //       placeholder: "Search docs",
      //       translations: {
      //         button: {
      //           buttonText: "Search docs",
      //         },
      //       },
      //     },
      //   },
      // },

      icon: {
        assets: "//at.alicdn.com/t/c/font_4865960_n310hlksm.css",
      },

      notice: [
        
      ],
    },
  },
  { custom: true },
);
