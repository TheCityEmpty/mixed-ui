https://www.w3school.com.cn/js/jsref_events.asp
## 自定义指令 `v-debounce`

**函数防抖（debounce）**就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间

在日常开发中， 防抖是很常见的，它是一种性能优化的手段。将防抖集成在指令里面，避免了与业务的交叉。

如何使用？

修饰符 代表着js事件，`value` 值代表着需要防抖的方法。
```html
<!-- 采用mixed-ui 的默认防抖 -->
<button v-debounce.click="add">add</button>

<!-- 采用自己提供的防抖方法 -debounce -->
<button v-debounce.click="[add, debounce]">add</button>
```
```js
// 采用自己提供的防抖方法
import _ from 'lodash'

export default {
  setup () {
    return {
      debounce: _.debounce
    }
  }
}
```

| 属性        | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| ------:|
| 修饰符      | js 事件，参考[JavaScript 事件参考手册](https://www.w3school.com.cn/js/jsref_events.asp) |  |        |
| data-delay      | 防抖的差时 | String or Number |  0      |
| data-immdiate      | 防抖函数执行时机 | String |  false      |
|  v-debounce="[]" | 指令value可为数组，数组第一位代表需要防抖的事件，第二位代表采用自己提供的防抖方法 |    |       |