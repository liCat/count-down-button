## count-down-button
> 一个倒计时按钮的 vue 组件

[github 地址](https://github.com/liCat/count-down-button)

[demo地址](https://licat.github.io/count-down-button/example/index.html)

[测试报告](https://licat.github.io/count-down-button/coverage/lcov-report/index.html)

点击按钮后，会向父组件emit一个事件通知。按钮会进行倒计时，倒计时过程中不允许再次点击；倒计时完成后可以再次点击，依然遵循前面描述的逻辑。

### feature

* 可以传入自定义初始文案和等待文案。
* 可以传入倒计时时间,单位为秒。
* 可以传入是否可用标记,如果不可用,则点击无效。
* 可以根据是否可用以及是否已点击来判断按钮是否被禁用。


### install

此模块尚未发布到 https://www.npmjs.com/ , 假设已经发布,则安装命令如下:
```
npm install count-down-button
```
### usage

#### 注册组件
```
import Vue from 'vue'
import CountDownButton from 'count-down-button'
Vue.use(CountDownButton)
// or

import {CountDownButton} from 'count-down-button'
Vue.component(CountDownButton.CountDownButton,CountDownButton)

```

#### Demo
```
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
```
#### 属性

| 属性名         | 类型      | 说明  | 可选值| 默认值 |
| ------------- |:---------:| :----------| :-----:|:-----:|
| enable      | Boolean     | 是否可用 |`true` \| `false` | `true` |
| second      | Number      |倒计时总秒数  | 正整数 | 60 |
| textNormal  | String      | 未进入倒计时状态时的文字| -  | '发送验证码' |
| textWaiting | String      |  倒计时状态时的文字,其中可以使用`{s}`作为占位符,此符号会被替换成倒计时的秒数| -  | '请耐心等待,{s}秒后重新发送' |
| enableClassName | String     | 可用状态下的按钮class,可供在外部书写样式 | - | 'enable' |
| disableClassName | String     | 不可用状态下的按钮class,可供在外部书写样式 | - | 'disable' |


#### 事件

| 事件名         | 说明      | 回调参数 |
| ------------- |:---------:| :----------|
| click      |  点击可用的按钮时触发  | - |
| timeEnd    |  倒计时结束时触发      | - |
