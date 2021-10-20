<template>
  <section id="DetailsPage">
    <h1>details</h1>
    <div class="row my-4">
      <div class="col-6" data-aos="fade-right" data-aos-duration="600">
        <img src="/assets/placeholder.jpeg" alt="" v-if="!keyboard.Images[0]">
        <img :src="keyboard.Images[0].imageUrl" alt="Keyboard image" v-if="keyboard.Images[0]">
      </div>
      <div class="col-6" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
        <div class="d-flex items mb-3">
          <strong class="d-block itemTitle">case: </strong>
          <span class="d-block">{{keyboard.name}}</span>
        </div>
        <div class="d-flex items mb-3">
          <strong class="d-block itemTitle">switches: </strong>
          <span class="d-block">{{keyboard.switches}}</span>
        </div>
        <div class="d-flex items mb-3">
          <strong class="d-block itemTitle">keycaps: </strong>
          <span class="d-block">{{keyboard.keycaps}}</span>
        </div>
        <div class="d-flex items mb-3">
          <strong class="d-block itemTitle">mounting style: </strong>
          <span class="d-block">{{keyboard.mountingStyle}}</span>
        </div>
        <div class="d-flex items mb-3">
          <strong class="d-block itemTitle">plate material: </strong>
          <span class="d-block">{{keyboard.plateMaterial}}</span>
        </div>
        <div class="d-flex items mb-3" v-if="keyboard.miscellaneous">
          <strong class="d-block itemTitle">miscellaneous: </strong>
          <span class="d-block">{{keyboard.miscellaneous}}</span>
        </div>
      </div>
    </div>
    <div class="row py-5" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
      <img v-for="(image, idx) in keyboard.Images" :key="idx" :src="image.imageUrl" alt="" class="imageItem">
    </div>
  </section>
</template>

<script>
import { alertError } from '../apis/swal'
export default {
  name: 'KeyboardDetailsPage',
  data: function () {
    return {
      keyboard: {}
    }
  },
  methods: {
    getKeyboard () {
      this.$store.dispatch('getKeyboard', Number(this.$route.params.keyboardId))
        .then((data) => {
          this.keyboard = data
        }).catch((err) => {
          alertError(err.message)
        })
    }
  },
  created () {
    this.getKeyboard()
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@200;300;400;600;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    scroll-behavior: smooth;
  }

  body {
    background-color: #fdf9f1;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Source Serif Pro', serif;
  }

  .swal2-title {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: #fdf9f1;
  }

  a:hover {
    color: #fdf9f1;
  }

  section {
    min-height: calc(100vh - 174px);
    padding: 30px 100px;
  }
  
  .footer-h8 {
	background-color: #26466a !important;
  }

  #DetailsPage img {
    width: 100%;
  }

  #DetailsPage strong {
    font-family: 'Source Serif Pro';
    font-weight: 400;
    font-size: 1.5em;
  }

  #DetailsPage .itemTitle {
    margin-right: 20px;
  }

  #DetailsPage .items {
    line-height: 1.75em;
  }

  #DetailsPage .imageItem {
    width: 33%;
    padding-bottom: 24px;
  }

</style>
