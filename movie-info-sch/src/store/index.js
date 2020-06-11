import Vue from 'vue';
import Vuex from 'vuex';
import { movieSchApi, detailPageApi } from '@/api/index';
import { getTitleFromCookie, getTypeFromCookie } from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Output
    movieList: [],
    output: [],
    //Input
    inputValue: getTitleFromCookie() || '',
    selected: getTypeFromCookie() || '',
    //Detail
    deepItem: [],
    //테스트용 변수
    keyword: '',
    keywordList: [],
    keyResult: [],
  },
  mutations: {
    // Movie List Page
    set_list(state, data) {
      state.movieList = data.Data[0].Result;
      state.output = data;
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
    set_keyword(state, keyword) {
      state.keyword = keyword;
    },
    set_keywList(state, data) {
      state.keywordList = data;
      state.keyResult = data.Data[0].Result;
    },
  },
  actions: {
    FETCH_LIST(context, value) {
      return movieSchApi(value)
        .then(res => {
          context.commit('set_list', res.data);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_KEYWORD(context, value) {
      return movieSchApi(value)
        .then(res => {
          context.commit('set_keywList', res.data);
          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  modules: {},
});
