import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
import home from '@/pages/home/home'
// const home = () => import('@/pages/home/home') 路由懒加载
Vue.use(Router)
import {fetch_Menus} from '@/api/index'


//1.拿到每个角色的分配的path
fetch_Menus().then(res => {
  // console.log(res.data)
  let router_list =[]
  res.data.forEach(v => {
    v.children.forEach(item => {
      const obj = {
        path: '/'+item.path,
        component: () => import(`@/pages/${v.path}/${item.path}`)
      }
      router_list.push(obj)
    })
  })
  // console.log(router_list)
  router.options.routes[2].children = router.options.routes[2].children.concat(router_list)
  router.addRoutes(router.options.routes)
})

//2.获取到数据之后，如何处理数据
//3.将处理好的数据，拼接到Router的path里面
//4.在哪里获取数据,应该存在哪里（localstorage/vueX）


const router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/login"
    },
    {
      path:"/login",
      component:login
    },
    {
      path:"/home",
      component:home,
      children:[

    ]}
  ]
})
//启动路由导航守卫
router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem("token")
  if(!token && to.path != "/login"){
    return next("/login")
  }
  next()
})

export default router