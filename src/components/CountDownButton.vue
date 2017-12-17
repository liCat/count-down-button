<--
@author keLi
@date 17/12/15
-->
<template>
    <span class="ui-count-down-button"
          :class="[disableClassName,enableClassName,disableClassName][status]"
          @click="handleClick">{{innerText}}</span>
</template>
<script type="text/babel">
  export default {
    name: 'count-down-button',
    props: {
      enable: {
        type: Boolean,
        default: true
      },
      second: {
        type: Number,
        default: 60,
        validator (val) {
          return Number.isInteger(val) && val > 1
        }
      },
      textNormal: {
        type: String,
        default: '发送验证码'
      },
      textWaiting: {
        type: String,
        default: '请耐心等待,{s}秒后重新发送'
      },
      enableClassName: {
        type: String,
        default: 'enable'
      },
      disableClassName: {
        type: String,
        default: 'disable'
      }
    },
    data () {
      return {
        status: 1, // [0:不可用状态,1:可点击状态,2:等待状态],
        remainTime: 0,
        timeoutInstance: null
      }
    },
    computed: {
      innerText () {
        switch (this.status) {
          case 2:
            return this.textWaiting.replace('{s}', this.remainTime)
          case 1:
          case 0:
            return this.textNormal
        }
      }
    },
    mounted () {
      this.reset()
    },
    beforeDestroyed () {
      this.reset()
    },
    methods: {
      reset () {
        this.status = this.enable ? 1 : 0
        this.remainTime = this.second
        clearTimeout(this.timeoutInstance)
      },
      handleClick () {
        switch (this.status) {
          case 2:
          case 0:
            return
          case 1:
            this.$emit('click')
            this.timeoutCallBack()
            return this.textWaiting.replace('{s}', this.remainTime)
        }
      },
      timeoutCallBack () {
        this.remainTime--
        if (!this.remainTime) {
          this.$emit('timeEnd')
          this.reset()
        } else {
          this.status = 2
          this.timeoutInstance = setTimeout(this.timeoutCallBack, 1e3)
        }
      }
    }
  }
</script>
<style>
  .ui-count-down-button {
    padding: 1em 2em;
    border-radius: 0.4em;
    transition: all 0.4s;
  }

  .ui-count-down-button.enable {
    background-color: #39f;
    cursor: pointer;
    color: #fff;
  }

  .ui-count-down-button.enable:hover {
    background-color: #38e;
  }

  .ui-count-down-button.disable {
    background-color: #ccc;
    color: #555;
    cursor: not-allowed;
  }
</style>
