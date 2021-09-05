<!--
 * @Author: 方家亮
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

     <timeline>
        <timeline-title>title</timeline-title>
        <timeline-item bg-color="#9dd8e0">item1</timeline-item>
        <timeline-item :hollow="true">item2</timeline-item>
      </timeline>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
export default {
  name: "App",
  components: {
    HelloWorld,
    Timeline,
    TimelineItem,
    TimelineTitle
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
