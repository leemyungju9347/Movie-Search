<template>
  <div class="contents" v-if="movieList">
    <ul class="movie-wrapper">
      <li class="movie-list" v-for="(item, index) in movieList" :key="index">
        <a :href="item.kmdbUrl" class="poster-wrapper">
          <img
            class="posters"
            v-if="item.posters"
            :src="item.posters.split('|')[0]"
            alt=""
          />
          <img v-else src="../images/noPosterimages.png" alt="" />
          <div class="desc_wrap" v-if="item.posters">
            <p class="desc">줄거리 : {{ item.plots.plot[0].plotText }}</p>
            <span>감독 : {{ directorNm(item.directors.director[0]) }}</span>
            <br />
            <span>출연 : {{ item.actors.actor[0].actorNm }} </span>
            <!-- <span>출연 : {{ actorList(item.actors) }} </span> -->
            <span class="more">자세히 > </span>
          </div>
        </a>
        <div class="txt-box">
          <strong class="movie-title">{{ replaceTitle(item.title) }}</strong>
          <span class="eng-title">{{ item.titleEng }}</span>
          <span class="date">{{ repRlsDateReplace(item.repRlsDate) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: this.$store.state.inputValue,
      options: this.$store.state.option,
    };
  },
  computed: {
    movieList() {
      return this.$store.state.movieList;
    },
  },
  created() {
    this.$store.dispatch('FETCH_LIST', `${this.options}=${this.inputValue}`);
  },
  methods: {
    replaceTitle(title) {
      return title.replace(/!HS|\s!HE\s/gi, '');
    },
    repRlsDateReplace(date) {
      return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    },
    directorNm(director) {
      return director.directorNm.replace(/!HS|\s!HE\s/gi, '');
    },
    // actorList(actors) {
    //   //console.log(actors.actor[0]);
    //   const actList = actors.actor.filter((v, i) => {
    //     return i < 3;
    //   });

    //   console.log(aa);
    //   return aa.join('');
    // },
  },
};
</script>

<style></style>
