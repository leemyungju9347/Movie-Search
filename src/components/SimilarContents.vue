<template>
  <div class="similar-contents" v-if="keyResult">
    <h5>비슷한 컨텐츠</h5>
    <ul class="similar-list">
      <li v-for="(item, index) in keyResult" :key="index">
        <a href="" @click.prevent="clickMovieInfo(item, item.title)">
          <img :src="isPoster(item.posters)" alt="" />
          <strong class="sim-title">{{ item.title }}</strong>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { postSplit } from '@/utils/filters';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      noPoster: require('@/assets/images/noPosterimages.png'),
    };
  },
  computed: {
    ...mapState(['keyResult', 'keyword']),
  },
  created() {
    const listCount = 'listCount=50&';
    this.FETCH_KEYWORD(`${listCount}${this.keyword}`);
  },
  methods: {
    ...mapActions(['FETCH_KEYWORD']),
    ...mapMutations(['set_detailItem']),
    isPoster(posters) {
      return posters ? postSplit(posters) : this.noPoster;
    },
    clickMovieInfo(item, title) {
      console.log(item);
      this.set_detailItem(item);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
