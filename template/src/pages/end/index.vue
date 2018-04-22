<template>
  <div class="container">
    <div class="container-box">
      <bm-header :title="title" color="#F05A50"></bm-header>
      <div class="cli-end">
        <div>这是上个页面传的消息</div>
        <div>{{ globalData.words }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import DI from '@/core/index';
  import Header from '@/components/header';

  export default {
    components: {
      'bm-header': Header
    },

    data() {
      return {
        title: '结束页面',
        headerHeight: '64px',
        showHeader: false,
        globalData: {}
      };
    },

    created() {
      if (DI.getStatusBarHeight()) {
        this.headerHeight = `${DI.getStatusBarHeight() + 44}px`;
      }
      this.showHeader = DI.isWechatVersionEqualOrGreaterThan('6.6.0');
    },

    mounted() {
      this.globalData = DI.getGlobalAppData('globalData');
    }
  };
</script>

<style scoped>
  .container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #FFF;
    box-sizing: border-box;
  }

  .container .container-box {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .cli-end {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, #F05A50, #FFF);
    justify-content: center;
    align-items: center;
    color: #FFF;
  }
</style>
