<template>
     <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <item v-for="(comment,index) in comments" :key="comment.id" 
            :comment ='comment'
            :deletecomment = 'deletecomment'
            :index = 'index'
            />
        </ul>
      </div>
</template>



<script type="text/ecmascript-6">
import item from '@/components/item'
    export default {
        components:{
            item
        },
        
        props:['comments','deletecomment']
    }
</script>



<style scoped>
.reply {
  margin-top: 0px;
}

</style>