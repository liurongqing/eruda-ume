var i=o=>{if(navigator.clipboard)return navigator.clipboard.writeText(o),!0;if(document.execCommand){var e=document.createElement("textarea");return document.body.appendChild(e),e.style.position="fixed",e.style.clip="rect(0 0 0 0)",e.style.top="10px",e.value=o,e.select(),document.execCommand("copy",!0),document.body.removeChild(e),!0}else return!1};var c=`.eruda-ume {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 10px;
  font-size: 14px;
}
.eruda-ume .section {
  margin-bottom: 10px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.eruda-ume .section .content {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 400px;
}

.eruda-ume .section.warn {
  border: 1px solid var(--console-warn-border);
}

.eruda-ume .section.warn .title {
  background: var(--console-warn-background);
  color: var(--console-warn-foreground);
}

.eruda-ume .section.danger {
  border: 1px solid var(--console-error-border);
}

.eruda-ume .section.danger .title {
  background: var(--console-error-background);
  color: var(--console-error-foreground);
}

.eruda-ume .title {
  padding: 10px;
  color: var(--primary);
  background: var(--darker-background);
}

.eruda-ume .title .btn {
  display: flex;
  margin-left: 5px;
  float: right;
  color: var(--primary);
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3;
}

.eruda-ume .title .btn.search-keyword {
  width: auto;
  max-width: 80px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}

.eruda-ume .title .btn:active {
  color: var(--accent);
}

.eruda-ume .link-list {
  font-size: 12px;
  color: var(--foreground);
}

.eruda-ume .link-list li {
  padding: 10px;
  word-break: break-all;
}

.eruda-ume .link-list li a {
  color: var(--link-color) !important;
}

.eruda-ume .image-list {
  color: var(--foreground);
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px !important;
}
.eruda-ume .image-list li {
  flex-grow: 1;
  cursor: pointer;
  overflow-y: hidden;
}
.eruda-ume .image-list li.image {
  height: 100px;
  font-size: 0;
}
.eruda-ume .image-list li img {
  height: 100px;
  min-width: 100%;
  object-fit: cover;
}
.eruda-ume .image-list:after {
  content: '';
  display: block;
  clear: both;
}
.eruda-ume table {
  color: var(--foreground);
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}
.eruda-ume table tr:nth-child(even) {
  background: var(--contrast);
}
.eruda-ume table td {
  padding: 10px;
  word-break: break-all;
}
.eruda-ume table td.key {
  white-space: nowrap;
  max-width: 120px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.eruda-ume table td.control {
  padding: 0;
  font-size: 0;
  width: 40px;
}
.eruda-ume table td.control-text {
  font-size: inherit;
}
.eruda-ume table td.control .eruda-icon-delete {
  cursor: pointer;
  color: var(--primary);
  font-size: 14px;
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  transition: color 0.3;
}
.eruda-ume table td.control .eruda-icon-delete:active {
  color: var(--accent);
}

.eruda-test-icon {
  margin: 10px!important;
}`;var l=`<!-- <div class="section storage">
  <h2 class="title">
    Storage
    <div class="btn search" data-type="local">
      <span class="eruda-icon-refresh"></span>
    </div>
    <div class="btn clear-storage" data-type="local">
      <span class="eruda-icon-clear"></span>
    </div>
  </h2>

  <div class="content">
    <table>
      <tbody>
        <tr>
          <td class="key">1111</td>
          <td class="storage-val">1111</td>
          <td class="control">
            <span class="eruda-icon-delete"></span>
          </td>
        </tr>
        <tr>
          <td align="center" colspan="3">+</td>
        </tr>
      </tbody>
    </table>
  </div>
</div> -->

<div class="section actions">
  <h2 class="title">\u5E38\u7528\u64CD\u4F5C</h2>

  <div class="content">
    <table></table>
  </div>
</div>

<div class="section btns" style="display: none">
  <h2 class="title">\u6240\u6709\u56FE\u6807\u5C55\u793A</h2>
  <div class="content">
    <span class="eruda-test-icon eruda-icon-search"></span>
    <span class="eruda-test-icon eruda-icon-arrow-left"></span>
    <span class="eruda-test-icon eruda-icon-arrow-right"></span>
    <span class="eruda-test-icon eruda-icon-caret-down"></span>
    <span class="eruda-test-icon eruda-icon-caret-right"></span>
    <span class="eruda-test-icon eruda-icon-clear"></span>
    <span class="eruda-test-icon eruda-icon-compress"></span>
    <span class="eruda-test-icon eruda-icon-delete"></span>
    <span class="eruda-test-icon eruda-icon-error"></span>
    <span class="eruda-test-icon eruda-icon-expand"></span>
    <span class="eruda-test-icon eruda-icon-eye"></span>
    <span class="eruda-test-icon eruda-icon-play"></span>
    <span class="eruda-test-icon eruda-icon-refresh"></span>
    <span class="eruda-test-icon eruda-icon-reset"></span>
    <span class="eruda-test-icon eruda-icon-search"></span>
    <span class="eruda-test-icon eruda-icon-select"></span>
    <span class="eruda-test-icon eruda-icon-tool"></span>
    <span class="eruda-test-icon eruda-icon-warn"></span>
  </div>
</div>
`;var d=`<td class="key"></td>
<td class="value"></td>
<td class="control control-text" data-val="">
  <span>\u590D\u5236</span>
</td>
`;var C=o=>{let{Tool:e,util:u}=o,{evalCss:n}=u;class p extends e{constructor(){super(),this._style=n(c),this._tpl=l,this.name="ume",this._storageList=[],this._actionsList=[]}init(t,s){super.init(t),this._container=s,t.html(this._tpl),this._actionContainer=t.find(".actions table").get(0),this._getActionsList()}addStorage(){}removeStorage(){}clearStorage(){}getStorageList(){}addAction(t){Array.isArray(t)?this._actionsList=this._actionsList.concat(t):this._actionsList.push(t),this._getActionsList()}_getActionsList(){let t=this._container,s=document.createElement("tbody");if(this._actionsList.forEach(r=>{let a=document.createElement("tr");a.innerHTML=d,a.querySelector(".key").innerHTML=r.key,a.querySelector(".value").innerHTML=r.value,a.querySelector(".control-text").setAttribute("data-val",r.value),s.appendChild(a)}),this._actionContainer.innerHTML="",this._actionContainer.appendChild(s),this._actionsList.length===0)return!1;this._$el.on("click",".control-text",function(r){let m=r.curTarget.getAttribute("data-val");i(m),t.notify("\u590D\u5236\u6210\u529F")})}show(){super.show()}hide(){super.hide()}destroy(){super.destroy(),n.remove(this._style)}}return new p};export{C as ErudaUmePlugin};
