(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0efcba"],{"9a40":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("header",{staticClass:"jumbotron"},[e("h3",[t._v(t._s(t.content))])])])},a=[],o=(e("d3b7"),e("25f0"),e("1f57")),r=e("30ef9"),c={name:"User",data:function(){return{content:""}},mounted:function(){var t=this;o["a"].getUserBoard().then((function(n){t.content=n.data}),(function(n){t.content=n.response&&n.response.data&&n.response.data.message||n.message||n.toString(),n.response&&403===n.response.status&&r["a"].dispatch("logout")}))}},u=c,i=e("2877"),d=Object(i["a"])(u,s,a,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0efcba.8e11bdc1.js.map