---
title: 新闻
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
breadcrumb: false
sidebar: false
headerDepth: 0
toc: false
---

<script setup lang="ts">
import SiteSection from "@SiteSection";
import { usePageFrontmatter } from "vuepress/client";
import { ref, onBeforeMount } from "vue";
import type { ThemeHopePageFrontmatter } from "vuepress-theme-hope";

const frontmatter = usePageFrontmatter<ThemeHopePageFrontmatter>();

</script>

<SiteSection :title="frontmatter.title"/>

<style scoped lang="scss">
.theme-hope-content {
  margin: 30px;
  padding: 30px;
  position: relative;
  z-index: 1;
    max-width: 100%;
  top: -8.25rem;
}


</style>
