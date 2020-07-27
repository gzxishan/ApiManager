(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1587:function(n,e){},1588:function(n,e){},1589:function(n,e){},1590:function(n,e){},1591:function(n,e){},1592:function(n,e){},1593:function(n,e){},1594:function(n,e){},1595:function(n,e){},1596:function(n,e){},1597:function(n,e){},1598:function(n,e){},2325:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("a-tag",[n._v("Tag 1")]),n._v(" "),t("a-tag",[t("a",{attrs:{href:"https://github.com/vueComponent/ant-design"}},[n._v("Link")])]),n._v(" "),t("a-tag",{attrs:{closable:""},on:{close:n.log}},[n._v("\n    Tag 2\n  ")]),n._v(" "),t("a-tag",{attrs:{closable:""},on:{close:n.preventDefault}},[n._v("\n    Prevent Default\n  ")])],1)};a._withStripped=!0;var r={methods:{log:function(n){console.log(n)},preventDefault:function(n){n.preventDefault(),console.log("Clicked! But prevent default.")}}},l=t(32),o=t(1587),c=t.n(o),s=t(1588),i=t.n(s),d=Object(l.a)(r,a,[],!1,null,null,null);"function"==typeof c.a&&c()(d),"function"==typeof i.a&&i()(d),d.options.__file="components/tag/demo/basic-usage.vue";var v=d.exports,g='<cn>\r\n#### 基本用法 \r\n\r\n基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `close` 两个事件。\r\n</cn>\r\n<us>\r\n#### Basic Usage\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-tag>Tag 1</a-tag>\r\n    <a-tag><a href="https://github.com/vueComponent/ant-design">Link</a></a-tag>\r\n    <a-tag closable @close="log">\r\n      Tag 2\r\n    </a-tag>\r\n    <a-tag closable @close="preventDefault">\r\n      Prevent Default\r\n    </a-tag>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    log(e) {\r\n      console.log(e);\r\n    },\r\n    preventDefault(e) {\r\n      e.preventDefault();\r\n      console.log(\'Clicked! But prevent default.\');\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h4",{staticStyle:{"margin-bottom":"16px"}},[n._v("\n    Presets:\n  ")]),n._v(" "),t("div",[t("a-tag",{attrs:{color:"pink"}},[n._v("\n      pink\n    ")]),n._v(" "),t("a-tag",{attrs:{color:"red"}},[n._v("\n      red\n    ")]),n._v(" "),t("a-tag",{attrs:{color:"orange"}},[n._v("\n      orange\n    ")]),n._v(" "),t("a-tag",{attrs:{color:"green"}},[n._v("\n      green\n    ")]),n._v(" "),t("a-tag",{attrs:{color:"cyan"}},[n._v("\n      cyan\n    ")]),n._v(" "),t("a-tag",{attrs:{color:"blue"}},[n._v("\n      blue\n    ")]),n._v(" "),t("a-tag",{attrs:{color:"purple"}},[n._v("\n      purple\n    ")])],1),n._v(" "),t("h4",{staticStyle:{margin:"'16px 0'"}},[n._v("\n    Custom:\n  ")]),n._v(" "),t("div",[t("a-tag",{attrs:{color:"#f50"}},[n._v("\n      #f50\n    ")]),n._v(" "),t("a-tag",{attrs:{color:"#2db7f5"}},[n._v("\n      #2db7f5\n    ")]),n._v(" "),t("a-tag",{attrs:{color:"#87d068"}},[n._v("\n      #87d068\n    ")]),n._v(" "),t("a-tag",{attrs:{color:"#108ee9"}},[n._v("\n      #108ee9\n    ")])],1)])};u._withStripped=!0;var h=t(1589),_=t.n(h),p=t(1590),f=t.n(p),b=Object(l.a)({},u,[],!1,null,null,null);"function"==typeof _.a&&_()(b),"function"==typeof f.a&&f()(b),b.options.__file="components/tag/demo/colorful-tag.vue";var m=b.exports,k='<cn>\r\n#### 多彩标签 \r\n\r\n我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。\r\n</cn>\r\n<us>\r\n#### Colorful Tag\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <h4 style="margin-bottom: 16px">\r\n      Presets:\r\n    </h4>\r\n    <div>\r\n      <a-tag color="pink">\r\n        pink\r\n      </a-tag>\r\n      <a-tag color="red">\r\n        red\r\n      </a-tag>\r\n      <a-tag color="orange">\r\n        orange\r\n      </a-tag>\r\n      <a-tag color="green">\r\n        green\r\n      </a-tag>\r\n      <a-tag color="cyan">\r\n        cyan\r\n      </a-tag>\r\n      <a-tag color="blue">\r\n        blue\r\n      </a-tag>\r\n      <a-tag color="purple">\r\n        purple\r\n      </a-tag>\r\n    </div>\r\n    <h4 style="margin: \'16px 0\'">\r\n      Custom:\r\n    </h4>\r\n    <div>\r\n      <a-tag color="#f50">\r\n        #f50\r\n      </a-tag>\r\n      <a-tag color="#2db7f5">\r\n        #2db7f5\r\n      </a-tag>\r\n      <a-tag color="#87d068">\r\n        #87d068\r\n      </a-tag>\r\n      <a-tag color="#108ee9">\r\n        #108ee9\r\n      </a-tag>\r\n    </div>\r\n  </div>\r\n</template>\r\n',T=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("span",{style:{marginRight:8}},[n._v("Categories:")]),n._v(" "),n._l(n.tags,(function(e){return[t("a-checkable-tag",{key:e,attrs:{checked:n.selectedTags.indexOf(e)>-1},on:{change:function(t){return n.handleChange(e,t)}}},[n._v("\n      "+n._s(e)+"\n    ")])]}))],2)};T._withStripped=!0;var y=t(15),C=t.n(y),x={data:function(){return{checked1:!1,checked2:!1,checked3:!1,tags:["Movies","Books","Music","Sports"],selectedTags:[]}},methods:{handleChange:function(n,e){var t=this.selectedTags,a=e?[].concat(C()(t),[n]):t.filter((function(e){return e!==n}));console.log("You are interested in: ",a),this.selectedTags=a}}},w=t(1591),V=t.n(w),S=t(1592),I=t.n(S),O=Object(l.a)(x,T,[],!1,null,null,null);"function"==typeof V.a&&V()(O),"function"==typeof I.a&&I()(O),O.options.__file="components/tag/demo/hot-tags.vue";var $=O.exports,D="<cn>\r\n#### 热门标签 \r\n\r\n选择你感兴趣的话题。\r\n</cn>\r\n<us>\r\n#### Hot Tags\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <span :style=\"{ marginRight: 8 }\">Categories:</span>\r\n    <template v-for=\"tag in tags\">\r\n      <a-checkable-tag\r\n        :key=\"tag\"\r\n        :checked=\"selectedTags.indexOf(tag) > -1\"\r\n        @change=\"checked => handleChange(tag, checked)\"\r\n      >\r\n        {{ tag }}\r\n      </a-checkable-tag>\r\n    </template>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      checked1: false,\r\n      checked2: false,\r\n      checked3: false,\r\n      tags: ['Movies', 'Books', 'Music', 'Sports'],\r\n      selectedTags: [],\r\n    };\r\n  },\r\n  methods: {\r\n    handleChange(tag, checked) {\r\n      const { selectedTags } = this;\r\n      const nextSelectedTags = checked\r\n        ? [...selectedTags, tag]\r\n        : selectedTags.filter(t => t !== tag);\r\n      console.log('You are interested in: ', nextSelectedTags);\r\n      this.selectedTags = nextSelectedTags;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n",j=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("a-checkable-tag",{on:{change:n.handleChange},model:{value:n.checked1,callback:function(e){n.checked1=e},expression:"checked1"}},[n._v("\n    Tag1\n  ")]),n._v(" "),t("a-checkable-tag",{on:{change:n.handleChange},model:{value:n.checked2,callback:function(e){n.checked2=e},expression:"checked2"}},[n._v("\n    Tag2\n  ")]),n._v(" "),t("a-checkable-tag",{on:{change:n.handleChange},model:{value:n.checked3,callback:function(e){n.checked3=e},expression:"checked3"}},[n._v("\n    Tag3\n  ")])],1)};j._withStripped=!0;var E={data:function(){return{checked1:!1,checked2:!1,checked3:!1}},methods:{handleChange:function(n){console.log(n)}}},P=t(1593),z=t.n(P),M=t(1594),B=t.n(M),A=Object(l.a)(E,j,[],!1,null,null,null);"function"==typeof z.a&&z()(A),"function"==typeof B.a&&B()(A),A.options.__file="components/tag/demo/checkable.vue";var U=A.exports,N='<cn>\r\n#### 可选择 \r\n\r\n可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。\r\n\r\n> 该组件为完全受控组件，不支持非受控用法。\r\n</cn>\r\n<us>\r\n#### Checkable\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-checkable-tag v-model="checked1" @change="handleChange">\r\n      Tag1\r\n    </a-checkable-tag>\r\n    <a-checkable-tag v-model="checked2" @change="handleChange">\r\n      Tag2\r\n    </a-checkable-tag>\r\n    <a-checkable-tag v-model="checked3" @change="handleChange">\r\n      Tag3\r\n    </a-checkable-tag>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      checked1: false,\r\n      checked2: false,\r\n      checked3: false,\r\n    };\r\n  },\r\n  methods: {\r\n    handleChange(checked) {\r\n      console.log(checked);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',R=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._l(n.tags,(function(e,a){return[e.length>20?t("a-tooltip",{key:e,attrs:{title:e}},[t("a-tag",{key:e,attrs:{closable:0!==a},on:{close:function(){return n.handleClose(e)}}},[n._v("\n        "+n._s(e.slice(0,20)+"...")+"\n      ")])],1):t("a-tag",{key:e,attrs:{closable:0!==a},on:{close:function(){return n.handleClose(e)}}},[n._v("\n      "+n._s(e)+"\n    ")])]})),n._v(" "),n.inputVisible?t("a-input",{ref:"input",style:{width:"78px"},attrs:{type:"text",size:"small",value:n.inputValue},on:{change:n.handleInputChange,blur:n.handleInputConfirm,keyup:function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.handleInputConfirm(e)}}}):t("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:n.showInput}},[t("a-icon",{attrs:{type:"plus"}}),n._v(" New Tag\n  ")],1)],2)};R._withStripped=!0;var J=t(2),L=t.n(J),Y={data:function(){return{tags:["Unremovable","Tag 2","Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3"],inputVisible:!1,inputValue:""}},methods:{handleClose:function(n){var e=this.tags.filter((function(e){return e!==n}));console.log(e),this.tags=e},showInput:function(){this.inputVisible=!0,this.$nextTick((function(){this.$refs.input.focus()}))},handleInputChange:function(n){this.inputValue=n.target.value},handleInputConfirm:function(){var n=this.inputValue,e=this.tags;n&&-1===e.indexOf(n)&&(e=[].concat(C()(e),[n])),console.log(e),L()(this,{tags:e,inputVisible:!1,inputValue:""})}}},H=t(1595),q=t.n(H),F=t(1596),G=t.n(F),K=Object(l.a)(Y,R,[],!1,null,null,null);"function"==typeof q.a&&q()(K),"function"==typeof G.a&&G()(K),K.options.__file="components/tag/demo/add-_-remove-dynamically.vue";var Q=K.exports,W='<cn>\r\n#### 动态添加和删除 \r\n\r\n用数组生成一组标签，可以动态添加和删除。\r\n</cn>\r\n<us>\r\n#### Add _ Remove Dynamically\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <template v-for="(tag, index) in tags">\r\n      <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">\r\n        <a-tag :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">\r\n          {{ `${tag.slice(0, 20)}...` }}\r\n        </a-tag>\r\n      </a-tooltip>\r\n      <a-tag v-else :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">\r\n        {{ tag }}\r\n      </a-tag>\r\n    </template>\r\n    <a-input\r\n      v-if="inputVisible"\r\n      ref="input"\r\n      type="text"\r\n      size="small"\r\n      :style="{ width: \'78px\' }"\r\n      :value="inputValue"\r\n      @change="handleInputChange"\r\n      @blur="handleInputConfirm"\r\n      @keyup.enter="handleInputConfirm"\r\n    />\r\n    <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">\r\n      <a-icon type="plus" /> New Tag\r\n    </a-tag>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      tags: [\'Unremovable\', \'Tag 2\', \'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3\'],\r\n      inputVisible: false,\r\n      inputValue: \'\',\r\n    };\r\n  },\r\n  methods: {\r\n    handleClose(removedTag) {\r\n      const tags = this.tags.filter(tag => tag !== removedTag);\r\n      console.log(tags);\r\n      this.tags = tags;\r\n    },\r\n\r\n    showInput() {\r\n      this.inputVisible = true;\r\n      this.$nextTick(function() {\r\n        this.$refs.input.focus();\r\n      });\r\n    },\r\n\r\n    handleInputChange(e) {\r\n      this.inputValue = e.target.value;\r\n    },\r\n\r\n    handleInputConfirm() {\r\n      const inputValue = this.inputValue;\r\n      let tags = this.tags;\r\n      if (inputValue && tags.indexOf(inputValue) === -1) {\r\n        tags = [...tags, inputValue];\r\n      }\r\n      console.log(tags);\r\n      Object.assign(this, {\r\n        tags,\r\n        inputVisible: false,\r\n        inputValue: \'\',\r\n      });\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',X=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("a-tag",{attrs:{closable:""},model:{value:n.visible,callback:function(e){n.visible=e},expression:"visible"}},[n._v("\n    Movies\n  ")]),n._v(" "),t("br"),n._v(" "),t("a-button",{attrs:{size:"small"},on:{click:function(e){n.visible=!n.visible}}},[n._v("\n    Toggle\n  ")])],1)};X._withStripped=!0;var Z={data:function(){return{visible:!0}}},nn=t(1597),en=t.n(nn),tn=t(1598),an=t.n(tn),rn=Object(l.a)(Z,X,[],!1,null,null,null);"function"==typeof en.a&&en()(rn),"function"==typeof an.a&&an()(rn),rn.options.__file="components/tag/demo/controlled.vue";var ln=rn.exports,on='<cn>\r\n#### 控制关闭状态 \r\n\r\n通过 `visible` 属性控制关闭状态。\r\n</cn>\r\n<us>\r\n#### Controlled\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-tag v-model="visible" closable>\r\n      Movies\r\n    </a-tag>\r\n    <br />\r\n    <a-button size="small" @click="visible = !visible">\r\n      Toggle\r\n    </a-button>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      visible: true,\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n',cn=function(){var n=this.$createElement;this._self._c;return this._m(0)};cn._withStripped=!0;var sn=Object(l.a)({},cn,[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h2",{attrs:{id:"API"}},[n._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("h3",{attrs:{id:"Tag"}},[n._v("Tag "),t("a",{staticClass:"anchor",attrs:{href:"#Tag","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("类型")]),n._v(" "),t("th",[n._v("默认值")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("afterClose")]),n._v(" "),t("td",[n._v("关闭动画完成后的回调，请使用 "),t("code",{pre:!0},[n._v("close")]),n._v(" 事件, 我们将在下个版本删除此项")]),n._v(" "),t("td",[n._v("() => void")]),n._v(" "),t("td",[n._v("-")])]),n._v(" "),t("tr",[t("td",[n._v("afterClose")]),n._v(" "),t("td",[n._v("关闭动画完成后的回调")]),n._v(" "),t("td",[n._v("() => void")]),n._v(" "),t("td",[n._v("-")])]),n._v(" "),t("tr",[t("td",[n._v("closable")]),n._v(" "),t("td",[n._v("标签是否可以关闭")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("false")])]),n._v(" "),t("tr",[t("td",[n._v("color")]),n._v(" "),t("td",[n._v("标签色")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("-")])]),n._v(" "),t("tr",[t("td",[n._v("visible(v-model)")]),n._v(" "),t("td",[n._v("是否显示标签")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("true")])])])])]),n._v(" "),t("h3",{attrs:{id:"事件"}},[n._v("事件 "),t("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("事件名称")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("回调参数")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("close")]),n._v(" "),t("td",[n._v("关闭时的回调")]),n._v(" "),t("td",[n._v("(e) => void")])])])]),n._v(" "),t("h3",{attrs:{id:"Tag.CheckableTag"}},[n._v("Tag.CheckableTag "),t("a",{staticClass:"anchor",attrs:{href:"#Tag.CheckableTag","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("类型")]),n._v(" "),t("th",[n._v("默认值")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("checked(v-model)")]),n._v(" "),t("td",[n._v("设置标签的选中状态")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("false")])])])]),n._v(" "),t("h3",{attrs:{id:"事件-2"}},[n._v("事件 "),t("a",{staticClass:"anchor",attrs:{href:"#事件-2","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("事件名称")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("回调参数")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("change")]),n._v(" "),t("td",[n._v("点击标签时触发的回调")]),n._v(" "),t("td",[n._v("(checked) => void")])])])])])}],!1,null,null,null);sn.options.__file="components/tag/index.zh-CN.md";var dn=sn.exports,vn=function(){var n=this.$createElement;return(this._self._c||n)("div")};vn._withStripped=!0;var gn=Object(l.a)({},vn,[],!1,null,null,null);gn.options.__file="components/tag/index.en-US.md";var un=gn.exports,hn="",_n="# 标签 Tag\n\n进行标记和分类的小标签。\n\n## 何时使用\n\n- 用于标记事物的属性和维度。\n- 进行分类。\n\n## 代码演示",pn={category:"Components",subtitle:"标签",type:"Data Display",zhType:"数据展示",cols:2,title:"Tag",render:function(){var n=arguments[0];return n("div",[n("md",{attrs:{cn:_n,us:hn}}),n("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:g}},[n(v)]),n("demo-container",{attrs:{code:k}},[n(m)]),n("demo-container",{attrs:{code:D}},[n($)])]),n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:N}},[n(U)]),n("demo-container",{attrs:{code:W}},[n(Q)]),n("demo-container",{attrs:{code:on}},[n(ln)])])]),n("api",[n(dn,{slot:"cn"}),n(un)])])}},fn=Object(l.a)(pn,void 0,void 0,!1,null,null,null);fn.options.__file="components/tag/demo/index.vue";e.default=fn.exports}}]);