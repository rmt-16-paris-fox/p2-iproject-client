<template>
  <header class="text-gray-600 body-font bg-purple-500">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <router-link
        to="/home"
        class="
          flex
          title-font
          font-medium
          items-center
          text-gray-900
          mb-4
          md:mb-0
        "
      >
        <span
          class="iconify"
          data-icon="file-icons:v"
          data-width="32"
          data-height="32"
        ></span>
        <span class="ml-3 text-xl">IProject: Victor</span>
      </router-link>
      <nav
        class="
          md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400
          flex flex-wrap
          items-center
          text-base
          justify-center
        "
      >
        <a class="cursor-pointer mr-5 hover:text-gray-900">History Payment</a>
      </nav>
      <button
        @click="logout"
        class="
          items-center
          bg-gray-100
          border-0
          py-1
          px-3
          focus:outline-none
          hover:bg-gray-200
          rounded
          text-base
          mt-4
          md:mt-0
        "
      >
        Keluar <font-awesome-icon :icon="['fa', 'sign-out-alt']" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
</style>