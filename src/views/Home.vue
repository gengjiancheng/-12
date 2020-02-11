<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- <div class="head">
      <div class="left">
        <img src="../assets/baidu.png" alt />
      </div>
      <div class="right">
        <a href="https://www.baidu.com/">百度首页</a>
      </div>
    </div>
    <div class="body">
      <div class="main"></div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {
    // HelloWorld
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background: #f8f8f9;
  .head {
    height: 50px;
    width: 1249px;
    margin: 0 auto;
    background: #f8f8f9;
    overflow: hidden;
    // display: flex;
    .left {
      float: left;
      height: 27px;
      width: 81px;
      margin-top: 11.5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      float: right;
      line-height: 50px;
      a {
        color: #000000;
        text-decoration: none;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
  .body {
    height: 100%;
    background: #10aeb5;
    .main {
      height: 187px;
      width: 768px;
      background: url("../assets/virus.png");
      background-size: 695px 189px;
      background-position: 50% 50%;
      background-repeat: no-repeat;

      margin: 0 auto;
    }
  }
}
</style>