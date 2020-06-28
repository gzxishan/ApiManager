(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1275:function(t,n,e){},2727:function(t,n){},2728:function(t,n){},2729:function(t,n){t.exports="<cn>\r\n#### 基本 \r\n\r\n简单的展示。\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\r\n<template>\r\n  <a-empty />\r\n</template>\r\n"},2730:function(t,n,e){"use strict";var r=e(1275);e.n(r).a},2731:function(t,n){},2732:function(t,n){},2733:function(t,n){t.exports='<cn>\r\n#### 全局化配置 \r\n\r\n自定义全局组件的 Empty 样式。\r\n</cn>\r\n<us>\r\n#### Configprovider\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <a-switch\r\n      un-checked-children="default"\r\n      checked-children="customize"\r\n      :checked="customize"\r\n      @change="val => (customize = val)"\r\n    />\r\n\r\n    <a-divider />\r\n    <a-config-provider>\r\n      <template v-if="customize" #renderEmpty>\r\n        <div style="text-align: center">\r\n          <a-icon type="smile" style="font-size: 20px" />\r\n          <p>Data Not Found</p>\r\n        </div>\r\n      </template>\r\n      <div class="config-provider">\r\n        <h3>Select</h3>\r\n        <a-select :style="style" :options="[]" />\r\n\r\n        <h3>TreeSelect</h3>\r\n        <a-tree-select :style="style" :tree-data="[]" />\r\n\r\n        <h3>Cascader</h3>\r\n        <a-cascader :style="style" :options="[]" :show-search="true" />\r\n\r\n        <h3>Transfer</h3>\r\n        <a-transfer :data-source="[]" />\r\n\r\n        <h3>Table</h3>\r\n        <a-table style="margin-top: 8px" :columns="columns" :data-source="[]" />\r\n        <h3>List</h3>\r\n        <a-list :data-source="[]" />\r\n      </div>\r\n    </a-config-provider>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      customize: false,\r\n      style: { width: \'200px\' },\r\n      columns: [\r\n        {\r\n          title: \'Name\',\r\n          dataIndex: \'name\',\r\n          key: \'name\',\r\n        },\r\n        {\r\n          title: \'Age\',\r\n          dataIndex: \'age\',\r\n          key: \'age\',\r\n        },\r\n      ],\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n<style>\r\n.code-box-demo .config-provider h3 {\r\n  font-size: inherit;\r\n  margin: 16px 0 8px 0;\r\n}\r\n</style>\r\n'},2734:function(t,n){},2735:function(t,n){},2736:function(t,n){t.exports='<cn>\r\n#### 自定义 \r\n\r\n自定义图片、描述、附属内容。\r\n</cn>\r\n<us>\r\n#### Customize\r\n</us>\r\n\r\r\n<template>\r\n  <a-empty\r\n    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"\r\n    :image-style="{\r\n      height: \'60px\',\r\n    }"\r\n  >\r\n    <span slot="description"> Customize <a href="#API">Description</a> </span>\r\n    <a-button type="primary">\r\n      Create Now\r\n    </a-button>\r\n  </a-empty>\r\n</template>\r\n'},2737:function(t,n){},2738:function(t,n){},2739:function(t,n){t.exports='<cn>\r\n#### 无描述 \r\n\r\n无描述展示。\r\n</cn>\r\n<us>\r\n#### No Description\r\n</us>\r\n\r\r\n<template>\r\n  <a-empty :description="false" />\r\n</template>\r\n'},2740:function(t,n){},2741:function(t,n){},2742:function(t,n){t.exports="<cn>\r\n#### 选择图片 \r\n\r\n可以通过设置 `image` 为 `Empty.PRESENTED_IMAGE_SIMPLE` 选择另一种风格的图片。\r\n</cn>\r\n<us>\r\n#### Chose Image\r\n</us>\r\n\r\r\n<template>\r\n  <a-empty :image=\"simpleImage\" />\r\n</template>\r\n<script>\r\nimport { Empty } from 'ant-design-vue';\r\nexport default {\r\n  beforeCreate() {\r\n    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;\r\n  },\r\n};\r\n<\/script>\r\n"},2792:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this.$createElement;return(this._self._c||t)("a-empty")};r._withStripped=!0;var a=e(32),i=e(2727),s=e.n(i),o=e(2728),c=e.n(o),l=Object(a.a)({},r,[],!1,null,null,null);"function"==typeof s.a&&s()(l),"function"==typeof c.a&&c()(l),l.options.__file="components/empty/demo/basic.vue";var p=l.exports,u=e(2729),v=e.n(u),d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a-switch",{attrs:{"un-checked-children":"default","checked-children":"customize",checked:t.customize},on:{change:function(n){return t.customize=n}}}),t._v(" "),e("a-divider"),t._v(" "),e("a-config-provider",{scopedSlots:t._u([t.customize?{key:"renderEmpty",fn:function(){return[e("div",{staticStyle:{"text-align":"center"}},[e("a-icon",{staticStyle:{"font-size":"20px"},attrs:{type:"smile"}}),t._v(" "),e("p",[t._v("Data Not Found")])],1)]},proxy:!0}:null],null,!0)},[t._v(" "),e("div",{staticClass:"config-provider"},[e("h3",[t._v("Select")]),t._v(" "),e("a-select",{style:t.style,attrs:{options:[]}}),t._v(" "),e("h3",[t._v("TreeSelect")]),t._v(" "),e("a-tree-select",{style:t.style,attrs:{"tree-data":[]}}),t._v(" "),e("h3",[t._v("Cascader")]),t._v(" "),e("a-cascader",{style:t.style,attrs:{options:[],"show-search":!0}}),t._v(" "),e("h3",[t._v("Transfer")]),t._v(" "),e("a-transfer",{attrs:{"data-source":[]}}),t._v(" "),e("h3",[t._v("Table")]),t._v(" "),e("a-table",{staticStyle:{"margin-top":"8px"},attrs:{columns:t.columns,"data-source":[]}}),t._v(" "),e("h3",[t._v("List")]),t._v(" "),e("a-list",{attrs:{"data-source":[]}})],1)])],1)};d._withStripped=!0;var m={data:function(){return{customize:!1,style:{width:"200px"},columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"}]}}},_=(e(2730),e(2731)),f=e.n(_),h=e(2732),y=e.n(h),g=Object(a.a)(m,d,[],!1,null,null,null);"function"==typeof f.a&&f()(g),"function"==typeof y.a&&y()(g),g.options.__file="components/empty/demo/configprovider.vue";var E=g.exports,A=e(2733),x=e.n(A),S=function(){var t=this.$createElement,n=this._self._c||t;return n("a-empty",{attrs:{image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original","image-style":{height:"60px"}}},[n("span",{attrs:{slot:"description"},slot:"description"},[this._v(" Customize "),n("a",{attrs:{href:"#API"}},[this._v("Description")])]),this._v(" "),n("a-button",{attrs:{type:"primary"}},[this._v("\n    Create Now\n  ")])],1)};S._withStripped=!0;var b=e(2734),w=e.n(b),I=e(2735),z=e.n(I),C=Object(a.a)({},S,[],!1,null,null,null);"function"==typeof w.a&&w()(C),"function"==typeof z.a&&z()(C),C.options.__file="components/empty/demo/customize.vue";var P=C.exports,k=e(2736),D=e.n(k),N=function(){var t=this.$createElement;return(this._self._c||t)("a-empty",{attrs:{description:!1}})};N._withStripped=!0;var T=e(2737),j=e.n(T),L=e(2738),M=e.n(L),O=Object(a.a)({},N,[],!1,null,null,null);"function"==typeof j.a&&j()(O),"function"==typeof M.a&&M()(O),O.options.__file="components/empty/demo/no-description.vue";var $=O.exports,R=e(2739),B=e.n(R),G=function(){var t=this.$createElement;return(this._self._c||t)("a-empty",{attrs:{image:this.simpleImage}})};G._withStripped=!0;var J=e(144),Q={beforeCreate:function(){this.simpleImage=J.a.PRESENTED_IMAGE_SIMPLE}},F=e(2740),U=e.n(F),q=e(2741),H=e.n(q),K=Object(a.a)(Q,G,[],!1,null,null,null);"function"==typeof U.a&&U()(K),"function"==typeof H.a&&H()(K),K.options.__file="components/empty/demo/chose-image.vue";var V=K.exports,W=e(2742),X=e.n(W),Y=function(){var t=this.$createElement;this._self._c;return this._m(0)};Y._withStripped=!0;var Z=Object(a.a)({},Y,[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",{attrs:{id:"API"}},[t._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":""}},[t._v("<Empty>\n  <Button>创建</Button>\n</Empty>\n")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("版本")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("description")]),t._v(" "),e("td",[t._v("自定义描述内容")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("v-slot")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("imageStyle")]),t._v(" "),e("td",[t._v("图片样式")]),t._v(" "),e("td",[t._v("CSSProperties")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("1.5.0")])]),t._v(" "),e("tr",[e("td",[t._v("image")]),t._v(" "),e("td",[t._v("设置显示图片，为 string 时表示自定义图片地址")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("v-slot")]),t._v(" "),e("td",[t._v("false")])])])]),t._v(" "),e("h2",{attrs:{id:"内置图片-(1.5.0-以上版本)"}},[t._v("内置图片 (1.5.0 以上版本) "),e("a",{staticClass:"anchor",attrs:{href:"#内置图片-(1.5.0-以上版本)","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("ul",[e("li",[t._v("Empty.PRESENTED_IMAGE_SIMPLE")]),t._v(" "),e("li",[t._v("Empty.PRESENTED_IMAGE_DEFAULT")])])])}],!1,null,null,null);Z.options.__file="components/empty/index.zh-CN.md";var tt=Z.exports,nt=function(){var t=this.$createElement;return(this._self._c||t)("div")};nt._withStripped=!0;var et=Object(a.a)({},nt,[],!1,null,null,null);et.options.__file="components/empty/index.en-US.md";var rt=et.exports,at="",it="# 空状态\n\n空状态时的展示占位图。\n\n空状态时的展示占位图。\n\n## 何时使用\n\n- 当目前没有数据时，用于显式的用户提示。\n- 初始化场景时的引导创建流程。\n\n## 代码演示",st={category:"Components",subtitle:"空状态",type:"Data Display",zhType:"数据展示",cols:1,title:"Empty",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:it,us:at}}),t("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[t("a-col",{attrs:{span:24},class:"code-boxes-col-1-1"},[t("demo-container",{attrs:{code:v.a}},[t(p)]),t("demo-container",{attrs:{code:x.a}},[t(E)]),t("demo-container",{attrs:{code:D.a}},[t(P)]),t("demo-container",{attrs:{code:B.a}},[t($)]),t("demo-container",{attrs:{code:X.a}},[t(V)])])]),t("api",[t(tt,{slot:"cn"}),t(rt)])])}},ot=Object(a.a)(st,void 0,void 0,!1,null,null,null);ot.options.__file="components/empty/demo/index.vue";n.default=ot.exports}}]);