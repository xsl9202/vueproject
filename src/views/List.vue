<template>
  <div>
<ul>
  <li v-for="(item, index) in list" :key="index" >
    <h3>{{item.title}}</h3>
     <P>{{item.content}}</P>
    </li>
</ul>
  </div>
</template>

<script>
import store from "@/store"
export default {
    name:"List",
    store,
  data() {
    return {
//  list : this.$store.state.list //获取store中state的数据,
    }
  },
  computed:{
    list(){
      return this.$store.state.list
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style>

</style>
