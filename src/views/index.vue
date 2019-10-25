<template>
  <div>
    <div class="banner">
      <swiper :list="imgList" v-model="activeIndex" auto :show-dots="!showDots" dots-position="center"></swiper>
    </div>
    <div class="list clearfix">
      <div class="item fl" v-for="(item,index) in 10" :key="index">
        <img src="../assets/img/item.png" alt="">
        <div class="itemName">菜单名字</div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import footerBar from '../components/footerBar'
export default {
  components: { Swiper, footerBar },
  data () {
    return {
      activeIndex: 0,
      showDots: false,
      imgList: [
        { img: require('../assets/img/han1.jpg') },
        { img: require('../assets/img/han2.jpg') },
        { img: require('../assets/img/han3.jpg') }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.list {
  margin-top: 10px;
  background-color: #fff;
  padding: 15px;
  .item {
    width: 25%;
    text-align: center;
    margin-bottom: 15px;
    font-size: 14px;
    > img {
      width: 40px;
      margin-bottom: 6px;
    }
  }
}
</style>
