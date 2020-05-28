<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  components: { AppHeader },
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
