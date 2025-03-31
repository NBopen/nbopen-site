<template>
  <div class="news-activity-blog-section">
    <div class="bg-default">
      <div class="news-activity-blog-container">
        <h1 class="title">{{ title }}</h1>
        <p class="description">{{ option.DESC }}</p>
      </div>
    </div>
  </div>
  
  <main class="news-activity-blog-main">
    <h2 class="tag">标签</h2>
    <div class="buttons">
      <div v-for="item in TAGS" :key="item">
        <button
          :class="{ selected: currentTag === item, 'tag-button': true }"
          @click="currentTag = item"
        >
          {{ item }}
        </button>
      </div>
    </div>
    <template v-if="filteredSectionDetail.length">
      <div class="cards">
        <div
          v-for="obj in filteredSectionDetail"
          :key="obj.title"
          class="card"
          @click="goToDetail(obj.url)"
        >
          <div class="tag-items">
            <div v-for="tag in obj.tag" :key="tag" class="tag-item">
              #{{ tag }}
            </div>
          </div>
          <img class="cover" :src="obj.cover" :alt="obj.title" />

          <a class="title">{{ obj.title }}</a>
          <div class="author-info">
            <div class="author-name">{{ obj.author }}</div>
            <div class="time">{{ obj.date }}</div>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="no-data" style="">
      {{
        "这是一个待开发的领域，欢迎加入我们共同创造！"
      }}
    </div>
  </main>
</template>

<script setup lang="ts">
import '../styles/customPage.scss';

import { ref, reactive, watchEffect, computed, onMounted } from "vue";
import { useClientData } from "vuepress/client";
import {ActivityOption, GroupedSectionPage, GroupedSectionPages, newsOption} from "../composables/section/index.js";
const { siteData } = useClientData();

const allPagesFrontmatter = siteData.value.frontmatter;

const props = defineProps({ title: String });
let option: ActivityOption = reactive({
  DESC: ""
});

const currentTag = ref("All");
let sectionDetail: GroupedSectionPage[] = reactive([]);


// 初始化分组对象
const groupedPages: GroupedSectionPages = {
  新闻: [],
};

for (const frontmatter of allPagesFrontmatter) {
  if (frontmatter?.head.length > 0) {
    const headName = frontmatter.head[0][1].name; // 拿到每篇md文章frontmatter下meta的name属性
    // 如果是新闻、博客或活动，则添加到相应的数组中
    if (groupedPages[headName] !== undefined) {
      groupedPages[headName].push({
        cover: frontmatter.cover,
        tag: frontmatter.tag,
        title: frontmatter.title,
        url:
          extractPathFromURL(
            frontmatter.head
              .flat()
              .find(
                (item: { property: string, content: string }) =>
                  item.property === "og:url"
              ).content
          ) ?? "", // head的一个数组对象中包含url
        author: frontmatter.author,
        date: formatDate(frontmatter.date)
      });
    }
  }
}
for (const key in groupedPages) {
  groupedPages[key].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

const TAGS = [
  "All",
  "fastRequest",
];



const filteredSectionDetail = computed(() => {
  if (currentTag.value === "All") {
    return sectionDetail;
  }

  return sectionDetail.filter((obj: GroupedSectionPage) =>
    obj.tag?.includes(currentTag.value)
  );
});
const options = {
  新闻: newsOption,
};

watchEffect(() => {
  if (props.title !== undefined) {
    option = options[props.title as keyof typeof options];
    sectionDetail = groupedPages[props.title];
  }
});

function formatDate (inputDate: string): string {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// 从框架提供的url中拿到跳转路径
function extractPathFromURL (url: string): string | null {
  const match = url.match(/\/([^/]+\.html)$/);

  return match?.[1] ?? null;
}

// 跳转到博客详情
function goToDetail (url: string): void {
  location.href = url;
}
</script>

<style >
.vp-page-title {
  display: none;
}
</style>

