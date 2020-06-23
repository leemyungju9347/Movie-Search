import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/search',
    },
    {
      path: '/search',
      component: () => import('@/views/MovieSearchPage.vue'),
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
      path: '/favorite',
      component: () => import('@/views/MovieFavoriteConts.vue'),
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
