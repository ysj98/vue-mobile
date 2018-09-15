<style lang="less">
.little-tip {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  z-index: 999;
  .icon-ok {
    display: block;
    margin-left: 31px;
    margin-bottom: 12px;
    font-size: 28px;
    color: #ffffff;
  }
  .icon-delete-img {
    display: block;
    margin-left: 31px;
    margin-bottom: 12px;
    font-size: 28px;
    color: #ffffff;
  }
  img{
    margin-bottom: 8px;
  }
  span {
    // width: 100%;
    text-align: center;
    display: block;
    color: #ffffff;
    font-size: 16px;
  }
  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.5s;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
}
</style>
<template>
  <div>
    <transition name="fade">
      <div class="little-tip" v-show="showLittleTip">
        <img src="../../../assets/img/success.png" alt="" width="36" v-if="type=='success'">
        <span>{{littleTipMessage}}</span>
      </div>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'little-tip',
  data () {
    return {
      showLittleTip: true,
      littleTipMessage: '',
      type: ''
    }
  },
  methods: {
    changeImge () {
      if (this.success) {
        return 'icon-ok'
      } else {
        return 'icon-delete-img'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.showLittleTip = false
    }, 1000)
  }
}
</script>
