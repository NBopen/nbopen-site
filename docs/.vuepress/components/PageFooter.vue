<script setup lang="ts">
import { computed, onMounted } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import { type ThemeHopePageFrontmatter } from "vuepress-theme-hope/client";

import { useFooterLocale } from "../composables/index.js";
let webCn: boolean = false;
const frontmatter = usePageFrontmatter<ThemeHopePageFrontmatter>();

onMounted(() => {
  webCn = document.location.host.includes("dromara.org.cn");
  const element = document.getElementById("footer-bt");
  if (element) {
    element.innerText = webCn ? " | 京ICP备2024091971号" : "";
  }
});
const linkOption = computed(() => [
  {
    title: "RESOURCES",
    links: [
      { name: "Github", href: "https://github.com/NBopen" },
      { name: "Gitee", href: "https://gitee.com/NBopen" }
    ]
  },
  
]);

const qrcodeOption = computed(() => [
  { title: "微信公众号", name: "qrcode_wx" },
]);
</script>

<template>
  <footer class="page-footer">
    <!--
    <div v-if="frontmatter.home" class="container">
      <div class="links">
        <template v-for="item in linkOption" :key="item.title">
          <div class="cate">
            <h2 class="cate-title">{{ item.title }}</h2>
            <a
              class="link"
              v-for="link in item.links"
              :key="link.name"
              :href="link.href"
              >{{ link.name }}</a
            >
          </div>
        </template>
      </div>
     
      
      <div class="qrcode">
        <div v-for="item in qrcodeOption" :key="item.name">
          <a
            class="qrcode-desc"
            href="javascript:void(0);"
          >
            <img class="qrcode_img" src="/img/qrcode_wx.webp" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              t="1722260304412"
              class="icon"
              viewBox="0 0 1152 1024"
              version="1.1"
              p-id="4320"
            >
              <path fill="#fff"
                d="M770.4 335.2c12.8 0 25.2 0.6 37.6 2.2C774.8 180.6 606.6 64 415.4 64 201 64 26 209.6 26 394.8c0 106.8 58.6 195 155.8 263.2l-38.6 117.2 136-68.2c48.8 9.6 87.6 19.4 136.4 19.4 12.4 0 24.2-0.6 36.6-1.6-8-25.8-12.4-53.2-12.4-81.6-0.2-169.8 145.8-308 330.6-308z m-209-105.8c29 0 48.4 19.4 48.4 48.8 0 29-19.4 48.4-48.4 48.4-29.6 0-58.6-19.4-58.6-48.4 0.2-29.4 29.2-48.8 58.6-48.8z m-272.8 97.2c-29 0-58.6-19.4-58.6-48.4 0-29.6 29.6-48.8 58.6-48.8 29.6 0 48.8 19.4 48.8 48.8 0 29.2-19.2 48.4-48.8 48.4zM1126 638.8c0-155.8-155.8-282.6-330.8-282.6-185.4 0-330.8 126.8-330.8 282.6S610 921.4 795.2 921.4c38.6 0 77.8-10.2 117.2-19.8l106.8 58.6-29.6-97.2C1068 804.2 1126 726.4 1126 638.8z m-438.2-49c-19.4 0-38.6-19.4-38.6-39.2 0-19.4 19.4-38.6 38.6-38.6 29.6 0 48.8 19.4 48.8 38.6 0 20-19.4 39.2-48.8 39.2z m214.2 0c-19.4 0-38.6-19.4-38.6-39.2 0-19.4 19.4-38.6 38.6-38.6 29 0 48.8 19.4 48.8 38.6 0.2 20-19.8 39.2-48.8 39.2z"
                p-id="4321"
              />
            </svg>
            <p class="qrcode-desc">{{ item.title }}</p>
          </a>
        </div>
      </div>
    </div>
    -->
    <div class="copyright">
      <div>
        <h3 class="foot-org-title">开源宁波（NBopen）社区</h3>
        <p class="foot-org-slogan">宁波官⽅开源宣传和活动阵地，欢迎各位和我们共建开源⽣态体系！</p>
      </div>
      <p>
        Copyright &copy;2025-{{ new Date().getFullYear() }}&nbsp;<a href="/">@OpenNb.org. All Rights Reserved</a>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.page-footer {
  background-color: #18181A;

  a {
    color: inherit;
  }

  .foot-org-title,.foot-org-slogan {
    color: #fff;
    text-align: center;
  }
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 32px 24px;
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }

  .links {
    display: flex;
    flex-wrap: wrap;

    > .cate {
      margin-right: 70px;
    }
  }

  .cate-title {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin: 12px 0;
  }

  .link {
    display: block;
    margin-right: 24px;
    margin-bottom: 10px;
    color: #e2e5ea;
    font-size: 14px;

    @media (max-width: 568px) {
      display: inline-block;
    }
  }

  a:hover .qrcode_img,
  a:hover .mail {
    display: block;
    z-index: 10;
  }

  .qrcode_img,
  .mail {
    position: absolute;
    z-index: 1;
    bottom: 80px;
    width: 180px;
    height: auto;
    display: none;
    transform: translate(-45px, -90px);
    color: #000;
  }

  .icon {
    width: 60px;
    height: auto;
    transform: translateX(-3px);
    align-items: center;
  }

  .qrcode {
    position: relative;
    text-align: center;
    padding-right: 100px;
    border-right: none;
    margin-right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media (max-width: 719px) {
      flex-direction: column;
    }

    > div {
      width: 100px;
    }

    .qrcode-img {
      width: 100%;
    }

    .qrcode-desc {
      text-align: center;
      padding-right: 8px;
      padding-left: 8px;
      margin: 8px 0 16px;
      font-size: 14px;
      color: #fff;
    }
  }

  .copyright {
    padding: 12px;
    border-top: 1px solid #4f5c6d;

    > p {
      margin: 12px;
      text-align: center;
      font-size: 12px;
      color: #d5d7dc;
    }
  }
}
</style>
