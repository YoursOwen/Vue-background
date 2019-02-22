import Vue from 'vue'
import App from './App'
import router from './router'

import '@/style/index.less'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//启动路由导航守卫
router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem("token")
  if(!token && to.path != "/login"){
    return next("/login")
  }
  next()
})

//为true时Vue内置的控制台提示就开启
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h=> h(App),
})
