(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1361:function(e,n){},1362:function(e,n){},1363:function(e,n){},1364:function(e,n){},1365:function(e,n){},1366:function(e,n){},1367:function(e,n){},1368:function(e,n){},1369:function(e,n){},1370:function(e,n){},1371:function(e,n){},1372:function(e,n){},2323:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this.$createElement;return(this._self._c||e)("a-checkbox",{on:{change:this.onChange}},[this._v("\n  Checkbox\n")])};r._withStripped=!0;var a={methods:{onChange:function(e){console.log("checked = "+e.target.checked)}}},c=t(32),o=t(1361),l=t.n(o),i=t(1362),s=t.n(i),h=Object(c.a)(a,r,[],!1,null,null,null);"function"==typeof l.a&&l()(h),"function"==typeof s.a&&s()(h),h.options.__file="components/checkbox/demo/basic.vue";var d=h.exports,v='<cn>\r\n#### 基本用法 \r\n\r\n简单的checkbox\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-checkbox @change="onChange">\r\n    Checkbox\r\n  </a-checkbox>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    onChange(e) {\r\n      console.log(`checked = ${e.target.checked}`);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',_=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("a-checkbox",{attrs:{"default-checked":!1,disabled:""}}),this._v(" "),n("br"),this._v(" "),n("a-checkbox",{attrs:{"default-checked":"",disabled:""}})],1)};_._withStripped=!0;var p=t(1363),u=t.n(p),b=t(1364),k=t.n(b),g=Object(c.a)({},_,[],!1,null,null,null);"function"==typeof u.a&&u()(g),"function"==typeof k.a&&k()(g),g.options.__file="components/checkbox/demo/disabled.vue";var f=g.exports,x='<cn>\r\n#### 不可用 \r\n\r\ncheckbox 不可用\r\n</cn>\r\n<us>\r\n#### Disabled\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-checkbox :default-checked="false" disabled />\r\n    <br />\r\n    <a-checkbox default-checked disabled />\r\n  </div>\r\n</template>\r\n',m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("a-checkbox-group",{attrs:{name:"checkboxgroup",options:e.plainOptions},on:{change:e.onChange},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),e._v(" "),t("br"),e._v(" "),t("a-checkbox-group",{attrs:{options:e.plainOptions,"default-value":["Apple"]},on:{change:e.onChange}}),e._v(" "),t("br"),e._v(" "),t("a-checkbox-group",{attrs:{options:e.options,value:["Pear"]},on:{change:e.onChange}}),e._v(" "),t("br"),e._v(" "),t("a-checkbox-group",{attrs:{options:e.optionsWithDisabled,disabled:"","default-value":["Apple"]},on:{change:e.onChange},scopedSlots:e._u([{key:"label",fn:function(n){var r=n.value;return t("span",{staticStyle:{color:"red"}},[e._v(e._s(r))])}}])})],1)};m._withStripped=!0;var C=["Apple","Pear","Orange"],y=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],O=[{value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!1}],A={data:function(){return{plainOptions:C,options:y,optionsWithDisabled:O,value:[]}},methods:{onChange:function(e){console.log("checked = ",e),console.log("value = ",this.value)}}},E=t(1365),w=t.n(E),D=t(1366),P=t.n(D),L=Object(c.a)(A,m,[],!1,null,null,null);"function"==typeof w.a&&w()(L),"function"==typeof P.a&&P()(L),L.options.__file="components/checkbox/demo/checkbox-group.vue";var $=L.exports,S="<cn>\r\n#### Checkbox组 \r\n\r\n方便的从数组生成checkbox\r\n</cn>\r\n<us>\r\n#### Checkbox Group\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-checkbox-group\r\n      v-model=\"value\"\r\n      name=\"checkboxgroup\"\r\n      :options=\"plainOptions\"\r\n      @change=\"onChange\"\r\n    />\r\n    <br />\r\n    <a-checkbox-group :options=\"plainOptions\" :default-value=\"['Apple']\" @change=\"onChange\" />\r\n    <br />\r\n    <a-checkbox-group :options=\"options\" :value=\"['Pear']\" @change=\"onChange\" />\r\n    <br />\r\n    <a-checkbox-group\r\n      :options=\"optionsWithDisabled\"\r\n      disabled\r\n      :default-value=\"['Apple']\"\r\n      @change=\"onChange\"\r\n    >\r\n      <span slot=\"label\" slot-scope=\"{ value }\" style=\"color: red\">{{ value }}</span>\r\n    </a-checkbox-group>\r\n  </div>\r\n</template>\r\n<script>\r\nconst plainOptions = ['Apple', 'Pear', 'Orange'];\r\nconst options = [\r\n  { label: 'Apple', value: 'Apple' },\r\n  { label: 'Pear', value: 'Pear' },\r\n  { label: 'Orange', value: 'Orange' },\r\n];\r\nconst optionsWithDisabled = [\r\n  { value: 'Apple' },\r\n  { label: 'Pear', value: 'Pear' },\r\n  { label: 'Orange', value: 'Orange', disabled: false },\r\n];\r\nexport default {\r\n  data() {\r\n    return {\r\n      plainOptions,\r\n      options,\r\n      optionsWithDisabled,\r\n      value: [],\r\n    };\r\n  },\r\n  methods: {\r\n    onChange(checkedValues) {\r\n      console.log('checked = ', checkedValues);\r\n      console.log('value = ', this.value);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n",j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{style:{borderBottom:"1px solid #E9E9E9"}},[t("a-checkbox",{attrs:{indeterminate:e.indeterminate,checked:e.checkAll},on:{change:e.onCheckAllChange}},[e._v("\n      Check all\n    ")])],1),e._v(" "),t("br"),e._v(" "),t("a-checkbox-group",{attrs:{options:e.plainOptions},on:{change:e.onChange},model:{value:e.checkedList,callback:function(n){e.checkedList=n},expression:"checkedList"}})],1)};j._withStripped=!0;var B=t(2),G=t.n(B),z=["Apple","Pear","Orange"],U=["Apple","Orange"],V={data:function(){return{checkedList:U,indeterminate:!0,checkAll:!1,plainOptions:z}},methods:{onChange:function(e){this.indeterminate=!!e.length&&e.length<z.length,this.checkAll=e.length===z.length},onCheckAllChange:function(e){G()(this,{checkedList:e.target.checked?z:[],indeterminate:!1,checkAll:e.target.checked})}}},W=t(1367),F=t.n(W),I=t(1368),J=t.n(I),N=Object(c.a)(V,j,[],!1,null,null,null);"function"==typeof F.a&&F()(N),"function"==typeof J.a&&J()(N),N.options.__file="components/checkbox/demo/check-all.vue";var T=N.exports,q='<cn>\r\n#### 全选 \r\n\r\n在实现全选效果时，你可能会用到`indeterminate`属性\r\n</cn>\r\n<us>\r\n#### Check All\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <div :style="{ borderBottom: \'1px solid #E9E9E9\' }">\r\n      <a-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">\r\n        Check all\r\n      </a-checkbox>\r\n    </div>\r\n    <br />\r\n    <a-checkbox-group v-model="checkedList" :options="plainOptions" @change="onChange" />\r\n  </div>\r\n</template>\r\n<script>\r\nconst plainOptions = [\'Apple\', \'Pear\', \'Orange\'];\r\nconst defaultCheckedList = [\'Apple\', \'Orange\'];\r\nexport default {\r\n  data() {\r\n    return {\r\n      checkedList: defaultCheckedList,\r\n      indeterminate: true,\r\n      checkAll: false,\r\n      plainOptions,\r\n    };\r\n  },\r\n  methods: {\r\n    onChange(checkedList) {\r\n      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;\r\n      this.checkAll = checkedList.length === plainOptions.length;\r\n    },\r\n    onCheckAllChange(e) {\r\n      Object.assign(this, {\r\n        checkedList: e.target.checked ? plainOptions : [],\r\n        indeterminate: false,\r\n        checkAll: e.target.checked,\r\n      });\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',H=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",{style:{marginBottom:"20px"}},[t("a-checkbox",{attrs:{checked:e.checked,disabled:e.disabled},on:{change:e.onChange}},[e._v("\n      "+e._s(e.label)+"\n    ")])],1),e._v(" "),t("p",[t("a-button",{attrs:{type:"primary",size:"small"},on:{click:e.toggleChecked}},[e._v("\n      "+e._s(e.checked?"Uncheck":"Check")+"\n    ")]),e._v(" "),t("a-button",{style:{marginLeft:"10px"},attrs:{type:"primary",size:"small"},on:{click:e.toggleDisable}},[e._v("\n      "+e._s(e.disabled?"Enable":"Disable")+"\n    ")])],1)])};H._withStripped=!0;var K={data:function(){return{checked:!0,disabled:!1}},computed:{label:function(){return(this.checked?"Checked":"Unchecked")+"-"+(this.disabled?"Disabled":"Enabled")}},methods:{toggleChecked:function(){this.checked=!this.checked},toggleDisable:function(){this.disabled=!this.disabled},onChange:function(e){this.checked=e.target.checked}}},M=t(1369),Q=t.n(M),R=t(1370),X=t.n(R),Y=Object(c.a)(K,H,[],!1,null,null,null);"function"==typeof Q.a&&Q()(Y),"function"==typeof X.a&&X()(Y),Y.options.__file="components/checkbox/demo/controlled-checkbox.vue";var Z=Y.exports,ee='<cn>\r\n#### 受控的checkbox \r\n\r\n联动checkbox\r\n</cn>\r\n<us>\r\n#### Controlled Checkbox\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <p :style="{ marginBottom: \'20px\' }">\r\n      <a-checkbox :checked="checked" :disabled="disabled" @change="onChange">\r\n        {{ label }}\r\n      </a-checkbox>\r\n    </p>\r\n    <p>\r\n      <a-button type="primary" size="small" @click="toggleChecked">\r\n        {{ !checked ? \'Check\' : \'Uncheck\' }}\r\n      </a-button>\r\n      <a-button :style="{ marginLeft: \'10px\' }" type="primary" size="small" @click="toggleDisable">\r\n        {{ !disabled ? \'Disable\' : \'Enable\' }}\r\n      </a-button>\r\n    </p>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      checked: true,\r\n      disabled: false,\r\n    };\r\n  },\r\n  computed: {\r\n    label() {\r\n      const { checked, disabled } = this;\r\n      return `${checked ? \'Checked\' : \'Unchecked\'}-${disabled ? \'Disabled\' : \'Enabled\'}`;\r\n    },\r\n  },\r\n  methods: {\r\n    toggleChecked() {\r\n      this.checked = !this.checked;\r\n    },\r\n    toggleDisable() {\r\n      this.disabled = !this.disabled;\r\n    },\r\n    onChange(e) {\r\n      this.checked = e.target.checked;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',ne=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("a-checkbox-group",{on:{change:e.onChange}},[t("a-row",[t("a-col",{attrs:{span:8}},[t("a-checkbox",{attrs:{value:"A"}},[e._v("\n        A\n      ")])],1),e._v(" "),t("a-col",{attrs:{span:8}},[t("a-checkbox",{attrs:{value:"B"}},[e._v("\n        B\n      ")])],1),e._v(" "),t("a-col",{attrs:{span:8}},[t("a-checkbox",{attrs:{value:"C"}},[e._v("\n        C\n      ")])],1),e._v(" "),t("a-col",{attrs:{span:8}},[t("a-checkbox",{attrs:{value:"D"}},[e._v("\n        D\n      ")])],1),e._v(" "),t("a-col",{attrs:{span:8}},[t("a-checkbox",{attrs:{value:"E"}},[e._v("\n        E\n      ")])],1)],1)],1)};ne._withStripped=!0;var te={methods:{onChange:function(e){console.log("checked = ",e)}}},re=t(1371),ae=t.n(re),ce=t(1372),oe=t.n(ce),le=Object(c.a)(te,ne,[],!1,null,null,null);"function"==typeof ae.a&&ae()(le),"function"==typeof oe.a&&oe()(le),le.options.__file="components/checkbox/demo/use-with-grid.vue";var ie=le.exports,se='<cn>\r\n#### 布局 \r\n\r\nCheckbox.Group内嵌Checkbox并与Grid组件一起使用，可以实现灵活的布局\r\n</cn>\r\n<us>\r\n#### Use With Grid\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-checkbox-group @change="onChange">\r\n    <a-row>\r\n      <a-col :span="8">\r\n        <a-checkbox value="A">\r\n          A\r\n        </a-checkbox>\r\n      </a-col>\r\n      <a-col :span="8">\r\n        <a-checkbox value="B">\r\n          B\r\n        </a-checkbox>\r\n      </a-col>\r\n      <a-col :span="8">\r\n        <a-checkbox value="C">\r\n          C\r\n        </a-checkbox>\r\n      </a-col>\r\n      <a-col :span="8">\r\n        <a-checkbox value="D">\r\n          D\r\n        </a-checkbox>\r\n      </a-col>\r\n      <a-col :span="8">\r\n        <a-checkbox value="E">\r\n          E\r\n        </a-checkbox>\r\n      </a-col>\r\n    </a-row>\r\n  </a-checkbox-group>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    onChange(checkedValues) {\r\n      console.log(\'checked = \', checkedValues);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',he=function(){var e=this.$createElement;this._self._c;return this._m(0)};he._withStripped=!0;var de=Object(c.a)({},he,[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",{attrs:{id:"API"}},[e._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("h3",{attrs:{id:"属性"}},[e._v("属性 "),t("a",{staticClass:"anchor",attrs:{href:"#属性","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("h4",{attrs:{id:"Checkbox"}},[e._v("Checkbox "),t("a",{staticClass:"anchor",attrs:{href:"#Checkbox","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("默认值")]),e._v(" "),t("th",[e._v("版本")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("autoFocus")]),e._v(" "),t("td",[e._v("自动获取焦点")]),e._v(" "),t("td",[e._v("boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("checked")]),e._v(" "),t("td",[e._v("指定当前是否选中")]),e._v(" "),t("td",[e._v("boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("defaultChecked")]),e._v(" "),t("td",[e._v("初始是否选中")]),e._v(" "),t("td",[e._v("boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("disabled")]),e._v(" "),t("td",[e._v("失效状态")]),e._v(" "),t("td",[e._v("boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("indeterminate")]),e._v(" "),t("td",[e._v("设置 indeterminate 状态，只负责样式控制")]),e._v(" "),t("td",[e._v("boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td")])])]),e._v(" "),t("h4",{attrs:{id:"事件"}},[e._v("事件 "),t("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("事件名称")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("回调参数")]),e._v(" "),t("th",[e._v("版本")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("change")]),e._v(" "),t("td",[e._v("变化时回调函数")]),e._v(" "),t("td",[e._v("Function(e:Event)")]),e._v(" "),t("td",[e._v("-")])])])]),e._v(" "),t("h4",{attrs:{id:"Checkbox-Group"}},[e._v("Checkbox Group "),t("a",{staticClass:"anchor",attrs:{href:"#Checkbox-Group","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("默认值")]),e._v(" "),t("th",[e._v("版本")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("defaultValue")]),e._v(" "),t("td",[e._v("默认选中的选项")]),e._v(" "),t("td",[e._v("string[]")]),e._v(" "),t("td",[e._v("[]")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("disabled")]),e._v(" "),t("td",[e._v("整组失效")]),e._v(" "),t("td",[e._v("boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("name")]),e._v(" "),t("td",[e._v("CheckboxGroup 下所有 "),t("code",{pre:!0},[e._v('input[type="checkbox"]')]),e._v(" 的 "),t("code",{pre:!0},[e._v("name")]),e._v(" 属性")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("-")]),e._v(" "),t("td",[e._v("1.5.0")])]),e._v(" "),t("tr",[t("td",[e._v("options")]),e._v(" "),t("td",[e._v('指定可选项，可以通过 slot="label" slot-scope="option" 定制'),t("code",{pre:!0},[e._v("label")])]),e._v(" "),t("td",[e._v("string[]")]),e._v(" "),t("td",[e._v("Array<{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }>")]),e._v(" "),t("td",[e._v("[]")])]),e._v(" "),t("tr",[t("td",[e._v("value")]),e._v(" "),t("td",[e._v("指定选中的选项")]),e._v(" "),t("td",[e._v("string[]")]),e._v(" "),t("td",[e._v("[]")]),e._v(" "),t("td")])])]),e._v(" "),t("h4",{attrs:{id:"事件-2"}},[e._v("事件 "),t("a",{staticClass:"anchor",attrs:{href:"#事件-2","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("事件名称")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("回调参数")]),e._v(" "),t("th",[e._v("版本")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("change")]),e._v(" "),t("td",[e._v("变化时回调函数")]),e._v(" "),t("td",[e._v("Function(checkedValue)")]),e._v(" "),t("td",[e._v("-")])])])]),e._v(" "),t("h3",{attrs:{id:"方法"}},[e._v("方法 "),t("a",{staticClass:"anchor",attrs:{href:"#方法","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("h4",{attrs:{id:"Checkbox-2"}},[e._v("Checkbox "),t("a",{staticClass:"anchor",attrs:{href:"#Checkbox-2","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("名称")]),e._v(" "),t("th",[e._v("描述")]),e._v(" "),t("th",[e._v("版本")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("blur()")]),e._v(" "),t("td",[e._v("移除焦点")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("focus()")]),e._v(" "),t("td",[e._v("获取焦点")]),e._v(" "),t("td")])])])])}],!1,null,null,null);de.options.__file="components/checkbox/index.zh-CN.md";var ve=de.exports,_e=function(){var e=this.$createElement;return(this._self._c||e)("div")};_e._withStripped=!0;var pe=Object(c.a)({},_e,[],!1,null,null,null);pe.options.__file="components/checkbox/index.en-US.md";var ue=pe.exports,be="",ke="# Checkbox多选框\n\n多选框\n\n## 何时使用\n\n- 在一组可选项中进行多项选择时；\n- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。代码演示",ge={category:"Components",subtitle:"多选框",type:"Data Entry",zhType:"数据录入",cols:2,title:"Checkbox",render:function(){var e=arguments[0];return e("div",[e("md",{attrs:{cn:ke,us:be}}),e("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[e("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[e("demo-container",{attrs:{code:v}},[e(d)]),e("demo-container",{attrs:{code:x}},[e(f)]),e("demo-container",{attrs:{code:S}},[e($)])]),e("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[e("demo-container",{attrs:{code:q}},[e(T)]),e("demo-container",{attrs:{code:ee}},[e(Z)]),e("demo-container",{attrs:{code:se}},[e(ie)])])]),e("api",[e(ve,{slot:"cn"}),e(ue)])])}},fe=Object(c.a)(ge,void 0,void 0,!1,null,null,null);fe.options.__file="components/checkbox/demo/index.vue";n.default=fe.exports}}]);