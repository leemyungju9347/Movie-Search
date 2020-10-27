<template>
  <div class="similar-contents">
    <h5>비슷한 컨텐츠</h5>
    <ul class="similar-list">
      <li v-for="(item, index) in keyResult" :key="index">
        <a href="">
          <img :src="isPoster(item.posters)" alt="" />
          <strong class="sim-title">{{ item.title }}</strong>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { postSplit } from '@/utils/filters';
export default {
  data() {
    return {
      keyword: this.$store.state.keyword,
      noPoster: require('@/assets/images/noPosterimages.png'),
    };
  },
  computed: {
    keyResult() {
      return this.$store.state.keyResult;
    },
  },
  created() {
    const listCount = 'listCount=50&';
    this.$store.dispatch('FETCH_KEYWORD', `${listCount}${this.keyword}`);
  },
  methods: {
    isPoster(posters) {
      return posters ? postSplit(posters) : this.noPoster;
    },
  },
};
</script>

<style></style>
