<template>
  <div class="weekly-boxOffice">
    <h3>주간 박스오피스</h3>

    <div class="boxOffice-slide">
      <ul ref="listSlide">
        <li v-for="(item, index) in boxOffice" :key="index" ref="slideItem">
          <a href="">
            <span>{{ index + 1 }}.</span>
            {{ item.movieNm }}
          </a>
        </li>
      </ul>
      <p v-if="boxOffice.length == 0">데이터 불러오는 중...</p>
      <div class="slide-btn">
        <button class="prev"><i class="fas fa-caret-up"></i></button>
        <button class="next" @click.prevent="nextSlide">
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { init, nextSlide } from '@/assets/js/slide';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['boxOffice']),
  },
  created() {
    this.$store.dispatch('FETCH_BOXOFFICE', '20201018');
  },
  mounted() {
    // const boxOfficeSlide = this.$refs.listSlide;
    // init(boxOfficeSlide);
  },
  beforeUpdate() {
    const boxOfficeSlide = this.$refs.listSlide;

    setTimeout(() => {
      init(boxOfficeSlide);
    }, 2000);
  },
  methods: {
    nextSlide() {
      return nextSlide();
    },
  },
};
</script>

<style></style>
