(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3508"],{"023c":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("div",[s("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[s("v-img",{staticClass:"white--text",attrs:{position:"bottom",height:"70px",src:i("d999")}},[s("v-card-text",{staticClass:"text-right text-h6 font-weight-black"},[e._v(" THIRD PARTY BODILY INJURY ")])],1)],1),s("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.filteredCasefiles,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:""}},[e.showAdministrative?s("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[s("v-btn",e._g(e._b({attrs:{fab:"",small:"",color:"primary",dark:""}},"v-btn",a,!1),Object.assign({},n,i)),[s("v-icon",[e._v("mdi-plus")])],1)]}}],null,!0)},[s("span",[e._v("ADD CASEFILE")])])]}}],null,!1,694663409),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-select",{attrs:{items:e.refType,"item-text":"description","item-value":"name","menu-props":{maxHeight:"400"},label:"DEPARTMENT",hint:"Set the casefile department","persistent-hint":""},model:{value:e.editedItem.refType,callback:function(t){e.$set(e.editedItem,"refType",t)},expression:"editedItem.refType"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-select",{attrs:{items:e.year,label:"Year"},model:{value:e.editedItem.year,callback:function(t){e.$set(e.editedItem,"year",t)},expression:"editedItem.year"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-select",{attrs:{items:e.branch,"item-text":"name","item-value":"brCode","menu-props":{maxHeight:"400"},label:"BRANCH",hint:"Set the casefile branch","persistent-hint":""},model:{value:e.editedItem.branch,callback:function(t){e.$set(e.editedItem,"branch",t)},expression:"editedItem.branch"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-select",{attrs:{items:e.insurer,"item-text":"name","item-value":"insCode","menu-props":{maxHeight:"400"},label:"INSURER",hint:"Set the casefile insurer","persistent-hint":""},model:{value:e.editedItem.insurer,callback:function(t){e.$set(e.editedItem,"insurer",t)},expression:"editedItem.insurer"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-text-field",{attrs:{rules:[function(e){return!!e||"Insurers reference is required"}],label:"Insurers Reference",required:""},model:{value:e.editedItem.claimNo,callback:function(t){e.$set(e.editedItem,"claimNo",t)},expression:"editedItem.claimNo"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-text-field",{attrs:{rules:[function(e){return!!e||"Vehicle Number is required"}],label:"Vehicle Number Reference",required:""},model:{value:e.editedItem.vehicleNo,callback:function(t){e.$set(e.editedItem,"vehicleNo",t)},expression:"editedItem.vehicleNo"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[[s("div",[s("v-menu",{attrs:{"close-on-content-click":!1,"max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[s("v-text-field",e._g(e._b({attrs:{value:e.computedDateFormattedMomentjs,clearable:"",label:"Date Of Loss","prepend-icon":"mdi-calendar",readonly:""},on:{"click:clear":function(t){e.date=null}},model:{value:e.editedItem.dateOfLoss,callback:function(t){e.$set(e.editedItem,"dateOfLoss",t)},expression:"editedItem.dateOfLoss"}},"v-text-field",a,!1),i))]}}],null,!1,3635706623),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[s("v-date-picker",{attrs:{value:e.computedDateFormattedMomentjs},on:{change:function(t){e.menu=!1}},model:{value:e.editedItem.dateOfLoss,callback:function(t){e.$set(e.editedItem,"dateOfLoss",t)},expression:"editedItem.dateOfLoss"}})],1)],1)]],2),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-text-field",{attrs:{rules:[function(e){return!!e||"Place of Loss is required"}],label:"Place of Loss",required:""},model:{value:e.editedItem.placeOfLoss,callback:function(t){e.$set(e.editedItem,"placeOfLoss",t)},expression:"editedItem.placeOfLoss"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-text-field",{attrs:{rules:[function(e){return!!e||"Insured Name is required"}],label:"Insured Name",required:""},model:{value:e.editedItem.insuredName,callback:function(t){e.$set(e.editedItem,"insuredName",t)},expression:"editedItem.insuredName"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-text-field",{attrs:{label:"Insurers Comment"},model:{value:e.editedItem.insComment,callback:function(t){e.$set(e.editedItem,"insComment",t)},expression:"editedItem.insComment"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-btn",{staticClass:"mt-3",attrs:{disabled:e.isAddButtonDisabled,color:"primary"},on:{click:e.saveCasefile}},[e._v("Submit")])],1)],1)],1)],1)],1)],1):e._e(),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[s("v-card",[s("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete the casefile with id "+e._s(e.editedItem.id)+"?")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),s("v-spacer")],1)],1)],1),s("v-spacer"),s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.numbering",fn:function(t){return[e._v(" "+e._s(t.index+1)+" ")]}},{key:"item.id",fn:function(t){var i=t.item;return[s("tr",[e._v(" AA/"+e._s(i.refType)+"/"+e._s(i.id)+"/"+e._s(i.year)+"/"+e._s(i.branch)+" ")])]}},{key:"item.dateOfLoss",fn:function(t){var i=t.item;return[e._v(" "+e._s(e.formatDate(i.dateOfLoss))+" ")]}},{key:"item.actions",fn:function(t){var i=t.item;return[s("v-tooltip",{attrs:{left:"",transition:"fab-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[s("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},"v-icon",n,!1),a),[e._v(" mdi-pencil ")])]}}],null,!0)},[s("span",[e._v(" edit")])]),s("v-tooltip",{attrs:{right:"",transition:"fab-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[s("v-icon",e._g(e._b({attrs:{small:"",color:"red darken-1"},on:{click:function(t){return e.deleteItem(i)}}},"v-icon",n,!1),a),[e._v(" mdi-delete ")])]}}],null,!0)},[s("span",[e._v(" delete")])])]}}],null,!0)})],1)])},a=[],n=(i("4de4"),i("caad"),i("2532"),i("d81d"),i("b0c0"),i("fde1")),r=i("cb28"),o=i("5632"),d=i("f0cc"),l=i("c1df"),c=i.n(l),u={name:"bodily-injury",data:function(){return{dialog:!1,dialogDelete:!1,casefiles:[],search:"",date:null,menu:!1,branch:[],refType:[],insurer:[],year:["2018","2019","2020","2021","2022"],defaultItem:{id:null,refType:"",year:"",branch:"",insurer:"",claimNo:"",vehicleNo:"",dateOfLoss:"",placeOfLoss:"",insuredName:"",insComment:"",createdBy:"",fileStatus:"NEW"},editedIndex:-1,editedItem:{id:null,refType:"",year:"",branch:"",insurer:"",claimNo:"",vehicleNo:"",dateOfLoss:"",placeOfLoss:"",insuredName:"",insComment:"",createdBy:"",fileStatus:"NEW"},headers:[{text:"NO.",align:"start",sortable:!1,value:"numbering"},{text:"INSURER",align:"center",value:"insurer",sortable:!1},{text:"VEHICLE NO.",align:"center",value:"vehicleNo",sortable:!1},{text:"AASB REFERENCE",align:"center",value:"id",sortable:!1},{text:"CLAIM NO.",align:"start",sortable:!1,value:"claimNo"},{text:"DATE OF LOSS",align:"start",sortable:!1,value:"dateOfLoss"},{text:"STATUS",align:"center",value:"fileStatus",sortable:!1},{text:"ACTIONS",align:"center",value:"actions",sortable:!1}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},isAddButtonDisabled:function(){return!(this.editedItem.refType&&this.editedItem.year&&this.editedItem.branch&&this.editedItem.insurer&&this.editedItem.claimNo&&this.editedItem.vehicleNo&&this.editedItem.dateOfLoss&&this.editedItem.placeOfLoss&&this.editedItem.insuredName&&this.editedItem.insComment&&this.editedItem.fileStatus)},computedDateFormattedMomentjs:function(){return this.date?c()(this.date).format("yyyy-MM-dd"):""},filteredCasefiles:function(){var e=this;return this.casefiles.filter((function(t){return t.branch==e.$store.state.auth.user.branch&&"TPBI"==t.refType}))},currentUser:function(){return this.$store.state.auth.user},showAdministrative:function(){return!(!this.currentUser||!this.currentUser.roles)&&(this.currentUser.roles.includes("MANAGER")||this.currentUser.roles.includes("ADMIN")||this.currentUser.roles.includes("BRANCHMANAGER")||this.currentUser.roles.includes("BRANCHCLERK"))}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{formatDate:function(e){return c()(e).format("DD/MMM/YY")},retrieveCasefiles:function(){var e=this;d["a"].getAll().then((function(t){e.casefiles=t.data})).catch((function(e){console.log(e)}))},refreshList:function(){this.retrieveCasefiles()},retrieveDept:function(){var e=this;r["a"].getAll().then((function(t){e.refType=t.data})).catch((function(e){console.log(e)}))},retrieveIns:function(){var e=this;o["a"].getAll().then((function(t){e.insurer=t.data})).catch((function(e){console.log(e)}))},save:function(e){this.$refs.menu.save(e)},retrieveBranches:function(){var e=this;n["a"].getAll().then((function(t){e.branch=t.data.map(e.getDisplayBranch)})).catch((function(e){console.log(e)}))},getDisplayBranch:function(e){return{id:e.id,name:e.name.length>30?e.name.substr(0,30)+"...":e.name,brCode:e.brCode.length>30?e.brCode.substr(0,30)+"...":e.brCode}},editItem:function(e){this.editedIndex=this.casefiles.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.casefiles.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){var e=this;d["a"].delete(this.editedItem.id).then((function(t){e.$store.dispatch("setSnackbar",{showing:!0,color:"error",text:t&&t.data&&t.data.message||toString()}),e.refreshList()})).catch((function(e){console.log(e)})),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},saveCasefile:function(){var e=this;if(this.editedIndex>-1)d["a"].update(this.editedItem.id,this.editedItem).then((function(t){e.close(),e.$store.dispatch("setSnackbar",{showing:!0,color:"warning",text:t&&t.data&&t.data.message||toString()}),e.refreshList()})).catch((function(e){console.log(e)}));else{var t={refType:this.editedItem.refType,year:this.editedItem.year,branch:this.editedItem.branch,insurer:this.editedItem.insurer,claimNo:this.editedItem.claimNo,vehicleNo:this.editedItem.vehicleNo,dateOfLoss:this.editedItem.dateOfLoss,placeOfLoss:this.editedItem.placeOfLoss,insuredName:this.editedItem.insuredName,insComment:this.editedItem.insComment,createdBy:this.$store.state.auth.user.username,fileStatus:this.editedItem.fileStatus};d["a"].create(t).then((function(t){e.editedItem.id=t.data.id,e.close(),e.$store.dispatch("setSnackbar",{showing:!0,color:"success",text:t&&t.data&&t.data.message||toString()}),e.refreshList()})).catch((function(t){e.$store.dispatch("setSnackbar",{showing:!0,text:t.response&&t.response.data&&t.response.data.message||t.message||toString()})}))}this.close()}},mounted:function(){this.retrieveBranches(),this.retrieveDept(),this.retrieveIns(),this.retrieveCasefiles()}},m=u,f=i("2877"),h=i("6544"),v=i.n(h),b=i("8336"),p=i("b0af"),I=i("99d9"),g=i("62ad"),x=i("a523"),y=i("8fea"),C=i("2e4b"),k=i("169a"),N=i("ce7e"),_=i("132d"),O=i("adda"),D=i("e449"),S=i("0fd9"),L=i("b974"),T=i("2fa4"),A=i("8654"),w=i("71d9"),V=i("3a2f"),$=Object(f["a"])(m,s,a,!1,null,null,null);t["default"]=$.exports;v()($,{VBtn:b["a"],VCard:p["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:g["a"],VContainer:x["a"],VDataTable:y["a"],VDatePicker:C["a"],VDialog:k["a"],VDivider:N["a"],VIcon:_["a"],VImg:O["a"],VMenu:D["a"],VRow:S["a"],VSelect:L["a"],VSpacer:T["a"],VTextField:A["a"],VToolbar:w["a"],VTooltip:V["a"]})}}]);
//# sourceMappingURL=chunk-2d0a3508.1ba14f13.js.map