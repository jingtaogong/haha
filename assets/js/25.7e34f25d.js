(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{610:function(v,_,t){"use strict";t.r(_);var r=t(1),s=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"cdn和cos是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn和cos是什么"}},[v._v("#")]),v._v(" CDN和COS是什么")]),v._v(" "),t("p",[t("strong",[v._v("CDN")]),v._v("：内容分发网络（Content Delivery Network，CDN），是在现有 Internet 中增加的一层新的网络架构，由遍布全球的高性能加速节点构成。这些高性能的服务节点都会按照一定的缓存策略存储您的业务内容，当您的用户向您的某一业务内容发起请求时，请求会被调度至最接近用户的服务节点，直接由服务节点快速响应，有效降低用户访问延迟，提升可用性。")]),v._v(" "),t("p",[t("strong",[v._v("腾讯云叫COS，阿里云叫OSS。他们是同一个东西")])]),v._v(" "),t("p",[t("strong",[v._v("COS")]),v._v("：对象存储（Cloud Object Storage，COS）是腾讯云提供的一种存储海量文件的分布式存储服务，用户可通过网络随时存储和查看数据。腾讯云 COS 使所有用户都能使用具备高扩展性、低成本、可靠和安全的数据存储服务。")]),v._v(" "),t("p",[v._v("COS 通过控制台、API、SDK 和工具等多样化方式简单、快速地接入，实现了海量数据存储和管理。通过 COS 可以进行多格式文件的上传、下载和管理。腾讯云提供了直观的 Web 管理界面，同时遍布全国范围的 CDN 节点可以对文件下载进行加速。")]),v._v(" "),t("p",[t("strong",[v._v("￥&……￥HGSDFS ，他在说什么啊")])]),v._v(" "),t("h3",{attrs:{id:"细说cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#细说cdn"}},[v._v("#")]),v._v(" 细说CDN")]),v._v(" "),t("p",[v._v("首先我们要知道我们自己的网络服务器叫"),t("strong",[v._v("源站")]),v._v("，腾讯云访问你服务器的过程叫"),t("strong",[v._v("回源")])]),v._v(" "),t("p",[v._v("腾讯云在全国各地有服务器，比如说东南西北各一台，然后中间有一台主的服务器")]),v._v(" "),t("p",[v._v("CDN是内容分发网络，他会访问一遍你的网站的，然后把你网站的一些内容缓存到主服务器上，分发给不同地区的服务器")]),v._v(" "),t("p",[v._v("当用户需要访问你的网站的时候，他可以从距离最近的服务器上获取资源")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://chanx-1251137349.file.myqcloud.com/image-20200724211306537.png",alt:"image-20200724211306537"}})]),v._v(" "),t("p",[t("img",{attrs:{src:"https://chanx-1251137349.file.myqcloud.com/image-20200724212250162.png",alt:"image-20200724212250162"}})]),v._v(" "),t("p",[v._v("联系日常生活来看，其实京东自营仓库跟这个就差不多")]),v._v(" "),t("p",[v._v("京东自营为什么能做到次日达，因为他在好几个地方建了仓库")]),v._v(" "),t("p",[v._v("比如他卖一个小饼干，他会在华南华北华东华西都分别储备一些小饼干")]),v._v(" "),t("p",[v._v("我广东地区的人买小饼干，他就直接在华南仓库发货")]),v._v(" "),t("p",[v._v("山东地区的人买小饼干，他就华北仓库发货")]),v._v(" "),t("p",[v._v("这样子就大大减少了物流时间，实现快速送货")]),v._v(" "),t("p",[v._v("而往往淘宝店都是些小店，他的店在广东，你在东北下单，商品不得不跨越大中国才到你的手里")]),v._v(" "),t("h3",{attrs:{id:"细说cos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#细说cos"}},[v._v("#")]),v._v(" 细说COS")]),v._v(" "),t("p",[v._v("这个...我也不太懂啦")]),v._v(" "),t("p",[v._v("大概就是你只需要把重心放在文件上，如何安全地存储和传输文件都是他帮你做的")]),v._v(" "),t("p",[v._v("多样化的接入方式和多节点的存储，让你使用数据更加方便")]),v._v(" "),t("p",[v._v("前者就是不同的api文档啦，要用什么就看什么文档")]),v._v(" "),t("p",[v._v("后者就是什么多备份防止丢失、CDN加速等等")]),v._v(" "),t("h2",{attrs:{id:"利用cdn和cos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用cdn和cos"}},[v._v("#")]),v._v(" 利用CDN和COS")]),v._v(" "),t("p",[v._v("COS可以用来放图片、文档什么的静态资源（就是不会变的那些")]),v._v(" "),t("p",[v._v("因为它云服务器的访问和传输速度当然比我自己的辣鸡小服务器快")]),v._v(" "),t("p",[v._v("我的辣鸡小服务器才5Mbps，放几张图片去访问就要等半天加载")]),v._v(" "),t("p",[v._v("如果是一张8M大图，那就呵呵呵呵呵呵呵呵呵")]),v._v(" "),t("p",[v._v("有了COS访问速度已经不错了，我们还可以用CDN进行优化")]),v._v(" "),t("p",[v._v("将COS的内容分发各地，能避免同一时间对COS的集中访问")]),v._v(" "),t("p",[v._v("对于我这种小破站来说，用COS或者CDN其中一个都是足够了")]),v._v(" "),t("p",[v._v("小破站主要是图片资源瞬间占用带宽严重，任意一个都能解决我目前遇到的问题")]),v._v(" "),t("p",[v._v("其实小破站也就自己访问比较多....等一会才多大事")]),v._v(" "),t("p",[v._v("但是！！！能白嫖的CDN和COS谁不喜欢呢？（滑稽）")]),v._v(" "),t("p",[v._v("CDN的使用大概就是把域名原来指向源站ip改成指向CDN服务器，然后在CDN里设置好源站IP和相关访问限制（如跨域、防盗链")]),v._v(" "),t("p",[v._v("COS最好是使用相关的客户端，因为我更多的时写Markdown时引入图片，所以我是配合"),t("strong",[v._v("Typora软件")]),v._v("和"),t("strong",[v._v("PicGo自动上传图片")]),v._v("使用")]),v._v(" "),t("p",[v._v("PicGo相关配置我应该会用一篇文章记录")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[v._v("部分文章内容来自"),t("a",{attrs:{href:"https://cloud.tencent.com/document/product",target:"_blank",rel:"noopener noreferrer"}},[v._v("腾讯云"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=s.exports}}]);