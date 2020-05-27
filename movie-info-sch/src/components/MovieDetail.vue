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
      inputValue: this.$store.state.inputValue,
    };
  },
  computed: {
    movieList() {
      return this.$store.state.movieList;
    },
  },
  created() {
    this.$store.dispatch('FETCH_LIST', this.inputValue);
  },
  methods: {},
};
</script>

<style></style>
