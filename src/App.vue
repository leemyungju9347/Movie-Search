<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view class="router-area"></router-view>
    <!-- <loadingSpinner></loadingSpinner> -->
  </div>
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
import { mapState } from 'vuex';
// import loadingSpinner from '@/components/common/loadingSpinner.vue';
export default {
  components: { AppHeader },
};
</script>

<style>
@import './assets/css/common.css';
@import './assets/css/reset.css';
@import './assets/css/loadingSpinner.css';
</style>
