<template>
    <div>
    <NavBar></NavBar>
  <div class="container mt-5 chat-room">
    <h2 class="chat"><center>CHAT ROOMS</center> </h2>
    <div class="card chat-body">
      <div class="card-body body-room">
        <div id="message-list" style="height: 40vh; overflow-y: auto">
          <div class="card" v-for="(message, i) in messages" :key="i">
            <div class="card-body">
              <h5>{{message.name}}</h5>
              <p>{{ message.message }}</p>
            </div>
          </div>
        </div>
        <div id="form-message">
           <form action="" @submit.prevent="sendMessage">
             <div class="row">
              <div class="col-8" style="display: inline">
                <input type="text" v-model="inputMsg" class="form-control" />
              </div>
              <div class="col-4">
                <button class="btn btn-primary">Send</button>
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
import NavBar from '../components/NavBar.vue'
export default {
  name: 'ChatRoom',
  components: {
    NavBar
  },
  data () {
    return {
      inputMsg: ''
    }
  },
  methods: {
    sendMessage () {
      const data = {
        name: localStorage.getItem('fakeName'),
        message: this.inputMsg
      }
      this.$socket.emit('sendMessage', data)
      this.$store.commit('PUSH_MESSAGES', data)
      this.inputMsg = ' '
    }
  },
  sockets: {
    broadcastMessage (data) {
      this.$store.commit('PUSH_MESSAGES', data)
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  }
}
</script>

<style>
.chat-room{
  width: 600px;
}
.chat-body {
    box-shadow: 2px 2px black;
}
.body-room{
  background-color: cadetblue;
}
#form-message{
  margin-left: 20%;
}
.chat {
  text-shadow: 2px 2px black;
}
</style>
