(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{71:function(e,t,s){"use strict";s.r(t);s(3);var r=s(2),a=Vuex,o=(a.mapActions,a.mapMutations,{data:function(){return{reset:{qq:"",password:"",passwordRepeat:""},spinShow:!1}},beforeMount:function(){},methods:{handleReset:function(){var e=this,t=_.each(this.reset,(function(e,t,s){s[t]=e.trim()})),s=t.qq,a=t.password,o=t.passwordRepeat,n=this.$route.query.token;s&&a&&o&&a===o?(this.spinShow=!0,Object(r.b)({method:"post",url:"/account/reset",data:{qq:s,token:n,password:a,passwordRepeat:o}}).then((function(t){e.spinShow=!1;var s=t.data;e.$Message.success(s.msg),1===s.error?(e.reset.password="",e.reset.passwordRepeat=""):e.$router.push("/signin")}))):this.$Message.error("请规范填写")}}}),n=s(1),p=Object(n.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("Form",{staticStyle:{position:"relative"},attrs:{"label-width":80}},[s("Divider",[e._v(e._s(e.$t("reset.title")))]),e._v(" "),s("FormItem",{attrs:{label:e.$t("reset.form.qq")}},[s("Input",{attrs:{type:"text",placeholder:e.$t("reset.form.qq")},model:{value:e.reset.qq,callback:function(t){e.$set(e.reset,"qq",t)},expression:"reset.qq"}})],1),e._v(" "),s("FormItem",{attrs:{label:e.$t("reset.form.password")}},[s("Input",{attrs:{type:"password",placeholder:e.$t("reset.form.password")},model:{value:e.reset.password,callback:function(t){e.$set(e.reset,"password",t)},expression:"reset.password"}})],1),e._v(" "),s("FormItem",{attrs:{label:e.$t("reset.form.passwordRepeat")}},[s("Input",{attrs:{type:"password",placeholder:e.$t("reset.form.passwordRepeat")},model:{value:e.reset.passwordRepeat,callback:function(t){e.$set(e.reset,"passwordRepeat",t)},expression:"reset.passwordRepeat"}})],1),e._v(" "),s("FormItem",[s("Button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleReset(t)}}},[e._v(e._s(e.$t("reset.form.submit")))])],1),e._v(" "),s("Spin",{directives:[{name:"show",rawName:"v-show",value:e.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:""}})],1)],1)])}),[],!1,null,null,null);t.default=p.exports}}]);