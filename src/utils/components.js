import { render, h } from 'vue'

export const createdComponents = (component, props, childrens) => {
  const vNode = h(component, { ...props }, childrens)
  render(vNode, document.createElement('div'))

  return vNode.el
}