<template>
  <div>
    <!-- 第一次使用子组件 全写时加template -->
    <Child>
      <!-- 若果父给子插槽添加内容
      默认如果没有写名字会自动给子组件当中的匿名插槽
      如果需要传递给子组件固定的插槽去使用，那么需要使用具名插槽 -->
      <template>
        <h2>五月再见</h2>
      </template>
      <!-- 传递给子组件中的具名插槽，如果只有一个标签则可以甩template,多个标签的话把具名添加给template然后再里面写多个标签 -->
      <p slot="pp">轻轻告别五月的多姿多彩</p>


      <!-- 子传父 -->
      <span slot-scope="slotprops" v-show="isshow" slot="yy">
        √{{slotprops.person.name}}
      </span>
    </Child>

     <Child>
     <a href="">六月，你好</a>
     </Child>

  </div>
</template>

<script type="text/ecmascript-6">
import Child from '@/components/Child.vue'
  export default {
    components:{
      Child
    },
    data() {
      return {
        isshow:true
      }
    },
  }
</script>



<style scoped>
  
</style>