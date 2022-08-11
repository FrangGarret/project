
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <p>图片名称:run_m.webp(格式兼容性较差，大部分手机无法加载)</p>
    <img src="../src/assets/run_m.webp" alt="" />
    <p>图片名称:run_m.gif</p>
    <img src="../src/assets/run_m.gif" alt="" />
    <p>图片名称:run_m.png(原图)</p>
    <img class="run" src="../src/assets/run_m.png" alt="" />
    <p>处理后的run_m.png：</p>
    <canvas id="canvas"></canvas>

    <p>图片名称:run_w.webp(格式兼容性较差，大部分手机无法加载)</p>
    <img src="../src/assets/run_w.webp" alt="" />
    <p>图片名称:run_w.gif</p>
    <img class="run" src="../src/assets/run_w.gif" alt="" />
    <p>图片名称:run_w.png(原图)</p>
    <img class="run" src="../src/assets/run_w.png" alt="" />
    <p>处理后的run_w.png：</p>
    <canvas id="canvas2"></canvas>

    <p>图片名称:run_bg.webp(格式兼容性较差，大部分手机无法加载)</p>
    <img src="../src/assets/run_bg.webp" alt="" />
    <p>图片名称:run_w.png(原图)</p>
    <img class="run" src="../src/assets/run_bg.png" alt="" />
    <p>处理后的run_bg.png：</p>
    <canvas id="canvas3"></canvas>

    <img
      style="background: #ccc"
      src="https://ehis-vitality-stg1.health.pingan.com/merchant/leHealth/img/run_boy.918740.png"
      alt=""
    />

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import parseAPNG from "apng-js";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    // const img1Src =
    //   "https://ehis-vitality-stg1.health.pingan.com/merchant/allLoding/run_m.png";

    const img1Src = require("../src/assets/run_m.png");
    const img2Src = require("../src/assets/run_w.png");
    const img3Src = require("../src/assets/run_bg.png");
    // const img2Src =
    //   "https://official-account-web-1251316161.cos.ap-guangzhou.myqcloud.com/mqq-static/open-platform-animate-2-new.png";

    const canvas = document.querySelector("#canvas");
    canvas.width = 750;
    canvas.height = 540;
    canvas.style = "zoom: 1";
    const ctx = canvas.getContext("2d");

    const canvas2 = document.querySelector("#canvas2");
    canvas2.width = 750;
    canvas2.height = 540;
    canvas2.style = "zoom: 1";
    const ctx2 = canvas2.getContext("2d");

    const canvas3 = document.querySelector("#canvas3");
    canvas3.width = 750;
    canvas3.height = 1040;
    canvas3.style = "zoom: 1";
    const ctx3 = canvas3.getContext("2d");
    // js file
    // 获取图片并转化成 ArrayBuffer
    function getImgBuffer(url) {
      return new Promise(async (resolve) => {
        const blob = await fetch(url).then((res) => res.blob());
        const reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onload = () => {
          resolve(reader.result);
        };
      });
    }
    async function createApngPlayer(url, ctx, options = {}) {
      const imgBuffer = await getImgBuffer(url);
      const apng = parseAPNG(imgBuffer);
      Object.keys(options).forEach((key) => {
        apng[key] = options[key];
      });
      const player = await apng.getPlayer(ctx);
      return player;
    }
    (async () => {
      const player1 = await createApngPlayer(img1Src, ctx); // 设置图1的 numPlays 为1，让其只播放一次
      //const player2 = await createApngPlayer(img2Src, ctx);

      const player2 = await createApngPlayer(img2Src, ctx2); // 设置图1的 numPlays 为1，让其只播放一次
      const player3 = await createApngPlayer(img3Src, ctx3); // 设置图1的 numPlays 为1，让其只播放一次
      player1.play(); // 图1播放
      player2.play(); // 图2播放
      player3.play(); // 图3播放
      // player1.on("end", () => {
      //   // 监听图1的播放，当其播放完毕时，马上开始图2的播放
      //   player2.play();
      // });
    })();
  },
};
</script>

<style scoped>
html,
body {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
</style>
