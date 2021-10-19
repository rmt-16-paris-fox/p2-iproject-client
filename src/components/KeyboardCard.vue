<template>
  <div class="card keyboard-card" data-aos="fade-up" data-aos-duration="600">
    <img :src="keyboard.Images[0] ? keyboard.Images[0].imageUrl : ''" alt="Keyboard Picture" v-if="from !== 'profile'">
    <div class="card-body">
      <strong class="d-inline-block mb-1">{{keyboard.name}}</strong> <br>
      <small :class="keyboard.isDone ? 'status bg-success p-1 d-block w-50 text-center' : 'status bg-warning p-1 d-block w-50 text-center'" v-if="from === 'profile'">{{workStatus}}</small>
    </div>
  </div>
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
    }
  }
}
</script>

<style>
  .keyboard-card{
    width: 385px;
    margin: 0 25px 25px 0;
  }

  .keyboard-card:hover{
    border: 1px solid #6c757d;
    cursor: pointer;
  }

  .keyboard-card strong{
    font-weight: 600;
    padding-bottom: 3px;
  }

  .keyboard-card img {
    width: 100%;
    height: 200px;
  }

  .keyboard-card .status {
    border-radius: 50em;
  }
</style>
