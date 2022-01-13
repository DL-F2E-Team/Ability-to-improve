(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{254:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vue-ssr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-ssr"}},[s._v("#")]),s._v(" Vue SSR")]),s._v(" "),t("ul",[t("li",[s._v("利于SEO搜索引擎优化")]),s._v(" "),t("li",[s._v("可以被爬虫抓取")]),s._v(" "),t("li",[s._v("SSR直接将HTML字符串传递给游览器，大大加快首屏加载时间")]),s._v(" "),t("li",[s._v("SSR占用更多的内存和CPU资源")]),s._v(" "),t("li",[s._v("一些常用的游览器API可能无法正常使用")]),s._v(" "),t("li",[s._v("在Vue中只支持 "),t("code",[s._v("beforeCreate")]),s._v(" 和 "),t("code",[s._v("created")]),s._v(" 两个生命周期")])]),s._v(" "),t("h2",{attrs:{id:"nuxtjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nuxtjs"}},[s._v("#")]),s._v(" nuxtjs")]),s._v(" "),t("p",[s._v("在 vue-cli 老版本中使用 "),t("code",[s._v("vue init nuxt/starter")]),s._v("安装，新版本使用"),t("code",[s._v("npx create-nuxt-app 项目名")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"配置ip和端口号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置ip和端口号"}},[s._v("#")]),s._v(" 配置ip和端口号")]),s._v(" "),t("p",[s._v("在 package.json 中")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"config": {\n    "nuxt": {\n      "host": "192.168.18.179",\n      "port": "1818"\n    }\n  },\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"引用css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用css"}},[s._v("#")]),s._v(" 引用css")]),s._v(" "),t("p",[s._v("在 nuxt.config.js 中 css 下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("  css: [\n    'element-ui/lib/theme-chalk/index.css',\n    '~assets/normalize.css'\n  ],\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"配置loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置loader"}},[s._v("#")]),s._v(" 配置loader")]),s._v(" "),t("p",[s._v("在 nuxt.config.js 中 build 下")]),s._v(" "),t("h3",{attrs:{id:"路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[s._v("#")]),s._v(" 路由")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("nuxt-link")])]),s._v(" "),t("p",[s._v("动态路由：创建文件的时候的格式"),t("code",[s._v("_id.vue")])]),s._v(" "),t("p",[s._v("参数校验：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("export default {\n    validate ({params}) {\n        return /^\\d+$/.test(params.id)\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"动画"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[s._v("#")]),s._v(" 动画")]),s._v(" "),t("p",[s._v("nuxt定义好的css名称，全局：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".page-enter-active,.page-leave-active")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"默认模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认模板"}},[s._v("#")]),s._v(" 默认模板")]),s._v(" "),t("p",[s._v("根目录下新建 app.html 使用 "),t("code",[s._v(s._s(s.HEAD))]),s._v(","),t("code",[s._v(s._s(s.APP))])]),s._v(" "),t("h3",{attrs:{id:"错误页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误页面"}},[s._v("#")]),s._v(" 错误页面")]),s._v(" "),t("p",[s._v("pages 下 新建 error.vue")]),s._v(" "),t("h3",{attrs:{id:"个性-meta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#个性-meta"}},[s._v("#")]),s._v(" 个性 meta")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("head () {\n    return {\n        title: '',\n        meta: [{\n        \n        }]\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"异步请求-asyncdata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步请求-asyncdata"}},[s._v("#")]),s._v(" 异步请求 asyncData")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("async asyncData () {\n    let {data} = await axios.get()\n    return {\n        info: data\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])},[],!1,null,null,null);a.default=n.exports}}]);