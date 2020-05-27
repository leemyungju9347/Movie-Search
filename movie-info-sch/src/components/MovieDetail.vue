<template>
  <div class="contents" v-if="movieList">
    <ul class="movie-wrapper">
      <li class="movie-list" v-for="(item, index) in movieList" :key="index">
        <img
          class="posters"
          v-if="item.posters"
          :src="item.posters.split('|')[0]"
          alt=""
        />
        <strong class="movie-title">{{
          item.title.replace(/!HS|\s!HE\s/gi, '')
        }}</strong>
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
    console.log('inputValue: ' + this.inputValue);
    console.log('option: ' + this.options);
    this.$store.dispatch('FETCH_LIST', `${this.options}=${this.inputValue}`);
  },
  methods: {},
};
</script>

<style></style>
