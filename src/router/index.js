import Vue from 'vue';
import VueRouter from 'vue-router';
import bus from '@/utils/bus';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/search',
    },
    {
      path: '/search',
      component: () => import('@/views/MovieMainPage.vue'),
    },
    {
      path: '/movieList',
      component: () => import('@/views/MovieListPage.vue'),
    },
    {
      path: '/movieInfo',
      component: () => import('@/views/MovieDetailInfoPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  bus.$emit('start:spinner');

  setTimeout(() => {
    next();
  }, 2000);
});

export default router;
