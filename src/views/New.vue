<template>
    <div role="tabpanel" class="tab-panel" id="News">
        <ul class="list-group">
          <li class="list-group-item" v-for="(n) in news" :key="n.id">
            {{n.content}}
            <!-- <button>
              type="button"
              class="btn btn-primary"
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
            {{n.id}}</button> -->
          </li>
          <!-- <li class="list-group-item">
            news2
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
            ></button>
          </li>
          <li class="list-group-item">
            news3
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
            ></button>
          </li> -->
        </ul>
        <div class="alert alert-success" role="alert">
         
        </div>
      </div>
</template>



<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                news:[
                    {id:1,content:'newOne'},
                    {id:2,content:'newTwo'},
                    {id:3,content:'nweThree'}


                ]
            }
        },
    }
</script>



<style scoped>
    
</style>