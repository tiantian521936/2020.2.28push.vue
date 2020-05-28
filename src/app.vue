<template>
    
 <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
     
     <add :addcomment ='addcomment'/>
     <list :comments ='comments' :deletecomment = 'deletecomment' />
    </div>
  </div>
    
</template>

<script type="text/ecmascript-6">
import add from '@/components/add.vue'//@就是项目的根目录
import list from '@/components/list.vue'

    export default {
        components:{
            add,
            list
        },
        data() {
            return {
                comments:[
                    {id:1,username:'鹿晗',content:'hao'},
                    {id:2,username:'杨烁',content:'henhao'},
                    {id:3,username:'刘德华',content:'feichanghao'},
                ]
            }
        },
        methods:{
            addcomment(obj){//添加的一个对象
                this.comments.unshift(obj)//这是往comments头部添加一条数据

            },

            deletecomment(index){//传一个下标删除
                this.comments.splice(index,1)//从comments内部删除指定下标的那一个数据，下标开始第一个参数是删除index这个下标的开始，参数二是，删除一个


            }

        }
        
    }
</script>



<style scoped>
    
</style>