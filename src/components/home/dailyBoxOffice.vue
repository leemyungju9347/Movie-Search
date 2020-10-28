<template>
  <div class="daily-boxOffice">
    <h3>박스오피스</h3>
    <div class="boxOffice-slide">
      <ul ref="listSlide">
        <li
          v-for="(item, index) in boxOfficeList"
          :key="index"
          ref="slideItem"
          @click.prevent="clickMovie(item.movieNm)"
        >
          <a href="">
            <span>{{ index + 1 }}.</span>
            {{ item.movieNm }}
          </a>
        </li>
      </ul>
      <div v-if="boxOfficeList.length == 0" class="loading-wrap">
        <loadingSpinner></loadingSpinner>
      </div>
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
import { mapState, mapActions, mapMutations } from 'vuex';
import { init, nextSlide } from '@/assets/js/slide';
import yesterdayFormat from '@/utils/format';
import { saveToCookie } from '@/utils/cookies';
import loadingSpinner from '@/components/common/loadingSpinner.vue';

export default {
  components: { loadingSpinner },
  computed: {
    ...mapState(['boxOfficeList']),
  },
  created() {
    const yesterday = this.boxOfficeDate();
    this.FETCH_BOXOFFICE(yesterday);
  },
  beforeUpdate() {
    const boxOfficeSlide = this.$refs.listSlide;

    setTimeout(() => {
      init(boxOfficeSlide);
    }, 2000);
  },
  methods: {
    ...mapActions(['FETCH_BOXOFFICE']),
    ...mapMutations(['set_value', 'set_option']),
    nextSlide() {
      return nextSlide();
    },
    boxOfficeDate() {
      return yesterdayFormat();
    },
    clickMovie(item) {
      const option = 'title';

      saveToCookie('movie_option', option);
      saveToCookie('movie_value', item);

      this.set_option(option);
      this.set_value(item);

      this.$router.push('/movieList');
    },
  },
};
</script>

<style></style>
