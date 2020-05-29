<template>
  <li @mouseenter="handleritem(true)" @mouseleave="handleritem(false)" :class="myClass">
    <label>
        <!--  -->
      <input type="checkbox" v-model="ischeck"/>
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isshow">删除</button>
  </li>
</template>



<script type="text/ecmascript-6">
export default {
    props:{
        todo:Object
    },
    computed: {
        ischeck:{
            get(){
                return this.todo.isover
            }
        }
        
    },

    data() {
        return {
            isshow:false,
            myClass:""
        }
    },
    methods:{
        handleritem(flag){
            flag?this.myClass = "enterClass":this.myClass = "leaverClass"
            this.isshow = !this.isshow
        }
    }
};
</script>



<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

.enterClass{
    background-color: #aaa;
}
.leaverClass{
    background-color: #fff;
}


</style>