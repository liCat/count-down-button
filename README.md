## count-down-button
> 一个倒计时按钮的 vue 组件

[github 地址](https://github.com/liCat/count-down-button)

[demo地址](https://licat.github.io/count-down-button/example/index.html)

点击按钮后，会向父组件emit一个事件通知。按钮会进行倒计时，倒计时过程中不允许再次点击；倒计时完成后可以再次点击，依然遵循前面描述的逻辑。

### feature

* 可以传入自定义初始文案和等待文案。
* 可以传入倒计时时间,单位为秒。
* 可以传入是否可用标记,如果不可用,则点击无效。
* 可以根据是否可用以及是否已点击来判断按钮是否被禁用。

