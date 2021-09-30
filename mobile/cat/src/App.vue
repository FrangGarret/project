
<template>
  <div id="app">

     <router-view></router-view>
      <!-- <div class="beiai"><a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">苏ICP备2021043782号-1</a></div> -->
  </div>
</template>

<script>

import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
export default {
  name: "App",
  components: {
   
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
.beiai{
  position: fixed;
  bottom: 10px;
  left: 0;
  width: 100%;
  line-height: 36px;
  font-size: 24px;
  text-align: center;
}
</style>
