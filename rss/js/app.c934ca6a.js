(function(e){function t(t){for(var r,o,l=t[0],s=t[1],c=t[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-158afe74":"1c38abb4"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-158afe74":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-158afe74":"94d4888c"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===r||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/rss/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"029a":function(e,t,n){},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"scroll-target"}},[n("v-app-bar",{attrs:{app:"",color:"primary",light:""}},["home"===e.$route.name?n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}):n("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){return e.$router.back()}}},[n("v-icon",[e._v("mdi-arrow-left")])],1),n("v-toolbar-title",[e._v("AkiReader")]),n("v-spacer"),"item"===e.$route.name?n("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){return e.linkTo(e.$route.params.link)}}},[n("v-icon",[e._v("mdi-link")])],1):n("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){return e.$store.dispatch("loadNews")}}},[n("v-icon",[e._v("mdi-refresh")])],1)],1),n("Menu",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),n("v-content",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}]},[n("router-view",{on:{close:function(t){e.drawer=!1}}})],1),n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.scrollTop>520,expression:"scrollTop > 520"}],attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"primary"},on:{click:function(t){return e.$vuetify.goTo(0)}}},[n("v-icon",[e._v("mdi-chevron-up")])],1)],1),n("v-snackbar",{model:{value:e.$store.state.snackbar,callback:function(t){e.$set(e.$store.state,"snackbar",t)},expression:"$store.state.snackbar"}},[e._v(" "+e._s(e.$store.state.error)+" ")])],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("v-subheader",[e._v("订阅列表")]),e._l(e.currFeeds,(function(t,r){return n("v-list-item",{key:r,on:{click:function(n){e.show=!1,e.$store.dispatch("loadNews",t.feedUrl)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),n("v-subheader",[e._v("工具")]),n("v-list-item",{on:{click:e.importFile}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-file-import")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("导入")])],1)],1),n("v-list-item",{on:{click:e.exportFile}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-file-export")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("导出")])],1)],1),n("v-list-item",{on:{touchstart:e.godMode}}),n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",accept:"text/xml"},on:{change:e.selectedFile}})],2)},l=[],s=(n("99af"),n("4de4"),n("7db0"),n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("96cf"),n("7e6d")),c=n.n(s),u=n("db3a"),d=n.n(u),f=n("750b"),p={model:{event:"toggle",prop:"visible"},props:{visible:{type:Boolean,default:!1}},setup:function(e,t){var n=Object(f["c"])(!1);Object(f["d"])((function(){return e.visible}),(function(e){return n.value=e})),Object(f["d"])(n,(function(e){return t.emit("toggle",e)}));var r=[{title:"阮一峰的博客",feedUrl:"http://www.ruanyifeng.com/blog/atom.xml"},{title:"IT之家",feedUrl:"https://www.ithome.com/rss/"},{title:"前端艺术家",feedUrl:"https://rsshub.app/jskou/0"},{title:"飞冰早报",feedUrl:"https://rsshub.app/jskou/1"}],o=localStorage.getItem("feed")?JSON.parse(localStorage.getItem("feed")):r,a=Object(f["c"])(o),i=function(){localStorage.setItem("feed",JSON.stringify(a.value))},l=function(){t.refs.file.click()},s=function(e){var t=e.target,n=t.files[0],r=new FileReader;r.onload=function(e){c()(e.target.result,(function(e,t){a.value.length>0&&(t=t.filter((function(e){return!a.value.find((function(t){return t.feedUrl===e.feedUrl}))}))),a.value=a.value.concat(t),i()}))},r.readAsText(n)},u=function(){var e,t,n,r,o,i;return regeneratorRuntime.async((function(l){while(1)switch(l.prev=l.next){case 0:e=window.prompt("Title")||"AkiReader",t={title:e,dateCreated:new Date,ownerName:"AkiReader"},n=a.value.map((function(e){return{text:e.title,title:e.title,xmlUrl:e.feedUrl,htmlUrl:e.url||"",type:e.feedType||"rss"}})),r=d()(t,n),o=URL.createObjectURL(new Blob([r],{type:"text/xml"})),i=document.createElement("a"),i.href=o,i.download="opml",i.style.display="none",document.body.appendChild(i),i.click();case 11:case"end":return l.stop()}}))},p=Object(f["c"])(0),v=null,m=[{title:"无壳海兔",feedUrl:"https://rsshub.app/t66y/2/2"},{title:"大嘴鸥",feedUrl:"https://rsshub.app/t66y/4/2"},{title:"美丽花",feedUrl:"https://rsshub.app/t66y/5/2"},{title:"高傲雉鸡",feedUrl:"https://rsshub.app/t66y/7/2"},{title:"新时代",feedUrl:"https://rsshub.app/t66y/8/2"},{title:"达盖尔",feedUrl:"https://rsshub.app/t66y/16/2"},{title:"文人文言",feedUrl:"https://rsshub.app/t66y/20/2"}],h=function(){if(p.value>7){var e=window.prompt();e==Math.pow(2,10)&&(a.value=m)}p.value++,clearTimeout(v),v=setTimeout((function(){p.value=0}),2e3)};return h(),{show:n,currFeeds:a,selectedFile:s,importFile:l,exportFile:u,godMode:h}}},v=p,m=n("2877"),h=n("6544"),b=n.n(h),g=n("132d"),w=n("da13"),y=n("5d23"),k=n("34c3"),x=n("f774"),_=n("e0c7"),j=Object(m["a"])(v,i,l,!1,null,null,null),O=j.exports;b()(j,{VIcon:g["a"],VListItem:w["a"],VListItemContent:y["a"],VListItemIcon:k["a"],VListItemTitle:y["c"],VNavigationDrawer:x["a"],VSubheader:_["a"]});var S={name:"App",components:{Menu:O},setup:function(e,t){var n=Object(f["c"])(!1),r=function(e){return window.open(e)},o=Object(f["c"])(0),a=function(e){o.value=e.target.scrollingElement.scrollTop};return t.root.$store.dispatch("loadNews"),{drawer:n,linkTo:r,scrollTop:o,onScroll:a}}},T=S,V=(n("cf25"),n("7496")),L=n("40dc"),U=n("5bc1"),$=n("8336"),F=n("a75b"),C=n("0789"),N=n("2db4"),A=n("2fa4"),I=n("2a7f"),P=n("269a"),E=n.n(P),M=n("f977"),B=Object(m["a"])(T,o,a,!1,null,null,null),R=B.exports;b()(B,{VApp:V["a"],VAppBar:L["a"],VAppBarNavIcon:U["a"],VBtn:$["a"],VContent:F["a"],VFabTransition:C["b"],VIcon:g["a"],VSnackbar:N["a"],VSpacer:A["a"],VToolbarTitle:I["a"]}),E()(B,{Scroll:M["b"]});var D=n("9483");Object(D["a"])("".concat("/rss/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var H=n("f309"),J=n("5025"),q=n.n(J);r["a"].use(H["a"]);var z=new H["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#9f9f45",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{zhHans:q.a},current:"zh-Hans"}}),K=n("8c4f"),G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[e.$store.state.loading?n("v-progress-linear",{attrs:{fixed:"",indeterminate:""}}):e._e(),n("v-container",[n("v-list",{attrs:{"three-line":""}},[n("v-subheader",{key:e.$store.state.news.title,domProps:{textContent:e._s(e.$store.state.news.title)}}),e._l(e.$store.state.news.items,(function(t,r){return[n("v-list-item",{key:t.title,on:{click:function(n){return e.handleView(t)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.title)}}),n("v-list-item-subtitle",[t.title!==t.content?n("div",{domProps:{innerHTML:e._s(t.content)}}):n("div",[n("a",{staticClass:"float-right",attrs:{href:t.link}},[e._v("阅读原文")])])])],1)],1),n("v-divider",{key:r,attrs:{inset:t.inset}})]}))],2)],1)],1)},Q=[],W=(n("9911"),{setup:function(e,t){var n=Object(f["b"])({light:["#f5f5d5","#fafae8"]}),r=Object(f["c"])(!0),o=Object(f["c"])({}),a=function(e){e.title===e.content?window.open(e.link):t.root.$router.push({name:"item",params:e}),console.log("item",e)};return{cardColor:n,handleView:a,data:o,loading:r}}}),X=W,Y=n("a523"),Z=n("ce7e"),ee=n("8860"),te=n("8e36"),ne=Object(m["a"])(X,G,Q,!1,null,null,null),re=ne.exports;b()(ne,{VContainer:Y["a"],VDivider:Z["a"],VList:ee["a"],VListItem:w["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VProgressLinear:te["a"],VSubheader:_["a"]}),r["a"].use(K["a"]);var oe=[{path:"/",name:"home",component:re},{path:"/item",name:"item",component:function(){return n.e("chunk-158afe74").then(n.bind(null,"f0df"))}}],ae=new K["a"]({routes:oe}),ie=ae,le=n("2f62"),se=n("b0f0"),ce=n.n(se);r["a"].use(le["a"]);var ue="https://cors-anywhere.herokuapp.com/",de=new ce.a,fe=new le["a"].Store({state:{news:{},loading:!0,snackbar:!1,error:"",url:"http://www.ruanyifeng.com/blog/atom.xml"},mutations:{update:function(e,t){e.news=t},hideLoading:function(e){e.loading=!1},showLoading:function(e){e.loading=!0},showSnackbar:function(e,t){e.snackbar=!0,e.error=t},saveUrl:function(e,t){e.url=t}},actions:{loadNews:function(e,t){var n,r,o,a;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return n=e.commit,r=e.state,o=t||r.url,n("saveUrl",o),n("showLoading"),i.prev=4,i.next=7,regeneratorRuntime.awrap(de.parseURL(ue+o));case 7:a=i.sent,n("update",a),i.next=14;break;case 11:i.prev=11,i.t0=i["catch"](4),n("showSnackbar",i.t0);case 14:n("hideLoading");case 15:case"end":return i.stop()}}),null,null,[[4,11]])}},modules:{}});r["a"].use(f["a"]),r["a"].config.productionTip=!1,new r["a"]({vuetify:z,router:ie,store:fe,render:function(e){return e(R)}}).$mount("#app")},cf25:function(e,t,n){"use strict";var r=n("029a"),o=n.n(r);o.a}});
//# sourceMappingURL=app.c934ca6a.js.map