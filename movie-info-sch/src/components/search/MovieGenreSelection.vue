<template>
  <div class="select-box">
    <h4>영화 장르를 선택해주세요.</h4>
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

      this.$router.push('/movieList');
    },
  },
};
</script>

<style></style>
