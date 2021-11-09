(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-659fa0dc"],{"4bd4":function(e,t,n){"use strict";var i=n("5530"),a=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("159b"),n("7db0"),n("58df")),r=n("7e2b"),s=n("3206");t["a"]=Object(a["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,n=function(e){return e.$watch("hasError",(function(n){t.$set(t.errorBag,e._uid,n)}),{immediate:!0})},i={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",(function(a){a&&(t.errorBag.hasOwnProperty(e._uid)||(i.valid=n(e)))})):i.valid=n(e),i},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var n=this.watchers.find((function(e){return e._uid===t._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"6ca7":function(e,t,n){},"9c81":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("div",{staticClass:"submit-form mt-3 mx-auto"},[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"8"}},[n("v-row",{staticClass:"pa-5"},[n("h2",[e._v("ADD USER")])])],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-spacer"),n("v-btn",{staticClass:"text-decoration-none",attrs:{to:"/members",color:"primary",dark:"",block:"",small:""}},[e._v("MEMBER LIST")])],1)],1),n("div",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{rules:[function(e){return!!e||"Name is required"}],label:"Name",required:""},model:{value:e.member.username,callback:function(t){e.$set(e.member,"username",t)},expression:"member.username"}}),n("v-text-field",{attrs:{rules:e.member.emailRules,label:"Email",required:"",type:"email"},model:{value:e.member.email,callback:function(t){e.$set(e.member,"email",t)},expression:"member.email"}}),n("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[function(e){return!!e||"Password is required"}],type:e.show1?"text":"password",label:"Password",required:"",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.member.password,callback:function(t){e.$set(e.member,"password",t)},expression:"member.password"}}),n("v-select",{attrs:{items:e.access,"item-text":"name","item-value":"roleCode","menu-props":{maxHeight:"400"},label:"USER LEVEL",hint:"Set the user access","persistent-hint":""},model:{value:e.member.roles,callback:function(t){e.$set(e.member,"roles",t)},expression:"member.roles"}}),n("v-select",{attrs:{items:e.branch,"item-text":"name","item-value":"roleCode","menu-props":{maxHeight:"400"},label:"BRANCH",hint:"Set the user branch","persistent-hint":""},model:{value:e.member.branch,callback:function(t){e.$set(e.member,"branch",t)},expression:"member.branch"}}),n("v-select",{attrs:{items:e.dept,"item-text":"name","item-value":"name","menu-props":{maxHeight:"400"},label:"DEPARTMENT",hint:"Set the user department","persistent-hint":""},model:{value:e.member.dept,callback:function(t){e.$set(e.member,"dept",t)},expression:"member.dept"}}),n("v-checkbox",{attrs:{label:"Active"},model:{value:e.member.active,callback:function(t){e.$set(e.member,"active",t)},expression:"member.active"}})],1),n("v-btn",{staticClass:"mt-3",attrs:{disabled:e.isAddButtonDisabled,color:"primary"},on:{click:e.saveMember}},[e._v("Submit")])],1)],1)])},a=[],r=(n("d81d"),n("b0c0"),n("9df5")),s=n("9d6c"),c=n("fde1"),u=n("cb28"),o={name:"add-member",data:function(){return{access:[],branch:[],dept:[],show1:!1,member:{id:null,username:"",email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],password:"",active:!0,roles:"",branch:"",dept:""}}},computed:{isAddButtonDisabled:function(){return!(this.member.username&&this.member.email&&this.member.password&&this.member.roles&&this.member.branch&&this.member.dept)}},methods:{retrieveAccess:function(){var e=this;s["a"].getAll().then((function(t){e.access=t.data.map(e.getDisplayAccess)})).catch((function(e){console.log(e)}))},retrieveBranch:function(){var e=this;c["a"].getAll().then((function(t){e.branch=t.data})).catch((function(e){console.log(e)}))},retrieveDept:function(){var e=this;u["a"].getAll().then((function(t){e.dept=t.data})).catch((function(e){console.log(e)}))},saveMember:function(){var e=this,t={username:this.member.username,email:this.member.email,password:this.member.password,active:this.member.active,roles:this.member.roles,branch:this.member.branch,dept:this.member.dept};r["a"].create(t).then((function(t){e.member.id=t.data.id,e.$store.dispatch("setSnackbar",{showing:!0,text:t&&t.data&&t.data.message||toString()}),e.$router.push({name:"members"})})).catch((function(t){console.log(t),e.$store.dispatch("setSnackbar",{showing:!0,text:t.response&&t.response.data&&t.response.data.message||t.message||toString()})}))},getDisplayAccess:function(e){return{id:e.id,name:e.name,roleCode:[e.roleCode]}}},mounted:function(){this.retrieveAccess(),this.retrieveBranch(),this.retrieveDept()}},l=o,d=n("2877"),h=n("6544"),m=n.n(h),f=n("8336"),p=n("ac7c"),v=n("62ad"),b=n("a523"),g=n("4bd4"),k=n("0fd9"),y=n("b974"),w=n("2fa4"),x=n("8654"),V=Object(d["a"])(l,i,a,!1,null,null,null);t["default"]=V.exports;m()(V,{VBtn:f["a"],VCheckbox:p["a"],VCol:v["a"],VContainer:b["a"],VForm:g["a"],VRow:k["a"],VSelect:y["a"],VSpacer:w["a"],VTextField:x["a"]})},"9d6c":function(e,t,n){"use strict";var i=n("d4ec"),a=n("bee2"),r=n("c427"),s=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"getAll",value:function(){return r["a"].get("/access")}},{key:"get",value:function(e){return r["a"].get("/access/".concat(e))}},{key:"create",value:function(e){return r["a"].post("/access",e)}},{key:"update",value:function(e,t){return r["a"].put("/access/".concat(e),t)}},{key:"delete",value:function(e){return r["a"].delete("/access/".concat(e))}},{key:"deleteAll",value:function(){return r["a"].delete("/access")}},{key:"findByUsername",value:function(e){return r["a"].get("/access?name=".concat(e))}}]),e}();t["a"]=new s},"9df5":function(e,t,n){"use strict";var i=n("d4ec"),a=n("bee2"),r=n("c427"),s=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"getAll",value:function(){return r["a"].get("/members")}},{key:"get",value:function(e){return r["a"].get("/members/".concat(e))}},{key:"create",value:function(e){return r["a"].post("/members",e)}},{key:"update",value:function(e,t){return r["a"].put("/members/".concat(e),t)}},{key:"delete",value:function(e){return r["a"].delete("/members/".concat(e))}},{key:"deleteAll",value:function(){return r["a"].delete("/members")}},{key:"findByUsername",value:function(e){return r["a"].get("/members?username=".concat(e))}},{key:"getAllRoles",value:function(){return r["a"].get("/members/userLevel/all")}}]),e}();t["a"]=new s},ac7c:function(e,t,n){"use strict";var i=n("15fd"),a=n("5530"),r=(n("d3b7"),n("25f0"),n("6ca7"),n("ec29"),n("9d26")),s=n("c37a"),c=(n("4de4"),n("5607")),u=n("2b0e"),o=u["a"].extend({name:"rippleable",directives:{ripple:c["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),l=n("8547"),d=n("58df");function h(e){e.preventDefault()}var m=Object(d["a"])(s["a"],o,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return e.valueComparator(n,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=s["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:h},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:h},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!e.valueComparator(n,t)})),n.length===i&&n.push(t)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(n,t)?null:t:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),f=["title"];t["a"]=m.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var e=this.attrs$,t=(e.title,Object(i["a"])(e,f));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(r["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},t),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},cb28:function(e,t,n){"use strict";var i=n("d4ec"),a=n("bee2"),r=n("c427"),s=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"getAll",value:function(){return r["a"].get("/depts")}},{key:"get",value:function(e){return r["a"].get("/depts/".concat(e))}},{key:"create",value:function(e){return r["a"].post("/depts",e)}},{key:"update",value:function(e,t){return r["a"].put("/depts/".concat(e),t)}},{key:"delete",value:function(e){return r["a"].delete("/depts/".concat(e))}},{key:"deleteAll",value:function(){return r["a"].delete("/depts")}}]),e}();t["a"]=new s},ec29:function(e,t,n){},fde1:function(e,t,n){"use strict";var i=n("d4ec"),a=n("bee2"),r=n("c427"),s=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"getAll",value:function(){return r["a"].get("/branches")}},{key:"get",value:function(e){return r["a"].get("/branches/".concat(e))}},{key:"create",value:function(e){return r["a"].post("/branches",e)}},{key:"update",value:function(e,t){return r["a"].put("/branches/".concat(e),t)}},{key:"delete",value:function(e){return r["a"].delete("/branches/".concat(e))}},{key:"deleteAll",value:function(){return r["a"].delete("/branches")}},{key:"findByBranch",value:function(e){return r["a"].get("/branches?name=".concat(e))}}]),e}();t["a"]=new s}}]);
//# sourceMappingURL=chunk-659fa0dc.2eb073be.js.map