<template>
  <div class="header_wrap">
    <h1 class="main_logo">
      <!-- <a href="" class="playfair" @click="goHome">The Movie</a> -->
      <router-link to="/" class="playfair">The Movie</router-link>
    </h1>
    <!-- <button @click="prevPage">이전</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/search');
    },
    prevPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
