<style src="./assets/tailwind.css"></style>
<template>
  <HeaderSection></HeaderSection>
  <router-view :key="$route.fullPath" />
  <FooterSection></FooterSection>
  <button
    onclick="buttonHandler()"
    title="Contact Sale"
    class="fixed z-90 bottom-10 right-8 bg-green-600 w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-2xl hover:bg-green-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
  >
    &#9993;
  </button>
</template>

<script>
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";

import HeaderSection from "../src/components/Header.vue";
import FooterSection from "../src/components/Footer.vue";
export default {
  components: {
    HeaderSection,
    FooterSection,
  },
  mounted() {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

/* nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
