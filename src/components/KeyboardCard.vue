<template>
  <router-link class="card keyboard-card" data-aos="fade-up" data-aos-duration="600" :to="'/keyboards/' + keyboard.id">
    <img :src="keyboard.Images[0] ? keyboard.Images[0].imageUrl : '/assets/placeholder.jpeg'" alt="Keyboard Picture" v-if="from !== 'profile'">

    <div class="card-body">
      <strong class="d-inline-block">{{keyboard.name}}</strong>

      <div class="specs" v-if="from === 'keyboards'">
        {{keyboard.switches}} <br>
        {{keyboard.keycaps}}
      </div>

      <small :class="keyboard.isDone ? 'status bg-success p-1 d-block w-50 text-center mb-2' : 'status bg-warning p-1 d-block w-50 text-center mb-2'" v-if="from === 'profile'">{{workStatus}}</small>
      <small :class="keyboard.isPaid ? 'status bg-success p-1 d-block w-50 text-center' : 'status bg-warning p-1 d-block w-50 text-center'" v-if="from === 'profile'">{{paidStatus}}</small>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'KeyboardCard',
  props: ['keyboard', 'from'],
  computed: {
    workStatus () {
      if (this.keyboard.isDone === true) {
        return 'Done'
      } else {
        return 'Work in progress'
      }
    },
    paidStatus () {
      if (this.keyboard.isPaid === true) {
        return 'Paid'
      } else {
        return 'Payment pending'
      }
    }
  }
}
</script>

<style>
  .keyboard-card{
    width: 385px;
    margin: 0 25px 25px 0;
    color: black;
  }

  .keyboard-card:hover{
    border: 1px solid #6c757d;
    cursor: pointer;
    color: black;
  }

  .keyboard-card strong{
    font-family: 'Source Serif Pro';
    font-size: 1.3em;
    font-weight: 400;
    padding-bottom: 3px;
  }

  .keyboard-card img {
    width: 100%;
    height: 255px;
  }

  .keyboard-card .status {
    border-radius: 50em;
  }
</style>
