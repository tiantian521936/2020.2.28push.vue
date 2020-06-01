import Vue from 'Vue'
import app from '@/app'
new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this//事件总线，没必要去实现Vue
    },
    el:'#root',
    render:h=>h(app)
})