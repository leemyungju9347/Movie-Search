<template>
  <div
    class="info-contents"
    v-if="detailItem && detailItem.directors && detailItem.plots"
  >
    <div class="movie-info">
      <div class="poster">
        <img :src="isPoster(detailItem.posters)" alt="" />
      </div>
      <!-- 영화 정보 요약 리스트 -->
      <div class="summary-area">
        <div class="subject">
          <h4>
            <a target="_blank" :href="detailItem.kmdbUrl">{{
              replaceNm(detailItem.title)
            }}</a>
          </h4>
          <span class="eng-title">{{ engTitle(detailItem.titleEng) }}</span>
        </div>
        <div class="summary">
          <!-- 장르/국가 -->
          <div class="txt-list">
            <span>{{ detailItem.genre }} </span>
            <span class="nation">{{ detailItem.nation }} </span><br />
          </div>
          <!-- 개봉일,관람등급,러닝타입 -->
          <div class="txt-list">
            <span>{{ repRlsDate(detailItem.repRlsDate) }} 개봉</span>
            <span class="borderline">{{
              ratingGrade(detailItem.ratings.rating[0].ratingGrade)
            }}</span>
            <span class="borderline">{{ detailItem.runtime }}분</span>
          </div>
          <!-- 감독 -->
          <p class="director">
            <b>감독 :</b>
            <a
              target="_blank"
              :href="
                `https://www.kmdb.or.kr/db/per/${detailItem.directors.director[0].directorId}`
              "
            >
              <span>{{
                replaceNm(detailItem.directors.director[0].directorNm)
              }}</span>
            </a>
          </p>
          <!-- 출연진 -->
          <div class="actors-wrap">
            <b>출연 :</b>
            <ul>
              <li
                v-for="(item, index) in listsOfActors(detailItem.actors.actor)"
                :key="index"
              >
                <a
                  target="_blank"
                  :href="`https://www.kmdb.or.kr/db/per/${item.actorId}`"
                >
                  <span>{{ item.actorNm }}</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- 수상내역 간단히 -->
          <div v-if="detailItem.Awards1 !== ''" class="min-awards">
            <b>수상내역</b>
            <p>{{ movieAwardsEdit(detailItem.Awards1) }}</p>
          </div>
          <button class="goSimConts-btn">
            비슷한 컨텐츠<i class="fas fa-angle-double-right"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- 영화 상세 정보들 -->
    <div class="detail-area">
      <p class="movie-plot">{{ detailItem.plots.plot[0].plotText }}</p>
      <!-- 스틸컷 -->
      <!-- <span :style="{ 'background-image': `url(${item})` }"></span> -->
      <div class="stills" v-if="detailItem.stlls !== ''">
        <transition-group tag="ul" name="slide">
          <li
            v-for="(item, index) in detailItem.stlls.split('|')"
            :key="index + 0"
          >
            <img v-show="slideIdx == index" :src="item" alt="" />
          </li>
        </transition-group>
        <button class="prev" @click="prevStill">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next" @click="nextStill">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <!-- 키워드 -->
      <div class="keyword detailInfo-list" v-if="detailItem.keywords !== ''">
        <h5>키워드</h5>
        <ul>
          <li
            v-for="(item, index) in detailItem.keywords.split(',')"
            @click.prevent="sendKeword(item)"
            :key="index"
          >
            <a href=""># {{ item }}</a>
          </li>
        </ul>
      </div>
      <!-- 전체 출연진 나열 -->
      <div
        class="actors-detail-list detailInfo-list"
        v-if="detailItem.actors.actor[0].actorNm !== 0"
      >
        <h5>출연진</h5>
        <ul>
          <li
            v-for="(people, index) in listsOfActorsPlus(
              detailItem.actors.actor,
            )"
            :key="index"
          >
            <a
              target="_blank"
              :href="`https://www.kmdb.or.kr/db/per/${people.actorId}`"
            >
              <span class="kor-nm">{{ people.actorNm }}</span>
              <span class="eng-nm">{{ people.actorEnNm }}</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 전체 수상내역 나열 -->
      <div class="all-awards detailInfo-list" v-if="detailItem.Awards1 !== ''">
        <h5>수상정보</h5>
        <ul>
          <li
            v-for="(item, index) in allMovieAwards(detailItem.Awards1)"
            :key="index"
          >
            <span>{{ item[0] }} : </span>
            <span>{{ item[1] }}</span>
          </li>
        </ul>
      </div>
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
} from '@/utils/filters';
import { saveToCookie } from '@/utils/cookies';

import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      noPoster: require('@/assets/images/noPosterimages.png'),
      slideIdx: 0,
    };
  },
  computed: {
    ...mapState(['detailItem', 'mapMutations']),
  },
  methods: {
    ...mapMutations(['set_value', 'set_option']),
    // 이전 스틸컷
    prevStill() {
      const max = this.detailItem.stlls.split('|').length;
      const min = 0;
      if (this.slideIdx == min) {
        this.slideIdx = max - 1;
      } else {
        this.slideIdx--;
      }
    },
    // 다음 스틸컷
    nextStill() {
      const max = this.detailItem.stlls.split('|').length;
      const min = 0;
      if (this.slideIdx == max - 1) {
        this.slideIdx = min;
      } else {
        this.slideIdx++;
      }
    },
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
      let actorsArr = [];
      const minNum = 4;
      if (actors.length > minNum) {
        for (let i = 0; i < minNum; i++) {
          actorsArr.push(actors[i]);
        }
        return actorsArr;
      } else return actors;
    },
    //detail-area 배우 리스트
    listsOfActorsPlus(actors) {
      const maxNum = 10;
      let actorsArr = [];
      if (actors.length < maxNum) {
        return actors;
      } else {
        for (let i = 0; i < maxNum; i++) {
          actorsArr.push(actors[i]);
        }
        return actorsArr;
      }
    },
    //관람등급
    ratingGrade(grade) {
      if (grade.includes('||')) {
        return grade.split('||')[0];
      } else {
        return grade;
      }
    },
    //영어 타이틀
    engTitle(title) {
      return engTitleSplit(title);
    },
    movieAwardsEdit(award) {
      return award.split('|')[0];
    },
    allMovieAwards(award) {
      const arr = award.split('|');
      const newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split(':'));
      }

      return newArr;
    },
    //키워드
    sendKeword(item) {
      const option = 'keyword';

      // cookie 저장
      saveToCookie('movie_option', option);
      saveToCookie('movie_value', item);

      // store 저장
      this.set_option(option);
      this.set_value(item);

      this.$router.push('/movieList');
    },
    //이전 페이지로 돌아가는 동작
    prevPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
