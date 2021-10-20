<template>
  <main id="main" class="position-relative b-pink main-top">
    <FollowerGraph></FollowerGraph>

    <div
      class="
        main-middle-content
        container
        m-auto
        pt-5
        row
        flex-column-reverse flex-md-row
        text-center
      "
    >
      <div
        class="
          image-content-middle
          align-items-end
          d-flex
          justify-content-md-end justify-content-center
          col-md-5
          mt-4
          z-99
          order-2 order-md-1
        "
      >
        <img
          src="../assets/background/back-project.svg"
          alt="image content"
          class="image-content-2"
        />
      </div>
      <div
        class="
          content-middle
          d-block
          align-self-center
          col-12 col-md-5
          w-100
          order-md-2 order-1
          mb-md-0 mb-5
        "
      >
        <h4
          class="
            content
            f-s-36
            w-100 w-md-75
            c-dark
            mb-4
            font-weight-bold
            fs-500-24
          "
        >
          Kepoin Dagelan <br />
          Lebih Lagi
        </h4>
        <a
          href="./about.html"
          class="
            btn-find-more
            b-yellow
            font-weight-bold
            f-s-16
            c-brown
            text-center
            hvr-brown
          "
        >
          Cari Tahu Tentang Dagelan
        </a>
      </div>
    </div>

    <div
      class="
        main-bottom-content
        pt-5
        pb-md-0 pb-5
        w-90
        b-linear-brown
        position-relative
        z-99
      "
    >
      <img
        src="../assets/background/back-project-left.svg"
        alt=""
        class="h-100 position-absolute l-0 back-portfolio t-0 d-md-block d-none"
      />
      <img
        src="../assets/background/back-project-right.svg"
        alt=""
        class="h-100 position-absolute r-0 t-0 d-md-block d-none back-portfolio"
      />

      <h3
        class="
          content-bottom
          f-s-48
          font-weight-bold
          text-white text-center
          w-md-50
          m-auto
          fs-500-24
          z-99
          position-relative
        "
      >
        Apa aja sih yang pernah <br />
        dikerjain Dagelan ?
      </h3>
      <div class="card-artikel-group mt-5">
        <div
          class="
            card-artikel-main
            d-block d-md-flex
            justify-content-center
            m-auto
          "
        >
          <CardMainContent></CardMainContent>
        </div>
      </div>
      <div class="btn-more-artikel mt-5 text-center">
        <a
          href="./portfolio.html"
          class="
            btn-find-more-artikel
            b-yellow
            text-center
            f-s-16
            c-brown
            font-weight-bold
            text-decoration-none
            hvr-brown
          "
        >
          Lihat Semua Portfolio
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import FollowerGraph from "@/components/FollowerGraph.vue";
import CardMainContent from "@/components/CardMainContent.vue";
export default {
  name: "MainContentTop",
  components: {
    FollowerGraph,
    CardMainContent,
  },
};
</script>

<style>
</style>
