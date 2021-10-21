import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import DetailAnimal from '../views/DetailAnimal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:name',
    name: 'DetailAnimal',
    component: DetailAnimal
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name == 'Register') {
    if (localStorage.access_token) {
      next({ name: 'Home' });
    } else {
      next();
    }
  }
  else if (to.name == 'Login' && localStorage.access_token) {
    if (localStorage.access_token) {
      next({ name: 'Home' });
    } else {
      next();
    }
  }
  else if (to.name !== 'Login' && !localStorage.access_token) {
    next({ name: 'Login' });
  }
  else next();
})

export default router
