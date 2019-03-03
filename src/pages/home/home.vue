<template>

  <!-- 现在侧边栏是写死了，需要动态获取 -->

  <div class="home-container">
    <el-container>
      <el-aside width="auto">
        <div class="logo"></div>
        <el-menu :router='true'
                 default-active="users"
                 class="el-menu-admin"
                 :collapse="isCollapse"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-submenu :index="item.path"
                      v-for="item in this.$store.state.Menus"
                      :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item :index="menu.path"
                          v-for="menu in item.children"
                          :key="menu.id">
              <i class="el-icon-menu"></i>
              <span slot="title">{{menu.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <transition mode="out-in"
                      name="fade">
            <router-view></router-view>
          </transition>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { fetch_Menus } from "@/api/index.js";
export default {
  data() {
    return {
      isCollapse: false,
      menusList: []
    };
  },
  created() {
    this.$message({
      showClose: true,
      message: "恭喜你，登陆成功!",
      type: "success"
    });

    //
    // this.$router.options.routes[2].children = this.$router.options.routes[2].children.concat(this.$store.getters.routerHandler)
    // this.$router.addRoutes(this.$router.options.routes)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  background-color: #e5e5e5;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #009688;
  }
  .logo {
    height: 60px;
    background: url("../../assets/logo.png");
    background-size: cover;
    background-color: white;
  }
  .toggle-btn {
    padding: 0 10px;
    margin-left: -20px;
    font-size: 36px;
    line-height: 60px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #00635a;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome {
    color: white;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
