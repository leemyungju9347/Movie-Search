<template>
    <form @submit.prevent="submitData">
        <input type="text" name="" id="" v-model="title">
        <!-- <p>{{ movieList }}</p> -->
        <p>{{ this.$store.state.movie }}</p>
        <button type="submit">검색</button>
        <!-- <router-link to="/movie">검색</router-link> -->
        <!-- <router-link to="/movie"><button type="submit">검색</button></router-link> -->
    </form>
</template>

<script>
import {movieSchApi} from '../api/index'
import { eventBus } from '../main.js'

export default {
    data() {
        return {
            title:'',
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
            //this.$store.dispatch('FETCH_LIST',this.title)
            //console.log(this.$store.state.list);
            //this.$store.commit('set_movie',this.data123)
            //this.$store.commit('set_movie',this.title)
            //console.log(this.$store.state.movie);

            movieSchApi(this.title).then(res=>{
                //this.movieList = res.data
                console.log(res.data);
                
                this.$store.state.movie = res.data
                // console.log(this.$store.state.movie);
            })
            this.$store.commit('set_title',this.title)
            console.log(this.$store.state.title);
            
            eventBus.inputTitle(this.title)
        }
    }
}
</script>

<style>

</style>