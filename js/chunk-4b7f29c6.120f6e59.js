(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b7f29c6"],{ade3:function(t,e,o){"use strict";function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.d(e,"a",function(){return a})},be94:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var a=o("ade3");function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){Object(a["a"])(t,e,o[e])})}return t}},f329:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),o("div",{staticClass:"text-right mt-4"},[o("button",{staticClass:"btn btn-primary",on:{click:function(e){t.openModal(!0)}}},[t._v("建立新的優惠券")])]),o("table",{staticClass:"table mt-4"},[t._m(0),o("tbody",t._l(t.coupons,function(e){return o("tr",{key:e.id},[o("td",[t._v(t._s(e.title))]),o("td",[t._v(t._s(e.percent)+"%")]),o("td",[t._v(t._s(e.date))]),o("td",[e.is_enabled?o("span",{staticClass:"text-success"},[t._v("啟用")]):o("span",[t._v("未啟用")])]),o("td",{staticClass:"d-flex"},[o("button",{staticClass:"btn btn-outline-primary btn-sm mr-1",on:{click:function(o){t.openModal(!1,e)}}},[t._v("編輯")]),o("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(o){t.delModal(e)}}},[t._v("刪除")])])])}),0)]),o("pagination",{staticClass:"d-flex justify-content-center mb-4",attrs:{"page-data":t.pagination},on:{changePage:t.getCoupons}}),o("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(1),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("名稱")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control mt-1",attrs:{type:"text",id:"title",placeholder:"請輸入優惠券名稱"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"code"}},[t._v("優惠碼")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control mt-1",attrs:{type:"text",id:"code",placeholder:"請輸入優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),o("label",{attrs:{for:"percent"}},[t._v("優惠百分比")]),o("div",{staticClass:"input-group mb-3"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control mt-1",attrs:{id:"percent",type:"text",placeholder:"請輸入百分比","aria-label":"Username","aria-describedby":"basic-addon1"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}}),t._m(2)]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"date"}},[t._v("到期日")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.date,expression:"tempCoupon.date"}],staticClass:"form-control mt-1",attrs:{type:"date",id:"date"},domProps:{value:t.tempCoupon.date},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"date",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var o=t.tempCoupon.is_enabled,a=e.target,n=a.checked?1:0;if(Array.isArray(o)){var s=null,i=t._i(o,s);a.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",o.concat([s])):i>-1&&t.$set(t.tempCoupon,"is_enabled",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",n)}}}),o("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                        是否啟用\n                        ")])])])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v("確認")])])])])]),o("div",{staticClass:"modal fade",attrs:{id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content border-0"},[t._m(3),o("div",{staticClass:"modal-body"},[t._v("\n                    是否刪除 "),o("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" (刪除後將無法恢復)。\n                ")]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteCoupon}},[t._v("確認刪除")])])])])])],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("名稱")]),o("th",{attrs:{scope:"col",width:"160"}},[t._v("折扣百分比")]),o("th",{attrs:{scope:"col",width:"160"}},[t._v("到期日")]),o("th",{attrs:{scope:"col",width:"160"}},[t._v("是否啟用")]),o("th",{attrs:{scope:"col",width:"160"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("新增優惠券")]),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-group-prepend"},[o("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("%")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header bg-danger text-white"},[o("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[o("span",[t._v("刪除優惠券")])]),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=o("be94"),i=o("1157"),l=o.n(i),c={data:function(){return{coupons:[],tempCoupon:{},pagination:{},isNew:!1,isLoading:!1}},methods:{getCoupons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/admin/coupons?page=").concat(t),o=this;o.isLoading=!0,this.$http.get(e).then(function(t){console.log(t.data),o.isLoading=!1,o.coupons=t.data.coupons,o.pagination=t.data.pagination})},openModal:function(t,e){t?(this.tempCoupon={},this.isNew=!0):(this.tempCoupon=Object(s["a"])({},e),this.isNew=!1),l()("#couponModal").modal("show")},updateCoupon:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/admin/coupon"),e="post",o=this;o.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/admin/coupon/").concat(o.tempCoupon.id),e="put"),this.$http[e](t,{data:o.tempCoupon}).then(function(t){console.log(t.data),t.data.success?(l()("#couponModal").modal("hide"),o.getCoupons()):(l()("#couponModal").modal("hide"),o.getCoupons(),console.log("新增失敗"))})},delModal:function(t){this.tempCoupon=Object(s["a"])({},t),l()("#delCouponModal").modal("show")},deleteCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("kiki5720","/admin/coupon/").concat(t.tempCoupon.id);this.$http.delete(e).then(function(e){console.log(e.data),e.data.success?(l()("#delCouponModal").modal("hide"),t.getCoupons()):(l()("#delCouponModal").modal("hide"),t.getCoupons(),console.log("刪除失敗"))})}},created:function(){this.getCoupons()}},d=c,r=o("2877"),p=Object(r["a"])(d,a,n,!1,null,null,null);p.options.__file="Coupons.vue";e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-4b7f29c6.120f6e59.js.map