---
title: 项目
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
breadcrumb: false
headerDepth: 0
toc: false
---

<script setup lang="ts">
import ProjectList from "@ProjectList";
import { usePageFrontmatter } from "vuepress/client";

const frontmatter = usePageFrontmatter<ThemeHopePageFrontmatter>();

</script>

<ProjectList :title="frontmatter.title"/>

<style scoped lang="scss">
.vp-page-title {
    max-height: 0;
    margin-left: 50px;
}

.theme-hope-content {
  margin: 30px;
  padding: 30px;
  max-width: 100%;
  position: relative;
  z-index: 1;
  top: -9.25rem;
}

</style>
