"use strict";(self.webpackChunk_jupyter_lsp_jupyterlab_lsp=self.webpackChunk_jupyter_lsp_jupyterlab_lsp||[]).push([[716,795,336,954],{7400:(e,t,n)=>{n.d(t,{c:()=>i});var l=n(3260),a=n.n(l),o=n(1957),r=n.n(o)()(a());r.push([e.id,".lsp-completer-themes .lsp-licence {\n  display: inline;\n}\n\n.lsp-completer-themes ul {\n  list-style: none;\n  padding-left: 10px;\n}\n\n.lsp-completer-theme-icons {\n  margin-left: 10px;\n}\n\n.lsp-completer-icon-row {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n}\n\nbody[data-lsp-completer-layout] .jp-Completer-docpanel {\n  width: 300px;\n  /* https://github.com/jupyterlab/jupyterlab/pull/15024 */\n  flex-shrink: 0;\n}\n\nbody[data-lsp-completer-layout] {\n  /* Important to use selectors which work on body so that size estimation\n  works when the list items get temporarily attached to the body */\n  --lsp-completer-max-label-width: 400px;\n  --lsp-completer-max-detail-width: 200px;\n}\n\nbody[data-lsp-completer-layout] .jp-Completer-match {\n  max-width: calc(\n    var(--lsp-completer-max-label-width) + var(--lsp-completer-max-detail-width)\n  );\n  overflow-x: hidden;\n  white-space: nowrap;\n  display: block;\n  text-overflow: ellipsis;\n}\n\nbody[data-lsp-completer-layout] .jp-mod-active .jp-Completer-match {\n  text-overflow: clip;\n}\n\n.lsp-completer-placeholder:after {\n  content: 'Loading...';\n  color: #7f7f7f;\n}\n\n/* a workaround for code being larger font size than text in markdown-rendered panel */\nbody[data-lsp-completer-layout] .jp-Completer-docpanel pre code {\n  font-size: 90%;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-item {\n  --lsp-completer-label-height: 24px;\n  --lsp-completer-detail-height: 20px;\n  --lsp-completer-icon-width: 16px;\n  height: var(--lsp-completer-label-height);\n  display: grid;\n  grid-template-areas:\n    'icon label'\n    'detail detail';\n  grid-template-columns: min-content 1fr;\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active {\n  height: calc(\n    var(--lsp-completer-detail-height) + var(--lsp-completer-label-height)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-icon {\n  grid-area: icon;\n  width: var(--lsp-completer-icon-width);\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  grid-area: label;\n  overflow: hidden;\n  height: var(--lsp-completer-label-height);\n}\n\nbody[data-lsp-completer-layout] .jp-Completer-item .jp-Completer-typeExtended {\n  max-width: var(--lsp-completer-max-detail-width);\n  min-height: 50px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nbody[data-lsp-completer-layout] .jp-mod-active .jp-Completer-typeExtended {\n  text-overflow: clip;\n}\n\nbody[data-lsp-completer-layout] mark.lsp-elide:first-child {\n  display: inline-block;\n  overflow-x: clip;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  direction: rtl;\n  /* stretch to as much space as possible */\n  flex-shrink: 1;\n  /* always reserve small space to fit the ellipsis */\n  min-width: 20px;\n  /* a reasonably long limit on the space taken by the elipsis */\n  max-width: calc(var(--lsp-completer-max-label-width) / 2);\n}\n\nbody[data-lsp-completer-layout] .lsp-elide-wrapper {\n  display: flex;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-typeExtended {\n  grid-area: detail;\n  text-align: left;\n  padding-left: calc(var(--lsp-completer-icon-width) + 8px);\n  height: var(--lsp-completer-detail-height);\n  line-height: var(--lsp-completer-detail-height);\n  display: none;\n  position: relative;\n  top: -2px;\n  overflow: hidden;\n  max-width: var(--lsp-completer-max-label-width);\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  overflow: hidden;\n  max-width: var(--lsp-completer-max-label-width);\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active\n  .jp-Completer-typeExtended {\n  display: block;\n}\n","",{version:3,sources:["webpack://./../completion-theme/style/index.css"],names:[],mappings:"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,wDAAwD;EACxD,cAAc;AAChB;;AAEA;EACE;kEACgE;EAChE,sCAAsC;EACtC,uCAAuC;AACzC;;AAEA;EACE;;GAEC;EACD,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA,sFAAsF;AACtF;EACE,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,mCAAmC;EACnC,gCAAgC;EAChC,yCAAyC;EACzC,aAAa;EACb;;mBAEiB;EACjB,sCAAsC;AACxC;;AAEA;;EAEE;;GAEC;AACH;;AAEA;EACE,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;AAC3C;;AAEA;EACE,gDAAgD;EAChD,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,yCAAyC;EACzC,cAAc;EACd,mDAAmD;EACnD,eAAe;EACf,8DAA8D;EAC9D,yDAAyD;AAC3D;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,yDAAyD;EACzD,0CAA0C;EAC1C,+CAA+C;EAC/C,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,gBAAgB;EAChB,+CAA+C;AACjD;;AAEA;EACE,gBAAgB;EAChB,+CAA+C;AACjD;;AAEA;;;EAGE,cAAc;AAChB",sourcesContent:[".lsp-completer-themes .lsp-licence {\n  display: inline;\n}\n\n.lsp-completer-themes ul {\n  list-style: none;\n  padding-left: 10px;\n}\n\n.lsp-completer-theme-icons {\n  margin-left: 10px;\n}\n\n.lsp-completer-icon-row {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n}\n\nbody[data-lsp-completer-layout] .jp-Completer-docpanel {\n  width: 300px;\n  /* https://github.com/jupyterlab/jupyterlab/pull/15024 */\n  flex-shrink: 0;\n}\n\nbody[data-lsp-completer-layout] {\n  /* Important to use selectors which work on body so that size estimation\n  works when the list items get temporarily attached to the body */\n  --lsp-completer-max-label-width: 400px;\n  --lsp-completer-max-detail-width: 200px;\n}\n\nbody[data-lsp-completer-layout] .jp-Completer-match {\n  max-width: calc(\n    var(--lsp-completer-max-label-width) + var(--lsp-completer-max-detail-width)\n  );\n  overflow-x: hidden;\n  white-space: nowrap;\n  display: block;\n  text-overflow: ellipsis;\n}\n\nbody[data-lsp-completer-layout] .jp-mod-active .jp-Completer-match {\n  text-overflow: clip;\n}\n\n.lsp-completer-placeholder:after {\n  content: 'Loading...';\n  color: #7f7f7f;\n}\n\n/* a workaround for code being larger font size than text in markdown-rendered panel */\nbody[data-lsp-completer-layout] .jp-Completer-docpanel pre code {\n  font-size: 90%;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-item {\n  --lsp-completer-label-height: 24px;\n  --lsp-completer-detail-height: 20px;\n  --lsp-completer-icon-width: 16px;\n  height: var(--lsp-completer-label-height);\n  display: grid;\n  grid-template-areas:\n    'icon label'\n    'detail detail';\n  grid-template-columns: min-content 1fr;\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active {\n  height: calc(\n    var(--lsp-completer-detail-height) + var(--lsp-completer-label-height)\n  );\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-icon {\n  grid-area: icon;\n  width: var(--lsp-completer-icon-width);\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  grid-area: label;\n  overflow: hidden;\n  height: var(--lsp-completer-label-height);\n}\n\nbody[data-lsp-completer-layout] .jp-Completer-item .jp-Completer-typeExtended {\n  max-width: var(--lsp-completer-max-detail-width);\n  min-height: 50px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nbody[data-lsp-completer-layout] .jp-mod-active .jp-Completer-typeExtended {\n  text-overflow: clip;\n}\n\nbody[data-lsp-completer-layout] mark.lsp-elide:first-child {\n  display: inline-block;\n  overflow-x: clip;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  direction: rtl;\n  /* stretch to as much space as possible */\n  flex-shrink: 1;\n  /* always reserve small space to fit the ellipsis */\n  min-width: 20px;\n  /* a reasonably long limit on the space taken by the elipsis */\n  max-width: calc(var(--lsp-completer-max-label-width) / 2);\n}\n\nbody[data-lsp-completer-layout] .lsp-elide-wrapper {\n  display: flex;\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-typeExtended {\n  grid-area: detail;\n  text-align: left;\n  padding-left: calc(var(--lsp-completer-icon-width) + 8px);\n  height: var(--lsp-completer-detail-height);\n  line-height: var(--lsp-completer-detail-height);\n  display: none;\n  position: relative;\n  top: -2px;\n  overflow: hidden;\n  max-width: var(--lsp-completer-max-label-width);\n}\n\nbody[data-lsp-completer-layout='detail-below'] .jp-Completer-match {\n  overflow: hidden;\n  max-width: var(--lsp-completer-max-label-width);\n}\n\nbody[data-lsp-completer-layout='detail-below']\n  .jp-Completer-item.jp-mod-active\n  .jp-Completer-typeExtended {\n  display: block;\n}\n"],sourceRoot:""}]);const i=r},1957:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",l=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),l&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),l&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,l,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(l)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var p=0;p<e.length;p++){var c=[].concat(e[p]);l&&r[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},3260:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var l=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},716:(e,t,n)=>{n.r(t),n.d(t,{COMPLETER_THEME_PREFIX:()=>g,COMPLETION_THEME_MANAGER:()=>I,CompletionThemeManager:()=>_,ILSPCompletionThemeManager:()=>k,KernelKind:()=>j,PLUGIN_ID:()=>B});var l=n(2108),a=n.n(l),o=n(7020),r=n.n(o),i=n(7240),s=n.n(i),p=n(9516),c=n.n(p),d=n(2940),m=n.n(d),h=n(9296),A=n.n(h),u=n(7400),C={};C.styleTagTransform=A(),C.setAttributes=c(),C.insert=s().bind(null,"head"),C.domAPI=r(),C.insertStyleElement=m(),a()(u.c,C),u.c&&u.c.locals&&u.c.locals;var y=n(6052),E=n(7852),f=n(7768),b=n(6512),v=n.n(b),w=n(2464);const g="lsp-completer-theme-";var x;!function(e){e[e.Text=1]="Text",e[e.Method=2]="Method",e[e.Function=3]="Function",e[e.Constructor=4]="Constructor",e[e.Field=5]="Field",e[e.Variable=6]="Variable",e[e.Class=7]="Class",e[e.Interface=8]="Interface",e[e.Module=9]="Module",e[e.Property=10]="Property",e[e.Unit=11]="Unit",e[e.Value=12]="Value",e[e.Enum=13]="Enum",e[e.Keyword=14]="Keyword",e[e.Snippet=15]="Snippet",e[e.Color=16]="Color",e[e.File=17]="File",e[e.Reference=18]="Reference",e[e.Folder=19]="Folder",e[e.EnumMember=20]="EnumMember",e[e.Constant=21]="Constant",e[e.Struct=22]="Struct",e[e.Event=23]="Event",e[e.Operator=24]="Operator",e[e.TypeParameter=25]="TypeParameter"}(x||(x={}));const B="@jupyter-lsp/completion-manager",j="Kernel",k=new w.Token(B+":ILSPCompletionThemeManager");function T(e,t){let n=t.themes.map((n=>function(e,t,n,l){let a=[];for(let[e,l]of n(t))a.push(v().createElement("div",{className:"lsp-completer-icon-row"},v().createElement("div",null,e),v().createElement("div",{className:"jp-Completer-icon"},v().createElement(l.react,null))));return v().createElement("div",{className:"lsp-completer-themes "+g+t.id},v().createElement("h4",null,t.name,l?e.__(" (current)"):""),v().createElement("ul",null,v().createElement("li",{key:"id"},"ID: ",v().createElement("code",null,t.id)),v().createElement("li",{key:"licence"},e.__("Licence: "),(o=t.icons.licence,v().createElement("div",{className:"lsp-licence"},v().createElement("a",{href:o.link,title:o.name},o.abbreviation)," ",o.licensor))),v().createElement("li",{key:"dark"},void 0===t.icons.dark?"":e.__("Includes dedicated dark mode icons set"))),v().createElement("div",{className:"lsp-completer-theme-icons"},a));var o}(e,n,t.getSet,n==t.current)));return v().createElement("div",null,n)}class _{constructor(e,t){this.themeManager=e,this._currentThemeId=null,this.themes=new Map,this._iconsCache=new Map,this._iconOverrides=new Map,e.themeChanged.connect(this.updateIconsSet,this),this._trans=t}isThemeLight(){const e=this.themeManager.theme;return!e||this.themeManager.isLight(e)}getIconSet(e){var t,n;const l=e.icons,a=this.isThemeLight()||void 0===l.dark?l.light:l.dark,o=new Map;let r=(null===(n=null===(t=this.currentTheme)||void 0===t?void 0:t.icons)||void 0===n?void 0:n.options)||{};const i=this.isThemeLight()?"light":"dark";for(let[t,n]of Object.entries(a)){let l,a="lsp:"+e.id+"-"+t.toLowerCase()+"-"+i;this._iconsCache.has(a)?l=this._iconsCache.get(a):(l=new f.LabIcon({name:a,svgstr:n}),this._iconsCache.set(a,l)),o.set(t,l.bindprops(r))}return o}updateIconsSet(){null!==this.currentTheme&&(this.currentIcons=this.getIconSet(this.currentTheme))}getIcon(e){return null===this.currentTheme?null:(e&&(this._iconOverrides.has(e.toLowerCase())&&(e=this._iconOverrides.get(e.toLowerCase())),e=e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()),this.currentIcons.has(e)?this.currentIcons.get(e):e===j?f.kernelIcon:null)}get currentThemeClass(){return g+this._currentThemeId}setTheme(e){this._currentThemeId&&document.body.classList.remove(this.currentThemeClass),e&&!this.themes.has(e)&&console.warn(`[LSP][Completer] Icons theme ${e} cannot be set yet (it may be loaded later).`),this._currentThemeId=e,null!==e&&document.body.classList.add(this.currentThemeClass),this.updateIconsSet()}get currentTheme(){return this._currentThemeId&&this.themes.has(this._currentThemeId)?this.themes.get(this._currentThemeId):null}registerTheme(e){this.themes.has(e.id)&&console.warn("Theme with name",e.id,"was already registered, overwriting."),this.themes.set(e.id,e),this.updateIconsSet()}displayThemes(){(0,y.showDialog)({title:this._trans.__("LSP Completer Themes"),body:T(this._trans,{themes:[...this.themes.values()],current:this.currentTheme,getSet:this.getIconSet.bind(this)}),buttons:[y.Dialog.okButton({label:this._trans.__("OK")})]}).catch(console.warn)}setIconsOverrides(e){this._iconOverrides=new Map(Object.keys(e).map((t=>[t.toLowerCase(),e[t]])))}}const I={id:B,requires:[y.IThemeManager,y.ICommandPalette,E.ITranslator],activate:(e,t,n,l)=>{const a=l.load("jupyterlab_lsp");let o=new _(t,a);const r="lsp:completer-about-themes";return e.commands.addCommand(r,{label:a.__("Display the completer themes"),execute:()=>{o.displayThemes()}}),n.addItem({category:a.__("Language server protocol"),command:r}),o},provides:k,autoStart:!0}},2108:e=>{var t=[];function n(e){for(var n=-1,l=0;l<t.length;l++)if(t[l].identifier===e){n=l;break}return n}function l(e,l){for(var o={},r=[],i=0;i<e.length;i++){var s=e[i],p=l.base?s[0]+l.base:s[0],c=o[p]||0,d="".concat(p," ").concat(c);o[p]=c+1;var m=n(d),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var A=a(h,l);l.byIndex=i,t.splice(i,0,{identifier:d,updater:A,references:1})}r.push(d)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=l(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var i=n(o[r]);t[i].references--}for(var s=l(e,a),p=0;p<o.length;p++){var c=n(o[p]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=s}}},7240:e=>{var t={};e.exports=function(e,n){var l=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(n)}},2940:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},9516:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7020:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var l="";n.supports&&(l+="@supports (".concat(n.supports,") {")),n.media&&(l+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(l+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),l+=n.css,a&&(l+="}"),n.media&&(l+="}"),n.supports&&(l+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(l+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(l,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},9296:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);
//# sourceMappingURL=716.56cb1537bef08cda05fc.js.map?v=56cb1537bef08cda05fc