<template>
  <div
    class="header"
    :style="{ paddingTop: statusBarHeight }"
    v-show="showHeader"
  >
    <div class="header-title" :style="{ color: color }">
      {{ title }}
    </div>
  </div>
</template>

<script>
  import DI from '@/core/index';

  export default {
    props: ['title', 'color'],

    created() {
      if (DI.getStatusBarHeight()) {
        this.statusBarHeight = `${DI.getStatusBarHeight()}px`;
      }
      this.showHeader = DI.isWechatVersionEqualOrGreaterThan('6.6.0');
    },

    data() {
      return {
        showHeader: false,
        statusBarHeight: '20px'
      };
    }
  };
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: transparent;
    z-index: 99;
  }
  .header .header-title {
    line-height: 44px;
    text-align: center;
    font-size: 38rpx;
    color: #FFF;
  }
</style>
