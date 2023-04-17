<template>
  <!-- <HeaderSection></HeaderSection> -->
  <section class="bg-white dark:bg-gray-900">
    <div class="pt-8 px-4 mx-auto max-w-screen-xl lg:pt-10 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ this.title }}
        </h2>
        <p
          class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
        >
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
    </div>

    <div class="py-4 px-4 mx-auto max-w-screen-xl lg:py-5 lg:px-6 max-h-max">
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li class="mr-2" role="presentation">
            <button
              class="md:text-2xl inline-block p-4 border-b-2 rounded-t-lg"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Jasa
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              class="md:text-2xl inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Produk
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent ">
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <!-- <div><SkeletonContent></SkeletonContent></div> -->
          <div v-if="this.isLoading"><SkeletonContent></SkeletonContent></div>
          <div class="grid">
            <div
              v-for="i in jasa"
              :key="i._id"
              class="h-full mb-4 p-4 max-w-max container"
            >
              <div>
                <img
                  :src="apiBaseUrl + '/' + i.thumbnail"
                  class="h-28 w-28 md:h-72 md:w-72 float-left pr-4 pb-4 object-cover"
                />
              </div>
              <div>
                <p
                  class="text-gray-900 dark:text-white tracking-tight text-left text-xl md:text-2xl font-extrabold mb-2"
                >
                  {{ i.title }}
                </p>
                <p
                  class="text-gray-900 dark:text-gray-400 text-left text-sm md:text-lg"
                >
                  {{ removeTags(i.content) }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="i in produk"
              :key="i._id"
              class="max-w-sm mb-4 flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600"
            >
              <router-link
                :to="{
                  name: 'ProdukView',
                  params: { id: i.slug },
                  state: { id: i._id },
                }"
              >
                <a href="#" class="">
                  <img
                    class="rounded-t-lg h-96 w-96 object-cover"
                    :src="apiBaseUrl + '/' + i.thumbnail"
                    alt=""
                  />
                </a>

                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                      {{ i.title }}
                    </h5>
                  </a>
                </div></router-link
              >
            </div>
          </div>

          <div v-if="this.isLoading"><SkeletonContent2></SkeletonContent2></div>
          <!-- <div><SkeletonContent></SkeletonContent></div> -->
          <!-- <div
            v-for="i in produk"
            :key="i._id"
            class="items-center bg-gray-100 rounded-lg shadow sm:flex dark:bg-gray-700 dark:border-gray-100 mb-4"
          >
            <div class="md:w-40 md:h-auto">
              <a href="#">
                <img
                  class="object-cover h-full w-full rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                  :src="apiBaseUrl + '/' + i.thumbnail"
                  alt="Bonnie Avatar"
                />
              </a>
            </div>
            <div class="p-5">
              <h3
                class="md:text-left text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <a href="#">{{ i.title }}</a>
              </h3>
              <p
                class="md:text-left mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"
              >
                Bonnie drives the technical strategy of the flowbite platform
                and brand.
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
  <!-- <FooterSectsion></FooterSectsion> -->
</template>
<script>
import { initTabs } from "flowbite";
import SkeletonContent from "../components/SkeletonContent.vue";
import SkeletonContent2 from "../components/SkeletonContent2.vue";
import axios from "axios";
export default {
  name: "LayananView",
  components: {
    // HeaderSection,
    // FooterSection,
    SkeletonContent,
    SkeletonContent2,
  },
  data() {
    return {
      title: "",
      isLoading: true,
      produk: [],
      jasa: [],
      slug: "",
      apiBaseUrl: process.env.VUE_APP_API_URL,
    };
  },
  mounted() {
    initTabs();
    this.title = window.history.state.title;
    this.slug = this.$route.params.id;
    console.log(this.slug);
    this.fetchAllData();
    document.title = this.title;
  },
  methods: {
    removeTags(text) {
      return text.replace(/<[^>]+>/g, "");
    },
    async fetchAllData() {
      // this.$isLoading(true);
      await axios
        .get(process.env.VUE_APP_API_URL + "/layanan/" + this.slug + "")
        .then((response) => {
          this.isLoading = false;
          this.jasa = response.data.jasa;
          this.produk = response.data.produk;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          // this.$isLoading(false);
        });
    },
  },
};
</script>
