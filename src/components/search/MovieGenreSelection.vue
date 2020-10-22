<template>
  <div class="genre-select">
    <h3>영화 장르별 검색</h3>
    <div class="genres-btn">
      <button
        @click="selectData('genre', item)"
        v-for="(item, index) in genres"
        :key="index"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
import { saveTitleToCookie, saveTypeToCookie } from '@/utils/cookies';
export default {
  data() {
    return {
      genres: [
        '로맨스',
        '스릴러',
        '애니메이션',
        '공포',
        '드라마',
        '판타지',
        '액션',
        'SF',
      ],
    };
  },
  methods: {
    selectData(selected, item) {
      this.$store.commit('set_value', item);
      this.$store.commit('set_option', selected);

      saveTypeToCookie(item);
      saveTitleToCookie(selected);

      this.$router.push('/movieList');
    },
  },
};
</script>

<style></style>
