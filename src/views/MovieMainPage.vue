<template>
  <div class="main">
    <dailyBoxOffice></dailyBoxOffice>
    <MovieSearchForm></MovieSearchForm>
    <MovieGenreSelection></MovieGenreSelection>
  </div>
</template>

<script>
import MovieSearchForm from '@/components/home/MovieSearchForm.vue';
import MovieGenreSelection from '@/components/home/MovieGenreSelection.vue';
import dailyBoxOffice from '@/components/home/dailyBoxOffice.vue';
import spinnerMixins from '@/mixins/spinnerMixins';

export default {
  components: { MovieSearchForm, MovieGenreSelection, dailyBoxOffice },
  mixins: [spinnerMixins],
};
</script>

<style></style>
