import { ErudaUme } from './eruda-ume'

if (window.eruda) {
  window.eruda.init({
    tool: ['console'],
  })
  window.eruda.add(new ErudaUme())
}
