<template>
  <form @submit.prevent="submitData">
    <select v-model="selected">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.text"
        >{{ option.text }}</option
      >
    </select>
    <input
      type="text"
      name=""
      id=""
      v-model="inputValue"
      :placeholder="placeholder"
    />
    <button type="submit">검색</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      selected: '제목',
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
      ],
    };
  },
  computed: {
    placeholder() {
      return this.selected == '키워드'
        ? this.selected + '를 입력해주세요.'
        : this.selected + '을 입력해주세요.';
    },
  },
  methods: {
    submitData() {
      //input값을 입력 받았을때만 처리, 빈값일 경우 버튼을 눌러도 이동하지 않음.
      if (this.inputValue) {
        // store에 inputValue 저장
        this.$store.commit('set_title', this.inputValue);
        console.log(this.inputValue);

        //선택된 option 보내기
        this.$store.commit('set_option', this.selected);

        this.title = '';

        this.$router.push('/movie'); //movie 검색 결과 페이지로 이동
      }
    },
  },
};
</script>

<style></style>
