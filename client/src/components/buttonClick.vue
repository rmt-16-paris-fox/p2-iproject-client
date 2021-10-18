<template>
  <button :class="btnColor" v-on:click.prevent="handleClick" :type="btnType" >{{ label }}</button>
</template>

<script>
export default {
  name: 'buttonClick',
  props: ['btnType', 'label', 'btnColor'],
  methods: {
    handleClick () {
      this.$emit('handleClick')
    }
  }
}
</script>

<style>

</style>
