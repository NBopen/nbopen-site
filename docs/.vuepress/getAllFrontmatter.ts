import { type PluginObject } from "vuepress";

export const getAllFrontmatter: PluginObject = {
  name: "get-all-frontmatter",

  extendsPage: (page, app) => {
    (app.siteData.frontmatter ??= []).push(page.data.frontmatter);
  }
};
