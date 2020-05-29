<template>
    <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="username">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default pull-right" @click="addc">提交</button>
            </div>
          </div>
        </form>
      </div>
</template>



<script type="text/ecmascript-6">
    export default {
        
        props:['addcomment'],
        data() {
            return {
                username:'',
                content:''
            }
        },
        methods:{
            addc(){
                //创建一个对象根据收集到的数据，然后把这个对象添加到comments数组前面
                let username = this.username
                let content = this.content
                let id = Data.now()//可以随机的当前的毫秒数
                //trim()是去除两边空格同时两边为真
                if(username.trim() && content.trim()){
                    let obj = {
                        username,
                        content,
                        id
                    }
                    
                    this.addcomment(obj)
                }
                    this.username = ''
                    this.content = ''

            }
        }
    }
</script>



<style scoped>
    
</style>