<template>
  <section id="OvoPage" class="d-flex align-items-center justify-content-center">
    <div class="card p-5">
      <form @submit.prevent="charge">
        <div class="row d-flex justify-content-center">
          <img src="/assets/logo-ovo.png" class="w-25 mb-4"> <br>
        </div>
        <label>Enter your OVO-registered phone number</label>
          <input type="number" class="form-control mt-1" placeholder="+628123123123" v-model="phoneNumber">

          <input type="submit" value="Pay" class="form-control mt-5 py-2 btn-secondary">
      </form>
    </div>
  </section>
</template>

<script>
import { alertSuccess, alertError } from '@/apis/swal.js'
export default {
  name: 'OvoPage',
  data: function () {
    return {
      phoneNumber: ''
    }
  },
  methods: {
    charge () {
      const payload = {
        keyboardId: this.$route.params.keyboardId,
        phoneNumber: this.phoneNumber
      }

      this.$store.dispatch('charge', payload)
        .then((data) => {
          this.$router.push('/profile')
          alertSuccess(data.message)
        }).catch((err) => {
          alertError(err)
        })
    }
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

  #OvoPage .card {
    min-width: 500px;
  }

  #OvoPage input[type="submit"] {
    background-color: #26466a;
  }

  #OvoPage input[type="submit"]:hover {
    background-color: #1b3655;
  }
</style>
