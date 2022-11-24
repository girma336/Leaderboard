"use strict";(self.webpackChunkLeaderboard=self.webpackChunkLeaderboard||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(166),t.b),p=i()(o()),l=c()(d);p.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url("+l+") no-repeat center center/ cover;\n}\n\nheader {\n  position: absolute;\n  left: 30px;\n  top: 10px;\n  transition: 1s;\n  box-shadow: 8px 8px 16px rgb(25, 119, 44);\n  padding: 8px;\n  border: 2px solid #fff;\n  background-color: #fff;\n}\n\nheader h1 {\n  font-size: 36px;\n  font-weight: 700;\n  background-image: linear-gradient(45deg, #4d0418, #eb1d1d, rgb(214, 146, 57), #eb1d1d);\n  color: transparent;\n  -webkit-background-clip: text;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.leaderboard {\n  display: block;\n  margin-right: 50px;\n  margin-bottom: 20px;\n  margin-left: 20px;\n}\n\n.board-container {\n  background-color: #fff;\n  font-size: 16px;\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n  border: 1px solid #eb1d1d;\n  box-shadow: 10px 0 10px 0 white;\n}\n\n.form-container {\n  margin-right: 20px;\n}\n\n.refresh-btn h2,\n.form-container h2 {\n  font-size: 24px;\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 20px;\n}\n\n.ref-btn {\n  transition: 0.5s;\n  background-color: white;\n  border: 1px solid black;\n  padding: 2px 8px 2px 8px;\n  border-radius: 5px;\n  margin-left: 5px;\n  font-size: 16px;\n  color: #1a70d8ca;\n}\n\ninput {\n  background-color: #fff;\n  box-sizing: border-box;\n  padding: 5px 12px 5px 12px;\n  font-size: 16px;\n  border: 1px solid blue;\n  border-radius: 8px;\n}\n\n.btn-submit {\n  background-color: #fff;\n  border: 1px solid blue;\n  padding: 4px 8px 4px 8px;\n  font-size: 16px;\n  border-radius: 8px;\n  margin-left: 75%;\n}\n\n.name-score:nth-child(even) {\n  width: 100%;\n  background-color: black;\n  color: white;\n}\n\n.list-element p {\n  padding: 3px 8px;\n  font-size: 16px;\n}\n\n.suc-green {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 300px;\n  background-color: green;\n  z-index: 8;\n  height: 100px;\n  border-radius: 15px;\n  border: 1px solid green;\n}\n\n.suc i {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  color: red;\n  float: right;\n  margin-top: 10px;\n  margin-right: 24px;\n  font-size: 24px;\n  text-align: center;\n  border-radius: 15px;\n}\n\n.suc p {\n  padding-top: 40px;\n  text-align: center;\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.closeTab {\n  display: none;\n}\n\n@media only screen and (max-width: 768px) {\n  header {\n    position: fixed;\n    transform: rotate(90deg);\n    left: -70px;\n    top: 80px;\n    transition: 1s;\n    box-shadow: 2px 4px 8px rgb(25, 119, 44);\n    padding: 6px;\n    border: 1px solid #fff;\n    background-color: #fff;\n  }\n\n  header h1 {\n    font-size: 24px;\n    font-weight: 600;\n    background-image: linear-gradient(45deg, #4d0418, #eb1d1d, rgb(214, 146, 57), #eb1d1d);\n    color: transparent;\n    -webkit-background-clip: text;\n  }\n}\n",""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var p=t(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},369:(n,e,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),s=t(569),c=t.n(s),d=t(565),p=t.n(d),l=t(216),u=t.n(l),f=t(589),h=t.n(f),x=t(426),g={};g.styleTagTransform=h(),g.setAttributes=p(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals,t(166);class b{constructor(n,e){this.user=n,this.score=e}}const m=document.querySelector(".board-container"),v=async()=>{await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pFGg600ud18ulIgGDUTq/scores/",{method:"GET"}).then((n=>n.json())).then((n=>{(n=>{m.innerHTML="",n.map((n=>{const e=document.createElement("div");return e.className="name-score",e.innerHTML=`\n   <div class="list-element">\n   <p>${n.user}: ${n.score}</p>\n   </div>`,e})).forEach((n=>{m.appendChild(n)}))})(n.result)}))},y=document.querySelector(".successefull"),w=document.querySelector(".successefull"),k=document.querySelector(".form-container"),T=document.querySelector(".ref-btn"),S=document.querySelector(".your-name"),C=document.querySelector(".your-score");k.addEventListener("submit",(n=>{n.preventDefault();(async n=>{await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pFGg600ud18ulIgGDUTq/scores/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})})(new b((n=>{const e=n.trim().split(/\s+/),t=e[0],r=e[1];return r?`${t.charAt(0).toUpperCase()+t.slice(1)} ${r.charAt(0).toUpperCase()+r.slice(1)}`:`${t.charAt(0).toUpperCase()+t.slice(1)}`})(S.value),C.value)),(()=>{y.innerHTML="";const n=document.createElement("div");n.className="suc",n.innerHTML='\n    <i id="close" class="fa-solid fa-close"></i>\n    <p class="succes-ful">Leaderboard score created correctly</p>\n    ',y.appendChild(n)})();const e=document.querySelector("#close");w.classList.add("suc-green"),e.addEventListener("click",(()=>{w.classList.add("closeTab")})),S.value="",C.value=""})),T.addEventListener("click",(()=>{v()}))},166:(n,e,t)=>{n.exports=t.p+"62414bf4e72f9b822057.jpg"}},n=>{n(n.s=369)}]);