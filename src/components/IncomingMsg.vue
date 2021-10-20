<template>
  <div>
    <p>{{ message.message }}</p>
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
