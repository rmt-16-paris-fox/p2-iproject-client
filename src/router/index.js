import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import KeyboardsPage from '@/views/KeyboardsPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import AdminPage from '@/views/AdminPage.vue'

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
    component: RegisterPage
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
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
