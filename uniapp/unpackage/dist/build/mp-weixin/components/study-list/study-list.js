(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/study-list/study-list"],{"0327":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{list:{type:Array,value:[]},listType:{type:String,value:""}},data:function(){return{}},methods:{goH5:function(n){var e=n.currentTarget.dataset.index;this.list[e].url_a?t.navigateTo({url:"/pages/webview/index?url="+this.list[e].url_a}):"1"==this.listType?t.navigateTo({url:"/pages/danghistory/index?id="+this.list[e].id}):t.navigateTo({url:"/pages/reading_list/index?id="+this.list[e].id})}}};n.default=e}).call(this,e("543d")["default"])},1091:function(t,n,e){"use strict";e.r(n);var i=e("182f"),u=e("86f4");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("f355");var r,c=e("f0c5"),l=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=l.exports},1525:function(t,n,e){},"182f":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"86f4":function(t,n,e){"use strict";e.r(n);var i=e("0327"),u=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=u.a},ccec:function(t,n,e){"use strict";(function(t){e("c5a6");i(e("66fd"));var n=i(e("1091"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},f355:function(t,n,e){"use strict";var i=e("1525"),u=e.n(i);u.a}},[["ccec","common/runtime","common/vendor"]]]);