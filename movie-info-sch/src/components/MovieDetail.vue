<template>
  <div v-if="movieList">
    <ul v-for="(item, index) in movieList" :key="index">
      <li>
        <strong>{{ item.title.replace(/!HS|\s!HE\s/gi, '') }}</strong>
        <img v-if="item.posters" :src="item.posters.split('|')[0]" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieTitle: this.$store.state.title,
    };
  },
  computed: {
    //SearchInput에 입력한 값을 store에 저장하고 MovieDetail로 가져올 경우 movieDetail에서 확인이 안됨.. 왜일까?
    movieList() {
      return this.$store.state.movieList;
    },
  },
  created() {
    this.$store.dispatch('FETCH_LIST', this.movieTitle);
  },
  methods: {},
};
</script>

<style></style>
