import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/learnkanji",
    name: "Learn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Learn.vue"),
  },
  {
    path: "/testkanji",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestKanji.vue"),
  },
  {
    path: "/test/options",
    name: "TestStart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestStart.vue"),
  },
  {
    path: "/test/progress",
    name: "TestProgress",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestProgress.vue"),
  },
  {
    path: "/test/result",
    name: "TestResult",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestResult.vue"),
  },
  {
    path: "/grouplist",
    name: "GroupList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/KanjiGroupList.vue"),
  },
  {
    path: "/kanjidetails",
    name: "KanjiDetails",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/KanjiDetails.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/KanjiSearch.vue"),
  },
  {
    path: "/myprogress",
    name: "MyProgress",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyProgress.vue"),
  },
  {
    path: "/premium",
    name: "Premium",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UpPremium.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");

  if (!token && to.name === "Test") {
    next({ name: "Login" });
  }
  if (to.name === "TestProgress" && from.name !== "TestStart") {
    next({ name: "Test" });
  } else if (to.name === "TestStart" && from.name !== "Test") {
    next({ name: "Test" });
  } else if (to.name === "TestResult" && from.name !== "TestProgress") {
    next({ name: "Test" });
  } else if (
    to.name === "KanjiDetails" &&
    !(from.name === "GroupList" || from.name === "Search")
  ) {
    next({ name: "GroupList" });
  } else if (to.name === "GroupList" && from.name !== "Learn") {
    next({ name: "Learn" });
  } else next();
});

export default router;
