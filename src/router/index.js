import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import KeyboardsPage from '@/views/KeyboardsPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import AdminPage from '@/views/AdminPage.vue'
import OrderPage from '@/views/OrderPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem('access_token')) {
        next({ path: '/' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem('access_token')) {
        next({ path: '/' })
      } else {
        next()
      }
    }
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/keyboards',
    name: 'KeyboardsPage',
    component: KeyboardsPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
    beforeEnter: function (to, from, next) {
      if (!localStorage.getItem('access_token')) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/order',
    name: 'OrderPage',
    component: OrderPage,
    beforeEnter: function (to, from, next) {
      if (store.state.isLoggedIn === false) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    beforeEnter: function (to, from, next) {
      if (store.state.isAdmin === false && store.state.isLoggedIn === false) {
        next('/')
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
