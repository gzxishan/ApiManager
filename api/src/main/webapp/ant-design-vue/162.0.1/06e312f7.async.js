(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1240:function(n,t,e){},2325:function(n,t){},2326:function(n,t){},2327:function(n,t){n.exports='<cn>\r\n#### 基本\r\n\r\n数字输入框。\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <a-input-number id="inputNumber" v-model="value" :min="1" :max="1000" maxlength="2" placeholder="maxlength=2" @change="onChange" />\r\n    当前值：{{ value }}\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      value: 3,\r\n    };\r\n  },\r\n  methods: {\r\n    onChange(value) {\r\n      console.log(\'changed\', value);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n\r\n'},2328:function(n,t){},2329:function(n,t){},2330:function(n,t){n.exports='<cn>\r\n#### 不可用 \r\n\r\n点击按钮切换可用状态。\r\n</cn>\r\n<us>\r\n#### Disabled\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <a-input-number :min="1" :max="10" :disabled="disabled" :default-value="3" />\r\n    <div style="marginTop:20px">\r\n      <a-button type="primary" @click="toggle">\r\n        Toggle disabled\r\n      </a-button>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      disabled: true,\r\n    };\r\n  },\r\n  methods: {\r\n    toggle() {\r\n      this.disabled = !this.disabled;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},2331:function(n,t){},2332:function(n,t){},2333:function(n,t){n.exports='<cn>\r\n#### 格式化展示 \r\n\r\n通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。\r\n</cn>\r\n<us>\r\n#### Formatter\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <a-input-number\r\n      :default-value="1000"\r\n      :formatter="value => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, \',\')"\r\n      :parser="value => value.replace(/\\$\\s?|(,*)/g, \'\')"\r\n      @change="onChange"\r\n    />\r\n    <a-input-number\r\n      :default-value="100"\r\n      :min="0"\r\n      :max="100"\r\n      :formatter="value => `${value}%`"\r\n      :parser="value => value.replace(\'%\', \'\')"\r\n      @change="onChange"\r\n    />\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    onChange(value) {\r\n      console.log(\'changed\', value);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},2334:function(n,t,e){"use strict";var r=e(1240);e.n(r).a},2335:function(n,t){},2336:function(n,t){},2337:function(n,t){n.exports='<cn>\r\n#### 三种大小 \r\n\r\n三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。\r\n</cn>\r\n<us>\r\n#### Sizes\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <a-input-number size="large" :min="1" :max="100000" :default-value="3" @change="onChange" />\r\n    <a-input-number :min="1" :max="100000" :default-value="3" @change="onChange" />\r\n    <a-input-number size="small" :min="1" :max="100000" :default-value="3" @change="onChange" />\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    onChange(value) {\r\n      console.log(\'changed\', value);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style scoped>\r\n.ant-input-number {\r\n  margin-right: 10px;\r\n}\r\n</style>\r\n'},2338:function(n,t){},2339:function(n,t){},2340:function(n,t){n.exports='<cn>\r\n#### 小数 \r\n\r\n和原生的数字输入框一样，value 的精度由 step 的小数位数决定。\r\n</cn>\r\n<us>\r\n#### Decimals\r\n</us>\r\n\r\r\n<template>\r\n  <a-input-number :min="0" :max="10" :step="0.1" @change="onChange" />\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    onChange(value) {\r\n      console.log(\'changed\', value);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},2784:function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("a-input-number",{attrs:{id:"inputNumber",min:1,max:1e3,maxlength:"2",placeholder:"maxlength=2"},on:{change:n.onChange},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}}),n._v("\n  当前值："+n._s(n.value)+"\n")],1)};r._withStripped=!0;var a={data:function(){return{value:3}},methods:{onChange:function(n){console.log("changed",n)}}},i=e(32),o=e(2325),v=e.n(o),u=e(2326),l=e.n(u),s=Object(i.a)(a,r,[],!1,null,null,null);"function"==typeof v.a&&v()(s),"function"==typeof l.a&&l()(s),s.options.__file="components/input-number/demo/basic.vue";var d=s.exports,_=e(2327),c=e.n(_),p=function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("a-input-number",{attrs:{min:1,max:10,disabled:this.disabled,"default-value":3}}),this._v(" "),t("div",{staticStyle:{marginTop:"20px"}},[t("a-button",{attrs:{type:"primary"},on:{click:this.toggle}},[this._v("\n      Toggle disabled\n    ")])],1)],1)};p._withStripped=!0;var m={data:function(){return{disabled:!0}},methods:{toggle:function(){this.disabled=!this.disabled}}},h=e(2328),f=e.n(h),g=e(2329),b=e.n(g),x=Object(i.a)(m,p,[],!1,null,null,null);"function"==typeof f.a&&f()(x),"function"==typeof b.a&&b()(x),x.options.__file="components/input-number/demo/disabled.vue";var y=x.exports,C=e(2330),w=e.n(C),$=function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("a-input-number",{attrs:{"default-value":1e3,formatter:function(n){return("$ "+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(n){return n.replace(/\$\s?|(,*)/g,"")}},on:{change:this.onChange}}),this._v(" "),t("a-input-number",{attrs:{"default-value":100,min:0,max:100,formatter:function(n){return n+"%"},parser:function(n){return n.replace("%","")}},on:{change:this.onChange}})],1)};$._withStripped=!0;var S={methods:{onChange:function(n){console.log("changed",n)}}},z=e(2331),E=e.n(z),j=e(2332),O=e.n(j),I=Object(i.a)(S,$,[],!1,null,null,null);"function"==typeof E.a&&E()(I),"function"==typeof O.a&&O()(I),I.options.__file="components/input-number/demo/formatter.vue";var k=I.exports,T=e(2333),N=e.n(T),A=function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("a-input-number",{attrs:{size:"large",min:1,max:1e5,"default-value":3},on:{change:this.onChange}}),this._v(" "),t("a-input-number",{attrs:{min:1,max:1e5,"default-value":3},on:{change:this.onChange}}),this._v(" "),t("a-input-number",{attrs:{size:"small",min:1,max:1e5,"default-value":3},on:{change:this.onChange}})],1)};A._withStripped=!0;var B={methods:{onChange:function(n){console.log("changed",n)}}},D=(e(2334),e(2335)),F=e.n(D),P=e(2336),J=e.n(P),U=Object(i.a)(B,A,[],!1,null,"13d27ebe",null);"function"==typeof F.a&&F()(U),"function"==typeof J.a&&J()(U),U.options.__file="components/input-number/demo/sizes.vue";var V=U.exports,q=e(2337),G=e.n(q),H=function(){var n=this.$createElement;return(this._self._c||n)("a-input-number",{attrs:{min:0,max:10,step:.1},on:{change:this.onChange}})};H._withStripped=!0;var K={methods:{onChange:function(n){console.log("changed",n)}}},L=e(2338),M=e.n(L),Q=e(2339),R=e.n(Q),W=Object(i.a)(K,H,[],!1,null,null,null);"function"==typeof M.a&&M()(W),"function"==typeof R.a&&R()(W),W.options.__file="components/input-number/demo/decimals.vue";var X=W.exports,Y=e(2340),Z=e.n(Y),nn=function(){var n=this.$createElement;this._self._c;return this._m(0)};nn._withStripped=!0;var tn=Object(i.a)({},nn,[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h2",{attrs:{id:"API"}},[n._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("p",[n._v("属性如下")]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("成员")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("类型")]),n._v(" "),e("th",[n._v("默认值")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("autoFocus")]),n._v(" "),e("td",[n._v("自动获取焦点")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[n._v("false")])]),n._v(" "),e("tr",[e("td",[n._v("defaultValue")]),n._v(" "),e("td",[n._v("初始值")]),n._v(" "),e("td",[n._v("number")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("disabled")]),n._v(" "),e("td",[n._v("禁用")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[n._v("false")])]),n._v(" "),e("tr",[e("td",[n._v("formatter")]),n._v(" "),e("td",[n._v("指定输入框展示值的格式")]),n._v(" "),e("td",[n._v("function(value: number")]),n._v(" "),e("td",[n._v("string): string")])]),n._v(" "),e("tr",[e("td",[n._v("max")]),n._v(" "),e("td",[n._v("最大值")]),n._v(" "),e("td",[n._v("number")]),n._v(" "),e("td",[n._v("Infinity")])]),n._v(" "),e("tr",[e("td",[n._v("min")]),n._v(" "),e("td",[n._v("最小值")]),n._v(" "),e("td",[n._v("number")]),n._v(" "),e("td",[n._v("-Infinity")])]),n._v(" "),e("tr",[e("td",[n._v("parser")]),n._v(" "),e("td",[n._v("指定从 formatter 里转换回数字的方式，和 formatter 搭配使用")]),n._v(" "),e("td",[n._v("function( string): number")]),n._v(" "),e("td",[n._v("-")])]),n._v(" "),e("tr",[e("td",[n._v("precision")]),n._v(" "),e("td",[n._v("数值精度")]),n._v(" "),e("td",[n._v("number")]),n._v(" "),e("td",[n._v("-")])]),n._v(" "),e("tr",[e("td",[n._v("decimalSeparator")]),n._v(" "),e("td",[n._v("小数点")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("-")])]),n._v(" "),e("tr",[e("td",[n._v("size")]),n._v(" "),e("td",[n._v("输入框大小")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("无")])]),n._v(" "),e("tr",[e("td",[n._v("step")]),n._v(" "),e("td",[n._v("每次改变步数，可以为小数")]),n._v(" "),e("td",[n._v("number")]),n._v(" "),e("td",[n._v("string")])]),n._v(" "),e("tr",[e("td",[n._v("value(v-model)")]),n._v(" "),e("td",[n._v("当前值")]),n._v(" "),e("td",[n._v("number")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("maxlength")]),n._v(" "),e("td",[n._v("最多输入的字符数")]),n._v(" "),e("td",[n._v("string|number")]),n._v(" "),e("td")])])]),n._v(" "),e("h3",{attrs:{id:"事件"}},[n._v("事件 "),e("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("事件名称")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("回调参数")]),n._v(" "),e("th",[n._v("版本")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("change")]),n._v(" "),e("td",[n._v("变化回调")]),n._v(" "),e("td",[n._v("Function(value: number")]),n._v(" "),e("td",[n._v("string)")])]),n._v(" "),e("tr",[e("td",[n._v("pressEnter")]),n._v(" "),e("td",[n._v("按下回车的回调")]),n._v(" "),e("td",[n._v("function(e)")]),n._v(" "),e("td")])])]),n._v(" "),e("h2",{attrs:{id:"方法"}},[n._v("方法 "),e("a",{staticClass:"anchor",attrs:{href:"#方法","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("名称")]),n._v(" "),e("th",[n._v("描述")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("blur()")]),n._v(" "),e("td",[n._v("移除焦点")])]),n._v(" "),e("tr",[e("td",[n._v("focus()")]),n._v(" "),e("td",[n._v("获取焦点")])])])])])}],!1,null,null,null);tn.options.__file="components/input-number/index.zh-CN.md";var en=tn.exports,rn=function(){var n=this.$createElement;return(this._self._c||n)("div")};rn._withStripped=!0;var an=Object(i.a)({},rn,[],!1,null,null,null);an.options.__file="components/input-number/index.en-US.md";var on=an.exports,vn="",un="# 数字输入框\n\n通过鼠标或键盘，输入范围内的数值。\n\n## 何时使用\n\n当需要获取标准数值时。\n\n## 代码演示",ln={category:"Components",subtitle:"数字输入框",type:"Data Entry",zhType:"数据录入",cols:2,title:"InputNumber",render:function(){var n=arguments[0];return n("div",[n("md",{attrs:{cn:un,us:vn}}),n("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:c.a}},[n(d)]),n("demo-container",{attrs:{code:w.a}},[n(y)]),n("demo-container",{attrs:{code:N.a}},[n(k)])]),n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:G.a}},[n(V)]),n("demo-container",{attrs:{code:Z.a}},[n(X)])])]),n("api",[n(en,{slot:"cn"}),n(on)])])}},sn=Object(i.a)(ln,void 0,void 0,!1,null,null,null);sn.options.__file="components/input-number/demo/index.vue";t.default=sn.exports}}]);