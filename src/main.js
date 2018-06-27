import Vue from '../vue/dist/vue.esm.js'
import App from './App.vue'
import Test from './Test.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.performance = true

const vm = new Vue({
  axios() {console.log('i am axios')},
  // router,
  data() {
    return {
      index: 1,
    };
  },
  store,
  render: h => h(App),
  mounted() {
    this.$options.axios()
  },
}).$mount('#app')

console.log('this is vm', vm);
