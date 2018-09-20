<!-- 顶部栏 -->
<template>
  <div class="navBar">
    <header class="title">
      <div class="logo">
        <img src="../assets/img/pc_logo.png">
      </div>
      <div class="tel">
        <span>服务电话:15071055503</span>
      </div>
    </header>
  </div>
  </div>
</template>
<script type="text/javascript">
/*import navBar from '@/components/navBar'; //顶部栏*/
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  //父控件传过来的参数
  props: {

  },
  //监听函数
  watch: {

  },
  //计算属性
  computed: {

  },
  //控件加载前执行的函数
  created() {

  },

  //进入页面执行的函数
  mounted() {

  },

  //增加控件
  components: {}
}

</script>
<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  height: 60px;
  background: rgba(245, 247, 250, 1);
  width: 100%;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
}

.logo {
  margin: 10px 80px
}

.logo img {
  height: 40px;
  background-size: 100%;
}

.tel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 19px 80px;
  font-size: 16px;
  color: rgba(94, 109, 130, 1);
}

.navBar {
  position: fixed;
  width: 100%;
  z-index: 10;
}

</style>
