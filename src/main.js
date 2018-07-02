import Vue from '../vue/dist/vue.esm.js'
import App from './App.vue'
import Test from './Test.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.performance = true

const vm = new Vue({
  // router,
  data: {
    main: {
      isVue: 1,
    },
  },
  store,
  render: h => h(App),
}).$mount('#app')


console.log(Vue.compile('<div id="demo">{{name}}</div>').render.toString());
