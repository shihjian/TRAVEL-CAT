(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76111afb"],{ad40:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),a("div",{staticClass:"row justify-content-center mt-5"},[a("div",{staticClass:"col-md-8"},[t._m(1),0!=t.cartProducts.length?a("table",{staticClass:"table mt-5 ml-auto mr-auto"},[t._m(2),a("tbody",t._l(t.cartProducts,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){t.removeCartItem(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),a("td",[t._v("\n                        "+t._s(e.product.title)+"\n                        "),e.coupon?a("div",{staticClass:"text-success mt-1",staticStyle:{"font-size":"12px"}},[t._v(" 已套用優惠券")]):t._e()]),a("td",{staticClass:"text-center"},[t._v(t._s(e.qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.product.price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))])])}),0),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("總計")]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cartTotal)))])]),t.cartFinalPrice!==t.cartTotal?a("tr",[a("td",{staticClass:"text-right text-primary",attrs:{colspan:"4"}},[t._v("折扣價")]),a("td",{staticClass:"text-right text-primary"},[t._v(t._s(t._f("currency")(t.cartFinalPrice)))])]):t._e()])]):t._e(),0==t.cartProducts.length?a("div",{staticClass:"text-center h6 mt-4 text-secondary"},[t._v("\n            目前尚未選購商品唷！\n        ")]):t._e(),a("div",{staticClass:"ml-auto mr-auto"},[0!=t.cartProducts.length?a("div",{staticClass:"input-group ml-auto mr-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼","aria-label":"Recipient's username","aria-describedby":"basic-addon2"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("套用優惠碼")])])]):t._e(),a("p",{staticClass:"text-danger"},[t._v(t._s(t.findCoupon))])]),t._m(3),a("div",{staticClass:"my-5 justify-content-center"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("姓名不能留空。")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("tel")},attrs:{type:"tel",name:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("tel")?a("span",{staticClass:"text-danger"},[t._v("電話不能留空。")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"address",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("地址不能留空。")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usercontent"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"usercontent",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._m(4)])])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-row text-center"},[a("div",{staticClass:"col-12 col-sm"},[a("div",{staticClass:"alert alert-success alert-rounded",attrs:{role:"alert"}},[t._v("\n                1. 輸入訂單資料\n            ")])]),a("div",{staticClass:"col-12 col-sm"},[a("div",{staticClass:"alert alert-light alert-rounded",attrs:{role:"alert"}},[t._v("\n                2. 金流付款\n            ")])]),a("div",{staticClass:"col-12 col-sm"},[a("div",{staticClass:"alert alert-light alert-rounded",attrs:{role:"alert"}},[t._v("\n                3. 完成！\n            ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mt-5 mb-4 border-0"},[a("div",{staticClass:"card-header"},[a("h4",{staticClass:"h4 mb-0 text-center"},[t._v("訂單資訊")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{scope:"col",width:"80"}}),a("th",{attrs:{scope:"col"}},[t._v("品名")]),a("th",{staticClass:"text-center",attrs:{scope:"col",width:"100"}},[t._v("數量")]),a("th",{staticClass:"text-center",attrs:{scope:"col",width:"100"}},[t._v("單價")]),a("th",{staticClass:"text-center",attrs:{scope:"col",width:"100"}},[t._v("小計")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mt-5 mb-4 border-0"},[a("div",{staticClass:"card-header"},[a("h4",{staticClass:"h4 mb-0 text-center"},[t._v("訂購人資訊")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-secondary"},[t._v("送出訂單")])])}],o=a("ade3"),i=(a("1157"),{data:function(){var t;return t={cartProducts:[],cartTotalPrice:0,cartFinalPrice:0,isLoading:!1,status:{loadingItem:""},coupon_code:"",findCoupon:"",order:{user:{}},orderId:""},Object(o["a"])(t,"isLoading",!1),Object(o["a"])(t,"form",{user:{name:"",email:"",tel:"",address:""},message:""}),t},methods:{getCart:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/cart"),a=this;a.status.loadingItem=t,this.$http.get(e).then(function(t){a.cartProducts=t.data.data.carts,a.cartFinalPrice=t.data.data.final_total,a.status.loadingItem="",console.log(a.cartProducts)})},removeCartItem:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/cart/").concat(t),a=this;a.isLoading=!0,this.$http.delete(e).then(function(){a.isLoading=!1,a.getCart()})},addCouponCode:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/coupon"),e=this,a={code:e.coupon_code};e.isLoading=!0,this.$http.post(t,{data:a}).then(function(t){console.log(t.data),e.isLoading=!1,e.getCart(),t.data.success?e.findCoupon="":e.findCoupon=t.data.message})},createOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/order"),a=this,s=a.form;this.$validator.validate().then(function(r){r?t.$http.post(e,{data:s}).then(function(t){console.log("訂單已建立",t.data),a.isLoading=!1,t.data.success&&a.$router.push("/customer_checkout/payment/".concat(t.data.orderId))}):console.log("表單不完整")})},getOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(e).then(function(e){console.log(e),t.order=e.data.order,t.isLoading=!1})}},computed:{cartTotal:function(){var t=this;t.cartTotalPrice=0;for(var e=0;e<t.cartProducts.length;e++)t.cartTotalPrice+=t.cartProducts[e].total;return t.cartTotalPrice}},created:function(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getCart(),this.getOrder()}}),c=i,n=a("2877"),l=Object(n["a"])(c,s,r,!1,null,null,null);l.options.__file="OrderInfo.vue";e["default"]=l.exports},ade3:function(t,e,a){"use strict";function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",function(){return s})}}]);
//# sourceMappingURL=chunk-76111afb.a1bcf597.js.map