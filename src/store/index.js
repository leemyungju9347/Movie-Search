import Vue from 'vue';
import Vuex from 'vuex';
import { movieSchApi, boxOfficeApi } from '@/api/index';
import {
  getTitleFromCookie,
  getTypeFromCookie,
  getFavoriteFromCookie,
} from '@/utils/cookies';

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
    //keword
    keyword: '',
    keywordList: [],
    keyResult: [],
    //favorite
    movieSeq: getFavoriteFromCookie() || '',
    boxOffice: [],
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
    SET_BOXOFFICE(state, data) {
      state.boxOffice = data.boxOfficeResult.weeklyBoxOfficeList;
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
    FETCH_BOXOFFICE({ commit }, date) {
      return boxOfficeApi(date)
        .then(res => {
          commit('SET_BOXOFFICE', res.data);

          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  modules: {},
});
