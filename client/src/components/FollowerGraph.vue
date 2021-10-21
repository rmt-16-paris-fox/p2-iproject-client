<template>
  <div>
    <div class="txt-main-top-group container m-auto">
      <h1
        class="
          col-12 col-lg-8
          m-auto
          text-center
          c-dark
          font-weight-bold
          fs-500-24
          pt-0 pt-md-5
          f-s-48
        "
      >
        Menghasilkan Konten-konten Diberbagai Media
      </h1>
      <p class="col-12 col-lg-6 text-center f-s-18 pt-4 m-auto fs-500-16">
        Dagelan membuat konten seperti meme, artikel dan konten kreatif lainnya
        untuk menghibur serta memberikan informasi kepada orang lain.
      </p>
    </div>

    <div class="card-follower container m-auto pt-5 pb-100">
      <div class="image-follower-group text-center">
        <img
          src="../assets/background/back-follow.svg"
          alt="follower group image"
          class="image-follower"
        />
      </div>
      <div class="card-follower-sosmed row b-white">
        <div
          class="
            card-sosmed
            p-5
            d-block
            col-6
            text-center
            border-bottom border-side
          "
        >
          <span
            class="
              c-orange
              f-s-96
              font-weight-bold
              fs-500-24 fs-700-48
              text-center
              justify-content-center
              d-flex
            "
            >{{ dataFollower.count }}</span
          >
          <p class="f-s-24 fs-500-16 c-darker">Instagram Followers</p>
        </div>
        <div class="card-sosmed p-5 d-block col-6 text-center border-bottom">
          <span
            class="
              c-orange
              f-s-96
              font-weight-bold
              fs-500-24 fs-700-48
              justify-content-center
              d-flex
            "
            >858.044</span
          >
          <p class="f-s-24 fs-500-16 c-darker">Facebook Page Followers</p>
        </div>
        <div class="card-sosmed p-5 d-block col-6 text-center border-side">
          <span
            class="
              c-orange
              f-s-96
              font-weight-bold
              fs-500-24 fs-700-48
              justify-content-center
              d-flex
            "
            >{{ dataPostCount.count }}</span
          >
          <p class="f-s-24 fs-500-16 c-darker">Instagram Post</p>
        </div>
        <div class="card-sosmed p-5 d-block col-6 text-center">
          <span
            class="
              c-orange
              f-s-96
              font-weight-bold
              fs-500-24 fs-700-48
              justify-content-center
              d-flex
            "
            >780.251</span
          >
          <p class="f-s-24 fs-500-16 c-darker">Facebook Page Likes</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowerGraph",
  computed: {
    dataFollower() {
      return this.$store.state.followerIg;
    },
    dataPostCount() {
      return this.$store.state.postCount;
    },
  },
  created() {
    this.$store.dispatch("fetchFollowers");
    this.$store.dispatch("fetchPostCount");
  },
};
</script>

<style>
</style>
