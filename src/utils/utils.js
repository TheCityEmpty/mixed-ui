// 防抖
export const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

// 节流
export const throttle  = (fn, delay) => {
  let timer = null
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => fn(...args), delay)
    }
  }
}