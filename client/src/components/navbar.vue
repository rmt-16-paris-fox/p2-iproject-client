<template>
    <nav class="navbar navbar-expand navbar-light bg-light" style="background-color: #A3A3A3 !important">
      <div class="container">
        <div class="row">
        <div class="navbar-header col-xl-4">
          <h1 style="justify-content:left;">Sports 8</h1>
        </div>
        <div class="col-xl-4">
          <h1>{{ pageTitle }}</h1>
        </div>

        <!-- <img src="https://webusstatic.yo-star.com/ark_us_web/mobile/img/item_origin.f524ea1a.png" alt="nav-logo" style="height: 40px" /> -->
        <div class="navbar-right col-xl-4 " style="width: 180vh" >
          <ul class="nav navbar-nav mx-2 mb-2 " style="justify-content:right;">
          <li class="nav-item">
            <a class="nav-link text-white" @click.prevent="toHome" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" @click.prevent="toWatchList" aria-current="page" href="#">My Watchlist</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" @click.prevent="handleSignOut" aria-current="page" href="#">Logout</a>
          </li>
        </ul>
        </div>

      </div>
        </div>

    </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: ['pageTitle'],
  data: function () {
    return {
      categoryId: '',
      title: ''
    }
  },
  methods: {
    toHome () {
      this.$router.push({ name: 'homePage' })
    },
    handleSignOut () {
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'Login' })
      this.$toast.open({
        message: 'User Has Logout',
        type: 'error',
        position: 'top-right'
      })
    },
    toWatchList () {
      this.$store.dispatch('getUserWishlist')
      this.$router.push({ name: 'watchlistPage' })
    }
  },
  computed: {
    categories: function () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>
.nav-item {
  /* background-color: springgreen; */
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  text-align: center;

}
</style>
