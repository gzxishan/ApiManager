(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1207:function(t,n,a){},1706:function(t,n){},1707:function(t,n){},1708:function(t,n){t.exports='<cn>\r\n#### 基本用法 \r\n\r\n默认选中第一项。\r\n</cn>\r\n<us>\r\n#### Basic Usage\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <a-tabs default-active-key="1" @change="callback">\r\n      <a-tab-pane key="1" tab="Tab 1">\r\n        Content of Tab Pane 1\r\n      </a-tab-pane>\r\n      <a-tab-pane key="2" tab="Tab 2" force-render>\r\n        Content of Tab Pane 2\r\n      </a-tab-pane>\r\n      <a-tab-pane key="3" tab="Tab 3">\r\n        Content of Tab Pane 3\r\n      </a-tab-pane>\r\n    </a-tabs>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    callback(key) {\r\n      console.log(key);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},1709:function(t,n){},1710:function(t,n){},1711:function(t,n){t.exports='<cn>\r\n#### 禁用 \r\n\r\n禁用某一项。\r\n</cn>\r\n<us>\r\n#### Disabled\r\n</us>\r\n\r\r\n<template>\r\n  <a-tabs default-active-key="1">\r\n    <a-tab-pane key="1" tab="Tab 1">\r\n      Tab 1\r\n    </a-tab-pane>\r\n    <a-tab-pane key="2" tab="Tab 2" disabled>\r\n      Tab 2\r\n    </a-tab-pane>\r\n    <a-tab-pane key="3" tab="Tab 3">\r\n      Tab 3\r\n    </a-tab-pane>\r\n  </a-tabs>\r\n</template>\r\n'},1712:function(t,n){},1713:function(t,n){},1714:function(t,n){t.exports='<cn>\r\n#### 图标 \r\n\r\n有图标的标签。\r\n</cn>\r\n<us>\r\n#### Icon\r\n</us>\r\n\r\r\n<template>\r\n  <a-tabs default-active-key="2">\r\n    <a-tab-pane key="1">\r\n      <span slot="tab">\r\n        <a-icon type="apple" />\r\n        Tab 1\r\n      </span>\r\n      Tab 1\r\n    </a-tab-pane>\r\n    <a-tab-pane key="2">\r\n      <span slot="tab">\r\n        <a-icon type="android" />\r\n        Tab 2\r\n      </span>\r\n      Tab 2\r\n    </a-tab-pane>\r\n  </a-tabs>\r\n</template>\r\n'},1715:function(t,n){},1716:function(t,n){},1717:function(t,n){t.exports='<cn>\r\n#### 滑动 \r\n\r\n可以左右、上下滑动，容纳更多标签。\r\n</cn>\r\n<us>\r\n#### Slide\r\n</us>\r\n\r\r\n<template>\r\n  <div style="width: 500px">\r\n    <a-radio-group v-model="mode" :style="{ marginBottom: \'8px\' }">\r\n      <a-radio-button value="top">\r\n        Horizontal\r\n      </a-radio-button>\r\n      <a-radio-button value="left">\r\n        Vertical\r\n      </a-radio-button>\r\n    </a-radio-group>\r\n    <a-tabs\r\n      default-active-key="1"\r\n      :tab-position="mode"\r\n      :style="{ height: \'200px\' }"\r\n      @prevClick="callback"\r\n      @nextClick="callback"\r\n    >\r\n      <a-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`"> Content of tab {{ i }} </a-tab-pane>\r\n    </a-tabs>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      mode: \'top\',\r\n    };\r\n  },\r\n  methods: {\r\n    callback(val) {\r\n      console.log(val);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},1718:function(t,n){},1719:function(t,n){},1720:function(t,n){t.exports='<cn>\r\n#### 附加内容 \r\n\r\n可以在页签右边添加附加操作。\r\n</cn>\r\n<us>\r\n#### Extra Content\r\n</us>\r\n\r\r\n<template>\r\n  <a-tabs>\r\n    <a-tab-pane key="1" tab="Tab 1">\r\n      Content of tab 1\r\n    </a-tab-pane>\r\n    <a-tab-pane key="2" tab="Tab 2">\r\n      Content of tab 2\r\n    </a-tab-pane>\r\n    <a-tab-pane key="3" tab="Tab 3">\r\n      Content of tab 3\r\n    </a-tab-pane>\r\n    <a-button slot="tabBarExtraContent">\r\n      Extra Action\r\n    </a-button>\r\n  </a-tabs>\r\n</template>\r\n'},1721:function(t,n){},1722:function(t,n){},1723:function(t,n){t.exports='<cn>\r\n#### 大小 \r\n\r\n大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。\r\n</cn>\r\n<us>\r\n#### Size\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <a-radio-group v-model="size" style="margin-bottom: 16px">\r\n      <a-radio-button value="small">\r\n        Small\r\n      </a-radio-button>\r\n      <a-radio-button value="default">\r\n        Default\r\n      </a-radio-button>\r\n      <a-radio-button value="large">\r\n        Large\r\n      </a-radio-button>\r\n    </a-radio-group>\r\n    <a-tabs default-active-key="2" :size="size">\r\n      <a-tab-pane key="1" tab="Tab 1">\r\n        Content of tab 1\r\n      </a-tab-pane>\r\n      <a-tab-pane key="2" tab="Tab 2">\r\n        Content of tab 2\r\n      </a-tab-pane>\r\n      <a-tab-pane key="3" tab="Tab 3">\r\n        Content of tab 3\r\n      </a-tab-pane>\r\n    </a-tabs>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      size: \'small\',\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n'},1724:function(t,n){},1725:function(t,n){},1726:function(t,n){t.exports='<cn>\r\n#### 位置 \r\n\r\n有四个位置，`tabPosition="left|right|top|bottom"`。\r\n</cn>\r\n<us>\r\n#### Position\r\n</us>\r\n\r\r\n<template>\r\n  <div style="width: 500px">\r\n    <a-radio-group v-model="tabPosition" style="margin:8px">\r\n      <a-radio-button value="top">\r\n        top\r\n      </a-radio-button>\r\n      <a-radio-button value="bottom">\r\n        bottom\r\n      </a-radio-button>\r\n      <a-radio-button value="left">\r\n        left\r\n      </a-radio-button>\r\n      <a-radio-button value="right">\r\n        right\r\n      </a-radio-button>\r\n    </a-radio-group>\r\n    <a-tabs default-active-key="1" :tab-position="tabPosition">\r\n      <a-tab-pane key="1" tab="Tab 1">\r\n        Content of Tab 1\r\n      </a-tab-pane>\r\n      <a-tab-pane key="2" tab="Tab 2">\r\n        Content of Tab 2\r\n      </a-tab-pane>\r\n      <a-tab-pane key="3" tab="Tab 3">\r\n        Content of Tab 3\r\n      </a-tab-pane>\r\n    </a-tabs>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      tabPosition: \'top\',\r\n    };\r\n  },\r\n  methods: {\r\n    callback(val) {\r\n      console.log(val);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},1727:function(t,n){},1728:function(t,n){},1729:function(t,n){t.exports='<cn>\r\n#### 卡片式页签 \r\n\r\n另一种样式的页签，不提供对应的垂直样式。\r\n</cn>\r\n<us>\r\n#### Card Type Tab\r\n</us>\r\n\r\r\n<template>\r\n  <a-tabs type="card" @change="callback">\r\n    <a-tab-pane key="1" tab="Tab 1">\r\n      Content of Tab Pane 1\r\n    </a-tab-pane>\r\n    <a-tab-pane key="2" tab="Tab 2">\r\n      Content of Tab Pane 2\r\n    </a-tab-pane>\r\n    <a-tab-pane key="3" tab="Tab 3">\r\n      Content of Tab Pane 3\r\n    </a-tab-pane>\r\n  </a-tabs>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    callback(key) {\r\n      console.log(key);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},1730:function(t,n){},1731:function(t,n){},1732:function(t,n){t.exports="<cn>\r\n#### 新增和关闭页签 \r\n\r\n只有卡片样式的页签支持新增和关闭选项。\r\n使用 `closable={false}` 禁止关闭。\r\n</cn>\r\n<us>\r\n#### Add _ Close Tab\r\n</us>\r\n\r\r\n<template>\r\n  <a-tabs v-model=\"activeKey\" type=\"editable-card\" @edit=\"onEdit\">\r\n    <a-tab-pane v-for=\"pane in panes\" :key=\"pane.key\" :tab=\"pane.title\" :closable=\"pane.closable\">\r\n      {{ pane.content }}\r\n    </a-tab-pane>\r\n  </a-tabs>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    const panes = [\r\n      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },\r\n      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },\r\n      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },\r\n    ];\r\n    return {\r\n      activeKey: panes[0].key,\r\n      panes,\r\n      newTabIndex: 0,\r\n    };\r\n  },\r\n  methods: {\r\n    callback(key) {\r\n      console.log(key);\r\n    },\r\n    onEdit(targetKey, action) {\r\n      this[action](targetKey);\r\n    },\r\n    add() {\r\n      const panes = this.panes;\r\n      const activeKey = `newTab${this.newTabIndex++}`;\r\n      panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });\r\n      this.panes = panes;\r\n      this.activeKey = activeKey;\r\n    },\r\n    remove(targetKey) {\r\n      let activeKey = this.activeKey;\r\n      let lastIndex;\r\n      this.panes.forEach((pane, i) => {\r\n        if (pane.key === targetKey) {\r\n          lastIndex = i - 1;\r\n        }\r\n      });\r\n      const panes = this.panes.filter(pane => pane.key !== targetKey);\r\n      if (panes.length && activeKey === targetKey) {\r\n        if (lastIndex >= 0) {\r\n          activeKey = panes[lastIndex].key;\r\n        } else {\r\n          activeKey = panes[0].key;\r\n        }\r\n      }\r\n      this.panes = panes;\r\n      this.activeKey = activeKey;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n"},1733:function(t,n,a){"use strict";var e=a(1207);a.n(e).a},1734:function(t,n){},1735:function(t,n){},1736:function(t,n){t.exports='<cn>\r\n#### 卡片式页签容器 \r\n\r\n用于容器顶部，需要一点额外的样式覆盖。\r\n</cn>\r\n<us>\r\n#### Container Of Card Type Tab\r\n</us>\r\n\r\r\n<template>\r\n  <div class="card-container">\r\n    <a-tabs type="card">\r\n      <a-tab-pane key="1" tab="Tab Title 1">\r\n        <p>Content of Tab Pane 1</p>\r\n        <p>Content of Tab Pane 1</p>\r\n        <p>Content of Tab Pane 1</p>\r\n      </a-tab-pane>\r\n      <a-tab-pane key="2" tab="Tab Title 2">\r\n        <p>Content of Tab Pane 2</p>\r\n        <p>Content of Tab Pane 2</p>\r\n        <p>Content of Tab Pane 2</p>\r\n      </a-tab-pane>\r\n      <a-tab-pane key="3" tab="Tab Title 3">\r\n        <p>Content of Tab Pane 3</p>\r\n        <p>Content of Tab Pane 3</p>\r\n        <p>Content of Tab Pane 3</p>\r\n      </a-tab-pane>\r\n    </a-tabs>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    callback(key) {\r\n      console.log(key);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style>\r\n.card-container {\r\n  background: #f5f5f5;\r\n  overflow: hidden;\r\n  padding: 24px;\r\n}\r\n.card-container > .ant-tabs-card > .ant-tabs-content {\r\n  height: 120px;\r\n  margin-top: -16px;\r\n}\r\n\r\n.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {\r\n  background: #fff;\r\n  padding: 16px;\r\n}\r\n\r\n.card-container > .ant-tabs-card > .ant-tabs-bar {\r\n  border-color: #fff;\r\n}\r\n\r\n.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {\r\n  border-color: transparent;\r\n  background: transparent;\r\n}\r\n\r\n.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {\r\n  border-color: #fff;\r\n  background: #fff;\r\n}\r\n</style>\r\n'},1737:function(t,n){},1738:function(t,n){},1739:function(t,n){t.exports='<cn>\r\n#### 自定义新增页签触发器 \r\n\r\n隐藏默认的页签增加图标，给自定义触发器绑定事件。\r\n</cn>\r\n<us>\r\n#### Customized Trigger Of New Tab\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <div :style="{ marginBottom: \'16px\' }">\r\n      <a-button @click="add">\r\n        ADD\r\n      </a-button>\r\n    </div>\r\n    <a-tabs v-model="activeKey" hide-add type="editable-card" @edit="onEdit">\r\n      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">\r\n        {{ pane.content }}\r\n      </a-tab-pane>\r\n    </a-tabs>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    const panes = [\r\n      { title: \'Tab 1\', content: \'Content of Tab 1\', key: \'1\' },\r\n      { title: \'Tab 2\', content: \'Content of Tab 2\', key: \'2\' },\r\n    ];\r\n    return {\r\n      activeKey: panes[0].key,\r\n      panes,\r\n      newTabIndex: 0,\r\n    };\r\n  },\r\n  methods: {\r\n    callback(key) {\r\n      console.log(key);\r\n    },\r\n    onEdit(targetKey, action) {\r\n      this[action](targetKey);\r\n    },\r\n    add() {\r\n      const panes = this.panes;\r\n      const activeKey = `newTab${this.newTabIndex++}`;\r\n      panes.push({\r\n        title: `New Tab ${activeKey}`,\r\n        content: `Content of new Tab ${activeKey}`,\r\n        key: activeKey,\r\n      });\r\n      this.panes = panes;\r\n      this.activeKey = activeKey;\r\n    },\r\n    remove(targetKey) {\r\n      let activeKey = this.activeKey;\r\n      let lastIndex;\r\n      this.panes.forEach((pane, i) => {\r\n        if (pane.key === targetKey) {\r\n          lastIndex = i - 1;\r\n        }\r\n      });\r\n      const panes = this.panes.filter(pane => pane.key !== targetKey);\r\n      if (panes.length && activeKey === targetKey) {\r\n        if (lastIndex >= 0) {\r\n          activeKey = panes[lastIndex].key;\r\n        } else {\r\n          activeKey = panes[0].key;\r\n        }\r\n      }\r\n      this.panes = panes;\r\n      this.activeKey = activeKey;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},2751:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("a-tabs",{attrs:{"default-active-key":"1"},on:{change:this.callback}},[n("a-tab-pane",{key:"1",attrs:{tab:"Tab 1"}},[this._v("\n      Content of Tab Pane 1\n    ")]),this._v(" "),n("a-tab-pane",{key:"2",attrs:{tab:"Tab 2","force-render":""}},[this._v("\n      Content of Tab Pane 2\n    ")]),this._v(" "),n("a-tab-pane",{key:"3",attrs:{tab:"Tab 3"}},[this._v("\n      Content of Tab Pane 3\n    ")])],1)],1)};e._withStripped=!0;var r={data:function(){return{}},methods:{callback:function(t){console.log(t)}}},o=a(32),i=a(1706),s=a.n(i),b=a(1707),c=a.n(b),l=Object(o.a)(r,e,[],!1,null,null,null);"function"==typeof s.a&&s()(l),"function"==typeof c.a&&c()(l),l.options.__file="components/tabs/demo/basic-usage.vue";var v=l.exports,p=a(1708),d=a.n(p),_=function(){var t=this.$createElement,n=this._self._c||t;return n("a-tabs",{attrs:{"default-active-key":"1"}},[n("a-tab-pane",{key:"1",attrs:{tab:"Tab 1"}},[this._v("\n    Tab 1\n  ")]),this._v(" "),n("a-tab-pane",{key:"2",attrs:{tab:"Tab 2",disabled:""}},[this._v("\n    Tab 2\n  ")]),this._v(" "),n("a-tab-pane",{key:"3",attrs:{tab:"Tab 3"}},[this._v("\n    Tab 3\n  ")])],1)};_._withStripped=!0;var u=a(1709),f=a.n(u),y=a(1710),h=a.n(y),T=Object(o.a)({},_,[],!1,null,null,null);"function"==typeof f.a&&f()(T),"function"==typeof h.a&&h()(T),T.options.__file="components/tabs/demo/disabled.vue";var k=T.exports,m=a(1711),g=a.n(m),x=function(){var t=this.$createElement,n=this._self._c||t;return n("a-tabs",{attrs:{"default-active-key":"2"}},[n("a-tab-pane",{key:"1"},[n("span",{attrs:{slot:"tab"},slot:"tab"},[n("a-icon",{attrs:{type:"apple"}}),this._v("\n      Tab 1\n    ")],1),this._v("\n    Tab 1\n  ")]),this._v(" "),n("a-tab-pane",{key:"2"},[n("span",{attrs:{slot:"tab"},slot:"tab"},[n("a-icon",{attrs:{type:"android"}}),this._v("\n      Tab 2\n    ")],1),this._v("\n    Tab 2\n  ")])],1)};x._withStripped=!0;var C=a(1712),K=a.n(C),P=a(1713),w=a.n(P),E=Object(o.a)({},x,[],!1,null,null,null);"function"==typeof K.a&&K()(E),"function"==typeof w.a&&w()(E),E.options.__file="components/tabs/demo/icon.vue";var S=E.exports,I=a(1714),z=a.n(I),$=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticStyle:{width:"500px"}},[a("a-radio-group",{style:{marginBottom:"8px"},model:{value:t.mode,callback:function(n){t.mode=n},expression:"mode"}},[a("a-radio-button",{attrs:{value:"top"}},[t._v("\n      Horizontal\n    ")]),t._v(" "),a("a-radio-button",{attrs:{value:"left"}},[t._v("\n      Vertical\n    ")])],1),t._v(" "),a("a-tabs",{style:{height:"200px"},attrs:{"default-active-key":"1","tab-position":t.mode},on:{prevClick:t.callback,nextClick:t.callback}},t._l(30,(function(n){return a("a-tab-pane",{key:n,attrs:{tab:"Tab-"+n}},[t._v(" Content of tab "+t._s(n)+" ")])})),1)],1)};$._withStripped=!0;var O={data:function(){return{mode:"top"}},methods:{callback:function(t){console.log(t)}}},j=a(1715),B=a.n(j),A=a(1716),D=a.n(A),N=Object(o.a)(O,$,[],!1,null,null,null);"function"==typeof B.a&&B()(N),"function"==typeof D.a&&D()(N),N.options.__file="components/tabs/demo/slide.vue";var F=N.exports,H=a(1717),J=a.n(H),L=function(){var t=this.$createElement,n=this._self._c||t;return n("a-tabs",[n("a-tab-pane",{key:"1",attrs:{tab:"Tab 1"}},[this._v("\n    Content of tab 1\n  ")]),this._v(" "),n("a-tab-pane",{key:"2",attrs:{tab:"Tab 2"}},[this._v("\n    Content of tab 2\n  ")]),this._v(" "),n("a-tab-pane",{key:"3",attrs:{tab:"Tab 3"}},[this._v("\n    Content of tab 3\n  ")]),this._v(" "),n("a-button",{attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[this._v("\n    Extra Action\n  ")])],1)};L._withStripped=!0;var R=a(1718),U=a.n(R),V=a(1719),G=a.n(V),M=Object(o.a)({},L,[],!1,null,null,null);"function"==typeof U.a&&U()(M),"function"==typeof G.a&&G()(M),M.options.__file="components/tabs/demo/extra-content.vue";var q=M.exports,Q=a(1720),W=a.n(Q),X=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("a-radio-group",{staticStyle:{"margin-bottom":"16px"},model:{value:t.size,callback:function(n){t.size=n},expression:"size"}},[a("a-radio-button",{attrs:{value:"small"}},[t._v("\n      Small\n    ")]),t._v(" "),a("a-radio-button",{attrs:{value:"default"}},[t._v("\n      Default\n    ")]),t._v(" "),a("a-radio-button",{attrs:{value:"large"}},[t._v("\n      Large\n    ")])],1),t._v(" "),a("a-tabs",{attrs:{"default-active-key":"2",size:t.size}},[a("a-tab-pane",{key:"1",attrs:{tab:"Tab 1"}},[t._v("\n      Content of tab 1\n    ")]),t._v(" "),a("a-tab-pane",{key:"2",attrs:{tab:"Tab 2"}},[t._v("\n      Content of tab 2\n    ")]),t._v(" "),a("a-tab-pane",{key:"3",attrs:{tab:"Tab 3"}},[t._v("\n      Content of tab 3\n    ")])],1)],1)};X._withStripped=!0;var Y={data:function(){return{size:"small"}}},Z=a(1721),tt=a.n(Z),nt=a(1722),at=a.n(nt),et=Object(o.a)(Y,X,[],!1,null,null,null);"function"==typeof tt.a&&tt()(et),"function"==typeof at.a&&at()(et),et.options.__file="components/tabs/demo/size.vue";var rt=et.exports,ot=a(1723),it=a.n(ot),st=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticStyle:{width:"500px"}},[a("a-radio-group",{staticStyle:{margin:"8px"},model:{value:t.tabPosition,callback:function(n){t.tabPosition=n},expression:"tabPosition"}},[a("a-radio-button",{attrs:{value:"top"}},[t._v("\n      top\n    ")]),t._v(" "),a("a-radio-button",{attrs:{value:"bottom"}},[t._v("\n      bottom\n    ")]),t._v(" "),a("a-radio-button",{attrs:{value:"left"}},[t._v("\n      left\n    ")]),t._v(" "),a("a-radio-button",{attrs:{value:"right"}},[t._v("\n      right\n    ")])],1),t._v(" "),a("a-tabs",{attrs:{"default-active-key":"1","tab-position":t.tabPosition}},[a("a-tab-pane",{key:"1",attrs:{tab:"Tab 1"}},[t._v("\n      Content of Tab 1\n    ")]),t._v(" "),a("a-tab-pane",{key:"2",attrs:{tab:"Tab 2"}},[t._v("\n      Content of Tab 2\n    ")]),t._v(" "),a("a-tab-pane",{key:"3",attrs:{tab:"Tab 3"}},[t._v("\n      Content of Tab 3\n    ")])],1)],1)};st._withStripped=!0;var bt={data:function(){return{tabPosition:"top"}},methods:{callback:function(t){console.log(t)}}},ct=a(1724),lt=a.n(ct),vt=a(1725),pt=a.n(vt),dt=Object(o.a)(bt,st,[],!1,null,null,null);"function"==typeof lt.a&&lt()(dt),"function"==typeof pt.a&&pt()(dt),dt.options.__file="components/tabs/demo/position.vue";var _t=dt.exports,ut=a(1726),ft=a.n(ut),yt=function(){var t=this.$createElement,n=this._self._c||t;return n("a-tabs",{attrs:{type:"card"},on:{change:this.callback}},[n("a-tab-pane",{key:"1",attrs:{tab:"Tab 1"}},[this._v("\n    Content of Tab Pane 1\n  ")]),this._v(" "),n("a-tab-pane",{key:"2",attrs:{tab:"Tab 2"}},[this._v("\n    Content of Tab Pane 2\n  ")]),this._v(" "),n("a-tab-pane",{key:"3",attrs:{tab:"Tab 3"}},[this._v("\n    Content of Tab Pane 3\n  ")])],1)};yt._withStripped=!0;var ht={data:function(){return{}},methods:{callback:function(t){console.log(t)}}},Tt=a(1727),kt=a.n(Tt),mt=a(1728),gt=a.n(mt),xt=Object(o.a)(ht,yt,[],!1,null,null,null);"function"==typeof kt.a&&kt()(xt),"function"==typeof gt.a&&gt()(xt),xt.options.__file="components/tabs/demo/card-type-tab.vue";var Ct=xt.exports,Kt=a(1729),Pt=a.n(Kt),wt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("a-tabs",{attrs:{type:"editable-card"},on:{edit:t.onEdit},model:{value:t.activeKey,callback:function(n){t.activeKey=n},expression:"activeKey"}},t._l(t.panes,(function(n){return a("a-tab-pane",{key:n.key,attrs:{tab:n.title,closable:n.closable}},[t._v("\n    "+t._s(n.content)+"\n  ")])})),1)};wt._withStripped=!0;var Et={data:function(){var t=[{title:"Tab 1",content:"Content of Tab 1",key:"1"},{title:"Tab 2",content:"Content of Tab 2",key:"2"},{title:"Tab 3",content:"Content of Tab 3",key:"3",closable:!1}];return{activeKey:t[0].key,panes:t,newTabIndex:0}},methods:{callback:function(t){console.log(t)},onEdit:function(t,n){this[n](t)},add:function(){var t=this.panes,n="newTab"+this.newTabIndex++;t.push({title:"New Tab",content:"Content of new Tab",key:n}),this.panes=t,this.activeKey=n},remove:function(t){var n=this.activeKey,a=void 0;this.panes.forEach((function(n,e){n.key===t&&(a=e-1)}));var e=this.panes.filter((function(n){return n.key!==t}));e.length&&n===t&&(n=a>=0?e[a].key:e[0].key),this.panes=e,this.activeKey=n}}},St=a(1730),It=a.n(St),zt=a(1731),$t=a.n(zt),Ot=Object(o.a)(Et,wt,[],!1,null,null,null);"function"==typeof It.a&&It()(Ot),"function"==typeof $t.a&&$t()(Ot),Ot.options.__file="components/tabs/demo/add-_-close-tab.vue";var jt=Ot.exports,Bt=a(1732),At=a.n(Bt),Dt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"card-container"},[a("a-tabs",{attrs:{type:"card"}},[a("a-tab-pane",{key:"1",attrs:{tab:"Tab Title 1"}},[a("p",[t._v("Content of Tab Pane 1")]),t._v(" "),a("p",[t._v("Content of Tab Pane 1")]),t._v(" "),a("p",[t._v("Content of Tab Pane 1")])]),t._v(" "),a("a-tab-pane",{key:"2",attrs:{tab:"Tab Title 2"}},[a("p",[t._v("Content of Tab Pane 2")]),t._v(" "),a("p",[t._v("Content of Tab Pane 2")]),t._v(" "),a("p",[t._v("Content of Tab Pane 2")])]),t._v(" "),a("a-tab-pane",{key:"3",attrs:{tab:"Tab Title 3"}},[a("p",[t._v("Content of Tab Pane 3")]),t._v(" "),a("p",[t._v("Content of Tab Pane 3")]),t._v(" "),a("p",[t._v("Content of Tab Pane 3")])])],1)],1)};Dt._withStripped=!0;var Nt={data:function(){return{}},methods:{callback:function(t){console.log(t)}}},Ft=(a(1733),a(1734)),Ht=a.n(Ft),Jt=a(1735),Lt=a.n(Jt),Rt=Object(o.a)(Nt,Dt,[],!1,null,null,null);"function"==typeof Ht.a&&Ht()(Rt),"function"==typeof Lt.a&&Lt()(Rt),Rt.options.__file="components/tabs/demo/container-of-card-type-tab.vue";var Ut=Rt.exports,Vt=a(1736),Gt=a.n(Vt),Mt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{style:{marginBottom:"16px"}},[a("a-button",{on:{click:t.add}},[t._v("\n      ADD\n    ")])],1),t._v(" "),a("a-tabs",{attrs:{"hide-add":"",type:"editable-card"},on:{edit:t.onEdit},model:{value:t.activeKey,callback:function(n){t.activeKey=n},expression:"activeKey"}},t._l(t.panes,(function(n){return a("a-tab-pane",{key:n.key,attrs:{tab:n.title,closable:n.closable}},[t._v("\n      "+t._s(n.content)+"\n    ")])})),1)],1)};Mt._withStripped=!0;var qt={data:function(){var t=[{title:"Tab 1",content:"Content of Tab 1",key:"1"},{title:"Tab 2",content:"Content of Tab 2",key:"2"}];return{activeKey:t[0].key,panes:t,newTabIndex:0}},methods:{callback:function(t){console.log(t)},onEdit:function(t,n){this[n](t)},add:function(){var t=this.panes,n="newTab"+this.newTabIndex++;t.push({title:"New Tab "+n,content:"Content of new Tab "+n,key:n}),this.panes=t,this.activeKey=n},remove:function(t){var n=this.activeKey,a=void 0;this.panes.forEach((function(n,e){n.key===t&&(a=e-1)}));var e=this.panes.filter((function(n){return n.key!==t}));e.length&&n===t&&(n=a>=0?e[a].key:e[0].key),this.panes=e,this.activeKey=n}}},Qt=a(1737),Wt=a.n(Qt),Xt=a(1738),Yt=a.n(Xt),Zt=Object(o.a)(qt,Mt,[],!1,null,null,null);"function"==typeof Wt.a&&Wt()(Zt),"function"==typeof Yt.a&&Yt()(Zt),Zt.options.__file="components/tabs/demo/customized-trigger-of-new-tab.vue";var tn=Zt.exports,nn=a(1739),an=a.n(nn),en=function(){var t=this.$createElement;this._self._c;return this._m(0)};en._withStripped=!0;var rn=Object(o.a)({},en,[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("h2",{attrs:{id:"API"}},[t._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("h3",{attrs:{id:"Tabs"}},[t._v("Tabs "),a("a",{staticClass:"anchor",attrs:{href:"#Tabs","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("activeKey(v-model)")]),t._v(" "),a("td",[t._v("当前激活 tab 面板的 key")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("animated")]),t._v(" "),a("td",[t._v("是否使用动画切换 Tabs，在 "),a("code",{pre:!0},[t._v("tabPosition=top|bottom")]),t._v(" 时有效")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("{inkBar:boolean, tabPane:boolean}")])]),t._v(" "),a("tr",[a("td",[t._v("defaultActiveKey")]),t._v(" "),a("td",[t._v("初始化选中面板的 key，如果没有设置 activeKey")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("第一个面板")])]),t._v(" "),a("tr",[a("td",[t._v("hideAdd")]),t._v(" "),a("td",[t._v("是否隐藏加号图标，在 "),a("code",{pre:!0},[t._v('type="editable-card"')]),t._v(" 时有效")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("size")]),t._v(" "),a("td",[t._v("大小，提供 "),a("code",{pre:!0},[t._v("large")]),t._v(" "),a("code",{pre:!0},[t._v("default")]),t._v(" 和 "),a("code",{pre:!0},[t._v("small")]),t._v(" 三种大小")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("'default'")])]),t._v(" "),a("tr",[a("td",[t._v("tabBarExtraContent")]),t._v(" "),a("td",[t._v("tab bar 上额外的元素")]),t._v(" "),a("td",[t._v("slot")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("tabBarStyle")]),t._v(" "),a("td",[t._v("tab bar 的样式对象")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("tabPosition")]),t._v(" "),a("td",[t._v("页签位置，可选值有 "),a("code",{pre:!0},[t._v("top")]),t._v(" "),a("code",{pre:!0},[t._v("right")]),t._v(" "),a("code",{pre:!0},[t._v("bottom")]),t._v(" "),a("code",{pre:!0},[t._v("left")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("'top'")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("页签的基本样式，可选 "),a("code",{pre:!0},[t._v("line")]),t._v("、"),a("code",{pre:!0},[t._v("card")]),t._v(" "),a("code",{pre:!0},[t._v("editable-card")]),t._v(" 类型")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("'line'")])]),t._v(" "),a("tr",[a("td",[t._v("tabBarGutter")]),t._v(" "),a("td",[t._v("tabs 之间的间隙")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("无")])])])]),t._v(" "),a("h3",{attrs:{id:"事件"}},[t._v("事件 "),a("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("切换面板的回调")]),t._v(" "),a("td",[t._v("Function(activeKey) {}")])]),t._v(" "),a("tr",[a("td",[t._v("edit")]),t._v(" "),a("td",[t._v("新增和删除页签的回调，在 "),a("code",{pre:!0},[t._v('type="editable-card"')]),t._v(" 时有效")]),t._v(" "),a("td",[t._v("(targetKey, action): void")])]),t._v(" "),a("tr",[a("td",[t._v("nextClick")]),t._v(" "),a("td",[t._v("next 按钮被点击的回调")]),t._v(" "),a("td",[t._v("Function")])]),t._v(" "),a("tr",[a("td",[t._v("prevClick")]),t._v(" "),a("td",[t._v("prev 按钮被点击的回调")]),t._v(" "),a("td",[t._v("Function")])]),t._v(" "),a("tr",[a("td",[t._v("tabClick")]),t._v(" "),a("td",[t._v("tab 被点击的回调")]),t._v(" "),a("td",[t._v("Function")])])])]),t._v(" "),a("h3",{attrs:{id:"Tabs.TabPane"}},[t._v("Tabs.TabPane "),a("a",{staticClass:"anchor",attrs:{href:"#Tabs.TabPane","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("forceRender")]),t._v(" "),a("td",[t._v("被隐藏时是否渲染 DOM 结构")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("对应 activeKey")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("tab")]),t._v(" "),a("td",[t._v("选项卡头显示文字")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("slot")])])])])])}],!1,null,null,null);rn.options.__file="components/tabs/index.zh-CN.md";var on=rn.exports,sn=function(){var t=this.$createElement;return(this._self._c||t)("div")};sn._withStripped=!0;var bn=Object(o.a)({},sn,[],!1,null,null,null);bn.options.__file="components/tabs/index.en-US.md";var cn=bn.exports,ln="",vn="# Tabs 标签页\n\n选项卡切换组件。\n\n## 何时使用\n\n提供平级的区域将大块内容进行收纳和展现，保持界面整洁。\n\nAnt Design 依次提供了三级选项卡，分别用于不同的场景。\n\n- 卡片式的页签，提供可关闭的样式，常用于容器顶部。\n- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。\n- [RadioButton](/ant-design/components/radio-cn/) 可作为更次级的页签来使用。\n\n## 代码演示",pn={category:"Components",subtitle:"标签页",type:"Data Display",zhType:"数据展示",cols:1,title:"Tabs",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:vn,us:ln}}),t("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[t("a-col",{attrs:{span:24},class:"code-boxes-col-1-1"},[t("demo-container",{attrs:{code:d.a}},[t(v)]),t("demo-container",{attrs:{code:g.a}},[t(k)]),t("demo-container",{attrs:{code:z.a}},[t(S)]),t("demo-container",{attrs:{code:J.a}},[t(F)]),t("demo-container",{attrs:{code:W.a}},[t(q)]),t("demo-container",{attrs:{code:it.a}},[t(rt)]),t("demo-container",{attrs:{code:ft.a}},[t(_t)]),t("demo-container",{attrs:{code:Pt.a}},[t(Ct)]),t("demo-container",{attrs:{code:At.a}},[t(jt)]),t("demo-container",{attrs:{code:Gt.a}},[t(Ut)]),t("demo-container",{attrs:{code:an.a}},[t(tn)])])]),t("api",[t(on,{slot:"cn"}),t(cn)])])}},dn=Object(o.a)(pn,void 0,void 0,!1,null,null,null);dn.options.__file="components/tabs/demo/index.vue";n.default=dn.exports}}]);