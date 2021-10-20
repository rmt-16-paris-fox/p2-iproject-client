import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MatchOverview from '../components/MatchOverview.vue';
import Heatmap from '../components/Heatmap.vue';
import Vision from '../components/Vision.vue';

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
        path: '/matches/:matchId/overview',
        name: 'MatchOverview',
        component: MatchOverview
      },
      {
        path: '/matches/:matchId/heatmap',
        name: 'Heatmap',
        component: Heatmap
      },
      {
        path: '/matches/:matchId/vision',
        name: 'Vision',
        component: Vision
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
