<template>
  <div>
    <div class="card-artikel-3 hvr-wobble-vertical pt-md-0 pt-3">
      <div class="card card-artikel position-relative">
        <img
          class="card-img-artikel m-auto h-100"
          :src="meme.url"
          alt="image product"
        />
        <div class="card-body body-project position-absolute b-0 w-100 h-100">
          <h4 class="font-weight-bold f-s-36 c-white">{{ meme.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnerContent",
  props: ["meme"],
};
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
