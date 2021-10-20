<template>
  <div class="mesgs">
    <div class="msg_history">
      <incoming-msg />
    </div>
    <div class="type_msg">
      <div class="input_msg_write">
        <input type="text" class="write_msg p-3" placeholder="Type a message" />
        <button class="msg_send_btn" type="button">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IncomingMsg from "./IncomingMsg.vue";
export default {
  components: { IncomingMsg },
};
</script>

<style></style>
