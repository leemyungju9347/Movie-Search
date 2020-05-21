import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// export const eventBus = new Vue({
//   methods:{
//     listEdit(memo,index,mode,display){
//       this.$emit('listEdit',memo,index,mode,display)
//     },

//   }
// })

export const eventBus = new Vue({
  methods:{
    inputTitle(title){
      this.$emit('inputTitle',title)
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
