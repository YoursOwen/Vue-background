import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
// import home from '@/pages/home/home'
const home = () => import('@/pages/home/home')
import test from '@/pages/home/test'

//1.拿到每个角色的分配的path
//2.在哪里获取数据,应该存在哪里（localstorage/vueX）
//3.获取到数据之后，如何处理数据
//4.将处理好的数据，拼接到Router的path里面
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/login"},
    {path:"/login",component:login},
    {path:"/home",component:home},
    {path:"/test",component:test}

  ]
})
