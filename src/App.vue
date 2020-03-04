<template>
  <div class="aaa">
    hello app -- {{myname}}
    <button @click="handleClick">click</button>

    <kerwinchild mytitle="父组件传给你的"></kerwinchild>
    <navbar></navbar>
  </div>
</template>
<script>
// ES6模块导出 export default {}
// ES6模块导入 import A from "./A"

// commonJS 导出  module.exports = {}
// commonHS 导入  var A = require('./A')

// import Vue from 'vue' // 模块化,在哪儿用, 在哪儿引入
import kerwinchild from '@/components/Child' // 导入组件的配置参数
import navbar from '@/components/Navbar' // @ ===> src绝对路径
// 手动全局注册kerwinchild组件
// Vue.component('child', kerwinchild)

export default {
  data () {
    return {
      myname: "kerwin2222222222222222222"
    }
  },
  components: {
    kerwinchild,
    navbar
  },
  methods: {
    handleClick () {
      // console.log('1111111111')
    }
  }
}
// var myname ="111111"
// var obj = {
//   myname:"1111"
// }
</script>

<style>
*{
  margin:0;
  padding: 0
}

.aaa{
  background: yellow;
}
</style>
