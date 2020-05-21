import Vue from 'vue'
import Vuex from 'vuex'
import {movieSchApi} from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    movie:'',
    title:''
  },
  mutations: {
    set_list(state,list){
      state.list = list
    },
    set_movie(state,movie){
      state.movie = movie
    },
    set_title(state,title){
      state.title = title
    }

  },
  actions: {
    FETCH_LIST(context,title){
      return movieSchApi(title)
      .then(res =>{
          context.commit('set_list',res.data)
          
          
          return res
      })
      .catch(err=>{
        console.log(err);
        
      })
    }
  },
  modules: {
  }
})
