import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)

const state = {
  //注意Json.parse,数据类型错误的话,v-for会乱渲染
  Menus:sessionStorage.getItem('Menus') ? JSON.parse(sessionStorage.getItem('Menus')) : []
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store