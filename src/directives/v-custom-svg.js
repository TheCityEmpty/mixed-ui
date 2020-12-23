import { h } from 'vue'
import http from '../utils/http.js'
import { createdComponents } from '../utils/components.js'


export default {
  async mounted (el, bind, vnode) {
    const { src, hover, background, width, height } = el.dataset
    const res = await http(src)
    const domParser = new DOMParser()
    const svgEl = domParser.parseFromString(res, 'text/xml')
    const paths = svgEl.querySelectorAll('path')
    const svgTag = svgEl.getElementsByTagName('svg')[0]
    
    const viewBox = svgTag.getAttribute('viewBox')
    const fillColor = background || svgTag.getAttribute('fill') || paths[0].getAttribute('fill')
    const svgWidth = width || svgTag.getAttribute('width')
    const svgHeight = height || svgTag.getAttribute('height')

    const childrens = Array.prototype.map.call(paths, item => {
      return h('path', {
        d: item.getAttribute('d')
      })
    })
    const createdEl = createdComponents('svg', {
      viewBox: viewBox,
      width: svgWidth,
      height: svgHeight,
      fill: fillColor,
      ...bind.value,
      onMouseover: (e) => {
        if (e.target.nodeName === 'svg') {
          e.target.setAttribute('fill', hover)
        }
      },
      onMouseleave: (e) => {
        if (e.target.nodeName === 'svg') {
          e.target.setAttribute('fill', fillColor)
        }
      }
    }, childrens)

    el.parentNode.replaceChild(createdEl, el)
  }
}