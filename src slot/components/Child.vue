<template>
    <div>
        <P>悄悄地迎来六月的盛夏繁华</P>
        <!-- 匿名插槽，没有名字的插槽，在父组件当中没有写名字的东西会默认传递给这个插槽
        如果插槽内部有内容，父组件也没有给插槽去传递内容，那么默认的内容被显示
        如果插槽内部有内容，父组件给插槽传递了内容，那么默认的内容被覆盖-->
        <slot>愿所以的幸福都如期而至</slot>
        <!-- 匿名插槽在使用当中只有一个，如果想再添加一个插槽就得用具名插槽 -->
        <slot name = 'pp'>匆匆</slot>
        


        <!-- 子传父 -->
        <ul>
            <li v-for="person in persons" :key="person.id">
                <slot name = 'yy' :person = 'person'> 
                    <!-- 类似属性传值 -->
                    {{person.name}}
                </slot>
               
            </li>
        </ul>


    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                persons:[
                    {id:1,name:'tiantian',age:18},
                    {id:2,name:'zt',age:28},
                    {id:3,name:'sweet',age:38}

                ]
            }
        },
    }
</script>s



<style scoped>
    
</style>