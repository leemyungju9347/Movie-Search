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
          <span class="eng-title">{{ engTitle(item.titleEng) }}</span>
          <span class="date">{{ repRlsDate(item.repRlsDate) }}</span>
        </div>
        <button class="favor-btn" @click.prevent="favorMovie(item)">
          좋아요
        </button>
      </li>
    </ul>
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
export default {
  data() {
    return {
      inputValue: this.$store.state.inputValue,
      selected: this.$store.state.selected,
      noPoster: require('@/assets/images/noPosterimages.png'),
    };
  },
  computed: {
    movieList() {
      return this.$store.state.movieList;
    },
  },
  created() {
    //리스트 카운트 같이 보내주기.
    const listCount = 'listCount=100&';
    this.$store.dispatch(
      'FETCH_LIST',
      `${listCount}${this.selected}=${this.inputValue}`,
    );
  },
  methods: {
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
    detailInfoPage(item) {
      /* 
        - 키워드 쿠키에 저장?
        - 키워드 열개이상 출력할것
        - 변수 이름 수정해주기
        ** 해결할 부분
        1. 키워드 0번째가 아닌 1번째꺼 불러 올 경우 - 키워드가 한개밖에 없다면?
        2. 키워드 출력했을때 10개 이하인 경우
        3. 10개 이상으로 너무 많을 경우 예외처리
          - 방법1 : 함수로 조건문을 걸어서 처리해줌
          - 방법2 : api로 인자 보내줄때 리스트 갯수도 같이 보내줌 (깔끔한 출력이 보장되지만 처리가 복잡해질 수 있음..)
      */

      //트롤 - 코메디인데 출력이 안됨.. 왜그럴까 -> 보내줄 때 타입 수정해주기!!
      //엠마

      //키워드를 배열로 보내줄 수는 있으나 그렇게하면 오히려 배열 모두에게 만족하는 공통된 결과만 출력하기 때문에 출력 범위가 줄어든다.
      //각 하나씩 보내는게 다양한 키워드를 출력할 수 있을 것 같다.
      const keyword = this.spcCharRemove(item.keywords);
      const genre = this.spcCharRemove(item.genre);

      this.$store.commit('set_deepItem', item); // 클릭한 영화의 배열 저장
      let option = 'keyword';
      //만약 키워드가 없다면 장르로 전달
      if (keyword) {
        this.$store.commit('set_keyword', `${option}=${keyword}`);
      } else {
        option = 'genre';
        this.$store.commit('set_keyword', `${option}=${genre}`);
        console.log('키워드가 없어서 장르 전달', genre);
      }
      //디테일페이지로 이동
      this.$router.push('/movieInfo');
    },
    isPoster(posters) {
      return posters ? postSplit(posters) : this.noPoster;
    },
    engTitle(title) {
      return engTitleSplit(title);
    },
    favorMovie(item) {
      const movieSeq = `movieSeq=${item.movieSeq}`;

      console.log(movieSeq);
      saveFavoriteToCookie(movieSeq);
      //클릭한 아이템을 쿠키에 저장
    },
  },
};
</script>

<style></style>
