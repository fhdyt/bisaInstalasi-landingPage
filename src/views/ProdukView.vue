<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="pt-8 px-4 lg:pt-10 lg:px-6">
      <div v-if="this.isLoading">
        <SkeletonContentProduk></SkeletonContentProduk>
      </div>
    </div>
    <div
      v-for="i in produk"
      :key="i._id"
      class="pt-8 px-4 max-w-max lg:pt-10 lg:px-6 flex flex-col md:flex-row gap-5"
    >
      <img
        class="rounded-lg h-96 w-96 object-cover"
        :src="apiBaseUrl + '/' + i.thumbnail"
        alt=""
      />
      <div class="text-left mb-8 lg:mb-16">
        <h2
          class="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ i.title }}
        </h2>
        <p
          class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
        >
          {{ i.desc }}
        </p>
      </div>
    </div>

    <div
      class="py-4 px-4 mx-auto max-w-screen-xl lg:py-5 lg:px-6 max-h-max"
    ></div>
  </section>
</template>
<script>
import SkeletonContentProduk from "../components/SkeletonContentProduk.vue";
import axios from "axios";
export default {
  name: "ProdukView",
  components: {
    SkeletonContentProduk,
  },
  data() {
    return {
      isLoading: true,
      id: "",
      produk: [],
      apiBaseUrl: process.env.VUE_APP_API_URL,
    };
  },
  mounted() {
    this.id = window.history.state.id;
    console.log(this.id);
    this.fetchData();
  },
  methods: {
    async fetchData() {
      await axios
        .get(process.env.VUE_APP_API_URL + "/produk/" + this.id + "")
        .then((response) => {
          this.isLoading = false;
          document.title = response.data[0].title;
          this.produk = response.data;
          console.log(this.produk);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
