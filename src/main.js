import Vue from 'vue'
import App from './App'
import router from './router'
import '@/style/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//为true时Vue内置的控制台提示就开启
Vue.config.productionTip = false

import store from '@/store/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h=> h(App),
})




