(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)i=o[d],r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={1:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/datepicker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([3,0]),n()})({3:function(t,e,n){t.exports=n("Vtdi")},"7Bb5":function(t,e,n){"use strict";var a=n("9/6w"),r=n.n(a);r.a},"9/6w":function(t,e,n){},EDI0:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var a=n("Kw5r"),r=(n("D66Q"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],attrs:{type:"date",readonly:""},domProps:{value:t.startDate},on:{click:function(e){t.show=!0},input:function(e){e.target.composing||(t.startDate=e.target.value)}}}),t._v("\n  -\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],attrs:{type:"date",readonly:""},domProps:{value:t.endDate},on:{click:function(e){t.show=!0},input:function(e){e.target.composing||(t.endDate=e.target.value)}}}),n("DatePicker",{attrs:{restday:t.restday,workday:t.workday,display:t.show,custom:t.data,autoComplete:""},on:{select:t.select,cancel:t.cancel,selectDisabled:t.selectErr,viewport:t.viewport}})],1)}),s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrap",class:{hide:!t.display},on:{touchstart:function(e){if(e.target!==e.currentTarget)return null;t.$emit("cancel")}}},[n("div",{staticClass:"content"},[n("header",[n("a",{staticClass:"left",on:{touchstart:function(e){t.$emit("cancel")}}},[t._v("取消")]),n("strong",[t._v("选择日期")]),t.autoComplete?t._e():n("a",{staticClass:"right",on:{touchstart:t.confirm}},[t._v("确认")])]),n("div",{staticClass:"week-text"},t._l(t.weekTexts,function(e,a){return n("span",{key:a,style:{color:t.mondayFirst?5==a||6==a?"tomato":"":0==a||6==a?"tomato":""}},[t._v(t._s(e))])})),n("main",t._l(t.months,function(e,a){return n("section",{key:a,staticClass:"aki-month",attrs:{"data-date":new Date(e.year,Number(e.month)-1),"data-year":e.year,"data-month":e.month}},[n("header",[t._v(t._s(e.year)+"年 "+t._s(e.month)+"月")]),n("div",{staticClass:"day-wrap"},t._l(e.days,function(e,a){return n("div",{key:a,staticClass:"day",class:{disabled:e.disabled,active:e.active,select:e.begin||e.end},style:{"background-color":e.custom&&e.custom.bgcolor},on:{click:function(n){t.selectOne(e)}}},[n("span",[t._v(t._s(e.begin?t.beginningText:e.end?t.endText:" "))]),n("span",{staticClass:"number",class:{restday:e.restday,rest:e.rest,workday:e.workday}},[t._v(t._s(e.text))]),e.custom?n("span",{class:{rest:e.custom.highlight}},[t._v(t._s(e.custom.text||" "))]):n("span",[t._v(" ")])])}))])}))])])},o=[],c=n("a94B"),u=(n("KKXr"),n("k5N+")),l=(n("HEwt"),n("rGqo"),n("INYr"),n("xfY5"),n("xmWZ")),d=n("qpph"),f=function(){function t(){Object(l["a"])(this,t)}return Object(d["a"])(t,[{key:"year",get:function(){return(new Date).getFullYear()}},{key:"month",get:function(){return(new Date).getMonth()+1}},{key:"day",get:function(){return(new Date).getDate()}},{key:"date",get:function(){return"".concat(this.year,"-").concat(this.month,"-").concat(this.day)}}]),t}(),h={props:{single:{type:Boolean,default:function(){return!1}},autoComplete:{type:Boolean,default:function(){return!1}},display:{type:Boolean,default:function(){return!1}},mondayFirst:{type:Boolean,default:function(){return!1}},reverseSelect:{type:Boolean,default:function(){return!1}},restday:{type:Array,default:function(){return[]}},workday:{type:Array,default:function(){return[]}},displayRange:{type:Number,default:function(){return 13}},displayRangeStart:{type:String,default:function(){return(new f).date}},selectRangeStart:{type:String,default:function(){return(new f).date}},selectRangeEnd:{type:String,default:function(){return"9999-99-99"}},custom:{type:Array,default:function(){return[]}},beginningText:{type:String,default:function(){return"入住"}},endText:{type:String,default:function(){return"离店"}}},data:function(){return{months:[],firstTime:!0,firstSelectDay:{},lastSelectDay:{},rangeList:[],customIndex:0,range:[],doms:[],observer:null}},computed:{weekTexts:function(){var t=["日","一","二","三","四","五","六"];return this.mondayFirst&&t.push(t.shift()),t},$date:function(){return new f},mIndexBegin:function(){var t=this;return this.months.findIndex(function(e){return e.year===t.firstSelectDay.year&&e.month===t.firstSelectDay.month})},mIndexEnd:function(){var t=this;return this.months.findIndex(function(e){return e.year===t.lastSelectDay.year&&e.month===t.lastSelectDay.month})}},watch:{restday:function(){var t=this,e=this;this.restday.length&&this.deconstruction(function(n){t.restday.forEach(function(t){var a=new Date(t),r=[a.getFullYear(),a.getMonth()+1,a.getDate()],s=r[0],i=r[1],o=r[2];s===n.year&&i===n.month&&o===n.day&&(e.$set(n,"rest",!0),e.$set(n,"restday",!0))})})},workday:function(){var t=this,e=this;this.workday.length&&this.deconstruction(function(n){t.workday.forEach(function(t){var a=new Date(t),r=[a.getFullYear(),a.getMonth()+1,a.getDate()],s=r[0],i=r[1],o=r[2];s===n.year&&i===n.month&&o===n.day&&(e.$set(n,"rest",!1),e.$set(n,"workday",!0))})})},custom:function(){this.setcustom()},months:function(){this.doms=Array.from(document.querySelectorAll(".aki-month"))},display:function(t){var e=this;t&&this.doms.forEach(function(t){return e.observer.observe(t)})}},created:function(){for(var t=this,e=[],n=this.displayRangeStart.split("-").map(Number),a=Object(u["a"])(n,2),r=a[0],s=a[1],i=this.selectRangeStart.split("-").map(Number),o=Object(u["a"])(i,3),c=o[0],l=o[1],d=o[2],f=this.selectRangeEnd.split("-").map(Number),h=Object(u["a"])(f,3),m=h[0],y=h[1],g=h[2],p=r,v=s,b=0,D=0;D<this.displayRange;D++){s+D>12?(p=r+1,v=s+D-12):v=s+D;var w=[],S=new Date(p,v-1,1).getDay();this.mondayFirst&&(S=0===S?6:S-1);for(var x=0;x<S;x++)b++,w.push({});for(var T=new Date(p,v,0).getDate(),k=function(e){var n={};n.year=p,n.month=v,n.day=e,n.date="".concat(p,"-").concat(v,"-").concat(e),n.odate="".concat(p,"-").concat(v>9?v:"0"+v,"-").concat(e>9?e:"0"+e),n.text=p===t.$date.year&&v===t.$date.month&&e===t.$date.day?"今天":e;var a=new Date(p,v-1,e).getDay(),r=6===a||0===a;p<c||p>m?n.disabled=!0:p===c?v<l||v>y?n.disabled=!0:v===l?e<d||e>g?n.disabled=!0:(n.rest=e>d&&r,e===d&&(t.customIndex=b)):n.rest=r:n.rest=r,t.restday.length&&t.restday.forEach(function(t){t===n.date&&(n.restday=n.rest=!0)}),t.workday.length&&t.workday.forEach(function(t){t===n.date&&(n.workday=!0,n.rest=!1)}),b++,w.push(n)},$=1;$<=T;$++)k($);e.push({year:p,month:v,days:w})}this.months=e,this.setcustom();try{this.observer=new IntersectionObserver(function(e){e.forEach(function(e){if(e.intersectionRatio<=0)return!1;var n=e.target.dataset,a=n.year,r=n.month,s=n.date;t.$emit("viewport",{year:a,month:r,date:s})})})}catch(t){throw t}},methods:{selectOne:function(t){var e=this;if(!t.text)return!1;var n=t.disabled,a=t.custom;if(n)return!1;if(a&&a.disabled&&this.firstTime)return this.$emit("selectDisabled",t),!1;if(this.single)this.$set(this.lastSelectDay,"begin",!1),this.firstSelectDay=t,this.$set(t,"begin",!0),this.lastSelectDay=this.firstSelectDay,this.confirm();else if(this.firstTime){if(this.firstTime=!1,this.mIndexBegin>-1&&this.mIndexEnd>-1)for(var r=this.mIndexBegin;r<=this.mIndexEnd;r++)this.months[r].days.forEach(function(t){e.getTimestamp(t)===e.getTimestamp(e.firstSelectDay)&&e.$set(t,"begin",!1),e.getTimestamp(t)>e.getTimestamp(e.firstSelectDay)&&e.getTimestamp(t)<e.getTimestamp(e.lastSelectDay)&&e.$set(t,"active",!1),e.getTimestamp(t)===e.getTimestamp(e.lastSelectDay)&&e.$set(t,"end",!1)});this.firstSelectDay=t,this.$set(t,"begin",!0)}else{if(this.getTimestamp(t)===this.getTimestamp(this.firstSelectDay))return this.firstTime=!0,this.$set(t,"begin",!1),this.firstSelectDay={},!1;if(this.getTimestamp(t)<this.getTimestamp(this.firstSelectDay))if(this.firstTime=!0,this.reverseSelect){var s=this.firstSelectDay;this.lastSelectDay=s,this.firstSelectDay=t,this.chooseRange().then(function(t){var n=t.range,a=t.activeDays;e.firstTime=!0,e.$set(s,"begin",!1),e.$set(e.firstSelectDay,"begin",!0),e.$set(e.lastSelectDay,"end",!0),a.forEach(function(t){return e.$set(t,"active",!0)}),e.range=n,e.autoComplete&&e.confirm()}).catch(function(t){e.firstTime=!1,e.firstSelectDay=s,e.lastSelectDay={},e.$emit("selectDisabled",t)})}else this.$set(this.firstSelectDay,"begin",!1),this.$set(t,"begin",!0),this.firstSelectDay=t,this.firstTime=!1;else this.lastSelectDay=t,this.chooseRange().then(function(n){var a=n.range,r=n.activeDays;e.firstTime=!0,e.$set(t,"end",!0),r.forEach(function(t){return e.$set(t,"active",!0)}),e.range=a,e.autoComplete&&e.confirm()}).catch(function(t){e.firstTime=!1,e.$emit("selectDisabled",t)})}},getTimestamp:function(t){return new Date(t.year,t.month-1,t.day).getTime()},chooseRange:function(){var t=this;return new Promise(function(e,n){t.mIndexBegin>-1&&t.mIndexEnd>-1?function(){for(var a=[],r=[],s=t.mIndexBegin;s<=t.mIndexEnd;s++)a=a.concat(t.months[s].days.filter(function(e){if(t.getTimestamp(e)>t.getTimestamp(t.firstSelectDay)&&t.getTimestamp(e)<t.getTimestamp(t.lastSelectDay)){if(!e.custom||!e.custom.disabled)return r.push(e),e;n(e)}}));e({range:a,activeDays:r})}():e(new Array)})},confirm:function(){this.$emit("select",{start:this.firstSelectDay,end:this.lastSelectDay,range:this.range})},deconstruction:function(t){this.months.forEach(function(e){e.days.forEach(function(e){t(e)})})},setcustom:function(){if(this.custom.length){var t=[];this.months.forEach(function(e){return t=t.concat(e.days)});for(var e=this.customIndex,n=0;n<this.custom.length;e++,n++){var a=t[e],r=this.custom[n];if(a.text&&r){var s=Object(c["a"])(r);if("string"===s)this.$set(a,"custom",{text:r});else{if("object"!==s)throw"custom数组每项的类型应该是String或Object，但是得到的是".concat(s);this.$set(a,"custom",r)}}}}}}},m=h,y=(n("7Bb5"),n("KHd+")),g=Object(y["a"])(m,i,o,!1,null,"e480071a",null),p=g.exports,v=n("XJYT"),b={components:{DatePicker:p},data:function(){return{startDate:"",endDate:"",restday:[],workday:["2018-9-29","2018-9-30"],data:["￥1300","￥1345",{highlight:!0,text:"￥999"}],show:!1}},methods:{select:function(t){var e=t.start,n=t.end,a=t.range;this.startDate=e.odate,this.endDate=n.odate,console.log("range",a),this.show=!1},cancel:function(){this.show=!1},selectErr:function(t){console.log("date",t),Object(v["Message"])({message:"无法选择该范围：".concat(t.date,"为").concat(t.custom.dec),type:"error",duration:1e4})},viewport:function(t){var e=t.year,n=t.month;t.date;console.log("现在出现在视线内的是：","".concat(e,"-").concat(n))}},created:function(){var t=this;setTimeout(function(){t.workday=["2018-8-25","2018-8-26","2018-8-27"],t.restday=["2018-8-22","2018-8-23","2018-8-24"],t.data=["￥1999",{text:"￥2018",bgcolor:"lightgreen"},"","","","",{highlight:!0,text:"￥666",bgcolor:"gold"},{highlight:!0,text:"￥888"},"","",{disabled:!0,bgcolor:"red",dec:"正在维修"}],setTimeout(function(){t.workday=["2018-8-25","2018-8-26","2018-8-27"],t.restday=["2018-8-22","2018-8-23","2018-8-24"],t.data=["￥1922",{text:"￥2018",bgcolor:"lightgreen"},"","","",{highlight:!0,text:"￥666",bgcolor:"gold"},{highlight:!0,text:"￥888"},"","",{disabled:!0,bgcolor:"red",dec:"正在维修"}]},2e3)},2e3)}},D=b,w=(n("ZL7j"),Object(y["a"])(D,r,s,!1,null,null,null)),S=w.exports;p.install=function(t){return t.component("AkiDate",p)};var x=p;a["default"].use(x),new a["default"]({render:function(t){return t(S)}}).$mount("#app")},ZL7j:function(t,e,n){"use strict";var a=n("EDI0"),r=n.n(a);r.a}});
//# sourceMappingURL=app.58738325.js.map