(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa5f4"],{1175:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"form-row text-center"},[t._m(0),r("div",{staticClass:"col-12 col-sm"},[!1===t.order.is_paid?r("div",{staticClass:"alert alert-success alert-rounded",attrs:{role:"alert"}},[t._v("\n                2. 金流付款\n            ")]):t._e(),!0===t.order.is_paid?r("div",{staticClass:"alert alert-secondary alert-rounded",attrs:{role:"alert"}},[t._v("\n                2. 金流付款\n            ")]):t._e()]),r("div",{staticClass:"col-12 col-sm"},[!1===t.order.is_paid?r("div",{staticClass:"alert alert-secondary alert-rounded",attrs:{role:"alert"}},[t._v("\n                3. 完成！\n            ")]):t._e(),!0===t.order.is_paid?r("div",{staticClass:"alert alert-success alert-rounded",attrs:{role:"alert"}},[t._v("\n                3. 完成！\n            ")]):t._e()])]),r("div",{staticClass:"my-5 row justify-content-center"},[r("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[r("p",{staticClass:"h5 text-center"},[t._v("訂單明細")]),r("table",{staticClass:"table"},[t._m(1),r("tbody",t._l(t.order.products,function(e){return r("tr",{key:e.id},[r("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),r("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.final_total)))])])}),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.order.total)))])])])]),r("p",{staticClass:"h5 text-center"},[t._v("訂購人資料")]),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"100"}},[t._v("Email")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",[t._v("付款狀態")]),r("td",[t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])]),!0===t.order.is_paid?r("h5",{staticClass:"h5 text-center mt-5 mb-5"},[t._v("感謝您的預訂，祝您旅途愉快！")]):t._e(),!0===t.order.is_paid?r("div",{staticStyle:{"text-align":"right"}},[r("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"/"}},[t._v("返回首頁")])],1):t._e()])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-sm"},[r("div",{staticClass:"alert alert-secondary alert-rounded",attrs:{role:"alert"}},[t._v("\n                1. 輸入訂單資料\n            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("品名")]),r("th",[t._v("數量")]),r("th",[t._v("單價")])])}],o=(r("cadf"),r("551c"),r("097d"),r("1157")),i=r.n(o),c={data:function(){return{order:{user:{}},orderId:"",isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{showCart:function(){i()("#collapseOne").collapse("toggle")},createOrder:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/order"),r=this,s=r.form;this.$validator.validate().then(function(a){a?t.$http.post(e,{data:s}).then(function(t){console.log("訂單已建立",t.data),r.isLoading=!1,t.data.success&&r.$router.push("/customer_checkout/".concat(t.data.orderId))}):console.log("表單不完整")})},getOrder:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(e).then(function(e){console.log(e),t.order=e.data.order,t.isLoading=!1})},payOrder:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/pay/").concat(t.orderId);t.isLoading=!0,this.$http.post(e).then(function(e){console.log(e.data),e.data.success&&t.getOrder(),t.isLoading=!1})},backtoHomePage:function(){this.$router.push("/")}},created:function(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}},d=c,n=r("2877"),_=Object(n["a"])(d,s,a,!1,null,null,null);_.options.__file="Payment.vue";e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0aa5f4.25dc3191.js.map