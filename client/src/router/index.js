import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import HomePage from '../views/HomePage.vue'
import DetailPage from '../views/DetailPage.vue'
import MyClass from '../views/MyClass.vue'
import ClassPage from '../views/ClassPage.vue'
import VerifyAccount from '../views/VerifyAccount.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/verification/:verifyCode',
    name: 'VerifyAccount',
    component: VerifyAccount
  },
  {
    path: '/detail/:id',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/myclass',
    name: 'MyClass',
    component: MyClass,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/classes/:title',
    name: 'ClassPage',
    component: ClassPage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next('/login')
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
