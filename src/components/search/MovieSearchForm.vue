<template>
  <form @submit.prevent="submitData">
    <select v-model="selected">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        >{{ option.text }}</option
      >
      <input type="text" />
    </select>
    <input type="text" v-model="inputValue" :placeholder="placeholder" />
    <button type="submit">검색</button>
  </form>
</template>

<script>
import {
  saveTitleToCookie,
  saveTypeToCookie,
  deleteCookie,
} from '@/utils/cookies';
export default {
  data() {
    return {
      inputValue: '',
      title: '',
      selected: 'title',
      options: [
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Director',
          value: 'director',
        },
        {
          text: 'Keyword',
          value: 'keyword',
        },
        {
          text: 'Genre',
          value: 'genre',
        },
      ],
    };
  },
  created() {
    deleteCookie('movie_value');
    deleteCookie('movie_type');
    deleteCookie('favorite_item');
  },
  computed: {
    placeholder() {
      return `Please enter a ${this.selected}`;
    },
  },
  methods: {
    submitData() {
      //input값을 입력 받았을때만 처리, 빈값일 경우 버튼을 눌러도 이동하지 않음.
      if (this.inputValue) {
        // store에 inputValue 저장
        saveTypeToCookie(this.selected);
        saveTitleToCookie(this.inputValue);

        this.$store.commit('set_value', this.inputValue);

        //선택된 option 보내기
        this.$store.commit('set_option', this.selected);

        this.title = '';

        this.$router.push('/movieList'); //movie 검색 결과 페이지로 이동
      }
    },
  },
};
</script>

<style></style>
