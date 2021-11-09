(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-411193a6"],{"4bd4":function(t,e,a){"use strict";var n=a("5530"),s=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),i=a("7e2b"),r=a("3206");e["a"]=Object(s["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=a(t)))})):n.valid=a(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},d14b:function(t,e,a){"use strict";var n=a("d4ec"),s=a("bee2"),i=a("c427"),r=function(){function t(){Object(n["a"])(this,t)}return Object(s["a"])(t,[{key:"getAll",value:function(){return i["a"].get("/stages")}},{key:"get",value:function(t){return i["a"].get("/stages/".concat(t))}},{key:"create",value:function(t){return i["a"].post("/stages",t)}},{key:"update",value:function(t,e){return i["a"].put("/stages/".concat(t),e)}},{key:"delete",value:function(t){return i["a"].delete("/stages/".concat(t))}},{key:"deleteAll",value:function(){return i["a"].delete("/stages")}}]),t}();e["a"]=new r},d29e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"submit-form mt-3 mx-auto"},[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"8"}},[a("v-row",{staticClass:"pa-5"},[a("h2",[t._v("ADD STAGE")])])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-spacer"),a("v-btn",{staticClass:"text-decoration-none",attrs:{to:"/stages",color:"primary",dark:"",block:"",small:""}},[t._v("STAGE LIST")])],1)],1),a("div",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{rules:[function(t){return!!t||"Name is required"}],label:"Name",required:""},model:{value:t.stage.name,callback:function(e){t.$set(t.stage,"name",e)},expression:"stage.name"}}),a("v-text-field",{attrs:{rules:[function(t){return!!t||"Code is required"}],label:"Code",required:""},model:{value:t.stage.stageCode,callback:function(e){t.$set(t.stage,"stageCode",e)},expression:"stage.stageCode"}})],1),a("v-btn",{staticClass:"mt-3",attrs:{disabled:t.isAddButtonDisabled,color:"primary"},on:{click:t.saveStage}},[t._v("Submit")])],1)],1)])},s=[],i=(a("b0c0"),a("d14b")),r={name:"add-stage",data:function(){return{stage:{id:null,name:"",stageCode:""}}},computed:{isAddButtonDisabled:function(){return!(this.stage.name&&this.stage.stageCode)}},methods:{saveStage:function(){var t=this,e={name:this.stage.name,stageCode:this.stage.stageCode};i["a"].create(e).then((function(e){t.stage.id=e.data.id,t.$store.dispatch("setSnackbar",{showing:!0,text:e&&e.data&&e.data.message||toString()}),t.$router.push({name:"stages"})})).catch((function(e){console.log(e),t.$store.dispatch("setSnackbar",{showing:!0,text:e.response&&e.response.data&&e.response.data.message||e.message||toString()})}))}},mounted:function(){}},o=r,u=a("2877"),c=a("6544"),d=a.n(c),l=a("8336"),f=a("62ad"),h=a("a523"),g=a("4bd4"),m=a("0fd9"),v=a("2fa4"),p=a("8654"),b=Object(u["a"])(o,n,s,!1,null,null,null);e["default"]=b.exports;d()(b,{VBtn:l["a"],VCol:f["a"],VContainer:h["a"],VForm:g["a"],VRow:m["a"],VSpacer:v["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=chunk-411193a6.5d114e27.js.map