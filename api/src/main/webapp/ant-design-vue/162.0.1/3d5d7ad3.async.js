(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{2591:function(n,t){},2592:function(n,t){},2593:function(n,t){n.exports='<cn>\r\n#### 基本 \r\n\r\n最简单的用法。\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\r\n<template>\r\n  <a-anchor>\r\n    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />\r\n    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />\r\n    <a-anchor-link\r\n      href="#components-anchor-demo-basic"\r\n      title="Basic demo with Target"\r\n      target="_blank"\r\n    />\r\n    <a-anchor-link href="#API" title="API">\r\n      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />\r\n      <a-anchor-link href="#Link-Props" title="Link Props" />\r\n    </a-anchor-link>\r\n  </a-anchor>\r\n</template>\r\n'},2594:function(n,t){},2595:function(n,t){},2596:function(n,t){n.exports='<cn>\r\n#### 自定义 click 事件 \r\n\r\n点击锚点不记录历史。\r\n</cn>\r\n<us>\r\n#### Customize The Click Event\r\n</us>\r\n\r\r\n<template>\r\n  <a-anchor :affix="false" @click="handleClick">\r\n    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />\r\n    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />\r\n    <a-anchor-link href="#API" title="API">\r\n      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />\r\n      <a-anchor-link href="#Link-Props" title="Link Props" />\r\n    </a-anchor-link>\r\n  </a-anchor>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    handleClick(e, link) {\r\n      e.preventDefault();\r\n      console.log(link);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},2597:function(n,t){},2598:function(n,t){},2599:function(n,t){n.exports='<cn>\r\n#### 监听锚点链接改变 \r\n\r\n监听锚点链接改变\r\n</cn>\r\n<us>\r\n#### Listening For Anchor Link Change\r\n</us>\r\n\r\r\n<template>\r\n  <a-anchor :affix="false" @change="onChange">\r\n    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />\r\n    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />\r\n    <a-anchor-link href="#API" title="API">\r\n      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />\r\n      <a-anchor-link href="#Link-Props" title="Link Props" />\r\n    </a-anchor-link>\r\n  </a-anchor>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    onChange(link) {\r\n      console.log(\'Anchor:OnChange\', link);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},2600:function(n,t){},2601:function(n,t){},2602:function(n,t){n.exports='<cn>\r\n#### 静态位置 \r\n\r\n不浮动，状态不随页面滚动变化。\r\n</cn>\r\n<us>\r\n#### Static\r\n</us>\r\n\r\r\n<template>\r\n  <a-anchor :affix="false">\r\n    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />\r\n    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />\r\n    <a-anchor-link href="#API" title="API">\r\n      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />\r\n      <a-anchor-link href="#Link-Props" title="Link Props" />\r\n    </a-anchor-link>\r\n  </a-anchor>\r\n</template>\r\n'},2603:function(n,t){},2604:function(n,t){},2605:function(n,t){n.exports='<cn>\r\n#### 自定义锚点高亮 \r\n\r\n自定义锚点高亮。\r\n</cn>\r\n<us>\r\n#### Customize The Anchor Highlight\r\n</us>\r\n\r\r\n<template>\r\n  <a-anchor :affix="false" :get-current-anchor="getCurrentAnchor">\r\n    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />\r\n    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />\r\n    <a-anchor-link href="#API" title="API">\r\n      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />\r\n      <a-anchor-link href="#Link-Props" title="Link Props" />\r\n    </a-anchor-link>\r\n  </a-anchor>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    getCurrentAnchor() {\r\n      return \'#components-anchor-demo-static\';\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},2606:function(n,t){},2607:function(n,t){},2608:function(n,t){n.exports='<cn>\r\n#### 设置锚点滚动偏移量 \r\n\r\n锚点目标滚动到屏幕正中间。\r\n</cn>\r\n<us>\r\n#### Set Anchor Scroll Offset\r\n</us>\r\n\r\r\n<template>\r\n  <a-anchor :target-offset="targetOffset">\r\n    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />\r\n    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />\r\n    <a-anchor-link href="#API" title="API">\r\n      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />\r\n      <a-anchor-link href="#Link-Props" title="Link Props" />\r\n    </a-anchor-link>\r\n  </a-anchor>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      targetOffset: undefined,\r\n    };\r\n  },\r\n  mounted() {\r\n    this.targetOffset = window.innerHeight / 2;\r\n  },\r\n};\r\n<\/script>\r\n'},2782:function(n,t,r){"use strict";r.r(t);var e=function(){var n=this.$createElement,t=this._self._c||n;return t("a-anchor",[t("a-anchor-link",{attrs:{href:"#components-anchor-demo-basic",title:"Basic demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#components-anchor-demo-static",title:"Static demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#components-anchor-demo-basic",title:"Basic demo with Target",target:"_blank"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#API",title:"API"}},[t("a-anchor-link",{attrs:{href:"#Anchor-Props",title:"Anchor Props"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#Link-Props",title:"Link Props"}})],1)],1)};e._withStripped=!0;var o=r(32),a=r(2591),i=r.n(a),c=r(2592),s=r.n(c),h=Object(o.a)({},e,[],!1,null,null,null);"function"==typeof i.a&&i()(h),"function"==typeof s.a&&s()(h),h.options.__file="components/anchor/demo/basic.vue";var l=h.exports,v=r(2593),_=r.n(v),d=function(){var n=this.$createElement,t=this._self._c||n;return t("a-anchor",{attrs:{affix:!1},on:{click:this.handleClick}},[t("a-anchor-link",{attrs:{href:"#components-anchor-demo-basic",title:"Basic demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#components-anchor-demo-static",title:"Static demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#API",title:"API"}},[t("a-anchor-link",{attrs:{href:"#Anchor-Props",title:"Anchor Props"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#Link-Props",title:"Link Props"}})],1)],1)};d._withStripped=!0;var f={methods:{handleClick:function(n,t){n.preventDefault(),console.log(t)}}},p=r(2594),m=r.n(p),u=r(2595),k=r.n(u),P=Object(o.a)(f,d,[],!1,null,null,null);"function"==typeof m.a&&m()(P),"function"==typeof k.a&&k()(P),P.options.__file="components/anchor/demo/customize-the-click-event.vue";var A=P.exports,g=r(2596),b=r.n(g),x=function(){var n=this.$createElement,t=this._self._c||n;return t("a-anchor",{attrs:{affix:!1},on:{change:this.onChange}},[t("a-anchor-link",{attrs:{href:"#components-anchor-demo-basic",title:"Basic demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#components-anchor-demo-static",title:"Static demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#API",title:"API"}},[t("a-anchor-link",{attrs:{href:"#Anchor-Props",title:"Anchor Props"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#Link-Props",title:"Link Props"}})],1)],1)};x._withStripped=!0;var L={methods:{onChange:function(n){console.log("Anchor:OnChange",n)}}},I=r(2597),C=r.n(I),w=r(2598),S=r.n(w),O=Object(o.a)(L,x,[],!1,null,null,null);"function"==typeof C.a&&C()(O),"function"==typeof S.a&&S()(O),O.options.__file="components/anchor/demo/listening-for-anchor-link-change.vue";var y=O.exports,B=r(2599),E=r.n(B),j=function(){var n=this.$createElement,t=this._self._c||n;return t("a-anchor",{attrs:{affix:!1}},[t("a-anchor-link",{attrs:{href:"#components-anchor-demo-basic",title:"Basic demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#components-anchor-demo-static",title:"Static demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#API",title:"API"}},[t("a-anchor-link",{attrs:{href:"#Anchor-Props",title:"Anchor Props"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#Link-Props",title:"Link Props"}})],1)],1)};j._withStripped=!0;var T=r(2600),$=r.n(T),z=r(2601),H=r.n(z),F=Object(o.a)({},j,[],!1,null,null,null);"function"==typeof $.a&&$()(F),"function"==typeof H.a&&H()(F),F.options.__file="components/anchor/demo/static.vue";var D=F.exports,J=r(2602),M=r.n(J),N=function(){var n=this.$createElement,t=this._self._c||n;return t("a-anchor",{attrs:{affix:!1,"get-current-anchor":this.getCurrentAnchor}},[t("a-anchor-link",{attrs:{href:"#components-anchor-demo-basic",title:"Basic demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#components-anchor-demo-static",title:"Static demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#API",title:"API"}},[t("a-anchor-link",{attrs:{href:"#Anchor-Props",title:"Anchor Props"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#Link-Props",title:"Link Props"}})],1)],1)};N._withStripped=!0;var U={methods:{getCurrentAnchor:function(){return"#components-anchor-demo-static"}}},q=r(2603),G=r.n(q),K=r(2604),Q=r.n(K),R=Object(o.a)(U,N,[],!1,null,null,null);"function"==typeof G.a&&G()(R),"function"==typeof Q.a&&Q()(R),R.options.__file="components/anchor/demo/customize-the-anchor-highlight.vue";var V=R.exports,W=r(2605),X=r.n(W),Y=function(){var n=this.$createElement,t=this._self._c||n;return t("a-anchor",{attrs:{"target-offset":this.targetOffset}},[t("a-anchor-link",{attrs:{href:"#components-anchor-demo-basic",title:"Basic demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#components-anchor-demo-static",title:"Static demo"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#API",title:"API"}},[t("a-anchor-link",{attrs:{href:"#Anchor-Props",title:"Anchor Props"}}),this._v(" "),t("a-anchor-link",{attrs:{href:"#Link-Props",title:"Link Props"}})],1)],1)};Y._withStripped=!0;var Z={data:function(){return{targetOffset:void 0}},mounted:function(){this.targetOffset=window.innerHeight/2}},nn=r(2606),tn=r.n(nn),rn=r(2607),en=r.n(rn),on=Object(o.a)(Z,Y,[],!1,null,null,null);"function"==typeof tn.a&&tn()(on),"function"==typeof en.a&&en()(on),on.options.__file="components/anchor/demo/set-anchor-scroll-offset.vue";var an=on.exports,cn=r(2608),sn=r.n(cn),hn=function(){var n=this.$createElement;this._self._c;return this._m(0)};hn._withStripped=!0;var ln=Object(o.a)({},hn,[function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",[r("h2",{attrs:{id:"API"}},[n._v("API "),r("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),r("h3",{attrs:{id:"Anchor-Props"}},[n._v("Anchor Props "),r("a",{staticClass:"anchor",attrs:{href:"#Anchor-Props","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),r("table",[r("thead",[r("tr",[r("th",[n._v("成员")]),n._v(" "),r("th",[n._v("说明")]),n._v(" "),r("th",[n._v("类型")]),n._v(" "),r("th",[n._v("默认值")]),n._v(" "),r("th",[n._v("版本")])])]),n._v(" "),r("tbody",[r("tr",[r("td",[n._v("affix")]),n._v(" "),r("td",[n._v("固定模式")]),n._v(" "),r("td",[n._v("boolean")]),n._v(" "),r("td",[n._v("true")]),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("bounds")]),n._v(" "),r("td",[n._v("锚点区域边界")]),n._v(" "),r("td",[n._v("number")]),n._v(" "),r("td",[n._v("5(px)")]),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("getContainer")]),n._v(" "),r("td",[n._v("指定滚动的容器")]),n._v(" "),r("td",[n._v("() => HTMLElement")]),n._v(" "),r("td",[n._v("() => window")]),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("offsetBottom")]),n._v(" "),r("td",[n._v("距离窗口底部达到指定偏移量后触发")]),n._v(" "),r("td",[n._v("number")]),n._v(" "),r("td"),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("offsetTop")]),n._v(" "),r("td",[n._v("距离窗口顶部达到指定偏移量后触发")]),n._v(" "),r("td",[n._v("number")]),n._v(" "),r("td"),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("showInkInFixed")]),n._v(" "),r("td",[n._v("固定模式是否显示小圆点")]),n._v(" "),r("td",[n._v("boolean")]),n._v(" "),r("td",[n._v("false")]),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("wrapperClass")]),n._v(" "),r("td",[n._v("容器的类名")]),n._v(" "),r("td",[n._v("string")]),n._v(" "),r("td",[n._v("-")]),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("wrapperStyle")]),n._v(" "),r("td",[n._v("容器样式")]),n._v(" "),r("td",[n._v("object")]),n._v(" "),r("td",[n._v("-")]),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("getCurrentAnchor")]),n._v(" "),r("td",[n._v("自定义高亮的锚点")]),n._v(" "),r("td",[n._v("() => string")]),n._v(" "),r("td",[n._v("-")]),n._v(" "),r("td",[n._v("1.5.0")])]),n._v(" "),r("tr",[r("td",[n._v("targetOffset")]),n._v(" "),r("td",[n._v("锚点滚动偏移量，默认与 offsetTop 相同，"),r("a",{attrs:{href:"#components-anchor-demo-targetOffset"}},[n._v("例子")])]),n._v(" "),r("td",[n._v("number")]),n._v(" "),r("td",[r("code",{pre:!0},[n._v("offsetTop")])]),n._v(" "),r("td",[n._v("1.5.0")])])])]),n._v(" "),r("h3",{attrs:{id:"事件"}},[n._v("事件 "),r("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),r("table",[r("thead",[r("tr",[r("th",[n._v("事件名称")]),n._v(" "),r("th",[n._v("说明")]),n._v(" "),r("th",[n._v("回调参数")]),n._v(" "),r("th",[n._v("版本")])])]),n._v(" "),r("tbody",[r("tr",[r("td",[n._v("click")]),n._v(" "),r("td",[r("code",{pre:!0},[n._v("click")]),n._v(" 事件的 handler")]),n._v(" "),r("td",[n._v("Function(e: Event, link: Object)")]),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("change")]),n._v(" "),r("td",[n._v("监听锚点链接改变")]),n._v(" "),r("td",[n._v("(currentActiveLink: string) => void")]),n._v(" "),r("td")])])]),n._v(" "),r("h3",{attrs:{id:"Link-Props"}},[n._v("Link Props "),r("a",{staticClass:"anchor",attrs:{href:"#Link-Props","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),r("table",[r("thead",[r("tr",[r("th",[n._v("成员")]),n._v(" "),r("th",[n._v("说明")]),n._v(" "),r("th",[n._v("类型")]),n._v(" "),r("th",[n._v("默认值")]),n._v(" "),r("th",[n._v("版本")])])]),n._v(" "),r("tbody",[r("tr",[r("td",[n._v("href")]),n._v(" "),r("td",[n._v("锚点链接")]),n._v(" "),r("td",[n._v("string")]),n._v(" "),r("td"),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("title")]),n._v(" "),r("td",[n._v("文字内容")]),n._v(" "),r("td",[n._v("string")]),n._v(" "),r("td",[n._v("slot")]),n._v(" "),r("td")]),n._v(" "),r("tr",[r("td",[n._v("target")]),n._v(" "),r("td",[n._v("该属性指定在何处显示链接的资源。")]),n._v(" "),r("td",[n._v("string")]),n._v(" "),r("td"),n._v(" "),r("td",[n._v("1.5.0")])])])])])}],!1,null,null,null);ln.options.__file="components/anchor/index.zh-CN.md";var vn=ln.exports,_n=function(){var n=this.$createElement;return(this._self._c||n)("div")};_n._withStripped=!0;var dn=Object(o.a)({},_n,[],!1,null,null,null);dn.options.__file="components/anchor/index.en-US.md";var fn=dn.exports,pn="",mn="# Anchor 锚点\n\n用于跳转到页面指定位置。\n\n## 何时使用\n\n需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。\n\n## 代码演示",un={category:"Components",subtitle:"锚点",type:"Other",zhType:"其他",cols:2,title:"Anchor",render:function(){var n=arguments[0];return n("div",[n("md",{attrs:{cn:mn,us:pn}}),n("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:_.a}},[n(l)]),n("demo-container",{attrs:{code:b.a}},[n(A)]),n("demo-container",{attrs:{code:E.a}},[n(y)])]),n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:M.a}},[n(D)]),n("demo-container",{attrs:{code:X.a}},[n(V)]),n("demo-container",{attrs:{code:sn.a}},[n(an)])])]),n("api",[n(vn,{slot:"cn"}),n(fn)])])}},kn=Object(o.a)(un,void 0,void 0,!1,null,null,null);kn.options.__file="components/anchor/demo/index.vue";t.default=kn.exports}}]);