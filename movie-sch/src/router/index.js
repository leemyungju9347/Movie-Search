import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieDetailPage from '../views/MovieDetailPage.vue'
import MovieSearchPage from '../views/MovieSearchPage.vue';
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      component:MovieSearchPage
    },
    {
      path:'/search',
      component:MovieSearchPage
    },
    {
      path:'/movie',
      component:MovieDetailPage
    }
  ]
})