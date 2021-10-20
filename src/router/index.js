import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/matches/:matchId',
    name: 'MatchDetail',
    component: () => import('../views/MatchDetail.vue'),
    children: [
      {
        path: '/matches/:matchId',
        name: 'MatchOverview',
        component: () => import('../components/MatchOverview.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
