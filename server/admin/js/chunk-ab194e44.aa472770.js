(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab194e44"],{"30ad":function(t,e,n){},"4a11":function(t,e,n){"use strict";var a=n("30ad"),r=n.n(a);r.a},"4b24":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("h2",{staticClass:"title"},[t._v("广告位列表")]),n("el-table",{attrs:{data:t.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"250"}}),n("el-table-column",{attrs:{prop:"name",label:"名称"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.$router.push("/ads/edit/"+e.row._id)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1)],1)},r=[],c=(n("b0c0"),n("96cf"),n("89ba")),s={name:"list",data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("rest/ads");case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),remove:function(t){var e=this;this.$confirm("是否确定要删除广告位【".concat(t.name,"】"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.delete("rest/ads/".concat(t._id));case 2:e.$message({type:"success",message:"删除成功!"}),e.fetch();case 4:case"end":return n.stop()}}),n)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},i=s,o=(n("4a11"),n("2877")),u=Object(o["a"])(i,a,r,!1,null,"3b3aedc8",null);e["default"]=u.exports},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,c=Function.prototype,s=c.toString,i=/^\s*function ([^ (]*)/,o="name";!a||o in c||r(c,o,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-ab194e44.aa472770.js.map