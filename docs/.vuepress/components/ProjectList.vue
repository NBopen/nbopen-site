<template>
    <div class="bg-default">
      <div class="project-container">
        <h1 class="title">宁波市开源“火种计划”</h1>
        <p class="description">汇聚宁波市本地优质项目，提供针对项目成长全流程的扶持计划。加入本计划，见证你的项目从“星星火种”到“燎原之火”</p>
      </div>
    </div>

  <div class="project-main">
    <el-row class="mb-4">
      <el-radio-group v-model="menuType" @change="menuTypeChange">
        <el-radio-button value="按技术领域" label="按技术领域"/>
        <el-radio-button value="按业务功能" label="按业务功能"/>
      </el-radio-group>
    </el-row>
  <el-row class="row-bg">
    <el-col :span="3" class="content-aside">
      <el-menu :collapse="false"
               default-active="-1"
               class="el-menu-vertical-demo"
               v-model="targetMenu"
               unique-opened="true"
      >
        <el-menu-item 
            index="-1"    @click="currentTag = 'All'"><el-icon><ColorIcon icon="all" /></el-icon>全部</el-menu-item>
        
        <template v-for="menu in targetMenu" >
          <el-menu-item v-if="menu.subMenus.length===0"
                        :index="menu.index" :key="menu.key"
                        @click="currentTag = menu.key">
            
            <el-icon><ColorIcon :icon="menu.icon" /></el-icon>{{menu.text}}</el-menu-item>
          <el-sub-menu
              v-if="menu.subMenus && menu.subMenus.length"
              :index="menu.index"
              :key="menu.index">
            <template #title>
              <el-icon><ColorIcon :icon="menu.icon" /></el-icon>
              
              
              <span>{{menu.text}}</span>
            </template>
            <el-menu-item v-for="subMenu in menu.subMenus"
                          :index="subMenu.index" :key="subMenu.key"
                          @click="currentTag = subMenu.key"
            >{{subMenu.text}}</el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="21" class="project-content-main">
      <template v-if="filteredSectionDetail.length">
        <div class="cards">
          <div
              v-for="obj in filteredSectionDetail"
              :key="obj.title"
              class="card">
<!--            <img class="cover" :src="obj.cover" :alt="obj.title" />-->
            <el-row >
<!--              <a class="project-title"  @click="goToDetail(obj.url)">{{ obj.title }}</a>-->
              <span class="project-title">{{ obj.title }}</span>
              <el-tag
                  v-if="obj.badge"
                  :type="obj.badge === 'New' ? 'success' : obj.badge === '热门' ? 'danger': 'primary'"

                  class="mx-1"
                  effect="dark"
                  round
                  size="small"
              >{{obj.badge}}</el-tag>
            </el-row>
              <div class="description">
                {{obj.description}}
              </div>
            <div class="author-info">
              <div class="author-name">作者: {{ obj.author }}</div>
            </div>
            <div class="repo-info">
              <a v-for="repo in obj.repos"  :href="repo" target="_blank"><ColorIcon :icon="repo.indexOf('github')!= -1 ? 'github': repo.indexOf('gitee')!= -1?'gitee' : ''"  /></a>
            </div>
          </div>
        </div>
      </template>
      <div v-else class="no-data" style="">
        {{
          "这是一个待开发的领域，欢迎加入我们共同创造！"
        }}
    </div>
    </el-col>
  </el-row>
  </div>

  
  
</template>



<script setup lang="ts">
import {ElSubMenu, ElMenu, ElMenuItem, ElTag, ElIcon,ElRow,ElCol,ElButton,ElRadioGroup,ElRadioButton} from 'element-plus'

import { ref, reactive, watchEffect, computed, onMounted } from "vue";
import { useClientData } from "vuepress/client";
import {Project, Projects, projectMenu,projectMenuByBizType} from "../composables/section/index.js";
const { siteData } = useClientData();
let targetMenu = ref(projectMenu)
const allPagesFrontmatter = siteData.value.frontmatter;

const props = defineProps({ title: String });

const menuType = ref('按技术领域')
const currentTag = ref("All");
let sectionDetail: Project[] = reactive([]);

function menuTypeChange (value) {
   if(value === '按技术领域'){
     targetMenu.value = projectMenu;
   } else {
     targetMenu.value = projectMenuByBizType;
   }
}
// 初始化分组对象
const groupedPages: Projects = {
  项目: [],
};

for (const frontmatter of allPagesFrontmatter) {
  if (frontmatter?.head.length > 0) {
    const headName = frontmatter.head[0][1].name;
    if (groupedPages[headName] !== undefined ) {
      groupedPages[headName].push({
        cover: frontmatter.cover,
        tag: frontmatter.tag,
        title: frontmatter.title,
        description: frontmatter.description,
        badge: frontmatter.badge,
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
        repos: frontmatter.repos,
        date: formatDate(frontmatter.date),
        sort: frontmatter.sort,
      });
    }
  }
}
for (const key in groupedPages) {
  groupedPages[key].sort(
      //按照 sort 越大排越前面，空排最后面
      (a, b) => (b.sort ?? 0) - (a.sort ?? 0)
      
  );
}

const filteredSectionDetail = computed(() => {
  if (currentTag.value === "All") {
    return sectionDetail;
  }
  return sectionDetail.filter((obj: Project) =>
      obj.tag?.includes(currentTag.value)
  );
});


watchEffect(() => {
  if (props.title !== undefined) {
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
<style>
.vp-page-title {
  display: none;
}

.project-container {
  height: 422px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  background: url("/img/banner/project.png") no-repeat;
  
  background-size: cover;
  background-position: center;

  @media (min-width: 960px) {
    padding-left: 16rem;
  }

  h1 {
    margin: 0;
    color: #171b25;
    font-size: 44px;
    font-weight: 900;
  }

  .title{
    font-size: 48px;
    font-weight: bolder;
  }
  .description {
    max-width: 700px;
    padding-right: 52%;
    color: #61687c;
    font-size: 26px;
    line-height: 28px;
  }
}

.project-main{
  margin-top: 10px;
}
.project-content-main {
  padding: 10px 0 10px 10px;
  

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 0 10vw;
    }

    @media (min-width: 840px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .no-data {
    font-size: 22px;
    color: #2c3e50;
    font-weight: bold;
    text-align: center;
    margin: 120px 20px 0;
  }

  .card {
    padding: 16px;
    border-radius: 8px;
    background: #f3f3f3;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    gap: 16px;
    cursor: pointer;
  }

  .cover {
    height: 190px;
    align-self: stretch;
    border-radius: 8px;
    object-fit: contain;
  }
  

  .project-title {
    color: #3e3232;
    font-size: 28px;
    font-weight: 700;

    &:hover {
      opacity: 0.66;
    }
  }
}
</style>