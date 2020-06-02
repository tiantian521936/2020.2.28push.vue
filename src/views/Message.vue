<template>
      <div role="tabpanel" class="tab-panel active" id="Message">
        <ul class="list-group">
          <li class="list-group-item" v-for="m in messages" :key="m.id">
            <router-link :to ="'/home/message/info' + m.id + '?msgContent='+ m.content">{{m.content}}</router-link>
            <!-- <a href="##">{{m.content}}</a> -->
          </li>
          <li class="list-group-item">
            <a href="##">message02</a>
          </li>
          <li class="list-group-item">
            <a href="##">message03</a>
          </li>
        </ul>
        <div class="alert alert-success" role="alert">
         <router-view></router-view>
        </div>
      </div>
</template>



<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                messages:[
                    {id:1,content:'msgOne'},
                    {id:2,content:'msgTwo'},
                    {id:3,content:'msgThree'}


                ]
            }
        },
        
    }
</script>



<style scoped>
    
</style>