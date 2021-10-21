<template>
  <div>
    <Navbar></Navbar>
    <div class="container mt-5 chat-room">
    <div class="card chat-body">
    <br>
    <h3 class="chat"><center>CHAT ROOMS</center> </h3>
      <div class="card-body body-room">
        <hr style="color: #4db6ac">
        <div id="message-list">
          <div class="card mt-3" style="height: 50px;" v-for="(message, i) in messages" :key="i">
            <div class="card-body">
              <p>{{ message.message }}</p>
            </div>
          </div>
        </div>
        <div id="form-message">
           <form action="" @submit.prevent="sendMessage">
             <div class="row">
              <div class="col-10" style="display: inline">
                <input type="text" v-model="inputMessage" class="form-control" />
              </div>
              <div class="col-1">
                <button class="btn btn-add">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'ChatRoom',
  data: function () {
    return {
      inputMessage: ''
    }
  },
  methods: {
    sendMessage () {
      const data = {
        message: this.inputMessage
      }
      this.$socket.emit('sendMessage', data)
      this.$store.commit('PUSH_MESSAGES', data)
      this.inputMessage = ' '
    }
  },
  sockets: {
    broadcastMessage (data) {
      this.$store.commit('PUSH_MESSAGES', data)
    }
  },
  components: {
    Navbar
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  }
}
</script>

<style>
.body-room{
    width: 600px;
    margin: auto;
}
#message-list{
    height: 60vh;
    overflow-y: auto
}
.btn-add{
    background-color: #4db6ac;
    color: #ffff;
}
</style>
