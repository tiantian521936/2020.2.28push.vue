import Vue from 'vue'
import App from './app'//把组装好的整体组件导入到入口文件，准备渲染
Vue.config.productionTip = false
let vm = new Vue({
    el:'#root',
    // render:function(createElement){
    //     createElement(App)
    // },
    // 因为你在这里已经渲染了，下面的其实是会报错了，但由于这一步，无视下面的操作了
    render:h => h(App),
    //第一步，把导入过来的APP组件配置对象，在vue模板当中注册使用
    //第二步，还可以把App解析为一个标签名<App></App>
    //第三步，把这个标签在模板当中进行渲染

    // 这是第二种渲染的方式，太麻烦，我都忘了怎么操作，不推荐，有上面的就足够了
// components:{
//     App
// },
// template:'<App/>'



})