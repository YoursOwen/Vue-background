import router from '@/router/index'

export default{
  setMenus(state,list){
    state.Menus= list

    //login页面后的操作，要放在异步操作完成之后，不然数据获取不到
    router.push("home")
  }
}