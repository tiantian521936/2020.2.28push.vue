import Vue from 'vue'
import app from '@/app'
import router from './router/index'




new Vue({
    el:'#root',
    render:h=>h(app),
    router //当我们注册上路由器的时候组件对象当中都可以获取到
          //this.$router和this.$route
})