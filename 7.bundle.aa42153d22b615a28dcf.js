(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{74:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{userUId:""}},computed:{isAdmin:function(){var t=this.$store.state.user,e=!!t&&"normal"!==t.userPrivilege;return Boolean(e)}}},v=n(1),r=Object(v.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[t.isAdmin?n("div",[n("h1",{staticStyle:{color:"#ed4014","text-decoration":"line-through"}},[t._v("\n          管理后台 （功能暂不可用！！！）\n        ")]),t._v(" "),n("h2",[t._v("封禁用户 uid 搜索、编辑")]),t._v(" "),n("Form",{attrs:{inline:""}},[n("FormItem",[n("Input",{attrs:{placeholder:"uid"},model:{value:t.userUId,callback:function(e){t.userUId=e},expression:"userUId"}})],1),t._v(" "),n("FormItem",[n("Button",[t._v("搜索")])],1)],1),t._v(" "),n("div",[n("ButtonGroup",[n("Button",[t._v("封禁用户")]),t._v(" "),n("Button",[t._v("解禁用户")])],1),t._v(" "),n("ButtonGroup",[n("Button",[t._v("设为普通管理员")]),t._v(" "),n("Button",[t._v("取消普通管理员")])],1)],1),t._v(" "),n("h2",[t._v("cheaters ouid 搜索、编辑")]),t._v(" "),n("Form",{attrs:{inline:""}},[n("FormItem",[n("Input",{attrs:{placeholder:"ouid"}})],1),t._v(" "),n("FormItem",[n("Button",[t._v("搜索")])],1)],1),t._v(" "),n("p",[t._v("被举报的游戏：")]),t._v(" "),n("Checkbox",[t._v("bf1")]),t._v(" "),n("Checkbox",[t._v("bfv")]),t._v(" "),n("p",[t._v("举报记录：")]),t._v(" "),n("Checkbox"),t._v(" "),n("p",[t._v("管理员处理记录：")]),t._v(" "),n("Checkbox"),t._v(" "),n("h2",[t._v("管理员操作日志")])],1):n("div",[t._v("404")])])])}),[],!1,null,null,null);e.default=r.exports}}]);