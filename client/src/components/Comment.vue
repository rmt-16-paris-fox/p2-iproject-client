<template>
  <div class="d-flex flex-row mb-2">
    <img :src="comment.User.imageUrl" width="40" class="rounded-image" />
    <div class="d-flex flex-column ml-2 profile-comment">
      <span class="name">{{ comment.User.fakeName }}</span>
      <small class="comment-text">{{ comment.comment }}</small>
      <div class="action">
        <a href="">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['comment']
}
</script>

<style scoped>
.name {
  margin-left: 10px;
  margin-top: 10px;
}
.comment-text {
  margin-left: 10px;
  font-size: 15px;
}

.action{
  position: absolute;
  right: 10px;
  bottom: 65px;
}
</style>
