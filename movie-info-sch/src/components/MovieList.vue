<template>
  <div class="contents" v-if="movieList">
    <ul class="movie-wrapper">
      <li class="movie-list" v-for="(item, index) in movieList" :key="index">
        <a @click.prevent="detailInfoPage(item)" class="poster-wrapper">
          <img :src="isPoster(item.posters)" />
          <div class="desc_wrap" v-if="item.posters">
            <p class="desc">줄거리 : {{ item.plots.plot[0].plotText }}</p>
            <span
              >감독 :
              {{ replaceNm(item.directors.director[0].directorNm) }}</span
            >
            <span class="more">자세히 > </span>
          </div>
        </a>
        <div class="txt-box">
          <strong class="movie-title">{{ replaceNm(item.title) }}</strong>
          <span class="eng-title">{{ item.titleEng }}</span>
          <span class="date">{{ repRlsDate(item.repRlsDate) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { replaceName, repRlsDateReplace, postSplit } from '@/utils/replaceItem';
export default {
  data() {
    return {
      inputValue: this.$store.state.inputValue,
      option: this.$store.state.option,
      noPoster: require('@/assets/images/noPosterimages.png'),
    };
  },
  computed: {
    movieList() {
      return this.$store.state.movieList;
    },
  },
  created() {
    this.$store.dispatch('FETCH_LIST', `${this.option}=${this.inputValue}`);
  },
  methods: {
    replaceNm(name) {
      return replaceName(name);
    },
    repRlsDate(date) {
      return repRlsDateReplace(date);
    },
    detailInfoPage(item) {
      this.$store.commit('set_deepItem', item); // 클릭한 영화의 배열 저장
      this.$router.push('/movieInfo');
    },
    isPoster(posters) {
      return posters ? postSplit(posters) : this.noPoster;
    },
  },
};
</script>

<style></style>
