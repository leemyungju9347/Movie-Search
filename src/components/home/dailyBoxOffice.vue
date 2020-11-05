<template>
  <div class="daily-boxOffice">
    <h3>박스오피스</h3>
    <div class="boxOffice-slide">
      <transition-group tag="ul" name="boxOfficeSlide">
        <li
          v-for="(item, index) in boxOfficeList"
          v-show="slideIdx === index"
          :key="index + 0"
          ref="slideItem"
          @click.prevent="clickMovie(item.movieNm)"
        >
          <a href="">
            <span>{{ index + 1 }}.</span>
            {{ item.movieNm }}
          </a>
        </li>
      </transition-group>
      <!-- <ul ref="listSlide"></ul> -->
      <div v-if="boxOfficeList.length == 0" class="loading-wrap">
        <loadingSpinner></loadingSpinner>
      </div>
      <div class="slide-btn">
        <button class="prev" @click="prevSlideBtn">
          <i class="fas fa-caret-up"></i>
        </button>
        <button class="next" @click="nextSlideBtn">
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
  data() {
    return {
      slideIdx: 0,
    };
  },
  components: { loadingSpinner },
  computed: {
    ...mapState(['boxOfficeList']),
  },
  created() {
    console.log('박스오피스 created');
    const yesterday = this.boxOfficeDate();
    this.FETCH_BOXOFFICE(yesterday);

    setInterval(this.nextSlideBtn, 5000);
  },
  beforeUpdate() {
    // const boxOfficeSlide = this.$refs.listSlide;
    // setTimeout(() => {
    //   init(boxOfficeSlide);
    // }, 2000);
  },
  methods: {
    ...mapActions(['FETCH_BOXOFFICE']),
    ...mapMutations(['set_value', 'set_option']),
    prevSlideBtn() {
      const maxIndex = this.boxOfficeList.length;
      const minIndex = 0;

      if (this.slideIdx === 0) {
        this.slideIdx = maxIndex - 1;
      } else {
        this.slideIdx--;
      }
    },
    nextSlideBtn() {
      const maxIndex = this.boxOfficeList.length;
      const minIndex = 0;

      if (this.slideIdx === maxIndex - 1) {
        this.slideIdx = minIndex;
      } else {
        this.slideIdx++;
      }
    },
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
