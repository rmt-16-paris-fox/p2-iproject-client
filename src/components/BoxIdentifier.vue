<template>
  <div id="box">
    <div class="box-identifier">{{ title }}</div>
    <div class="box-content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'BoxIdentifier',
  props: ['title', 'content']
}
</script>

<style scoped>
  #box {
    display: inline-block;
    margin-right: 32px;
  }

  .box-identifier, .box-content{
    display: inline-block;
    height: 38px;
    padding: 9px 16px;
    font-size: 0.9rem;
    margin-top: 8px;
  }

  .box-identifier {
    background: #1a1a1a;
    border-radius: 6px 0 0 6px;
  }

  .box-content {
    background: #292929;
    border-radius: 0 6px 6px 0;
    font-weight: 900;
  }
</style>