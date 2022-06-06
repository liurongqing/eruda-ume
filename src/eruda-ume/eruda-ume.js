import styles from './eruda-ume.css'
import html from './eruda-ume.html'

const { Tool, util } = eruda
const { evalCss } = util

export class ErudaUme extends Tool {
  constructor() {
    super()

    this._style = evalCss(styles)
    this._tpl = html
    this.name = 'Ume'
  }

  init($el, container) {
    super.init($el)
    $el.html(this._tpl)
  }

  show() {
    super.show()
  }

  hide() {
    super.hide()
  }

  destroy() {
    super.destroy()
    evalCss.remove(this._style)
  }
}
