<template>
  <div class="navigasi z-99 position-relative">
    <nav class="navbar navbar-expand-lg container">
      <router-link
        to="/"
        class="
          navbar-brand
          order-2 order-lg-1
          m-auto
          d-flex
          justify-content-center justify-content-lg-start
        "
        ><img src="../assets/logo-text.png" alt="logo" class="logo"
      /></router-link>
      <button
        class="navbar-toggler order-1"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <img src="../assets/menu.png" alt="" width="24px" height="24px" />
        </span>
      </button>
      <div class="collapse navbar-collapse order-md-2" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link
              to="/"
              class="
                nav-link
                f-s-18
                c-brown
                txt-decoration-none
                hvr-brown
                font-weight-bold
              "
              >Home</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link
              to="/about"
              class="
                nav-link
                f-s-18
                c-brown
                txt-decoration-none
                hvr-brown
                font-weight-bold
              "
              >About</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link
              to="/partner"
              class="
                nav-link
                f-s-18
                c-brown
                txt-decoration-none
                hvr-brown
                font-weight-bold
              "
              >Colaborative Partner</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>
