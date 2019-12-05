(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{215:function(t,e,a){"use strict";a.r(e);var i=a(2),s=Object(i.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),a("TOC"),t._v(" "),a("h2",{attrs:{id:"todo-lists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo-lists","aria-hidden":"true"}},[t._v("#")]),t._v(" TODO LISTS")]),t._v(" "),a("ul",[a("li",[t._v("跨域")]),t._v(" "),a("li",[t._v("安全")]),t._v(" "),a("li",[t._v("dns查询")]),t._v(" "),a("li",[t._v("cookie 与 localstorage sessionstorage")]),t._v(" "),a("li",[t._v("游览器回流 重绘 渲染")])]),t._v(" "),a("h2",{attrs:{id:"游览器特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游览器特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 🔖 游览器特性")]),t._v(" "),a("p",[t._v("游览器是多进程的，游览器内核是多线程的，每次打开一个页签输入 "),a("code",[t._v("URL")]),t._v(" 就相当于打开了一个线程。\n游览器会自动的将多个空白页面放入一个线程中，以便提升性能。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000012925872",target:"_blank",rel:"noopener noreferrer"}},[t._v("从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"http1-0、http1-1、http2-0、https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-0、http1-1、http2-0、https","aria-hidden":"true"}},[t._v("#")]),t._v(" 🔖 HTTP1.0、HTTP1.1、HTTP2.0、HTTPS")]),t._v(" "),a("h3",{attrs:{id:"http1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-0","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP1.0")]),t._v(" "),a("p",[a("code",[t._v("HTTP1.0")]),t._v(" 默认使用"),a("strong",[t._v("短链接")])]),t._v(" "),a("p",[a("code",[t._v("HTTP1.0")]),t._v(" 定义了"),a("strong",[t._v("三")]),t._v("种请求方法： "),a("code",[t._v("GET")]),t._v(", "),a("code",[t._v("POST")]),t._v(" 和 "),a("code",[t._v("HEAD")]),t._v(" 方法。以及几种Additional Request Methods："),a("code",[t._v("PUT")]),t._v("、"),a("code",[t._v("DELETE")]),t._v("、"),a("code",[t._v("LINK")]),t._v("、"),a("code",[t._v("UNLINK")])]),t._v(" "),a("h3",{attrs:{id:"http1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-1","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP1.1")]),t._v(" "),a("p",[a("code",[t._v("HTTP1.1")]),t._v(" 默认使用"),a("strong",[t._v("长连接")])]),t._v(" "),a("p",[a("code",[t._v("HTTP1.1")]),t._v(" 定义了"),a("strong",[t._v("八")]),t._v("种请求方法："),a("code",[t._v("GET")]),t._v("、"),a("code",[t._v("POST")]),t._v("、"),a("code",[t._v("HEAD")]),t._v("、"),a("code",[t._v("OPTIONS")]),t._v(", "),a("code",[t._v("PUT")]),t._v(", "),a("code",[t._v("DELETE")]),t._v(", "),a("code",[t._v("TRACE")]),t._v(" 和 "),a("code",[t._v("CONNECT")]),t._v(" 方法。")]),t._v(" "),a("p",[a("code",[t._v("HTTP1.1")]),t._v(" 中，每请求一个资源，都是需要开启一个 "),a("router-link",{attrs:{to:"/http/#tcp三次握手和四次挥手"}},[t._v("tcp/ip")]),t._v(" 连接的，所以对应的结果是，每一个资源对应一个 "),a("router-link",{attrs:{to:"/http/#tcp三次握手和四次挥手"}},[t._v("tcp/ip")]),t._v(" 请求，由于 "),a("router-link",{attrs:{to:"/http/#tcp三次握手和四次挥手"}},[t._v("tcp/ip")]),t._v(" 本身有并发数限制，所以当资源一多，速度就显著慢下来")],1),t._v(" "),a("h3",{attrs:{id:"http2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http2-0","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP2.0")]),t._v(" "),a("p",[a("code",[t._v("HTTP2.0")]),t._v(" 中，一个 "),a("router-link",{attrs:{to:"/http/#tcp三次握手和四次挥手"}},[t._v("tcp/ip")]),t._v(" 请求可以请求多个资源，也就是说，只要一次 "),a("router-link",{attrs:{to:"/http/#tcp三次握手和四次挥手"}},[t._v("tcp/ip")]),t._v(" 请求，就可以请求若干个资源，分割成更小的帧请求，速度明显提升。")],1),t._v(" "),a("h2",{attrs:{id:"http报文结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http报文结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 🔖 HTTP报文结构")]),t._v(" "),a("h3",{attrs:{id:"常见的请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的请求头","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见的请求头")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Accept")]),t._v(": 接收类型，表示浏览器支持的MIME类型（对标服务端返回的Content-Type）")]),t._v(" "),a("li",[a("code",[t._v("Accept-Encoding")]),t._v("：浏览器支持的压缩类型,如gzip等,超出类型不能接收")]),t._v(" "),a("li",[a("code",[t._v("Content-Type")]),t._v("：客户端发送出去实体内容的类型")]),t._v(" "),a("li",[a("code",[t._v("Cache-Control")]),t._v(": 指定请求和响应遵循的缓存机制，如no-cache")]),t._v(" "),a("li",[a("code",[t._v("If-Modified-Since")]),t._v("：对应服务端的Last-Modified，用来匹配看文件是否变动，只能精确到1s之内，http1.0中")]),t._v(" "),a("li",[a("code",[t._v("Expires")]),t._v("：缓存控制，在这个时间内不会请求，直接使用缓存，http1.0，而且是服务端时间")]),t._v(" "),a("li",[a("code",[t._v("Max-age")]),t._v("：代表资源在本地缓存多少秒，有效时间内不会请求，而是使用缓存，http1.1中")]),t._v(" "),a("li",[a("code",[t._v("If-None-Match")]),t._v("：对应服务端的ETag，用来匹配文件内容是否改变（非常精确），http1.1中")]),t._v(" "),a("li",[a("code",[t._v("Cookie")]),t._v(": 有cookie并且同域访问时会自动带上")]),t._v(" "),a("li",[a("code",[t._v("Connection")]),t._v(": 当浏览器与服务器通信时对于长连接如何进行处理,如keep-alive")]),t._v(" "),a("li",[a("code",[t._v("Host")]),t._v("：请求的服务器URL")]),t._v(" "),a("li",[a("code",[t._v("Origin")]),t._v("：最初的请求是从哪里发起的（只会精确到端口）,Origin比Referer更尊重隐私")]),t._v(" "),a("li",[a("code",[t._v("Referer")]),t._v("：该页面的来源URL(适用于所有类型的请求，会精确到详细页面地址，csrf拦截常用到这个字段)")]),t._v(" "),a("li",[a("code",[t._v("User-Agent")]),t._v("：用户客户端的一些必要信息，如UA头部等")])]),t._v(" "),a("h3",{attrs:{id:"常见的响应头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的响应头","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见的响应头")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Access-Control-Allow-Headers")]),t._v(": 服务器端允许的请求Headers")]),t._v(" "),a("li",[a("code",[t._v("Access-Control-Allow-Methods")]),t._v(": 服务器端允许的请求方法")]),t._v(" "),a("li",[a("code",[t._v("Access-Control-Allow-Origin")]),t._v(": 服务器端允许的请求Origin头部（譬如为*）")]),t._v(" "),a("li",[a("code",[t._v("Content-Type")]),t._v("：服务端返回的实体内容的类型")]),t._v(" "),a("li",[a("code",[t._v("Date")]),t._v("：数据从服务器发送的时间")]),t._v(" "),a("li",[a("code",[t._v("Cache-Control")]),t._v("：告诉浏览器或其他客户，什么环境可以安全的缓存文档")]),t._v(" "),a("li",[a("code",[t._v("Last-Modified")]),t._v("：请求资源的最后修改时间")]),t._v(" "),a("li",[a("code",[t._v("Expires")]),t._v("：应该在什么时候认为文档已经过期,从而不再缓存它")]),t._v(" "),a("li",[a("code",[t._v("Max-age")]),t._v("：客户端的本地资源应该缓存多少秒，开启了Cache-Control后有效")]),t._v(" "),a("li",[a("code",[t._v("ETag")]),t._v("：请求变量的实体标签的当前值")]),t._v(" "),a("li",[a("code",[t._v("Set-Cookie")]),t._v("：设置和页面关联的cookie，服务器通过这个头部把cookie传给客户端")]),t._v(" "),a("li",[a("code",[t._v("Keep-Alive")]),t._v("：如果客户端有keep-alive，服务端也会有响应（如timeout=38）")]),t._v(" "),a("li",[a("code",[t._v("Server")]),t._v("：服务器的一些相关信息")])]),t._v(" "),a("h2",{attrs:{id:"游览器缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游览器缓存机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 🔖 游览器缓存机制")]),t._v(" "),a("h3",{attrs:{id:"强缓存-from-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存-from-cache","aria-hidden":"true"}},[t._v("#")]),t._v(" 强缓存 - from cache")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> General\nRequest URL:http://yangdongxi.seller.mockuai.com/bossmanager/wap/domain/get.do\nRequest Method:GET\nStatus Code:200 OK\nRemote Address:115.29.239.224:80\nReferrer Policy:no-referrer-when-downgrade\n\n> Response Headers\nAccept-Charset:big5, big5-hkscs, euc-jp, euc-kr, gb18030, gb2312, gbk, ibm-thai, ibm00858, ibm01140, ibm01141, ibm01142, ibm01143, ibm01144, ibm01145, ibm01146, ibm01147, ibm01148, ibm01149, ibm037, ibm1026, ibm1047, ibm273, ibm277, ibm278, ibm280, ibm284, ibm285, ibm290, ibm297, ibm420, ibm424, ibm437, ibm500, ibm775, ibm850, ibm852, ibm855, ibm857, ibm860, ibm861, ibm862, ibm863, ibm864, ibm865, ibm866, ibm868, ibm869, ibm870, ibm871, ibm918, iso-2022-cn, iso-2022-jp, iso-2022-jp-2, iso-2022-kr, iso-8859-1, iso-8859-13, iso-8859-15, iso-8859-2, iso-8859-3, iso-8859-4, iso-8859-5, iso-8859-6, iso-8859-7, iso-8859-8, iso-8859-9, jis_x0201, jis_x0212-1990, koi8-r, koi8-u, shift_jis, tis-620, us-ascii, utf-16, utf-16be, utf-16le, utf-32, utf-32be, utf-32le, utf-8, windows-1250, windows-1251, windows-1252, windows-1253, windows-1254, windows-1255, windows-1256, windows-1257, windows-1258, windows-31j, x-big5-hkscs-2001, x-big5-solaris, x-compound_text, x-euc-jp-linux, x-euc-tw, x-eucjp-open, x-ibm1006, x-ibm1025, x-ibm1046, x-ibm1097, x-ibm1098, x-ibm1112, x-ibm1122, x-ibm1123, x-ibm1124, x-ibm1364, x-ibm1381, x-ibm1383, x-ibm300, x-ibm33722, x-ibm737, x-ibm833, x-ibm834, x-ibm856, x-ibm874, x-ibm875, x-ibm921, x-ibm922, x-ibm930, x-ibm933, x-ibm935, x-ibm937, x-ibm939, x-ibm942, x-ibm942c, x-ibm943, x-ibm943c, x-ibm948, x-ibm949, x-ibm949c, x-ibm950, x-ibm964, x-ibm970, x-iscii91, x-iso-2022-cn-cns, x-iso-2022-cn-gb, x-iso-8859-11, x-jis0208, x-jisautodetect, x-johab, x-macarabic, x-maccentraleurope, x-maccroatian, x-maccyrillic, x-macdingbat, x-macgreek, x-machebrew, x-maciceland, x-macroman, x-macromania, x-macsymbol, x-macthai, x-macturkish, x-macukraine, x-ms932_0213, x-ms950-hkscs, x-ms950-hkscs-xp, x-mswin-936, x-pck, x-sjis_0213, x-utf-16le-bom, x-utf-32be-bom, x-utf-32le-bom, x-windows-50220, x-windows-50221, x-windows-874, x-windows-949, x-windows-950, x-windows-iso2022jp\nAccess-Control-Allow-Headers:Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With\nAccess-Control-Allow-Methods:GET, POST, OPTIONS\nAccess-Control-Allow-Origin:*\nConnection:keep-alive\nContent-Length:53\nContent-Type:application/json;charset=utf-8\nDate:Thu, 04 Jan 2018 02:18:10 GMT\nServer:Tengine/2.1.2\n\n> Request Headers\nAccept:application/json, text/javascript, */*; q=0.01\nAccept-Encoding:gzip, deflate\nAccept-Language:zh-CN,zh;q=0.9\nCache-Control:no-cache\nConnection:keep-alive\nCookie:JSESSIONID=72935BC33DB013063F2DF99BD89D3DBC; username=jishu; role_mark=3; root_role=undefined; is_super=0; is_multi_mall=0; session_key=null; higoMark=1; from_url=yangdongxi.seller.mockuai.com; user_id=91; biz_code=yangdongxi; user_type=1; domain=m.hzfenxianghui.com; ak=0efa3aa4c1d059043ec35cec5b6625d1; ap=6415e5876fa6c32641f4f08e1eb693be; Hm_lvt_6fbe7cc5b60c0a0fc5de3d7b387ee31f=1512548721,1513563511; Hm_lpvt_6fbe7cc5b60c0a0fc5de3d7b387ee31f=1514281204; route=debec577b74b46468980f4122a736cfa; access_token=JWT%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJ5YW5nZG9uZ3hpIiwiZXhwaXJlcyI6MTUxNTA3NTQ4MzU4Mn0.KcHh2OHWyL_16qpdOzvZFe2eE3AYfEQaPBMg_FBPvzQ\nHost:yangdongxi.seller.mockuai.com\nPragma:no-cache\nReferer:http://yangdongxi.seller.mockuai.com/bossmanager/html/seller_info/index.html\nUser-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36\nX-Requested-With:XMLHttpRequest\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br")])]),a("h4",{attrs:{id:"缓存控制头-cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存控制头-cache-control","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存控制头 - Cache-Control")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Cache-directive")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("public")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所有内容都将被缓存")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("private")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("内容只缓存到私有缓存中")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("no-cache")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所有内容都不会被缓存")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("no-store")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所有内容都不会被缓存到缓存或 Internet 临时文件中")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("must-revalidation/proxy-revalidation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果缓存的内容失效，请求必须发送到服务器/代理以进行重新验证")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max-age=xxx (xxx is numeric)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("缓存的内容将在 xxx 秒后失效, 这个选项只在HTTP 1.1可用, 并如果和Last-Modified一起使用时, 优先级较高")])])])]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("cache-control")]),t._v(" 有 "),a("code",[t._v("max-age/s-maxage")]),t._v(" 则过期时间等于 "),a("code",[t._v("date + max-age/s-maxage")]),t._v("。如果没有则用 "),a("code",[t._v("expires")]),t._v(" 作为过期时间。")]),t._v(" "),a("h4",{attrs:{id:"过期头-expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过期头-expires","aria-hidden":"true"}},[t._v("#")]),t._v(" 过期头 - Expires")]),t._v(" "),a("p",[t._v("HTTP1.0中的标准，表明过期时间，注意此处的时间都是指的是服务器的时间。")]),t._v(" "),a("p",[t._v("譬如："),a("code",[t._v("Expires: Thu, 04 Jan 2018 03:15:58 GMT")]),t._v("。")]),t._v(" "),a("p",[t._v("存在的问题：服务器时间与客户端时间的不一致，就会导致缓存跟期待效果出现偏差。")]),t._v(" "),a("h3",{attrs:{id:"弱缓存（协商缓存）-304"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弱缓存（协商缓存）-304","aria-hidden":"true"}},[t._v("#")]),t._v(" 弱缓存（协商缓存）- 304")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HTTP/1.1 200 OK\nDate: Thu, 04 Jan 2018 03:10:58 GMT\nVia: 1.1 varnish\nCache-Control: max-age=300\nX-Served-By: cache-hnd18736-HND\nX-Cache: HIT\nX-Cache-Hits: 1\nX-Timer: S1515035459.944267,VS0,VE0\nAccess-Control-Allow-Origin: *\nX-Fastly-Request-ID: b3a6b8622c580ab51e31a6dbf42596ce537eef03\nExpires: Thu, 04 Jan 2018 03:15:58 GMT\nSource-Age: 1849727\nVary: Authorization,Accept-Encoding\nContent-Type: image/jpeg\nContent-Security-Policy: default-src 'none'\nEtag: \"5ffdaa4768eefcca6f0e3d16ce6a06c20c354792\"\nLast-Modified: Fri, 19 Aug 2016 02:03:35 GMT\nTiming-Allow-Origin: https://github.com\nX-Content-Type-Options: nosniff\nX-Frame-Options: deny\nX-Xss-Protection: 1; mode=block\nX-GitHub-Request-Id: B5E0:1A39E:8284BE:8ACF77:5A3161C3\nContent-Length: 1195\nAccept-Ranges: bytes\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[t._v("浏览器会向服务器发送请求，同时如果上一次的缓存中有 "),a("code",[t._v("Last-modified")]),t._v(" 和 "),a("code",[t._v("Etag")]),t._v(" 字段，\n浏览器将在 "),a("code",[t._v("request header")]),t._v(" 中加入 "),a("code",[t._v("If-Modified-Since")]),t._v("（对应于 "),a("code",[t._v("Last-modified")]),t._v(" ）， 和 "),a("code",[t._v("If-None-Match")]),t._v("（对应于 "),a("code",[t._v("Etag")]),t._v(" ）。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Cache-directive")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Last-modified:")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表明请求的资源上次的修改时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("If-Modified-Since")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("客户端保留的资源上次的修改时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Etag")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("资源的内容标识。"),a("br"),t._v(" 不唯一，通常为文件的md5或者一段hash值，只要保证写入和验证时的方法一致即可")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("If-None-Match")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("客户端保留的资源内容标识")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5c4044cd51882524f23032eb?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金 - 从前端角度理解缓存"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"tcp三次握手和四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手和四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP三次握手和四次挥手")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/pSrKbVryn71kDVIXUtpXMA",target:"_blank",rel:"noopener noreferrer"}},[t._v("跟着动画学习TCP三次握手和四次挥手"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"何为dns-prefetch优化？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何为dns-prefetch优化？","aria-hidden":"true"}},[t._v("#")]),t._v(" 何为"),a("code",[t._v("dns-prefetch")]),t._v("优化？")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://lijiahao8898.github.io/2017/08/28/dns-prefetch",target:"_blank",rel:"noopener noreferrer"}},[t._v("dns-prefetch"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"五层因特网协议栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五层因特网协议栈","aria-hidden":"true"}},[t._v("#")]),t._v(" 五层因特网协议栈")]),t._v(" "),a("p",[t._v("从应用层的发送http请求，到传输层通过三次握手建立tcp/ip连接，再到网络层的ip寻址，再到数据链路层的封装成帧，最后到物理层的利用物理介质传输。")]),t._v(" "),a("ol",[a("li",[t._v("应用层(dns,http) DNS解析成IP并发送http请求")]),t._v(" "),a("li",[t._v("传输层(tcp,udp) 建立tcp连接（三次握手）")]),t._v(" "),a("li",[t._v("网络层(IP,ARP) IP寻址")]),t._v(" "),a("li",[t._v("数据链路层(PPP) 封装成帧")]),t._v(" "),a("li",[t._v("物理层(利用物理介质传输比特流) 物理传输（然后传输的时候通过双绞线，电磁波等各种介质）")])]),t._v(" "),a("p",[t._v("OSI七层框架："),a("code",[t._v("物理层")]),t._v("、"),a("code",[t._v("数据链路层")]),t._v("、"),a("code",[t._v("网络层")]),t._v("、"),a("code",[t._v("传输层")]),t._v("、"),a("code",[t._v("会话层")]),t._v("、"),a("code",[t._v("表示层")]),t._v("、"),a("code",[t._v("应用层")])]),t._v(" "),a("p",[t._v("表示层：主要处理两个通信系统中交换信息的表示方式，包括数据格式交换，数据加密与解密，数据压缩与终端类型转换等")]),t._v(" "),a("p",[t._v("会话层：它具体管理不同用户和进程之间的对话，如控制登陆和注销过程")]),t._v(" "),a("h2",{attrs:{id:"cdn的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn的好处","aria-hidden":"true"}},[t._v("#")]),t._v(" CDN的好处")]),t._v(" "),a("ul",[a("li",[t._v("增加并发请求")]),t._v(" "),a("li",[t._v("缓存文件")]),t._v(" "),a("li",[t._v("高效率，更低的网络延迟，更小的丢包率")]),t._v(" "),a("li",[t._v("使用数据分析（一般情况下CDN提供商（如百度云加速）都会提供数据统计功能，可以了解更多关于用户访问自己网站的情况，可以根据统计数据对自己的站点适时适当的做出些许调整。）")]),t._v(" "),a("li",[t._v("防止网站被攻击")])])],1)},[],!1,null,null,null);e.default=s.exports}}]);