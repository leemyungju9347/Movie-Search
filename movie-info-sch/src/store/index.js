import Vue from 'vue';
import Vuex from 'vuex';
import { movieSchApi } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Output
    movieList: [],
    //Input
    inputValue: '',
    selected: '',
    //Detail
    deepItem: [],
  },
  mutations: {
    // Movie List Page
    set_list(state, movieList) {
      state.movieList = movieList.Data[0].Result;
    },
    //Movie Search Form Page
    set_value(state, inputValue) {
      state.inputValue = inputValue;
    },
    set_option(state, selected) {
      state.selected = selected;
    },
    // Movie Detail Info Page
    set_deepItem(state, deepItem) {
      state.deepItem = deepItem;
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
