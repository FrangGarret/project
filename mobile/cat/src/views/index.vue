
<template>
  <section class="indexWrap">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index" @click.stop="viewBigImg(image)">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('../assets/img/cat/1.jpeg'),
        require('../assets/img/cat/2.jpeg'),
        require('../assets/img/cat/3.jpeg'),
        require('../assets/img/cat/5.jpeg'),
        require('../assets/img/cat/6.jpeg'),
        require('../assets/img/cat/7.jpeg'),
        require('../assets/img/cat/8.jpeg'),
        require('../assets/img/cat/9.jpeg')
      ],
    };
  },
  mounted() {
    console.log(1);
  },
  methods:{
    viewBigImg(item){
      console.log(item)
    }
  }
};
</script>

<style  scoped>
</style>


