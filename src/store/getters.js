export default {
  routerHandler(state) {
    let router_list = []
    state.Menus.forEach(v => {
      v.children.forEach(item => {
        const obj = {
          path: '/' + item.path,
          component: () => import(`@/pages/${v.path}/${item.path}`)
        }
        router_list.push(obj)
      })
    })
    return router_list
  }
}
