<template>
<div>
 <Myblog v-for="blog in blogs" :key="blog.id" :title="blog.title"></Myblog>
</div>
</template>
<script>
import Myblog from './components/Myblog'//引入
export default {//暴露数据
    components:{
            Myblog
        },

        data() {
            return {
                blogs:[
                    {id:1,title:'blogone'},
                    {id:2,title:'blogtwo'},
                    {id:3,title:'blogthree'},
                ]
               
            }
        },
                
                
                

    };
</script>
 <style scoped>
                    
</style>]