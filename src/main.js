import Vue from '../vue/dist/vue.esm.js'
import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false
Vue.config.performance = true

Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.log(err, vm, info);
}

const vm = new Vue({
  // store,
  render: h => h(App),
}).$mount('#app')





// setInterval(() => {
//   // throw new Error('666');
//   const xhr = new XMLHttpRequest();

//   xhr.open('get', 'https://api.wbb1.top/api/726wbb');

//   xhr.send();

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//     }
//   }
// }, 3000)



// console.log(hookAjax);
// hookAjax({
//   //拦截回调
//   onreadystatechange:function(xhr){
//       console.log("onreadystatechange called: %O",xhr)
//   },
//   onload:function(xhr){
//       console.log("onload called: %O",xhr)
//   },
//   //拦截函数
//   open:function(arg){
//    console.log("open called: method:%s,url:%s,async:%s",arg[0],arg[1],arg[2])
//   },
//   send: function() {
//     console.log('sennnnnnnnnnd');
//   },
// })
