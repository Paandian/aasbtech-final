(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab8f4"],{1692:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("header",{staticClass:"jumbotron"},[e("h3",[n._v(n._s(n.content))])])])},s=[],o=(e("d3b7"),e("25f0"),e("1f57")),r=e("30ef9"),c={name:"Manager",data:function(){return{content:""}},mounted:function(){var n=this;o["a"].getManagerBoard().then((function(t){n.content=t.data}),(function(t){n.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),t.response&&403===t.response.status&&r["a"].dispatch("logout")}))}},u=c,i=e("2877"),d=Object(i["a"])(u,a,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0ab8f4.059fcb04.js.map