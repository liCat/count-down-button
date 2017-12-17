<template>
  <div id="app">
    <count-down-button
      :second="23"
      text-normal="获取验证码"
      @click="handleClick"
      @timeEnd = "handleTimeEnd"
      :enable="true"></count-down-button>
  </div>
</template>
<script>
  export default {
    name: 'app',
    components: {
    },
    methods: {
      handleClick () {
        console.log('click')
      },
      handleTimeEnd () {
        console.log('timeEnd')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
