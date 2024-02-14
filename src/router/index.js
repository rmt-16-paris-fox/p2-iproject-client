/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import RecipeDetail from "../views/RecipeDetail.vue";
import MyRecipes from "../views/MyRecipes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token")) {
        next();
      } else {
        next("/");
      }
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token")) {
        next();
      } else {
        next("/");
      }
    }
  },
  {
    path: "/recipe/:id",
    name: "RecipeDetail",
    component: RecipeDetail
  },
  {
    path: "/myrecipes",
    name: "MyRecipes",
    component: MyRecipes,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token")) {
        next("/");
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
