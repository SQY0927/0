(function(e){function t(t){for(var n,i,c=t[0],s=t[1],a=t[2],u=0,m=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&m.push(l[i][0]),l[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,a||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==l[s]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},l={popup:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var d=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("dffe")},"004b":function(e,t,o){},"6c5c":function(e,t,o){"use strict";o("004b")},dffe:function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),l=function(){var e=this,t=e._self._c;return t("main",{staticClass:"container flex flex-col items-center"},[t("div",{staticClass:"review_show",attrs:{id:"review_show"}},[t("div",{staticClass:"dialog"},[e._m(0),t("div",{staticClass:"close",on:{click:e.clickClose}},[e._v("x")]),t("div",{staticClass:"dialog_line"}),t("div",{staticClass:"select"},[t("div",{staticClass:"refuse",on:{click:e.clickClose}},[t("span",{staticClass:"refuse_span"},[e._v("残忍拒绝")]),t("img",{staticClass:"refuse_img",attrs:{src:"icons/refuse.png"}})]),t("div",{staticClass:"review"},[t("div",{staticClass:"click_review",on:{click:e.clickReview}},[t("span",{staticClass:"review_span"},[e._v("去评论")]),t("svg",{staticClass:"icon",attrs:{t:"1672149083239",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4519",width:"16",height:"16"}},[t("path",{attrs:{d:"M837.9904 570.0608H124.5696a29.0304 29.0304 0 0 1-29.0304-29.0304V482.9696a29.0304 29.0304 0 0 1 29.0304-29.0304h713.4208z",fill:"#337511","p-id":"4520"}}),t("path",{attrs:{d:"M561.3056 808.96l-40.96-40.96a28.928 28.928 0 0 1 0-40.96l215.04-215.04-215.04-215.04a28.9792 28.9792 0 0 1 0-40.96l40.96-40.96a28.9792 28.9792 0 0 1 40.96 0l296.96 296.96-296.96 296.96a28.9792 28.9792 0 0 1-40.96 0z",fill:"#337511","p-id":"4521"}})])])])])])]),e._m(1),t("div",{staticClass:"recommend"},[t("ZbaseTopAdv",{attrs:{browserType:e.browserType}})],1)])},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"dialog_img"},[t("div",{staticClass:"img_content"},[t("img",{staticClass:"dialog_content_img",attrs:{src:"icons/star.jpeg"}})]),t("span",{staticClass:"five_star_span"},[e._v("亲，给个5星好评吧～")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-center px-4 flex-1"},[t("div",{staticClass:"videoTitle text-base svelte-4mjivf",staticStyle:{"text-align":"center"}},[e._v(" 此页面没有可下载的内容~ ")]),t("div",{staticClass:"url text-xs my-4 svelte-4mjivf"}),t("button",{staticClass:"download button text-base text-white py-1 text-center rounded-sm svelte-4mjivf",attrs:{target:"_blank"}},[e._v("暂无下载资源")])])}],i=o("0dbd"),c={data(){return{browserType:"Chrome"}},components:{ZbaseTopAdv:i["a"]},methods:{clickClose(){document.getElementById("review_show").style.display="none",document.getElementsByClassName("container")[0].style.height=""},clickReview(){chrome.storage.local.get(["homepage_url"],e=>{window.open(e.homepage_url)})}},created(){this.browserType=chrome.runtime.getManifest().homepage_url.includes("chrome")?"Chrome":"Edge"}},s=c,a=(o("6c5c"),o("2877")),d=Object(a["a"])(s,l,r,!1,null,null,null),u=d.exports,m=o("5c96");o("0fae");function y(e,t,o){chrome.runtime.sendMessage({action:"sendAli",type:e,control:t,lable:o},(function(e){}))}function p(e){chrome.tabs.sendMessage(e,{cmd:"getInfo"},(function(t){if(!t)return document.querySelector(".download").style.backgroundColor="#909399",void(document.querySelector(".download").style.cursor="not-allowed");if(t.size){if(document.querySelector(".videoTitle").innerText=t.videoName,document.querySelector(".download").style.backgroundColor="rgb(230, 116, 138)",document.querySelector(".download").style.cursor="pointer",document.querySelector(".url").innerHTML='<span style="color:#e74c3d;">Tips: </span> 请在播放器内切换清晰度(登录后可切换更高分辨率)',document.querySelector(".download").innerText=`下载(${h(t.size)})`,!t.allowDownload)return document.querySelector(".download").style.backgroundColor="#909399",document.querySelector(".download").style.cursor="not-allowed",void(document.querySelector(".url").innerText="暂不支持大会员视频下载，敬请期待！");if(t.isDownload)return void v(t,e);document.querySelector(".download").addEventListener("click",()=>{"not-allowed"!==document.querySelector(".download").style.cursor&&(chrome.tabs.sendMessage(e,{cmd:"download"},()=>{v(t,e)}),chrome.storage.local.get(["bili_down_num","review_show","guid_gotry","guid_saylater_num","guid_lastshow_time"],e=>{void 0===e.bili_down_num&&void 0===e.review_show?chrome.storage.local.set({bili_down_num:1,review_show:!1}):(3!==e.bili_down_num||e.review_show?(document.getElementById("review_show").style.display="none",document.getElementsByClassName("container")[0].style.height=""):(document.getElementById("review_show").style.display="block",document.getElementsByClassName("container")[0].style.height="260px",chrome.storage.local.set({review_show:!0})),chrome.storage.local.set({bili_down_num:e.bili_down_num+1}))}))})}else document.querySelector(".videoTitle").innerText="加载中，请稍等...",document.querySelector(".download").style.backgroundColor="#909399",document.querySelector(".download").style.cursor="not-allowed",setTimeout(()=>{p(e)},1e3);return!0}))}chrome.runtime.sendMessage({zbaseType:"zbase-content-init"}),n["default"].component(m["Carousel"].name,m["Carousel"]),n["default"].component(m["CarouselItem"].name,m["CarouselItem"]),new n["default"]({el:"#app",render:e=>e(u)}),chrome.tabs.query({currentWindow:!0,active:!0},e=>{e[0].url&&e[0].url.includes("bilibili.com")?e[0].url.includes("bilibili.com/video")||e[0].url.includes("play/")?p(e[0].id):(document.querySelector(".download").style.backgroundColor="#909399",document.querySelector(".download").style.cursor="not-allowed",document.querySelector(".download").addEventListener("click",()=>{})):(document.querySelector(".download").innerText="Bilibili",document.querySelector(".download").addEventListener("click",()=>{window.open("https://www.bilibili.com/")}))}),document.getElementById("close").addEventListener("click",(function(){document.getElementById("review_show").style.display="none",document.getElementsByClassName("container")[0].style.height=""})),document.getElementById("refuse").addEventListener("click",(function(){document.getElementById("review_show").style.display="none",document.getElementsByClassName("container")[0].style.height=""})),document.getElementById("click_review").addEventListener("click",(function(){chrome.storage.local.get(["homepage_url"],e=>{window.open(e.homepage_url)})}));const w="https://chrome.google.com/webstore/detail/allowcopy/ojenpcpjmgokogndaimfcfokfjapohjd?utm_medium=extension&utm_source=allowcopy",g="https://microsoftedge.microsoft.com/addons/detail/tabtiby-%E6%96%B0%E6%A0%87%E7%AD%BE%E9%A1%B5-%E5%9F%BA%E4%BA%8E%E5%A4%8D%E5%88%B6%E7%A0%B4%E8%A7%A3%E7%9A%84%E4%B8%AA%E6%80%A7%E5%8C%96/bkddoibgfhkmaipcocldadjhhhomipha?utm_medium=extension&utm_source=allowcopy&hl=zh-CN";function f(){y("click","allowCopy","yes"),chrome.storage.local.set({guid_gotry:!0});const e=chrome.runtime.getManifest().homepage_url.includes("chrome");window.open(!0===e?w:g)}function h(e){const t=1073741824,o=1048576;return e>=t?(e/t).toFixed(2)+"GB":e>=o?(e/o).toFixed(2)+"MB":e>=1024?(e/1024).toFixed(2)+"KB":e+"B"}function v(e,t){document.querySelector(".download").style.backgroundColor="#909399",document.querySelector(".download").style.cursor="not-allowed",document.querySelector(".download").innerText=`下载中(${h(e.size)})`,chrome.runtime.onMessage.addListener((o,n,l)=>{"process"===o.action&&n.tab.id===t&&(o.isDownload?document.querySelector(".download").innerText=`下载中(${parseInt(o.process)+"%"})`:(document.querySelector(".download").style.backgroundColor="rgb(230, 116, 138)",document.querySelector(".download").style.cursor="pointer",document.querySelector(".url").innerHTML='<span style="color:#e74c3d;">Tips: </span> 请在播放器内切换清晰度(登录后可切换更高分辨率)',document.querySelector(".download").innerText=`下载(${h(e.size)})`))})}document.getElementById("gotry").addEventListener("click",(function(){f()})),document.getElementById("extdesc").addEventListener("click",(function(){f()})),document.getElementById("later").addEventListener("click",(function(){document.getElementById("guid_dialog").style.display="none",document.getElementsByClassName("container")[0].style.height="",document.getElementsByClassName("container")[0].style.width="",chrome.storage.local.get(["guid_saylater_num"],e=>{const t=void 0===e.guid_saylater_num?1:e.guid_saylater_num+1,o=(new Date).getTime();chrome.storage.local.set({guid_saylater_num:t,guid_lastshow_time:o}),y("click","allowCopy","no")})})),chrome.storage.local.get(["active_time"],(function(e){"undefined"!==e.active_time&&new Date(1e3*Number(e.active_time)).toDateString()===(new Date).toDateString()||(y("active","user_active","popup"),chrome.storage.local.set({active_time:Math.round((new Date).getTime()/1e3).toString()}))})),document.querySelector(".recommend a")&&document.querySelector(".recommend a").addEventListener("click",(function(){y("Popup","toRecommend"),window.open("https://microsoftedge.microsoft.com/addons/detail/allow-copy-%E8%B6%85%E7%BA%A7%E5%A4%8D%E5%88%B6/kiemfnmbpmoajbiipnoenlinpopecaej")}))}});