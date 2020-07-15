(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1381:function(t,n){},1382:function(t,n){},1383:function(t,n){t.exports='<cn>\r\n#### 典型卡片 \r\n\r\n包含标题、内容、操作区域。\r\n可通过设置size为`default`或者`small`，控制尺寸\r\n</cn>\r\n<us>\r\n#### Basic Card\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-card title="Default size card" style="width: 300px">\r\n      <a slot="extra" href="#">more</a>\r\n      <p>card content</p>\r\n      <p>card content</p>\r\n      <p>card content</p>\r\n    </a-card>\r\n    <br />\r\n    <a-card size="small" title="Small size card" style="width: 300px">\r\n      <a slot="extra" href="#">more</a>\r\n      <p>card content</p>\r\n      <p>card content</p>\r\n      <p>card content</p>\r\n    </a-card>\r\n  </div>\r\n</template>\r\n'},1384:function(t,n){},1385:function(t,n){},1386:function(t,n){t.exports='<cn>\r\n#### 更灵活的内容展示 \r\n\r\n可以利用 `Card.Meta` 支持更灵活的内容\r\n</cn>\r\n<us>\r\n#### Customized Content\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-card hoverable style="width: 240px">\r\n    <img\r\n      slot="cover"\r\n      alt="example"\r\n      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"\r\n    />\r\n    <a-card-meta title="Europe Street beat">\r\n      <template slot="description">\r\n        www.instagram.com\r\n      </template>\r\n    </a-card-meta>\r\n  </a-card>\r\n</template>\r\n'},1387:function(t,n){},1388:function(t,n){},1389:function(t,n){t.exports='<cn>\r\n#### 栅格卡片 \r\n\r\n在系统概览页面常常和栅格进行配合。\r\n</cn>\r\n<us>\r\n#### Card In Column\r\n</us>\r\n\r\n\r\n<template>\r\n  <div style="background-color: #ececec; padding: 20px;">\r\n    <a-row :gutter="16">\r\n      <a-col :span="8">\r\n        <a-card title="Card title" :bordered="false">\r\n          <p>card content</p>\r\n        </a-card>\r\n      </a-col>\r\n      <a-col :span="8">\r\n        <a-card title="Card title" :bordered="false">\r\n          <p>card content</p>\r\n        </a-card>\r\n      </a-col>\r\n      <a-col :span="8">\r\n        <a-card title="Card title" :bordered="false">\r\n          <p>card content</p>\r\n        </a-card>\r\n      </a-col>\r\n    </a-row>\r\n  </div>\r\n</template>\r\n'},1390:function(t,n){},1391:function(t,n){},1392:function(t,n){t.exports='<cn>\r\n#### 预加载的卡片 \r\n\r\n数据读入前会有文本块样式\r\n</cn>\r\n<us>\r\n#### Loading Card\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-card :loading="loading" title="Card title">\r\n      whatever content\r\n    </a-card>\r\n    <a-button style="marginTop: 16px" @click="handleClick">\r\n      Toggle loading\r\n    </a-button>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      loading: true,\r\n    };\r\n  },\r\n  methods: {\r\n    handleClick() {\r\n      this.loading = !this.loading;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},1393:function(t,n){},1394:function(t,n){},1395:function(t,n){t.exports='<cn>\r\n#### 简洁卡片 \r\n\r\n只包含内容区域。\r\n</cn>\r\n<us>\r\n#### Simple Card\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-card style="width: 300px">\r\n    <p>Card content</p>\r\n    <p>Card content</p>\r\n    <p>Card content</p>\r\n  </a-card>\r\n</template>\r\n'},1396:function(t,n){},1397:function(t,n){},1398:function(t,n){t.exports='<cn>\r\n#### 无边框 \r\n\r\n在灰色背景上使用无边框的卡片\r\n</cn>\r\n<us>\r\n#### No Border\r\n</us>\r\n\r\n\r\n<template>\r\n  <div style="background:#ECECEC; padding:30px">\r\n    <a-card title="Card title" :bordered="false" style="width: 300px">\r\n      <p>Card content</p>\r\n      <p>Card content</p>\r\n      <p>Card content</p>\r\n    </a-card>\r\n  </div>\r\n</template>\r\n'},1399:function(t,n){},1400:function(t,n){},1401:function(t,n){t.exports='<cn>\r\n#### 网格型内嵌卡片 \r\n\r\n一种常见的卡片内容区隔模式。\r\n</cn>\r\n<us>\r\n#### Grid Card\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-card title="Card Title">\r\n    <a-card-grid style="width:25%;text-align:center">\r\n      Content\r\n    </a-card-grid>\r\n    <a-card-grid style="width:25%;text-align:center" :hoverable="false">\r\n      Content\r\n    </a-card-grid>\r\n    <a-card-grid style="width:25%;text-align:center">\r\n      Content\r\n    </a-card-grid>\r\n    <a-card-grid style="width:25%;text-align:center">\r\n      Content\r\n    </a-card-grid>\r\n    <a-card-grid style="width:25%;text-align:center">\r\n      Content\r\n    </a-card-grid>\r\n    <a-card-grid style="width:25%;text-align:center">\r\n      Content\r\n    </a-card-grid>\r\n    <a-card-grid style="width:25%;text-align:center">\r\n      Content\r\n    </a-card-grid>\r\n    <a-card-grid style="width:25%;text-align:center">\r\n      Content\r\n    </a-card-grid>\r\n  </a-card>\r\n</template>\r\n'},1402:function(t,n){},1403:function(t,n){},1404:function(t,n){t.exports='<cn>\r\n#### 内部卡片 \r\n\r\n可以放在普通卡片内部，展示多层级结构的信息\r\n</cn>\r\n<us>\r\n#### Inner Card\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-card title="Card title">\r\n    <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500">\r\n      Group title\r\n    </p>\r\n    <a-card title="Inner card title">\r\n      <a slot="extra" href="#">More</a>\r\n      Inner Card content\r\n    </a-card>\r\n    <a-card title="Inner card title" :style="{ marginTop: \'16px\' }">\r\n      <a slot="extra" href="#">More</a>\r\n      Inner Card content\r\n    </a-card>\r\n  </a-card>\r\n</template>\r\n'},1405:function(t,n){},1406:function(t,n){},1407:function(t,n){t.exports='<cn>\r\n#### 支持更多内容配置 \r\n\r\n一种支持封面、头像、标题和描述信息的卡片。\r\n</cn>\r\n<us>\r\n#### Support More Content Configuration\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-card hoverable style="width: 300px">\r\n    <img\r\n      slot="cover"\r\n      alt="example"\r\n      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"\r\n    />\r\n    <template slot="actions" class="ant-card-actions">\r\n      <a-icon key="setting" type="setting" />\r\n      <a-icon key="edit" type="edit" />\r\n      <a-icon key="ellipsis" type="ellipsis" />\r\n    </template>\r\n    <a-card-meta title="Card title" description="This is the description">\r\n      <a-avatar\r\n        slot="avatar"\r\n        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"\r\n      />\r\n    </a-card-meta>\r\n  </a-card>\r\n</template>\r\n'},1408:function(t,n){},1409:function(t,n){},1410:function(t,n){t.exports="<cn>\r\n#### 带页签的卡片 \r\n\r\n可承载更多内容\r\n</cn>\r\n<us>\r\n#### With Tabs\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-card\r\n      style=\"width:100%\"\r\n      title=\"Card title\"\r\n      :tab-list=\"tabList\"\r\n      :active-tab-key=\"key\"\r\n      @tabChange=\"key => onTabChange(key, 'key')\"\r\n    >\r\n      <span slot=\"customRender\" slot-scope=\"item\"> <a-icon type=\"home\" />{{ item.key }} </span>\r\n      <a slot=\"extra\" href=\"#\">More</a>\r\n      {{ contentList[key] }}\r\n    </a-card>\r\n    <br /><br />\r\n    <a-card\r\n      style=\"width:100%\"\r\n      :tab-list=\"tabListNoTitle\"\r\n      :active-tab-key=\"noTitleKey\"\r\n      @tabChange=\"key => onTabChange(key, 'noTitleKey')\"\r\n    >\r\n      <p v-if=\"noTitleKey === 'article'\">\r\n        article content\r\n      </p>\r\n      <p v-else-if=\"noTitleKey === 'app'\">\r\n        app content\r\n      </p>\r\n      <p v-else=\"noTitleKey === 'project'\">\r\n        project content\r\n      </p>\r\n      <a slot=\"tabBarExtraContent\" href=\"#\">More</a>\r\n    </a-card>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      tabList: [\r\n        {\r\n          key: 'tab1',\r\n          // tab: 'tab1',\r\n          scopedSlots: { tab: 'customRender' },\r\n        },\r\n        {\r\n          key: 'tab2',\r\n          tab: 'tab2',\r\n        },\r\n      ],\r\n      contentList: {\r\n        tab1: 'content1',\r\n        tab2: 'content2',\r\n      },\r\n      tabListNoTitle: [\r\n        {\r\n          key: 'article',\r\n          tab: 'article',\r\n        },\r\n        {\r\n          key: 'app',\r\n          tab: 'app',\r\n        },\r\n        {\r\n          key: 'project',\r\n          tab: 'project',\r\n        },\r\n      ],\r\n      key: 'tab1',\r\n      noTitleKey: 'app',\r\n    };\r\n  },\r\n  methods: {\r\n    onTabChange(key, type) {\r\n      console.log(key, type);\r\n      this[type] = key;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n"},2767:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("a-card",{staticStyle:{width:"300px"},attrs:{title:"Default size card"}},[r("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("more")]),t._v(" "),r("p",[t._v("card content")]),t._v(" "),r("p",[t._v("card content")]),t._v(" "),r("p",[t._v("card content")])]),t._v(" "),r("br"),t._v(" "),r("a-card",{staticStyle:{width:"300px"},attrs:{size:"small",title:"Small size card"}},[r("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("more")]),t._v(" "),r("p",[t._v("card content")]),t._v(" "),r("p",[t._v("card content")]),t._v(" "),r("p",[t._v("card content")])])],1)};e._withStripped=!0;var a=r(32),i=r(1381),o=r.n(i),c=r(1382),d=r.n(c),s=Object(a.a)({},e,[],!1,null,null,null);"function"==typeof o.a&&o()(s),"function"==typeof d.a&&d()(s),s.options.__file="components/card/demo/basic-card.vue";var l=s.exports,v=r(1383),_=r.n(v),p=function(){var t=this.$createElement,n=this._self._c||t;return n("a-card",{staticStyle:{width:"240px"},attrs:{hoverable:""}},[n("img",{attrs:{slot:"cover",alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},slot:"cover"}),this._v(" "),n("a-card-meta",{attrs:{title:"Europe Street beat"}},[n("template",{slot:"description"},[this._v("\n      www.instagram.com\n    ")])],2)],1)};p._withStripped=!0;var u=r(1384),h=r.n(u),f=r(1385),y=r.n(f),m=Object(a.a)({},p,[],!1,null,null,null);"function"==typeof h.a&&h()(m),"function"==typeof y.a&&y()(m),m.options.__file="components/card/demo/customized-content.vue";var b=m.exports,g=r(1386),C=r.n(g),x=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{"background-color":"#ececec",padding:"20px"}},[n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:8}},[n("a-card",{attrs:{title:"Card title",bordered:!1}},[n("p",[this._v("card content")])])],1),this._v(" "),n("a-col",{attrs:{span:8}},[n("a-card",{attrs:{title:"Card title",bordered:!1}},[n("p",[this._v("card content")])])],1),this._v(" "),n("a-col",{attrs:{span:8}},[n("a-card",{attrs:{title:"Card title",bordered:!1}},[n("p",[this._v("card content")])])],1)],1)],1)};x._withStripped=!0;var w=r(1387),k=r.n(w),S=r(1388),T=r.n(S),j=Object(a.a)({},x,[],!1,null,null,null);"function"==typeof k.a&&k()(j),"function"==typeof T.a&&T()(j),j.options.__file="components/card/demo/card-in-column.vue";var E=j.exports,O=r(1389),z=r.n(O),L=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("a-card",{attrs:{loading:this.loading,title:"Card title"}},[this._v("\n    whatever content\n  ")]),this._v(" "),n("a-button",{staticStyle:{marginTop:"16px"},on:{click:this.handleClick}},[this._v("\n    Toggle loading\n  ")])],1)};L._withStripped=!0;var K={data:function(){return{loading:!0}},methods:{handleClick:function(){this.loading=!this.loading}}},I=r(1390),M=r.n(I),$=r(1391),A=r.n($),B=Object(a.a)(K,L,[],!1,null,null,null);"function"==typeof M.a&&M()(B),"function"==typeof A.a&&A()(B),B.options.__file="components/card/demo/loading-card.vue";var G=B.exports,X=r(1392),q=r.n(X),D=function(){var t=this.$createElement,n=this._self._c||t;return n("a-card",{staticStyle:{width:"300px"}},[n("p",[this._v("Card content")]),this._v(" "),n("p",[this._v("Card content")]),this._v(" "),n("p",[this._v("Card content")])])};D._withStripped=!0;var N=r(1393),P=r.n(N),W=r(1394),H=r.n(W),J=Object(a.a)({},D,[],!1,null,null,null);"function"==typeof P.a&&P()(J),"function"==typeof H.a&&H()(J),J.options.__file="components/card/demo/simple-card.vue";var R=J.exports,Q=r(1395),V=r.n(Q),Y=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{background:"#ECECEC",padding:"30px"}},[n("a-card",{staticStyle:{width:"300px"},attrs:{title:"Card title",bordered:!1}},[n("p",[this._v("Card content")]),this._v(" "),n("p",[this._v("Card content")]),this._v(" "),n("p",[this._v("Card content")])])],1)};Y._withStripped=!0;var U=r(1396),F=r.n(U),Z=r(1397),tt=r.n(Z),nt=Object(a.a)({},Y,[],!1,null,null,null);"function"==typeof F.a&&F()(nt),"function"==typeof tt.a&&tt()(nt),nt.options.__file="components/card/demo/no-border.vue";var rt=nt.exports,et=r(1398),at=r.n(et),it=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("a-card",{attrs:{title:"Card Title"}},[r("a-card-grid",{staticStyle:{width:"25%","text-align":"center"}},[t._v("\n    Content\n  ")]),t._v(" "),r("a-card-grid",{staticStyle:{width:"25%","text-align":"center"},attrs:{hoverable:!1}},[t._v("\n    Content\n  ")]),t._v(" "),r("a-card-grid",{staticStyle:{width:"25%","text-align":"center"}},[t._v("\n    Content\n  ")]),t._v(" "),r("a-card-grid",{staticStyle:{width:"25%","text-align":"center"}},[t._v("\n    Content\n  ")]),t._v(" "),r("a-card-grid",{staticStyle:{width:"25%","text-align":"center"}},[t._v("\n    Content\n  ")]),t._v(" "),r("a-card-grid",{staticStyle:{width:"25%","text-align":"center"}},[t._v("\n    Content\n  ")]),t._v(" "),r("a-card-grid",{staticStyle:{width:"25%","text-align":"center"}},[t._v("\n    Content\n  ")]),t._v(" "),r("a-card-grid",{staticStyle:{width:"25%","text-align":"center"}},[t._v("\n    Content\n  ")])],1)};it._withStripped=!0;var ot=r(1399),ct=r.n(ot),dt=r(1400),st=r.n(dt),lt=Object(a.a)({},it,[],!1,null,null,null);"function"==typeof ct.a&&ct()(lt),"function"==typeof st.a&&st()(lt),lt.options.__file="components/card/demo/grid-card.vue";var vt=lt.exports,_t=r(1401),pt=r.n(_t),ut=function(){var t=this.$createElement,n=this._self._c||t;return n("a-card",{attrs:{title:"Card title"}},[n("p",{staticStyle:{fontSize:"14px",color:"rgba(0, 0, 0, 0.85)",marginBottom:"16px",fontWeight:"500"}},[this._v("\n    Group title\n  ")]),this._v(" "),n("a-card",{attrs:{title:"Inner card title"}},[n("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[this._v("More")]),this._v("\n    Inner Card content\n  ")]),this._v(" "),n("a-card",{style:{marginTop:"16px"},attrs:{title:"Inner card title"}},[n("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[this._v("More")]),this._v("\n    Inner Card content\n  ")])],1)};ut._withStripped=!0;var ht=r(1402),ft=r.n(ht),yt=r(1403),mt=r.n(yt),bt=Object(a.a)({},ut,[],!1,null,null,null);"function"==typeof ft.a&&ft()(bt),"function"==typeof mt.a&&mt()(bt),bt.options.__file="components/card/demo/inner-card.vue";var gt=bt.exports,Ct=r(1404),xt=r.n(Ct),wt=function(){var t=this.$createElement,n=this._self._c||t;return n("a-card",{staticStyle:{width:"300px"},attrs:{hoverable:""}},[n("img",{attrs:{slot:"cover",alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"},slot:"cover"}),this._v(" "),n("template",{staticClass:"ant-card-actions",slot:"actions"},[n("a-icon",{key:"setting",attrs:{type:"setting"}}),this._v(" "),n("a-icon",{key:"edit",attrs:{type:"edit"}}),this._v(" "),n("a-icon",{key:"ellipsis",attrs:{type:"ellipsis"}})],1),this._v(" "),n("a-card-meta",{attrs:{title:"Card title",description:"This is the description"}},[n("a-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},slot:"avatar"})],1)],2)};wt._withStripped=!0;var kt=r(1405),St=r.n(kt),Tt=r(1406),jt=r.n(Tt),Et=Object(a.a)({},wt,[],!1,null,null,null);"function"==typeof St.a&&St()(Et),"function"==typeof jt.a&&jt()(Et),Et.options.__file="components/card/demo/support-more-content-configuration.vue";var Ot=Et.exports,zt=r(1407),Lt=r.n(zt),Kt=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("a-card",{staticStyle:{width:"100%"},attrs:{title:"Card title","tab-list":t.tabList,"active-tab-key":t.key},on:{tabChange:function(n){return t.onTabChange(n,"key")}},scopedSlots:t._u([{key:"customRender",fn:function(n){return r("span",{},[r("a-icon",{attrs:{type:"home"}}),t._v(t._s(n.key)+" ")],1)}}])},[t._v(" "),r("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("More")]),t._v("\n    "+t._s(t.contentList[t.key])+"\n  ")]),t._v(" "),r("br"),r("br"),t._v(" "),r("a-card",{staticStyle:{width:"100%"},attrs:{"tab-list":t.tabListNoTitle,"active-tab-key":t.noTitleKey},on:{tabChange:function(n){return t.onTabChange(n,"noTitleKey")}}},["article"===t.noTitleKey?r("p",[t._v("\n      article content\n    ")]):"app"===t.noTitleKey?r("p",[t._v("\n      app content\n    ")]):r("p",[t._v("\n      project content\n    ")]),t._v(" "),r("a",{attrs:{slot:"tabBarExtraContent",href:"#"},slot:"tabBarExtraContent"},[t._v("More")])])],1)};Kt._withStripped=!0;var It={data:function(){return{tabList:[{key:"tab1",scopedSlots:{tab:"customRender"}},{key:"tab2",tab:"tab2"}],contentList:{tab1:"content1",tab2:"content2"},tabListNoTitle:[{key:"article",tab:"article"},{key:"app",tab:"app"},{key:"project",tab:"project"}],key:"tab1",noTitleKey:"app"}},methods:{onTabChange:function(t,n){console.log(t,n),this[n]=t}}},Mt=r(1408),$t=r.n(Mt),At=r(1409),Bt=r.n(At),Gt=Object(a.a)(It,Kt,[],!1,null,null,null);"function"==typeof $t.a&&$t()(Gt),"function"==typeof Bt.a&&Bt()(Gt),Gt.options.__file="components/card/demo/with-tabs.vue";var Xt=Gt.exports,qt=r(1410),Dt=r.n(qt),Nt=function(){var t=this.$createElement;this._self._c;return this._m(0)};Nt._withStripped=!0;var Pt=Object(a.a)({},Nt,[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("h2",{attrs:{id:"API"}},[t._v("API "),r("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),r("h3",{attrs:{id:"Card"}},[t._v("Card "),r("a",{staticClass:"anchor",attrs:{href:"#Card","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")]),t._v(" "),r("th",[t._v("版本")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("actions")]),t._v(" "),r("td",[t._v("卡片操作组，位置在卡片底部")]),t._v(" "),r("td",[t._v("slots")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("activeTabKey")]),t._v(" "),r("td",[t._v("当前激活页签的 key")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("headStyle")]),t._v(" "),r("td",[t._v("自定义标题区域样式")]),t._v(" "),r("td",[t._v("object")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("bodyStyle")]),t._v(" "),r("td",[t._v("内容区域自定义样式")]),t._v(" "),r("td",[t._v("object")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("bordered")]),t._v(" "),r("td",[t._v("是否有边框")]),t._v(" "),r("td",[t._v("boolean")]),t._v(" "),r("td",[t._v("true")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("cover")]),t._v(" "),r("td",[t._v("卡片封面")]),t._v(" "),r("td",[t._v("slot")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("defaultActiveTabKey")]),t._v(" "),r("td",[t._v("初始化选中页签的 key，如果没有设置 activeTabKey")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("第一个页签")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("extra")]),t._v(" "),r("td",[t._v("卡片右上角的操作区域")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("slot")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("hoverable")]),t._v(" "),r("td",[t._v("鼠标移过时可浮起")]),t._v(" "),r("td",[t._v("boolean")]),t._v(" "),r("td",[t._v("false")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("loading")]),t._v(" "),r("td",[t._v("当卡片内容还在加载中时，可以用 loading 展示一个占位")]),t._v(" "),r("td",[t._v("boolean")]),t._v(" "),r("td",[t._v("false")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("tabList")]),t._v(" "),r("td",[t._v("页签标题列表, 可以通过 scopedSlots 属性自定义 tab")]),t._v(" "),r("td",[t._v("Array<{key: string, tab: any, scopedSlots: {tab: 'XXX'}}>")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("tabBarExtraContent")]),t._v(" "),r("td",[t._v("tab bar 上额外的元素")]),t._v(" "),r("td",[t._v("slot")]),t._v(" "),r("td",[t._v("无")]),t._v(" "),r("td",[t._v("1.5.0")])]),t._v(" "),r("tr",[r("td",[t._v("size")]),t._v(" "),r("td",[t._v("card 的尺寸")]),t._v(" "),r("td",[r("code",{pre:!0},[t._v("default")])]),t._v(" "),r("td",[r("code",{pre:!0},[t._v("small")])]),t._v(" "),r("td",[r("code",{pre:!0},[t._v("default")])])]),t._v(" "),r("tr",[r("td",[t._v("title")]),t._v(" "),r("td",[t._v("卡片标题")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("slot")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("type")]),t._v(" "),r("td",[t._v("卡片类型，可设置为 "),r("code",{pre:!0},[t._v("inner")]),t._v(" 或 不设置")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td")])])]),t._v(" "),r("h3",{attrs:{id:"事件"}},[t._v("事件 "),r("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("事件名称")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("回调参数")]),t._v(" "),r("th",[t._v("版本")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("tabChange")]),t._v(" "),r("td",[t._v("页签切换的回调")]),t._v(" "),r("td",[t._v("(key) => void")]),t._v(" "),r("td",[t._v("-")])])])]),t._v(" "),r("h3",{attrs:{id:"Card.Grid"}},[t._v("Card.Grid "),r("a",{staticClass:"anchor",attrs:{href:"#Card.Grid","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),r("h3",{attrs:{id:"Card.Meta"}},[t._v("Card.Meta "),r("a",{staticClass:"anchor",attrs:{href:"#Card.Meta","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")]),t._v(" "),r("th",[t._v("版本")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("avatar")]),t._v(" "),r("td",[t._v("头像/图标")]),t._v(" "),r("td",[t._v("slot")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("description")]),t._v(" "),r("td",[t._v("描述内容")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("slot")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("title")]),t._v(" "),r("td",[t._v("标题内容")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("slot")]),t._v(" "),r("td",[t._v("-")])])])])])}],!1,null,null,null);Pt.options.__file="components/card/index.zh-CN.md";var Wt=Pt.exports,Ht=function(){var t=this.$createElement;return(this._self._c||t)("div")};Ht._withStripped=!0;var Jt=Object(a.a)({},Ht,[],!1,null,null,null);Jt.options.__file="components/card/index.en-US.md";var Rt=Jt.exports,Qt="",Vt="# Card 卡片\n\n通用卡片容器\n\n## 何时使用\n\n最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。\n\n## 代码演示",Yt={category:"Components",subtitle:"卡片",type:"Data Display",zhType:"数据展示",cols:2,title:"Card",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:Vt,us:Qt}}),t("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[t("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[t("demo-container",{attrs:{code:_.a}},[t(l)]),t("demo-container",{attrs:{code:C.a}},[t(b)]),t("demo-container",{attrs:{code:z.a}},[t(E)]),t("demo-container",{attrs:{code:q.a}},[t(G)]),t("demo-container",{attrs:{code:V.a}},[t(R)])]),t("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[t("demo-container",{attrs:{code:at.a}},[t(rt)]),t("demo-container",{attrs:{code:pt.a}},[t(vt)]),t("demo-container",{attrs:{code:xt.a}},[t(gt)]),t("demo-container",{attrs:{code:Lt.a}},[t(Ot)]),t("demo-container",{attrs:{code:Dt.a}},[t(Xt)])])]),t("api",[t(Wt,{slot:"cn"}),t(Rt)])])}},Ut=Object(a.a)(Yt,void 0,void 0,!1,null,null,null);Ut.options.__file="components/card/demo/index.vue";n.default=Ut.exports}}]);