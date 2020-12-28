https://www.w3school.com.cn/js/jsref_events.asp
## 自定义指令 `v-throttle`

**函数节流（throttle）**限制一个函数在一定时间内只能执行一次

在日常开发中， 节流是很常见的，它是一种性能优化的手段。将节流集成在指令里面，避免了与业务的交叉。

如何使用？

修饰符 代表着js事件，`value` 值代表着需要节流的方法。
```html
<!-- 采用mixed-ui 的默认节流 -->
<button v-throttle.click="add">add</button>

<!-- 采用自己提供的节流方法 -throttle -->
<button v-throttle.click="[add, throttle]">add</button>
```
```js
// 采用自己提供的节流方法
import _ from 'lodash'

export default {
  setup () {
    return {
      throttle: _.throttle
    }
  }
}
```

| 属性        | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| ------:|
| 修饰符      | js 事件，参考[JavaScript 事件参考手册](https://www.w3school.com.cn/js/jsref_events.asp) |  |        |
| data-delay      | 节流的差时 | String or Number |  0      |
| data-immdiate      | 节流函数执行时机 | String |  false      |
|  v-throttle="[]" | 指令value可为数组，数组第一位代表需要节流的事件，第二位代表采用自己提供的节流方法 |    |       |