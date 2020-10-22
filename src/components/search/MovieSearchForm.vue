<template>
  <div class="search-form">
    <!-- <h3>Search</h3> -->
    <h3>영화 검색</h3>
    <form @submit.prevent="submitData">
      <!-- <select v-model="selected">
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
          >{{ option.text }}</option
        >
        <input type="text" />
      </select> -->
      <div class="radio-box">
        <div
          class="radio-list"
          :class="item.value"
          v-for="(item, index) in options"
          :key="index"
        >
          <input type="radio" :id="item.value" name="option" />
          <label :for="item.value"><span></span>{{ item.text }}</label>
        </div>
      </div>
      <input type="text" v-model="inputValue" :placeholder="placeholder" />
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
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
    deleteCookie('movie_type');
    deleteCookie('favorite_item');
  },
  mounted() {
    const formEl = this.$el;
    const titleRadioInput = formEl.querySelector('.radio-list.title > input');
    titleRadioInput.checked = true;
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
