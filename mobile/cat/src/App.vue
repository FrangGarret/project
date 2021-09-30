

<template>
  <div id="app">

     <router-view></router-view>
     <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=427606780&auto=1&height=66"></iframe>
     <!-- <audio muted controls autoplay="autoplay" style="display:none;" id="Jaudio" class="media-audio" preload="auto" src="/statics/windyHill.mp3" loop="loop"></audio> -->
     <div class="beiai"><a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">苏ICP备2021043782号-1</a></div>
  </div>
</template>

<script>

import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
export default {
  data(){
    return {
      
    }
  },
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
