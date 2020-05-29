<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addtodo = 'addtodo'></Header>
      <Main :todos = 'todos'></Main>
      <Footer></Footer>
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
      todos: [
            { id: 1, content: "跑步", isover: false },
            { id: 2, content: "瑜伽", isover: true},
            { id: 3, content: "看书", isover: false }
      ]
    };
  },
  components: {
    Header,
    Main,
    Footer
  },


methods:{
    addtodo(obj){
        this.todos.unshift(boj)
    }
}




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