<template>
  <ul class="list-group">
    <li class="list-group-item">msgId:{{msgId}}</li>
    <li class="list-group-item">msgContent:{{msgContent}}</li>
    <li class="list-group-item">msgTitle:{{title}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
let msgTitle = [
  { id: 1, title: "msg1" },
  { id: 2, title: "msg2" },
  { id: 3, title: "msg3" }
]

export default {
  props: ["msgId", "msgContent"],
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    setTimeout(() => {
    //   this.title = msgTitle.find(item => {
    //     item.id === this.msgId * 1;
    //   }).title;
        for(let i = 0 ; i < msgTitle.length ; i++){
            if(msgTitle[i].id === this.msgId*1){
                this.title = msgTitle[i].title
                break
            }
        }
    }, 1000);
  }
};
</script>



<style scoped>
</style>