<template>
  <div class="container" @click="goTo('../end/main')">
    <div class="container-box">
      <bm-header :title="title" color="#FFF"></bm-header>
      <div class="cli-index">
        <div>欢迎使用mini-program-cli</div>
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
        title: '起始页面',
        name: '贝米钱包',
        globalData: {
          words: 'HELLO, WORLD'
        }
      };
    },

    mounted() {
      DI.setGlobalAppData('globalData', this.globalData);
      // DI.setOfflineStorage('globalData', this.globalData);
    },

    methods: {
      goTo(url) {
        DI.goTo(url);
      }
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

  .cli-index {
    width: 100%;
    height: 100%;
    display: flex;
    background: linear-gradient(135deg, #F05A50, #FFF);
    justify-content: center;
    align-items: center;
    color: #FFF;
  }
</style>
