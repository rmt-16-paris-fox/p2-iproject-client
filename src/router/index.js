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
        path: '/matches/:matchId/overview',
        name: 'MatchOverview',
        component: () => import('../components/MatchOverview.vue')
      },
      {
        path: '/matches/:matchId/heatmap',
        name: 'Heatmap',
        component: () => import('../components/Heatmap.vue')
      },
      {
        path: '/matches/:matchId/vision',
        name: 'Vision',
        component: () => import('../components/Vision.vue')
      }
    ]
  },
  {
    path: '/drafts',
    name: 'Draft',
    component: () => import('../views/Draft.vue'),
    children: [
      {
        path: '/drafts/analyzer',
        name: 'DraftAnalyzer',
        component: () => import('../components/DraftAnalyzer.vue')
      },
      {
        path: '/drafts/composer',
        name: 'DraftComposer',
        component: () => import('../components/DraftComposer.vue')
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
