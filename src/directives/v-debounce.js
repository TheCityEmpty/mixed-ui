import { debounce } from '../utils/utils.js'
export default {
  mounted (el, bind, vnode) {
    const { modifiers, value } = bind
    const { delay = 300 } = el.dataset


    if (Array.isArray(value)) {
      el.addEventListener(Object.keys(modifiers)[0], value[1](value[0], delay))
    } else {
      el.addEventListener(Object.keys(modifiers)[0], debounce(value, delay))
    }
  }
}