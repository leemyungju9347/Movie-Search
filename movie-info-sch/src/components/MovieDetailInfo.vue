<template>
  <div
    class="contents"
    v-if="movieItem && movieItem.directors && movieItem.plots"
  >
    <div class="movie-info">
      <div class="poster">
        <img :src="isPoster(movieItem.posters)" alt="" />
      </div>
      <div class="summary-area">
        <div class="subject">
          <h3>{{ replaceNm(movieItem.title) }}</h3>
          <span class="eng-title">{{ engTitle(movieItem.titleEng) }}</span>
        </div>
        <div class="summary">
          <!-- 장르/국가 -->
          <div class="txt-list">
            <span>{{ movieItem.genre }} </span>
            <span class="nation">{{ movieItem.nation }} </span><br />
          </div>
          <!-- 개봉일,관람등급,러닝타입 -->
          <div class="txt-list">
            <span>{{ repRlsDate(movieItem.repRlsDate) }} 개봉</span>
            <span class="borderline">{{
              ratingGrade(movieItem.ratings.rating[0].ratingGrade)
            }}</span>
            <span class="borderline">{{ movieItem.runtime }}분</span>
          </div>
          <p class="director">
            <b>감독 :</b>
            <a
              :href="
                `https://www.kmdb.or.kr/db/per/${movieItem.directors.director[0].directorId}`
              "
            >
              {{ replaceNm(movieItem.directors.director[0].directorNm) }}
            </a>
          </p>
          <div class="actors-wrap">
            <b>출연 :</b>
            <ul>
              <li
                v-for="(item, index) in listsOfActors(movieItem.actors.actor)"
                :key="index"
              >
                <a :href="`https://www.kmdb.or.kr/db/per/${item.actorId}`">
                  <span>{{ item.actorNm }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-area">
      <!-- 줄거리 첫 문장 -->
      <!-- <p>{{ openingStc(movieItem.plots.plot[0].plotText) }}</p> -->
      <!-- 줄거리 -->
      <p class="movie-plot">{{ movieItem.plots.plot[0].plotText }}</p>
      <!-- 스틸컷 -->
      <div class="stills">
        <ul class="clear">
          <li v-for="(item, index) in movieItem.stlls.split('|')" :key="index">
            <span :style="{ 'background-image': `url(${item})` }"></span>
          </li>
        </ul>
      </div>
      <div class="actors-detail-list"></div>
    </div>
  </div>
</template>

<script>
import {
  replaceName,
  repRlsDateReplace,
  postSplit,
  engTitleSplit,
} from '@/utils/replaceItem';
export default {
  data() {
    return {
      movieItem: this.$store.state.deepItem,
      noPoster: require('@/assets/images/noPosterimages.png'),
    };
  },
  created() {},
  methods: {
    replaceNm(name) {
      return replaceName(name);
    },
    repRlsDate(date) {
      return repRlsDateReplace(date);
    },
    isPoster(posters) {
      return posters ? postSplit(posters) : this.noPoster;
    },
    //actor.length가 4개 이하인 경우도 있으니 예외처리해줘야 함.
    listsOfActors(actors) {
      const len = actors.length;
      let actorsArr = [];
      if (len > 4) {
        for (let i = 0; i < 4; i++) {
          actorsArr.push(actors[i]);
        }
      } else {
        for (let i = 0; i < len; i++) {
          actorsArr.push(actors[i]);
        }
      }
      return actorsArr;
    },
    //관람등급
    ratingGrade(grade) {
      if (grade.includes('||')) {
        return grade.split('||')[0];
      } else {
        return grade;
      }
    },
    engTitle(title) {
      return engTitleSplit(title);
    },
    // 첫문장 출력하기
    // 문제점 : 첫문장에서 끝나는 특수문자가 일정하지 않다 지금까지 검색한 첫 문장은 마침표,괄호,느낌표 등으로 다양하게 끝나는데,
    // 조건을 어떻게, 예외처리는 또 어떻게 줘야할까.
    // 지금까지 본 첫문장 패턴 : .마침표, [] or () 괄호, !느낌표 등으로 끝남
    // openingStc(sentence) {
    // },
  },
};
</script>

<style></style>
