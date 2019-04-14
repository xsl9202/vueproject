import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login'
import Add from '@/views/Add'
import Home from '@/views/Home'
// import List from '@/views/List'
import User from '@/views/User'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
      {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
    path: '/Home',
    name: 'Home',
    component: Home,
    children:[{
      path: 'List',
      name: 'List',
      component: () => import("@/views/List"), 
    },
    {
      path: 'User',
      name: 'User',
      component: User, 
    }]
  },
  ]
})
