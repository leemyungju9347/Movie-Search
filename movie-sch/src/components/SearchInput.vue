<template>
    <form @submit.prevent="submitData">
        <input type="text" name="" id="" v-model="title">
        <!-- <p>{{ movieList }}</p> -->
        <!-- <p>{{ this.$store.state.movie }}</p> -->
        <!-- <p>{{list}}</p> -->
        <!-- <button type="submit">검색</button> -->
        <!-- <router-link to="/movie">검색</router-link> -->
        <button type="submit">검색</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title:'',
            list:[]
        }
    },
    computed:{
        movieList(){
            return this.$store.state.movie
        }
        
    },
    methods:{
        // 문제점: 
        // 1. title 값이나, axios에서 받아온 데이터를 commit해서 state에 저장하고
        // 2. movieDetail에서 불러오면 값아 사라짐. 왜일까
        submitData(){
            this.$store.commit('set_title',this.title)
            this.$router.push('/movie')
        }
    }
}
</script>

<style>

</style>