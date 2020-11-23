(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1197:function(t,n,e){},1521:function(t,n){},1522:function(t,n){},1523:function(t,n){},1524:function(t,n){},1525:function(t,n){},1526:function(t,n){},1527:function(t,n){},1528:function(t,n){},1529:function(t,n,e){"use strict";var o=e(1197);e.n(o).a},1530:function(t,n){},1531:function(t,n){},1532:function(t,n){},1533:function(t,n){},2327:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this.$createElement,n=this._self._c||t;return n("a-popover",{attrs:{title:"Title"}},[n("template",{slot:"content"},[n("p",[this._v("Content")]),this._v(" "),n("p",[this._v("Content")])]),this._v(" "),n("a-button",{attrs:{type:"primary"}},[this._v("\n    Hover me\n  ")])],2)};o._withStripped=!0;var r=e(32),p=e(1521),a=e.n(p),l=e(1522),i=e.n(l),v=Object(r.a)({},o,[],!1,null,null,null);"function"==typeof a.a&&a()(v),"function"==typeof i.a&&i()(v),v.options.__file="components/popover/demo/basic.vue";var s=v.exports,c='<cn>\r\n#### 基本 \r\n\r\n最简单的用法，浮层的大小由内容区域决定。\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-popover title="Title">\r\n    <template slot="content">\r\n      <p>Content</p>\r\n      <p>Content</p>\r\n    </template>\r\n    <a-button type="primary">\r\n      Hover me\r\n    </a-button>\r\n  </a-popover>\r\n</template>\r\n',_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a-popover",{attrs:{title:"Title",trigger:"click"},model:{value:t.visible,callback:function(n){t.visible=n},expression:"visible"}},[e("a",{attrs:{slot:"content"},on:{click:t.hide},slot:"content"},[t._v("Close")]),t._v(" "),e("a-button",{attrs:{type:"primary"}},[t._v("\n    Click me\n  ")])],1)};_._withStripped=!0;var m={data:function(){return{visible:!1}},methods:{hide:function(){console.log(111),this.visible=!1}}},u=e(1523),d=e.n(u),h=e(1524),f=e.n(h),b=Object(r.a)(m,_,[],!1,null,null,null);"function"==typeof d.a&&d()(b),"function"==typeof f.a&&f()(b),b.options.__file="components/popover/demo/controlling-the-close-of-the-dialog.vue";var C=b.exports,g='<cn>\r\n#### 从浮层内关闭 \r\n\r\n使用 `visible` 属性控制浮层显示。\r\n</cn>\r\n<us>\r\n#### Controlling The Close Of The Dialog\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-popover v-model="visible" title="Title" trigger="click">\r\n    <a slot="content" @click="hide">Close</a>\r\n    <a-button type="primary">\r\n      Click me\r\n    </a-button>\r\n  </a-popover>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      visible: false,\r\n    };\r\n  },\r\n  methods: {\r\n    hide() {\r\n      console.log(111);\r\n      this.visible = false;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a-popover",{attrs:{title:"Title",trigger:"hover"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("a-button",{attrs:{type:"primary"}},[t._v("\n      Hover me\n    ")])],2),t._v(" "),e("a-popover",{attrs:{title:"Title",trigger:"focus"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("a-button",{attrs:{type:"primary"}},[t._v("\n      Focus me\n    ")])],2),t._v(" "),e("a-popover",{attrs:{title:"Title",trigger:"click"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("a-button",{attrs:{type:"primary"}},[t._v("\n      Click me\n    ")])],2)],1)};T._withStripped=!0;var y=e(1525),k=e.n(y),w=e(1526),x=e.n(w),L=Object(r.a)({},T,[],!1,null,null,null);"function"==typeof k.a&&k()(L),"function"==typeof x.a&&x()(L),L.options.__file="components/popover/demo/three-ways-to-trigger.vue";var B=L.exports,R='<cn>\r\n#### 三种触发方式 \r\n\r\n鼠标移入、聚集、点击。\r\n</cn>\r\n<us>\r\n#### Three Ways To Trigger\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-popover title="Title" trigger="hover">\r\n      <template slot="content">\r\n        <p>Content</p>\r\n        <p>Content</p>\r\n      </template>\r\n      <a-button type="primary">\r\n        Hover me\r\n      </a-button>\r\n    </a-popover>\r\n    <a-popover title="Title" trigger="focus">\r\n      <template slot="content">\r\n        <p>Content</p>\r\n        <p>Content</p>\r\n      </template>\r\n      <a-button type="primary">\r\n        Focus me\r\n      </a-button>\r\n    </a-popover>\r\n    <a-popover title="Title" trigger="click">\r\n      <template slot="content">\r\n        <p>Content</p>\r\n        <p>Content</p>\r\n      </template>\r\n      <a-button type="primary">\r\n        Click me\r\n      </a-button>\r\n    </a-popover>\r\n  </div>\r\n</template>\r\n',S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a-popover",{attrs:{placement:"topLeft"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Title")]),t._v(" "),e("a-button",[t._v("Align edge / 边缘对齐")])],2),t._v(" "),e("a-popover",{attrs:{placement:"topLeft","arrow-point-at-center":""}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Title")]),t._v(" "),e("a-button",[t._v("Arrow points to center / 箭头指向中心")])],2)],1)};S._withStripped=!0;var W=e(1527),$=e.n(W),H=e(1528),P=e.n(H),A=Object(r.a)({},S,[],!1,null,null,null);"function"==typeof $.a&&$()(A),"function"==typeof P.a&&P()(A),A.options.__file="components/popover/demo/arrow-pointing.vue";var O=A.exports,j='<cn>\r\n#### 箭头指向 \r\n\r\n设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。\r\n</cn>\r\n<us>\r\n#### Arrow Pointing\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-popover placement="topLeft">\r\n      <template slot="content">\r\n        <p>Content</p>\r\n        <p>Content</p>\r\n      </template>\r\n      <span slot="title">Title</span>\r\n      <a-button>Align edge / 边缘对齐</a-button>\r\n    </a-popover>\r\n    <a-popover placement="topLeft" arrow-point-at-center>\r\n      <template slot="content">\r\n        <p>Content</p>\r\n        <p>Content</p>\r\n      </template>\r\n      <span slot="title">Title</span>\r\n      <a-button>Arrow points to center / 箭头指向中心</a-button>\r\n    </a-popover>\r\n  </div>\r\n</template>\r\n',E=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"components-popover-demo-placement"}},[e("div",{style:{marginLeft:t.buttonWidth+"px",whiteSpace:"nowrap"}},[e("a-popover",{attrs:{placement:"topLeft"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("TL")])],2),t._v(" "),e("a-popover",{attrs:{placement:"top"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("Top")])],2),t._v(" "),e("a-popover",{attrs:{placement:"topRight"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("TR")])],2)],1),t._v(" "),e("div",{style:{width:t.buttonWidth+"px",float:"left"}},[e("a-popover",{attrs:{placement:"leftTop"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("LT")])],2),t._v(" "),e("a-popover",{attrs:{placement:"left"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("Left")])],2),t._v(" "),e("a-popover",{attrs:{placement:"leftBottom"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("LB")])],2)],1),t._v(" "),e("div",{style:{width:t.buttonWidth+"px",marginLeft:4*t.buttonWidth+24+"px"}},[e("a-popover",{attrs:{placement:"rightTop"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("RT")])],2),t._v(" "),e("a-popover",{attrs:{placement:"right"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("Right")])],2),t._v(" "),e("a-popover",{attrs:{placement:"rightBottom"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("RB")])],2)],1),t._v(" "),e("div",{style:{marginLeft:t.buttonWidth+"px",clear:"both",whiteSpace:"nowrap"}},[e("a-popover",{attrs:{placement:"bottomLeft"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("BL")])],2),t._v(" "),e("a-popover",{attrs:{placement:"bottom"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("Bottom")])],2),t._v(" "),e("a-popover",{attrs:{placement:"bottomRight"}},[e("template",{slot:"content"},[e("p",[t._v("Content")]),t._v(" "),e("p",[t._v("Content")])]),t._v(" "),e("template",{slot:"title"},[e("span",[t._v("Title")])]),t._v(" "),e("a-button",[t._v("BR")])],2)],1)])};E._withStripped=!0;var I={data:function(){return{buttonWidth:70}}},D=(e(1529),e(1530)),z=e.n(D),F=e(1531),J=e.n(F),N=Object(r.a)(I,E,[],!1,null,null,null);"function"==typeof z.a&&z()(N),"function"==typeof J.a&&J()(N),N.options.__file="components/popover/demo/placement.vue";var U=N.exports,q='<cn>\r\n#### 位置 \r\n\r\n位置有十二个方向。\r\n</cn>\r\n<us>\r\n#### Placement\r\n</us>\r\n\r\n\r\n<template>\r\n  <div id="components-popover-demo-placement">\r\n    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: \'nowrap\' }">\r\n      <a-popover placement="topLeft">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>TL</a-button>\r\n      </a-popover>\r\n      <a-popover placement="top">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>Top</a-button>\r\n      </a-popover>\r\n      <a-popover placement="topRight">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>TR</a-button>\r\n      </a-popover>\r\n    </div>\r\n    <div :style="{ width: `${buttonWidth}px`, float: \'left\' }">\r\n      <a-popover placement="leftTop">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>LT</a-button>\r\n      </a-popover>\r\n      <a-popover placement="left">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>Left</a-button>\r\n      </a-popover>\r\n      <a-popover placement="leftBottom">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>LB</a-button>\r\n      </a-popover>\r\n    </div>\r\n    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">\r\n      <a-popover placement="rightTop">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>RT</a-button>\r\n      </a-popover>\r\n      <a-popover placement="right">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>Right</a-button>\r\n      </a-popover>\r\n      <a-popover placement="rightBottom">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>RB</a-button>\r\n      </a-popover>\r\n    </div>\r\n    <div :style="{ marginLeft: `${buttonWidth}px`, clear: \'both\', whiteSpace: \'nowrap\' }">\r\n      <a-popover placement="bottomLeft">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>BL</a-button>\r\n      </a-popover>\r\n      <a-popover placement="bottom">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>Bottom</a-button>\r\n      </a-popover>\r\n      <a-popover placement="bottomRight">\r\n        <template slot="content">\r\n          <p>Content</p>\r\n          <p>Content</p>\r\n        </template>\r\n        <template slot="title">\r\n          <span>Title</span>\r\n        </template>\r\n        <a-button>BR</a-button>\r\n      </a-popover>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      buttonWidth: 70,\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n<style>\r\n#components-popover-demo-placement .ant-btn {\r\n  width: 70px;\r\n  text-align: center;\r\n  padding: 0;\r\n  margin-right: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n</style>\r\n',G=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a-popover",{staticStyle:{width:"500px"},attrs:{title:"Hover title",trigger:"hover",visible:t.hovered},on:{visibleChange:t.handleHoverChange}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n    This is hover content.\n  ")]),t._v(" "),e("a-popover",{attrs:{title:"Click title",trigger:"click",visible:t.clicked},on:{visibleChange:t.handleClickChange}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("div",[t._v("This is click content.")]),t._v(" "),e("a",{on:{click:t.hide}},[t._v("Close")])]),t._v(" "),e("a-button",[t._v("Hover and click / 悬停并单击")])],1)],1)};G._withStripped=!0;var K={data:function(){return{clicked:!1,hovered:!1}},methods:{hide:function(){this.clicked=!1,this.hovered=!1},handleHoverChange:function(t){this.clicked=!1,this.hovered=t},handleClickChange:function(t){this.clicked=t,this.hovered=!1}}},M=e(1532),Q=e.n(M),V=e(1533),X=e.n(V),Y=Object(r.a)(K,G,[],!1,null,null,null);"function"==typeof Q.a&&Q()(Y),"function"==typeof X.a&&X()(Y),Y.options.__file="components/popover/demo/hover-with-click-popover.vue";var Z=Y.exports,tt='<cn>\r\n#### 悬停点击弹出窗口 \r\n\r\n以下示例显示如何创建可悬停和单击的弹出窗口。\r\n</cn>\r\n<us>\r\n#### Hover With Click Popover\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-popover\r\n    style="width: 500px"\r\n    title="Hover title"\r\n    trigger="hover"\r\n    :visible="hovered"\r\n    @visibleChange="handleHoverChange"\r\n  >\r\n    <div slot="content">\r\n      This is hover content.\r\n    </div>\r\n    <a-popover\r\n      title="Click title"\r\n      trigger="click"\r\n      :visible="clicked"\r\n      @visibleChange="handleClickChange"\r\n    >\r\n      <div slot="content">\r\n        <div>This is click content.</div>\r\n        <a @click="hide">Close</a>\r\n      </div>\r\n      <a-button>Hover and click / 悬停并单击</a-button>\r\n    </a-popover>\r\n  </a-popover>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      clicked: false,\r\n      hovered: false,\r\n    };\r\n  },\r\n  methods: {\r\n    hide() {\r\n      this.clicked = false;\r\n      this.hovered = false;\r\n    },\r\n    handleHoverChange(visible) {\r\n      this.clicked = false;\r\n      this.hovered = visible;\r\n    },\r\n    handleClickChange(visible) {\r\n      this.clicked = visible;\r\n      this.hovered = false;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',nt=function(){var t=this.$createElement;this._self._c;return this._m(0)};nt._withStripped=!0;var et=Object(r.a)({},nt,[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",{attrs:{id:"API"}},[t._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("content")]),t._v(" "),e("td",[t._v("卡片内容")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("slot")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("卡片标题")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("slot")])])])]),t._v(" "),e("p",[t._v("更多属性请参考 "),e("a",{attrs:{href:"#/components/tooltip-cn/#API"}},[t._v("Tooltip")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"注意"}},[t._v("注意 "),e("a",{staticClass:"anchor",attrs:{href:"#注意","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("p",[t._v("请确保 "),e("code",{pre:!0},[t._v("Popover")]),t._v(" 的子元素能接受 "),e("code",{pre:!0},[t._v("mouseenter")]),t._v("、"),e("code",{pre:!0},[t._v("mouseleave")]),t._v("、"),e("code",{pre:!0},[t._v("focus")]),t._v("、"),e("code",{pre:!0},[t._v("click")]),t._v(" 事件。")])])}],!1,null,null,null);et.options.__file="components/popover/index.zh-CN.md";var ot=et.exports,rt=function(){var t=this.$createElement;return(this._self._c||t)("div")};rt._withStripped=!0;var pt=Object(r.a)({},rt,[],!1,null,null,null);pt.options.__file="components/popover/index.en-US.md";var at=pt.exports,lt="",it="# Popover\n\n点击/鼠标移入元素，弹出气泡式的卡片浮层。\n\n## 何时使用\n\n当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。\n\n和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。\n\n## 代码演示",vt={category:"Components",subtitle:"气泡卡片",type:"Data Display",zhType:"数据展示",cols:2,title:"Popover",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:it,us:lt}}),t("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[t("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[t("demo-container",{attrs:{code:c}},[t(s)]),t("demo-container",{attrs:{code:g}},[t(C)]),t("demo-container",{attrs:{code:R}},[t(B)])]),t("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[t("demo-container",{attrs:{code:j}},[t(O)]),t("demo-container",{attrs:{code:q}},[t(U)]),t("demo-container",{attrs:{code:tt}},[t(Z)])])]),t("api",[t(ot,{slot:"cn"}),t(at)])])}},st=Object(r.a)(vt,void 0,void 0,!1,null,null,null);st.options.__file="components/popover/demo/index.vue";n.default=st.exports}}]);