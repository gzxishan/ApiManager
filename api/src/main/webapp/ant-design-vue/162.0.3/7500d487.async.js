(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1999:function(n,t){},2e3:function(n,t){},2001:function(n,t){},2002:function(n,t){},2003:function(n,t){},2004:function(n,t){},2005:function(n,t){},2006:function(n,t){},2007:function(n,t){},2008:function(n,t){},2009:function(n,t){},2010:function(n,t){},2322:function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a-mentions",{on:{change:n.onChange,select:n.onSelect},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}},[e("a-mentions-option",{attrs:{value:"afc163"}},[n._v("\n    afc163\n  ")]),n._v(" "),e("a-mentions-option",{attrs:{value:"zombieJ"}},[n._v("\n    zombieJ\n  ")]),n._v(" "),e("a-mentions-option",{attrs:{value:"yesmeck"}},[n._v("\n    yesmeck\n  ")])],1)};r._withStripped=!0;var o={data:function(){return{value:"@afc163"}},methods:{onSelect:function(n){console.log("select",n)},onChange:function(n){console.log("Change:",n)}}},a=e(32),i=e(1999),s=e.n(i),l=e(2e3),c=e.n(l),v=Object(a.a)(o,r,[],!1,null,null,null);"function"==typeof s.a&&s()(v),"function"==typeof c.a&&c()(v),v.options.__file="components/mentions/demo/basic-usage.vue";var u=v.exports,m='<cn>\r\n#### 基础列表 \r\n\r\n基本使用。\r\n</cn>\r\n<us>\r\n#### Basic Usage\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-mentions v-model="value" @change="onChange" @select="onSelect">\r\n    <a-mentions-option value="afc163">\r\n      afc163\r\n    </a-mentions-option>\r\n    <a-mentions-option value="zombieJ">\r\n      zombieJ\r\n    </a-mentions-option>\r\n    <a-mentions-option value="yesmeck">\r\n      yesmeck\r\n    </a-mentions-option>\r\n  </a-mentions>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      value: \'@afc163\',\r\n    };\r\n  },\r\n  methods: {\r\n    onSelect(option) {\r\n      console.log(\'select\', option);\r\n    },\r\n    onChange(value) {\r\n      console.log(\'Change:\', value);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a-form",{attrs:{form:n.form,layout:"horizontal"}},[e("a-form-item",{attrs:{label:"Top coders","label-col":{span:5},"wrapper-col":{span:12}}},[e("a-mentions",{directives:[{name:"decorator",rawName:"v-decorator",value:["coders",{rules:[{validator:n.checkMention}]}],expression:"[\n        'coders',\n        {\n          rules: [{ validator: checkMention }],\n        },\n      ]"}],attrs:{rows:"1"}},[e("a-mentions-option",{attrs:{value:"afc163"}},[n._v("\n        afc163\n      ")]),n._v(" "),e("a-mentions-option",{attrs:{value:"zombieJ"}},[n._v("\n        zombieJ\n      ")]),n._v(" "),e("a-mentions-option",{attrs:{value:"yesmeck"}},[n._v("\n        yesmeck\n      ")])],1)],1),n._v(" "),e("a-form-item",{attrs:{label:"Bio","label-col":{span:5},"wrapper-col":{span:12}}},[e("a-mentions",{directives:[{name:"decorator",rawName:"v-decorator",value:["bio",{rules:[{required:!0}]}],expression:"[\n        'bio',\n        {\n          rules: [{ required: true }],\n        },\n      ]"}],attrs:{rows:"3",placeholder:"You can use @ to ref user here"}},[e("a-mentions-option",{attrs:{value:"afc163"}},[n._v("\n        afc163\n      ")]),n._v(" "),e("a-mentions-option",{attrs:{value:"zombieJ"}},[n._v("\n        zombieJ\n      ")]),n._v(" "),e("a-mentions-option",{attrs:{value:"yesmeck"}},[n._v("\n        yesmeck\n      ")])],1)],1),n._v(" "),e("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[e("a-button",{attrs:{type:"primary"},on:{click:n.handleSubmit}},[n._v("\n      Submit\n    ")]),n._v(" "),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:n.handleReset}},[n._v("\n      Reset\n    ")])],1)],1)};d._withStripped=!0;var p=e(1173).a.getMentions,_={data:function(){return{form:this.$form.createForm(this,{name:"mentions"})}},methods:{handleReset:function(n){n.preventDefault(),this.form.resetFields()},handleSubmit:function(n){n.preventDefault(),this.form.validateFields((function(n,t){n?console.log("Errors in the form!!!"):(console.log("Submit!!!"),console.log(t))}))},checkMention:function(n,t,e){p(t).length<2?e(new Error("More than one must be selected!")):e()}}},h=e(2001),f=e.n(h),b=e(2002),g=e.n(b),y=Object(a.a)(_,d,[],!1,null,null,null);"function"==typeof f.a&&f()(y),"function"==typeof g.a&&g()(y),y.options.__file="components/mentions/demo/with-form.vue";var k=y.exports,x='<cn>\r\n#### 配合 Form 使用 \r\n\r\n受控模式，例如配合 Form 使用。\r\n</cn>\r\n<us>\r\n#### With Form\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-form :form="form" layout="horizontal">\r\n    <a-form-item label="Top coders" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">\r\n      <a-mentions\r\n        v-decorator="[\r\n          \'coders\',\r\n          {\r\n            rules: [{ validator: checkMention }],\r\n          },\r\n        ]"\r\n        rows="1"\r\n      >\r\n        <a-mentions-option value="afc163">\r\n          afc163\r\n        </a-mentions-option>\r\n        <a-mentions-option value="zombieJ">\r\n          zombieJ\r\n        </a-mentions-option>\r\n        <a-mentions-option value="yesmeck">\r\n          yesmeck\r\n        </a-mentions-option>\r\n      </a-mentions>\r\n    </a-form-item>\r\n    <a-form-item label="Bio" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">\r\n      <a-mentions\r\n        v-decorator="[\r\n          \'bio\',\r\n          {\r\n            rules: [{ required: true }],\r\n          },\r\n        ]"\r\n        rows="3"\r\n        placeholder="You can use @ to ref user here"\r\n      >\r\n        <a-mentions-option value="afc163">\r\n          afc163\r\n        </a-mentions-option>\r\n        <a-mentions-option value="zombieJ">\r\n          zombieJ\r\n        </a-mentions-option>\r\n        <a-mentions-option value="yesmeck">\r\n          yesmeck\r\n        </a-mentions-option>\r\n      </a-mentions>\r\n    </a-form-item>\r\n    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">\r\n      <a-button type="primary" @click="handleSubmit">\r\n        Submit\r\n      </a-button>\r\n      <a-button style="margin-left: 8px;" @click="handleReset">\r\n        Reset\r\n      </a-button>\r\n    </a-form-item>\r\n  </a-form>\r\n</template>\r\n<script>\r\nimport { Mentions } from \'ant-design-vue\';\r\nconst { getMentions } = Mentions;\r\nexport default {\r\n  data() {\r\n    return {\r\n      form: this.$form.createForm(this, { name: \'mentions\' }),\r\n    };\r\n  },\r\n  methods: {\r\n    handleReset(e) {\r\n      e.preventDefault();\r\n      this.form.resetFields();\r\n    },\r\n    handleSubmit(e) {\r\n      e.preventDefault();\r\n      this.form.validateFields((errors, values) => {\r\n        if (errors) {\r\n          console.log(\'Errors in the form!!!\');\r\n          return;\r\n        }\r\n        console.log(\'Submit!!!\');\r\n        console.log(values);\r\n      });\r\n    },\r\n    checkMention(rule, value, callback) {\r\n      const mentions = getMentions(value);\r\n      if (mentions.length < 2) {\r\n        callback(new Error(\'More than one must be selected!\'));\r\n      } else {\r\n        callback();\r\n      }\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',S=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticStyle:{"margin-bottom":"10px"}},[e("a-mentions",{attrs:{placeholder:"this is disabled Mentions",disabled:""}},n._l(n.options,(function(t){return e("a-mentions-option",{key:t,attrs:{value:t}},[n._v("\n        "+n._s(t)+"\n      ")])})),1)],1),n._v(" "),e("a-mentions",{attrs:{placeholder:"this is readOnly a-mentions",readonly:""}},n._l(n.options,(function(t){return e("a-mentions-option",{key:t,attrs:{value:t}},[n._v("\n      "+n._s(t)+"\n    ")])})),1)],1)};S._withStripped=!0;var w={data:function(){return{options:["afc163","zombieJ","yesmeck"]}}},M=e(2003),z=e.n(M),O=e(2004),C=e.n(O),J=Object(a.a)(w,S,[],!1,null,null,null);"function"==typeof z.a&&z()(J),"function"==typeof C.a&&C()(J),J.options.__file="components/mentions/demo/disabled-or-readonly.vue";var E=J.exports,A='<cn>\r\n#### 无效或只读 \r\n\r\n通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。\r\n</cn>\r\n<us>\r\n#### Disabled Or Readonly\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <div style="margin-bottom: 10px">\r\n      <a-mentions placeholder="this is disabled Mentions" disabled>\r\n        <a-mentions-option v-for="value in options" :key="value" :value="value">\r\n          {{ value }}\r\n        </a-mentions-option>\r\n      </a-mentions>\r\n    </div>\r\n    <a-mentions placeholder="this is readOnly a-mentions" readonly>\r\n      <a-mentions-option v-for="value in options" :key="value" :value="value">\r\n        {{ value }}\r\n      </a-mentions-option>\r\n    </a-mentions>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      options: [\'afc163\', \'zombieJ\', \'yesmeck\'],\r\n    };\r\n  },\r\n};\r\n<\/script>\r\n',j=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a-mentions",{attrs:{loading:n.loading},on:{search:n.onSearch}},n._l(n.users,(function(t){var r=t.login,o=t.avatar_url;return e("a-mentions-option",{key:r,attrs:{value:r}},[e("img",{staticStyle:{width:"20px","margin-right":"8px"},attrs:{src:o,alt:r}}),n._v(" "),e("span",[n._v(n._s(r))])])})),1)};j._withStripped=!0;var F=e(47),T=e.n(F),$={data:function(){return{loading:!1,users:[]}},mounted:function(){this.loadGithubUsers=T()(this.loadGithubUsers,800)},methods:{onSearch:function(n){this.search=n,this.loading=!!n,console.log(!!n),this.users=[],console.log("Search:",n),this.loadGithubUsers(n)},loadGithubUsers:function(n){var t=this;n?fetch("https://api.github.com/search/users?q="+n).then((function(n){return n.json()})).then((function(e){var r=e.items,o=void 0===r?[]:r;t.search===n&&(t.users=o.slice(0,10),t.loading=!1)})):this.users=[]}}},D=e(2005),U=e.n(D),G=e(2006),P=e.n(G),R=Object(a.a)($,j,[],!1,null,null,null);"function"==typeof U.a&&U()(R),"function"==typeof P.a&&P()(R),R.options.__file="components/mentions/demo/asynchronous-loading.vue";var q=R.exports,K='<cn>\r\n#### 异步加载 \r\n\r\n匹配内容列表为异步返回时。\r\n</cn>\r\n<us>\r\n#### Asynchronous Loading\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-mentions :loading="loading" @search="onSearch">\r\n    <a-mentions-option\r\n      v-for="({ login, avatar_url: avatar }) in users"\r\n      :key="login"\r\n      :value="login"\r\n    >\r\n      <img :src="avatar" :alt="login" style="width: 20px; margin-right: 8px;">\r\n      <span>{{ login }}</span>\r\n    </a-mentions-option>\r\n  </a-mentions>\r\n</template>\r\n\r\n<script>\r\nimport debounce from \'lodash/debounce\';\r\nexport default {\r\n  data() {\r\n    return {\r\n      loading: false,\r\n      users: [],\r\n    };\r\n  },\r\n  mounted() {\r\n    this.loadGithubUsers = debounce(this.loadGithubUsers, 800);\r\n  },\r\n  methods: {\r\n    onSearch(search) {\r\n      this.search = search;\r\n      this.loading = !!search;\r\n      console.log(!!search);\r\n      this.users = [];\r\n      console.log(\'Search:\', search);\r\n      this.loadGithubUsers(search);\r\n    },\r\n    loadGithubUsers(key) {\r\n      if (!key) {\r\n        this.users = [];\r\n        return;\r\n      }\r\n      fetch(`https://api.github.com/search/users?q=${key}`)\r\n        .then(res => res.json())\r\n        .then(({ items = [] }) => {\r\n          const { search } = this;\r\n          if (search !== key) return;\r\n\r\n          this.users = items.slice(0, 10);\r\n          this.loading = false;\r\n        });\r\n      },\r\n  },\r\n};\r\n<\/script>\r\n<style>\r\n',N=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a-mentions",{attrs:{placeholder:"input @ to mention people, # to mention tag",prefix:["@","#"]},on:{search:n.onSearch}},n._l(n.MOCK_DATA[n.prefix]||[],(function(t){return e("a-mentions-option",{key:t,attrs:{value:t}},[n._v("\n    "+n._s(t)+"\n  ")])})),1)};N._withStripped=!0;var B={"@":["afc163","zombiej","yesmeck"],"#":["1.0","2.0","3.0"]},I={data:function(){return{prefix:"@",MOCK_DATA:B}},methods:{onSearch:function(n,t){console.log(n,t),this.prefix=t}}},L=e(2007),H=e.n(L),Y=e(2008),V=e.n(Y),W=Object(a.a)(I,N,[],!1,null,null,null);"function"==typeof H.a&&H()(W),"function"==typeof V.a&&V()(W),W.options.__file="components/mentions/demo/customize-trigger-token.vue";var Q=W.exports,X="<cn>\r\n#### 自定义触发字符 \r\n\r\n通过 prefix 属性自定义触发字符。默认为 @, 可以定义为数组。\r\n</cn>\r\n<us>\r\n#### Customize Trigger Token\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-mentions\r\n    placeholder=\"input @ to mention people, # to mention tag\"\r\n    :prefix=\"['@', '#']\"\r\n    @search=\"onSearch\"\r\n  >\r\n    <a-mentions-option v-for=\"value in MOCK_DATA[prefix] || []\" :key=\"value\" :value=\"value\">\r\n      {{ value }}\r\n    </a-mentions-option>\r\n  </a-mentions>\r\n</template>\r\n<script>\r\nconst MOCK_DATA = {\r\n  '@': ['afc163', 'zombiej', 'yesmeck'],\r\n  '#': ['1.0', '2.0', '3.0'],\r\n};\r\n\r\nexport default {\r\n  data() {\r\n    return {\r\n      prefix: '@',\r\n      MOCK_DATA,\r\n    };\r\n  },\r\n  methods: {\r\n    onSearch(_, prefix) {\r\n      console.log(_, prefix);\r\n      this.prefix = prefix;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n",Z=function(){var n=this.$createElement,t=this._self._c||n;return t("a-mentions",{attrs:{placement:"top"}},[t("a-mentions-option",{attrs:{value:"afc163"}},[this._v("\n    afc163\n  ")]),this._v(" "),t("a-mentions-option",{attrs:{value:"zombieJ"}},[this._v("\n    zombieJ\n  ")]),this._v(" "),t("a-mentions-option",{attrs:{value:"yesmeck"}},[this._v("\n    yesmeck\n  ")])],1)};Z._withStripped=!0;var nn=e(2009),tn=e.n(nn),en=e(2010),rn=e.n(en),on=Object(a.a)({},Z,[],!1,null,null,null);"function"==typeof tn.a&&tn()(on),"function"==typeof rn.a&&rn()(on),on.options.__file="components/mentions/demo/placemen.vue";var an=on.exports,sn='<cn>\r\n#### 向上展开 \r\n\r\n向上展开建议。\r\n</cn>\r\n<us>\r\n#### Placemen\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-mentions placement="top">\r\n    <a-mentions-option value="afc163">\r\n      afc163\r\n    </a-mentions-option>\r\n    <a-mentions-option value="zombieJ">\r\n      zombieJ\r\n    </a-mentions-option>\r\n    <a-mentions-option value="yesmeck">\r\n      yesmeck\r\n    </a-mentions-option>\r\n  </a-mentions>\r\n</template>\r\n',ln=function(){var n=this.$createElement;this._self._c;return this._m(0)};ln._withStripped=!0;var cn=Object(a.a)({},ln,[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h2",{attrs:{id:"API"}},[n._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("h3",{attrs:{id:"Mentions"}},[n._v("Mentions "),e("a",{staticClass:"anchor",attrs:{href:"#Mentions","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("参数")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("类型")]),n._v(" "),e("th",[n._v("默认值")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("autoFocus")]),n._v(" "),e("td",[n._v("自动获得焦点")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[e("code",{pre:!0},[n._v("false")])])]),n._v(" "),e("tr",[e("td",[n._v("defaultValue")]),n._v(" "),e("td",[n._v("默认值")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("filterOption")]),n._v(" "),e("td",[n._v("自定义过滤逻辑")]),n._v(" "),e("td",[n._v("false")]),n._v(" "),e("td",[n._v("(input: string, option: OptionProps) => boolean")])]),n._v(" "),e("tr",[e("td",[n._v("notFoundContent")]),n._v(" "),e("td",[n._v("当下拉列表为空时显示的内容")]),n._v(" "),e("td",[n._v("ReactNode")]),n._v(" "),e("td",[n._v("'Not Found'")])]),n._v(" "),e("tr",[e("td",[n._v("placement")]),n._v(" "),e("td",[n._v("弹出层展示位置")]),n._v(" "),e("td",[e("code",{pre:!0},[n._v("top")])]),n._v(" "),e("td",[e("code",{pre:!0},[n._v("bottom")])])]),n._v(" "),e("tr",[e("td",[n._v("prefix")]),n._v(" "),e("td",[n._v("设置触发关键字")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("string[]")])]),n._v(" "),e("tr",[e("td",[n._v("split")]),n._v(" "),e("td",[n._v("设置选中项前后分隔符")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("' '")])]),n._v(" "),e("tr",[e("td",[n._v("validateSearch")]),n._v(" "),e("td",[n._v("自定义触发验证逻辑")]),n._v(" "),e("td",[n._v("(text: string, props: MentionsProps) => void")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("value(v-model)")]),n._v(" "),e("td",[n._v("设置值")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("getPopupContainer")]),n._v(" "),e("td",[n._v("指定建议框挂载的 HTML 节点")]),n._v(" "),e("td",[n._v("() => HTMLElement")]),n._v(" "),e("td")])])]),n._v(" "),e("h3",{attrs:{id:"事件"}},[n._v("事件 "),e("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("事件名称")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("回调参数")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("blur")]),n._v(" "),e("td",[n._v("失去焦点的时回调")]),n._v(" "),e("td",[n._v("function")])]),n._v(" "),e("tr",[e("td",[n._v("change")]),n._v(" "),e("td",[n._v("值改变时触发")]),n._v(" "),e("td",[n._v("function(value: string)")])]),n._v(" "),e("tr",[e("td",[n._v("focus")]),n._v(" "),e("td",[n._v("获得焦点时回调")]),n._v(" "),e("td",[n._v("function")])]),n._v(" "),e("tr",[e("td",[n._v("search")]),n._v(" "),e("td",[n._v("文本框值变化时回调")]),n._v(" "),e("td",[n._v("function(value: string, prefix: string)")])]),n._v(" "),e("tr",[e("td",[n._v("select")]),n._v(" "),e("td",[n._v("选择选项时触发")]),n._v(" "),e("td",[n._v("function(option: OptionProps, prefix: string)")])])])]),n._v(" "),e("h3",{attrs:{id:"Mentions-方法"}},[n._v("Mentions 方法 "),e("a",{staticClass:"anchor",attrs:{href:"#Mentions-方法","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("名称")]),n._v(" "),e("th",[n._v("描述")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("blur()")]),n._v(" "),e("td",[n._v("移除焦点")])]),n._v(" "),e("tr",[e("td",[n._v("focus()")]),n._v(" "),e("td",[n._v("获取焦点")])])])]),n._v(" "),e("h3",{attrs:{id:"Option"}},[n._v("Option "),e("a",{staticClass:"anchor",attrs:{href:"#Option","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("参数")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("类型")]),n._v(" "),e("th",[n._v("默认值")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("value")]),n._v(" "),e("td",[n._v("选择时填充的值")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("''")])])])])])}],!1,null,null,null);cn.options.__file="components/mentions/index.zh-CN.md";var vn=cn.exports,un=function(){var n=this.$createElement;return(this._self._c||n)("div")};un._withStripped=!0;var mn=Object(a.a)({},un,[],!1,null,null,null);mn.options.__file="components/mentions/index.en-US.md";var dn=mn.exports,pn="",_n="# Mentions提及 (版本：1.5.0+)\n\n提及组件。\n\n## 何时使用\n\n- 用于在输入中提及某人或某事，常用于发布、聊天或评论功能。\n\n## 代码演示",hn={category:"Components",subtitle:"提及",type:"Data Entry",zhType:"数据录入",cols:2,title:"Mentions",render:function(){var n=arguments[0];return n("div",[n("md",{attrs:{cn:_n,us:pn}}),n("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:m}},[n(u)]),n("demo-container",{attrs:{code:x}},[n(k)]),n("demo-container",{attrs:{code:A}},[n(E)])]),n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:K}},[n(q)]),n("demo-container",{attrs:{code:X}},[n(Q)]),n("demo-container",{attrs:{code:sn}},[n(an)])])]),n("api",[n(vn,{slot:"cn"}),n(dn)])])}},fn=Object(a.a)(hn,void 0,void 0,!1,null,null,null);fn.options.__file="components/mentions/demo/index.vue";t.default=fn.exports}}]);