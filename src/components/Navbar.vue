<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="opacity: 0.7">
    <div class="container-fluid">
      <a class="nav-link active" aria-current="page" href="#"
        ><b class="text-light">#healthcare</b
        ><b class="text-warning">Forum</b></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <p style="color: transparent">SPACE</p>
          </li>
          <li>
            <a class="nav-link active text-light" aria-current="page" href="#"
              >News</a
            >
          </li>
          <li>
            <a class="nav-link active text-light" aria-current="page" href="#"
              >Videos</a
            >
          </li>
          <li>
            <a class="nav-link active text-light" aria-current="page" href="#"
              >Forum</a
            >
          </li>
          <li>
            <a class="nav-link active text-light" aria-current="page" href="#"
              >Dictionary</a
            >
          </li>
          <li>
            <a class="nav-link active text-light" aria-current="page" href="#"
              >About</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      class="navbar-collapse collapse w-1000 order-3 dual-collapse2"
      style="margin-right: 20px"
    >
      <ul class="navbar-nav ml-auto">
        <li>
          <button type="button" class="btn btn-warning btn-sm">Login</button>
        </li>
      </ul>
    </div>
    <!-- 
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Right</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </div> -->
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>