var _JUPYTERLAB;(()=>{"use strict";var e,r,t,a,l,o,n,d,u,i,f,s,p,c,b,h,m,v,y,j,g={4392:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(696),t.e(512),t.e(52),t.e(804),t.e(352),t.e(971)]).then((()=>()=>t(8971))),"./extension":()=>Promise.all([t.e(696),t.e(512),t.e(52),t.e(804),t.e(352),t.e(971)]).then((()=>()=>t(8971)))},l=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",l=t.S[a];if(l&&l!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>l,init:()=>o})}},w={};function P(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,P),t.loaded=!0,t.exports}P.m=g,P.c=w,P.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return P.d(r,{a:r}),r},P.d=(e,r)=>{for(var t in r)P.o(r,t)&&!P.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((r,t)=>(P.f[t](e,r),r)),[])),P.u=e=>e+"."+{52:"5b4100f01650edd49f4f",224:"8e4b125226225aa8fca7",240:"cee33c69c537b095a6b9",292:"065b5526d8893b656a5a",300:"c9dcd21a5350e20a9a89",336:"02b3710b415b0c4d4a26",352:"8ecd91365ea05267a2bb",377:"71a201d7546b449727d0",476:"12f9bae1b00534d50e1f",512:"258556cb10eba95e6345",606:"2f081ce6caeb08d67905",624:"f7b28e1681959f765f79",680:"7f0c7347f5f1df8c87d3",696:"07f794c9d17bca9906b4",716:"56cb1537bef08cda05fc",795:"05babca2aa097e907ac0",804:"052abcb77733cdc1ef08",828:"ebc4bb56d0f898040db8",892:"7f9ef12707e708bbd668",954:"53ae62a0112a5799d5c4",971:"2bac2e149450f52a7569"}[e]+".js?v="+{52:"5b4100f01650edd49f4f",224:"8e4b125226225aa8fca7",240:"cee33c69c537b095a6b9",292:"065b5526d8893b656a5a",300:"c9dcd21a5350e20a9a89",336:"02b3710b415b0c4d4a26",352:"8ecd91365ea05267a2bb",377:"71a201d7546b449727d0",476:"12f9bae1b00534d50e1f",512:"258556cb10eba95e6345",606:"2f081ce6caeb08d67905",624:"f7b28e1681959f765f79",680:"7f0c7347f5f1df8c87d3",696:"07f794c9d17bca9906b4",716:"56cb1537bef08cda05fc",795:"05babca2aa097e907ac0",804:"052abcb77733cdc1ef08",828:"ebc4bb56d0f898040db8",892:"7f9ef12707e708bbd668",954:"53ae62a0112a5799d5c4",971:"2bac2e149450f52a7569"}[e],P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyter-lsp/jupyterlab-lsp:",P.l=(t,a,l,o)=>{if(e[t])e[t].push(a);else{var n,d;if(void 0!==l)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var f=u[i];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+l){n=f;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,P.nc&&n.setAttribute("nonce",P.nc),n.setAttribute("data-webpack",r+l),n.src=t),e[t]=[a];var s=(r,a)=>{n.onerror=n.onload=null,clearTimeout(p);var l=e[t];if(delete e[t],n.parentNode&&n.parentNode.removeChild(n),l&&l.forEach((e=>e(a))),r)return r(a)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=s.bind(null,n.onerror),n.onload=s.bind(null,n.onload),d&&document.head.appendChild(n)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{P.S={};var e={},r={};P.I=(t,a)=>{a||(a=[]);var l=r[t];if(l||(l=r[t]={}),!(a.indexOf(l)>=0)){if(a.push(l),e[t])return e[t];P.o(P.S,t)||(P.S[t]={});var o=P.S[t],n="@jupyter-lsp/jupyterlab-lsp",d=(e,r,t,a)=>{var l=o[e]=o[e]||{},d=l[r];(!d||!d.loaded&&(!a!=!d.eager?a:n>d.from))&&(l[r]={get:t,from:n,eager:!!a})},u=[];return"default"===t&&(d("@jupyter-lsp/code-jumpers","2.1.0",(()=>Promise.all([P.e(52),P.e(352),P.e(240)]).then((()=>()=>P(5240))))),d("@jupyter-lsp/completion-theme","4.1.0",(()=>Promise.all([P.e(512),P.e(52),P.e(804),P.e(716)]).then((()=>()=>P(716))))),d("@jupyter-lsp/jupyterlab-lsp","5.1.0",(()=>Promise.all([P.e(696),P.e(512),P.e(52),P.e(804),P.e(352),P.e(971)]).then((()=>()=>P(8971))))),d("@jupyter-lsp/theme-material","3.0.0",(()=>Promise.all([P.e(892),P.e(224)]).then((()=>()=>P(8224))))),d("@jupyter-lsp/theme-vscode","3.0.0",(()=>Promise.all([P.e(892),P.e(828),P.e(795)]).then((()=>()=>P(9828))))),d("@rjsf/utils","5.17.1",(()=>Promise.all([P.e(377),P.e(476),P.e(512)]).then((()=>()=>P(8377))))),d("@rjsf/validator-ajv8","5.17.0",(()=>Promise.all([P.e(476),P.e(292),P.e(300)]).then((()=>()=>P(7911))))),d("lodash.mergewith","4.6.2",(()=>P.e(680).then((()=>()=>P(3680)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;P.g.importScripts&&(e=P.g.location+"");var r=P.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),P.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var l=e[a],o=(typeof l)[0];if(a>=r.length)return"u"==o;var n=r[a],d=(typeof n)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&l!=n)return l<n;a++}},l=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(d=e[o]))[0]?"-":(a>0?".":"")+(a=2,d);return t}var n=[];for(o=1;o<e.length;o++){var d=e[o];n.push(0===d?"not("+u()+")":1===d?"("+u()+" || "+u()+")":2===d?n.pop()+" "+n.pop():l(d))}return u();function u(){return n.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],l=a<0;l&&(a=-a-1);for(var n=0,d=1,u=!0;;d++,n++){var i,f,s=d<e.length?(typeof e[d])[0]:"";if(n>=r.length||"o"==(f=(typeof(i=r[n]))[0]))return!u||("u"==s?d>a&&!l:""==s!=l);if("u"==f){if(!u||"u"!=s)return!1}else if(u)if(s==f)if(d<=a){if(i!=e[d])return!1}else{if(l?i>e[d]:i<e[d])return!1;i!=e[d]&&(u=!1)}else if("s"!=s&&"n"!=s){if(l||d<=a)return!1;u=!1,d--}else{if(d<=a||f<s!=l)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,d--)}}var p=[],c=p.pop.bind(p);for(n=1;n<e.length;n++){var b=e[n];p.push(1==b?c()|c():2==b?c()&c():b?o(b,r):!c())}return!!c()},n=(e,r)=>{var t=P.S[e];if(!t||!P.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},d=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},u=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+l(a)+")",i=(e,r,t,a)=>{var l=d(e,t);return o(a,l)||s(u(e,t,l,a)),p(e[t][l])},f=(e,r,t)=>{var l=e[r];return(r=Object.keys(l).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&l[r]},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),b=(c=e=>function(r,t,a,l){var o=P.I(r);return o&&o.then?o.then(e.bind(e,r,P.S[r],t,a,l)):e(r,P.S[r],t,a,l)})(((e,r,t,a)=>(n(e,t),i(r,0,t,a)))),h=c(((e,r,t,a,l)=>{var o=r&&P.o(r,t)&&f(r,t,a);return o?p(o):l()})),m={},v={6512:()=>b("default","react",[1,18,2,0]),6052:()=>b("default","@jupyterlab/apputils",[1,4,2,2]),2464:()=>b("default","@lumino/coreutils",[1,2,0,0]),7768:()=>b("default","@jupyterlab/ui-components",[1,4,1,2]),7852:()=>b("default","@jupyterlab/translation",[1,4,1,2]),4352:()=>b("default","@codemirror/view",[1,6,9,6]),1188:()=>b("default","@jupyterlab/coreutils",[1,6,1,2]),1376:()=>h("default","@jupyter-lsp/theme-vscode",[2,3,0,0],(()=>Promise.all([P.e(892),P.e(828)]).then((()=>()=>P(9828))))),1512:()=>b("default","@jupyterlab/codemirror",[1,4,1,2]),1560:()=>b("default","@codemirror/state",[1,6,2,0]),1848:()=>b("default","@jupyterlab/logconsole",[1,4,1,2]),2252:()=>h("default","@jupyter-lsp/theme-material",[2,3,0,0],(()=>Promise.all([P.e(892),P.e(606)]).then((()=>()=>P(8224))))),2292:()=>b("default","@lumino/signaling",[1,2,0,0]),2941:()=>b("default","@jupyterlab/fileeditor",[1,4,1,2]),3516:()=>h("default","@jupyter-lsp/code-jumpers",[2,2,1,0],(()=>P.e(624).then((()=>()=>P(5240))))),3760:()=>b("default","@lumino/widgets",[1,2,3,1,,"alpha",0]),3924:()=>b("default","@lumino/polling",[1,2,0,0]),3976:()=>b("default","@lezer/highlight",[1,1,0,0]),4028:()=>b("default","@jupyterlab/toc",[1,6,1,2]),4192:()=>b("default","@jupyterlab/statusbar",[1,4,1,2]),4344:()=>b("default","@jupyterlab/application",[1,4,1,2]),4388:()=>b("default","@jupyterlab/rendermime",[1,4,1,2]),5024:()=>b("default","@jupyterlab/docmanager",[1,4,1,2]),5384:()=>h("default","@jupyter-lsp/completion-theme",[2,4,1,0],(()=>P.e(336).then((()=>()=>P(716))))),5672:()=>b("default","@jupyterlab/settingregistry",[1,4,1,2]),6068:()=>b("default","@jupyterlab/codeeditor",[1,4,1,2]),6116:()=>h("default","@rjsf/validator-ajv8",[1,5,12,1],(()=>Promise.all([P.e(476),P.e(292),P.e(300)]).then((()=>()=>P(7911))))),6572:()=>b("default","@jupyterlab/lsp",[1,4,1,2]),6620:()=>b("default","@lumino/algorithm",[1,2,0,0]),6724:()=>b("default","@jupyterlab/tooltip",[1,4,1,2]),6812:()=>b("default","@jupyterlab/completer",[1,4,1,2]),6876:()=>h("default","lodash.mergewith",[1,4,6,1],(()=>P.e(680).then((()=>()=>P(3680))))),7688:()=>b("default","@jupyterlab/notebook",[1,4,1,2]),7892:()=>h("default","@jupyter-lsp/completion-theme",[1,4,0,0],(()=>Promise.all([P.e(512),P.e(52),P.e(804),P.e(954)]).then((()=>()=>P(716))))),4300:()=>h("default","@rjsf/utils",[1,5,16],(()=>Promise.all([P.e(377),P.e(512)]).then((()=>()=>P(8377)))))},y={52:[6052],300:[4300],352:[4352],512:[6512],804:[2464,7768,7852],892:[7892],971:[1188,1376,1512,1560,1848,2252,2292,2941,3516,3760,3924,3976,4028,4192,4344,4388,5024,5384,5672,6068,6116,6572,6620,6724,6812,6876,7688]},j={},P.f.consumes=(e,r)=>{P.o(y,e)&&y[e].forEach((e=>{if(P.o(m,e))return r.push(m[e]);if(!j[e]){var t=r=>{m[e]=0,P.m[e]=t=>{delete P.c[e],t.exports=r()}};j[e]=!0;var a=r=>{delete m[e],P.m[e]=t=>{throw delete P.c[e],r}};try{var l=v[e]();l.then?r.push(m[e]=l.then(t).catch(a)):t(l)}catch(e){a(e)}}}))},(()=>{var e={952:0};P.f.j=(r,t)=>{var a=P.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^((35|5|51|89)2|300|804)$/.test(r))e[r]=0;else{var l=new Promise(((t,l)=>a=e[r]=[t,l]));t.push(a[2]=l);var o=P.p+P.u(r),n=new Error;P.l(o,(t=>{if(P.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var l=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading chunk "+r+" failed.\n("+l+": "+o+")",n.name="ChunkLoadError",n.type=l,n.request=o,a[1](n)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,l,[o,n,d]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in n)P.o(n,a)&&(P.m[a]=n[a]);d&&d(P)}for(r&&r(t);u<o.length;u++)l=o[u],P.o(e,l)&&e[l]&&e[l][0](),e[l]=0},t=self.webpackChunk_jupyter_lsp_jupyterlab_lsp=self.webpackChunk_jupyter_lsp_jupyterlab_lsp||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),P.nc=void 0;var S=P(4392);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyter-lsp/jupyterlab-lsp"]=S})();
//# sourceMappingURL=remoteEntry.c23488d97d201859645c.js.map