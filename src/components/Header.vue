<template>
  <nav
    class="w-full sticky top-0 z-50 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link to="/">
        <a href="#" class="flex items-center">
          <img
            src="../assets/bisainstalasi.png"
            class="h-6 mr-3"
            alt="Flowbite Logo"
          />
        </a>
      </router-link>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 ml-3 mt-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link to="/">
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Beranda</a
              >
            </router-link>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Layanan
              <svg
                class="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li v-for="i in layananData" :key="i._id.$oid">
                  <router-link
                    :to="{
                      name: 'LayananView',
                      params: { id: i.slug },
                      state: { title: i.title },
                    }"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >{{ i.title }}</a
                    >
                  </router-link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <router-link to="/kontak">
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Kontak</a
              ></router-link
            >
          </li>
          <li>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-white border rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white bg-orange-600 hover:bg-orange-700"
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src
import { initDropdowns } from "flowbite";
import layanan from "../assets/data/layanan.json";
export default {
  name: "HeaderSection",
  data() {
    return {
      layananData: layanan,
    };
  },
  mounted() {
    initDropdowns();
  },
};
</script>
