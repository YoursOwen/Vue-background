import {fetch_Menus} from '@/api/index'

export default{
  getMenus(context){
    fetch_Menus().then(res=>{
      context.commit('setMenus',res.data)
    })
  }
}