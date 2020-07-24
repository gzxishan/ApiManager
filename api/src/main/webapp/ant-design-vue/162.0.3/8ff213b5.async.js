(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{2462:function(e,t){},2463:function(e,t){},2464:function(e,t){e.exports='<cn>\r\n#### 基本用法 \r\n\r\n最简单的用法。\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-tree-select\r\n    v-model="value"\r\n    show-search\r\n    style="width: 100%"\r\n    :dropdown-style="{ maxHeight: \'400px\', overflow: \'auto\' }"\r\n    placeholder="Please select"\r\n    allow-clear\r\n    tree-default-expand-all\r\n  >\r\n    <a-tree-select-node key="0-1" value="parent 1" title="parent 1">\r\n      <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">\r\n        <a-tree-select-node key="random" :selectable="false" value="leaf1" title="my leaf" />\r\n        <a-tree-select-node key="random1" value="leaf2" title="your leaf" />\r\n      </a-tree-select-node>\r\n      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">\r\n        <a-tree-select-node key="random3" value="sss">\r\n          <b slot="title" style="color: #08c">sss</b>\r\n        </a-tree-select-node>\r\n      </a-tree-select-node>\r\n    </a-tree-select-node>\r\n  </a-tree-select>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      treeExpandedKeys: [],\r\n      value: undefined,\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n'},2465:function(e,t){},2466:function(e,t){},2467:function(e,t){e.exports='<cn>\r\n#### 多选 \r\n\r\n多选的树选择。\r\n</cn>\r\n<us>\r\n#### Multiple Selection\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-tree-select\r\n    show-search\r\n    style="width: 100%"\r\n    :value="value"\r\n    :dropdown-style="{ maxHeight: \'400px\', overflow: \'auto\' }"\r\n    placeholder="Please select"\r\n    allow-clear\r\n    multiple\r\n    tree-default-expand-all\r\n    @change="onChange"\r\n    @search="onSearch"\r\n    @select="onSelect"\r\n  >\r\n    <a-tree-select-node key="0-1" value="parent 1" title="parent 1">\r\n      <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">\r\n        <a-tree-select-node key="random" value="leaf1" title="my leaf" />\r\n        <a-tree-select-node key="random1" value="leaf2" title="your leaf" />\r\n      </a-tree-select-node>\r\n      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">\r\n        <a-tree-select-node key="random3" value="sss">\r\n          <b slot="title" style="color: #08c">sss</b>\r\n        </a-tree-select-node>\r\n      </a-tree-select-node>\r\n    </a-tree-select-node>\r\n  </a-tree-select>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      value: undefined,\r\n    };\r\n  },\r\n  methods: {\r\n    onChange(value) {\r\n      console.log(value);\r\n      this.value = value;\r\n    },\r\n    onSearch() {\r\n      console.log(...arguments);\r\n    },\r\n    onSelect() {\r\n      console.log(...arguments);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},2468:function(e,t){},2469:function(e,t){},2470:function(e,t){e.exports='<cn>\r\n#### 后缀图标 \r\n\r\n最简单的用法。\r\n</cn>\r\n<us>\r\n#### Suffix\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-tree-select\r\n    v-model="value"\r\n    show-search\r\n    style="width: 100%"\r\n    :dropdown-style="{ maxHeight: \'400px\', overflow: \'auto\' }"\r\n    placeholder="Please select"\r\n    allow-clear\r\n    tree-default-expand-all\r\n  >\r\n    <a-icon slot="suffixIcon" type="smile" />\r\n    <a-tree-select-node key="0-1" value="parent 1" title="parent 1">\r\n      <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">\r\n        <a-tree-select-node key="random" value="leaf1" title="my leaf" />\r\n        <a-tree-select-node key="random1" value="leaf2" title="your leaf" />\r\n      </a-tree-select-node>\r\n      <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">\r\n        <a-tree-select-node key="random3" value="sss">\r\n          <b slot="title" style="color: #08c">sss</b>\r\n        </a-tree-select-node>\r\n      </a-tree-select-node>\r\n    </a-tree-select-node>\r\n  </a-tree-select>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      value: undefined,\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n'},2471:function(e,t){},2472:function(e,t){},2473:function(e,t){e.exports="<cn>\r\n#### 可勾选 \r\n\r\n使用勾选框实现多选功能。\r\n</cn>\r\n<us>\r\n#### Checkable\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-tree-select\r\n    v-model=\"value\"\r\n    style=\"width: 100%\"\r\n    :tree-data=\"treeData\"\r\n    tree-checkable\r\n    :show-checked-strategy=\"SHOW_PARENT\"\r\n    search-placeholder=\"Please select\"\r\n  />\r\n</template>\r\n\r\n<script>\r\nimport { TreeSelect } from 'ant-design-vue';\r\nconst SHOW_PARENT = TreeSelect.SHOW_PARENT;\r\n\r\nconst treeData = [\r\n  {\r\n    title: 'Node1',\r\n    value: '0-0',\r\n    key: '0-0',\r\n    children: [\r\n      {\r\n        title: 'Child Node1',\r\n        value: '0-0-0',\r\n        key: '0-0-0',\r\n      },\r\n    ],\r\n  },\r\n  {\r\n    title: 'Node2',\r\n    value: '0-1',\r\n    key: '0-1',\r\n    children: [\r\n      {\r\n        title: 'Child Node3',\r\n        value: '0-1-0',\r\n        key: '0-1-0',\r\n        disabled: true,\r\n      },\r\n      {\r\n        title: 'Child Node4',\r\n        value: '0-1-1',\r\n        key: '0-1-1',\r\n      },\r\n      {\r\n        title: 'Child Node5',\r\n        value: '0-1-2',\r\n        key: '0-1-2',\r\n      },\r\n    ],\r\n  },\r\n];\r\nexport default {\r\n  data() {\r\n    return {\r\n      value: ['0-0-0'],\r\n      treeData,\r\n      SHOW_PARENT,\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n"},2474:function(e,t){},2475:function(e,t){},2476:function(e,t){e.exports="<cn>\r\n#### 从数据直接生成 \r\n\r\n使用 `treeData` 把 JSON 数据直接生成树结构。\r\n</cn>\r\n<us>\r\n#### Generate Form Tree Data\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-tree-select\r\n    v-model=\"value\"\r\n    style=\"width: 100%\"\r\n    :dropdown-style=\"{ maxHeight: '400px', overflow: 'auto' }\"\r\n    :tree-data=\"treeData\"\r\n    placeholder=\"Please select\"\r\n    tree-default-expand-all\r\n  >\r\n    <span v-if=\"key === '0-0-1'\" slot=\"title\" slot-scope=\"{ key, value }\" style=\"color: #08c\">\r\n      Child Node1 {{ value }}\r\n    </span>\r\n  </a-tree-select>\r\n</template>\r\n\r\n<script>\r\nconst treeData = [\r\n  {\r\n    title: 'Node1',\r\n    value: '0-0',\r\n    key: '0-0',\r\n    children: [\r\n      {\r\n        value: '0-0-1',\r\n        key: '0-0-1',\r\n        scopedSlots: {\r\n          // custom title\r\n          title: 'title',\r\n        },\r\n      },\r\n      {\r\n        title: 'Child Node2',\r\n        value: '0-0-2',\r\n        key: '0-0-2',\r\n      },\r\n    ],\r\n  },\r\n  {\r\n    title: 'Node2',\r\n    value: '0-1',\r\n    key: '0-1',\r\n  },\r\n];\r\nexport default {\r\n  data() {\r\n    return {\r\n      value: undefined,\r\n      treeData,\r\n    };\r\n  },\r\n  watch: {\r\n    value(value) {\r\n      console.log(value);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n"},2477:function(e,t){},2478:function(e,t){},2479:function(e,t){e.exports="<cn>\r\n#### 异步加载 \r\n\r\n异步加载树节点。\r\n</cn>\r\n<us>\r\n#### Asynchronous Loading\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-tree-select\r\n    v-model=\"value\"\r\n    tree-data-simple-mode\r\n    style=\"width: 100%\"\r\n    :dropdown-style=\"{ maxHeight: '400px', overflow: 'auto' }\"\r\n    :tree-data=\"treeData\"\r\n    placeholder=\"Please select\"\r\n    :load-data=\"onLoadData\"\r\n  />\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      value: undefined,\r\n      treeData: [\r\n        { id: 1, pId: 0, value: '1', title: 'Expand to load' },\r\n        { id: 2, pId: 0, value: '2', title: 'Expand to load' },\r\n        { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },\r\n      ],\r\n    };\r\n  },\r\n  watch: {\r\n    value(value) {\r\n      console.log(value);\r\n    },\r\n  },\r\n  methods: {\r\n    genTreeNode(parentId, isLeaf = false) {\r\n      const random = Math.random()\r\n        .toString(36)\r\n        .substring(2, 6);\r\n      return {\r\n        id: random,\r\n        pId: parentId,\r\n        value: random,\r\n        title: isLeaf ? 'Tree Node' : 'Expand to load',\r\n        isLeaf,\r\n      };\r\n    },\r\n    onLoadData(treeNode) {\r\n      return new Promise(resolve => {\r\n        const { id } = treeNode.dataRef;\r\n        setTimeout(() => {\r\n          this.treeData = this.treeData.concat([\r\n            this.genTreeNode(id, false),\r\n            this.genTreeNode(id, true),\r\n          ]);\r\n          resolve();\r\n        }, 300);\r\n      });\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n"},2774:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-tree-select",{staticStyle:{width:"100%"},attrs:{"show-search":"","dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"","tree-default-expand-all":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[r("a-tree-select-node",{key:"0-1",attrs:{value:"parent 1",title:"parent 1"}},[r("a-tree-select-node",{key:"0-1-1",attrs:{value:"parent 1-0",title:"parent 1-0"}},[r("a-tree-select-node",{key:"random",attrs:{selectable:!1,value:"leaf1",title:"my leaf"}}),e._v(" "),r("a-tree-select-node",{key:"random1",attrs:{value:"leaf2",title:"your leaf"}})],1),e._v(" "),r("a-tree-select-node",{key:"random2",attrs:{value:"parent 1-1",title:"parent 1-1"}},[r("a-tree-select-node",{key:"random3",attrs:{value:"sss"}},[r("b",{staticStyle:{color:"#08c"},attrs:{slot:"title"},slot:"title"},[e._v("sss")])])],1)],1)],1)};n._withStripped=!0;var a={data:function(){return{treeExpandedKeys:[],value:void 0}}},l=r(32),o=r(2462),d=r.n(o),v=r(2463),s=r.n(v),_=Object(l.a)(a,n,[],!1,null,null,null);"function"==typeof d.a&&d()(_),"function"==typeof s.a&&s()(_),_.options.__file="components/tree-select/demo/basic.vue";var c=_.exports,i=r(2464),u=r.n(i),p=function(){var e=this.$createElement,t=this._self._c||e;return t("a-tree-select",{staticStyle:{width:"100%"},attrs:{"show-search":"",value:this.value,"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"",multiple:"","tree-default-expand-all":""},on:{change:this.onChange,search:this.onSearch,select:this.onSelect}},[t("a-tree-select-node",{key:"0-1",attrs:{value:"parent 1",title:"parent 1"}},[t("a-tree-select-node",{key:"0-1-1",attrs:{value:"parent 1-0",title:"parent 1-0"}},[t("a-tree-select-node",{key:"random",attrs:{value:"leaf1",title:"my leaf"}}),this._v(" "),t("a-tree-select-node",{key:"random1",attrs:{value:"leaf2",title:"your leaf"}})],1),this._v(" "),t("a-tree-select-node",{key:"random2",attrs:{value:"parent 1-1",title:"parent 1-1"}},[t("a-tree-select-node",{key:"random3",attrs:{value:"sss"}},[t("b",{staticStyle:{color:"#08c"},attrs:{slot:"title"},slot:"title"},[this._v("sss")])])],1)],1)],1)};p._withStripped=!0;var f={data:function(){return{value:void 0}},methods:{onChange:function(e){console.log(e),this.value=e},onSearch:function(){var e;(e=console).log.apply(e,arguments)},onSelect:function(){var e;(e=console).log.apply(e,arguments)}}},h=r(2465),y=r.n(h),m=r(2466),b=r.n(m),k=Object(l.a)(f,p,[],!1,null,null,null);"function"==typeof y.a&&y()(k),"function"==typeof b.a&&b()(k),k.options.__file="components/tree-select/demo/multiple-selection.vue";var x=k.exports,g=r(2467),w=r.n(g),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-tree-select",{staticStyle:{width:"100%"},attrs:{"show-search":"","dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"Please select","allow-clear":"","tree-default-expand-all":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[r("a-icon",{attrs:{slot:"suffixIcon",type:"smile"},slot:"suffixIcon"}),e._v(" "),r("a-tree-select-node",{key:"0-1",attrs:{value:"parent 1",title:"parent 1"}},[r("a-tree-select-node",{key:"0-1-1",attrs:{value:"parent 1-0",title:"parent 1-0"}},[r("a-tree-select-node",{key:"random",attrs:{value:"leaf1",title:"my leaf"}}),e._v(" "),r("a-tree-select-node",{key:"random1",attrs:{value:"leaf2",title:"your leaf"}})],1),e._v(" "),r("a-tree-select-node",{key:"random2",attrs:{value:"parent 1-1",title:"parent 1-1"}},[r("a-tree-select-node",{key:"random3",attrs:{value:"sss"}},[r("b",{staticStyle:{color:"#08c"},attrs:{slot:"title"},slot:"title"},[e._v("sss")])])],1)],1)],1)};S._withStripped=!0;var N={data:function(){return{value:void 0}}},T=r(2468),C=r.n(T),D=r(2469),P=r.n(D),E=Object(l.a)(N,S,[],!1,null,null,null);"function"==typeof C.a&&C()(E),"function"==typeof P.a&&P()(E),E.options.__file="components/tree-select/demo/suffix.vue";var I=E.exports,H=r(2470),O=r.n(H),L=function(){var e=this,t=e.$createElement;return(e._self._c||t)("a-tree-select",{staticStyle:{width:"100%"},attrs:{"tree-data":e.treeData,"tree-checkable":"","show-checked-strategy":e.SHOW_PARENT,"search-placeholder":"Please select"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})};L._withStripped=!0;var A=r(1180).a.SHOW_PARENT,W=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0",disabled:!0},{title:"Child Node4",value:"0-1-1",key:"0-1-1"},{title:"Child Node5",value:"0-1-2",key:"0-1-2"}]}],j={data:function(){return{value:["0-0-0"],treeData:W,SHOW_PARENT:A}}},R=r(2471),$=r.n(R),V=r(2472),F=r.n(V),K=Object(l.a)(j,L,[],!1,null,null,null);"function"==typeof $.a&&$()(K),"function"==typeof F.a&&F()(K),K.options.__file="components/tree-select/demo/checkable.vue";var M=K.exports,z=r(2473),J=r.n(z),X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-tree-select",{staticStyle:{width:"100%"},attrs:{"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.treeData,placeholder:"Please select","tree-default-expand-all":""},scopedSlots:e._u([{key:"title",fn:function(t){var n=t.key,a=t.value;return"0-0-1"===n?r("span",{staticStyle:{color:"#08c"}},[e._v("\n    Child Node1 "+e._s(a)+"\n  ")]):e._e()}}],null,!0),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})};X._withStripped=!0;var q=[{title:"Node1",value:"0-0",key:"0-0",children:[{value:"0-0-1",key:"0-0-1",scopedSlots:{title:"title"}},{title:"Child Node2",value:"0-0-2",key:"0-0-2"}]},{title:"Node2",value:"0-1",key:"0-1"}],B={data:function(){return{value:void 0,treeData:q}},watch:{value:function(e){console.log(e)}}},G=r(2474),U=r.n(G),Q=r(2475),Y=r.n(Q),Z=Object(l.a)(B,X,[],!1,null,null,null);"function"==typeof U.a&&U()(Z),"function"==typeof Y.a&&Y()(Z),Z.options.__file="components/tree-select/demo/generate-form-tree-data.vue";var ee=Z.exports,te=r(2476),re=r.n(te),ne=function(){var e=this,t=e.$createElement;return(e._self._c||t)("a-tree-select",{staticStyle:{width:"100%"},attrs:{"tree-data-simple-mode":"","dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.treeData,placeholder:"Please select","load-data":e.onLoadData},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})};ne._withStripped=!0;var ae={data:function(){return{value:void 0,treeData:[{id:1,pId:0,value:"1",title:"Expand to load"},{id:2,pId:0,value:"2",title:"Expand to load"},{id:3,pId:0,value:"3",title:"Tree Node",isLeaf:!0}]}},watch:{value:function(e){console.log(e)}},methods:{genTreeNode:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Math.random().toString(36).substring(2,6);return{id:r,pId:e,value:r,title:t?"Tree Node":"Expand to load",isLeaf:t}},onLoadData:function(e){var t=this;return new Promise((function(r){var n=e.dataRef.id;setTimeout((function(){t.treeData=t.treeData.concat([t.genTreeNode(n,!1),t.genTreeNode(n,!0)]),r()}),300)}))}}},le=r(2477),oe=r.n(le),de=r(2478),ve=r.n(de),se=Object(l.a)(ae,ne,[],!1,null,null,null);"function"==typeof oe.a&&oe()(se),"function"==typeof ve.a&&ve()(se),se.options.__file="components/tree-select/demo/asynchronous-loading.vue";var _e=se.exports,ce=r(2479),ie=r.n(ce),ue=function(){var e=this.$createElement;this._self._c;return this._m(0)};ue._withStripped=!0;var pe=Object(l.a)({},ue,[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",{attrs:{id:"API"}},[e._v("API "),r("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),r("h3",{attrs:{id:"Tree-props"}},[e._v("Tree props "),r("a",{staticClass:"anchor",attrs:{href:"#Tree-props","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("参数")]),e._v(" "),r("th",[e._v("说明")]),e._v(" "),r("th",[e._v("类型")]),e._v(" "),r("th",[e._v("默认值")]),e._v(" "),r("th",[e._v("版本")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("allowClear")]),e._v(" "),r("td",[e._v("显示清除按钮")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("defaultValue")]),e._v(" "),r("td",[e._v("指定默认选中的条目")]),e._v(" "),r("td",[e._v("string/string[]")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("disabled")]),e._v(" "),r("td",[e._v("是否禁用")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("dropdownClassName")]),e._v(" "),r("td",[e._v("下拉菜单的 className 属性")]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("dropdownMatchSelectWidth")]),e._v(" "),r("td",[e._v("下拉菜单和选择器同宽")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("true")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("dropdownStyle")]),e._v(" "),r("td",[e._v("下拉菜单的样式")]),e._v(" "),r("td",[e._v("object")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("filterTreeNode")]),e._v(" "),r("td",[e._v("是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("Function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值)")]),e._v(" "),r("td",[e._v("Function")])]),e._v(" "),r("tr",[r("td",[e._v("getPopupContainer")]),e._v(" "),r("td",[e._v("菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。")]),e._v(" "),r("td",[e._v("Function(triggerNode)")]),e._v(" "),r("td",[e._v("() => document.body")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("labelInValue")]),e._v(" "),r("td",[e._v("是否把每个选项的 label 包装到 value 中，会把 value 类型从 "),r("code",{pre:!0},[e._v("string")]),e._v(" 变为 "),r("code",{pre:!0},[e._v("{value: string, label: VNode, halfChecked(treeCheckStrictly 时有效): string[] }")]),e._v(" 的格式")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("loadData")]),e._v(" "),r("td",[e._v("异步加载数据")]),e._v(" "),r("td",[e._v("function(node)")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("maxTagCount")]),e._v(" "),r("td",[e._v("最多显示多少个 tag")]),e._v(" "),r("td",[e._v("number")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("maxTagPlaceholder")]),e._v(" "),r("td",[e._v("隐藏 tag 时显示的内容")]),e._v(" "),r("td",[e._v("slot/function(omittedValues)")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("multiple")]),e._v(" "),r("td",[e._v("支持多选（当设置 treeCheckable 时自动变为 true）")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("placeholder")]),e._v(" "),r("td",[e._v("选择框默认文字")]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td",[e._v("slot")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("searchPlaceholder")]),e._v(" "),r("td",[e._v("搜索框默认文字")]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td",[e._v("slot")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("searchValue(.sync)")]),e._v(" "),r("td",[e._v("搜索框的值，可以通过 "),r("code",{pre:!0},[e._v("search")]),e._v(" 事件获取用户输入")]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("treeIcon")]),e._v(" "),r("td",[e._v("是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("showCheckedStrategy")]),e._v(" "),r("td",[e._v("定义选中项回填的方式。"),r("code",{pre:!0},[e._v("TreeSelect.SHOW_ALL")]),e._v(": 显示所有选中节点(包括父节点). "),r("code",{pre:!0},[e._v("TreeSelect.SHOW_PARENT")]),e._v(": 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.")]),e._v(" "),r("td",[e._v("enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }")]),e._v(" "),r("td",[e._v("TreeSelect.SHOW_CHILD")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("showSearch")]),e._v(" "),r("td",[e._v("在下拉中显示搜索框(仅在单选模式下生效)")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("size")]),e._v(" "),r("td",[e._v("选择框大小，可选 "),r("code",{pre:!0},[e._v("large")]),e._v(" "),r("code",{pre:!0},[e._v("small")])]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td",[e._v("'default'")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("suffixIcon")]),e._v(" "),r("td",[e._v("自定义的选择框后缀图标")]),e._v(" "),r("td",[e._v("VNode")]),e._v(" "),r("td",[e._v("slot")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("treeCheckable")]),e._v(" "),r("td",[e._v("显示 checkbox")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("treeCheckStrictly")]),e._v(" "),r("td",[e._v("checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 "),r("code",{pre:!0},[e._v("labelInValue")]),e._v(" 强制为 true")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("treeData")]),e._v(" "),r("td",[e._v("treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）")]),e._v(" "),r("td",[e._v("array<{value, label, children, [disabled, disableCheckbox, selectable]}>")]),e._v(" "),r("td",[e._v("[]")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("replaceFields")]),e._v(" "),r("td",[e._v("替换 treeNode 中 title,value,key,children 字段为 treeData 中对应的字段")]),e._v(" "),r("td",[e._v("object")]),e._v(" "),r("td",[e._v("{children:'children', title:'title', key:'key', value: 'value' }")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("treeDataSimpleMode")]),e._v(" "),r("td",[e._v("使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', label:\"test1\",...},...], "),r("code",{pre:!0},[e._v("pId")]),e._v(" 是父节点的 id)")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td",[e._v("Array<{ id: string, pId: string, rootPId: null }>")]),e._v(" "),r("td",[e._v("false")])]),e._v(" "),r("tr",[r("td",[e._v("treeDefaultExpandAll")]),e._v(" "),r("td",[e._v("默认展开所有树节点")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("treeDefaultExpandedKeys")]),e._v(" "),r("td",[e._v("默认展开的树节点")]),e._v(" "),r("td",[e._v("string[]")]),e._v(" "),r("td",[e._v("number[]")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("treeExpandedKeys(.sync)")]),e._v(" "),r("td",[e._v("设置展开的树节点")]),e._v(" "),r("td",[e._v("string[]")]),e._v(" "),r("td",[e._v("number[]")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("treeNodeFilterProp")]),e._v(" "),r("td",[e._v("输入项过滤对应的 treeNode 属性")]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td",[e._v("'value'")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("treeNodeLabelProp")]),e._v(" "),r("td",[e._v("作为显示的 prop 设置")]),e._v(" "),r("td",[e._v("string")]),e._v(" "),r("td",[e._v("'title'")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("value(v-model)")]),e._v(" "),r("td",[e._v("指定当前选中的条目")]),e._v(" "),r("td",[e._v("string/string[]")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td")])])]),e._v(" "),r("h3",{attrs:{id:"事件"}},[e._v("事件 "),r("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("事件名称")]),e._v(" "),r("th",[e._v("说明")]),e._v(" "),r("th",[e._v("回调参数")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("change")]),e._v(" "),r("td",[e._v("选中树节点时调用此函数")]),e._v(" "),r("td",[e._v("function(value, label, extra)")])]),e._v(" "),r("tr",[r("td",[e._v("search")]),e._v(" "),r("td",[e._v("文本框值变化时回调")]),e._v(" "),r("td",[e._v("function(value: string)")])]),e._v(" "),r("tr",[r("td",[e._v("select")]),e._v(" "),r("td",[e._v("被选中时调用")]),e._v(" "),r("td",[e._v("function(value, node, extra)")])]),e._v(" "),r("tr",[r("td",[e._v("treeExpand")]),e._v(" "),r("td",[e._v("展开节点时调用")]),e._v(" "),r("td",[e._v("function(expandedKeys)")])])])]),e._v(" "),r("h3",{attrs:{id:"Tree-方法"}},[e._v("Tree 方法 "),r("a",{staticClass:"anchor",attrs:{href:"#Tree-方法","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("名称")]),e._v(" "),r("th",[e._v("描述")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("blur()")]),e._v(" "),r("td",[e._v("移除焦点")])]),e._v(" "),r("tr",[r("td",[e._v("focus()")]),e._v(" "),r("td",[e._v("获取焦点")])])])]),e._v(" "),r("h3",{attrs:{id:"TreeNode-props"}},[e._v("TreeNode props "),r("a",{staticClass:"anchor",attrs:{href:"#TreeNode-props","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),r("blockquote",[r("p",[e._v("建议使用 treeData 来代替 TreeNode，免去手工构造麻烦"),r("br"),e._v("\n| 参数 | 说明 | 类型 | 默认值 | 版本 |"),r("br"),e._v("\n| --- | --- | --- | --- | --- |"),r("br"),e._v("\n| selectable | 是否可选 | boolean | true |  |"),r("br"),e._v("\n| checkable | 当树为 checkable 时，设置独立节点是否展示 Checkbox | boolean | - | 1.5.0 |"),r("br"),e._v("\n| disableCheckbox | 禁掉 checkbox | boolean | false |  |"),r("br"),e._v("\n| disabled | 是否禁用 | boolean | false |  |"),r("br"),e._v("\n| isLeaf | 是否是叶子节点 | boolean | false |  |"),r("br"),e._v("\n| key | 此项必须设置（其值在整个树范围内唯一） | string | number | - |  |"),r("br"),e._v("\n| title | 树节点显示的内容 | string|slot | '---' |  |"),r("br"),e._v("\n| value | 默认根据此属性值进行筛选（其值在整个树范围内唯一） | string | - |  |"),r("br"),e._v("\n| scopedSlots | 使用 treeData 时，可以通过该属性配置支持 slot 的属性，如 "),r("code",{pre:!0},[e._v("scopedSlots: { title: 'XXX'}")]),e._v(" | object | - |  |"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br")])])])}],!1,null,null,null);pe.options.__file="components/tree-select/index.zh-CN.md";var fe=pe.exports,he=function(){var e=this.$createElement;return(this._self._c||e)("div")};he._withStripped=!0;var ye=Object(l.a)({},he,[],!1,null,null,null);ye.options.__file="components/tree-select/index.en-US.md";var me=ye.exports,be="",ke="# 树型选择控件\n\n## 何时使用\n\n类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。\n\n## 代码演示",xe={category:"Components",subtitle:"树型选择控件",type:"Data Entry",zhType:"数据录入",cols:2,title:"TreeSelect",render:function(){var e=arguments[0];return e("div",[e("md",{attrs:{cn:ke,us:be}}),e("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[e("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[e("demo-container",{attrs:{code:u.a}},[e(c)]),e("demo-container",{attrs:{code:w.a}},[e(x)]),e("demo-container",{attrs:{code:O.a}},[e(I)])]),e("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[e("demo-container",{attrs:{code:J.a}},[e(M)]),e("demo-container",{attrs:{code:re.a}},[e(ee)]),e("demo-container",{attrs:{code:ie.a}},[e(_e)])])]),e("api",[e(fe,{slot:"cn"}),e(me)])])}},ge=Object(l.a)(xe,void 0,void 0,!1,null,null,null);ge.options.__file="components/tree-select/demo/index.vue";t.default=ge.exports}}]);