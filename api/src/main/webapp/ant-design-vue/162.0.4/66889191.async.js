(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1200:function(n,e,t){},1608:function(n,e){},1609:function(n,e){},1610:function(n,e){},1611:function(n,e){},1612:function(n,e){},1613:function(n,e){},1614:function(n,e,t){"use strict";var r=t(1200);t.n(r).a},1615:function(n,e){},1616:function(n,e){},1617:function(n,e){},1618:function(n,e){},1619:function(n,e){},1620:function(n,e){},1621:function(n,e){},1622:function(n,e){},1623:function(n,e){},1624:function(n,e){},1625:function(n,e){},1626:function(n,e){},2308:function(n,e,t){"use strict";t.r(e);var r=function(){var n=this.$createElement,e=this._self._c||n;return e("a-dropdown",[e("a",{staticClass:"ant-dropdown-link",on:{click:function(n){return n.preventDefault()}}},[this._v("\n    Hover me "),e("a-icon",{attrs:{type:"down"}})],1),this._v(" "),e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-menu-item",[e("a",{attrs:{href:"javascript:;"}},[this._v("1st menu item")])]),this._v(" "),e("a-menu-item",[e("a",{attrs:{href:"javascript:;"}},[this._v("2nd menu item")])]),this._v(" "),e("a-menu-item",[e("a",{attrs:{href:"javascript:;"}},[this._v("3rd menu item")])])],1)],1)};r._withStripped=!0;var o=t(32),a=t(1608),i=t.n(a),m=t(1609),u=t.n(m),l=Object(o.a)({},r,[],!1,null,null,null);"function"==typeof i.a&&i()(l),"function"==typeof u.a&&u()(l),l.options.__file="components/dropdown/demo/basic.vue";var v=l.exports,d='<cn>\r\n#### 基本 \r\n\r\n最简单的下拉菜单。\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-dropdown>\r\n    <a class="ant-dropdown-link" @click="e => e.preventDefault()">\r\n      Hover me <a-icon type="down" />\r\n    </a>\r\n    <a-menu slot="overlay">\r\n      <a-menu-item>\r\n        <a href="javascript:;">1st menu item</a>\r\n      </a-menu-item>\r\n      <a-menu-item>\r\n        <a href="javascript:;">2nd menu item</a>\r\n      </a-menu-item>\r\n      <a-menu-item>\r\n        <a href="javascript:;">3rd menu item</a>\r\n      </a-menu-item>\r\n    </a-menu>\r\n  </a-dropdown>\r\n</template>\r\n',c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("a-dropdown-button",{on:{click:n.handleButtonClick}},[n._v("\n    Dropdown\n    "),t("a-menu",{attrs:{slot:"overlay"},on:{click:n.handleMenuClick},slot:"overlay"},[t("a-menu-item",{key:"1"},[t("a-icon",{attrs:{type:"user"}}),n._v("1st menu item ")],1),n._v(" "),t("a-menu-item",{key:"2"},[t("a-icon",{attrs:{type:"user"}}),n._v("2nd menu item ")],1),n._v(" "),t("a-menu-item",{key:"3"},[t("a-icon",{attrs:{type:"user"}}),n._v("3rd item ")],1)],1)],1),n._v(" "),t("a-dropdown-button",[n._v("\n    Dropdown\n    "),t("a-menu",{attrs:{slot:"overlay"},on:{click:n.handleMenuClick},slot:"overlay"},[t("a-menu-item",{key:"1"},[t("a-icon",{attrs:{type:"user"}}),n._v("1st menu item ")],1),n._v(" "),t("a-menu-item",{key:"2"},[t("a-icon",{attrs:{type:"user"}}),n._v("2nd menu item ")],1),n._v(" "),t("a-menu-item",{key:"3"},[t("a-icon",{attrs:{type:"user"}}),n._v("3rd item ")],1)],1),n._v(" "),t("a-icon",{attrs:{slot:"icon",type:"user"},slot:"icon"})],1),n._v(" "),t("a-dropdown-button",{staticStyle:{"margin-left":"8px"},attrs:{disabled:""},on:{click:n.handleButtonClick}},[n._v("\n    Dropdown\n    "),t("a-menu",{attrs:{slot:"overlay"},on:{click:n.handleMenuClick},slot:"overlay"},[t("a-menu-item",{key:"1"},[t("a-icon",{attrs:{type:"user"}}),n._v("1st menu item ")],1),n._v(" "),t("a-menu-item",{key:"2"},[t("a-icon",{attrs:{type:"user"}}),n._v("2nd menu item ")],1),n._v(" "),t("a-menu-item",{key:"3"},[t("a-icon",{attrs:{type:"user"}}),n._v("3rd item ")],1)],1)],1),n._v(" "),t("a-dropdown",[t("a-menu",{attrs:{slot:"overlay"},on:{click:n.handleMenuClick},slot:"overlay"},[t("a-menu-item",{key:"1"},[t("a-icon",{attrs:{type:"user"}}),n._v("1st menu item ")],1),n._v(" "),t("a-menu-item",{key:"2"},[t("a-icon",{attrs:{type:"user"}}),n._v("2nd menu item ")],1),n._v(" "),t("a-menu-item",{key:"3"},[t("a-icon",{attrs:{type:"user"}}),n._v("3rd item ")],1)],1),n._v(" "),t("a-button",{staticStyle:{"margin-left":"8px"}},[n._v(" Button "),t("a-icon",{attrs:{type:"down"}})],1)],1)],1)};c._withStripped=!0;var s={methods:{handleButtonClick:function(n){console.log("click left button",n)},handleMenuClick:function(n){console.log("click",n)}}},_=t(1610),p=t.n(_),f=t(1611),y=t.n(f),h=Object(o.a)(s,c,[],!1,null,null,null);"function"==typeof p.a&&p()(h),"function"==typeof y.a&&y()(h),h.options.__file="components/dropdown/demo/button-with-dropdown-menu.vue";var k=h.exports,w='<cn>\r\n#### 带下拉框的按钮 \r\n\r\n左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。\r\n</cn>\r\n<us>\r\n#### Button With Dropdown Menu\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-dropdown-button @click="handleButtonClick">\r\n      Dropdown\r\n      <a-menu slot="overlay" @click="handleMenuClick">\r\n        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>\r\n        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>\r\n        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>\r\n      </a-menu>\r\n    </a-dropdown-button>\r\n    <a-dropdown-button>\r\n      Dropdown\r\n      <a-menu slot="overlay" @click="handleMenuClick">\r\n        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>\r\n        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>\r\n        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>\r\n      </a-menu>\r\n      <a-icon slot="icon" type="user" />\r\n    </a-dropdown-button>\r\n    <a-dropdown-button disabled style="margin-left: 8px" @click="handleButtonClick">\r\n      Dropdown\r\n      <a-menu slot="overlay" @click="handleMenuClick">\r\n        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>\r\n        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>\r\n        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>\r\n      </a-menu>\r\n    </a-dropdown-button>\r\n    <a-dropdown>\r\n      <a-menu slot="overlay" @click="handleMenuClick">\r\n        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>\r\n        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>\r\n        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>\r\n      </a-menu>\r\n      <a-button style="margin-left: 8px"> Button <a-icon type="down" /> </a-button>\r\n    </a-dropdown>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  methods: {\r\n    handleButtonClick(e) {\r\n      console.log(\'click left button\', e);\r\n    },\r\n    handleMenuClick(e) {\r\n      console.log(\'click\', e);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',b=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a-dropdown",[t("a",{staticClass:"ant-dropdown-link",on:{click:function(n){return n.preventDefault()}}},[n._v("\n    Hover me "),t("a-icon",{attrs:{type:"down"}})],1),n._v(" "),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",{key:"0"},[t("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"}},[n._v("1st menu item")])]),n._v(" "),t("a-menu-item",{key:"1"},[t("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"}},[n._v("2nd menu item")])]),n._v(" "),t("a-menu-divider"),n._v(" "),t("a-menu-item",{key:"3",attrs:{disabled:""}},[n._v("\n      3rd menu item（disabled）\n    ")])],1)],1)};b._withStripped=!0;var g=t(1612),C=t.n(g),x=t(1613),D=t.n(x),M=Object(o.a)({},b,[],!1,null,null,null);"function"==typeof C.a&&C()(M),"function"==typeof D.a&&D()(M),M.options.__file="components/dropdown/demo/other-elements.vue";var j=M.exports,B='<cn>\r\n#### 其他元素 \r\n\r\n分割线和不可用菜单项。\r\n</cn>\r\n<us>\r\n#### Other Elements\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-dropdown>\r\n    <a class="ant-dropdown-link" @click="e => e.preventDefault()">\r\n      Hover me <a-icon type="down" />\r\n    </a>\r\n    <a-menu slot="overlay">\r\n      <a-menu-item key="0">\r\n        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>\r\n      </a-menu-item>\r\n      <a-menu-item key="1">\r\n        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>\r\n      </a-menu-item>\r\n      <a-menu-divider />\r\n      <a-menu-item key="3" disabled>\r\n        3rd menu item（disabled）\r\n      </a-menu-item>\r\n    </a-menu>\r\n  </a-dropdown>\r\n</template>\r\n',S=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"components-dropdown-demo-placement"}},[n._l(n.placements,(function(e,r){return[t("a-dropdown",{attrs:{placement:e}},[t("a-button",[n._v(n._s(e))]),n._v(" "),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",[t("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"}},[n._v("1st menu item")])]),n._v(" "),t("a-menu-item",[t("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"}},[n._v("2nd menu item")])]),n._v(" "),t("a-menu-item",[t("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"}},[n._v("3rd menu item")])])],1)],1),n._v(" "),2===r?t("br"):n._e()]}))],2)};S._withStripped=!0;var E={data:function(){return{placements:["bottomLeft","bottomCenter","bottomRight","topLeft","topCenter","topRight"]}}},O=(t(1614),t(1615)),$=t.n(O),H=t(1616),L=t.n(H),R=Object(o.a)(E,S,[],!1,null,null,null);"function"==typeof $.a&&$()(R),"function"==typeof L.a&&L()(R),R.options.__file="components/dropdown/demo/placement.vue";var A=R.exports,I='<cn>\r\n#### 弹出位置 \r\n\r\n支持 6 个弹出位置。\r\n</cn>\r\n<us>\r\n#### Placement\r\n</us>\r\n\r\n\r\n<template>\r\n  <div id="components-dropdown-demo-placement">\r\n    <template v-for="(placement, index) in placements">\r\n      <a-dropdown :placement="placement">\r\n        <a-button>{{ placement }}</a-button>\r\n        <a-menu slot="overlay">\r\n          <a-menu-item>\r\n            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"\r\n              >1st menu item</a\r\n            >\r\n          </a-menu-item>\r\n          <a-menu-item>\r\n            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"\r\n              >2nd menu item</a\r\n            >\r\n          </a-menu-item>\r\n          <a-menu-item>\r\n            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/"\r\n              >3rd menu item</a\r\n            >\r\n          </a-menu-item>\r\n        </a-menu>\r\n      </a-dropdown>\r\n      <br v-if="index === 2" />\r\n    </template>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      placements: [\'bottomLeft\', \'bottomCenter\', \'bottomRight\', \'topLeft\', \'topCenter\', \'topRight\'],\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n<style>\r\n#components-dropdown-demo-placement .ant-btn {\r\n  margin-right: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n</style>\r\n',N=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a-dropdown",{attrs:{trigger:["click"]}},[t("a",{staticClass:"ant-dropdown-link",on:{click:function(n){return n.preventDefault()}}},[n._v("\n    Click me "),t("a-icon",{attrs:{type:"down"}})],1),n._v(" "),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",{key:"0"},[t("a",{attrs:{href:"http://www.alipay.com/"}},[n._v("1st menu item")])]),n._v(" "),t("a-menu-item",{key:"1"},[t("a",{attrs:{href:"http://www.taobao.com/"}},[n._v("2nd menu item")])]),n._v(" "),t("a-menu-divider"),n._v(" "),t("a-menu-item",{key:"3"},[n._v("\n      3rd menu item\n    ")])],1)],1)};N._withStripped=!0;var P=t(1617),z=t.n(P),T=t(1618),F=t.n(T),J=Object(o.a)({},N,[],!1,null,null,null);"function"==typeof z.a&&z()(J),"function"==typeof F.a&&F()(J),J.options.__file="components/dropdown/demo/trigger-mode.vue";var W=J.exports,q='<cn>\r\n#### 触发方式 \r\n\r\n默认是移入触发菜单，可以点击触发。\r\n</cn>\r\n<us>\r\n#### Trigger Mode\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-dropdown :trigger="[\'click\']">\r\n    <a class="ant-dropdown-link" @click="e => e.preventDefault()">\r\n      Click me <a-icon type="down" />\r\n    </a>\r\n    <a-menu slot="overlay">\r\n      <a-menu-item key="0">\r\n        <a href="http://www.alipay.com/">1st menu item</a>\r\n      </a-menu-item>\r\n      <a-menu-item key="1">\r\n        <a href="http://www.taobao.com/">2nd menu item</a>\r\n      </a-menu-item>\r\n      <a-menu-divider />\r\n      <a-menu-item key="3">\r\n        3rd menu item\r\n      </a-menu-item>\r\n    </a-menu>\r\n  </a-dropdown>\r\n</template>\r\n',U=function(){var n=this.$createElement,e=this._self._c||n;return e("a-dropdown",{attrs:{trigger:["contextmenu"]}},[e("div",{style:{textAlign:"center",background:"#f7f7f7",height:"200px",lineHeight:"200px",color:"#777"}},[this._v("\n    Right Click on here\n  ")]),this._v(" "),e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-menu-item",{key:"1"},[this._v("\n      1st menu item\n    ")]),this._v(" "),e("a-menu-item",{key:"2"},[this._v("\n      2nd menu item\n    ")]),this._v(" "),e("a-menu-item",{key:"3"},[this._v("\n      3rd menu item\n    ")])],1)],1)};U._withStripped=!0;var V=t(1619),G=t.n(V),K=t(1620),Q=t.n(K),X=Object(o.a)({},U,[],!1,null,null,null);"function"==typeof G.a&&G()(X),"function"==typeof Q.a&&Q()(X),X.options.__file="components/dropdown/demo/context-menu.vue";var Y=X.exports,Z="<cn>\r\n#### 右键菜单 \r\n\r\n默认是移入触发菜单，可以点击鼠标右键触发。\r\n</cn>\r\n<us>\r\n#### Context Menu\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-dropdown :trigger=\"['contextmenu']\">\r\n    <div\r\n      :style=\"{\r\n        textAlign: 'center',\r\n        background: '#f7f7f7',\r\n        height: '200px',\r\n        lineHeight: '200px',\r\n        color: '#777',\r\n      }\"\r\n    >\r\n      Right Click on here\r\n    </div>\r\n    <a-menu slot=\"overlay\">\r\n      <a-menu-item key=\"1\">\r\n        1st menu item\r\n      </a-menu-item>\r\n      <a-menu-item key=\"2\">\r\n        2nd menu item\r\n      </a-menu-item>\r\n      <a-menu-item key=\"3\">\r\n        3rd menu item\r\n      </a-menu-item>\r\n    </a-menu>\r\n  </a-dropdown>\r\n</template>\r\n",nn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a-dropdown",[t("a",{staticClass:"ant-dropdown-link",on:{click:function(n){return n.preventDefault()}}},[n._v("\n    Hover me, Click menu item "),t("a-icon",{attrs:{type:"down"}})],1),n._v(" "),t("a-menu",{attrs:{slot:"overlay"},on:{click:n.onClick},slot:"overlay"},[t("a-menu-item",{key:"1"},[n._v("\n      1st menu item\n    ")]),n._v(" "),t("a-menu-item",{key:"2"},[n._v("\n      2nd menu item\n    ")]),n._v(" "),t("a-menu-item",{key:"3"},[n._v("\n      3rd menu item\n    ")])],1)],1)};nn._withStripped=!0;var en={methods:{onClick:function(n){var e=n.key;console.log("Click on item "+e)}}},tn=t(1621),rn=t.n(tn),on=t(1622),an=t.n(on),mn=Object(o.a)(en,nn,[],!1,null,null,null);"function"==typeof rn.a&&rn()(mn),"function"==typeof an.a&&an()(mn),mn.options.__file="components/dropdown/demo/click-event.vue";var un=mn.exports,ln='<cn>\r\n#### 触发事件 \r\n\r\n点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。\r\n</cn>\r\n<us>\r\n#### Click Event\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-dropdown>\r\n    <a class="ant-dropdown-link" @click="e => e.preventDefault()">\r\n      Hover me, Click menu item <a-icon type="down" />\r\n    </a>\r\n    <a-menu slot="overlay" @click="onClick">\r\n      <a-menu-item key="1">\r\n        1st menu item\r\n      </a-menu-item>\r\n      <a-menu-item key="2">\r\n        2nd menu item\r\n      </a-menu-item>\r\n      <a-menu-item key="3">\r\n        3rd menu item\r\n      </a-menu-item>\r\n    </a-menu>\r\n  </a-dropdown>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  methods: {\r\n    onClick({ key }) {\r\n      console.log(`Click on item ${key}`);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',vn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a-dropdown",{model:{value:n.visible,callback:function(e){n.visible=e},expression:"visible"}},[t("a",{staticClass:"ant-dropdown-link",on:{click:function(n){return n.preventDefault()}}},[n._v("\n    Hover me "),t("a-icon",{attrs:{type:"down"}})],1),n._v(" "),t("a-menu",{attrs:{slot:"overlay"},on:{click:n.handleMenuClick},slot:"overlay"},[t("a-menu-item",{key:"1"},[n._v("\n      Clicking me will not close the menu.\n    ")]),n._v(" "),t("a-menu-item",{key:"2"},[n._v("\n      Clicking me will not close the menu also.\n    ")]),n._v(" "),t("a-menu-item",{key:"3"},[n._v("\n      Clicking me will close the menu\n    ")])],1)],1)};vn._withStripped=!0;var dn={data:function(){return{visible:!1}},methods:{handleMenuClick:function(n){"3"===n.key&&(this.visible=!1)}}},cn=t(1623),sn=t.n(cn),_n=t(1624),pn=t.n(_n),fn=Object(o.a)(dn,vn,[],!1,null,null,null);"function"==typeof sn.a&&sn()(fn),"function"==typeof pn.a&&pn()(fn),fn.options.__file="components/dropdown/demo/the-way-of-hiding-menu_.vue";var yn=fn.exports,hn='<cn>\r\n#### 菜单隐藏方式 \r\n\r\n默认是点击关闭菜单，可以关闭此功能。\r\n</cn>\r\n<us>\r\n#### The Way Of Hiding Menu_\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-dropdown v-model="visible">\r\n    <a class="ant-dropdown-link" @click="e => e.preventDefault()">\r\n      Hover me <a-icon type="down" />\r\n    </a>\r\n    <a-menu slot="overlay" @click="handleMenuClick">\r\n      <a-menu-item key="1">\r\n        Clicking me will not close the menu.\r\n      </a-menu-item>\r\n      <a-menu-item key="2">\r\n        Clicking me will not close the menu also.\r\n      </a-menu-item>\r\n      <a-menu-item key="3">\r\n        Clicking me will close the menu\r\n      </a-menu-item>\r\n    </a-menu>\r\n  </a-dropdown>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      visible: false,\r\n    };\r\n  },\r\n  methods: {\r\n    handleMenuClick(e) {\r\n      if (e.key === \'3\') {\r\n        this.visible = false;\r\n      }\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',kn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a-dropdown",[t("a",{staticClass:"ant-dropdown-link",on:{click:function(n){return n.preventDefault()}}},[n._v("\n    Cascading menu "),t("a-icon",{attrs:{type:"down"}})],1),n._v(" "),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",[n._v("1st menu item")]),n._v(" "),t("a-menu-item",[n._v("2nd menu item")]),n._v(" "),t("a-sub-menu",{key:"test",attrs:{title:"sub menu"}},[t("a-menu-item",[n._v("3rd menu item")]),n._v(" "),t("a-menu-item",[n._v("4th menu item")])],1),n._v(" "),t("a-sub-menu",{attrs:{title:"disabled sub menu",disabled:""}},[t("a-menu-item",[n._v("5d menu item")]),n._v(" "),t("a-menu-item",[n._v("6th menu item")])],1)],1)],1)};kn._withStripped=!0;var wn=t(1625),bn=t.n(wn),gn=t(1626),Cn=t.n(gn),xn=Object(o.a)({},kn,[],!1,null,null,null);"function"==typeof bn.a&&bn()(xn),"function"==typeof Cn.a&&Cn()(xn),xn.options.__file="components/dropdown/demo/cascading-menu.vue";var Dn=xn.exports,Mn='<cn>\r\n#### 多级菜单 \r\n\r\n传入的菜单里有多个层级。\r\n</cn>\r\n<us>\r\n#### Cascading Menu\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-dropdown>\r\n    <a class="ant-dropdown-link" @click="e => e.preventDefault()">\r\n      Cascading menu <a-icon type="down" />\r\n    </a>\r\n    <a-menu slot="overlay">\r\n      <a-menu-item>1st menu item</a-menu-item>\r\n      <a-menu-item>2nd menu item</a-menu-item>\r\n      <a-sub-menu key="test" title="sub menu">\r\n        <a-menu-item>3rd menu item</a-menu-item>\r\n        <a-menu-item>4th menu item</a-menu-item>\r\n      </a-sub-menu>\r\n      <a-sub-menu title="disabled sub menu" disabled>\r\n        <a-menu-item>5d menu item</a-menu-item>\r\n        <a-menu-item>6th menu item</a-menu-item>\r\n      </a-sub-menu>\r\n    </a-menu>\r\n  </a-dropdown>\r\n</template>\r\n',jn=function(){var n=this.$createElement;this._self._c;return this._m(0)};jn._withStripped=!0;var Bn=Object(o.a)({},jn,[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h2",{attrs:{id:"API"}},[n._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("p",[n._v("属性如下")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("类型")]),n._v(" "),t("th",[n._v("默认值")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("disabled")]),n._v(" "),t("td",[n._v("菜单是否禁用")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("-")])]),n._v(" "),t("tr",[t("td",[n._v("getPopupContainer")]),n._v(" "),t("td",[n._v("菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。")]),n._v(" "),t("td",[n._v("Function(triggerNode)")]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("() => document.body")])])]),n._v(" "),t("tr",[t("td",[n._v("overlay(slot-scope)")]),n._v(" "),t("td",[n._v("菜单")]),n._v(" "),t("td",[t("a",{attrs:{href:"#/components/menu-cn"}},[n._v("Menu")])]),n._v(" "),t("td",[n._v("-")])]),n._v(" "),t("tr",[t("td",[n._v("overlayClassName")]),n._v(" "),t("td",[n._v("下拉根元素的类名称")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("-")])]),n._v(" "),t("tr",[t("td",[n._v("overlayStyle")]),n._v(" "),t("td",[n._v("下拉根元素的样式")]),n._v(" "),t("td",[n._v("object")]),n._v(" "),t("td",[n._v("-")])]),n._v(" "),t("tr",[t("td",[n._v("placement")]),n._v(" "),t("td",[n._v("菜单弹出位置："),t("code",{pre:!0},[n._v("bottomLeft")]),n._v(" "),t("code",{pre:!0},[n._v("bottomCenter")]),n._v(" "),t("code",{pre:!0},[n._v("bottomRight")]),n._v(" "),t("code",{pre:!0},[n._v("topLeft")]),n._v(" "),t("code",{pre:!0},[n._v("topCenter")]),n._v(" "),t("code",{pre:!0},[n._v("topRight")])]),n._v(" "),t("td",[n._v("String")]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("bottomLeft")])])]),n._v(" "),t("tr",[t("td",[n._v("trigger")]),n._v(" "),t("td",[n._v("触发下拉的行为, 移动端不支持 hover")]),n._v(" "),t("td",[n._v("Array<"),t("code",{pre:!0},[n._v("click")])]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("hover")])])]),n._v(" "),t("tr",[t("td",[n._v("visible(v-model)")]),n._v(" "),t("td",[n._v("菜单是否显示")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("-")])])])]),n._v(" "),t("p",[t("code",{pre:!0},[n._v("overlay")]),n._v(" 菜单使用 "),t("a",{attrs:{href:"#/components/menu-cn/"}},[n._v("Menu")]),n._v("，还包括菜单项 "),t("code",{pre:!0},[n._v("Menu.Item")]),n._v("，分割线 "),t("code",{pre:!0},[n._v("Menu.Divider")]),n._v("。")]),n._v(" "),t("blockquote",[t("p",[n._v("注意： Menu.Item 必须设置唯一的 key 属性。 Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 "),t("code",{pre:!0},[n._v("<Menu selectable>")]),n._v(".")])]),n._v(" "),t("h3",{attrs:{id:"事件"}},[n._v("事件 "),t("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("事件名称")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("回调参数")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("visibleChange")]),n._v(" "),t("td",[n._v("菜单显示状态改变时调用，参数为 visible")]),n._v(" "),t("td",[n._v("function(visible)")])])])]),n._v(" "),t("h3",{attrs:{id:"Dropdown.Button"}},[n._v("Dropdown.Button "),t("a",{staticClass:"anchor",attrs:{href:"#Dropdown.Button","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("类型")]),n._v(" "),t("th",[n._v("默认值")]),n._v(" "),t("th",[n._v("版本")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("disabled")]),n._v(" "),t("td",[n._v("菜单是否禁用")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td")]),n._v(" "),t("tr",[t("td",[n._v("icon")]),n._v(" "),t("td",[n._v("右侧的 icon")]),n._v(" "),t("td",[n._v("VNode")]),n._v(" "),t("td",[n._v("slot")]),n._v(" "),t("td",[n._v("-")])]),n._v(" "),t("tr",[t("td",[n._v("overlay(slot-scope)")]),n._v(" "),t("td",[n._v("菜单")]),n._v(" "),t("td",[t("a",{attrs:{href:"#/components/menu-cn/"}},[n._v("Menu")])]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td")]),n._v(" "),t("tr",[t("td",[n._v("placement")]),n._v(" "),t("td",[n._v("菜单弹出位置："),t("code",{pre:!0},[n._v("bottomLeft")]),n._v(" "),t("code",{pre:!0},[n._v("bottomCenter")]),n._v(" "),t("code",{pre:!0},[n._v("bottomRight")]),n._v(" "),t("code",{pre:!0},[n._v("topLeft")]),n._v(" "),t("code",{pre:!0},[n._v("topCenter")]),n._v(" "),t("code",{pre:!0},[n._v("topRight")])]),n._v(" "),t("td",[n._v("String")]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("bottomLeft")])]),n._v(" "),t("td")]),n._v(" "),t("tr",[t("td",[n._v("size")]),n._v(" "),t("td",[n._v("按钮大小，和 "),t("a",{attrs:{href:"#/components/button-cn/"}},[n._v("Button")]),n._v(" 一致")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("'default'")]),n._v(" "),t("td")]),n._v(" "),t("tr",[t("td",[n._v("trigger")]),n._v(" "),t("td",[n._v("触发下拉的行为")]),n._v(" "),t("td",[n._v("Array<"),t("code",{pre:!0},[n._v("click")])]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("hover")])]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("contextmenu")]),n._v(">")])]),n._v(" "),t("tr",[t("td",[n._v("type")]),n._v(" "),t("td",[n._v("按钮类型，和 "),t("a",{attrs:{href:"#/components/button-cn/"}},[n._v("Button")]),n._v(" 一致")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("'default'")]),n._v(" "),t("td")]),n._v(" "),t("tr",[t("td",[n._v("visible(v-model)")]),n._v(" "),t("td",[n._v("菜单是否显示")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td")])])]),n._v(" "),t("h3",{attrs:{id:"Dropdown.Button-事件"}},[n._v("Dropdown.Button 事件 "),t("a",{staticClass:"anchor",attrs:{href:"#Dropdown.Button-事件","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("事件名称")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("回调参数")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("click")]),n._v(" "),t("td",[n._v("点击左侧按钮的回调，和 "),t("a",{attrs:{href:"#/components/button-cn/"}},[n._v("Button")]),n._v(" 一致")]),n._v(" "),t("td",[n._v("Function")])]),n._v(" "),t("tr",[t("td",[n._v("visibleChange")]),n._v(" "),t("td",[n._v("菜单显示状态改变时调用，参数为 visible")]),n._v(" "),t("td",[n._v("function(visible)")])])])])])}],!1,null,null,null);Bn.options.__file="components/dropdown/index.zh-CN.md";var Sn=Bn.exports,En=function(){var n=this.$createElement;return(this._self._c||n)("div")};En._withStripped=!0;var On=Object(o.a)({},En,[],!1,null,null,null);On.options.__file="components/dropdown/index.en-US.md";var $n=On.exports,Hn="",Ln="# 下拉菜单\n\n向下弹出的列表。\n\n## 何时使用\n\n当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。\n\n## 代码演示",Rn={category:"Components",subtitle:"下拉菜单",type:"Navigation",zhType:"导航",cols:2,title:"Dropdown",render:function(){var n=arguments[0];return n("div",[n("md",{attrs:{cn:Ln,us:Hn}}),n("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:d}},[n(v)]),n("demo-container",{attrs:{code:w}},[n(k)]),n("demo-container",{attrs:{code:B}},[n(j)]),n("demo-container",{attrs:{code:I}},[n(A)]),n("demo-container",{attrs:{code:q}},[n(W)])]),n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:Z}},[n(Y)]),n("demo-container",{attrs:{code:ln}},[n(un)]),n("demo-container",{attrs:{code:hn}},[n(yn)]),n("demo-container",{attrs:{code:Mn}},[n(Dn)])])]),n("api",[n(Sn,{slot:"cn"}),n($n)])])}},An=Object(o.a)(Rn,void 0,void 0,!1,null,null,null);An.options.__file="components/dropdown/demo/index.vue";e.default=An.exports}}]);