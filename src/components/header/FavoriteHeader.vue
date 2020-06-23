<template>
  <div class="favorite-wrap">
    <button class="favorBtn" @click.prevent="goToFavorPage">
      내가 좋아한 컨텐츠
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goToFavorPage() {
      this.$router.push('/favorite');
    },
  },
};
</script>

<style>
/* button {
  position: absolute;
  right: 0;
} */
/* .favorBtn {
  z-index: 1000;
  border: 1px solid red;
} */
</style>
