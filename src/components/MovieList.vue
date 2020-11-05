<template>
  <div class="movieList-page">
    <p class="result-message" v-if="movieResult">
      {{ optionMsg }} <span>"{{ inputValue }}"</span> 을(를) 검색한 결과입니다.
    </p>
    <span class="total-count" v-if="movieData.TotalCount"
      >총 {{ movieData.TotalCount }}건 검색</span
    >
    <ul class="movieList" v-if="movieResult">
      <li class="movie-item" v-for="(item, index) in movieResult" :key="index">
        <a @click.prevent="detailInfoPage(item)" class="simple-info">
          <img :src="isPoster(item.posters)" />
          <div class="txt-box" v-if="item.posters">
            <p class="simple-plot">
              {{ item.plots.plot[0].plotText }}
            </p>
            <span class="director"
              >감독 :
              {{ replaceNm(item.directors.director[0].directorNm) }}</span
            >
            <span class="more">자세히 > </span>
          </div>
        </a>
        <div class="title-box">
          <strong class="movie-title titleNm">{{
            replaceNm(item.title)
          }}</strong>
          <span class="eng-title titleNm">{{ engTitle(item.titleEng) }}</span>
          <span class="date">{{ repRlsDate(item.repRlsDate) }}</span>
        </div>
      </li>
    </ul>
    <div class="notFound-msg" v-else>
      <p>검색결과가 없습니다.</p>
    </div>
  </div>
</template>

<script>
import {
  replaceName,
  repRlsDateReplace,
  postSplit,
  engTitleSplit,
  allReplaceName,
  specialCharRemove,
} from '@/utils/filters';
import {
  saveItemToCookie,
  saveDirectorToCookie,
  saveFavoriteToCookie,
} from '@/utils/cookies';
import { mapState, mapActions, mapMutations } from 'vuex';
import bus from '@/utils/bus';

export default {
  data() {
    return {
      noPoster: require('@/assets/images/noPosterimages.png'),
    };
  },
  computed: {
    ...mapState([
      'inputValue',
      'option',
      'movieResult',
      'movieData',
      'keyword',
    ]),
    optionMsg() {
      return this.option == 'title'
        ? '"제목" 으로'
        : this.option == 'director'
        ? '"감독" 으로'
        : this.option == 'keyword'
        ? '"키워드" 로'
        : '"장르" 로';
    },
  },
  created() {
    //리스트 카운트 같이 보내주기.
    const listCount = 'listCount=100&';
    this.FETCH_LIST(`${listCount}${this.option}=${this.inputValue}`);
  },
  methods: {
    ...mapActions(['FETCH_LIST', 'FETCH_KEYWORD']),
    ...mapMutations(['set_detailItem', 'set_keyword']),
    replaceNm(name) {
      return replaceName(name);
    },
    repRlsDate(date) {
      return repRlsDateReplace(date);
    },
    allReplaceNm(name) {
      return allReplaceName(name);
    },
    spcCharRemove(list) {
      return specialCharRemove(list);
    },
    isPoster(posters) {
      return posters ? postSplit(posters) : this.noPoster;
    },
    engTitle(title) {
      return engTitleSplit(title);
    },
    detailInfoPage(item) {
      // const keywords = item.keywords;
      const keyword = this.spcCharRemove(item.keywords);
      const genre = this.spcCharRemove(item.genre);

      this.set_detailItem(item);

      let OPTION = 'keyword';
      //만약 키워드가 없다면 장르로 전달
      if (keyword) {
        this.set_keyword(`${OPTION}=${keyword}`);
        console.log('키워드 전달', keyword);
      } else {
        OPTION = 'genre';
        this.set_keyword(`${OPTION}=${genre}`);
        console.log('키워드가 없어서 장르 전달', genre);
      }
      //디테일페이지로 이동
      this.$router.push('/movieInfo');
    },
  },
};
</script>

<style></style>
