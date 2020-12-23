import vCustomSvg from './v-custom-svg.js'
import vDebounce from './v-debounce.js'

export default {
  install (app) {
    app.directive('custom-svg', vCustomSvg)
    app.directive('debounce', vDebounce)
  }
}