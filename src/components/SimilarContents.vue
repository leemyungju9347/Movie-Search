<template>
  <div class="similar-contents" v-if="keyResult">
    <h5>비슷한 컨텐츠</h5>
    <ul class="similar-list">
      <li v-for="(item, index) in keyResultFilter" :key="index">
        <a href="" @click.prevent="clickMovieInfo(item, item.title)">
          <img :src="isPoster(item.posters)" alt="" />
        </a>
        <strong class="sim-title">{{ item.title }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import { postSplit, specialCharRemove } from '@/utils/filters';
import { mapState, mapActions, mapMutations } from 'vuex';
import bus from '@/utils/bus';

export default {
  data() {
    return {
      noPoster: require('@/assets/images/noPosterimages.png'),
    };
  },
  computed: {
    ...mapState(['keyResult', 'keyword', 'detailItem']),
    keyResultFilter() {
      const result = this.keyResult.filter(item => {
        return item.title != this.detailItem.title;
      });
      return result;
    },
  },
  created() {
    this.FETCH_KEYWORD(this.keyword);
    window.scrollTo(0, 0);
    console.log('created');
  },
  methods: {
    ...mapActions(['FETCH_KEYWORD']),
    ...mapMutations(['set_detailItem', 'set_keyword']),
    isPoster(posters) {
      return posters ? postSplit(posters) : this.noPoster;
    },
    spcCharRemove(list) {
      return specialCharRemove(list);
    },
    clickMovieInfo(item, title) {
      const keyword = this.spcCharRemove(item.keywords);
      const genre = this.spcCharRemove(item.genre);

      let OPTION = 'keyword';

      this.set_detailItem(item);

      // 키워드
      if (keyword) {
        OPTION = 'keyword';
        this.set_keyword(`${OPTION}=${keyword}`);
        this.FETCH_KEYWORD(this.keyword);

        // 장르
      } else {
        OPTION = 'genre';

        this.set_keyword(`${OPTION}=${genre}`);
        this.FETCH_KEYWORD(this.keyword);
      }

      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
