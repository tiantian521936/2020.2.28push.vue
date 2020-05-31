<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addtodo="addtodo"></Header>
      <Main :todos="todos" :updateone="updateone" :deleteOne="deleteOne"></Main>
      <!-- props传递事件 -->
      <!-- <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer> -->
     <!-- 使用全局总线绑定删除事件 -->
      <Footer :todos="todos" :updateAll="updateAll" ></Footer>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";
export default {
  data() {
    return {
        //去localstorage里已经储存的地方拿值，
      todos:JSON.parse(localStorage.getItem('todos_key')) || []
    }
  },
  components: {
    Header,
    Main,
    Footer
  },
    // 添加事件，自定义绑定
    mounted(){
    //自定义绑定添加数据
    // this.$refs.add.$on('addtodo',this.addtodo),
    //通过事件总线给对象绑定事件,回调还留在父组件当中
    this.$bus.$on('deleteAll',this.deleteAll)
    },

methods:{
    addtodo(obj){
        this.todos.unshift(obj)
        
    },
    updateone(index,val) { 
        this.todos[index].isover = val
    },
    deleteOne(index){
        this.todos.splice(index,1)
    },
    updateAll(val){
        this.todos.forEach(item => item.isover = val)
    },
    deleteAll(){
        //把isover为false的留下，把isover为true的去掉
        //过滤出所有没有完成的，组成一个新数组，赋值给todos
        this.todos=this.todos.filter(item => !item.isover)
    }
   
},
 watch: {
        // todos(newVal,oldVal){
            //一般监视，只能监视todos本身（比如单一的删除或者添加数组的一项）不能监视内部更深层次的数据（比如修改了对数组的属性就会监视不到，）
            //监视数据只要数据发生变化就把新数据保存到localstorage中
            //setitem存数据，一个键（todos_key，一个值newval)
            //如果存储数据的时候，默认会把数据调用对应的tostring,转化后才能储存
            //对象.tostring会转化为[object object]
            //数组.tostring会转化为‘中括号去掉 加引号’
            //函数.tostring会转化为‘函数数据本身加引号’ 
            //因此我们需要把数据转化为json串去储存，                               
        //     localStorage.setItem('todos_key',JSON.stringify(newVal))
        // },
        todos:{
            //深度监视，不管本身的还是内部的数据变化都能监视到
            deep:true,
            handler(newVal,oldVal){
                localStorage.setItem('todos_key',JSON.stringify(newVal))
            }

        }

    },
    //销毁自定义事件
    // beforeDestroy(){
    //     this.$refs.add.$on('addtodo',this.addtodo)
    // }




};
</script>



<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>