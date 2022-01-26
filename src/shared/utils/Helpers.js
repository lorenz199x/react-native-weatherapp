export const debounce = (func, delay, timeOutId) => {
  return (...args) => {
    if(timeOutId) clearTimeout(timeOutId)
    setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}