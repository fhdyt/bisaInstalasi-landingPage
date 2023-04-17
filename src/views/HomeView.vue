<template>
  <!-- <HeaderSection /> -->
  <HeroSection />
  <IntroSection />
  <ServiceSection />
  <ClientSection />
</template>

<script>
// @ is an alias to /src
// import HeaderSection from "../components/Header.vue";
import HeroSection from "../components/Hero.vue";
import IntroSection from "../components/Intro.vue";
import ClientSection from "../components/Client.vue";
import ServiceSection from "../components/Service.vue";
export default {
  name: "HomeView",
  components: {
    // HeaderSection,
    HeroSection,
    IntroSection,
    ClientSection,
    ServiceSection,
  },
  mounted() {
    document.title = "Bisa Intalasi";
  },
};
</script>
