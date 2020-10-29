<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view class="router-area"></router-view>
    <loadingSpinner v-if="loadingStatus"></loadingSpinner>
  </div>
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
import { mapState } from 'vuex';
import loadingSpinner from '@/components/common/loadingSpinner.vue';
import bus from '@/utils/bus';

export default {
  components: { AppHeader, loadingSpinner },
  data() {
    return {
      loadingStatus: false,
    };
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  mounted() {
    bus.$emit('start:spinner');
  },
  beforeDestroy() {
    bus.$off('start:spinner');
    bus.$off('end:spinner');
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
};
</script>

<style>
@import './assets/css/common.css';
@import './assets/css/reset.css';
@import './assets/css/loadingSpinner.css';
</style>
