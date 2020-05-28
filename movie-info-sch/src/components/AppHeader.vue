<template>
  <div class="header_wrap">
    <h1 class="main_logo" @click="goHome">
      <a href="" class="playfair">The Movie</a>
    </h1>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/search');
    },
  },
};
</script>

<style></style>
