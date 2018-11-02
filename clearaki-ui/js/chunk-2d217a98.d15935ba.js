(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217a98"],{c84a:function(a,t,s){"use strict";s.r(t);var n=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",{staticClass:"aki-page"},[s("aki-topbars",{attrs:{nav:"back",fill:""},on:{"nav-click":function(t){a.$router.back()}}},[a._v("Topbars")]),s("main",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"aki-page-main"},[s("h3",[a._v("基础使用")]),s("div",{staticClass:"demo"},[s("aki-topbars",[a._v("基础使用")])],1),s("pre",{ref:"code"},[a._v("        "),s("code",{staticClass:"html"},[a._v("\n<aki-topbars>标题</aki-topbars>\n        ")]),a._v("\n      ")]),s("h3",[a._v("填充色")]),s("div",{staticClass:"demo"},[s("aki-topbars",{attrs:{fill:""}},[a._v("填充色")])],1),s("pre",{ref:"code"},[a._v("        "),s("code",{staticClass:"html"},[a._v("\n<aki-topbars fill>标题</aki-topbars>\n        ")]),a._v("\n      ")]),s("h3",[a._v("快捷导航")]),s("p",[a._v("提供三种常用的导航，通过nav属性来设置")]),s("h4",[a._v("菜单-menu")]),s("div",{staticClass:"demo"},[s("aki-topbars",{attrs:{nav:"menu"}},[a._v("菜单")])],1),s("h4",[a._v("返回-back")]),s("div",{staticClass:"demo"},[s("aki-topbars",{attrs:{nav:"back"}},[a._v("返回")])],1),s("h4",[a._v("关闭-close")]),s("div",{staticClass:"demo"},[s("aki-topbars",{attrs:{nav:"close",fill:""}},[a._v("关闭")])],1),s("pre",{ref:"code"},[a._v("        "),s("code",{staticClass:"html"},[a._v('\n<aki-topbars nav="menu">标题</aki-topbars>\n        ')]),a._v("\n      ")]),s("p",[a._v("当配置了快捷导航时，可以设置点击事件")]),s("div",{staticClass:"demo"},[s("aki-topbars",{attrs:{nav:"menu"},on:{"nav-click":function(t){a.$snackbar("点击了导航")}}},[a._v("点击事件")])],1),s("pre",{ref:"code"},[a._v("        "),s("code",{staticClass:"html"},[a._v('\n<aki-topbars @nav-click="$snackbar(\'点击了导航\')" nav="menu" fill>标题</aki-topbars>\n        ')]),a._v("\n      ")]),s("p",[a._v("有时候你可能会需要当前的nav状态，该事件的参数就是nav的值")]),s("div",{staticClass:"demo"},[s("aki-topbars",{attrs:{nav:"menu"},on:{"nav-click":a.handle}},[a._v("参数")])],1),s("pre",{ref:"code"},[a._v("        "),s("code",{staticClass:"html"},[a._v('\n<aki-topbars @nav-click="handle" nav="menu" fill>标题</aki-topbars>\n        ')]),a._v("\n        "),s("code",{staticClass:"javascript"},[a._v("\nhandle(nav) {\n  this.$snackbar(nav)\n}\n        ")]),a._v("\n      ")]),s("h4",[a._v("自定义导航")]),s("p",[a._v('你也可以自定义导航，通过slot="nav"')]),s("div",{staticClass:"demo"},[s("aki-topbars",[s("span",{attrs:{slot:"nav"},slot:"nav"},[a._v("菜单")]),a._v("\n        搜索\n      ")])],1),s("pre",{ref:"code"},[a._v("        "),s("code",{staticClass:"html"},[a._v('\n<aki-topbars><span slot="nav">菜单</span>搜索</aki-topbars>\n        ')]),a._v("\n      ")]),s("h4",[a._v("自定义action")]),s("p",[a._v('通过slot="action"来设置右侧action位置')]),s("div",{staticClass:"demo"},[s("aki-topbars",[a._v("标题"),s("svg",{attrs:{slot:"action",width:"24",fill:"currentColor",viewBox:"0 0 1024 1024"},slot:"action"},[s("path",{attrs:{d:"M469.333333 170.666667h128v128h-128V170.666667z m0 298.666666h128v128h-128v-128z m0 298.666667h128v128h-128v-128z"}})])])],1),s("pre",{ref:"code"},[a._v("        "),s("code",{staticClass:"html"},[a._v('\n<aki-topbars>标题<svg slot="action">...</svg></aki-topbars>\n        ')]),a._v("\n      ")]),s("p",[a._v("多个action")]),s("div",{staticClass:"demo"},[s("aki-topbars",[a._v("标题"),s("svg",{attrs:{slot:"action",width:"24",fill:"currentColor",viewBox:"0 0 1024 1024"},slot:"action"},[s("path",{attrs:{d:"M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z"}})]),s("svg",{attrs:{slot:"action",width:"24",fill:"currentColor",viewBox:"0 0 1024 1024"},slot:"action"},[s("path",{attrs:{d:"M469.333333 170.666667h128v128h-128V170.666667z m0 298.666666h128v128h-128v-128z m0 298.666667h128v128h-128v-128z"}})])])],1),s("pre",{ref:"code"},[a._v("        "),s("code",{staticClass:"html"},[a._v('\n<aki-topbars>标题<svg slot="action">...</svg><svg slot="action">...</svg></aki-topbars>\n        ')]),a._v("\n      ")])])],1)},v=[],i=(s("cadf"),s("551c"),s("097d"),{methods:{handle:function(a){this.$snackbar(a)}}}),o=i,c=s("2877"),l=Object(c["a"])(o,n,v,!1,null,null,null);l.options.__file="Topbars.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d217a98.d15935ba.js.map