(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d229ba8e"],{26775:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.currentIns?n("div",{staticClass:"edit-form py-3"},[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[n("v-row",{staticClass:"pa-5"},[n("h2",[t._v("EDIT INSURER")])])],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-spacer"),n("v-btn",{staticClass:"text-decoration-none",attrs:{to:"/addIns",color:"primary",dark:"",block:"",small:""}},[t._v("ADD INSURER")])],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-spacer"),n("v-btn",{staticClass:"text-decoration-none",attrs:{to:"/inss",color:"primary",dark:"",block:"",small:""}},[t._v("INSURER LIST")])],1)],1),n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{rules:[function(t){return!!t||"Name is required"}],label:"Name",required:""},model:{value:t.currentIns.name,callback:function(e){t.$set(t.currentIns,"name",e)},expression:"currentIns.name"}}),n("v-text-field",{attrs:{rules:[function(t){return!!t||"Code is required"}],label:"Code",required:""},model:{value:t.currentIns.insCode,callback:function(e){t.$set(t.currentIns,"insCode",e)},expression:"currentIns.insCode"}}),n("v-btn",{staticClass:"mr-2",attrs:{color:"error",small:""},on:{click:t.deleteIns}},[t._v(" Delete ")]),n("v-btn",{attrs:{color:"success",small:""},on:{click:t.updateIns}},[t._v(" Update ")])],1),n("p",{staticClass:"mt-3"},[t._v(t._s(t.message))])],1):n("div",[n("p",[t._v("Please click on a User...")])])])},r=[],s=n("5632"),i={name:"insurer",data:function(){return{currentIns:null,message:""}},methods:{getIns:function(t){var e=this;s["a"].get(t).then((function(t){e.currentIns=t.data})).catch((function(t){console.log(t)}))},updateIns:function(){var t=this;s["a"].update(this.currentIns.id,this.currentIns).then((function(e){t.$store.dispatch("setSnackbar",{showing:!0,text:e&&e.data&&e.data.message||toString()}),t.$router.push({name:"inss"})})).catch((function(t){console.log(t)}))},deleteIns:function(){var t=this;s["a"].delete(this.currentIns.id).then((function(e){t.$store.dispatch("setSnackbar",{showing:!0,text:e&&e.data&&e.data.message||toString()}),t.$store.dispatch("setSnackbar",{showing:!0,text:e&&e.data&&e.data.message||toString()}),t.$router.push({name:"inss"})})).catch((function(t){console.log(t)}))}},mounted:function(){this.message="",this.getIns(this.$route.params.id)}},o=i,u=n("2877"),c=n("6544"),l=n.n(c),d=n("8336"),h=n("62ad"),f=n("a523"),v=n("4bd4"),m=n("0fd9"),p=n("2fa4"),g=n("8654"),b=Object(u["a"])(o,a,r,!1,null,null,null);e["default"]=b.exports;l()(b,{VBtn:d["a"],VCol:h["a"],VContainer:f["a"],VForm:v["a"],VRow:m["a"],VSpacer:p["a"],VTextField:g["a"]})},"4bd4":function(t,e,n){"use strict";var a=n("5530"),r=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("159b"),n("7db0"),n("58df")),s=n("7e2b"),i=n("3206");e["a"]=Object(r["a"])(s["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=n(t)))})):a.valid=n(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5632:function(t,e,n){"use strict";var a=n("d4ec"),r=n("bee2"),s=n("c427"),i=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,[{key:"getAll",value:function(){return s["a"].get("/inss")}},{key:"get",value:function(t){return s["a"].get("/inss/".concat(t))}},{key:"create",value:function(t){return s["a"].post("/inss",t)}},{key:"update",value:function(t,e){return s["a"].put("/inss/".concat(t),e)}},{key:"delete",value:function(t){return s["a"].delete("/inss/".concat(t))}},{key:"deleteAll",value:function(){return s["a"].delete("/inss")}}]),t}();e["a"]=new i}}]);
//# sourceMappingURL=chunk-d229ba8e.8fbd1115.js.map