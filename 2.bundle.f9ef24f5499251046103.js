(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{44:function(t,e,a){"use strict";var o=a(45),s=a.n(o);e.default=s.a},45:function(t,e){},47:function(t,e,a){},53:function(t,e,a){"use strict";var o=a(69),s=a(44),n=(a(54),a(1)),r=Object(n.a)(s.default,o.a,o.b,!1,null,null,null);e.default=r.exports},54:function(t,e,a){"use strict";a(47)},69:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return s}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("Divider",[t._v(t._s(t.$t("home.bulletin.title")))]),t._v(" "),a("div",[a("b",[t._v(t._s(t.$t("home.bulletin.webDev"))+":")]),t._v(" "),a("a",{attrs:{href:"https://mygoare.com"}},[t._v("mygoare")]),a("br"),t._v(" "),a("b",[t._v(t._s(t.$t("home.bulletin.bfbanAppD"))+":")]),t._v(" "),a("a",{attrs:{href:"https://app.bfban.com/public/www/"}},[t._v("cabbagelol")]),a("br"),t._v(" "),a("b",[t._v(t._s(t.$t("home.bulletin.japCon"))+":")]),t._v(" "),a("a",{attrs:{href:"https://www.youtube.com/channel/UCptnZeaSNaurVVy9UMWzI6w"}},[t._v("RiseJack")]),a("br"),t._v(" "),a("b",[t._v(t._s(t.$t("home.bulletin.engCon"))+":")]),t._v(" "),a("a",{attrs:{href:"https://live.bilibili.com/591314"}},[t._v("___4Tr1")]),a("br"),t._v(" "),a("b",[t._v(t._s(t.$t("home.bulletin.domCost"))+":")]),t._v(" "),a("a",{attrs:{href:"https://space.bilibili.com/131470523"}},[t._v("【NFZ】BoomNextDoor")])])],1)},s=[]},70:function(t,e,a){"use strict";a.r(e);var o=a(53),s=a(3),n=a(2),r={data:function(){return{site:{},activities:[],manager:[{name:"",link:"",desc:""}]}},components:{Bulletin:o.default},methods:{handleStatus:s.j,handleGameName:s.k},created:function(){var t=this;Object(n.b)({method:"get",url:"/activity"}).then((function(e){var a=e.data;if(0===a.error){var o=a.data,s=o.registers,n=o.reports,r=o.verifies,i=o.number;n=_.each(n,(function(t,e,a){t.type="report"})),s=_.each(s,(function(t,e,a){t.type="register"})),r=_.each(r,(function(t,e,a){t.type="verify"}));var c=[].concat(r,n,s);c=_.sortBy(c,(function(t){return new Date(t.createDatetime).getTime()})).reverse(),t.activities=c,t.site=i}}))}},i=a(1),c=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Bulletin"),t._v(" "),a("div",{staticClass:"content"},[a("Divider",[t._v(t._s(t.$t("home.activity.title")))]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.$t("home.activity.description",{report:t.site.report,cheater:t.site.cheater}))}}),t._v(" "),a("table",[a("tbody",t._l(t.activities,(function(e){return a("tr",{key:e.id},[a("td",{attrs:{nowrap:""}},[e.createDatetime?a("Time",{attrs:{time:e.createDatetime}}):t._e()],1),t._v(" "),"report"===e.type?a("td",[a("span",[a("router-link",{attrs:{to:{name:"account",params:{uId:""+e.uId}}}},[t._v(t._s(e.username))]),t._v("\n                "+t._s(t.$t("home.activity.activities.report"))+"\n                "),a("Tag",[t._v("\n                  "+t._s(t.handleGameName(e.game,t.$i18n.locale))+"\n                ")]),t._v(" "),a("router-link",{attrs:{to:{name:"cheater",params:{game:""+e.game,ouid:""+e.originUserId}}}},[t._v(t._s(e.cheaterOriginId))])],1)]):t._e(),t._v(" "),"register"===e.type?a("td",[a("span",[a("router-link",{attrs:{to:{name:"account",params:{uId:""+e.uId}}}},[t._v(t._s(e.username))]),t._v("\n                "+t._s(t.$t("home.activity.activities.join"))+"\n              ")],1)]):t._e(),t._v(" "),"verify"===e.type?a("td",[a("span",[a("Tag",{attrs:{color:"success"}},[t._v(t._s(t.$t("home.activity.activities.admin")))]),t._v(" "),a("router-link",{attrs:{to:{name:"account",params:{uId:""+e.uId}}}},[t._v(t._s(e.username))]),t._v("\n                "+t._s(t.$t("home.activity.activities.mark"))+"\n                "),a("router-link",{attrs:{to:{name:"cheater",params:{ouid:""+e.originUserId}}}},[t._v(t._s(e.cheaterOriginId))]),t._v("\n                "+t._s(t.$t("home.activity.activities.as"))+"\n                "),a("Tag",{attrs:{color:"warning"}},[t._v("\n                  "+t._s(t.handleStatus(e.status,t.$i18n.locale))+"\n                ")])],1)]):t._e()])})),0)])],1),t._v(" "),a("div",{staticClass:"content"},[a("Divider",[t._v(t._s(t.$t("home.howToUse.title")))]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.$t("home.howToUse.description"))}}),t._v(" "),a("p"),t._v(" "),t._l(t.manager,(function(e){return a("p",{key:e.name},[e.link?a("a",{attrs:{target:"_blank",href:e.link}},[t._v(t._s(e.name))]):a("span",[t._v(t._s(e.name))])])})),t._v(" "),a("br"),t._v(" "),a("h2",[t._v(t._s(t.$t("home.howToUse.tools.main")))]),t._v(" "),a("div",{staticClass:"tools"},[a("p",[a("a",{attrs:{target:"_blank",href:"https://battlefieldtracker.com/"}},[t._v("\n            battlefieldtracker.com\n          ")]),t._v("\n          "+t._s(t.$t("home.howToUse.tools.description.bftracker"))+"\n        ")]),t._v(" "),a("p",[a("a",{attrs:{target:"_blank",href:"https://bf1.mygoare.com/"}},[t._v("\n            "+t._s(t.$t("home.howToUse.tools.name.report"))+"\n          ")]),t._v("\n          "+t._s(t.$t("home.howToUse.tools.description.report"))+"\n        ")]),t._v(" "),a("p",[a("a",{attrs:{target:"_blank",href:"https://www.247fairplay.com/"}},[t._v("\n            247fairplay\n          ")]),t._v("\n          "+t._s(t.$t("home.howToUse.tools.description.fairplay"))+"\n        ")]),t._v(" "),a("p",[a("a",{attrs:{target:"_blank",href:"https://www.notion.so/1-5-f348c539fd4f41a08878f274a37c7d81"}},[t._v("\n            "+t._s(t.$t("home.howToUse.tools.name.tracker"))+"\n          ")]),t._v("\n          "+t._s(t.$t("home.howToUse.tools.description.tracker"))+"\n        ")]),t._v(" "),a("p",[a("a",{attrs:{target:"_blank",href:"http://bfban.ys168.com/"}},[t._v("\n            "+t._s(t.$t("home.howToUse.tools.name.tools"))+"\n          ")]),t._v("\n          "+t._s(t.$t("home.howToUse.tools.description.tools"))+"\n        ")]),t._v(" "),a("p",[a("a",{attrs:{target:"_blank",href:"https://app.bfban.com/public/www/"}},[t._v("\n            "+t._s(t.$t("home.howToUse.tools.name.bfban"))+"\n          ")]),t._v("\n          "+t._s(t.$t("home.howToUse.tools.description.bfban"))+"\n        ")]),t._v(" "),a("p",[a("a",{attrs:{target:"_blank",href:"https://api.gametools.network/docs"}},[t._v("\n            "+t._s(t.$t("home.howToUse.tools.name.apiGametools"))+"\n          ")]),t._v("\n          "+t._s(t.$t("home.howToUse.tools.description.apiGametools"))+"\n        ")]),t._v(" "),a("p",[a("a",{attrs:{target:"_blank",href:"https://top.gg/bot/714524944783900794"}},[t._v("\n            "+t._s(t.$t("home.howToUse.tools.name.botGametools"))+"\n          ")]),t._v("\n          "+t._s(t.$t("home.howToUse.tools.description.botGametools"))+"\n        ")])]),t._v(" "),a("br"),t._v(" "),a("h2",[t._v(t._s(t.$t("home.howToUse.qqGroup")))]),t._v(" "),a("div",{staticClass:"tools"},[a("p",[a("a",{attrs:{target:"_blank",href:"https://discord.gg/2WecJJh"}},[t._v("\n            BoB NA Discord\n          ")]),t._v("\n          "+t._s(t.$t("home.howToUse.bfbanQq"))+"\n        ")])])],2)],1)}),[],!1,null,null,null);e.default=c.exports}}]);