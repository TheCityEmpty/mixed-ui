## 自定义指令 `v-custom-svg`

`svg` 类型的图片在现在很常见，使用这种类型的图片有很多好处。

它是矢量图片，意味着用户可以任意缩放图像显示，而不会破坏图像的清晰度、细节等。并且SVG文件比那些GIF和JPEG格式的文件要小很多，因而下载也很快等等。

当我们平常使用它的时候，通常是设计师切下来给你， 你无法动态的去修改它。比如，你想去改它的颜色， 或者你想给他一个 `hover` 效果（这个时候你可能需要让设计师给你切两张图片来切换实现）。

这个组件就能解决以上的问题，如何使用？

```html
<!-- 修改他的颜色 -->
<img v-custom-svg data-background="#f00" data-src="/src/assets/dong_tai.svg" />

<!-- 让他可以hover -->
<img v-custom-svg data-hover="#f00" data-src="/src/assets/dong_tai.svg" />

<!-- 添加一些其他属性，比如 class style 等svg拥有的属性 -->
<img v-custom-svg="{ class: ['cc'] }" data-src="/src/assets/dong_tai.svg" />
<!-- 渲染结果 ↓ -->
<!-- <svg ... class="cc"></svg> -->
```
| 属性        | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| ------:|
| data-src      | svg的路径 | String |        |
| data-background      | svg的颜色 | String |  原svg的颜色      |
| data-hover      | svg 被hover 时的颜色     |  String |       |
| data-width | svg的width  |   String |         |
| data-height | svg的hieght  |   String |       |
|  v-custom-svg="{}" | {} 中可添加其他属性 |    |       |
