(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{2265:function(n,e){},2266:function(n,e){},2267:function(n,e){},2268:function(n,e){},2269:function(n,e){},2270:function(n,e){},2271:function(n,e){},2272:function(n,e){},2273:function(n,e){},2274:function(n,e){},2275:function(n,e){},2276:function(n,e){},2335:function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a-descriptions",{attrs:{title:"User Info"}},[t("a-descriptions-item",{attrs:{label:"UserName"}},[n._v("\n    Zhou Maomao\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Telephone"}},[n._v("\n    1810000000\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Live"}},[n._v("\n    Hangzhou, Zhejiang\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Remark"}},[n._v("\n    empty\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Address"}},[n._v("\n    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China\n  ")])],1)};i._withStripped=!0;var r=t(32),a=t(2265),s=t.n(a),o=t(2266),l=t.n(o),d=Object(r.a)({},i,[],!1,null,null,null);"function"==typeof s.a&&s()(d),"function"==typeof l.a&&l()(d),d.options.__file="components/descriptions/demo/basic.vue";var c=d.exports,p='<cn>\r\n#### 基本 \r\n\r\n简单的展示。\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-descriptions title="User Info">\r\n    <a-descriptions-item label="UserName">\r\n      Zhou Maomao\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Telephone">\r\n      1810000000\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Live">\r\n      Hangzhou, Zhejiang\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Remark">\r\n      empty\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Address">\r\n      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China\r\n    </a-descriptions-item>\r\n  </a-descriptions>\r\n</template>\r\n',v=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a-descriptions",{attrs:{title:"User Info",bordered:""}},[t("a-descriptions-item",{attrs:{label:"Product"}},[n._v("\n    Cloud Database\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Billing Mode"}},[n._v("\n    Prepaid\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Automatic Renewal"}},[n._v("\n    YES\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Order time"}},[n._v("\n    2018-04-24 18:00:00\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Usage Time",span:2}},[n._v("\n    2019-04-24 18:00:00\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Status",span:3}},[t("a-badge",{attrs:{status:"processing",text:"Running"}})],1),n._v(" "),t("a-descriptions-item",{attrs:{label:"Negotiated Amount"}},[n._v("\n    $80.00\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Discount"}},[n._v("\n    $20.00\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Official Receipts"}},[n._v("\n    $60.00\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Config Info"}},[n._v("\n    Data disk type: MongoDB\n    "),t("br"),n._v("\n    Database version: 3.4\n    "),t("br"),n._v("\n    Package: dds.mongo.mid\n    "),t("br"),n._v("\n    Storage space: 10 GB\n    "),t("br"),n._v("\n    Replication factor: 3\n    "),t("br"),n._v("\n    Region: East China 1"),t("br")])],1)};v._withStripped=!0;var m=t(2267),_=t.n(m),u=t(2268),b=t.n(u),f=Object(r.a)({},v,[],!1,null,null,null);"function"==typeof _.a&&_()(f),"function"==typeof b.a&&b()(f),f.options.__file="components/descriptions/demo/border.vue";var g=f.exports,h='<cn>\r\n#### 带边框的\r\n</cn>\r\n<us>\r\n#### Border\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-descriptions title="User Info" bordered>\r\n    <a-descriptions-item label="Product">\r\n      Cloud Database\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Billing Mode">\r\n      Prepaid\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Automatic Renewal">\r\n      YES\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Order time">\r\n      2018-04-24 18:00:00\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Usage Time" :span="2">\r\n      2019-04-24 18:00:00\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Status" :span="3">\r\n      <a-badge status="processing" text="Running" />\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Negotiated Amount">\r\n      $80.00\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Discount">\r\n      $20.00\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Official Receipts">\r\n      $60.00\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Config Info">\r\n      Data disk type: MongoDB\r\n      <br />\r\n      Database version: 3.4\r\n      <br />\r\n      Package: dds.mongo.mid\r\n      <br />\r\n      Storage space: 10 GB\r\n      <br />\r\n      Replication factor: 3\r\n      <br />\r\n      Region: East China 1<br />\r\n    </a-descriptions-item>\r\n  </a-descriptions>\r\n</template>\r\n',D=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("a-radio-group",{on:{change:n.onChange},model:{value:n.size,callback:function(e){n.size=e},expression:"size"}},[t("a-radio",{attrs:{value:"default"}},[n._v("\n      default\n    ")]),n._v(" "),t("a-radio",{attrs:{value:"middle"}},[n._v("\n      middle\n    ")]),n._v(" "),t("a-radio",{attrs:{value:"small"}},[n._v("\n      small\n    ")])],1),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("a-descriptions",{attrs:{bordered:"",title:"Custom Size",size:n.size}},[t("a-descriptions-item",{attrs:{label:"Product"}},[n._v("\n      Cloud Database\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Billing"}},[n._v("\n      Prepaid\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Time"}},[n._v("\n      18:00:00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Amount"}},[n._v("\n      $80.00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Discount"}},[n._v("\n      $20.00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Official"}},[n._v("\n      $60.00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Config Info"}},[n._v("\n      Data disk type: MongoDB\n      "),t("br"),n._v("\n      Database version: 3.4\n      "),t("br"),n._v("\n      Package: dds.mongo.mid\n      "),t("br"),n._v("\n      Storage space: 10 GB\n      "),t("br"),n._v("\n      Replication factor: 3\n      "),t("br"),n._v("\n      Region: East China 1"),t("br")])],1),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("a-descriptions",{attrs:{title:"Custom Size",size:n.size}},[t("a-descriptions-item",{attrs:{label:"Product"}},[n._v("\n      Cloud Database\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Billing"}},[n._v("\n      Prepaid\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Time"}},[n._v("\n      18:00:00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Amount"}},[n._v("\n      $80.00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Discount"}},[n._v("\n      $20.00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Official"}},[n._v("\n      $60.00\n    ")])],1)],1)};D._withStripped=!0;var C={data:function(){return{size:"default"}},methods:{onChange:function(n){console.log("size checked",n.target.value),this.size=n.target.value}}},R=t(2269),$=t.n(R),z=t(2270),y=t.n(z),P=Object(r.a)(C,D,[],!1,null,null,null);"function"==typeof $.a&&$()(P),"function"==typeof y.a&&y()(P),P.options.__file="components/descriptions/demo/custom-size.vue";var x=P.exports,S='<cn>\r\n#### 自定义尺寸 \r\n\r\n自定义尺寸，适应在各种容器中展示。\r\n</cn>\r\n<us>\r\n#### Custom Size\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-radio-group v-model="size" @change="onChange">\r\n      <a-radio value="default">\r\n        default\r\n      </a-radio>\r\n      <a-radio value="middle">\r\n        middle\r\n      </a-radio>\r\n      <a-radio value="small">\r\n        small\r\n      </a-radio>\r\n    </a-radio-group>\r\n    <br />\r\n    <br />\r\n    <a-descriptions bordered title="Custom Size" :size="size">\r\n      <a-descriptions-item label="Product">\r\n        Cloud Database\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Billing">\r\n        Prepaid\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Time">\r\n        18:00:00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Amount">\r\n        $80.00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Discount">\r\n        $20.00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Official">\r\n        $60.00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Config Info">\r\n        Data disk type: MongoDB\r\n        <br />\r\n        Database version: 3.4\r\n        <br />\r\n        Package: dds.mongo.mid\r\n        <br />\r\n        Storage space: 10 GB\r\n        <br />\r\n        Replication factor: 3\r\n        <br />\r\n        Region: East China 1<br />\r\n      </a-descriptions-item>\r\n    </a-descriptions>\r\n    <br />\r\n    <br />\r\n    <a-descriptions title="Custom Size" :size="size">\r\n      <a-descriptions-item label="Product">\r\n        Cloud Database\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Billing">\r\n        Prepaid\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Time">\r\n        18:00:00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Amount">\r\n        $80.00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Discount">\r\n        $20.00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Official">\r\n        $60.00\r\n      </a-descriptions-item>\r\n    </a-descriptions>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      size: \'default\',\r\n    };\r\n  },\r\n  methods: {\r\n    onChange(e) {\r\n      console.log(\'size checked\', e.target.value);\r\n      this.size = e.target.value;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',B=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("a-descriptions",{attrs:{title:"Responsive Descriptions",bordered:"",column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:1}}},[t("a-descriptions-item",{attrs:{label:"Product"}},[n._v("\n      Cloud Database\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Billing"}},[n._v("\n      Prepaid\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Time"}},[n._v("\n      18:00:00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Amount"}},[n._v("\n      $80.00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Discount"}},[n._v("\n      $20.00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Official"}},[n._v("\n      $60.00\n    ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Config Info"}},[n._v("\n      Data disk type: MongoDB\n      "),t("br"),n._v("\n      Database version: 3.4\n      "),t("br"),n._v("\n      Package: dds.mongo.mid\n      "),t("br"),n._v("\n      Storage space: 10 GB\n      "),t("br"),n._v("\n      Replication factor: 3\n      "),t("br"),n._v("\n      Region: East China 1\n    ")])],1)],1)};B._withStripped=!0;var k=t(2271),I=t.n(k),O=t(2272),A=t.n(O),E=Object(r.a)({},B,[],!1,null,null,null);"function"==typeof I.a&&I()(E),"function"==typeof A.a&&A()(E),E.options.__file="components/descriptions/demo/responsive.vue";var w=E.exports,j='<cn>\r\n#### 响应式 \r\n\r\n通过响应式的配置可以实现在小屏幕设备上的完美呈现。\r\n</cn>\r\n<us>\r\n#### Responsive\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-descriptions\r\n      title="Responsive Descriptions"\r\n      bordered\r\n      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"\r\n    >\r\n      <a-descriptions-item label="Product">\r\n        Cloud Database\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Billing">\r\n        Prepaid\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Time">\r\n        18:00:00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Amount">\r\n        $80.00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Discount">\r\n        $20.00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Official">\r\n        $60.00\r\n      </a-descriptions-item>\r\n      <a-descriptions-item label="Config Info">\r\n        Data disk type: MongoDB\r\n        <br />\r\n        Database version: 3.4\r\n        <br />\r\n        Package: dds.mongo.mid\r\n        <br />\r\n        Storage space: 10 GB\r\n        <br />\r\n        Replication factor: 3\r\n        <br />\r\n        Region: East China 1\r\n      </a-descriptions-item>\r\n    </a-descriptions>\r\n  </div>\r\n</template>\r\n',U=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a-descriptions",{attrs:{title:"User Info",layout:"vertical"}},[t("a-descriptions-item",{attrs:{label:"UserName"}},[n._v("\n    Zhou Maomao\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Telephone"}},[n._v("\n    1810000000\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Live"}},[n._v("\n    Hangzhou, Zhejiang\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Address",span:"2"}},[n._v("\n    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Remark"}},[n._v("\n    empty\n  ")])],1)};U._withStripped=!0;var M=t(2273),N=t.n(M),T=t(2274),Z=t.n(T),G=Object(r.a)({},U,[],!1,null,null,null);"function"==typeof N.a&&N()(G),"function"==typeof Z.a&&Z()(G),G.options.__file="components/descriptions/demo/vertical.vue";var H=G.exports,L='<cn>\r\n#### 垂直 \r\n\r\n垂直的列表。\r\n</cn>\r\n<us>\r\n#### Vertical\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-descriptions title="User Info" layout="vertical">\r\n    <a-descriptions-item label="UserName">\r\n      Zhou Maomao\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Telephone">\r\n      1810000000\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Live">\r\n      Hangzhou, Zhejiang\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Address" span="2">\r\n      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Remark">\r\n      empty\r\n    </a-descriptions-item>\r\n  </a-descriptions>\r\n</template>\r\n',V=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("a-descriptions",{attrs:{title:"User Info",layout:"vertical",bordered:""}},[t("a-descriptions-item",{attrs:{label:"Product"}},[n._v("\n    Cloud Database\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Billing Mode"}},[n._v("\n    Prepaid\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Automatic Renewal"}},[n._v("\n    YES\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Order time"}},[n._v("\n    2018-04-24 18:00:00\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Usage Time",span:2}},[n._v("\n    2019-04-24 18:00:00\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Status",span:3}},[t("a-badge",{attrs:{status:"processing",text:"Running"}})],1),n._v(" "),t("a-descriptions-item",{attrs:{label:"Negotiated Amount"}},[n._v("\n    $80.00\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Discount"}},[n._v("\n    $20.00\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Official Receipts"}},[n._v("\n    $60.00\n  ")]),n._v(" "),t("a-descriptions-item",{attrs:{label:"Config Info"}},[n._v("\n    Data disk type: MongoDB\n    "),t("br"),n._v("\n    Database version: 3.4\n    "),t("br"),n._v("\n    Package: dds.mongo.mid\n    "),t("br"),n._v("\n    Storage space: 10 GB\n    "),t("br"),n._v("\n    Replication factor: 3\n    "),t("br"),n._v("\n    Region: East China 1"),t("br")])],1)};V._withStripped=!0;var W=t(2275),X=t.n(W),Y=t(2276),J=t.n(Y),q=Object(r.a)({},V,[],!1,null,null,null);"function"==typeof X.a&&X()(q),"function"==typeof J.a&&J()(q),q.options.__file="components/descriptions/demo/vertical-border.vue";var F=q.exports,K='<cn>\r\n#### 垂直带边框的 \r\n\r\n垂直带边框和背景颜色的列表。\r\n</cn>\r\n<us>\r\n#### Vertical Border\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-descriptions title="User Info" layout="vertical" bordered>\r\n    <a-descriptions-item label="Product">\r\n      Cloud Database\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Billing Mode">\r\n      Prepaid\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Automatic Renewal">\r\n      YES\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Order time">\r\n      2018-04-24 18:00:00\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Usage Time" :span="2">\r\n      2019-04-24 18:00:00\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Status" :span="3">\r\n      <a-badge status="processing" text="Running" />\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Negotiated Amount">\r\n      $80.00\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Discount">\r\n      $20.00\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Official Receipts">\r\n      $60.00\r\n    </a-descriptions-item>\r\n    <a-descriptions-item label="Config Info">\r\n      Data disk type: MongoDB\r\n      <br />\r\n      Database version: 3.4\r\n      <br />\r\n      Package: dds.mongo.mid\r\n      <br />\r\n      Storage space: 10 GB\r\n      <br />\r\n      Replication factor: 3\r\n      <br />\r\n      Region: East China 1<br />\r\n    </a-descriptions-item>\r\n  </a-descriptions>\r\n</template>\r\n',Q=function(){var n=this.$createElement;this._self._c;return this._m(0)};Q._withStripped=!0;var nn=Object(r.a)({},Q,[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h2",{attrs:{id:"API"}},[n._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("h3",{attrs:{id:"Descriptions-props"}},[n._v("Descriptions props "),t("a",{staticClass:"anchor",attrs:{href:"#Descriptions-props","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("类型")]),n._v(" "),t("th",[n._v("默认值")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("title")]),n._v(" "),t("td",[n._v("描述列表的标题，显示在最顶部")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("VNode")])]),n._v(" "),t("tr",[t("td",[n._v("bordered")]),n._v(" "),t("td",[n._v("是否展示边框")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("false")])]),n._v(" "),t("tr",[t("td",[n._v("column")]),n._v(" "),t("td",[n._v("一行的 "),t("code",{pre:!0},[n._v("DescriptionItems")]),n._v(" 数量，可以写成像素值或支持响应式的对象写法 "),t("code",{pre:!0},[n._v("{ xs: 8, sm: 16, md: 24}")])]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("3")])]),n._v(" "),t("tr",[t("td",[n._v("size")]),n._v(" "),t("td",[n._v("设置列表的大小。可以设置为 "),t("code",{pre:!0},[n._v("middle")]),n._v(" 、"),t("code",{pre:!0},[n._v("small")]),n._v(", 或不填（只有设置 "),t("code",{pre:!0},[n._v("bordered={true}")]),n._v(" 生效）")]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("default | middle | small")])]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("default")])])]),n._v(" "),t("tr",[t("td",[n._v("layout")]),n._v(" "),t("td",[n._v("描述布局")]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("horizontal | vertical")])]),n._v(" "),t("td",[t("code",{pre:!0},[n._v("horizontal")])])]),n._v(" "),t("tr",[t("td",[n._v("colon")]),n._v(" "),t("td",[n._v("配置 "),t("code",{pre:!0},[n._v("Descriptions.Item")]),n._v(" 的 "),t("code",{pre:!0},[n._v("colon")]),n._v(" 的默认值")]),n._v(" "),t("td",[n._v("boolean")]),n._v(" "),t("td",[n._v("true")])])])]),n._v(" "),t("h3",{attrs:{id:"Item-props"}},[n._v("Item props "),t("a",{staticClass:"anchor",attrs:{href:"#Item-props","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),n._v(" "),t("th",[n._v("说明")]),n._v(" "),t("th",[n._v("类型")]),n._v(" "),t("th",[n._v("默认值")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("label")]),n._v(" "),t("td",[n._v("内容的描述")]),n._v(" "),t("td",[n._v("string")]),n._v(" "),t("td",[n._v("VNode")])]),n._v(" "),t("tr",[t("td",[n._v("span")]),n._v(" "),t("td",[n._v("包含列的数量")]),n._v(" "),t("td",[n._v("number")]),n._v(" "),t("td",[n._v("1")])])])]),n._v(" "),t("blockquote",[t("p",[n._v("span 是 Descriptions.Item 的数量。 span={2} 会占用两个 DescriptionsItem 的宽度。")])])])}],!1,null,null,null);nn.options.__file="components/descriptions/index.zh-CN.md";var en=nn.exports,tn=function(){var n=this.$createElement;return(this._self._c||n)("div")};tn._withStripped=!0;var rn=Object(r.a)({},tn,[],!1,null,null,null);rn.options.__file="components/descriptions/index.en-US.md";var an=rn.exports,sn="",on="# Descriptions 描述列表 (版本: 1.5.0+)\n\n成组展示多个只读字段。\n\n## 何时使用\n\n常见于详情页的信息展示。\n\n## 代码演示",ln={category:"Components",subtitle:"描述列表",type:"Data Display",zhType:"数据展示",cols:1,title:"Descriptions",render:function(){var n=arguments[0];return n("div",[n("md",{attrs:{cn:on,us:sn}}),n("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[n("a-col",{attrs:{span:24},class:"code-boxes-col-1-1"},[n("demo-container",{attrs:{code:p}},[n(c)]),n("demo-container",{attrs:{code:h}},[n(g)]),n("demo-container",{attrs:{code:S}},[n(x)]),n("demo-container",{attrs:{code:j}},[n(w)]),n("demo-container",{attrs:{code:L}},[n(H)]),n("demo-container",{attrs:{code:K}},[n(F)])])]),n("api",[n(en,{slot:"cn"}),n(an)])])}},dn=Object(r.a)(ln,void 0,void 0,!1,null,null,null);dn.options.__file="components/descriptions/demo/index.vue";e.default=dn.exports}}]);