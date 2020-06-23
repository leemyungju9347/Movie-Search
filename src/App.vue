<template>
  <div>
    <AppHeader class="app-header-area"></AppHeader>
    <div class="router-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import AppHeader from '@/components/header/AppHeader.vue';
import AppHeader from '@/views/AppHeader.vue';
export default {
  components: { AppHeader },
};
</script>

<style>
/* @import './css/reset.css';
@import './css/common.css'; */
@import './assets/css/common.css';
@import './assets/css/reset.css';
</style>
