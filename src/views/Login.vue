<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          Selamat Datang di Situs Pemabyaran Pajak Pemotongan Hewan
        </h1>
        <p class="leading-relaxed mt-4">
          Semua pajak yang Anda bayarkan melalui situs ini akan otomatis
          terbaayarkan ke Pemerintah Daerah.
        </p>
      </div>
      <div
        class="
          lg:w-2/6
          md:w-1/2
          bg-gray-100
          rounded-lg
          p-8
          flex flex-col
          md:ml-auto
          w-full
          mt-10
          md:mt-0
        "
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Masuk ke Akun Anda
        </h2>
        <form @submit.prevent="submitLogin">
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email:</label
            >
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <div class="relative mb-4">
            <label for="password" class="leading-7 text-sm text-gray-600"
              >Password:</label
            >
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <button
            class="
              text-white
              bg-indigo-500
              border-0
              py-2
              px-8
              focus:outline-none
              hover:bg-indigo-600
              rounded
              text-lg
              w-full
              font-bold
            "
          >
            <font-awesome-icon :icon="['fa', 'sign-in-alt']" /> Masuk
          </button>
        </form>
        <p class="text-xs text-gray-500 mt-3">
          Belum mempunyai akun? Silahkan mendaftar
          <router-link to="/register"><b>di sini</b></router-link
          >.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitLogin() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
