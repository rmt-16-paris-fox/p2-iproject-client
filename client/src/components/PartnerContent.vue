<template>
  <div>
    <a
      v-if="celeb.price > 0"
      class="card card-product c-dark col-md-3 col-sm-6 hvr-black hvr-bob-none"
    >
      <img
        class="
          card-img-top
          m-auto
          d-flex
          justify-content-center
          pt-4
          w-50
          hvr-bob-1
        "
        src=""
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          h-100
          mt-1
          br-top-90
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-18
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
            mb-3
          "
        >
          {{ celeb.name }}
        </h3>
        <br /><br />
        <span>{{ celeb.age }} age</span><br />
        <span>${{ celeb.price }}</span>
      </div>
    </a>

    <!-- <div class="card-artikel-2 mt-2 mt-md-0 hvr-wobble-vertical">
      <div class="card card-artikel">
        <img
          class="card-img-artikel m-auto h-100"
          src="../assets/project-1.png"
          alt="image product"
        />
        <div class="card-body body-project position-absolute b-0 w-100 h-100">
          <h4 class="font-weight-bold f-s-36 c-white">
            {{ post.node.edge_media_to_caption.edges[0].node.text }}
          </h4>
          <span class="f-s-18 c-white"
            >{{ post.node.edge_media_preview_like.count }} Likes</span
          ><br />
          <span class="f-s-18 c-white"
            >{{ post.node.video_view_count }} Views</span
          >
        </div>
      </div>
    </div> -->

    <!-- <a
      class="card card-product c-dark hvr-bob-none col-md-3 col-sm-6 hvr-black"
    >
      <img
        class="
          card-img-top
          d-flex
          justify-content-center
          m-auto
          pt-4
          w-50
          hvr-bob
        "
        src="../assets/main-partner-2.png"
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          h-100
          mt-1
          br-top-90
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-24
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
          "
        >
          kemenko_pmk
        </h3>
      </div>
    </a>
    <a
      class="card card-product c-dark hvr-bob-none col-md-3 col-sm-6 hvr-black"
    >
      <img
        class="
          card-img-top
          d-flex
          justify-content-center
          m-auto
          pt-4
          w-50
          hvr-bob-1
        "
        src="../assets/main-partner-3.png"
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          h-100
          mt-1
          br-top-90
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-24
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
          "
        >
          gatherich
        </h3>
      </div>
    </a>
    <a
      class="card card-product c-dark hvr-bob-none col-md-3 col-sm-6 hvr-black"
    >
      <img
        class="
          card-img-top
          d-flex
          justify-content-center
          m-auto
          pt-4
          w-50
          hvr-bob
        "
        src="../assets/main-partner-5.png"
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          h-100
          mt-1
          br-top-90
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-24
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
          "
        >
          therapup.indonesia
        </h3>
      </div>
    </a>
    <a
      class="card card-product c-dark hvr-bob-none col-md-3 col-sm-6 hvr-black"
    >
      <img
        class="
          card-img-top
          d-flex
          justify-content-center
          m-auto
          pt-4
          w-50
          hvr-bob-1
        "
        src="../assets/main-partner-6.png"
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          h-100
          mt-1
          br-top-90
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-24
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
          "
        >
          vernalta
        </h3>
      </div>
    </a>
    <a
      class="card card-product c-dark hvr-bob-none col-md-3 col-sm-6 hvr-black"
    >
      <img
        class="
          card-img-top
          d-flex
          justify-content-center
          m-auto
          pt-4
          w-50
          hvr-bob
        "
        src="../assets/main-partner-7.png"
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          h-100
          mt-1
          br-top-90
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-24
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
          "
        >
          Willy.Winarko
        </h3>
      </div>
    </a>
    <a
      class="card card-product c-dark hvr-bob-none col-md-3 col-sm-6 hvr-black"
    >
      <img
        class="
          card-img-top
          d-flex
          justify-content-center
          m-auto
          pt-4
          w-50
          hvr-bob-1
        "
        src="../assets/main-partner-8.png"
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          h-100
          mt-1
          br-top-90
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-24
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
          "
        >
          volix.media
        </h3>
      </div>
    </a>
    <a
      class="card card-product c-dark hvr-bob-none col-md-3 col-sm-6 hvr-black"
    >
      <img
        class="
          card-img-top
          d-flex
          justify-content-center
          m-auto
          pt-4
          w-50
          hvr-bob
        "
        src="../assets/main-partner-10.png"
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          h-100
          mt-1
          br-top-90
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-24
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
          "
        >
          bapak2id
        </h3>
      </div>
    </a>
    <a
      class="card card-product c-dark hvr-bob-none col-md-3 col-sm-6 hvr-black"
    >
      <img
        class="
          card-img-top
          d-flex
          justify-content-center
          m-auto
          pt-4
          w-50
          hvr-bob-1
        "
        src="../assets/main-partner-11.png"
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          h-100
          mt-1
          br-top-90
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-24
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
          "
        >
          tigajeruk
        </h3>
      </div>
    </a>
    <a
      class="card card-product c-dark hvr-bob-none col-md-3 col-sm-6 hvr-black"
    >
      <img
        class="
          card-img-top
          d-flex
          justify-content-center
          m-auto
          pt-4
          w-50
          hvr-bob
        "
        src="../assets/main-partner-12.png"
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          mt-1
          br-top-90
          mb-0
          h-100
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-24
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
          "
        >
          imx_magazine_124
        </h3>
      </div>
    </a>
    <a
      class="card card-product c-dark hvr-bob-none col-md-3 col-sm-6 hvr-black"
    >
      <img
        class="
          card-img-top
          d-flex
          justify-content-center
          m-auto
          pt-4
          w-50
          hvr-bob-1
        "
        src="../assets/main-partner-13.png"
        alt="image product"
      />
      <div
        class="
          card-body
          b-pink
          w-90
          mt-1
          br-top-90
          mb-0
          h-100
          position-relative
          pb-60
        "
      >
        <h3
          class="
            f-s-24
            fs-700-18
            font-weight-bold
            text-center
            partner-name
            position-absolute
          "
        >
          tahilalats
        </h3>
      </div>
    </a> -->
  </div>
</template>

<script>
export default {
  name: "PartnerContent",
  props: ["celeb"],
};
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
