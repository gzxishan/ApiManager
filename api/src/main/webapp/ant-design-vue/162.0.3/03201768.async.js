(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1208:function(t,e,n){},1758:function(t,e){},1759:function(t,e){},1760:function(t,e){t.exports='<cn>\r\n#### 基本 \r\n\r\n最简单的用法。\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-tooltip>\r\n    <template slot="title">\r\n      prompt text\r\n    </template>\r\n    Tooltip will show when mouse enter.\r\n  </a-tooltip>\r\n</template>\r\n'},1761:function(t,e){},1762:function(t,e){},1763:function(t,e){t.exports='<cn>\r\n#### 箭头指向 \r\n\r\n设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。\r\n</cn>\r\n<us>\r\n#### Arrow Pointing At The Center\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-tooltip placement="topLeft" title="Prompt Text">\r\n      <a-button>Align edge / 边缘对齐</a-button>\r\n    </a-tooltip>\r\n    <a-tooltip placement="topLeft" title="Prompt Text" arrow-point-at-center>\r\n      <a-button>Arrow points to center / 箭头指向中心</a-button>\r\n    </a-tooltip>\r\n  </div>\r\n</template>\r\n'},1764:function(t,e,n){"use strict";var o=n(1208);n.n(o).a},1765:function(t,e){},1766:function(t,e){},1767:function(t,e){t.exports='<cn>\r\n#### 位置 \r\n\r\n位置有 12 个方向。\r\n</cn>\r\n<us>\r\n#### Placement\r\n</us>\r\n\r\n\r\n<template>\r\n  <div id="components-a-tooltip-demo-placement">\r\n    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: \'nowrap\' }">\r\n      <a-tooltip placement="topLeft">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>TL</a-button>\r\n      </a-tooltip>\r\n      <a-tooltip placement="top">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>Top</a-button>\r\n      </a-tooltip>\r\n      <a-tooltip placement="topRight">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>TR</a-button>\r\n      </a-tooltip>\r\n    </div>\r\n    <div :style="{ width: `${buttonWidth}px`, float: \'left\' }">\r\n      <a-tooltip placement="leftTop">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>LT</a-button>\r\n      </a-tooltip>\r\n      <a-tooltip placement="left">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>Left</a-button>\r\n      </a-tooltip>\r\n      <a-tooltip placement="leftBottom">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>LB</a-button>\r\n      </a-tooltip>\r\n    </div>\r\n    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">\r\n      <a-tooltip placement="rightTop">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>RT</a-button>\r\n      </a-tooltip>\r\n      <a-tooltip placement="right">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>Right</a-button>\r\n      </a-tooltip>\r\n      <a-tooltip placement="rightBottom">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>RB</a-button>\r\n      </a-tooltip>\r\n    </div>\r\n    <div :style="{ marginLeft: `${buttonWidth}px`, clear: \'both\', whiteSpace: \'nowrap\' }">\r\n      <a-tooltip placement="bottomLeft">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>BL</a-button>\r\n      </a-tooltip>\r\n      <a-tooltip placement="bottom">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>Bottom</a-button>\r\n      </a-tooltip>\r\n      <a-tooltip placement="bottomRight">\r\n        <template slot="title">\r\n          <span>prompt text</span>\r\n        </template>\r\n        <a-button>BR</a-button>\r\n      </a-tooltip>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      buttonWidth: 70,\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n<style scoped>\r\n#components-a-tooltip-demo-placement .ant-btn {\r\n  width: 70px;\r\n  text-align: center;\r\n  padding: 0;\r\n  margin-right: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n</style>\r\n'},1768:function(t,e){},1769:function(t,e){},1770:function(t,e){t.exports='<cn>\r\n#### 自动调整位置 \r\n\r\n气泡框不可见时自动调整位置\r\n</cn>\r\n<us>\r\n#### Adjust Placement Automatically\r\n</us>\r\n\r\n\r\n<template>\r\n  <div :style="wrapStyles">\r\n    <a-tooltip placement="left" title="Prompt Text" :get-popup-container="getPopupContainer">\r\n      <a-button>Adjust automatically / 自动调整</a-button>\r\n    </a-tooltip>\r\n    <br />\r\n    <a-tooltip\r\n      style="marginTop: 10px"\r\n      placement="left"\r\n      title="Prompt Text"\r\n      :get-popup-container="getPopupContainer"\r\n      :auto-adjust-overflow="false"\r\n    >\r\n      <a-button>Ingore / 不处理</a-button>\r\n    </a-tooltip>\r\n  </div>\r\n</template>\r\n<script>\r\nconst wrapStyles = {\r\n  overflow: \'hidden\',\r\n  position: \'relative\',\r\n  padding: \'24px\',\r\n  border: \'1px solid #e9e9e9\',\r\n};\r\nexport default {\r\n  data() {\r\n    return {\r\n      wrapStyles,\r\n    };\r\n  },\r\n  methods: {\r\n    getPopupContainer(trigger) {\r\n      return trigger.parentElement;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},2797:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement,e=this._self._c||t;return e("a-tooltip",[e("template",{slot:"title"},[this._v("\n    prompt text\n  ")]),this._v("\n  Tooltip will show when mouse enter.\n")],2)};o._withStripped=!0;var r=n(32),a=n(1758),p=n.n(a),l=n(1759),i=n.n(l),v=Object(r.a)({},o,[],!1,null,null,null);"function"==typeof p.a&&p()(v),"function"==typeof i.a&&i()(v),v.options.__file="components/tooltip/demo/basic.vue";var _=v.exports,s=n(1760),d=n.n(s),m=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a-tooltip",{attrs:{placement:"topLeft",title:"Prompt Text"}},[e("a-button",[this._v("Align edge / 边缘对齐")])],1),this._v(" "),e("a-tooltip",{attrs:{placement:"topLeft",title:"Prompt Text","arrow-point-at-center":""}},[e("a-button",[this._v("Arrow points to center / 箭头指向中心")])],1)],1)};m._withStripped=!0;var c=n(1761),u=n.n(c),h=n(1762),f=n.n(h),b=Object(r.a)({},m,[],!1,null,null,null);"function"==typeof u.a&&u()(b),"function"==typeof f.a&&f()(b),b.options.__file="components/tooltip/demo/arrow-pointing-at-the-center.vue";var x=b.exports,g=n(1763),w=n.n(g),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"components-a-tooltip-demo-placement"}},[n("div",{style:{marginLeft:t.buttonWidth+"px",whiteSpace:"nowrap"}},[n("a-tooltip",{attrs:{placement:"topLeft"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("TL")])],2),t._v(" "),n("a-tooltip",{attrs:{placement:"top"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("Top")])],2),t._v(" "),n("a-tooltip",{attrs:{placement:"topRight"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("TR")])],2)],1),t._v(" "),n("div",{style:{width:t.buttonWidth+"px",float:"left"}},[n("a-tooltip",{attrs:{placement:"leftTop"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("LT")])],2),t._v(" "),n("a-tooltip",{attrs:{placement:"left"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("Left")])],2),t._v(" "),n("a-tooltip",{attrs:{placement:"leftBottom"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("LB")])],2)],1),t._v(" "),n("div",{style:{width:t.buttonWidth+"px",marginLeft:4*t.buttonWidth+24+"px"}},[n("a-tooltip",{attrs:{placement:"rightTop"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("RT")])],2),t._v(" "),n("a-tooltip",{attrs:{placement:"right"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("Right")])],2),t._v(" "),n("a-tooltip",{attrs:{placement:"rightBottom"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("RB")])],2)],1),t._v(" "),n("div",{style:{marginLeft:t.buttonWidth+"px",clear:"both",whiteSpace:"nowrap"}},[n("a-tooltip",{attrs:{placement:"bottomLeft"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("BL")])],2),t._v(" "),n("a-tooltip",{attrs:{placement:"bottom"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("Bottom")])],2),t._v(" "),n("a-tooltip",{attrs:{placement:"bottomRight"}},[n("template",{slot:"title"},[n("span",[t._v("prompt text")])]),t._v(" "),n("a-button",[t._v("BR")])],2)],1)])};y._withStripped=!0;var T={data:function(){return{buttonWidth:70}}},P=(n(1764),n(1765)),L=n.n(P),A=n(1766),C=n.n(A),S=Object(r.a)(T,y,[],!1,null,"2317f022",null);"function"==typeof L.a&&L()(S),"function"==typeof C.a&&C()(S),S.options.__file="components/tooltip/demo/o-placement.vue";var B=S.exports,j=n(1767),R=n.n(j),W=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.wrapStyles},[e("a-tooltip",{attrs:{placement:"left",title:"Prompt Text","get-popup-container":this.getPopupContainer}},[e("a-button",[this._v("Adjust automatically / 自动调整")])],1),this._v(" "),e("br"),this._v(" "),e("a-tooltip",{staticStyle:{marginTop:"10px"},attrs:{placement:"left",title:"Prompt Text","get-popup-container":this.getPopupContainer,"auto-adjust-overflow":!1}},[e("a-button",[this._v("Ingore / 不处理")])],1)],1)};W._withStripped=!0;var $={overflow:"hidden",position:"relative",padding:"24px",border:"1px solid #e9e9e9"},E={data:function(){return{wrapStyles:$}},methods:{getPopupContainer:function(t){return t.parentElement}}},I=n(1768),O=n.n(I),k=n(1769),D=n.n(k),N=Object(r.a)(E,W,[],!1,null,null,null);"function"==typeof O.a&&O()(N),"function"==typeof D.a&&D()(N),N.options.__file="components/tooltip/demo/adjust-placement-automatically.vue";var z=N.exports,J=n(1770),F=n.n(J),H=function(){var t=this.$createElement;this._self._c;return this._m(0)};H._withStripped=!0;var U=Object(r.a)({},H,[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{id:"API"}},[t._v("API "),n("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("提示文字")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("slot")])])])]),t._v(" "),n("h3",{attrs:{id:"共同的-API"}},[t._v("共同的 API "),n("a",{staticClass:"anchor",attrs:{href:"#共同的-API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("arrowPointAtCenter")]),t._v(" "),n("td",[t._v("箭头是否指向目标元素中心")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("false")])])]),t._v(" "),n("tr",[n("td",[t._v("autoAdjustOverflow")]),t._v(" "),n("td",[t._v("气泡被遮挡时自动调整位置")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("true")])])]),t._v(" "),n("tr",[n("td",[t._v("defaultVisible")]),t._v(" "),n("td",[t._v("默认是否显隐")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("getPopupContainer")]),t._v(" "),n("td",[t._v("浮层渲染父节点，默认渲染到 body 上")]),t._v(" "),n("td",[t._v("Function(triggerNode)")]),t._v(" "),n("td",[t._v("() => document.body")])]),t._v(" "),n("tr",[n("td",[t._v("mouseEnterDelay")]),t._v(" "),n("td",[t._v("鼠标移入后延时多少才显示 Tooltip，单位：秒")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("mouseLeaveDelay")]),t._v(" "),n("td",[t._v("鼠标移出后延时多少才隐藏 Tooltip，单位：秒")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("0.1")])]),t._v(" "),n("tr",[n("td",[t._v("overlayClassName")]),t._v(" "),n("td",[t._v("卡片类名")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("overlayStyle")]),t._v(" "),n("td",[t._v("卡片样式")]),t._v(" "),n("td",[t._v("object")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("placement")]),t._v(" "),n("td",[t._v("气泡框位置，可选 "),n("code",{pre:!0},[t._v("top")]),t._v(" "),n("code",{pre:!0},[t._v("left")]),t._v(" "),n("code",{pre:!0},[t._v("right")]),t._v(" "),n("code",{pre:!0},[t._v("bottom")]),t._v(" "),n("code",{pre:!0},[t._v("topLeft")]),t._v(" "),n("code",{pre:!0},[t._v("topRight")]),t._v(" "),n("code",{pre:!0},[t._v("bottomLeft")]),t._v(" "),n("code",{pre:!0},[t._v("bottomRight")]),t._v(" "),n("code",{pre:!0},[t._v("leftTop")]),t._v(" "),n("code",{pre:!0},[t._v("leftBottom")]),t._v(" "),n("code",{pre:!0},[t._v("rightTop")]),t._v(" "),n("code",{pre:!0},[t._v("rightBottom")])]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("top")])]),t._v(" "),n("tr",[n("td",[t._v("trigger")]),t._v(" "),n("td",[t._v("触发行为，可选 "),n("code",{pre:!0},[t._v("hover/focus/click/contextmenu")])]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("hover")])]),t._v(" "),n("tr",[n("td",[t._v("visible(v-model)")]),t._v(" "),n("td",[t._v("用于手动控制浮层显隐")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("destroyTooltipOnHide")]),t._v(" "),n("td",[t._v("隐藏后是否销毁 tooltip")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("align")]),t._v(" "),n("td",[t._v("该值将合并到 placement 的配置中，设置参考 "),n("a",{attrs:{href:"https://github.com/yiminghe/dom-align"}},[t._v("dom-align")])]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h3",{attrs:{id:"事件"}},[t._v("事件 "),n("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("事件名称")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("visibleChange")]),t._v(" "),n("td",[t._v("显示隐藏的回调")]),t._v(" "),n("td",[t._v("(visible) => void")])])])]),t._v(" "),n("h2",{attrs:{id:"注意"}},[t._v("注意 "),n("a",{staticClass:"anchor",attrs:{href:"#注意","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("请确保 "),n("code",{pre:!0},[t._v("Tooltip")]),t._v(" 的子元素能接受 "),n("code",{pre:!0},[t._v("mouseenter")]),t._v("、"),n("code",{pre:!0},[t._v("mouseleave")]),t._v("、"),n("code",{pre:!0},[t._v("focus")]),t._v("、"),n("code",{pre:!0},[t._v("click")]),t._v(" 事件。")])])}],!1,null,null,null);U.options.__file="components/tooltip/index.zh-CN.md";var V=U.exports,q=function(){var t=this.$createElement;return(this._self._c||t)("div")};q._withStripped=!0;var G=Object(r.a)({},q,[],!1,null,null,null);G.options.__file="components/tooltip/index.en-US.md";var K=G.exports,M="",Q="# Tooltip\n\n简单的文字提示气泡框。\n\n## 何时使用\n\n鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。\n\n可用来代替系统默认的 ‘title’ 提示，提供一个’按钮/文字/操作’的文案解释。\n\n## 代码演示",X={category:"Components",subtitle:"文字提示",type:"Data Display",zhType:"数据展示",cols:2,title:"Tooltip",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:Q,us:M}}),t("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[t("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[t("demo-container",{attrs:{code:d.a}},[t(_)]),t("demo-container",{attrs:{code:w.a}},[t(x)])]),t("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[t("demo-container",{attrs:{code:R.a}},[t(B)]),t("demo-container",{attrs:{code:F.a}},[t(z)])])]),t("api",[t(V,{slot:"cn"}),t(K)])])}},Y=Object(r.a)(X,void 0,void 0,!1,null,null,null);Y.options.__file="components/tooltip/demo/index.vue";e.default=Y.exports}}]);