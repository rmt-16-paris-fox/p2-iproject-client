import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import homePage from '../views/homePage.vue'
import watchlistPage from '../views/watchlistPage.vue'
import detailPage from '../views/detailPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next('/homePage')
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next('/homePage')
      } else {
        next()
      }
    }
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: homePage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/watchlistPage',
    name: 'watchlistPage',
    component: watchlistPage
  },
  {
    path: '/detailPage/:id',
    name: 'detailPage',
    component: detailPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
