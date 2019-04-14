<template>
  <div>
<p>标题</p>
<input type="text" v-model="title">
<p>内容</p>
<input type="text" v-model="content">
<button @click="add">Add</button>
  </div>
</template>

<script>
import store from "@/store"
export default {
    name:"Add",
    store,
  data() {
    return {
  title:"",
  content:""
    }
  },
  methods: {
add(){
  store.commit("additem",{
    title:this.title,
    content:this.content
  });
 this.title="";
 this.content=""
}
  },
  components: {

  }
}
</script>

<style>

</style>
