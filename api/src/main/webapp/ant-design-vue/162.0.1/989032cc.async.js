(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1661:function(n,a){},1662:function(n,a){},1663:function(n,a){n.exports="<cn>\r\n#### 基本 \r\n\r\n最简单的用法。\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\r\n<template>\r\n  <a-radio>Radio</a-radio>\r\n</template>\r\n"},1664:function(n,a){},1665:function(n,a){},1666:function(n,a){n.exports='<cn>\r\n#### 按钮样式 \r\n\r\n按钮样式的单选组合。\r\n</cn>\r\n<us>\r\n#### Radio Style\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <div>\r\n      <a-radio-group v-model="value" @change="onChange">\r\n        <a-radio-button value="a">\r\n          Hangzhou\r\n        </a-radio-button>\r\n        <a-radio-button value="b">\r\n          Shanghai\r\n        </a-radio-button>\r\n        <a-radio-button value="c">\r\n          Beijing\r\n        </a-radio-button>\r\n        <a-radio-button value="d">\r\n          Chengdu\r\n        </a-radio-button>\r\n      </a-radio-group>\r\n    </div>\r\n    <div :style="{ marginTop: \'16px\' }">\r\n      <a-radio-group default-value="a" @change="onChange">\r\n        <a-radio-button value="a">\r\n          Hangzhou\r\n        </a-radio-button>\r\n        <a-radio-button value="b" disabled>\r\n          Shanghai\r\n        </a-radio-button>\r\n        <a-radio-button value="c">\r\n          Beijing\r\n        </a-radio-button>\r\n        <a-radio-button value="d">\r\n          Chengdu\r\n        </a-radio-button>\r\n      </a-radio-group>\r\n    </div>\r\n    <div :style="{ marginTop: \'16px\' }">\r\n      <a-radio-group disabled default-value="a" @change="onChange">\r\n        <a-radio-button value="a">\r\n          Hangzhou\r\n        </a-radio-button>\r\n        <a-radio-button value="b">\r\n          Shanghai\r\n        </a-radio-button>\r\n        <a-radio-button value="c">\r\n          Beijing\r\n        </a-radio-button>\r\n        <a-radio-button value="d">\r\n          Chengdu\r\n        </a-radio-button>\r\n      </a-radio-group>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      value: \'a\',\r\n    };\r\n  },\r\n  methods: {\r\n    onChange(e) {\r\n      console.log(`checked = ${e.target.value}`);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},1667:function(n,a){},1668:function(n,a){},1669:function(n,a){n.exports='<cn>\r\n#### RadioGroup 垂直 \r\n\r\n垂直的 RadioGroup，配合更多输入框选项。\r\n</cn>\r\n<us>\r\n#### Vertical Radiogroup\r\n</us>\r\n\r\r\n<template>\r\n  <a-radio-group v-model="value" @change="onChange">\r\n    <a-radio :style="radioStyle" :value="1">\r\n      Option A\r\n    </a-radio>\r\n    <a-radio :style="radioStyle" :value="2">\r\n      Option B\r\n    </a-radio>\r\n    <a-radio :style="radioStyle" :value="3">\r\n      Option C\r\n    </a-radio>\r\n    <a-radio :style="radioStyle" :value="4">\r\n      More...\r\n      <a-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />\r\n    </a-radio>\r\n  </a-radio-group>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      value: 1,\r\n      radioStyle: {\r\n        display: \'block\',\r\n        height: \'30px\',\r\n        lineHeight: \'30px\',\r\n      },\r\n    };\r\n  },\r\n  methods: {\r\n    onChange(e) {\r\n      console.log(\'radio checked\', e.target.value);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},1670:function(n,a){},1671:function(n,a){},1672:function(n,a){n.exports='<cn>\r\n#### 单选组合 - 配合 name 使用 \r\n\r\n可以为 Radio.Group 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。\r\n</cn>\r\n<us>\r\n#### Radio_group With Name\r\n</us>\r\n\r\r\n<template>\r\n  <a-radio-group name="radioGroup" :default-value="1">\r\n    <a-radio :value="1">\r\n      A\r\n    </a-radio>\r\n    <a-radio :value="2">\r\n      B\r\n    </a-radio>\r\n    <a-radio :value="3">\r\n      C\r\n    </a-radio>\r\n    <a-radio :value="4">\r\n      D\r\n    </a-radio>\r\n  </a-radio-group>\r\n</template>\r\n'},1673:function(n,a){},1674:function(n,a){},1675:function(n,a){n.exports='<cn>\r\n#### 大小 \r\n\r\n大中小三种组合，可以和表单输入框进行对应配合。\r\n</cn>\r\n<us>\r\n#### Size\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <div>\r\n      <a-radio-group default-value="a" size="large">\r\n        <a-radio-button value="a">\r\n          Hangzhou\r\n        </a-radio-button>\r\n        <a-radio-button value="b">\r\n          Shanghai\r\n        </a-radio-button>\r\n        <a-radio-button value="c">\r\n          Beijing\r\n        </a-radio-button>\r\n        <a-radio-button value="d">\r\n          Chengdu\r\n        </a-radio-button>\r\n      </a-radio-group>\r\n    </div>\r\n    <div :style="{ marginTop: \'16px\' }">\r\n      <a-radio-group default-value="a">\r\n        <a-radio-button value="a">\r\n          Hangzhou\r\n        </a-radio-button>\r\n        <a-radio-button value="b">\r\n          Shanghai\r\n        </a-radio-button>\r\n        <a-radio-button value="c">\r\n          Beijing\r\n        </a-radio-button>\r\n        <a-radio-button value="d">\r\n          Chengdu\r\n        </a-radio-button>\r\n      </a-radio-group>\r\n    </div>\r\n    <div :style="{ marginTop: \'16px\' }">\r\n      <a-radio-group default-value="a" size="small">\r\n        <a-radio-button value="a">\r\n          Hangzhou\r\n        </a-radio-button>\r\n        <a-radio-button value="b">\r\n          Shanghai\r\n        </a-radio-button>\r\n        <a-radio-button value="c">\r\n          Beijing\r\n        </a-radio-button>\r\n        <a-radio-button value="d">\r\n          Chengdu\r\n        </a-radio-button>\r\n      </a-radio-group>\r\n    </div>\r\n  </div>\r\n</template>\r\n'},1676:function(n,a){},1677:function(n,a){},1678:function(n,a){n.exports='<cn>\r\n#### 不可用 \r\n\r\nRadio 不可用。\r\n</cn>\r\n<us>\r\n#### Disabled\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <a-radio :default-checked="false" :disabled="disabled">\r\n      Disabled\r\n    </a-radio>\r\n    <br />\r\n    <a-radio default-checked :disabled="disabled">\r\n      Disabled\r\n    </a-radio>\r\n    <div :style="{ marginTop: 20 }">\r\n      <a-button type="primary" @click="toggleDisabled">\r\n        Toggle disabled\r\n      </a-button>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      disabled: true,\r\n    };\r\n  },\r\n  methods: {\r\n    toggleDisabled() {\r\n      this.disabled = !this.disabled;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},1679:function(n,a){},1680:function(n,a){},1681:function(n,a){n.exports='<cn>\r\n#### 填底的按钮样式 \r\n\r\n实色填底的单选按钮样式。\r\n</cn>\r\n<us>\r\n#### Solid Radio Button\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <div>\r\n      <a-radio-group default-value="a" button-style="solid">\r\n        <a-radio-button value="a">\r\n          Hangzhou\r\n        </a-radio-button>\r\n        <a-radio-button value="b">\r\n          Shanghai\r\n        </a-radio-button>\r\n        <a-radio-button value="c">\r\n          Beijing\r\n        </a-radio-button>\r\n        <a-radio-button value="d">\r\n          Chengdu\r\n        </a-radio-button>\r\n      </a-radio-group>\r\n    </div>\r\n    <div :style="{ marginTop: \'16px\' }">\r\n      <a-radio-group default-value="c" button-style="solid">\r\n        <a-radio-button value="a">\r\n          Hangzhou\r\n        </a-radio-button>\r\n        <a-radio-button value="b" disabled>\r\n          Shanghai\r\n        </a-radio-button>\r\n        <a-radio-button value="c">\r\n          Beijing\r\n        </a-radio-button>\r\n        <a-radio-button value="d">\r\n          Chengdu\r\n        </a-radio-button>\r\n      </a-radio-group>\r\n    </div>\r\n  </div>\r\n</template>\r\n'},1682:function(n,a){},1683:function(n,a){},1684:function(n,a){n.exports="<cn>\r\n#### RadioGroup 组合 - 配置方式 \r\n\r\n通过配置 `options` 参数来渲染单选框。\r\n</cn>\r\n<us>\r\n#### Radiogroup Group   Optional\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <a-radio-group :options=\"plainOptions\" :default-value=\"value1\" @change=\"onChange1\" />\r\n    <br />\r\n    <a-radio-group v-model=\"value2\" :options=\"options\" @change=\"onChange2\" />\r\n    <br />\r\n    <a-radio-group v-model=\"value3\" :options=\"optionsWithDisabled\" disabled @change=\"onChange3\" />\r\n  </div>\r\n</template>\r\n<script>\r\nconst plainOptions = ['Apple', 'Pear', 'Orange'];\r\nconst options = [\r\n  { label: 'Apple', value: 'Apple' },\r\n  { label: 'Pear', value: 'Pear' },\r\n  { label: 'Orange', value: 'Orange' },\r\n];\r\nconst optionsWithDisabled = [\r\n  { label: 'Apple', value: 'Apple' },\r\n  { label: 'Pear', value: 'Pear' },\r\n  { label: 'Orange', value: 'Orange', disabled: false },\r\n];\r\nexport default {\r\n  data() {\r\n    return {\r\n      plainOptions,\r\n      options,\r\n      optionsWithDisabled,\r\n      value1: 'Apple',\r\n      value2: 'Apple',\r\n      value3: 'Apple',\r\n    };\r\n  },\r\n  methods: {\r\n    onChange1(e) {\r\n      console.log('radio1 checked', e.target.value);\r\n    },\r\n    onChange2(e) {\r\n      console.log('radio2 checked', e.target.value);\r\n    },\r\n    onChange3(e) {\r\n      console.log('radio3 checked', e.target.value);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n"},1685:function(n,a){},1686:function(n,a){},1687:function(n,a){n.exports='<cn>\r\n#### 单选组合 \r\n\r\n一组互斥的 Radio 配合使用。\r\n</cn>\r\n<us>\r\n#### Radio Group\r\n</us>\r\n\r\r\n<template>\r\n  <div>\r\n    <a-radio-group v-model="value" @change="onChange">\r\n      <a-radio :value="1">\r\n        A\r\n      </a-radio>\r\n      <a-radio :value="2">\r\n        B\r\n      </a-radio>\r\n      <a-radio :value="3">\r\n        C\r\n      </a-radio>\r\n      <a-radio :value="4">\r\n        D\r\n      </a-radio>\r\n    </a-radio-group>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      value: 1,\r\n    };\r\n  },\r\n  methods: {\r\n    onChange(e) {\r\n      console.log(\'radio checked\', e.target.value);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n'},2761:function(n,a,r){"use strict";r.r(a);var t=function(){var n=this.$createElement;return(this._self._c||n)("a-radio",[this._v("Radio")])};t._withStripped=!0;var e=r(32),o=r(1661),i=r.n(o),d=r(1662),u=r.n(d),l=Object(e.a)({},t,[],!1,null,null,null);"function"==typeof i.a&&i()(l),"function"==typeof u.a&&u()(l),l.options.__file="components/radio/demo/basic.vue";var v=l.exports,s=r(1663),c=r.n(s),p=function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("div",[r("div",[r("a-radio-group",{on:{change:n.onChange},model:{value:n.value,callback:function(a){n.value=a},expression:"value"}},[r("a-radio-button",{attrs:{value:"a"}},[n._v("\n        Hangzhou\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"b"}},[n._v("\n        Shanghai\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"c"}},[n._v("\n        Beijing\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"d"}},[n._v("\n        Chengdu\n      ")])],1)],1),n._v(" "),r("div",{style:{marginTop:"16px"}},[r("a-radio-group",{attrs:{"default-value":"a"},on:{change:n.onChange}},[r("a-radio-button",{attrs:{value:"a"}},[n._v("\n        Hangzhou\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"b",disabled:""}},[n._v("\n        Shanghai\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"c"}},[n._v("\n        Beijing\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"d"}},[n._v("\n        Chengdu\n      ")])],1)],1),n._v(" "),r("div",{style:{marginTop:"16px"}},[r("a-radio-group",{attrs:{disabled:"","default-value":"a"},on:{change:n.onChange}},[r("a-radio-button",{attrs:{value:"a"}},[n._v("\n        Hangzhou\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"b"}},[n._v("\n        Shanghai\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"c"}},[n._v("\n        Beijing\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"d"}},[n._v("\n        Chengdu\n      ")])],1)],1)])};p._withStripped=!0;var _={data:function(){return{value:"a"}},methods:{onChange:function(n){console.log("checked = "+n.target.value)}}},h=r(1664),g=r.n(h),b=r(1665),f=r.n(b),m=Object(e.a)(_,p,[],!1,null,null,null);"function"==typeof g.a&&g()(m),"function"==typeof f.a&&f()(m),m.options.__file="components/radio/demo/radio-style.vue";var y=m.exports,C=r(1666),x=r.n(C),S=function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("a-radio-group",{on:{change:n.onChange},model:{value:n.value,callback:function(a){n.value=a},expression:"value"}},[r("a-radio",{style:n.radioStyle,attrs:{value:1}},[n._v("\n    Option A\n  ")]),n._v(" "),r("a-radio",{style:n.radioStyle,attrs:{value:2}},[n._v("\n    Option B\n  ")]),n._v(" "),r("a-radio",{style:n.radioStyle,attrs:{value:3}},[n._v("\n    Option C\n  ")]),n._v(" "),r("a-radio",{style:n.radioStyle,attrs:{value:4}},[n._v("\n    More...\n    "),4===n.value?r("a-input",{style:{width:100,marginLeft:10}}):n._e()],1)],1)};S._withStripped=!0;var O={data:function(){return{value:1,radioStyle:{display:"block",height:"30px",lineHeight:"30px"}}},methods:{onChange:function(n){console.log("radio checked",n.target.value)}}},R=r(1667),k=r.n(R),j=r(1668),A=r.n(j),z=Object(e.a)(O,S,[],!1,null,null,null);"function"==typeof k.a&&k()(z),"function"==typeof A.a&&A()(z),z.options.__file="components/radio/demo/vertical-radiogroup.vue";var B=z.exports,w=r(1669),D=r.n(w),H=function(){var n=this.$createElement,a=this._self._c||n;return a("a-radio-group",{attrs:{name:"radioGroup","default-value":1}},[a("a-radio",{attrs:{value:1}},[this._v("\n    A\n  ")]),this._v(" "),a("a-radio",{attrs:{value:2}},[this._v("\n    B\n  ")]),this._v(" "),a("a-radio",{attrs:{value:3}},[this._v("\n    C\n  ")]),this._v(" "),a("a-radio",{attrs:{value:4}},[this._v("\n    D\n  ")])],1)};H._withStripped=!0;var G=r(1670),T=r.n(G),E=r(1671),P=r.n(E),$=Object(e.a)({},H,[],!1,null,null,null);"function"==typeof T.a&&T()($),"function"==typeof P.a&&P()($),$.options.__file="components/radio/demo/radio_group-with-name.vue";var W=$.exports,I=r(1672),F=r.n(I),J=function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("div",[r("div",[r("a-radio-group",{attrs:{"default-value":"a",size:"large"}},[r("a-radio-button",{attrs:{value:"a"}},[n._v("\n        Hangzhou\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"b"}},[n._v("\n        Shanghai\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"c"}},[n._v("\n        Beijing\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"d"}},[n._v("\n        Chengdu\n      ")])],1)],1),n._v(" "),r("div",{style:{marginTop:"16px"}},[r("a-radio-group",{attrs:{"default-value":"a"}},[r("a-radio-button",{attrs:{value:"a"}},[n._v("\n        Hangzhou\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"b"}},[n._v("\n        Shanghai\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"c"}},[n._v("\n        Beijing\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"d"}},[n._v("\n        Chengdu\n      ")])],1)],1),n._v(" "),r("div",{style:{marginTop:"16px"}},[r("a-radio-group",{attrs:{"default-value":"a",size:"small"}},[r("a-radio-button",{attrs:{value:"a"}},[n._v("\n        Hangzhou\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"b"}},[n._v("\n        Shanghai\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"c"}},[n._v("\n        Beijing\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"d"}},[n._v("\n        Chengdu\n      ")])],1)],1)])};J._withStripped=!0;var L=r(1673),M=r.n(L),N=r(1674),V=r.n(N),U=Object(e.a)({},J,[],!1,null,null,null);"function"==typeof M.a&&M()(U),"function"==typeof V.a&&V()(U),U.options.__file="components/radio/demo/size.vue";var q=U.exports,K=r(1675),Q=r.n(K),X=function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("div",[r("a-radio",{attrs:{"default-checked":!1,disabled:n.disabled}},[n._v("\n    Disabled\n  ")]),n._v(" "),r("br"),n._v(" "),r("a-radio",{attrs:{"default-checked":"",disabled:n.disabled}},[n._v("\n    Disabled\n  ")]),n._v(" "),r("div",{style:{marginTop:20}},[r("a-button",{attrs:{type:"primary"},on:{click:n.toggleDisabled}},[n._v("\n      Toggle disabled\n    ")])],1)],1)};X._withStripped=!0;var Y={data:function(){return{disabled:!0}},methods:{toggleDisabled:function(){this.disabled=!this.disabled}}},Z=r(1676),nn=r.n(Z),an=r(1677),rn=r.n(an),tn=Object(e.a)(Y,X,[],!1,null,null,null);"function"==typeof nn.a&&nn()(tn),"function"==typeof rn.a&&rn()(tn),tn.options.__file="components/radio/demo/disabled.vue";var en=tn.exports,on=r(1678),dn=r.n(on),un=function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("div",[r("div",[r("a-radio-group",{attrs:{"default-value":"a","button-style":"solid"}},[r("a-radio-button",{attrs:{value:"a"}},[n._v("\n        Hangzhou\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"b"}},[n._v("\n        Shanghai\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"c"}},[n._v("\n        Beijing\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"d"}},[n._v("\n        Chengdu\n      ")])],1)],1),n._v(" "),r("div",{style:{marginTop:"16px"}},[r("a-radio-group",{attrs:{"default-value":"c","button-style":"solid"}},[r("a-radio-button",{attrs:{value:"a"}},[n._v("\n        Hangzhou\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"b",disabled:""}},[n._v("\n        Shanghai\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"c"}},[n._v("\n        Beijing\n      ")]),n._v(" "),r("a-radio-button",{attrs:{value:"d"}},[n._v("\n        Chengdu\n      ")])],1)],1)])};un._withStripped=!0;var ln=r(1679),vn=r.n(ln),sn=r(1680),cn=r.n(sn),pn=Object(e.a)({},un,[],!1,null,null,null);"function"==typeof vn.a&&vn()(pn),"function"==typeof cn.a&&cn()(pn),pn.options.__file="components/radio/demo/solid-radio-button.vue";var _n=pn.exports,hn=r(1681),gn=r.n(hn),bn=function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("div",[r("a-radio-group",{attrs:{options:n.plainOptions,"default-value":n.value1},on:{change:n.onChange1}}),n._v(" "),r("br"),n._v(" "),r("a-radio-group",{attrs:{options:n.options},on:{change:n.onChange2},model:{value:n.value2,callback:function(a){n.value2=a},expression:"value2"}}),n._v(" "),r("br"),n._v(" "),r("a-radio-group",{attrs:{options:n.optionsWithDisabled,disabled:""},on:{change:n.onChange3},model:{value:n.value3,callback:function(a){n.value3=a},expression:"value3"}})],1)};bn._withStripped=!0;var fn=["Apple","Pear","Orange"],mn=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],yn=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!1}],Cn={data:function(){return{plainOptions:fn,options:mn,optionsWithDisabled:yn,value1:"Apple",value2:"Apple",value3:"Apple"}},methods:{onChange1:function(n){console.log("radio1 checked",n.target.value)},onChange2:function(n){console.log("radio2 checked",n.target.value)},onChange3:function(n){console.log("radio3 checked",n.target.value)}}},xn=r(1682),Sn=r.n(xn),On=r(1683),Rn=r.n(On),kn=Object(e.a)(Cn,bn,[],!1,null,null,null);"function"==typeof Sn.a&&Sn()(kn),"function"==typeof Rn.a&&Rn()(kn),kn.options.__file="components/radio/demo/radiogroup-group---optional.vue";var jn=kn.exports,An=r(1684),zn=r.n(An),Bn=function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("div",[r("a-radio-group",{on:{change:n.onChange},model:{value:n.value,callback:function(a){n.value=a},expression:"value"}},[r("a-radio",{attrs:{value:1}},[n._v("\n      A\n    ")]),n._v(" "),r("a-radio",{attrs:{value:2}},[n._v("\n      B\n    ")]),n._v(" "),r("a-radio",{attrs:{value:3}},[n._v("\n      C\n    ")]),n._v(" "),r("a-radio",{attrs:{value:4}},[n._v("\n      D\n    ")])],1)],1)};Bn._withStripped=!0;var wn={data:function(){return{value:1}},methods:{onChange:function(n){console.log("radio checked",n.target.value)}}},Dn=r(1685),Hn=r.n(Dn),Gn=r(1686),Tn=r.n(Gn),En=Object(e.a)(wn,Bn,[],!1,null,null,null);"function"==typeof Hn.a&&Hn()(En),"function"==typeof Tn.a&&Tn()(En),En.options.__file="components/radio/demo/radio-group.vue";var Pn=En.exports,$n=r(1687),Wn=r.n($n),In=function(){var n=this.$createElement;this._self._c;return this._m(0)};In._withStripped=!0;var Fn=Object(e.a)({},In,[function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("div",[r("h2",{attrs:{id:"API"}},[n._v("API "),r("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),r("h3",{attrs:{id:"Radio"}},[n._v("Radio "),r("a",{staticClass:"anchor",attrs:{href:"#Radio","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),r("table",[r("thead",[r("tr",[r("th",[n._v("参数")]),n._v(" "),r("th",[n._v("说明")]),n._v(" "),r("th",[n._v("类型")]),n._v(" "),r("th",[n._v("默认值")])])]),n._v(" "),r("tbody",[r("tr",[r("td",[n._v("autoFocus")]),n._v(" "),r("td",[n._v("自动获取焦点")]),n._v(" "),r("td",[n._v("boolean")]),n._v(" "),r("td",[n._v("false")])]),n._v(" "),r("tr",[r("td",[n._v("checked")]),n._v(" "),r("td",[n._v("指定当前是否选中")]),n._v(" "),r("td",[n._v("boolean")]),n._v(" "),r("td",[n._v("false")])]),n._v(" "),r("tr",[r("td",[n._v("defaultChecked")]),n._v(" "),r("td",[n._v("初始是否选中")]),n._v(" "),r("td",[n._v("boolean")]),n._v(" "),r("td",[n._v("false")])]),n._v(" "),r("tr",[r("td",[n._v("value")]),n._v(" "),r("td",[n._v("根据 value 进行比较，判断是否选中")]),n._v(" "),r("td",[n._v("any")]),n._v(" "),r("td",[n._v("-")])])])]),n._v(" "),r("h3",{attrs:{id:"RadioGroup"}},[n._v("RadioGroup "),r("a",{staticClass:"anchor",attrs:{href:"#RadioGroup","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),r("p",[n._v("单选框组合，用于包裹一组 "),r("code",{pre:!0},[n._v("Radio")]),n._v("。")]),n._v(" "),r("table",[r("thead",[r("tr",[r("th",[n._v("参数")]),n._v(" "),r("th",[n._v("说明")]),n._v(" "),r("th",[n._v("类型")]),n._v(" "),r("th",[n._v("默认值")])])]),n._v(" "),r("tbody",[r("tr",[r("td",[n._v("defaultValue")]),n._v(" "),r("td",[n._v("默认选中的值")]),n._v(" "),r("td",[n._v("any")]),n._v(" "),r("td",[n._v("-")])]),n._v(" "),r("tr",[r("td",[n._v("disabled")]),n._v(" "),r("td",[n._v("禁选所有子单选器")]),n._v(" "),r("td",[n._v("boolean")]),n._v(" "),r("td",[n._v("false")])]),n._v(" "),r("tr",[r("td",[n._v("name")]),n._v(" "),r("td",[n._v("RadioGroup 下所有 "),r("code",{pre:!0},[n._v('input[type="radio"]')]),n._v(" 的 "),r("code",{pre:!0},[n._v("name")]),n._v(" 属性")]),n._v(" "),r("td",[n._v("string")]),n._v(" "),r("td",[n._v("-")])]),n._v(" "),r("tr",[r("td",[n._v("options")]),n._v(" "),r("td",[n._v("以配置形式设置子元素")]),n._v(" "),r("td",[n._v("string[]")]),n._v(" "),r("td",[n._v("Array<{ label: string value: string disabled?: boolean }>")])]),n._v(" "),r("tr",[r("td",[n._v("size")]),n._v(" "),r("td",[n._v("大小，只对按钮样式生效")]),n._v(" "),r("td",[r("code",{pre:!0},[n._v("large")])]),n._v(" "),r("td",[r("code",{pre:!0},[n._v("default")])])]),n._v(" "),r("tr",[r("td",[n._v("value(v-model)")]),n._v(" "),r("td",[n._v("用于设置当前选中的值")]),n._v(" "),r("td",[n._v("any")]),n._v(" "),r("td",[n._v("-")])]),n._v(" "),r("tr",[r("td",[n._v("buttonStyle")]),n._v(" "),r("td",[n._v("RadioButton 的风格样式，目前有描边和填色两种风格")]),n._v(" "),r("td",[r("code",{pre:!0},[n._v("outline")])]),n._v(" "),r("td",[r("code",{pre:!0},[n._v("solid")])])])])]),n._v(" "),r("h3",{attrs:{id:"RadioGroup-事件"}},[n._v("RadioGroup 事件 "),r("a",{staticClass:"anchor",attrs:{href:"#RadioGroup-事件","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),r("table",[r("thead",[r("tr",[r("th",[n._v("事件名称")]),n._v(" "),r("th",[n._v("说明")]),n._v(" "),r("th",[n._v("回调参数")])])]),n._v(" "),r("tbody",[r("tr",[r("td",[n._v("change")]),n._v(" "),r("td",[n._v("选项变化时的回调函数")]),n._v(" "),r("td",[n._v("Function(e:Event)")])])])]),n._v(" "),r("h2",{attrs:{id:"方法"}},[n._v("方法 "),r("a",{staticClass:"anchor",attrs:{href:"#方法","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),r("h3",{attrs:{id:"Radio-2"}},[n._v("Radio "),r("a",{staticClass:"anchor",attrs:{href:"#Radio-2","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),r("table",[r("thead",[r("tr",[r("th",[n._v("名称")]),n._v(" "),r("th",[n._v("描述")])])]),n._v(" "),r("tbody",[r("tr",[r("td",[n._v("blur()")]),n._v(" "),r("td",[n._v("移除焦点")])]),n._v(" "),r("tr",[r("td",[n._v("focus()")]),n._v(" "),r("td",[n._v("获取焦点")])])])])])}],!1,null,null,null);Fn.options.__file="components/radio/index.zh-CN.md";var Jn=Fn.exports,Ln=function(){var n=this.$createElement;return(this._self._c||n)("div")};Ln._withStripped=!0;var Mn=Object(e.a)({},Ln,[],!1,null,null,null);Mn.options.__file="components/radio/index.en-US.md";var Nn=Mn.exports,Vn="",Un="# 单选框\n\n单选框。\n\n## 何时使用\n\n- 用于在多个备选项中选中单个状态。\n- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。代码演示",qn={category:"Components",subtitle:"单选框",type:"Data Entry",zhType:"数据录入",cols:2,title:"Radio",render:function(){var n=arguments[0];return n("div",[n("md",{attrs:{cn:Un,us:Vn}}),n("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:c.a}},[n(v)]),n("demo-container",{attrs:{code:x.a}},[n(y)]),n("demo-container",{attrs:{code:D.a}},[n(B)]),n("demo-container",{attrs:{code:F.a}},[n(W)]),n("demo-container",{attrs:{code:Q.a}},[n(q)])]),n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:dn.a}},[n(en)]),n("demo-container",{attrs:{code:gn.a}},[n(_n)]),n("demo-container",{attrs:{code:zn.a}},[n(jn)]),n("demo-container",{attrs:{code:Wn.a}},[n(Pn)])])]),n("api",[n(Jn,{slot:"cn"}),n(Nn)])])}},Kn=Object(e.a)(qn,void 0,void 0,!1,null,null,null);Kn.options.__file="components/radio/demo/index.vue";a.default=Kn.exports}}]);