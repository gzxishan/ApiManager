(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1256:function(s,t,a){},1400:function(s,t,a){"use strict";var n=a(1256);a.n(n).a},1452:function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:"\n  <a-empty/>\n",script:null,style:null,us:"\n#### Basic\nSimplest Usage.\n",cn:"\n#### 基本\n简单的展示。\n",sourceCode:"<template>\n  <a-empty />\n</template>\n"}}},[a("template",{slot:"component"},[a("a-empty")],1),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"基本"}},[s._v("基本 "),a("a",{staticClass:"anchor",attrs:{href:"#基本","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("简单的展示。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Basic"}},[s._v("Basic "),a("a",{staticClass:"anchor",attrs:{href:"#Basic","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Simplest Usage.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-empty")]),s._v(" />")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2)]],2)};n._withStripped=!0;var e=a(31),l=Object(e.a)({},n,[],!1,null,null,null);l.options.__file="components/empty/demo/basic.md";var i=l.exports,v=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-switch unCheckedChildren="default" checkedChildren="customize" :checked="customize" @change="(val) => customize = val"/>\n\n    <a-divider/>\n    <a-config-provider>\n      <template v-if="customize" v-slot:renderEmpty="">\n        <div style="text-align: center">\n          <a-icon type="smile" style="font-size: 20px"/>\n          <p>Data Not Found</p>\n        </div>\n      </template>\n      <div class="config-provider">\n        <h3>Select</h3>\n        <a-select :style="style" :options="[]"/>\n\n        <h3>TreeSelect</h3>\n        <a-tree-select :style="style" :treeData="[]"/>\n\n        <h3>Cascader</h3>\n        <a-cascader :style="style" :options="[]" :showSearch="true"/>\n\n        <h3>Transfer</h3>\n        <a-transfer :dataSource="[]"/>\n\n        <h3>Table</h3>\n        <a-table style="margin-top: 8px" :columns="columns" :dataSource="[]"/>\n        <h3>List</h3>\n        <a-list :dataSource="[]"/>\n      </div>\n    </a-config-provider>\n  </div>\n',script:"\n  export default {\n    data() {\n      return {\n        customize: false,\n        style: { width: '200px' },\n        columns: [\n          {\n            title: 'Name',\n            dataIndex: 'name',\n            key: 'name',\n          },\n          {\n            title: 'Age',\n            dataIndex: 'age',\n            key: 'age',\n          },\n        ],\n      };\n    },\n  };\n",style:"\n  .code-box-demo .config-provider h3 {\n    font-size: inherit;\n    margin: 16px 0 8px 0;\n  }\n",us:"\n#### ConfigProvider\nUse ConfigProvider set global Empty style.\n",cn:"\n#### 全局化配置\n自定义全局组件的 Empty 样式。\n",sourceCode:'<template>\n  <div>\n    <a-switch\n      unCheckedChildren="default"\n      checkedChildren="customize"\n      :checked="customize"\n      @change="(val) => customize = val"\n    />\n\n    <a-divider />\n    <a-config-provider>\n      <template v-if="customize" v-slot:renderEmpty>\n        <div style="text-align: center">\n          <a-icon type="smile" style="font-size: 20px" />\n          <p>Data Not Found</p>\n        </div>\n      </template>\n      <div class="config-provider">\n        <h3>Select</h3>\n        <a-select :style="style" :options="[]" />\n\n        <h3>TreeSelect</h3>\n        <a-tree-select :style="style" :treeData="[]" />\n\n        <h3>Cascader</h3>\n        <a-cascader :style="style" :options="[]" :showSearch="true" />\n\n        <h3>Transfer</h3>\n        <a-transfer :dataSource="[]" />\n\n        <h3>Table</h3>\n        <a-table style="margin-top: 8px" :columns="columns" :dataSource="[]" />\n        <h3>List</h3>\n        <a-list :dataSource="[]" />\n      </div>\n    </a-config-provider>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        customize: false,\n        style: { width: \'200px\' },\n        columns: [\n          {\n            title: \'Name\',\n            dataIndex: \'name\',\n            key: \'name\',\n          },\n          {\n            title: \'Age\',\n            dataIndex: \'age\',\n            key: \'age\',\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n<style>\n  .code-box-demo .config-provider h3 {\n    font-size: inherit;\n    margin: 16px 0 8px 0;\n  }\n</style>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-switch",{attrs:{unCheckedChildren:"default",checkedChildren:"customize",checked:s.customize},on:{change:function(t){return s.customize=t}}}),s._v(" "),a("a-divider"),s._v(" "),a("a-config-provider",{scopedSlots:s._u([s.customize?{key:"renderEmpty",fn:function(){return[a("div",{staticStyle:{"text-align":"center"}},[a("a-icon",{staticStyle:{"font-size":"20px"},attrs:{type:"smile"}}),s._v(" "),a("p",[s._v("Data Not Found")])],1)]},proxy:!0}:null],null,!0)},[s._v(" "),a("div",{staticClass:"config-provider"},[a("h3",[s._v("Select")]),s._v(" "),a("a-select",{style:s.style,attrs:{options:[]}}),s._v(" "),a("h3",[s._v("TreeSelect")]),s._v(" "),a("a-tree-select",{style:s.style,attrs:{treeData:[]}}),s._v(" "),a("h3",[s._v("Cascader")]),s._v(" "),a("a-cascader",{style:s.style,attrs:{options:[],showSearch:!0}}),s._v(" "),a("h3",[s._v("Transfer")]),s._v(" "),a("a-transfer",{attrs:{dataSource:[]}}),s._v(" "),a("h3",[s._v("Table")]),s._v(" "),a("a-table",{staticStyle:{"margin-top":"8px"},attrs:{columns:s.columns,dataSource:[]}}),s._v(" "),a("h3",[s._v("List")]),s._v(" "),a("a-list",{attrs:{dataSource:[]}})],1)])],1)]),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"全局化配置"}},[s._v("全局化配置 "),a("a",{staticClass:"anchor",attrs:{href:"#全局化配置","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("自定义全局组件的 Empty 样式。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"ConfigProvider"}},[s._v("ConfigProvider "),a("a",{staticClass:"anchor",attrs:{href:"#ConfigProvider","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Use ConfigProvider set global Empty style.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-switch")]),s._v("\n      "),a("span",{staticClass:"hljs-attr"},[s._v("unCheckedChildren")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"default"')]),s._v("\n      "),a("span",{staticClass:"hljs-attr"},[s._v("checkedChildren")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"customize"')]),s._v("\n      "),a("span",{staticClass:"hljs-attr"},[s._v(":checked")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"customize"')]),s._v("\n      "),a("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"(val) => customize = val"')]),s._v("\n    />")]),s._v("\n\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-divider")]),s._v(" />")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-config-provider")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-if")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"customize"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-slot:renderEmpty")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"text-align: center"')]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"smile"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"font-size: 20px"')]),s._v(" />")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Data Not Found"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"config-provider"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("Select"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-select")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"style"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":options")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"[]"')]),s._v(" />")]),s._v("\n\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("TreeSelect"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-tree-select")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"style"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":treeData")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"[]"')]),s._v(" />")]),s._v("\n\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("Cascader"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-cascader")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"style"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":options")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"[]"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":showSearch")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" />")]),s._v("\n\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("Transfer"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-transfer")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":dataSource")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"[]"')]),s._v(" />")]),s._v("\n\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("Table"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-table")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"margin-top: 8px"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":columns")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"columns"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":dataSource")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"[]"')]),s._v(" />")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("List"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-list")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":dataSource")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"[]"')]),s._v(" />")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-config-provider")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("customize")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v(": { "),a("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'200px'")]),s._v(" },\n        "),a("span",{staticClass:"hljs-attr"},[s._v("columns")]),s._v(": [\n          {\n            "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'Name'")]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v("dataIndex")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'name'")]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v("key")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'name'")]),s._v(",\n          },\n          {\n            "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'Age'")]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v("dataIndex")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'age'")]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v("key")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'age'")]),s._v(",\n          },\n        ],\n      };\n    },\n  };\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".code-box-demo")]),s._v(" "),a("span",{staticClass:"hljs-selector-class"},[s._v(".config-provider")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("h3")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("font-size")]),s._v(": inherit;\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("16px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("8px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2)]],2)};v._withStripped=!0;var _={data:function(){return{customize:!1,style:{width:"200px"},columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"}]}}},c=(a(1400),Object(e.a)(_,v,[],!1,null,null,null));c.options.__file="components/empty/demo/config-provider.md";var r=c.exports,p=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original">\n    <span slot="description"> Customize <a href="#API">Description</a> </span>\n    <a-button type="primary">Create Now</a-button>\n  </a-empty>\n',script:null,style:null,us:"\n#### Customize\nCustomize image, description and extra content.\n",cn:"\n#### 自定义\n自定义图片、描述、附属内容。\n",sourceCode:'<template>\n  <a-empty\n    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"\n  >\n    <span slot="description"> Customize <a href="#API">Description</a> </span>\n    <a-button type="primary">Create Now</a-button>\n  </a-empty>\n</template>\n'}}},[a("template",{slot:"component"},[a("a-empty",{attrs:{image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"}},[a("span",{attrs:{slot:"description"},slot:"description"},[s._v(" Customize "),a("a",{attrs:{href:"#API"}},[s._v("Description")])]),s._v(" "),a("a-button",{attrs:{type:"primary"}},[s._v("Create Now")])],1)],1),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"自定义"}},[s._v("自定义 "),a("a",{staticClass:"anchor",attrs:{href:"#自定义","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("自定义图片、描述、附属内容。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Customize"}},[s._v("Customize "),a("a",{staticClass:"anchor",attrs:{href:"#Customize","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Customize image, description and extra content.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-empty")]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v("image")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"')]),s._v("\n  >")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(">")]),s._v(" Customize "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"#API"')]),s._v(">")]),s._v("Description"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(">")]),s._v(" "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("Create Now"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-empty")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2)]],2)};p._withStripped=!0;var h=Object(e.a)({},p,[],!1,null,null,null);h.options.__file="components/empty/demo/customize.md";var o=h.exports,m=function(){var s=this.$createElement;this._self._c;return this._m(0)};m._withStripped=!0;var d=Object(e.a)({},m,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h2",{attrs:{id:"API"}},[s._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[s._v("<Empty>\n  "),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("Button")]),s._v(">")]),s._v("创建"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("Button")]),s._v(">")])]),s._v("\n<"),a("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/Empty>\n")])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("description")]),s._v(" "),a("td",[s._v("自定义描述内容")]),s._v(" "),a("td",[s._v("string | v-slot")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("image")]),s._v(" "),a("td",[s._v("设置显示图片，为 string 时表示自定义图片地址")]),s._v(" "),a("td",[s._v("string | v-slot")]),s._v(" "),a("td",[s._v("false")])])])])])}],!1,null,null,null);d.options.__file="components/empty/index.zh-CN.md";var C=d.exports,j=function(){var s=this.$createElement;this._self._c;return this._m(0)};j._withStripped=!0;var g=Object(e.a)({},j,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h2",{attrs:{id:"API"}},[s._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[s._v("<Empty>\n  "),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("Button")]),s._v(">")]),s._v("Create"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("Button")]),s._v(">")])]),s._v("\n<"),a("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/Empty>\n")])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Property")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("description")]),s._v(" "),a("td",[s._v("Customize description")]),s._v(" "),a("td",[s._v("string | v-slot")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("image")]),s._v(" "),a("td",[s._v("Customize image. Will tread as image url when string provided")]),s._v(" "),a("td",[s._v("string | v-slot")]),s._v(" "),a("td",[s._v("false")])])])])])}],!1,null,null,null);g.options.__file="components/empty/index.en-US.md";var u=g.exports,y=(a(113),"# 空状态\n        空状态时的展示占位图。\n\n      空状态时的展示占位图。\n\n      ## 何时使用\n\n      当目前没有数据时，用于显式的用户提示。\n\n       ## 代码演示\n        "),f="# Empty\n        Empty state placeholder.\n\n        ## When To Use\n\n        When there is no data provided, display for friendly tips.\n       ## Examples\n        ",A={category:"Components",type:"Data Display",title:"Empty",subtitle:"空状态",render:function(){var s=arguments[0];return s("div",[s("md",{attrs:{cn:y,us:f}}),s(i),s(r),s(o),s("api",[s(C,{slot:"cn"}),s(u)])])}},x=Object(e.a)(A,void 0,void 0,!1,null,null,null);x.options.__file="components/empty/demo/index.vue";t.default=x.exports}}]);