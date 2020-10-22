<template>
  <div class="main">
    <weeklyBoxOffice></weeklyBoxOffice>
    <MovieSearchForm></MovieSearchForm>
    <MovieGenreSelection></MovieGenreSelection>
  </div>
</template>

<script>
import MovieSearchForm from '@/components/search/MovieSearchForm.vue';
import MovieGenreSelection from '@/components/search/MovieGenreSelection.vue';
import weeklyBoxOffice from '@/components/weeklyBoxOffice.vue';

export default {
  components: { MovieSearchForm, MovieGenreSelection, weeklyBoxOffice },
};
</script>

<style></style>
