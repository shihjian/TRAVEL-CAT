(function(e){function t(t){for(var a,r,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)r=u[l],c[r]&&d.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-11eb2e9b":"22934730","chunk-2d0aa5f4":"b03daecb","chunk-2d0ab565":"45e272f0","chunk-2d0aed75":"9bc82a75","chunk-2d20778a":"707947ff","chunk-2d216028":"4daa2634","chunk-2d238406":"4317a0ad","chunk-4b7f29c6":"af4b062c","chunk-4b7fef8e":"ac508e37","chunk-4ba7e90a":"7a8baa1a","chunk-5d11cb86":"53503105","chunk-698dddee":"21c6b3bc","chunk-76111afb":"a1bcf597"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5d11cb86":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-11eb2e9b":"31d6cfe0","chunk-2d0aa5f4":"31d6cfe0","chunk-2d0ab565":"31d6cfe0","chunk-2d0aed75":"31d6cfe0","chunk-2d20778a":"31d6cfe0","chunk-2d216028":"31d6cfe0","chunk-2d238406":"31d6cfe0","chunk-4b7f29c6":"31d6cfe0","chunk-4b7fef8e":"31d6cfe0","chunk-4ba7e90a":"31d6cfe0","chunk-5d11cb86":"670a7451","chunk-698dddee":"31d6cfe0","chunk-76111afb":"31d6cfe0"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===a||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){r[e]=0}));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=c[e]=[t,n]});t.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e),s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}c[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/TRAVEL-CAT/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4a2f":function(e,t,n){"use strict";var a=n("dfbe"),r=n.n(a);r.a},"56a6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-alert"},e._l(e.messages,function(t,a){return n("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+t.status},[e._v("\n    "+e._s(t.message)+"\n    "),n("button",{staticClass:"close d-flex align-items-end",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){e.removeMessage(a)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])}),0)},r=[],c=(n("ac6a"),{name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(e,t){var n=Math.floor(new Date/1e3);this.messages.push({message:e,status:t,timestamp:n}),this.removeMessageWithTiming(n)},removeMessage:function(e){this.messages.splice(e,1)},removeMessageWithTiming:function(e){var t=this;setTimeout(function(){t.messages.forEach(function(n,a){n.timestamp===e&&t.messages.splice(a,1)})},5e3)}},created:function(){var e=this;e.$bus.$on("message:push",function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";e.updateMessage(t,n)})}}),o=c,u=(n("4a2f"),n("2877")),i=Object(u["a"])(o,a,r,!1,null,null,null);i.options.__file="AlertMessage.vue";t["a"]=i.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("2f62"),c=n("bc3a"),o=n.n(c),u=n("a7fe"),i=n.n(u),s=n("9062"),l=n.n(s),d=(n("e40d"),n("4989"),n("7bb1")),f=n("427f"),h=n.n(f),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},m=[],g={name:"App"},b=g,v=(n("5c0b"),n("2877")),k=Object(v["a"])(b,p,m,!1,null,null,null);k.options.__file="App.vue";var _=k.exports,y=n("8c4f");a["a"].use(y["a"]);var C=new y["a"]({routes:[{path:"*",redirect:"/"},{path:"/",name:"home",component:function(){return n.e("chunk-11eb2e9b").then(n.bind(null,"bb51"))},children:[{path:"/",name:"Allproduct",component:function(){return n.e("chunk-2d216028").then(n.bind(null,"c148"))}},{path:"/categories",name:"Categories",component:function(){return n.e("chunk-698dddee").then(n.bind(null,"58c2"))}},{path:"itemdata/:itemId",name:"Itemdata",component:function(){return n.e("chunk-4ba7e90a").then(n.bind(null,"97d8"))}}]},{path:"/customer_checkout",name:"CustomerCheckout",component:function(){return n.e("chunk-2d20778a").then(n.bind(null,"a159"))},children:[{path:"",name:"OrderInfo",component:function(){return n.e("chunk-76111afb").then(n.bind(null,"ad40"))}},{path:"payment/:orderId",name:"Payment",component:function(){return n.e("chunk-2d0aa5f4").then(n.bind(null,"1175"))}}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-5d11cb86").then(n.bind(null,"a55b"))}},{path:"/admin",name:"Dashboard",component:function(){return n.e("chunk-2d0aed75").then(n.bind(null,"0c7c"))},children:[{path:"products",name:"Products",component:function(){return n.e("chunk-4b7fef8e").then(n.bind(null,"e6dc"))},meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:function(){return n.e("chunk-2d0ab565").then(n.bind(null,"159d"))},meta:{requiresAuth:!0}},{path:"coupons",name:"Coupons",component:function(){return n.e("chunk-4b7f29c6").then(n.bind(null,"f329"))},meta:{requiresAuth:!0}}]},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-2d0aed75").then(n.bind(null,"0c7c"))},children:[{path:"customer_orders",name:"CustomerOrders",component:function(){return n.e("chunk-2d238406").then(n.bind(null,"ff1a"))}}]}]});a["a"].use(r["a"]);var T=new r["a"].Store({strict:!0,state:{isLoading:!1,products:[],searchText:""},actions:{updateLoading:function(e,t){e.commit("LOADING",t)},getProducts:function(e){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/products/all");e.commit("LOADING",!0),o.a.get(t).then(function(t){e.commit("PRODUCTS",t.data.products),e.commit("LOADING",!1),console.log("取得遠端",t.data)})},changeText:function(e,t){e.commit("SEARCHTEXT",t)}},mutations:{LOADING:function(e,t){e.isLoading=t},PRODUCTS:function(e,t){e.products=t},SEARCHTEXT:function(e,t){e.searchText=t}},getters:{text:function(e){return e.searchText},products:function(e){return e.products}}});a["a"].prototype.$bus=new a["a"];var w=n("56a6"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item",class:{disabled:!e.pageData.has_pre}},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(t){t.preventDefault(),e.changePage(e.pageData.current_page-1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("«")]),n("span",{staticClass:"sr-only"},[e._v("Previous")])])]),e._l(e.pageData.total_pages,function(t){return n("li",{key:t,staticClass:"page-item",class:{active:e.pageData.current_page===t}},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(n){n.preventDefault(),e.changePage(t)}}},[e._v(e._s(t))])])}),n("li",{staticClass:"page-item",class:{disabled:!e.pageData.has_next}},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(t){t.preventDefault(),e.changePage(e.pageData.current_page+1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("»")]),n("span",{staticClass:"sr-only"},[e._v("Next")])])])],2)])])},x=[],O={name:"pagination",props:{pageData:{type:Object,default:{}}},methods:{changePage:function(e){this.$emit("changePage",e)}}},A=O,D=Object(v["a"])(A,P,x,!1,null,null,null);D.options.__file="Pagination.vue";var E=D.exports,j=(n("a481"),n("c5f6"),function(e){var t=Number(e);return"$".concat(t.toFixed(0).replace(/./g,function(e,t,n){var a=t&&"."!==e&&(n.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e;return a}))}),M=function(e){var t=new Date(1e3*e),n=t.getFullYear(),a=t.getMonth()+1,r=t.getDate();return n+"/"+a+"/"+r};a["a"].config.productionTip=!1,a["a"].use(r["a"]),o.a.defaults.withCredentials=!0,a["a"].use(i.a,o.a),a["a"].use(d["a"]),d["a"].Validator.localize("zg_TW",h.a),a["a"].component("Loading",l.a),a["a"].component("AlertMessage",w["a"]),a["a"].component("pagination",E),a["a"].filter("currency",j),a["a"].filter("date",M),new a["a"]({router:C,store:T,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},dfbe:function(e,t,n){}});
//# sourceMappingURL=app.8dee7f2a.js.map