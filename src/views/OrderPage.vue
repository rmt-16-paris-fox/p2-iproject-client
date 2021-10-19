<template>
  <section id="OrderPage">
    <div class="row">
      <div class="col-6 py-5" data-aos="fade-right" data-aos-duration="600">
        <h1 class="pt-1">details</h1>
        <p>
          <ul>
            <li class="mb-2">Build service are currently available for Indonesian citizens only (subject to change)</li>
            <li class="mb-2">Client must provide all parts for the build Standard build requires: case, PCB, plate, switches, stabilizers, keycaps, and cable</li>
            <li class="mb-2">Client must pay for shipping both ways (client to builder and vice versa)</li>
            <li class="mb-2">Build service includes: assembly/disassembly, soldering, and stabilizers lubing/tuning</li>
            <li class="mb-2">Desoldering service is available with additonal fee</li>
            <li class="mb-2">Switch lubing service is currently not available (subject to change)</li>
            <li class="mb-2">Build fee depends on the layout of the keyboard, PM for details</li>
          </ul>

          <span>Please contact me via e-mail (mtthwsbuild@gmail.com) or DM me on Instagram (@mtthwsbuild) if you got some questions!</span>
          <br><br>
          <span>Please <router-link to="/login">login</router-link> to order via this website.</span>
        </p>
      </div>
      <div class="col-6 d-flex justify-content-end" v-if="isLoggedIn">
        <div class="order-card p-5" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
          <h1>order</h1>
          <form @submit.prevent="order">
            <label>Kit / Case name</label>
            <input type="text" class="form-control mt-1 mb-3" v-model="name">
            <label>Mounting Style *</label>
            <input type="text" class="form-control mt-1 mb-3" v-model="mountingStyle">
            <label>Plate Material *</label>
            <input type="text" class="form-control mt-1 mb-3" v-model="plateMaterial">
            <label>Keycaps</label>
            <input type="text" class="form-control mt-1 mb-3" v-model="keycaps">
            <label>Switches</label>
            <input type="text" class="form-control mt-1 mb-3" v-model="switches">
            <label>Miscellaneous</label>
            <textarea type="text" class="form-control mt-1 mb-3" v-model="miscellaneous"></textarea>
            <small>* leave empty for default configuration</small>
            <input type="submit" value="Order" class="form-control mt-4 py-2 btn-secondary">
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { alertError } from '../apis/swal'
export default {
  name: 'OrderPage',
  data: function () {
    return {
      name: '',
      mountingStyle: '',
      plateMaterial: '',
      keycaps: '',
      switches: '',
      miscellaneous: ''
    }
  },
  methods: {
    order () {
      const payload = {
        name: this.name,
        mountingStyle: this.mountingStyle,
        plateMaterial: this.plateMaterial,
        keycaps: this.keycaps,
        switches: this.switches,
        miscellaneous: this.miscellaneous
      }

      this.$store.dispatch('order', payload)
        .then((data) => {
          console.log(data)
          // redirect ke ovo
        }).catch((err) => {
          const message = err.message.join(', ')
          alertError(message)
        })
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style>
  #OrderPage .order-card {
    min-width: 500px;
  }

  #OrderPage input[type="submit"] {
    background-color: #26466a;
    color: #fdf9f1;
  }

  #OrderPage input[type="submit"]:hover {
    background-color: #1b3655;
  }

  #OrderPage a {
    font-weight: 600;
    color: black;
    text-decoration: underline;
  }
</style>
