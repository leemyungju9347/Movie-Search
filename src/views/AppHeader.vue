<template>
  <div>
    <!-- 앱헤더 컴포넌트 -->
    <AppHeader></AppHeader>
    <!-- 내가 찜한 영화 컴포넌트-->
    <FavoriteHeader></FavoriteHeader>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader.vue';
import FavoriteHeader from '@/components/header/FavoriteHeader.vue';
export default {
  components: { AppHeader, FavoriteHeader },
};
</script>

<style></style>
