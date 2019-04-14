<template>
  <div>
    <form v-if="!isreg">
      用户名：
      <input type="text" v-model="name" >
      密码：
      <input type="password" v-model="password">
      <div>
      <button type="button" @click="login()">登陆</button>
      <button type="button" @click="reg()">注册</button>
      </div>
    </form>
     <form v-else>
      用户名：
      <input type="text" v-model="name" >
      密码：
      <input type="password" v-model="password">
          再次输入密码：
      <input type="password" v-model="repeat">
      <div>
      <button type="button" @click="adduser()">确定</button>
      <button type="button" @click="cancel()">取消</button>
       </div>
    </form>

  </div>
</template>

<script>
export default {
    name:"Login",
  data() {
    return {
isreg:false,
name:"",
password:"",
repeat:""
    }
  },
  methods: {
login(){
if(this.name&&this.password){
if(this.name==localStorage.getItem("name") && this.password==localStorage.getItem("password")){
  this.name="";
this.password="";
this.$router.push("/Home/List");
}else{
     alert("用户名或密码错误")
}
}else{
      alert("信息不能为空")
}

},
reg(){
  this.isreg=true;
},
adduser(){
  if(this.name&&this.password&&this.repeat){
if(this.password==this.repeat){
localStorage.setItem("name",this.name);
localStorage.setItem("password",this.password);
this.name="";
this.password="";
  this.isreg=false;
}else{
      alert("密码输入不一致")
}
  }else{
    alert("信息不能为空")
  }

},
cancel(){
  this.isreg=false;
}
  },
  components: {

  }
}
</script>

<style>
button{
  display: inline-block;
  text-align: center;
  width: 50%;
  margin: 20px 0;
}
input{
  display: block;
  width: 80%;
  margin: 10px auto;
}
</style>
