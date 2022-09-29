<template>
  <div class="header">
    <div class="header-left">
      <!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/jsx">jsx</RouterLink> -->
      <el-menu mode="horizontal" default-active="0" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="0">
          首页
        </el-menu-item>
        <el-menu-item index="1">
          第二页
        </el-menu-item>
        <el-menu-item index="2">
          最后一页
        </el-menu-item>
      </el-menu>
    </div>
    <!-- <div class="header-right">
      <div class="header-right-icon">
        <img width="100%" height="100%" src="../assets/icons/min.png" alt="">
      </div>
      <div class="header-right-icon">
        <img width="100%" height="100%" src="../assets/icons/zoom.png" alt="">
      </div>
      <div class="header-right-icon">
        <img width="100%" height="100%" src="../assets/icons/close.png" alt="">
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: '',
  components: {

  },
  mixins: [],
  props: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  mounted() {

  },
  methods: {
    handleSelect(e) {
      console.log(e);
      if (e == 0) {
        this.$router.push('./')
      }
      if (e == 1) {
        this.$router.push('./about')
      }
      if (e == 2) {
        this.$router.push('./jsx')
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.header {
  width: 100%;
  // padding: 0 10px 0 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-app-region: drag;
  // border: 1px solid red;
  -webkit-user-select: none;

  .header-left {
    height: 100%;
    display: flex;
    cursor: pointer;
    -webkit-app-region: no-drag;
  }

  .header-right {
    width: 20%;
    display: flex;
    justify-content: flex-end;

    .header-right-icon {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-right: 10px;
    }
  }
}
</style>