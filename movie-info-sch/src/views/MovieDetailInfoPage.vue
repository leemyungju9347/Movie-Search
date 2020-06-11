<template>
  <div class="detail-page-wrap">
    <MovieDetailInfo></MovieDetailInfo>
    <SimilarContents></SimilarContents>
  </div>
</template>

<script>
import MovieDetailInfo from '@/components/MovieDetailInfo.vue';
import SimilarContents from '@/components/SimilarContents.vue';

export default {
  components: { MovieDetailInfo, SimilarContents },
};
</script>

<style></style>
