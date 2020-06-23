<template>
  <div class="search-page">
    <MovieSearchForm></MovieSearchForm>
    <MovieGenreSelection></MovieGenreSelection>
  </div>
</template>

<script>
import MovieSearchForm from '@/components/search/MovieSearchForm.vue';
import MovieGenreSelection from '@/components/search/MovieGenreSelection.vue';
export default {
  components: { MovieSearchForm, MovieGenreSelection },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
