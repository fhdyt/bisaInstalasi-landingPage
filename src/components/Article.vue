<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Our Team
        </h2>
        <p
          class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
        >
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <div
          v-for="n in 6"
          :key="n"
          class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
        >
          <!-- <a href="#">
            <img
              class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
              src="https://picsum.photos/200"
              alt="Bonnie Avatar"
            />
          </a> -->
          <div class="md:w-auto md:h-auto">
            <a href="#">
              <img
                class="object-cover h-full w-full rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                src="https://picsum.photos/200"
                alt="Bonnie Avatar"
              />
            </a>
          </div>
          <div class="p-5">
            <h3
              class="md:text-left text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#">Bonnie Green</a>
            </h3>
            <p
              class="md:text-left mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"
            >
              Bonnie drives the technical strategy of the flowbite platform and
              brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ArticleSection",
};
</script>
