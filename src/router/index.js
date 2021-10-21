import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Favourite from "@/views/Favourite.vue";
import Review from "@/views/Review.vue";
import Search from "@/views/Search.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Swal from "sweetalert2";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favourite",
    name: "Favourite",
    component: Favourite,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem("access_token")) {
        next();
      } else {
        next("/");
        Swal.fire("you must login.");
      }
    },
  },
  {
    path: "/review",
    name: "Review",
    component: Review,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem("access_token")) {
        next();
      } else {
        next("/");
        Swal.fire("you must login.");
      }
    },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
