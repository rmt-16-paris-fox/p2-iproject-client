<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <img @click="home" src="../img/logo-cashier2.png" alt="" class="ms-3" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="
          collapse
          navbar-collapse
          justify-content-end
          align-items-end
          me-3
        "
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              @click.prevent="listProduct"
              class="nav-link active"
              aria-current="page"
              href="#"
              >List Product</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Transaction
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a @click="addTransactionPage" class="dropdown-item" href="#"
                  >Add Transaction</a
                >
              </li>
              <li>
                <a
                  @click.prevent="getTransaction"
                  class="dropdown-item"
                  href="#"
                  >Show List Transaction</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Product
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a @click="productCreatePage" class="dropdown-item" href="#"
                  >Add Product</a
                >
              </li>
            </ul>
          </li>
          <li v-if="login" class="nav-item">
            <a @click.prevent="logIn" class="nav-link" href="#">Sign in</a>
          </li>
          <li v-if="!login" class="nav-item">
            <a @click.prevent="logOut" class="nav-link" href="#">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    home() {
      this.$router.push('/')
    },

    getTransaction() {
      this.$store.dispatch('getTransaction')
    },
    listProduct() {
      this.$router.push('/products')
    },
    logIn() {
      this.$router.push('/login')
    },
    logOut() {
      localStorage.clear()
      this.$store.commit('SET_IS_LOGIN', false)
      this.$router.push('/login')
    },
    productCreatePage() {
      this.$router.push('/addProducts')
    },
    productEditPage() {
      this.$router.push('/editProducts')
    },
    addTransactionPage() {
      this.$router.push({ name: 'AddTransaction' })
    },
  },
  computed: {
    login() {
      return this.$store.state.isLogin
    },
  },
}
</script>

<style></style>
