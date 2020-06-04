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
          <h3>
            <a :href="movieItem.kmdbUrl">{{ replaceNm(movieItem.title) }}</a>
          </h3>
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
              class="hover"
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
                <a
                  class="hover"
                  :href="`https://www.kmdb.or.kr/db/per/${item.actorId}`"
                >
                  <span>{{ item.actorNm }}</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- 수상내역 간단히, 더보기 링크 -->
          <div v-if="movieItem.Awards1 !== ''" class="min-awards">
            <b>수상내역</b>
            <p>{{ movieAwardsEdit(movieItem.Awards1) }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 영화 상세 정보들 -->
    <div class="detail-area">
      <!-- 줄거리 첫 문장 -->
      <!-- <p>{{ openingStc(movieItem.plots.plot[0].plotText) }}</p> -->
      <!-- 줄거리 -->
      <p class="movie-plot">{{ movieItem.plots.plot[0].plotText }}</p>
      <!-- 스틸컷 -->
      <div class="stills" v-if="movieItem.stlls !== ''">
        <ul class="clear">
          <li v-for="(item, index) in movieItem.stlls.split('|')" :key="index">
            <!-- <span :style="{ 'background-image': `url(${item})` }"></span> -->
            <img :src="item" alt="" />
          </li>
        </ul>
      </div>
      <!-- 전체 출연진 나열 -->
      <div class="actors-detail-list">
        <h4>출연진</h4>
        <ul class="clear">
          <li
            v-for="(people, index) in listsOfActorsPlus(movieItem.actors.actor)"
            :key="index"
          >
            <a :href="`https://www.kmdb.or.kr/db/per/${people.actorId}`">
              <span class="kor-nm">{{ people.actorNm }}</span
              ><br />
              <span class="eng-nm">{{ people.actorEnNm }}</span>
            </a>
          </li>
        </ul>
        <p class="list-more"><a href="">더보기</a></p>
      </div>
      <!-- 전체 수상내역 나열 -->
      <div class="all-awards" v-if="movieItem.Awards1 !== ''">
        <h4>수상정보</h4>
        <ul>
          <li
            v-for="(item, index) in allMovieAwards(movieItem.Awards1)"
            :key="index"
          >
            <span>{{ item[0] }} : </span>
            <span>{{ item[1] }}</span>
          </li>
        </ul>
        <p class="list-more"><a href="">더보기</a></p>
      </div>
      <div class="keyword" v-if="movieItem.keywords !== ''">
        <h4>키워드</h4>
        <ul>
          <li
            v-for="(item, index) in movieItem.keywords.split(',')"
            @click.prevent="sendKeword(item)"
            :key="index"
          >
            <a href=""># {{ item }}</a>
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
      let actorsArr = [];
      const minNum = 4;
      if (actors.length > 4) {
        for (let i = 0; i < minNum; i++) {
          actorsArr.push(actors[i]);
        }
        return actorsArr;
      } else return actors;
    },
    listsOfActorsPlus(actors) {
      const maxNum = 8;
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
      this.$store.commit('set_option', 'keyword');
      this.$store.commit('set_value', item);
      this.$router.push('/movieList');
    },
    //이전 페이지로 돌아가는 동작
    PrevBehav() {
      this.$router.go(-1);
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
