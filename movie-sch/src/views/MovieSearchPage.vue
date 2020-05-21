<template>
  <div>
    <p>{{ title }}</p>
      <SearchInput></SearchInput>
  </div>
</template>

<script>
import SearchInput from '../components/SearchInput.vue';
import { eventBus } from '../main.js'
export default {
    components:{SearchInput},
    data() {
      return {
        title:''
      }
    },
    methods:{
      check(){
            eventBus.$on('inputTitle',(title)=>{
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