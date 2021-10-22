<template>
  <div>
    <Navbar></Navbar>
    <div class="container chat-room" style="margin-top:100px">
      <div class="card chat-body">
        <br>
        <h3 class="chat"><center>CHAT ROOMS</center> </h3>
          <div class="card-body body-room">
            <hr style="color: #4db6ac">
            <div id="message-list">
              <div class="card mt-3" style="height: 50px;" v-for="(message, i) in messages" :key="i">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" v-model="message.message" disabled>
                  <label for="floatingInput">{{ message.name }}</label>
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
      <div class="mx-5 mt-5">
        <h5>Online User</h5>
        <div class=" mb-2" v-for="(useronline, i) in users" :key="i+'a'">
          <input type="text" class="form-control" :value="useronline" disabled>
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
      inputMessage: '',
      user: ''
    }
  },
  methods: {
    sendMessage () {
      const data = {
        name: this.user,
        message: this.inputMessage
      }
      console.log(data)
      this.$socket.emit('sendMessage', data)
      this.$store.commit('PUSH_MESSAGES', data)
      this.inputMessage = ' '
    },
    getUser () {
      this.$store.dispatch('getUser')
        .then((data) => {
          this.user = data.name
          this.$socket.emit('sendUser', data.name)
          this.$store.commit('PUSH_USER', data.name)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  sockets: {
    broadcastMessage (data) {
      this.$store.commit('PUSH_MESSAGES', data)
    },
    broadcastUser (data) {
      this.$store.commit('PUSH_USER', data)
    }
  },
  components: {
    Navbar
  },
  computed: {
    messages () {
      return this.$store.state.messages
    },
    users () {
      return this.$store.state.users
    }
  },
  created () {
    this.getUser()
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
