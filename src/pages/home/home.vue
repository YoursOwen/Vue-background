<template>
  <div>
    这是主页
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    this.$message({
          showClose: true,
          message: '恭喜你，登陆成功!',
          type: 'success'
        });
  },
}
</script>

<style lang="less" scoped>

</style>
