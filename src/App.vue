<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view class="router-area"></router-view>
  </div>
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
import { mapState } from 'vuex';

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
