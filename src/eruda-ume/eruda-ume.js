import { copyText } from '../utils';
import styles from './eruda-ume.css';
import html from './eruda-ume.html';
import itemHtml from './action-item.html';

export const ErudaUmePlugin = (eruda) => {
  const { Tool, util } = eruda;
  const { evalCss } = util;
  class ErudaUme extends Tool {
    constructor() {
      super();

      this._style = evalCss(styles);
      this._tpl = html;
      this.name = 'ume';

      this._storageList = [];
      this._actionsList = [];
    }

    init($el, container) {
      super.init($el);
      this._container = container;
      $el.html(this._tpl);
      this._actionContainer = $el.find('.actions table').get(0);
      this._getActionsList();
    }

    /**
     * 操作 Storage
     * 原生提供的太弱了【】，【移除】有bug，暂不弄
     */
    addStorage() {}
    removeStorage() {}
    clearStorage() {}
    getStorageList() {}

    /**
     * 操作常用操作
     */
    addAction(action) {
      if (Array.isArray(action)) {
        this._actionsList = this._actionsList.concat(action);
      } else {
        this._actionsList.push(action);
      }
      this._getActionsList();
    }
    _getActionsList() {
      const container = this._container;
      const $tbody = document.createElement('tbody');
      this._actionsList.forEach((action) => {
        const element = document.createElement('tr');
        element.innerHTML = itemHtml;
        element.querySelector('.key').innerHTML = action.key;
        element.querySelector('.value').innerHTML = action.value;
        element
          .querySelector('.control-text')
          .setAttribute('data-val', action.value);
        $tbody.appendChild(element);
      });

      this._actionContainer.innerHTML = '';
      this._actionContainer.appendChild($tbody);

      if (this._actionsList.length === 0) {
        return false;
      }

      /**
       * 只能渲染一次，暂时还没弄好，如何取消事件
       */
      this._$el.on('click', '.control-text', function (event) {
        const target = event.curTarget;
        const text = target.getAttribute('data-val');
        copyText(text);
        container.notify('复制成功');
      });
    }

    show() {
      super.show();
    }

    hide() {
      super.hide();
    }

    destroy() {
      super.destroy();
      evalCss.remove(this._style);
    }
  }
  return new ErudaUme();
};
