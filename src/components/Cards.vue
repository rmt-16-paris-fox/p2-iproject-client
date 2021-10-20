<template>
  <div class="col-md-4">
    <div
      class="card text-white card-has-bg click-col"
      :style="{ 'background-image': 'url(' + estate.thumbnail + ')' }"
      @click.prevent="fetchDetail"
    >
      <img
        class="card-img d-none"
        src="https://source.unsplash.com/600x900/?tech,street"
        alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
      />
      <div class="card-img-overlay d-flex flex-column">
        <div class="card-body">
          <small class="card-meta mb-2">{{ estate.address.county }}</small>
          <h4 class="card-title mt-0">
            <a class="text-white" herf="#">{{ cost }}</a>
          </h4>
          <small><i class="far fa-clock"></i> {{ size }}</small>
        </div>
        <div class="card-footer">
          <div class="media">
            <img
              class="mr-3 rounded-circle"
              :src="estate.agents[0].photo.href"
              alt="Generic placeholder image"
              style="max-width: 50px"
            />
            <div class="media-body">
              <h6 class="my-0 text-white d-block">
                {{ estate.agents[0].name }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["estate"],
  data() {
    return {
      cost: "",
      size: "",
    };
  },
  methods: {
    fetchDetail() {
      this.$router.push({ name: "Detail" });
    },
  },

  created() {
    this.cost = "US$ " + this.estate.price;
    this.size = this.estate.lot_size.size + " sqft";
  },
};
</script>

<style>
body {
  background-color: #fcbf49;
}
.wrapper {
  margin: 10vh;
}
.card {
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 450px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
}
@media (max-width: 768px) {
  .card {
    min-height: 350px;
  }
}
@media (max-width: 420px) {
  .card {
    min-height: 300px;
  }
}
.card.card-has-bg {
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: center center;
}
.card.card-has-bg:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  -webkit-filter: grayscale(1);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
}
.card.card-has-bg:hover {
  transform: scale(0.98);
  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
  background-size: 130%;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
}
.card.card-has-bg:hover .card-img-overlay {
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  background: #234f6d;
  background: linear-gradient(
    0deg,
    rgba(4, 69, 114, 0.5) 0%,
    rgba(4, 69, 114, 1) 100%
  );
}
.card .card-footer {
  background: none;
  border-top: none;
}
.card .card-footer .media img {
  border: solid 3px rgba(234, 95, 0, 0.3);
}
.card .card-meta {
  color: orange;
}
.card .card-body {
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
}
.card:hover {
  cursor: pointer;
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
.card:hover .card-body {
  margin-top: 30px;
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
.card .card-img-overlay {
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  background: #234f6d;
  background: linear-gradient(
    0deg,
    rgba(35, 79, 109, 0.3785889355742297) 0%,
    rgba(69, 95, 113, 1) 100%
  );
}
</style>
