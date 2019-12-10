(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1465:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this.$createElement;this._self._c;return this._m(0)};a._withStripped=!0;var r=e(31),n=Object(r.a)({},a,[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("h1",[t._v("Getting Started")]),t._v(" "),e("p",[t._v("Ant Design Vue is dedicated to providing a "),e("strong",[t._v("good development experience")]),t._v(" for programmers. Make sure that you had installed "),e("a",{attrs:{href:"https://nodejs.org/"}},[t._v("Node.js")]),t._v("(> v8.9) correctly.")]),t._v(" "),e("blockquote",[e("p",[t._v("Before delving into Ant Design Vue, a good knowledge base of "),e("a",{attrs:{href:"https://cn.vuejs.org/"}},[t._v("Vue")]),t._v(" and "),e("a",{attrs:{href:"http://babeljs.io/docs/learn-es2015/"}},[t._v("JavaScript ES2015")]),t._v(" is needed.")])]),t._v(" "),e("h2",{attrs:{id:"Use-vue-cli@3"}},[t._v("Use vue-cli@3 "),e("a",{staticClass:"anchor",attrs:{href:"#Use-vue-cli@3","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("p",[t._v("We provide an "),e("a",{attrs:{href:"https://github.com/vueComponent/vue-cli-plugin-ant-design"}},[t._v("Ant Design Vue")]),t._v(" plugin for vue-cli@3, which you can use to quickly build an Ant Design Vue-based project.")]),t._v(" "),e("h2",{attrs:{id:"Playground"}},[t._v("Playground "),e("a",{staticClass:"anchor",attrs:{href:"#Playground","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("p",[t._v("The following CodeSandbox demo is the simplest use case, and it's also a good habit to fork this demo to provide a re-producible demo while reporting a bug.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://codesandbox.io/s/2wpk21kzvr"}},[e("img",{attrs:{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Vue Antd Template"}})])])]),t._v(" "),e("h2",{attrs:{id:"Import-ant-design-vue"}},[t._v("Import ant-design-vue "),e("a",{staticClass:"anchor",attrs:{href:"#Import-ant-design-vue","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("h3",{attrs:{id:"1.-Installation"}},[t._v("1. Installation "),e("a",{staticClass:"anchor",attrs:{href:"#1.-Installation","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[t._v("vue-cli")])]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ npm install -g @vue/cli\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# OR")]),t._v("\n$ yarn global add @vue/cli\n")])]),t._v(" "),e("h3",{attrs:{id:"2.-Create-a-New-Project"}},[t._v("2. Create a New Project "),e("a",{staticClass:"anchor",attrs:{href:"#2.-Create-a-New-Project","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("p",[t._v("A new project can be created using CLI tools.")]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ vue create antd-demo\n")])]),t._v(" "),e("p",[t._v("And, setup your vue project configuration.")]),t._v(" "),e("h3",{attrs:{id:"3.-Use-antd's-Components"}},[t._v("3. Use antd's Components "),e("a",{staticClass:"anchor",attrs:{href:"#3.-Use-antd's-Components","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ npm i --save ant-design-vue\n")])]),t._v(" "),e("p",[e("strong",[t._v("Fully import")])]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Antd "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ant-design-vue'")]),t._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" App "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'./App'")]),t._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ant-design-vue/dist/antd.css'")]),t._v(";\nVue.config.productionTip = "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(";\n\nVue.use(Antd);\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* eslint-disable no-new */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Vue({\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("el")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#app'")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": { App },\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("template")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'<App/>'")]),t._v(",\n});\n")])]),t._v(" "),e("p",[t._v("The above imports Antd entirely. Note that CSS file needs to be imported separately.")]),t._v(" "),e("p",[e("strong",[t._v("Only import the components you need")])]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Button, message } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ant-design-vue'")]),t._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" App "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'./App'")]),t._v(";\n\nVue.config.productionTip = "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(";\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* v1.1.2 */")]),t._v("\nVue.component(Button.name, Button);\nVue.component(Button.Group.name, Button.Group);\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* v1.1.3+ Automatically register components under Button, such as Button.Group */")]),t._v("\nVue.use(Button);\n\nVue.prototype.$message = message;\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* eslint-disable no-new */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Vue({\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("el")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#app'")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": { App },\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("template")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'<App/>'")]),t._v(",\n});\n")])]),t._v(" "),e("blockquote",[e("p",[t._v("All the components in antd are listed in the sidebar.")])]),t._v(" "),e("h3",{attrs:{id:"4.-Component-list"}},[t._v("4. Component list "),e("a",{staticClass:"anchor",attrs:{href:"#4.-Component-list","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/vueComponent/ant-design-vue/blob/master/site/components.js"}},[t._v("Component list")])]),t._v(" "),e("h2",{attrs:{id:"Compatibility"}},[t._v("Compatibility "),e("a",{staticClass:"anchor",attrs:{href:"#Compatibility","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("p",[t._v("Ant Design Vue supports all the modern browsers and IE9+.")]),t._v(" "),e("p",[t._v("You need to provide "),e("a",{attrs:{href:"https://github.com/es-shims/es5-shim"}},[t._v("es5-shim")]),t._v(" and "),e("a",{attrs:{href:"https://github.com/paulmillr/es6-shim"}},[t._v("es6-shim")]),t._v(" and other polyfills for IE browsers.")]),t._v(" "),e("p",[t._v("If you are using babel, we strongly recommend using "),e("a",{attrs:{href:"https://babeljs.io/docs/usage/polyfill/"}},[t._v("babel-polyfill")]),t._v(" and "),e("a",{attrs:{href:"https://babeljs.io/docs/plugins/transform-runtime/"}},[t._v("babel-plugin-transform-runtime")]),t._v(" instead of those two shims.")]),t._v(" "),e("blockquote",[e("p",[t._v("Please avoid using both the babel and shim methods at the same time.")])]),t._v(" "),e("h2",{attrs:{id:"Import-on-Demand"}},[t._v("Import on Demand "),e("a",{staticClass:"anchor",attrs:{href:"#Import-on-Demand","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("p",[t._v("If you see logs like below screenshot, you might be importing all components by writing "),e("code",{pre:!0},[t._v("import { Button } from 'ant-design-vue';")]),t._v(". This will affect your app's network performance.")]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":""}},[t._v("You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.\n")])]),t._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:""}})])]),t._v(" "),e("p",[t._v("However, we can import individual components on demand:")]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Button "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ant-design-vue/lib/button'")]),t._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ant-design-vue/lib/button/style'")]),t._v("; "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// or ant-design-vue/lib/button/style/css for css format file")]),t._v("\n")])]),t._v(" "),e("p",[t._v("We strongly recommend using "),e("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[t._v("babel-plugin-import")]),t._v(", which can convert the following code to the 'antd/lib/xxx' way:")]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Button } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ant-design-vue'")]),t._v(";\n")])]),t._v(" "),e("p",[t._v("And this plugin can load styles too, read "),e("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import#usage"}},[t._v("usage")]),t._v(" for more details.")]),t._v(" "),e("blockquote",[e("p",[t._v("FYI, babel-plugin-import's "),e("code",{pre:!0},[t._v("style")]),t._v(" option will importing some global reset styles, don't use it if you don't need those styles. You can import styles manually via "),e("code",{pre:!0},[t._v("import 'ant-design-vue/dist/antd.css'")]),t._v(" and override the global reset styles.")])]),t._v(" "),e("h2",{attrs:{id:"Customization"}},[t._v("Customization "),e("a",{staticClass:"anchor",attrs:{href:"#Customization","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"/docs/vue/customize-theme"}},[t._v("Customize Theme")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"}},[t._v("Local Iconfont")])])]),t._v(" "),e("h2",{attrs:{id:"Tips"}},[t._v("Tips "),e("a",{staticClass:"anchor",attrs:{href:"#Tips","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("ul",[e("li",[t._v("You can use any "),e("code",{pre:!0},[t._v("npm")]),t._v(" modules.")]),t._v(" "),e("li",[t._v("Although Vue's official recommended template to write components, JSX is a better choice for complex components.")])])])}],!1,null,null,null);n.options.__file="docs/vue/getting-started.en-US.md";s.default=n.exports}}]);