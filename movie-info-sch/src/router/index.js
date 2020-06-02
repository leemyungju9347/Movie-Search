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
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
