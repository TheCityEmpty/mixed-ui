import vCustomSvg from './v-custom-svg.js'


export default {
  install (app) {
    app.directive('custom-svg', vCustomSvg)
  }
}