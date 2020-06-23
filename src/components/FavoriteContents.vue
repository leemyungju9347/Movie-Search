<template>
  <div>
    내가 좋아한 컨텐츠 리스트 입니다.
    <p>{{ movieSeq }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieSeq: this.$store.state.movieSeq,
    };
  },
  created() {
    console.log(this.$store.state.movieSeq);
  },
};
</script>

<style></style>
