import { defineClientConfig } from "vuepress/client";

import { ColorIcon } from "./components/ColorIcon.js";
import CarouselComponent from "./components/MyCarousel.vue";
import SocialLink from "./components/SocialLink.js";
import PageFooter from "./components/PageFooter.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ColorIcon", ColorIcon);
    app.component("MyCarousel", CarouselComponent);
    app.component("SocialLink", SocialLink);
    app.component("PageFooter", PageFooter);
  },
});
