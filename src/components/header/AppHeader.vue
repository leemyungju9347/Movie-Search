<template>
  <div class="header">
    <h1 class="main_logo">
      <router-link to="/">The Movie</router-link>
    </h1>
    <span>영화 검색 서비스</span>
    <div class="favorite-box">
      <a href="">
        <i class="fas fa-heart"></i>
        내가 찜한 컨텐츠
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    prevPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
