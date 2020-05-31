<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
      <span>已完成{{overName}}</span> / 全部{{allName}}
    </span>
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>



<script type="text/ecmascript-6">
import itemVue from './item.vue';
export default {
    props:{
        todos:Array,
        updateAll:Function,
        // deleteAll:Function//props需要使用。全局总线不需要
    },
    computed: {
        overName(){
            //需要去统计一下TODOs里面的对象isover属性值为true的个数
            // return this.todos.filter(function(item,index){
            //     return item.isover
            // })
            //写法二
            return this.todos.filter(item => item.isover).length
            },
        allName(){
            return this.todos.length
        },
        isCheckAll:{
            get(){
                return this.overName ===this.allName && this.allName>0
            },
            set(val){
                this.updateAll(val)
            }
        }
    },
    methods:{
        deleteA(){
            // this.deleteAll()
            //获取全局总线触发事件
            this.$bus.$emit(deleteAll)
        }
    }
};
</script>



<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>