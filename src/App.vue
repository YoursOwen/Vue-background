<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    saveMenus(){
      sessionStorage.setItem('Menus',JSON.stringify(this.$store.state.Menus))
    }
  },
  mounted(){
    // console.log(this.$store.getters.routerHandler)
    //unload事件,当文档内容完全加载完成会触发该事件
    window.addEventListener('unload',this.saveMenus)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
