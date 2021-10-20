<template>
  <div>
    <div class="media media-chat" v-if="currentClient !== message.name">
      <div>
        <incoming-msg :message="message" />
      </div>
    </div>
    <!-- <div class="media media-meta-day">Today</div> -->
    <!-- end of incoming message -->
    <!-- outgoing message -->
    <div
      class="media media-chat media-chat-reverse"
      v-if="currentClient === message.name"
    >
      <div class="media-body">
        <outgoing-msg :message="message" />
      </div>
    </div>
  </div>
</template>

<script>
import IncomingMsg from "./IncomingMsg.vue";
import OutgoingMsg from "./OutgoingMsg.vue";
export default {
  components: { IncomingMsg, OutgoingMsg },
  name: "ChatCard",
  data() {
    return {
      currentClient: localStorage.getItem("name"),
    };
  },
  props: ["message"],
};
</script>

<style></style>
