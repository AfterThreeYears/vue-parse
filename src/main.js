import Vue from '../vue/dist/vue.esm.js'
import App from './App.vue'
import Test from './Test.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component('test', Test);

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')
