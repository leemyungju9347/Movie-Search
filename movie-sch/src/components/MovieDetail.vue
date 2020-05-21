<template>
    <div v-bind="check()">
        <div>{{ movieArr }}</div>
        <div>{{ this.$store.state.title }}</div>
        <button @click="check">버튼</button>
    </div>
</template>

<script>
// import {movieSchApi} from '../api/index'
import { eventBus } from '../main.js'
export default {
    data() {
        return {
            movies:'',
            title:''
        }
    },
    computed:{
        //SearchInput에 입력한 값을 store에 저장하고 MovieDetail로 가져올 경우 movieDetail에서 확인이 안됨.. 왜일까?
        movieArr(){
            return this.$store.state.title
        }
    },
    methods:{
        check(){
            //console.log(this.$store.state.list);
            //console.log(this.$store.state.title);
            eventBus.$on('inputTitle',title=>{
                this.title = title
                console.log(this.title);
                
            })

            console.log(this.title);
            
        }
    }

}
</script>

<style>

</style>