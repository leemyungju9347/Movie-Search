<template>
<div v-if="movieList">
    <ul v-for="(item,index) in movieList" :key="index">
        <li>
            <strong>{{ item.title.replace(/!HS|!HE|/gi,'') }}</strong>
            <img :src="item.posters" alt="">
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            title:this.$store.state.title,
            movieTitle:''
        }
    },
    computed:{
        //SearchInput에 입력한 값을 store에 저장하고 MovieDetail로 가져올 경우 movieDetail에서 확인이 안됨.. 왜일까?
        movieList(){
            return this.$store.state.list
        },
        // movieResult(){
        //     return this.$store.state.list.Data[0].Result
        // }
    },
    created(){
        this.$store.dispatch('FETCH_LIST',this.title)

        this.delete()
    },
    watch:{
    },
    methods:{
        delete(){
            // console.log(this.movieList[0].title);
            console.log(this.movieList[0].title);
            
            
        }
    }

}
</script>

<style>

</style>