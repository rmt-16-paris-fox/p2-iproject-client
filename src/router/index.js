import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/login",
    name: "LoginPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "LoginPage" */ "../views/LoginPage.vue")
  },
  {
    path: "/register",
    name: "RegisterPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "RegisterPage" */ "../views/RegisterPage.vue")
  },
  {
    path: "/detail/:id",
    name: "DetailPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "DetailPage" */ "../components/DetailPage.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.name == 'Bookmark' && !localStorage.getItem('access_token'))
//       next({ name: 'Login' });
//   else next();
// });
router.beforeEach((to, from, next) => {
  if (
    (localStorage.getItem("access_token") && to.name === "Login") ||
    (localStorage.getItem("access_token") && to.name === "Register")
  )
    next({ name: "HomePage" });
  else next();
});

export default router;
