<script setup lang="ts">
import { usePageData, usePageFrontmatter } from "vuepress/client";

import CommonWrapper from "@theme-hope/components/CommonWrapper";
import HomePage from "@theme-hope/components/HomePage";
import NormalPage from "@theme-hope/components/NormalPage";
import SkipLink from "@theme-hope/components/SkipLink";
import { FadeSlideY } from "@theme-hope/components/transitions/index";

import type { ThemePageFrontmatter } from "vuepress-theme-hope";

const frontmatter = usePageFrontmatter<ThemePageFrontmatter>();
const page = usePageData();
//
</script>
<template>
  <SkipLink />
  <CommonWrapper>
    <template #default>
      <HomePage v-if="frontmatter.home" />
      <FadeSlideY v-else>
        <NormalPage :key="page.path" />
      </FadeSlideY>
    </template>
  </CommonWrapper>
</template>
