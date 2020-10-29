<template>
  <MovieList></MovieList>
</template>

<script>
import MovieList from '@/components/MovieList.vue';
import spinnerMixins from '@/mixins/spinnerMixins';

export default {
  components: { MovieList },
  mixins: [spinnerMixins],
};
</script>

<style></style>
