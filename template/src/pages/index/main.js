import Vue from 'vue';
import App from './index';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTextStyle: 'light',
    navigationBarTitleText: '起始页面'
  }
};
