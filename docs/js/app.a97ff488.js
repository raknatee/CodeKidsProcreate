(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-03b17ce4":"30b9b320","chunk-2db2ec21":"bb57c76f","chunk-45cdd889":"74e06826","chunk-8801785e":"74a744d1","chunk-c4a4c2bc":"b26e0ac4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-03b17ce4":1,"chunk-2db2ec21":1,"chunk-45cdd889":1,"chunk-8801785e":1,"chunk-c4a4c2bc":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-03b17ce4":"87da1695","chunk-2db2ec21":"87da1695","chunk-45cdd889":"f287588c","chunk-8801785e":"87da1695","chunk-c4a4c2bc":"ec930a53"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0531":function(e,t,n){},"068f":function(e,t,n){"use strict";n("a01e")},"14a4":function(e,t,n){},a01e:function(e,t,n){},a955:function(e,t,n){"use strict";var r=n("7a23");function c(e,t,n,c,o,a){var u=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["d"])(u,{to:e.to},{default:Object(r["B"])((function(){return[Object(r["w"])(e.$slots,"default",{},void 0,!0)]})),_:3},8,["to"])}var o=Object(r["i"])({props:{to:String},name:"BasicButton"}),a=(n("e527"),n("6b0d")),u=n.n(a);const i=u()(o,[["render",c],["__scopeId","data-v-047b9b5f"]]);t["a"]=i},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,o,a){var u=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(u)}var o=Object(r["i"])({setup:function(){document.title="Procreate"}}),a=(n("f4cd"),n("6b0d")),u=n.n(a);const i=u()(o,[["render",c]]);var s=i,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),window.location.reload(!0)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var d=n("6c02"),f=function(e){return Object(r["t"])("data-v-86a4f9c2"),e=e(),Object(r["r"])(),e},b={class:"home"},p=f((function(){return Object(r["f"])("img",{src:"/slide/0.JPG",class:"img-slide",alt:""},null,-1)})),h=f((function(){return Object(r["f"])("h1",null,"Get Started with Procreate",-1)})),v={class:"title-grid"},g=Object(r["g"])(" 1. Create New Canvas "),m=Object(r["g"])(" 2. Tools ");function j(e,t,n,c,o,a){var u=Object(r["x"])("BasicButton");return Object(r["q"])(),Object(r["e"])("div",b,[p,h,Object(r["f"])("div",v,[Object(r["h"])(u,{to:"/create-new-canvas"},{default:Object(r["B"])((function(){return[g]})),_:1}),Object(r["h"])(u,{to:"/tools"},{default:Object(r["B"])((function(){return[m]})),_:1})])])}var O=n("a955"),k=Object(r["i"])({name:"Home",components:{BasicButton:O["a"]}});n("068f");const y=u()(k,[["render",j],["__scopeId","data-v-86a4f9c2"]]);var w=y,_=[{path:"/",name:"Home",component:w},{path:"/create-new-canvas",name:"create-new-canvas",component:function(){return n.e("chunk-45cdd889").then(n.bind(null,"a19b"))}},{path:"/tools",component:function(){return n.e("chunk-c4a4c2bc").then(n.bind(null,"ce42"))}},{path:"/opacity",component:function(){return n.e("chunk-03b17ce4").then(n.bind(null,"f75f"))}},{path:"/brush-size",component:function(){return n.e("chunk-8801785e").then(n.bind(null,"47f8"))}},{path:"/actions",component:function(){return n.e("chunk-2db2ec21").then(n.bind(null,"8a95"))}}],B=Object(d["a"])({history:Object(d["b"])(),routes:_}),P=B;Object(r["c"])(s).use(P).mount("#app")},e527:function(e,t,n){"use strict";n("14a4")},f4cd:function(e,t,n){"use strict";n("0531")}});
//# sourceMappingURL=app.a97ff488.js.map