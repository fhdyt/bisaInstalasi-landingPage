<template>
  <section class="bg-white dark:bg-gray-900 antialiased">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Layanan
        </h2>
        <p
          class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
        >
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>

      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://picsum.photos/700/300"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div
              class="w-full absolute bottom-14 text-xl md:text-4xl font-bold left-0 right-0 text-white flex justify-center items-center"
            >
              <p>Absolute child</p>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://picsum.photos/700/300"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div
              class="w-full absolute bottom-14 text-xl md:text-4xl font-bold left-0 right-0 text-white flex justify-center items-center"
            >
              <p>Absolute child</p>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://picsum.photos/700/300"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div
              class="w-full absolute bottom-14 text-xl md:text-4xl font-bold left-0 right-0 text-white flex justify-center items-center"
            >
              <p>Absolute child</p>
            </div>
          </div>
        </div>
        <!-- Slider indicators -->
        <div
          class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
        >
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { initCarousels } from "flowbite";
export default {
  name: "ServiceSection",
  mounted() {
    initCarousels();
  },
};
</script>
