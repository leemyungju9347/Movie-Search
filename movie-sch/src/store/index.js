import Vue from 'vue'
import Vuex from 'vuex'
import {movieSchApi} from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    title:''
  },
  mutations: {
    set_list(state,list){
      state.list = list.Data[0].Result
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
