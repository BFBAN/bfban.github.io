(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{42:function(e,t,r){e.exports=r(46)},43:function(e,t){function r(e,t,r,a,i,n,s){try{var o=e[n](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(a,i)}e.exports=function(e){return function(){var t=this,a=arguments;return new Promise((function(i,n){var s=e.apply(t,a);function o(e){r(s,i,n,o,c,"next",e)}function c(e){r(s,i,n,o,c,"throw",e)}o(void 0)}))}}},46:function(e,t,r){var a=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",n=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function o(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(e){o=function(e,t,r){return e[t]=r}}function c(e,t,r,a){var i=t&&t.prototype instanceof d?t:d,n=Object.create(i.prototype),s=new $(a||[]);return n._invoke=function(e,t,r){var a="suspendedStart";return function(i,n){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===i)throw n;return x()}for(r.method=i,r.arg=n;;){var s=r.delegate;if(s){var o=b(s,r);if(o){if(o===u)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=l(e,t,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}(e,r,s),n}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u={};function d(){}function h(){}function v(){}var f={};f[i]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(I([])));m&&m!==t&&r.call(m,i)&&(f=m);var _=v.prototype=d.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var a;this._invoke=function(i,n){function s(){return new t((function(a,s){!function a(i,n,s,o){var c=l(e[i],e,n);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,s,o)}),(function(e){a("throw",e,s,o)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return a("throw",e,s,o)}))}o(c.arg)}(i,n,a,s)}))}return a=a?a.then(s,s):s()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=l(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function I(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:x}}function x(){return{value:void 0,done:!0}}return h.prototype=_.constructor=v,v.constructor=h,h.displayName=o(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,o(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[n]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,a,i,n){void 0===n&&(n=Promise);var s=new y(c(t,r,a,i),n);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},g(_),o(_,s,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=I,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return s.type="throw",s.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],s=n.completion;if("root"===n.tryLoc)return a("end");if(n.tryLoc<=this.prev){var o=r.call(n,"catchLoc"),c=r.call(n,"finallyLoc");if(o&&c){if(this.prev<n.catchLoc)return a(n.catchLoc,!0);if(this.prev<n.finallyLoc)return a(n.finallyLoc)}else if(o){if(this.prev<n.catchLoc)return a(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return a(n.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=e,s.arg=t,n?(this.method="next",this.next=n.finallyLoc,u):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var i=a.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:I(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=a}catch(e){Function("r","regeneratorRuntime = r")(a)}},52:function(e,t,r){},68:function(e,t,r){"use strict";r(52)},75:function(e,t,r){"use strict";r.r(t);var a=r(42),i=r.n(a),n=r(43),s=r.n(n),o=r(2),c=r(3),l={data:function(){return{cheater:{originId:""},origins:[],games:[],timelineList:[],verify:{status:"1",checkbox:[],suggestion:""},spinShow:!0,idExist:!1,verifySpinShow:!1,reply:{cheaterId:"",userId:"",content:"",toFloor:"",toUserId:""},replySpinShow:!1,gameName:"",isCheaterExist:!0,replyModal:!1,cheatMethodsGlossary:c.a,updateUserInfospinShow:!1}},watch:{$route:"loadData"},created:function(){this.loadData()},updated:function(){new LazyLoad({})},methods:{loadData:function(){var e=this,t=this.$route.params.ouid;Object(o.b)({method:"get",url:"/cheaters/".concat(t)}).then((function(t){e.spinShow=!1;var r=t.data.data,a=r.cheater,i=r.games,n=r.origins,s=r.reports,o=r.verifies,l=r.confirms,u=r.replies;if(0===a.length)return e.isCheaterExist=!1,!1;e.isCheaterExist=!0,e.cheater=a[0],e.origins=_.sortBy(n,"createDatetime").reverse(),e.games=_.sortBy(i,"game"),s=_.each(s,(function(e,t,r){e.type="report"})),o=_.each(o,(function(e,t,r){e.type="verify"})),l=_.each(l,(function(e,t,r){e.type="confirm"})),u=_.each(u,(function(e,t,r){e.type="reply"})),s=_.each(s,(function(e){e.description=Object(c.g)(e.description),e.description=Object(c.l)(e.description)})),u=_.each(u,(function(e,t,r){e.content=Object(c.g)(e.content),e.content=Object(c.l)(e.content)}));var d=s.concat(o,l,u);d=_.sortBy(d,(function(e){return new Date(e.createDatetime).getTime()})),d=_.each(d,(function(e,t){e.floor=t+1})),e.timelineList=d}))},jumpToBookmark:function(e){var t=e.target.dataset.hash,r=document.querySelector(t),a=r.offsetParent.offsetTop+r.offsetParent.offsetParent.offsetTop+r.offsetParent.offsetParent.offsetParent.offsetTop-document.querySelector("header").offsetHeight;document.documentElement.scrollTop=a,r.setAttribute("style","background: rgba(255, 153, 1, 0.15)"),setTimeout((function(){r.setAttribute("style","transition: background 1s ease .5s;")}),100)},handleStatus:c.j,convertCheatMethods:c.e,doVerify:function(){var e=this;return s()(i.a.mark((function t(){var r,a,n,s,l,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.verify.status,a=e.verify.suggestion,n=e.verify.checkbox.join(","),s=e.cheater.originUserId,("1"!==r||""!==n)&&""!==a.trim()){t.next=7;break}return e.$Message.warning(e.$i18n.t("detail.messages.fillEverything")),t.abrupt("return",!1);case 7:return e.verifySpinShow=!0,t.next=10,Object(o.b)({method:"post",url:"/cheaters/status",data:{originUserId:s}});case 10:if(l=t.sent,!(u=l.data).error){t.next=15;break}return e.$Message.error(u.msg),t.abrupt("return",!1);case 15:if(0!==u.error||"1"!==u.status){t.next=19;break}if(confirm(e.$i18n.t("detail.messages.changeHacker",{code:Object(c.j)(r,e.$i18n.locale)}))){t.next=19;break}return e.verifySpinShow=!1,t.abrupt("return",!1);case 19:a=Object(c.i)(a),Object(o.b)({method:"post",url:"/cheaters/verify",data:{status:r,suggestion:a,cheatMethods:n,originUserId:s}}).then((function(t){e.verifySpinShow=!1;var r=t.data;if(0===t.data.error){e.verify.status="1",e.verify.suggestion="",e.verify.checkbox=[];var a=r.data,i=a.id,n=a.userId,s=a.createDatetime,o=a.status,l=a.suggestion,u=a.username,d=a.cheatMethods,h=a.privilege;e.cheater.status=o,e.timelineList.push({type:"verify",id:i,userId:n,createDatetime:Object(c.f)(s),status:"6"===o?"1":o,suggestion:l,cheatMethods:d,username:u,privilege:h}),e.$Message.success(e.$i18n.t("detail.messages.submitSuccess"))}else e.$Message.error("failed "+r.msg)}));case 21:case"end":return t.stop()}}),t)})))()},doConfirm:function(e){var t=this,r=e.target.dataset,a=r.userVerifyCheaterId,i=(r.userVerifyCheaterUsername,r.cheatMethods),n=this.$store.state.user.userId,s=this.$route.params.ouid;Object(o.b)({method:"post",url:"/cheaters/confirm",data:{userVerifyCheaterId:a,userId:n,originUserId:s,cheatMethods:i}}).then((function(e){var r=e.data;if(0===r.error){var s=r.data.createDatetime;t.cheater.status="1",t.timelineList.push({type:"confirm",userId:n,userVerifyCheaterId:a,createDatetime:Object(c.f)(s),cheatMethods:i,username:t.$store.state.user.username})}else t.$Message.warning(r.msg)}))},isSelf:function(e){var t=this.$store.state.user.userId;return parseInt(t)===parseInt(e)},handleReply:function(e){var t=e.target.dataset,r=t.floor,a=t.userId;this.reply.toFloor="undefined"===r?"":r,this.reply.toUserId="undefined"===a?"":a,this.replyModal=!0},cancelReply:function(){this.reply={}},doReply:function(){var e=this;this.replySpinShow=!0;var t=this.cheater.id,r=this.$store.state.user.userId,a=this.reply,i=a.toFloor,n=a.toUserId,s=this.cheater.originUserId,l=this.reply.content,u=void 0===l?"":l,d={cheaterId:t,userId:r,content:u=Object(c.i)(u),originUserId:s};i&&(d.toFloor=i),n&&(d.toUserId=n),Object(o.b)({method:"post",url:"/cheaters/reply",data:d}).then((function(t){e.replySpinShow=!1;var r=t.data;if(0===r.error){var a=r.data,i=a.createDatetime,n=a.content,s=a.status;e.$Message.success(e.$i18n.t("detail.messages.replySuccess")),e.cancelReply();var o=e.$store.state.user.username,l=e.$store.state.user.uId;e.timelineList.push({type:"reply",createDatetime:Object(c.f)(i),content:n,foo:o,fooUId:l,bar:"",barUId:""}),e.cheater.status=s}else e.$Message.error(r.msg)}))},handleCmdEnter:function(e,t){if((e.metaKey||e.ctrlKey)&&13==e.keyCode)switch(t){case"reply":this.doReply();break;case"verify":this.doVerify()}},updateCheaterInfo:function(e){var t=this;if(c.o.call(e.target,60),!Boolean(this.$store.state.user))return this.$Message.error(this.$i18n.t("detail.messages.signIn")),!1;this.updateUserInfospinShow=!0;var r=this.cheater.originUserId;Object(o.b)({method:"post",url:"/cheaters/updateCheaterInfo",data:{originUserId:r}}).then((function(e){t.updateUserInfospinShow=!1;var r=e.data;if(0===r.error){var a=r.data.origin,i=a.cheaterGameName,n=a.originUserId,s=a.avatarLink;t.cheater.originId=i,t.cheater.originUserId=n,t.cheater.avatarLink=s,t.origins.unshift(r.data.origin),t.$Message.success(t.$i18n.t("detail.messages.updateComplete"))}else t.$Message.error(r.msg)}))}},computed:{isVerified:function(){return this.verifies.length>0},isAdmin:function(){var e=this.$store.state.user,t=!!e&&"normal"!==e.userPrivilege;return Boolean(t)},isLogin:function(){return Boolean(this.$store.state.user)}}},u=(r(68),r(1)),d=Object(u.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"content"},[e.isCheaterExist?r("div",{staticStyle:{position:"relative"}},[r("div",{staticStyle:{display:"flex","flex-direction":"column",position:"relative"}},[r("span",{staticStyle:{"font-size":"1.6rem"}},[e._v("\n            "+e._s(e.cheater.originId)+"\n          ")]),e._v(" "),r("div",[r("Tag",{attrs:{color:"error"}},[e._v("\n              "+e._s(e.handleStatus(e.cheater.status,e.$i18n.locale))+"\n            ")]),e._v(" "),e.cheater.cheatMethods?r("Tag",{attrs:{color:"warning"}},[e._v("\n              "+e._s(e.convertCheatMethods(e.cheater.cheatMethods,e.$i18n.locale))+"\n            ")]):e._e()],1),e._v(" "),r("p",[r("span",[e._v("\n              "+e._s(e.$t("detail.info.viewTimes",{msg:"viewTimes"}))+"\n              "),r("span",{staticClass:"is-size-6"},[e._v(e._s(e.cheater.n||0))]),e._v("\n              次\n            ")]),e._v(" "),r("span",[e._v("\n                "+e._s(e.$t("detail.info.reply",{msg:"reply"}))+"\n                "),r("span",{staticClass:"is-size-6"},[e._v(e._s(e.cheater.commentsNum||0))]),e._v("\n                次\n            ")])]),e._v(" "),r("p",[r("span",[r("span",[e._v(e._s(e.$t("detail.info.firstReportTime",{msg:"firstReportTime"})))]),e._v(" "),r("span",{staticClass:"is-size-6"},[e.cheater.createDatetime?r("Time",{attrs:{time:e.cheater.createDatetime}}):e._e()],1)]),e._v(" "),r("span",[r("span",[e._v(e._s(e.$t("detail.info.recentUpdateTime",{msg:"recentUpdateTime"})))]),e._v(" "),r("span",{staticClass:"is-size-6"},[e.cheater.updateDatetime?r("Time",{attrs:{time:e.cheater.updateDatetime}}):e._e()],1)])]),e._v(" "),r("div",{staticStyle:{"margin-top":".4rem"}},[r("h2",[r("span",[e._v(e._s(e.$t("detail.info.reportedGames",{msg:"reportedGames"})))])]),e._v(" "),r("div",e._l(e.games,(function(t){return r("router-link",{key:t.game,attrs:{to:{name:"cheaters"}}},[e._v("\n                "+e._s(t.game)+"\n              ")])})),1)]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.cheater.originId,expression:"cheater.originId"}],staticStyle:{"margin-top":".4rem"}},[r("h2",[r("span",[e._v(e._s(e.$t("detail.info.gameScores",{msg:"gameScores"})))])]),e._v(" "),e._l(e.games,(function(t){return r("p",{key:t.game},[r("Tag",[e._v("\n                "+e._s(t.game)+"\n              ")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+t.game=="bf1",expression:"`${g.game}` === 'bf1'"}],attrs:{target:"_blank",href:"https://gametools.network/stats/pc/name/"+e.cheater.originId}},[e._v("\n                GameTools-Tracker\n              ")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+t.game=="bf1",expression:"`${g.game}` === 'bf1'"}],attrs:{target:"_blank",href:"https://battlefieldtracker.com/bf1/profile/pc/"+e.cheater.originId}},[e._v("\n                battlefieldtracker\n              ")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+t.game=="bfv",expression:"`${g.game}` === 'bfv'"}],attrs:{target:"_blank",href:"https://gametools.network/stats/pc/name/"+e.cheater.originId}},[e._v("\n                GameTools-Tracker\n              ")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+t.game=="bfv",expression:"`${g.game}` === 'bfv'"}],attrs:{target:"_blank",href:"https://battlefieldtracker.com/bfv/profile/origin/"+e.cheater.originId}},[e._v("\n                battlefieldtracker\n              ")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+t.game=="bf6",expression:"`${g.game}` === 'bf6'"}],attrs:{target:"_blank",href:"https://gametools.network/stats/pc/name/"+e.cheater.originId}},[e._v("\n                GameTools-Tracker\n              ")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+t.game=="bf6",expression:"`${g.game}` === 'bf6'"}],attrs:{target:"_blank",href:"https://battlefieldtracker.com/bf6/profile/origin/"+e.cheater.originId}},[e._v("\n                battlefieldtracker\n              ")]),e._v(" "),r("a",{attrs:{target:"_blank",href:"https://www.247fairplay.com/CheatDetector/"+e.cheater.originId}},[e._v("\n                247fairplay\n              ")])],1)})),e._v(" "),e.cheater.trackerShot?r("a",{attrs:{href:e.cheater.trackerShot,target:"_blank"}},[e._v("bf1tracker数据截图")]):e._e(),e._v(" "),e.cheater.trackerWeaponShot?r("a",{attrs:{href:e.cheater.trackerWeaponShot,target:"_blank"}},[e._v("bf1tracker武器截图")]):e._e(),e._v(" "),e.cheater.bf1statsShot?r("a",{attrs:{href:e.cheater.bf1statsShot,target:"_blank"}},[e._v("bf1stats数据截图")]):e._e()],2),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.cheater.avatarLink,expression:"cheater.avatarLink"}],staticStyle:{"margin-top":".4rem"}},[r("h2",[r("span",[e._v(e._s(e.$t("detail.info.originAvatar",{msg:"originAvatar"})))])]),e._v(" "),r("img",{attrs:{src:e.cheater.avatarLink,alt:"avatar",width:"208",height:"208"}})]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.origins.length,expression:"origins.length"}],staticStyle:{"margin-top":".4rem"}},[r("h2",[r("span",[e._v(e._s(e.$t("detail.info.historyID",{msg:"historyID"})))])]),e._v(" "),r("table",[r("thead",[r("tr",[r("td",[r("b",[e._v(e._s(e.$t("list.colums.updateTime")))])]),e._v(" "),r("td",[r("b",[e._v(e._s(e.$t("list.colums.playerId")))])])])]),e._v(" "),r("tbody",e._l(e.origins,(function(t){return r("tr",{key:t.id},[r("td",[r("Time",{attrs:{time:t.createDatetime}})],1),e._v(" "),r("td",[e._v(e._s(t.cheaterGameName))])])})),0)])]),e._v(" "),r("div",{staticStyle:{"margin-top":".4rem"}},[r("h2",[r("span",[e._v(e._s(e.$t("detail.info.dealRecord",{msg:"dealRecord"})))])]),e._v(" "),r("table",[r("thead",[r("tr",[r("td",[r("b",[e._v(e._s(e.$t("detail.info.operatingTime")))])]),e._v(" "),r("td",[r("b",[e._v(e._s(e.$t("detail.info.action")))])])])]),e._v(" "),r("tbody")])]),e._v(" "),r("div",{staticStyle:{"margin-top":".4rem"}},[r("p",{staticClass:"hint"},[e._v("\n              "+e._s(e.$t("detail.info.discription1",{msg:"discription1"}))+"\n              "),r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.updateCheaterInfo(t)}}},[r("span",[e._v(e._s(e.$t("detail.info.updateButton",{msg:"updateButton"})))])]),e._v("，\n              "),r("span",[e._v(e._s(e.$t("detail.info.discription2",{msg:"discription2"})))])]),e._v(" "),r("p",{staticClass:"hint"},[e._v("\n              "+e._s(e.$t("detail.info.discription3",{msg:"discription3"}))+"\n            ")]),e._v(" "),r("p",{staticClass:"hint"},[e._v("\n              "+e._s(e.$t("detail.info.discription4",{msg:"discription4"}))+"\n            ")])]),e._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:e.updateUserInfospinShow,expression:"updateUserInfospinShow"}],attrs:{size:"large",fix:""}})],1),e._v(" "),r("div",[r("h2",{staticStyle:{margin:"1rem 0"}},[e._v(e._s(e.$t("detail.info.timeLine",{msg:"timeLine"})))]),e._v(" "),e._l(e.timelineList,(function(t){return r("TimelineItem",{key:t.createDatetime,attrs:{pending:""}},["report"===t.type?r("div",{staticClass:"timeline-content"},[r("div",{staticClass:"timeline-time"},[r("Time",{attrs:{time:t.createDatetime}}),e._v(" "),r("router-link",{attrs:{to:{name:"account",params:{uId:""+t.uId}}}},["admin"===t.privilege?r("Tag",{attrs:{color:"success"}},[e._v("\n                    "+e._s(e.$t("detail.info.administrator",{msg:"administrator"}))+"\n                  ")]):e._e(),e._v(" "),r("b",[e._v(e._s(t.username))])],1),e._v(" "),e._v("\n                "+e._s(e.$t("detail.info.report",{msg:"report"}))+"\n\n                "),r("router-link",{attrs:{to:{name:"cheater",ouid:""+t.originUserId}}},[e._v("\n                  "+e._s(t.cheaterGameName)+"\n                ")]),e._v(" "),e._v("\n                "+e._s(e.$t("detail.info.inGame",{msg:"inGame"}))+"\n\n                "),r("router-link",{attrs:{to:{name:"cheaters",query:{game:""+t.game}}}},[e._v("\n                  "+e._s(t.game)+"\n                ")]),e._v(" "),e._v("\n\t\t\t\t"+e._s(e.$t("detail.info.gaming",{msg:"gaming"}))+"\n\n                "),r("b",[e._v("\n                  "+e._s(e.convertCheatMethods(t.cheatMethods||"",e.$i18n.locale))+"\n                ")])],1),e._v(" "),t.bilibiliLink?r("p",[r("Tag",{attrs:{color:"primary"}},[e._v("\n                  "+e._s(e.$t("detail.info.videoLink",{msg:"videoLink"}))+"\n                ")]),e._v(" "),r("a",{attrs:{href:t.bilibiliLink,target:"_blank"}},[e._v(e._s(t.bilibiliLink))])],1):e._e(),e._v(" "),t.description?r("div",{staticClass:"description",domProps:{innerHTML:e._s(t.description)}}):e._e(),e._v(" "),e.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+t.floor,"data-user-id":""+t.userId},on:{click:function(t){return t.preventDefault(),e.handleReply(t)}}},[e._v(e._s(e.$t("detail.info.reply",{msg:"reply"})))])]):e._e()]):e._e(),e._v(" "),"verify"===t.type?r("div",{staticClass:"timeline-content bookmark",attrs:{id:"user-verify-cheater-"+t.id}},[r("div",{staticClass:"timeline-time"},[t.createDatetime?r("Time",{attrs:{time:t.createDatetime}}):e._e(),e._v(" "),r("router-link",{attrs:{to:{name:"account",params:{uId:""+t.uId}}}},["admin"===t.privilege?r("Tag",{attrs:{color:"success"}},[e._v("\n                    "+e._s(e.$t("detail.info.administrator",{msg:"administrator"}))+"\n                  ")]):e._e(),e._v(" "),r("b",[e._v(e._s(t.username))])],1),e._v(" "),e._v("\n                "+e._s(e.$t("detail.info.judge",{msg:"judge"}))+"\n\n                "),r("Tag",{attrs:{color:"warning"}},[e._v("\n                  "+e._s(e.handleStatus(t.status,e.$i18n.locale))+"\n                ")]),e._v(" "),t.cheatMethods?r("span",[e._v("\n              ，\n              "+e._s(e.$t("detail.info.cheatMethod",{msg:"cheatMethod"}))+"\n\n              "),r("b",[e._v("\n                "+e._s(e.convertCheatMethods(t.cheatMethods||"",e.$i18n.locale))+"\n              ")])]):e._e()],1),e._v(" "),r("div",{staticClass:"description",domProps:{innerHTML:e._s(t.suggestion)}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.isAdmin&&"1"!==e.cheater.status&&"1"===t.status&&!e.isSelf(t.userId),expression:"isAdmin && cheater.status !== '1' && l.status === '1' && !isSelf(l.userId)"}]},[r("a",{attrs:{href:"#","data-user-verify-cheater-id":t.id,"data-cheat-methods":t.cheatMethods,"data-user-verify-cheater-username":t.username},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.doConfirm(t)}}},[r("Icon",{attrs:{type:"md-thumbs-up"}}),e._v(" "),e._v("\n                  "+e._s(e.$t("detail.info.agreeJudgement",{msg:"agreeJudgement"}))+"\n                ")],1)]),e._v(" "),e.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+t.floor,"data-user-id":""+t.userId},on:{click:function(t){return t.preventDefault(),e.handleReply(t)}}},[e._v(e._s(e.$t("detail.info.reply",{msg:"reply"})))])]):e._e()]):e._e(),e._v(" "),"confirm"===t.type?r("div",{staticClass:"timeline-content"},[r("div",{staticClass:"timeline-time"},[t.createDatetime?r("Time",{attrs:{time:t.createDatetime}}):e._e(),e._v(" "),r("router-link",{attrs:{to:{name:"account",params:{uId:""+t.uId}}}},["admin"===t.privilege?r("Tag",{attrs:{color:"success"}},[e._v("\n                    "+e._s(e.$t("detail.info.administrator",{msg:"administrator"}))+"\n                  ")]):e._e(),e._v(" "),r("b",[e._v(e._s(t.username))])],1),e._v(" "),e._v("\n                "+e._s(e.$t("detail.info.agreeWith",{msg:"agreeWith"}))+"\n                "),r("a",{attrs:{"data-hash":"#user-verify-cheater-"+t.userVerifyCheaterId},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.jumpToBookmark(t)}}},[e._v("\n                  # "+e._s(e.$t("detail.info.thisChoice",{msg:"thisChoice"}))+"\n                ")]),e._v(" "),e._v("\n                ，"+e._s(e.$t("detail.info.cheatMethod",{msg:"cheatMethod"}))+"\n\n                "),r("b",[e._v("\n                  "+e._s(e.convertCheatMethods(t.cheatMethods||"",e.$i18n.locale))+"\n                ")])],1),e._v(" "),e.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+t.floor,"data-user-id":""+t.userId},on:{click:function(t){return t.preventDefault(),e.handleReply(t)}}},[e._v(e._s(e.$t("detail.info.reply",{msg:"reply"})))])]):e._e()]):e._e(),e._v(" "),"reply"===t.type?r("div",{staticClass:"timeline-content"},[r("div",{staticClass:"timeline-time"},[t.createDatetime?r("Time",{attrs:{time:t.createDatetime}}):e._e(),e._v(" "),t.foo?r("router-link",{attrs:{to:{name:"account",params:{uId:""+t.fooUId}}}},["admin"===t.fooPrivilege?r("Tag",{attrs:{color:"success"}},[e._v("\n                    "+e._s(e.$t("detail.info.administrator",{msg:"administrator"}))+"\n                  ")]):e._e(),e._v(" "),r("b",[e._v(e._s(t.foo))])],1):e._e(),e._v("\n                "+e._s(e.$t("detail.info.reply",{msg:"reply"}))+"\n                "),t.bar?r("router-link",{attrs:{to:{name:"account",params:{uId:""+t.barUId}}}},["admin"===t.barPrivilege?r("Tag",{attrs:{color:"success"}},[e._v("\n                    "+e._s(e.$t("detail.info.administrator",{msg:"administrator"}))+"\n                  ")]):e._e(),e._v(" "),r("b",[e._v(e._s(t.bar))])],1):e._e()],1),e._v(" "),r("div",{staticClass:"description",domProps:{innerHTML:e._s(t.content)}}),e._v(" "),e.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+t.floor,"data-user-id":""+t.userId},on:{click:function(t){return t.preventDefault(),e.handleReply(t)}}},[e._v(e._s(e.$t("detail.info.reply",{msg:"reply"})))])]):e._e()]):e._e()])})),e._v(" "),r("Page",{staticClass:"page",attrs:{"page-size":e.limit,"show-total":"",current:e.page,total:e.total,size:"small"},on:{"on-change":e.handlePageChange}})],2),e._v(" "),e.isLogin?r("div",[r("p",{staticClass:"hint"},[r("span",[e._v(e._s(e.$t("detail.info.replyManual1",{msg:"replyManual1"})))]),r("a",{attrs:{href:"https://sm.ms/",target:"_blank"}},[r("span",[e._v(e._s(e.$t("detail.info.uploadPicButton",{msg:"uploadPicButton"})))])]),e._v("，"),r("span",[e._v(e._s(e.$t("detail.info.replyManual2",{msg:"replyManual2"})))])]),e._v(" "),r("Form",{staticStyle:{position:"relative"},attrs:{"label-width":80}},[r("p",[r("Input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:e.$t("detail.info.giveOpinion")},on:{"on-keydown":function(t){return e.handleCmdEnter(t,"reply")}},model:{value:e.reply.content,callback:function(t){e.$set(e.reply,"content",t)},expression:"reply.content"}})],1),e._v(" "),r("Button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.doReply(t)}}},[e._v(e._s(e.$t("detail.info.reply",{msg:"reply"})))]),e._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:e.replySpinShow,expression:"replySpinShow"}],attrs:{size:"large",fix:""}})],1)],1):e._e(),e._v(" "),"1"===e.cheater.status?r("div",[r("Divider")],1):e._e(),e._v(" "),r("p",{staticClass:"hint"},[e._v(e._s(e.$t("detail.info.replyManual3",{msg:"replyManual3"})))]),e._v(" "),r("p",{staticClass:"hint"},[e._v(e._s(e.$t("detail.info.appealManual1",{msg:"appealManual1"})))]),e._v(" "),e.isAdmin?r("div",[r("Divider",[e._v(e._s(e.$t("detail.info.adminConsole",{msg:"adminConsole"})))]),e._v(" "),r("p",{staticClass:"hint"},[e._v(e._s(e.$t("detail.info.adminManual1",{msg:"adminManual1"})))]),e._v(" "),r("p",{staticClass:"hint"},[e._v(e._s(e.$t("detail.info.adminManual2",{msg:"adminManual2"})))]),e._v(" "),r("h2",{staticStyle:{margin:"1rem 0"}},[e._v(e._s(e.$t("detail.info.judgement",{msg:"judgement"})))]),e._v(" "),r("Form",{ref:"verifyForm",staticStyle:{position:"relative"},attrs:{"label-width":80}},[r("FormItem",{attrs:{label:"Opinion"}},[r("Select",{model:{value:e.verify.status,callback:function(t){e.$set(e.verify,"status",t)},expression:"verify.status"}},[r("Option",{attrs:{value:"1"}},[e._v(e._s(e.$t("detail.info.choice1",{msg:"choice1"})))]),e._v(" "),r("Option",{attrs:{value:"2"}},[e._v(e._s(e.$t("detail.info.choice2",{msg:"choice2"})))]),e._v(" "),r("Option",{attrs:{value:"3"}},[e._v(e._s(e.$t("detail.info.choice3",{msg:"choice3"})))]),e._v(" "),r("Option",{attrs:{value:"4"}},[e._v(e._s(e.$t("detail.info.choice4",{msg:"choice4"})))])],1)],1),e._v(" "),r("FormItem",{directives:[{name:"show",rawName:"v-show",value:"1"===e.verify.status,expression:"verify.status === '1'"}],attrs:{label:"CheatMethod"}},[r("CheckboxGroup",{model:{value:e.verify.checkbox,callback:function(t){e.$set(e.verify,"checkbox",t)},expression:"verify.checkbox"}},e._l(e.cheatMethodsGlossary,(function(t){return r("Checkbox",{key:t.value,attrs:{label:t.value}},[e._v("\n                  "+e._s(e.$t("cheatMethods."+t.value))+"\n                ")])})),1)],1),e._v(" "),r("FormItem",{attrs:{label:"Reason"}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:e.$t("detail.info.writeSomething")},on:{"on-keydown":function(t){return e.handleCmdEnter(t,"verify")}},model:{value:e.verify.suggestion,callback:function(t){e.$set(e.verify,"suggestion",t)},expression:"verify.suggestion"}})],1),e._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.doVerify(t)}}},[e._v(e._s(e.$t("detail.info.commit",{msg:"commit"})))])],1),e._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:e.verifySpinShow,expression:"verifySpinShow"}],attrs:{size:"large",fix:""}})],1)],1):e._e(),e._v(" "),r("Modal",{attrs:{title:"Reply","ok-text":"Send","cancel-text":"Cancel"},on:{"on-ok":e.doReply,"on-cancel":e.cancelReply},model:{value:e.replyModal,callback:function(t){e.replyModal=t},expression:"replyModal"}},[e.isLogin?r("div",[r("Form",{ref:"replyForm",staticStyle:{position:"relative"},attrs:{"label-width":80}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"Say something"},on:{"on-keydown":function(t){return e.handleCmdEnter(t,"reply")}},model:{value:e.reply.content,callback:function(t){e.$set(e.reply,"content",t)},expression:"reply.content"}})],1)],1):r("div",[e._v(e._s(e.$t("detail.info.replyManual4",{msg:"replyManual4"})))])]),e._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:e.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:""}})],1):r("div",[e._v("404 不存在")])])])}),[],!1,null,null,null);t.default=d.exports}}]);