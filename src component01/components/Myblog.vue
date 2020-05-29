<template>
   <h2>这个文章标题是{{title}}
       
       <Mybutton :title="title"></Mybutton>
    </h2>     
</template>
<script>
import Mybutton from './Mybutton'//导入button路径为了使用里面的数据
export default {
        props:['title'],//声明接收了属性，但没有使用，上面添加后使用
       components:{//这是注册
           Mybutton//这是使用
       },        
                
                
                

    };
</script>
 <style scoped>
                    
</style>]