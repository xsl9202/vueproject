<template>
<div>
  <router-view/>
  <ul>

<router-link to="List">新闻列表</router-link>
<router-link to="User">个人中心</router-link>

  </ul>
</div>

</template>

<script>
import store from "@/store"
export default {
    name:"Home",
    store,
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
ul{
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  display:flex;
  height: 50px;
  line-height: 50px;
}
a{
  flex: 1;
}
a.active{
  color: #ffffff;
  background-color: green;
}
</style>
