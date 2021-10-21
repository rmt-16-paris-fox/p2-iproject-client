/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Products from '../views/Product.vue'
import Transaction from '../views/Transaction.vue'
import AddTransaction from '../views/AddTransaction.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next('/')
      } else {
        next()
      }
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next('/')
      } else {
        next()
      }
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next('/login')
      } else {
        next()
      }
    },
  },
  {
    path: '/addProducts',
    name: 'AddProduct',
    component: AddProduct,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next('/login')
      } else {
        next()
      }
    },
  },
  {
    path: '/editProducts',
    name: 'EditProduct',
    component: EditProduct,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next('/login')
      } else {
        next()
      }
    },
  },
  {
    path: '/addTransaction',
    name: 'AddTransaction',
    component: AddTransaction,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next('/login')
      } else {
        next()
      }
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
