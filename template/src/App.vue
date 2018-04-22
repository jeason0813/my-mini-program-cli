<script>
  export default {
    created() {
      console.log('mini-program start created'); //eslint-disable-line
    },
    mounted() {
      console.log('mini-program start mounted'); //eslint-disable-line
    }
  };
</script>

<style>
  /* 全局css */

  div {
    box-sizing: border-box;
    font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  }

  img {
    display: block;
  }

  div, a, button {
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
  }

  .clearfix:after {
    content:'';
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
</style>
