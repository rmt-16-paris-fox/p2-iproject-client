<template>
  <div>
    <div class="media-body">
      <p>{{ message.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncomingMsg",
  props: ["message"],
  data() {
    return {
      listUser: [],
    };
  },
  sockets: {
    sendUser(user) {
      this.listUser = user;
    },
  },
};
</script>

<style></style>
