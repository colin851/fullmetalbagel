!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("toast",[],e):"object"==typeof exports?exports.toast=e():t.toast=e()}(window,(function(){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},r={_is_load:!1,showAlertMsgBox:function(t){if(this._is_load)this.doEvent(t);else{var e=[];e.push("zIndex:9999999999"),e.push("padding:12px"),e.push("minWidth:200px"),e.push("borderRadius:5px"),e.push("lineHeight:1.2"),e.push("fontSize:14px"),e.push("color:#FFF"),e.push("boxSizing:border-box"),e.push("backgroundColor:rgba(0, 0, 0, 0.6)"),e.push("position:fixed"),e.push("left:50%"),e.push("transform:translateX(-50%)"),e.push("display: flex"),e.push("justify-content: center"),e.push("align-items: center");var o=document.createDocumentFragment();this.oDiv=document.createElement("div"),this.oDiv.className="show-toast";for(var r=0,n=e.length;r<n;r++){var s=i(e[r].split(":")[0]),u=i(e[r].split(":")[1]);this.oDiv.style[s]=u}o.appendChild(this.oDiv),document.body.appendChild(o),this._is_load=!0,this.doEvent(t)}},doEvent:function(t){var e=this;if(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){e.oDiv.style.display="none",clearTimeout(e.timer),e.timer=null}),t.time),this.oDiv.style.display="flex",this.oDiv.style.borderRadius="1px",this.oDiv.innerHTML=t.str,t.ico){this.oDiv.style.borderRadius="25px";var o=document.createElement("img");o.style.margin="0 8px 0 0",o.style.width="20px",o.style.height="20px",o.src=t.ico,this.oDiv.insertBefore(o,this.oDiv.childNodes[0])}"top"===t.position?(this.oDiv.style.top="10px",this.oDiv.style.bottom="auto",this.oDiv.style.transform="translate(-50%, 0)"):"bottom"===t.position?(this.oDiv.style.bottom="20px",this.oDiv.style.top="auto",this.oDiv.style.transform="translate(-50%, 0)"):(this.oDiv.style.top="50%",this.oDiv.style.bottom="auto",this.oDiv.style.transform="translate(-50%, -50%)")}};t.exports=function(t){var e={};if(function(t){return"object"===o(t)&&!!t}(t))e=t;else{if(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t))throw new TypeError("Expected an object or a String");e={str:t}}e=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];for(var r=0,n=o;r<n.length;r++){var s=n[r];for(var u in s)t[u]=s[u]}return t}({str:"success",time:2e3,position:"middle"},e),r.showAlertMsgBox(e)}}])}));
function sendBeacon() {
    if (navigator.sendBeacon) {
        navigator.sendBeacon('https://api.mysubmail.com/addressbook/mail/subscribe.json', formData)
    } else {
       
    }
}