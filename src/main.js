import Vue from 'vue' // ES6-模块化规范 引入  commonjs-var Vue = require("vue")
import App from './App.vue' // var App  = require("./App.vue")
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App) // App组件渲染到 box div上
}).$mount('#box')
