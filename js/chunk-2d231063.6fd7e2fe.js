(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d231063"],{ef7c:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"bg-light pb-5"},[s("div",{staticClass:"container"},[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("本州")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"list-group sticky-top"},[s("router-link",{staticClass:"list-group-item list-group-item-action active",attrs:{to:"/honshu","data-toggle":"list"}},[s("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("本州")]),s("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/hokkaido","data-toggle":"list"}},[s("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("北海道")]),s("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/shikoku","data-toggle":"list"}},[s("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("四國")]),s("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/kyushu"}},[s("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("九州")]),s("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/okinawa"}},[s("i",{staticClass:"fas fa-torii-gate mr-2"}),t._v("沖繩")])],1)]),s("div",{staticClass:"col-md-9"},[s("HonshuCard")],1)])])])],1)},o=[],c=(s("1157"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("AlertMessage"),s("div",{staticClass:"row"},t._l(t.honshuProducts,function(a){return s("div",{key:a.id,staticClass:"col-md-6 mb-4"},[s("div",{staticClass:"card border-0 shadow-sm h-100 animated"},[s("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),s("div",{staticClass:"card-body"},[s("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),s("h5",{staticClass:"card-title"},[s("i",{staticClass:"fas fa-paw"}),s("a",{staticClass:"h5 text-dark",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.getProduct(a.id)}}},[t._v(t._s(a.title))])]),s("p",{staticClass:"card-text"},[t._v(t._s(a.content))]),s("div",{staticClass:"text-right align-items-baseline"},[a.price?t._e():s("div",{staticClass:"h5 text-secondary"},[t._v("NT$ "+t._s(a.origin_price))]),a.price?s("del",{staticClass:"h6 text-secondary"},[t._v("NT$ "+t._s(a.origin_price))]):t._e(),a.price?s("div",{staticClass:"h5"},[t._v("NT$ "+t._s(a.price))]):t._e()])]),s("div",{staticClass:"card-footer d-flex bg-dark"},[s("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(s){t.getProduct(a.id)}}},[t.status.loadingItem===a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                        查看更多\n                    ")]),s("button",{staticClass:"btn btn-outline-primary btn-sm ml-auto",attrs:{type:"button"},on:{click:function(s){t.addtoCart(a.id)}}},[t.status.loadingItem===a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                        加到購物車\n                    ")])])])])}),0)],1)}),e=[],n={data:function(){return{honshuProducts:[],product:{},status:{loadingItem:""},isLoading:!1}},methods:{getProducts:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/products/all"),a=this;a.isLoading=!0,this.$http.get(t).then(function(t){console.log(t.data),a.isLoading=!1,a.honshuProducts=t.data.products.filter(function(t){return"本州"==t.category}),console.log(a.honshuProducts)})},getProduct:function(t){var a="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/product/").concat(t),s=this;s.status.loadingItem=t,this.$http.get(a).then(function(t){console.log(t.data),s.$router.push("/itemdata/".concat(t.data.product.id)),s.status.loadingItem=""})},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/cart"),i=this;i.status.loadingItem=t;var o={product_id:t,qty:a};this.$http.post(s,{data:o}).then(function(t){console.log(t.data),i.status.loadingItem="",i.$bus.$emit("message:push","已新增至購物車","success")})}},created:function(){this.getProducts()}},r=n,l=s("2877"),d=Object(l["a"])(r,c,e,!1,null,null,null);d.options.__file="HonshuCard.vue";var u=d.exports,_={data:function(){return{isLoading:!1}},components:{HonshuCard:u}},g=_,p=Object(l["a"])(g,i,o,!1,null,null,null);p.options.__file="Honshu.vue";a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d231063.6fd7e2fe.js.map