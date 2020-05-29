<template>
  <div>
    <ul class="todo-main">
        <item v-for="(todo, index) in todos" :key="todo.id" :todo="todo"></item>
    </ul>
  </div>
</template>



<script type="text/ecmascript-6">
import item from '@/components/item'

export default {
    props:{todos:Array},//写对象可以规定接受的类型，这里是数组，
    components:{
        item
    }
};
</script>



<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>