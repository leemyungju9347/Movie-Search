import Vue from 'vue';
import Vuex from 'vuex';
import { movieSchApi } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieList: [],
    inputValue: '',
    option: '',
  },
  mutations: {
    set_list(state, movieList) {
      state.movieList = movieList.Data[0].Result;
    },
    set_title(state, inputValue) {
      state.inputValue = inputValue;
    },
    set_option(state, option) {
      state.option = option;
    },
  },
  actions: {
    FETCH_LIST(context, inputValue) {
      return movieSchApi(inputValue)
        .then(res => {
          context.commit('set_list', res.data);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  modules: {},
});
