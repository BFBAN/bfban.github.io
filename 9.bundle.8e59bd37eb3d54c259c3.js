(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{73:function(t,e,r){"use strict";r.r(e);var a=r(42),o=r.n(a),i=r(43),n=r.n(i),s=r(70),c=r(3),p=r(2),l={data:function(){return{formItem:{gameName:"",originId:"",bilibiliLink:"",checkbox:["aimbot"],description:this.$i18n.t("report.info.description"),captcha:"",originUserId:"",originPersonaId:"",avatarLink:""},spinShow:!1,cheatMethodsGlossary:c.a}},components:{Misc:s.default},methods:{checkVideoAndImg:function(){return!(!Object(c.n)(this.formItem.bilibiliLink)&&!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpe?g|gif|png|bmp)/.test(this.formItem.description))||(this.$Message.error(this.$i18n.t("report.info.error")),!1)},refreshCaptcha:function(){this.$refs.captcha.src=p.a+"/captcha?r="+Math.random(),c.o.call(this.$refs.reCaptcha)},handleMiscChange:function(t){this.formItem.description=t},doReport:function(t){var e=this;return!1!==c.d.call(this,this.formItem)&&(!1!==this.checkVideoAndImg()&&(this.spinShow=!0,void Object(c.c)({id:Object(c.n)(this.formItem.originId)}).then(function(){var t=n()(o.a.mark((function t(r){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r.data,!a.idExist){t.next=10;break}return e.formItem.originUserId=a.originUserId,e.formItem.originPersonaId=a.originPersonaId,e.formItem.avatarLink=a.avatarLink,t.next=8,e.handleReport();case 8:t.next=12;break;case 10:e.spinShow=!1,e.$Message.error(e.$i18n.t("report.info.originId"));case 12:e.formItem.captcha="",e.refreshCaptcha();case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())))},handleReport:function(){var t=this;this.spinShow=!0;var e=this.formItem.checkbox.join(","),r=this.formItem,a=r.gameName,o=r.originUserId,i=r.originPersonaId,n=r.avatarLink,s=r.captcha,l=Object(c.n)(this.formItem.originId),m=Object(c.n)(this.formItem.bilibiliLink);m&&(m=/^https?:\/\//.test(m)?m:"//"+m);var h=this.formItem.description.trim();Object(p.b)({method:"post",url:"/cheaters/",headers:{},data:{gameName:a,originId:l,cheatMethods:e,bilibiliLink:m,description:h,captcha:s,originUserId:o,originPersonaId:i,avatarLink:n}}).then((function(e){t.spinShow=!1;var r=e.data;0===r.error?(t.$router.push({name:"cheater",params:{game:a,ouid:r.data.originUserId}}),t.$Message.success(t.$i18n.t("report.info.success"))):t.$Message.error("failed "+r.msg)}))}}},m=r(1),h=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"content"},[r("Form",{staticStyle:{position:"relative"},attrs:{"label-width":80}},[r("Divider",[t._v(t._s(t.$t("report.info.reportHacker",{msg:"reportHacker"})))]),t._v(" "),r("FormItem",{attrs:{label:t.$t("report.labels.game")}},[r("span",{staticClass:"hint"},[t._v(t._s(t.$t("report.info.reportNews",{msg:"reportNews"})))]),t._v(" "),r("RadioGroup",{attrs:{type:"button"},model:{value:t.formItem.gameName,callback:function(e){t.$set(t.formItem,"gameName",e)},expression:"formItem.gameName"}},[r("Radio",{attrs:{label:"bf1"}},[r("span",[t._v(t._s(t.$t("report.info.bf1",{msg:"bf1"})))])]),t._v(" "),r("Radio",{attrs:{label:"bfv"}},[r("span",[t._v(t._s(t.$t("report.info.bfv",{msg:"bfv"})))])])],1)],1),t._v(" "),r("FormItem",{attrs:{label:t.$t("report.labels.hackerId")}},[r("span",{staticClass:"hint"},[t._v(t._s(t.$t("report.info.idNotion1",{msg:"idNotion1"})))]),t._v(" "),r("span",{staticClass:"hint"},[t._v(t._s(t.$t("report.info.idNotion2",{msg:"idNotion2"})))]),t._v(" "),r("p",{staticStyle:{"font-size":"2rem"}},[t._v(t._s(t.formItem.originId))]),t._v(" "),r("Input",{attrs:{placeholder:t.$t("report.info.onlyOneId")},model:{value:t.formItem.originId,callback:function(e){t.$set(t.formItem,"originId",e)},expression:"formItem.originId"}})],1),t._v(" "),r("FormItem",{attrs:{label:t.$t("report.labels.cheatMethod")}},[r("CheckboxGroup",{model:{value:t.formItem.checkbox,callback:function(e){t.$set(t.formItem,"checkbox",e)},expression:"formItem.checkbox"}},t._l(t.cheatMethodsGlossary,(function(e){return r("Checkbox",{key:e.value,attrs:{label:e.value}},[t._v("\n              "+t._s(t.$t("cheatMethods."+e.value))+"\n            ")])})),1)],1),t._v(" "),r("FormItem",{attrs:{label:t.$t("detail.info.videoLink")}},[r("Alert",{attrs:{type:"warning"}},[t._v("\n            "+t._s(t.$t("report.info.uploadManual1",{msg:"uploadManual1"}))+" "),r("a",{attrs:{target:"_blank",href:"https://streamable.com/"}},[t._v("https://streamable.com/")]),t._v("，"+t._s(t.$t("report.info.uploadManual2",{msg:"uploadManual2"}))+"\n          ")]),t._v(" "),r("span",{staticClass:"hint"},[t._v(t._s(t.$t("report.info.uploadManual3",{msg:"uploadManual3"})))]),t._v(" "),r("Input",{attrs:{placeholder:t.$t("report.info.required")},model:{value:t.formItem.bilibiliLink,callback:function(e){t.$set(t.formItem,"bilibiliLink",e)},expression:"formItem.bilibiliLink"}})],1),t._v(" "),r("FormItem",{attrs:{label:t.$t("report.labels.description")}},[r("Alert",{attrs:{type:"warning"}},[t._v("\n            "+t._s(t.$t("report.info.uploadPic1",{msg:"uploadPic1"}))+"\n          ")]),t._v(" "),r("Alert",{attrs:{type:"warning"}},[t._v("\n            "+t._s(t.$t("report.info.uploadPic2",{msg:"uploadPic2"}))),r("a",{attrs:{target:"_blank",href:"https://sm.ms"}},[t._v("https://sm.ms")]),t._v("，"+t._s(t.$t("report.info.uploadPic3",{msg:"uploadPic3"}))+"\n          ")]),t._v(" "),r("span",{staticClass:"hint"},[t._v(t._s(t.$t("report.info.uploadPic4",{msg:"uploadPic4"})))]),t._v(" "),r("Misc",{attrs:{content:t.$t("report.info.description")},on:{change:t.handleMiscChange}})],1),t._v(" "),r("FormItem",{attrs:{label:t.$t("report.info.captcha")}},[r("Input",{attrs:{type:"text",placeholder:t.$t("report.info.captcha")},model:{value:t.formItem.captcha,callback:function(e){t.$set(t.formItem,"captcha",e)},expression:"formItem.captcha"}}),t._v(" "),r("img",{ref:"captcha"}),t._v(" "),r("a",{ref:"reCaptcha",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.refreshCaptcha(e)}}},[t._v("\n            "+t._s(t.$t("report.info.getCaptcha",{msg:"getCaptcha"}))+"\n          ")])],1),t._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:t.doReport}},[t._v(t._s(t.$t("report.info.report",{msg:"report"})))])],1),t._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:t.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:""}})],1)],1)])}),[],!1,null,null,null);e.default=h.exports}}]);