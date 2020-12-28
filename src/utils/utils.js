/**
 * @description 防抖
 * @param {Function} fn 
 * @param {Number | String} delay 
 * @param {Object} options
 *  immdiate: 延迟函数执行时机，默认为 false（不管点击几次， 在相同时间间隔内，只执行一次）
 *  true 在延迟之前 执行函数
 *  false 在延迟结束后 执行函数
 */
export const debounce = (fn, delay = 0, { immdiate } = { immdiate: false }) => {
  let timer = null
  let isImmdaite = false
  return (...args) => {
    if (timer) clearTimeout(timer)
    if (immdiate && !isImmdaite) {
      isImmdaite = true
      fn.call(this, ...args)
    }
    timer = setTimeout(() => {
      isImmdaite = false
      return !immdiate && fn.call(this, ...args)
    }, delay)
  }
}

/**
 * @description 节流
 * @param {Function} fn 
 * @param {Number | String} delay 
 * @param {Object} options
 *  immdiate: 延迟函数执行时机，默认为 false（不管点击几次， 在相同时间间隔内，只执行一次）
 *  true 在延迟之前 执行函数
 *  false 在延迟结束后 执行函数
 */
export const throttle  = (fn, delay = 0, { immdiate } = { immdiate: false }) => {
  let timer = null
  let isImmdaite = false
  return (...args) => {
    if (!timer) {
      if (immdiate && !isImmdaite) {
        isImmdaite = true
        fn.call(this, ...args)
      }
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        isImmdaite = false
        return !immdiate && fn.call(this, ...args)
      }, delay)
    }
  }
}