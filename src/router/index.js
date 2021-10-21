import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Dictionary from '../views/Dictionary.vue'
import Videos from '../views/Videos.vue'
import News from '../views/News.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/dictionary',
    name: 'Dictionary',
    component: Dictionary
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
