import { throttle } from '../utils/utils.js'

let booleanMap = {
  'true': true,
  'false': false
}
export default {
  mounted (el, bind, vnode) {
    const { modifiers, value } = bind
    const { delay, immdiate = 'false' } = el.dataset


    if (Array.isArray(value)) {
      el.addEventListener(Object.keys(modifiers)[0], value[1](value[0], delay))
    } else {
      el.addEventListener(Object.keys(modifiers)[0], throttle(value, delay, {
        immdiate: booleanMap[immdiate]
      }))
    }
  }
}