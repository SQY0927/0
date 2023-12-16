//监控消息发送
let myDom = document.querySelector("#bili_downloader")
if (typeof origBiliOpen == "undefined") {
    var origBiliOpen = XMLHttpRequest.prototype.open;
  }
  XMLHttpRequest.prototype.open = function () {
    this.addEventListener("load",function(){
      try {
        if (
          this.responseURL.includes("bvc.bilivideo.com/pbp/data") && this.responseURL.includes("cid=") && (location.href.includes("bilibili.com/video") || location.href.includes("bilibili.com/bangumi/play") )) {
          myDom.setAttribute("cid",parseQuery(this.responseURL).cid)
        }
      } catch (error) {
        console.log("can not addlistener");
      }
    })
    origBiliOpen.apply(this, arguments);
}

var parseQuery = function (query) {
  var reg = /([^=&\s]+)[=\s]*([^&\s]*)/g;
  var obj = {};
  while (reg.exec(query)) {
      obj[RegExp.$1] = RegExp.$2;
  }
  return obj;
}
