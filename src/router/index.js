import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Home from '@/views/Home'
import About from '@/views/About'

import Message from '@/views/Message'
import New from '@/views/New'

import MessageD from '@/views/MessageD'
import NewD from '@/views/NewD'

export default new Router({

    routes: [//每个组件都是一个对象，而现在是多个就是一个数组
        {
            path: '/home',//点击后要显示的组件的路径，但现在组件还没有显示
            component: Home,//代表要显示的组件是哪个组件
            children:[
                {
                    path:'/home/message',
                    component:Message,
                    children:[
                        {
                            path:'/home/message/info:msgId',
                            component:MessageD,
                            props(route){ 
                                return {
                                    msgId:route.params.msgId,
                                    msgContent:route.query.msgContent
                                }
                            },
                        }
                    ]
                },
                {
                    path:'/home/news',
                    component:New,
                    children:[
                        {
                            path:'/home/New/info',
                            component:NewD
                        }
                    ]
                },
                {
                    path:'/home',
                    redirect:'/home/message'
                }
            ]
        },
        {
            path: '/about',
            component: About,
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})
