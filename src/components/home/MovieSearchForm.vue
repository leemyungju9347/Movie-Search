<template>
  <div class="search-form">
    <h3>영화 검색</h3>
    <form @submit.prevent="submitData">
      <div class="option-box">
        <div
          class="option-list"
          :class="item.value"
          v-for="(item, index) in options"
          :key="index"
        >
          <input
            type="radio"
            :id="item.value"
            name="option"
            :value="item.value"
            v-model="inputOption"
          />
          <label :for="item.value"><span></span>{{ item.text }}</label>
        </div>
      </div>
      <input type="text" v-model="inputValue" :placeholder="placeholder" />
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
</template>

<script>
import { saveToCookie, deleteCookie } from '@/utils/cookies';
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      inputValue: '',
      inputOption: 'title',
      options: [
        {
          text: '제목',
          value: 'title',
        },
        {
          text: '감독',
          value: 'director',
        },
        {
          text: '키워드',
          value: 'keyword',
        },
        {
          text: '장르',
          value: 'genre',
        },
      ],
    };
  },
  created() {
    deleteCookie('movie_value');
    deleteCookie('movie_option');
    this.clear_data();
  },
  computed: {
    placeholder() {
      return `${
        this.inputOption == 'title'
          ? '제목을'
          : this.inputOption == 'director'
          ? '감독을'
          : this.inputOption == 'keyword'
          ? '키워드를'
          : '장르를'
      } 입력해주세요.`;
    },
  },
  methods: {
    ...mapMutations(['set_option', 'set_value', 'clear_data']),
    submitData() {
      //input값을 입력 받았을때만 처리, 빈값일 경우 버튼을 눌러도 이동하지 않음.
      if (this.inputValue) {
        // cookie 저장
        saveToCookie('movie_option', this.inputOption);
        saveToCookie('movie_value', this.inputValue);

        // store 저장
        // this.$store.commit('set_option', this.inputOption);
        // this.$store.commit('set_value', this.inputValue);
        this.set_option(this.inputOption);
        this.set_value(this.inputValue);

        this.inputValue = '';

        this.$router.push('/movieList'); //movie 검색 결과 페이지로 이동
      }
    },
  },
};
</script>

<style></style>
