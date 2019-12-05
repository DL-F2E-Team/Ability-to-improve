(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{202:function(e,s,o){"use strict";o.r(s);var i=o(2),t=Object(i.a)({},function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"bom"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bom","aria-hidden":"true"}},[e._v("#")]),e._v(" BOM")]),e._v(" "),o("h2",{attrs:{id:"web-storage、cookie、session的区别"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#web-storage、cookie、session的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" 🔖 web storage、cookie、session的区别")]),e._v(" "),o("h3",{attrs:{id:"cookie、session区别"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie、session区别","aria-hidden":"true"}},[e._v("#")]),e._v(" cookie、session区别")]),e._v(" "),o("ol",[o("li",[e._v("保持状态：")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("cookie")]),e._v(" 保存在浏览器端，")]),e._v(" "),o("li",[o("code",[e._v("session")]),e._v(" 保存在服务器端。")])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("使用方式：")])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("cookie机制")]),e._v("：如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，\n这种cookie简称"),o("strong",[e._v("会话cookie")]),e._v("。如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，\ncookie数据仍然存在，直到过期时间结束才消失。cookie是服务器发给客户端的特殊信息，cookie是以文本的方式保存在客户端，每次请求时都带上它")]),e._v(" "),o("li",[o("strong",[e._v("session机制")]),e._v("：当服务器收到请求需要创建session对象时，首先会检查客户端请求中是否包含sessionid。如果\n有sessionid，服务器将根据该id返回对应session对象。如果客户端请求中没有sessionid，服务器会创建新的\nsession对象，并把sessionid在本次响应中返回给客户端。通常使用cookie方式存储sessionid到客户端，在交互\n中浏览器按照规则将sessionid发送给服务器。如果用户禁用cookie，则要使用URL重写，可以通过\nresponse.encodeURL(url) 进行实现；API对encodeURL的结束为，当浏览器支持Cookie时，url不做任何处理；当\n浏览器不支持Cookie的时候，将会重写URL将SessionID拼接到访问地址后。")])]),e._v(" "),o("p",[e._v("3、存储内容：")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("cookie")]),e._v(" 只能保存字符串类型，以文本的方式；")]),e._v(" "),o("li",[o("code",[e._v("session")]),e._v(" 通过类似与Hashtable的数据结构来保存，能支持任何类型的对象(session中可含有多个对象)")])]),e._v(" "),o("p",[e._v("4、存储的大小：")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("cookie")]),e._v(" 单个保存的数据不能超过4kb；")]),e._v(" "),o("li",[o("code",[e._v("session")]),e._v(" 大小没有限制。")])]),e._v(" "),o("p",[e._v("5、安全性：cookie：针对cookie所存在的攻击：Cookie欺骗，Cookie截获；session的安全性大于cookie。")]),e._v(" "),o("p",[e._v("原因如下：")]),e._v(" "),o("ul",[o("li",[e._v("sessionID存储在cookie中，若要攻破session首先要攻破cookie；")]),e._v(" "),o("li",[e._v("sessionID是要有人登录，或者启动session_start才会有，所以攻破cookie也不一定能得到sessionID；")]),e._v(" "),o("li",[e._v("第二次启动session_start后，前一次的sessionID就是失效了，session过期后，sessionID也随之失效。")]),e._v(" "),o("li",[e._v("sessionID是加密的")]),e._v(" "),o("li",[e._v("综上所述，攻击者必须在短时间内攻破加密的sessionID，这很难。")])]),e._v(" "),o("h3",{attrs:{id:"web-storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#web-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" web storage")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sessionStorage")]),e._v("：将数据保存在session对象中。所谓session，是指用户在浏览某个网站时，从进入网站到\n浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间。session对象可以用来保存在这段时间内所要求保存的任何数据。")]),e._v(" "),o("li",[o("code",[e._v("localStorage")]),e._v("：将数据保存在客户端本地的硬件设备(通常指硬盘，也可以是其他硬件设备)中，即使浏览器被关闭了，该数据仍然存在，下次打开浏览器访问网站时仍然可以继续使用。")])]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("setItem (key, value) ——  保存数据，以键值对的方式储存信息\ngetItem (key) ——  获取数据，将键值传入，即可获取到对应的value值\nremoveItem (key) ——  删除单个数据，根据键值移除对应的信息\nclear () ——  删除所有的数据\nkey (index) —— 获取某个索引的key\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br"),o("span",{staticClass:"line-number"},[e._v("5")]),o("br")])]),o("h3",{attrs:{id:"区别"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#区别","aria-hidden":"true"}},[e._v("#")]),e._v(" 区别")]),e._v(" "),o("ul",[o("li",[e._v("生命周期："),o("code",[e._v("sessionStorage")]),e._v(" 临时保存（同源的窗口中始终存在的数据），"),o("code",[e._v("localStorage")]),e._v(" 永久保存")]),e._v(" "),o("li",[e._v("存储大小：一般都是"),o("strong",[e._v("5MB")]),e._v(", "),o("code",[e._v("cookie")]),e._v(" 是 "),o("strong",[e._v("4KB")])]),e._v(" "),o("li",[e._v("存储位置：都在客户端")]),e._v(" "),o("li",[e._v("存储类型：字符串类型（JSON.stringify）")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/pengc/p/8714475.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("cookies、sessionStorage和localStorage解释及区别"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"todo-list"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#todo-list","aria-hidden":"true"}},[e._v("#")]),e._v(" todo list")]),e._v(" "),o("ul",[o("li",[e._v("getComputedStyle")]),e._v(" "),o("li",[e._v("window.getComputedStyle == document.defaultView.getComputedStyle")]),e._v(" "),o("li",[e._v('window.getComputedStyle(elem, null).getPropertyValue("height")\nwindow.getComputedStyle(elem, null).getPropertyValue("height")可能的值为100px，而且，就算是css上写的是inherit，getComputedStyle也会把它最终计算出来的。不过注意，如果元素的背景色透明，那么getComputedStyle获取出来的就是透明的这个背景（因为透明本身也是有效的），而不会是父节点的背景。所以它不一定是最终显示的颜色。')]),e._v(" "),o("li",[e._v("getComputedStyle会引起回流，因为它需要获取祖先节点的一些信息进行计算（譬如宽高等），所以用的时候慎用，回流会引起性能问题。")]),e._v(" "),o("li",[e._v("其他回流：offsetXXX，scrollXXX，clientXXX，currentStyle")])])])},[],!1,null,null,null);s.default=t.exports}}]);