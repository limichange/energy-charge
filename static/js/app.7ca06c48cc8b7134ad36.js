webpackJsonp([1],{"07PK":function(e,t,a){"use strict";var n=a("72A5");t.a={name:"main",components:{Num:n.a},data:function(){return{pickerOptions:{shortcuts:[{text:"前两个月",onClick:function(e){var t=new Date;t.setMonth(t.getMonth()),t.setDate(1),t.setTime(t.getTime()-864e5);var a=new Date;a.setDate(1),a.setMonth(t.getMonth()-1);var n=new Date;n.setDate(t.getDate()),n.setMonth(t.getMonth()),e.$emit("pick",[a,n])}}]},airConditionerFare:0,allLog:0,fareDate:[new Date,new Date],roomNum:"0",fare:0,allPeopleDay:0,roomInfo:[],keyArray:["A","B","C","D","E","F","G","H"]}},watch:{roomInfo:{deep:!0,handler:function(e){var t=this,a=0,n=0;e.forEach(function(e){n+=t.toDay(e.daterange)*e.peopleNum,a+=.5*(e.log2-e.log1)}),this.allPeopleDay=n,this.airConditionerFare=a}}},methods:{toDay:function(e){return(e[1]-e[0])/60/1e3/60/24+1},addRoomInfo:function(){this.roomInfo.push({id:this.roomInfo.length,daterange:[new Date,new Date],peopleNum:1,log1:0,log2:0})}}}},"6TSP":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("el-form",{staticClass:"dynamic",attrs:{"label-width":"130px"}},[a("el-form-item",{attrs:{label:""}},[a("h2",[e._v("房屋总信息")]),e._v(" "),a("span",[e._v("总费用 "),a("num",{attrs:{val:parseInt(e.fare)}})],1),e._v(" "),a("span",[e._v("空调费用 "),a("num",{attrs:{val:e.airConditionerFare}})],1),e._v(" "),a("span",[e._v("公摊费用 "),a("num",{attrs:{val:e.fare-e.airConditionerFare}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"电费",rules:[{required:!0,message:"请输入电费",trigger:"blur"}]}},[a("el-input",{attrs:{type:"number"},model:{value:e.fare,callback:function(t){e.fare=t},expression:"fare"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电费日期",rules:[{required:!0,message:"请输入日期",trigger:"blur"}]}},[a("el-date-picker",{attrs:{"picker-options":e.pickerOptions,type:"daterange",placeholder:"选择日期范围"},model:{value:e.fareDate,callback:function(t){e.fareDate=t},expression:"fareDate"}})],1),e._v(" "),e._l(e.roomInfo,function(t,n){return[a("el-form-item",{key:t.id,attrs:{label:""}},[a("h1",[e._v(e._s(e.keyArray[n]+"房间"))]),e._v(" "),a("span",[e._v("空调费用: "),a("num",{attrs:{val:(t.log2-t.log1)/2}}),e._v(" 元")],1),e._v(" "),a("span",[e._v("公摊费用: "),a("num",{attrs:{val:e.toDay(t.daterange)*t.peopleNum*((e.fare-e.airConditionerFare)/e.allPeopleDay)}}),e._v(" 元")],1),e._v(" "),a("span",[e._v("总费用: "),a("num",{attrs:{val:e.toDay(t.daterange)*((e.fare-e.airConditionerFare)/e.allPeopleDay)+(t.log2-t.log1)/2}}),e._v(" 元")],1)]),e._v(" "),a("el-form-item",{key:t.id,attrs:{label:"居住日期"}},[a("el-date-picker",{attrs:{"picker-options":e.pickerOptions,type:"daterange",placeholder:"选择日期范围"},model:{value:t.daterange,callback:function(a){e.$set(t,"daterange",a)},expression:"room.daterange"}})],1),e._v(" "),a("el-form-item",{key:t.id,attrs:{label:"居住人数"}},[a("el-input",{attrs:{type:"number"},model:{value:t.peopleNum,callback:function(a){e.$set(t,"peopleNum",a)},expression:"room.peopleNum"}})],1),e._v(" "),a("el-form-item",{key:t.id,attrs:{label:"上次空调度数"}},[a("el-input",{attrs:{type:"number"},model:{value:t.log1,callback:function(a){e.$set(t,"log1",a)},expression:"room.log1"}})],1),e._v(" "),a("el-form-item",{key:t.id,attrs:{label:"本次空调度数"}},[a("el-input",{attrs:{type:"number"},model:{value:t.log2,callback:function(a){e.$set(t,"log2",a)},expression:"room.log2"}})],1)]}),e._v(" "),a("el-form-item",[a("el-button",{on:{click:e.addRoomInfo}},[e._v("新增房间信息")])],1)],2)],1)},r=[],o={render:n,staticRenderFns:r};t.a=o},"6tlB":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",[e._v(e._s(e.val.toFixed(2)||0))])},r=[],o={render:n,staticRenderFns:r};t.a=o},"72A5":function(e,t,a){"use strict";var n=a("qKmV"),r=a("6tlB"),o=a("VU/8"),l=o(n.a,r.a,!1,null,null,null);t.a=l.exports},M93x:function(e,t,a){"use strict";function n(e){a("URFr")}var r=a("xJD8"),o=a("aE6e"),l=a("VU/8"),i=n,s=l(r.a,o.a,!1,i,null,null);t.a=s.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r=a("M93x"),o=a("YaEn"),l=a("zL8q"),i=a.n(l),s=a("q8zI");a.n(s);n.default.use(i.a),new n.default({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},URFr:function(e,t){},YaEn:function(e,t,a){"use strict";var n=a("7+uW"),r=a("/ocq"),o=a("gORT");n.default.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Hello",component:o.a}]})},aE6e:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],o={render:n,staticRenderFns:r};t.a=o},gORT:function(e,t,a){"use strict";function n(e){a("vD11")}var r=a("07PK"),o=a("6TSP"),l=a("VU/8"),i=n,s=l(r.a,o.a,!1,i,"data-v-2bb5e89a",null);t.a=s.exports},q8zI:function(e,t){},qKmV:function(e,t,a){"use strict";t.a={name:"num",props:{val:Number}}},vD11:function(e,t){},xJD8:function(e,t,a){"use strict";t.a={name:"app"}}},["NHnr"]);