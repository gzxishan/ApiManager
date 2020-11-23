(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1754:function(n,t){},1755:function(n,t){},1756:function(n,t){},1757:function(n,t){},1758:function(n,t){},1759:function(n,t){},1760:function(n,t){},1761:function(n,t){},1762:function(n,t){},1763:function(n,t){},1764:function(n,t){},1765:function(n,t){},1766:function(n,t){},1767:function(n,t){},1768:function(n,t){},1769:function(n,t){},1770:function(n,t){},1771:function(n,t){},1772:function(n,t){},1773:function(n,t){},1774:function(n,t){},1775:function(n,t){},2293:function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("a-button",{attrs:{type:"primary"},on:{click:n.showModal}},[n._v("\n    Open Modal with async logic\n  ")]),n._v(" "),e("a-modal",{attrs:{title:"Title",visible:n.visible,"confirm-loading":n.confirmLoading},on:{ok:n.handleOk,cancel:n.handleCancel}},[e("p",[n._v(n._s(n.ModalText))])])],1)};o._withStripped=!0;var r={data:function(){return{ModalText:"Content of the modal",visible:!1,confirmLoading:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(n){var t=this;this.ModalText="The modal will be closed after two seconds",this.confirmLoading=!0,setTimeout((function(){t.visible=!1,t.confirmLoading=!1}),2e3)},handleCancel:function(n){console.log("Clicked cancel button"),this.visible=!1}}},s=e(32),i=e(1754),l=e.n(i),a=e(1755),d=e.n(a),v=Object(s.a)(r,o,[],!1,null,null,null);"function"==typeof l.a&&l()(v),"function"==typeof d.a&&d()(v),v.options.__file="components/modal/demo/asynchronously-close.vue";var c=v.exports,_='<cn>\r\n#### 异步关闭 \r\n\r\n点击确定后异步关闭对话框，例如提交表单。\r\n</cn>\r\n<us>\r\n#### Asynchronously Close\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-button type="primary" @click="showModal">\r\n      Open Modal with async logic\r\n    </a-button>\r\n    <a-modal\r\n      title="Title"\r\n      :visible="visible"\r\n      :confirm-loading="confirmLoading"\r\n      @ok="handleOk"\r\n      @cancel="handleCancel"\r\n    >\r\n      <p>{{ ModalText }}</p>\r\n    </a-modal>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      ModalText: \'Content of the modal\',\r\n      visible: false,\r\n      confirmLoading: false,\r\n    };\r\n  },\r\n  methods: {\r\n    showModal() {\r\n      this.visible = true;\r\n    },\r\n    handleOk(e) {\r\n      this.ModalText = \'The modal will be closed after two seconds\';\r\n      this.confirmLoading = true;\r\n      setTimeout(() => {\r\n        this.visible = false;\r\n        this.confirmLoading = false;\r\n      }, 2000);\r\n    },\r\n    handleCancel(e) {\r\n      console.log(\'Clicked cancel button\');\r\n      this.visible = false;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',u=function(){var n=this.$createElement;return(this._self._c||n)("a-button",{on:{click:this.showConfirm}},[this._v("\n  Confirm\n")])};u._withStripped=!0;var m={methods:{showConfirm:function(){this.$confirm({title:"Do you want to delete these items?",content:"When clicked the OK button, this dialog will be closed after 1 second",onOk:function(){return new Promise((function(n,t){setTimeout(Math.random()>.5?n:t,1e3)})).catch((function(){return console.log("Oops errors!")}))},onCancel:function(){}})}}},p=e(1756),f=e.n(p),h=e(1757),b=e.n(h),g=Object(s.a)(m,u,[],!1,null,null,null);"function"==typeof f.a&&f()(g),"function"==typeof b.a&&b()(g),g.options.__file="components/modal/demo/confirmation-modal-dialog-use-promise.vue";var k=g.exports,y="<cn>\r\n#### 确认对话框(promise) \r\n\r\n使用 `confirm()` 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭\r\n</cn>\r\n<us>\r\n#### Confirmation Modal Dialog Use Promise\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-button @click=\"showConfirm\">\r\n    Confirm\r\n  </a-button>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    showConfirm() {\r\n      this.$confirm({\r\n        title: 'Do you want to delete these items?',\r\n        content: 'When clicked the OK button, this dialog will be closed after 1 second',\r\n        onOk() {\r\n          return new Promise((resolve, reject) => {\r\n            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);\r\n          }).catch(() => console.log('Oops errors!'));\r\n        },\r\n        onCancel() {},\r\n      });\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n",w=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("a-button",{attrs:{type:"primary"},on:{click:n.showModal}},[n._v("\n    Open Modal with customized footer\n  ")]),n._v(" "),e("a-modal",{attrs:{title:"Title","on-ok":"handleOk"},model:{value:n.visible,callback:function(t){n.visible=t},expression:"visible"}},[e("template",{slot:"footer"},[e("a-button",{key:"back",on:{click:n.handleCancel}},[n._v("\n        Return\n      ")]),n._v(" "),e("a-button",{key:"submit",attrs:{type:"primary",loading:n.loading},on:{click:n.handleOk}},[n._v("\n        Submit\n      ")])],1),n._v(" "),e("p",[n._v("Some contents...")]),n._v(" "),e("p",[n._v("Some contents...")]),n._v(" "),e("p",[n._v("Some contents...")]),n._v(" "),e("p",[n._v("Some contents...")]),n._v(" "),e("p",[n._v("Some contents...")])],2)],1)};w._withStripped=!0;var M={data:function(){return{loading:!1,visible:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(n){var t=this;this.loading=!0,setTimeout((function(){t.visible=!1,t.loading=!1}),3e3)},handleCancel:function(n){this.visible=!1}}},x=e(1758),C=e.n(x),T=e(1759),O=e.n(T),S=Object(s.a)(M,w,[],!1,null,null,null);"function"==typeof C.a&&C()(S),"function"==typeof O.a&&O()(S),S.options.__file="components/modal/demo/customized-footer.vue";var $=S.exports,V='<cn>\r\n#### 自定义页脚 \r\n\r\n更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。\r\n不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。\r\n</cn>\r\n<us>\r\n#### Customized Footer\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-button type="primary" @click="showModal">\r\n      Open Modal with customized footer\r\n    </a-button>\r\n    <a-modal v-model="visible" title="Title" on-ok="handleOk">\r\n      <template slot="footer">\r\n        <a-button key="back" @click="handleCancel">\r\n          Return\r\n        </a-button>\r\n        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">\r\n          Submit\r\n        </a-button>\r\n      </template>\r\n      <p>Some contents...</p>\r\n      <p>Some contents...</p>\r\n      <p>Some contents...</p>\r\n      <p>Some contents...</p>\r\n      <p>Some contents...</p>\r\n    </a-modal>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      loading: false,\r\n      visible: false,\r\n    };\r\n  },\r\n  methods: {\r\n    showModal() {\r\n      this.visible = true;\r\n    },\r\n    handleOk(e) {\r\n      this.loading = true;\r\n      setTimeout(() => {\r\n        this.visible = false;\r\n        this.loading = false;\r\n      }, 3000);\r\n    },\r\n    handleCancel(e) {\r\n      this.visible = false;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',B=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("a-button",{attrs:{type:"primary"},on:{click:n.showModal}},[n._v("\n    Modal\n  ")]),n._v(" "),e("a-modal",{attrs:{title:"Modal","ok-text":"确认","cancel-text":"取消"},on:{ok:n.hideModal},model:{value:n.visible,callback:function(t){n.visible=t},expression:"visible"}},[e("p",[n._v("Bla bla ...")]),n._v(" "),e("p",[n._v("Bla bla ...")]),n._v(" "),e("p",[n._v("Bla bla ...")])]),n._v(" "),e("br"),n._v(" "),e("br"),n._v(" "),e("a-button",{on:{click:n.confirm}},[n._v("\n    Confirm\n  ")])],1)};B._withStripped=!0;var j={data:function(){return{visible:!1}},methods:{showModal:function(){this.visible=!0},hideModal:function(){this.visible=!1},confirm:function(){this.$confirm({title:"Confirm",content:"Bla bla ...",okText:"确认",cancelText:"取消"})}}},P=e(1760),D=e.n(P),E=e(1761),A=e.n(E),z=Object(s.a)(j,B,[],!1,null,null,null);"function"==typeof D.a&&D()(z),"function"==typeof A.a&&A()(z),z.options.__file="components/modal/demo/internationalization.vue";var I=z.exports,N='<cn>\r\n#### 国际化 \r\n\r\n设置 `okText` 与 `cancelText` 以自定义按钮文字。\r\n</cn>\r\n<us>\r\n#### Internationalization\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-button type="primary" @click="showModal">\r\n      Modal\r\n    </a-button>\r\n    <a-modal v-model="visible" title="Modal" ok-text="确认" cancel-text="取消" @ok="hideModal">\r\n      <p>Bla bla ...</p>\r\n      <p>Bla bla ...</p>\r\n      <p>Bla bla ...</p>\r\n    </a-modal>\r\n    <br />\r\n    <br />\r\n    <a-button @click="confirm">\r\n      Confirm\r\n    </a-button>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      visible: false,\r\n    };\r\n  },\r\n  methods: {\r\n    showModal() {\r\n      this.visible = true;\r\n    },\r\n    hideModal() {\r\n      this.visible = false;\r\n    },\r\n    confirm() {\r\n      this.$confirm({\r\n        title: \'Confirm\',\r\n        content: \'Bla bla ...\',\r\n        okText: \'确认\',\r\n        cancelText: \'取消\',\r\n      });\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',L=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"components-modal-demo-position"}},[e("a-button",{attrs:{type:"primary"},on:{click:function(){return n.setModal1Visible(!0)}}},[n._v("\n    Display a modal dialog at 20px to Top\n  ")]),n._v(" "),e("a-modal",{staticStyle:{top:"20px"},attrs:{title:"20px to Top",visible:n.modal1Visible},on:{ok:function(){return n.setModal1Visible(!1)},cancel:function(){return n.setModal1Visible(!1)}}},[e("p",[n._v("some contents...")]),n._v(" "),e("p",[n._v("some contents...")]),n._v(" "),e("p",[n._v("some contents...")])]),n._v(" "),e("br"),e("br"),n._v(" "),e("a-button",{attrs:{type:"primary"},on:{click:function(){return n.modal2Visible=!0}}},[n._v("\n    Vertically centered modal dialog\n  ")]),n._v(" "),e("a-modal",{attrs:{title:"Vertically centered modal dialog",centered:""},on:{ok:function(){return n.modal2Visible=!1}},model:{value:n.modal2Visible,callback:function(t){n.modal2Visible=t},expression:"modal2Visible"}},[e("p",[n._v("some contents...")]),n._v(" "),e("p",[n._v("some contents...")]),n._v(" "),e("p",[n._v("some contents...")])])],1)};L._withStripped=!0;var K={data:function(){return{modal1Visible:!1,modal2Visible:!1}},methods:{setModal1Visible:function(n){this.modal1Visible=n}}},W=e(1762),G=e.n(W),F=e(1763),R=e.n(F),Y=Object(s.a)(K,L,[],!1,null,null,null);"function"==typeof G.a&&G()(Y),"function"==typeof R.a&&R()(Y),Y.options.__file="components/modal/demo/position.vue";var q=Y.exports,J='<cn>\r\n#### 自定义位置 \r\n\r\n使用 `centered` 或类似 `style.top` 的样式来设置对话框位置。\r\n</cn>\r\n<us>\r\n#### To Customize The Position Of Modal\r\n</us>\r\n\r\n\r\n<template>\r\n  <div id="components-modal-demo-position">\r\n    <a-button type="primary" @click="() => setModal1Visible(true)">\r\n      Display a modal dialog at 20px to Top\r\n    </a-button>\r\n    <a-modal\r\n      title="20px to Top"\r\n      style="top: 20px;"\r\n      :visible="modal1Visible"\r\n      @ok="() => setModal1Visible(false)"\r\n      @cancel="() => setModal1Visible(false)"\r\n    >\r\n      <p>some contents...</p>\r\n      <p>some contents...</p>\r\n      <p>some contents...</p>\r\n    </a-modal>\r\n    <br /><br />\r\n    <a-button type="primary" @click="() => (modal2Visible = true)">\r\n      Vertically centered modal dialog\r\n    </a-button>\r\n    <a-modal\r\n      v-model="modal2Visible"\r\n      title="Vertically centered modal dialog"\r\n      centered\r\n      @ok="() => (modal2Visible = false)"\r\n    >\r\n      <p>some contents...</p>\r\n      <p>some contents...</p>\r\n      <p>some contents...</p>\r\n    </a-modal>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      modal1Visible: false,\r\n      modal2Visible: false,\r\n    };\r\n  },\r\n  methods: {\r\n    setModal1Visible(modal1Visible) {\r\n      this.modal1Visible = modal1Visible;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',U=function(){var n=this.$createElement;return(this._self._c||n)("a-button",{on:{click:this.showConfirm}},[this._v("\n  Confirm\n")])};U._withStripped=!0;var H={methods:{showConfirm:function(){for(var n=this,t=this,e=0;e<3;e+=1)setTimeout((function(){n.$confirm({content:"destroy all",onOk:function(){return new Promise((function(n,t){setTimeout(Math.random()>.5?n:t,1e3)})).catch((function(){return console.log("Oops errors!")}))},cancelText:"Click to destroy all",onCancel:function(){t.destroyAll()}})}),500*e)},destroyAll:function(){this.$destroyAll()}}},X=e(1764),Q=e.n(X),Z=e(1765),nn=e.n(Z),tn=Object(s.a)(H,U,[],!1,null,null,null);"function"==typeof Q.a&&Q()(tn),"function"==typeof nn.a&&nn()(tn),tn.options.__file="components/modal/demo/destroy-confirmation-modal-dialog.vue";var en=tn.exports,on="<cn>\r\n#### 销毁确认对话框 \r\n\r\n使用 `Modal.destroyAll()` 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。\r\n</cn>\r\n<us>\r\n#### Destroy Confirmation Modal Dialog\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-button @click=\"showConfirm\">\r\n    Confirm\r\n  </a-button>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    showConfirm() {\r\n      const self = this;\r\n      for (let i = 0; i < 3; i += 1) {\r\n        setTimeout(() => {\r\n          this.$confirm({\r\n            content: 'destroy all',\r\n            onOk() {\r\n              return new Promise((resolve, reject) => {\r\n                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);\r\n              }).catch(() => console.log('Oops errors!'));\r\n            },\r\n            cancelText: 'Click to destroy all',\r\n            onCancel() {\r\n              self.destroyAll();\r\n            },\r\n          });\r\n        }, i * 500);\r\n      }\r\n    },\r\n    destroyAll() {\r\n      this.$destroyAll();\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n",rn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("a-button",{attrs:{type:"primary"},on:{click:n.showModal}},[n._v("\n    Open Modal\n  ")]),n._v(" "),e("a-modal",{attrs:{title:"Basic Modal"},on:{ok:n.handleOk},model:{value:n.visible,callback:function(t){n.visible=t},expression:"visible"}},[e("p",[n._v("Some contents...")]),n._v(" "),e("p",[n._v("Some contents...")]),n._v(" "),e("p",[n._v("Some contents...")])])],1)};rn._withStripped=!0;var sn={data:function(){return{visible:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(n){console.log(n),this.visible=!1}}},ln=e(1766),an=e.n(ln),dn=e(1767),vn=e.n(dn),cn=Object(s.a)(sn,rn,[],!1,null,null,null);"function"==typeof an.a&&an()(cn),"function"==typeof vn.a&&vn()(cn),cn.options.__file="components/modal/demo/basic.vue";var _n=cn.exports,un='<cn>\r\n#### 基本 \r\n\r\n第一个对话框。\r\n</cn>\r\n<us>\r\n#### Basic\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-button type="primary" @click="showModal">\r\n      Open Modal\r\n    </a-button>\r\n    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">\r\n      <p>Some contents...</p>\r\n      <p>Some contents...</p>\r\n      <p>Some contents...</p>\r\n    </a-modal>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      visible: false,\r\n    };\r\n  },\r\n  methods: {\r\n    showModal() {\r\n      this.visible = true;\r\n    },\r\n    handleOk(e) {\r\n      console.log(e);\r\n      this.visible = false;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',mn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("a-button",{on:{click:n.showConfirm}},[n._v("\n    Confirm\n  ")]),n._v(" "),e("a-button",{attrs:{type:"dashed"},on:{click:n.showDeleteConfirm}},[n._v("\n    Delete\n  ")]),n._v(" "),e("a-button",{attrs:{type:"dashed"},on:{click:n.showPropsConfirm}},[n._v("\n    With extra props\n  ")])],1)};mn._withStripped=!0;var pn={methods:{showConfirm:function(){this.$createElement;this.$confirm({title:"Do you Want to delete these items?",content:function(n){return n("div",{style:"color:red;"},["Some descriptions"])},onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")},class:"test"})},showDeleteConfirm:function(){this.$confirm({title:"Are you sure delete this task?",content:"Some descriptions",okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")}})},showPropsConfirm:function(){this.$confirm({title:"Are you sure delete this task?",content:"Some descriptions",okText:"Yes",okType:"danger",okButtonProps:{props:{disabled:!0}},cancelText:"No",onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")}})}}},fn=e(1768),hn=e.n(fn),bn=e(1769),gn=e.n(bn),kn=Object(s.a)(pn,mn,[],!1,null,null,null);"function"==typeof hn.a&&hn()(kn),"function"==typeof gn.a&&gn()(kn),kn.options.__file="components/modal/demo/confirmation-modal-dialog.vue";var yn=kn.exports,wn="<cn>\r\n#### 确认对话框 \r\n\r\n使用 `confirm()` 可以快捷地弹出确认框。\r\n</cn>\r\n<us>\r\n#### Confirmation Modal Dialog\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-button @click=\"showConfirm\">\r\n      Confirm\r\n    </a-button>\r\n    <a-button type=\"dashed\" @click=\"showDeleteConfirm\">\r\n      Delete\r\n    </a-button>\r\n    <a-button type=\"dashed\" @click=\"showPropsConfirm\">\r\n      With extra props\r\n    </a-button>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    showConfirm() {\r\n      this.$confirm({\r\n        title: 'Do you Want to delete these items?',\r\n        content: h => <div style=\"color:red;\">Some descriptions</div>,\r\n        onOk() {\r\n          console.log('OK');\r\n        },\r\n        onCancel() {\r\n          console.log('Cancel');\r\n        },\r\n        class: 'test',\r\n      });\r\n    },\r\n\r\n    showDeleteConfirm() {\r\n      this.$confirm({\r\n        title: 'Are you sure delete this task?',\r\n        content: 'Some descriptions',\r\n        okText: 'Yes',\r\n        okType: 'danger',\r\n        cancelText: 'No',\r\n        onOk() {\r\n          console.log('OK');\r\n        },\r\n        onCancel() {\r\n          console.log('Cancel');\r\n        },\r\n      });\r\n    },\r\n    showPropsConfirm() {\r\n      this.$confirm({\r\n        title: 'Are you sure delete this task?',\r\n        content: 'Some descriptions',\r\n        okText: 'Yes',\r\n        okType: 'danger',\r\n        okButtonProps: {\r\n          props: { disabled: true },\r\n        },\r\n        cancelText: 'No',\r\n        onOk() {\r\n          console.log('OK');\r\n        },\r\n        onCancel() {\r\n          console.log('Cancel');\r\n        },\r\n      });\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n",Mn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("a-button",{on:{click:n.info}},[n._v("\n    Info\n  ")]),n._v(" "),e("a-button",{on:{click:n.success}},[n._v("\n    Success\n  ")]),n._v(" "),e("a-button",{on:{click:n.error}},[n._v("\n    Error\n  ")]),n._v(" "),e("a-button",{on:{click:n.warning}},[n._v("\n    Warning\n  ")])],1)};Mn._withStripped=!0;var xn={methods:{info:function(){var n=this.$createElement;this.$info({title:"This is a notification message",content:n("div",{},[n("p","some messages...some messages..."),n("p","some messages...some messages...")]),onOk:function(){}})},success:function(){var n=this.$createElement;this.$success({title:"This is a success message",content:n("div",[n("p",["some messages...some messages..."]),n("p",["some messages...some messages..."])])})},error:function(){this.$error({title:"This is an error message",content:"some messages...some messages..."})},warning:function(){this.$warning({title:"This is a warning message",content:"some messages...some messages..."})}}},Cn=e(1770),Tn=e.n(Cn),On=e(1771),Sn=e.n(On),$n=Object(s.a)(xn,Mn,[],!1,null,null,null);"function"==typeof Tn.a&&Tn()($n),"function"==typeof Sn.a&&Sn()($n),$n.options.__file="components/modal/demo/information-modal-dialog.vue";var Vn=$n.exports,Bn="<cn>\r\n#### 信息提示 \r\n\r\n各种类型的信息提示，只提供一个按钮用于关闭。\r\n</cn>\r\n<us>\r\n#### Information Modal Dialog\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-button @click=\"info\">\r\n      Info\r\n    </a-button>\r\n    <a-button @click=\"success\">\r\n      Success\r\n    </a-button>\r\n    <a-button @click=\"error\">\r\n      Error\r\n    </a-button>\r\n    <a-button @click=\"warning\">\r\n      Warning\r\n    </a-button>\r\n  </div>\r\n</template>\r\n<script>\r\nimport { Modal } from 'ant-design-vue';\r\nexport default {\r\n  methods: {\r\n    info() {\r\n      const h = this.$createElement;\r\n      this.$info({\r\n        title: 'This is a notification message',\r\n        content: h('div', {}, [\r\n          h('p', 'some messages...some messages...'),\r\n          h('p', 'some messages...some messages...'),\r\n        ]),\r\n        onOk() {},\r\n      });\r\n    },\r\n\r\n    success() {\r\n      this.$success({\r\n        title: 'This is a success message',\r\n        // JSX support\r\n        content: (\r\n          <div>\r\n            <p>some messages...some messages...</p>\r\n            <p>some messages...some messages...</p>\r\n          </div>\r\n        ),\r\n      });\r\n    },\r\n\r\n    error() {\r\n      this.$error({\r\n        title: 'This is an error message',\r\n        content: 'some messages...some messages...',\r\n      });\r\n    },\r\n\r\n    warning() {\r\n      this.$warning({\r\n        title: 'This is a warning message',\r\n        content: 'some messages...some messages...',\r\n      });\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n",jn=function(){var n=this.$createElement;return(this._self._c||n)("a-button",{on:{click:this.countDown}},[this._v("\n  Open modal to close in 5s\n")])};jn._withStripped=!0;var Pn={methods:{countDown:function(){var n=5,t=this.$success({title:"This is a notification message",content:"This modal will be destroyed after "+n+" second."}),e=setInterval((function(){n-=1,t.update({content:"This modal will be destroyed after "+n+" second."})}),1e3);setTimeout((function(){clearInterval(e),t.destroy()}),1e3*n)}}},Dn=e(1772),En=e.n(Dn),An=e(1773),zn=e.n(An),In=Object(s.a)(Pn,jn,[],!1,null,null,null);"function"==typeof En.a&&En()(In),"function"==typeof zn.a&&zn()(In),In.options.__file="components/modal/demo/manual-to-update-destroy.vue";var Nn=In.exports,Ln="<cn>\r\n#### 手动更新和移除 \r\n\r\n手动更新和关闭 `Modal.method` 方式创建的对话框。\r\n</cn>\r\n<us>\r\n#### Manual To Update Destroy\r\n</us>\r\n\r\n\r\n<template>\r\n  <a-button @click=\"countDown\">\r\n    Open modal to close in 5s\r\n  </a-button>\r\n</template>\r\n<script>\r\nexport default {\r\n  methods: {\r\n    countDown() {\r\n      let secondsToGo = 5;\r\n      const modal = this.$success({\r\n        title: 'This is a notification message',\r\n        content: `This modal will be destroyed after ${secondsToGo} second.`,\r\n      });\r\n      const interval = setInterval(() => {\r\n        secondsToGo -= 1;\r\n        modal.update({\r\n          content: `This modal will be destroyed after ${secondsToGo} second.`,\r\n        });\r\n      }, 1000);\r\n      setTimeout(() => {\r\n        clearInterval(interval);\r\n        modal.destroy();\r\n      }, secondsToGo * 1000);\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n",Kn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("a-button",{attrs:{type:"primary"},on:{click:n.showModal}},[n._v("\n    Open Modal with customized button props\n  ")]),n._v(" "),e("a-modal",{attrs:{title:"Basic Modal","ok-button-props":{props:{disabled:!0}},"cancel-button-props":{props:{disabled:!0}}},on:{ok:n.handleOk},model:{value:n.visible,callback:function(t){n.visible=t},expression:"visible"}},[e("p",[n._v("Some contents...")]),n._v(" "),e("p",[n._v("Some contents...")]),n._v(" "),e("p",[n._v("Some contents...")])])],1)};Kn._withStripped=!0;var Wn={data:function(){return{visible:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(n){console.log(n),this.visible=!1},handleCancel:function(n){console.log(n),this.visible=!1}}},Gn=e(1774),Fn=e.n(Gn),Rn=e(1775),Yn=e.n(Rn),qn=Object(s.a)(Wn,Kn,[],!1,null,null,null);"function"==typeof Fn.a&&Fn()(qn),"function"==typeof Yn.a&&Yn()(qn),qn.options.__file="components/modal/demo/customize-footer-buttons-props.vue";var Jn=qn.exports,Un='<cn>\r\n#### 自定义页脚按钮属性 \r\n\r\n传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 props。\r\n</cn>\r\n<us>\r\n#### Customize Footer Buttons Props\r\n</us>\r\n\r\n\r\n<template>\r\n  <div>\r\n    <a-button type="primary" @click="showModal">\r\n      Open Modal with customized button props\r\n    </a-button>\r\n    <a-modal\r\n      v-model="visible"\r\n      title="Basic Modal"\r\n      :ok-button-props="{ props: { disabled: true } }"\r\n      :cancel-button-props="{ props: { disabled: true } }"\r\n      @ok="handleOk"\r\n    >\r\n      <p>Some contents...</p>\r\n      <p>Some contents...</p>\r\n      <p>Some contents...</p>\r\n    </a-modal>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      visible: false,\r\n    };\r\n  },\r\n  methods: {\r\n    showModal() {\r\n      this.visible = true;\r\n    },\r\n    handleOk(e) {\r\n      console.log(e);\r\n      this.visible = false;\r\n    },\r\n    handleCancel(e) {\r\n      console.log(e);\r\n      this.visible = false;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n',Hn=function(){var n=this.$createElement;this._self._c;return this._m(0)};Hn._withStripped=!0;var Xn=Object(s.a)({},Hn,[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h2",{attrs:{id:"API"}},[n._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("参数")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("类型")]),n._v(" "),e("th",[n._v("默认值")]),n._v(" "),e("th",[n._v("版本")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("afterClose")]),n._v(" "),e("td",[n._v("Modal 完全关闭后的回调")]),n._v(" "),e("td",[n._v("function")]),n._v(" "),e("td",[n._v("无")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("bodyStyle")]),n._v(" "),e("td",[n._v("Modal body 样式")]),n._v(" "),e("td",[n._v("object")]),n._v(" "),e("td",[n._v("{}")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("cancelText")]),n._v(" "),e("td",[n._v("取消按钮文字")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("slot")]),n._v(" "),e("td",[n._v("取消")])]),n._v(" "),e("tr",[e("td",[n._v("centered")]),n._v(" "),e("td",[n._v("垂直居中展示 Modal")]),n._v(" "),e("td",[n._v("Boolean")]),n._v(" "),e("td",[e("code",{pre:!0},[n._v("false")])]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("closable")]),n._v(" "),e("td",[n._v("是否显示右上角的关闭按钮")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[n._v("true")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("closeIcon")]),n._v(" "),e("td",[n._v("自定义关闭图标")]),n._v(" "),e("td",[n._v("VNode")]),n._v(" "),e("td",[n._v("slot")]),n._v(" "),e("td",[n._v("-")])]),n._v(" "),e("tr",[e("td",[n._v("confirmLoading")]),n._v(" "),e("td",[n._v("确定按钮 loading")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[n._v("无")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("destroyOnClose")]),n._v(" "),e("td",[n._v("关闭时销毁 Modal 里的子元素")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[n._v("false")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("footer")]),n._v(" "),e("td",[n._v("底部内容，当不需要默认底部按钮时，可以设为 "),e("code",{pre:!0},[n._v(':footer="null"')])]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("slot")]),n._v(" "),e("td",[n._v("确定取消按钮")])]),n._v(" "),e("tr",[e("td",[n._v("forceRender")]),n._v(" "),e("td",[n._v("强制渲染 Modal")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[n._v("false")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("getContainer")]),n._v(" "),e("td",[n._v("指定 Modal 挂载的 HTML 节点")]),n._v(" "),e("td",[n._v("(instance): HTMLElement")]),n._v(" "),e("td",[n._v("() => document.body")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("keyboard")]),n._v(" "),e("td",[n._v("是否支持键盘 esc 关闭")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[n._v("true")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("mask")]),n._v(" "),e("td",[n._v("是否展示遮罩")]),n._v(" "),e("td",[n._v("Boolean")]),n._v(" "),e("td",[n._v("true")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("maskClosable")]),n._v(" "),e("td",[n._v("点击蒙层是否允许关闭")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[n._v("true")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("maskStyle")]),n._v(" "),e("td",[n._v("遮罩样式")]),n._v(" "),e("td",[n._v("object")]),n._v(" "),e("td",[n._v("{}")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("okText")]),n._v(" "),e("td",[n._v("确认按钮文字")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("slot")]),n._v(" "),e("td",[n._v("确定")])]),n._v(" "),e("tr",[e("td",[n._v("okType")]),n._v(" "),e("td",[n._v("确认按钮类型")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("primary")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("okButtonProps")]),n._v(" "),e("td",[n._v("ok 按钮 props, 遵循 jsx"),e("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx"}},[n._v("规范")])]),n._v(" "),e("td",[n._v("{props: "),e("a",{attrs:{href:"#/components/button/#API"}},[n._v("ButtonProps")]),n._v(", on: {}}")]),n._v(" "),e("td",[n._v("-")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("cancelButtonProps")]),n._v(" "),e("td",[n._v("cancel 按钮 props, 遵循 jsx"),e("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx"}},[n._v("规范")])]),n._v(" "),e("td",[n._v("{props: "),e("a",{attrs:{href:"#/components/button/#API"}},[n._v("ButtonProps")]),n._v(", on: {}}")]),n._v(" "),e("td",[n._v("-")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("title")]),n._v(" "),e("td",[n._v("标题")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("slot")]),n._v(" "),e("td",[n._v("无")])]),n._v(" "),e("tr",[e("td",[n._v("visible(v-model)")]),n._v(" "),e("td",[n._v("对话框是否可见")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[n._v("无")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("width")]),n._v(" "),e("td",[n._v("宽度")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("number")]),n._v(" "),e("td",[n._v("520")])]),n._v(" "),e("tr",[e("td",[n._v("wrapClassName")]),n._v(" "),e("td",[n._v("对话框外层容器的类名")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("-")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("zIndex")]),n._v(" "),e("td",[n._v("设置 Modal 的 "),e("code",{pre:!0},[n._v("z-index")])]),n._v(" "),e("td",[n._v("Number")]),n._v(" "),e("td",[n._v("1000")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("dialogStyle")]),n._v(" "),e("td",[n._v("可用于设置浮层的样式，调整浮层位置等")]),n._v(" "),e("td",[n._v("object")]),n._v(" "),e("td",[n._v("-")]),n._v(" "),e("td",[n._v("1.6.1")])]),n._v(" "),e("tr",[e("td",[n._v("dialogClass")]),n._v(" "),e("td",[n._v("可用于设置浮层的类名")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("-")]),n._v(" "),e("td",[n._v("1.6.1")])])])]),n._v(" "),e("h3",{attrs:{id:"事件"}},[n._v("事件 "),e("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("事件名称")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("回调参数")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("cancel")]),n._v(" "),e("td",[n._v("点击遮罩层或右上角叉或取消按钮的回调")]),n._v(" "),e("td",[n._v("function(e)")])]),n._v(" "),e("tr",[e("td",[n._v("ok")]),n._v(" "),e("td",[n._v("点击确定回调")]),n._v(" "),e("td",[n._v("function(e)")])])])]),n._v(" "),e("h4",{attrs:{id:"注意"}},[n._v("注意 "),e("a",{staticClass:"anchor",attrs:{href:"#注意","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("blockquote",[e("p",[e("code",{pre:!0},[n._v("<Modal />")]),n._v(" 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 "),e("code",{pre:!0},[n._v("destroyOnClose")]),n._v("。")])]),n._v(" "),e("h3",{attrs:{id:"Modal.method()"}},[n._v("Modal.method() "),e("a",{staticClass:"anchor",attrs:{href:"#Modal.method()","aria-hidden":"true"}},[n._v("#")])]),n._v(" "),e("p",[n._v("包括：")]),n._v(" "),e("ul",[e("li",[e("code",{pre:!0},[n._v("Modal.info")])]),n._v(" "),e("li",[e("code",{pre:!0},[n._v("Modal.success")])]),n._v(" "),e("li",[e("code",{pre:!0},[n._v("Modal.error")])]),n._v(" "),e("li",[e("code",{pre:!0},[n._v("Modal.warning")])]),n._v(" "),e("li",[e("code",{pre:!0},[n._v("Modal.confirm")])])]),n._v(" "),e("p",[n._v("以上均为一个函数，参数为 object，具体属性如下：")]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("参数")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("类型")]),n._v(" "),e("th",[n._v("默认值")]),n._v(" "),e("th",[n._v("版本")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("autoFocusButton")]),n._v(" "),e("td",[n._v("指定自动获得焦点的按钮")]),n._v(" "),e("td",[n._v("null")]),n._v(" "),e("td",[n._v("string: "),e("code",{pre:!0},[n._v("ok")]),n._v(" "),e("code",{pre:!0},[n._v("cancel")])]),n._v(" "),e("td",[e("code",{pre:!0},[n._v("ok")])])]),n._v(" "),e("tr",[e("td",[n._v("cancelText")]),n._v(" "),e("td",[n._v("取消按钮文字")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("取消")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("centered")]),n._v(" "),e("td",[n._v("垂直居中展示 Modal")]),n._v(" "),e("td",[n._v("Boolean")]),n._v(" "),e("td",[e("code",{pre:!0},[n._v("false")])]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("closable")]),n._v(" "),e("td",[n._v("是否显示右上角的关闭按钮")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[e("code",{pre:!0},[n._v("false")])]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("class")]),n._v(" "),e("td",[n._v("容器类名")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("-")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("content")]),n._v(" "),e("td",[n._v("内容")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("vNode")]),n._v(" "),e("td",[n._v("function(h)")])]),n._v(" "),e("tr",[e("td",[n._v("icon")]),n._v(" "),e("td",[n._v("自定义图标（1.14.0 新增）")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("()=>VNode")]),n._v(" "),e("td",[e("code",{pre:!0},[n._v('<Icon type="question-circle">')])])]),n._v(" "),e("tr",[e("td",[n._v("iconType")]),n._v(" "),e("td",[n._v("图标类型（1.14.0 后废弃，请使用 "),e("code",{pre:!0},[n._v("icon")]),n._v("）")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[e("code",{pre:!0},[n._v("question-circle")])]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("mask")]),n._v(" "),e("td",[n._v("是否展示遮罩")]),n._v(" "),e("td",[n._v("Boolean")]),n._v(" "),e("td",[n._v("true")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("maskClosable")]),n._v(" "),e("td",[n._v("点击蒙层是否允许关闭")]),n._v(" "),e("td",[n._v("Boolean")]),n._v(" "),e("td",[e("code",{pre:!0},[n._v("false")])]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("keyboard")]),n._v(" "),e("td",[n._v("是否支持键盘 esc 关闭")]),n._v(" "),e("td",[n._v("boolean")]),n._v(" "),e("td",[n._v("true")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("okText")]),n._v(" "),e("td",[n._v("确认按钮文字")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("确定")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("okType")]),n._v(" "),e("td",[n._v("确认按钮类型")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("primary")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("okButtonProps")]),n._v(" "),e("td",[n._v("ok 按钮 props")]),n._v(" "),e("td",[e("a",{attrs:{href:"#/components/button"}},[n._v("ButtonProps")])]),n._v(" "),e("td",[n._v("-")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("cancelButtonProps")]),n._v(" "),e("td",[n._v("cancel 按钮 props")]),n._v(" "),e("td",[e("a",{attrs:{href:"#/components/button"}},[n._v("ButtonProps")])]),n._v(" "),e("td",[n._v("-")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("title")]),n._v(" "),e("td",[n._v("标题")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("vNode")]),n._v(" "),e("td",[n._v("function(h)")])]),n._v(" "),e("tr",[e("td",[n._v("width")]),n._v(" "),e("td",[n._v("宽度")]),n._v(" "),e("td",[n._v("string")]),n._v(" "),e("td",[n._v("number")]),n._v(" "),e("td",[n._v("416")])]),n._v(" "),e("tr",[e("td",[n._v("zIndex")]),n._v(" "),e("td",[n._v("设置 Modal 的 "),e("code",{pre:!0},[n._v("z-index")])]),n._v(" "),e("td",[n._v("Number")]),n._v(" "),e("td",[n._v("1000")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("onCancel")]),n._v(" "),e("td",[n._v("取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭")]),n._v(" "),e("td",[n._v("function")]),n._v(" "),e("td",[n._v("无")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("onOk")]),n._v(" "),e("td",[n._v("点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭")]),n._v(" "),e("td",[n._v("function")]),n._v(" "),e("td",[n._v("无")]),n._v(" "),e("td")]),n._v(" "),e("tr",[e("td",[n._v("parentContext")]),n._v(" "),e("td",[n._v("弹窗的父级上下文，一般用于获取父级 provider， 如获取 "),e("code",{pre:!0},[n._v("ConfigProvider")]),n._v(" 的配置")]),n._v(" "),e("td",[n._v("vue instance")]),n._v(" "),e("td",[n._v("-")]),n._v(" "),e("td",[n._v("1.4.11")])])])]),n._v(" "),e("p",[n._v("以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。")]),n._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":""}},[n._v("const modal = Modal.info();\n\nmodal.update({\n  title: '修改的标题',\n  content: '修改的内容',\n});\n\nmodal.destroy();\n")])]),n._v(" "),e("ul",[e("li",[e("code",{pre:!0},[n._v("Modal.destroyAll")])])]),n._v(" "),e("p",[n._v("使用 "),e("code",{pre:!0},[n._v("Modal.destroyAll()")]),n._v(" 可以销毁弹出的确认窗（即上述的 Modal.info、Modal.success、Modal.error、Modal.warning、Modal.confirm）。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题，而不用各处去使用实例的返回值进行关闭（modal.destroy() 适用于主动关闭，而不是路由这样被动关闭）")]),n._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":""}},[n._v("const router = new VueRouter({ ... })\n\n// router change\nrouter.beforeEach((to, from, next) => {\n  Modal.destroyAll();\n})\n")])])])}],!1,null,null,null);Xn.options.__file="components/modal/index.zh-CN.md";var Qn=Xn.exports,Zn=function(){var n=this.$createElement;return(this._self._c||n)("div")};Zn._withStripped=!0;var nt=Object(s.a)({},Zn,[],!1,null,null,null);nt.options.__file="components/modal/index.en-US.md";var tt=nt.exports,et="",ot="# Modal 对话框\n\n模态对话框。\n\n## 何时使用\n\n需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。另外当需要一个简洁的确认框询问用户时，可以使用 `Modal.confirm()` 等语法糖方法。\n\n## 代码演示",rt={category:"Components",subtitle:"对话框",type:"Feedback",zhType:"反馈",cols:2,title:"Modal",render:function(){var n=arguments[0];return n("div",[n("md",{attrs:{cn:ot,us:et}}),n("a-row",{style:"margin-left: -8px;margin-right: -8px;"},[n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:_}},[n(c)]),n("demo-container",{attrs:{code:y}},[n(k)]),n("demo-container",{attrs:{code:V}},[n($)]),n("demo-container",{attrs:{code:N}},[n(I)]),n("demo-container",{attrs:{code:J}},[n(q)]),n("demo-container",{attrs:{code:on}},[n(en)])]),n("a-col",{attrs:{span:12},class:"code-boxes-col-2-1"},[n("demo-container",{attrs:{code:un}},[n(_n)]),n("demo-container",{attrs:{code:wn}},[n(yn)]),n("demo-container",{attrs:{code:Bn}},[n(Vn)]),n("demo-container",{attrs:{code:Ln}},[n(Nn)]),n("demo-container",{attrs:{code:Un}},[n(Jn)])])]),n("api",[n(Qn,{slot:"cn"}),n(tt)])])}},st=Object(s.a)(rt,void 0,void 0,!1,null,null,null);st.options.__file="components/modal/demo/index.vue";t.default=st.exports}}]);