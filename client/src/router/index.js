import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AddTodo from '../views/AddTodo.vue'
import AddNote from '../views/AddNotes.vue'
import EditTodo from '../views/EditTodo.vue'
import ChatRoom from '../views/ChatRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem('access_token')) {
        next({ path: '/home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem('access_token')) {
        next({ path: '/home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: function (to, from, next) {
      if (!localStorage.getItem('access_token')) {
        next({ path: '/' })
      } else {
        next()
      }
    }
  },
  {
    path: '/add',
    name: 'AddTodo',
    component: AddTodo
  },
  {
    path: '/edit/:id',
    name: 'EditTodo',
    component: EditTodo
  },
  {
    path: '/note/add',
    name: 'AddNote',
    component: AddNote
  },
  {
    path: '/chat',
    name: 'ChatRoom',
    component: ChatRoom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
