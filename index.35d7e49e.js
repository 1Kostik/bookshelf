!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire0688;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire0688=o),o("sRYpV");var i={};function a(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,s,"next",e)}function s(e){a(i,r,o,c,s,"throw",e)}c(void 0)}))}};var c={},s=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(e,t,n){var r=d;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=u(e,t,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function v(){}function y(){}function g(){}var b={};s(b,i,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(q([])));E&&E!==n&&r.call(E,i)&&(b=E);var w=g.prototype=v.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(d).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function q(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:_}}function _(){return{value:t,done:!0}}return y.prototype=g,s(w,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k(x.prototype),s(x.prototype,a,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new x(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(w),s(w,c,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=q,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:q(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(c);try{regeneratorRuntime=s}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}function l(e){return e.reduce((function(e,t){var n=t._id,r=t.book_image,o=t.author,i=t.title;return e+='<li class="book-item" id="'.concat(n,'">\n     <a class="bookshelf-bool-link" href="#">\n    <div class="book-img-container _').concat(n,'">\n    <div class="book-shoppingcart is-hidden"></div>\n     <img class="book-img" loading="lazy" src="').concat(r,'" alt="').concat(i,'"  width="180px" height="256px"/>\n     <div class="books-overlay">\n     <p class="books-overlay-text">quick view \n     </p>\n     </div>   \n     </div>\n     <p class="book-title">').concat(i,'</p>\n        <p class="author-name">').concat(o,"</p>\n        </a>\n        </li>\n    ")}),"")}var u=o("sRYpV"),d=o("6JpON"),f={bestsellersSectionEl:document.querySelector(".bookshelf"),categoriesListEl:document.querySelector(".categories-list"),allCategoriesTitleEl:document.querySelector(".cat-list"),bestsellersButton:document.querySelector(".bestsellers-button"),spinnerEl:document.querySelector(".spinner-more")},p={},h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var m=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,L="object"==typeof t&&t&&t.Object===Object&&t,E="object"==typeof self&&self&&self.Object===Object&&self,w=L||E||Function("return this")(),k=Object.prototype.toString,x=Math.max,S=Math.min,N=function(){return w.Date.now()};function T(t){var n=void 0===t?"undefined":e(h)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(h)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==k.call(t)}(t))return NaN;if(T(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=T(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(m,"");var r=y.test(t);return r||g.test(t)?b(t.slice(2),r?2:8):v.test(t)?NaN:+t}p=function(e,t,n){var r,o,i,a,c,s,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,c=setTimeout(v,t),u?p(e):a}function m(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-l>=i}function v(){var e=N();if(m(e))return y(e);c=setTimeout(v,function(e){var n=t-(e-s);return d?S(n,i-(e-l)):n}(e))}function y(e){return c=void 0,f&&r?p(e):(r=o=void 0,a)}function g(){var e=N(),n=m(e);if(r=arguments,o=this,s=e,n){if(void 0===c)return h(s);if(d)return c=setTimeout(v,t),p(s)}return void 0===c&&(c=setTimeout(v,t)),a}return t=O(t)||0,T(n)&&(u=!!n.leading,i=(d="maxWait"in n)?x(O(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=s=o=c=void 0},g.flush=function(){return void 0===c?a:y(N())},g};var q=new(0,u.FetchApiBooks);function _(e){0!==e.length&&void 0!==e&&e.forEach((function(e){var t=e.id,n=document.querySelector("._".concat(t));n&&n.querySelector(".book-shoppingcart").classList.remove("is-hidden")}))}function j(e){return M.apply(this,arguments)}function M(){return(M=e(i)(e(c).mark((function t(n){var r;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f.spinnerEl.classList.remove("spinner-hidden"),t.next=4,q.fetchTopBooks();case 4:if(0!==(r=t.sent).length&&void 0!==r){t.next=8;break}return e(d).Notify.failure("Sorry, we didn't find anything according to your request."),t.abrupt("return");case 8:return f.spinnerEl.classList.add("spinner-hidden"),t.next=11,B(r);case 11:return t.sent,t.next=14,JSON.parse(localStorage.getItem("shoppingList"));case 14:_(t.sent),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.log(t.t0.message);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))).apply(this,arguments)}function I(){return(I=e(i)(e(c).mark((function t(n){var r,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("BUTTON"===n.target.nodeName){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,JSON.parse(localStorage.getItem("shoppingList"));case 4:return t.sent,f.spinnerEl.classList.remove("spinner-hidden"),r=n.target.name,t.prev=7,t.next=10,q.fetchSelectedCategory(r);case 10:if(0!==(o=t.sent).length&&void 0!==o){t.next=14;break}return e(d).Notify.failure("Sorry, we didn't find anything according to your request."),t.abrupt("return");case 14:return F(r),document.querySelector(".bestsellers-title").innerHTML=C(r),t.next=18,P(o,r);case 18:return t.sent,t.next=21,JSON.parse(localStorage.getItem("shoppingList"));case 21:_(t.sent),f.spinnerEl.classList.add("spinner-hidden"),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(7),console.log(t.t0.message);case 29:case"end":return t.stop()}}),t,null,[[7,26]])})))).apply(this,arguments)}function B(e){return A.apply(this,arguments)}function A(){return(A=e(i)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.reduce((function(e,t){var n=t.list_name,r=t.books;return e+='\n        <div class="bestsellers-category-item">\n        <p class="bestsellers-category-name" name="'.concat(n,'">').concat(n,'</p> \n        <ul class="bestsellers-book-list">\n        ').concat(l(r),'\n        </ul>\n        <div class="bestsellers-button-container">\n        <button type="button" class="bestsellers-button" name="').concat(n,'">see more</button>\n        </div>\n        </div>')}),'<h2 class="bestsellers-title">'.concat(C("Best Sellers Books"),"</h2>"));case 2:r=e.sent,f.bestsellersSectionEl.innerHTML=r,G();case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function C(e){var t=e.trim().split(" "),n=t[t.length-1];return t.slice(0,t.length-1).join(" ")+' <span class="categories-title-last-word">'.concat(n,"</span>")}function H(){return(H=e(i)(e(c).mark((function t(n){var r,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("LI"===n.target.nodeName&&"All categories"!==n.target.textContent.trim()){t.next=2;break}return t.abrupt("return");case 2:return f.spinnerEl.classList.remove("spinner-hidden"),r=n.target.textContent,t.prev=4,t.next=7,q.fetchSelectedCategory(r);case 7:if(0!==(o=t.sent).length&&void 0!==o){t.next=11;break}return e(d).Notify.failure("Sorry, we didn't find anything according to your request."),t.abrupt("return");case 11:return document.querySelector(".bestsellers-title").innerHTML=C(r),P(o,r),t.next=15,JSON.parse(localStorage.getItem("shoppingList"));case 15:_(t.sent),f.spinnerEl.classList.add("spinner-hidden"),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(4),console.log(t.t0.message);case 23:case"end":return t.stop()}}),t,null,[[4,20]])})))).apply(this,arguments)}function P(e,t){f.bestsellersSectionEl.innerHTML='<h2 class="bestsellers-title">'.concat(C(t),'</h2>\n        <div class="bestsellers-category-item" name="').concat(t,'">\n        <ul class="category-book-list">\n       ').concat(l(e),"\n        </ul>\n        </div>")}function F(e){var t=document.querySelector(".upper-case");t&&t.classList.remove("upper-case"),document.querySelector('li[name="'.concat(e,'"]')).classList.add("upper-case")}function G(){var e=Array.from(document.querySelectorAll(".bestsellers-book-list"));window.innerWidth<768&&e.forEach((function(e){for(var t=0;t<e.children.length;t+=1)e.children[t].hidden=0!==t})),window.innerWidth>=768&&window.innerWidth<1440&&e.forEach((function(e){for(var t=0;t<e.children.length;t+=1)e.children[t].hidden=!(t<=2)})),window.innerWidth>=1440&&e.forEach((function(e){for(var t=0;t<e.children.length;t+=1)e.children[t].hidden=!1}))}window.addEventListener("DOMContentLoaded",j),f.allCategoriesTitleEl.addEventListener("click",j),f.bestsellersSectionEl.addEventListener("click",(function(e){return I.apply(this,arguments)})),f.categoriesListEl.addEventListener("click",(function(e){return H.apply(this,arguments)})),window.addEventListener("resize",p(G,200));u=o("sRYpV"),document.querySelector(".categories");var R=document.querySelector(".categories-list"),W=(document.querySelector(".cat-list"),new(0,u.FetchApiBooks));W.fetchCategoryList().then((function(e){return e.reduce((function(e,t){return e+='<li class ="cat-list cat-text" name = "'.concat(t.list_name,'">').concat(t.list_name,"</li>")}),"")})).then((function(e){R.insertAdjacentHTML("beforeend",e)})),R.addEventListener("click",(function(e){if(!e.target.classList.contains("cat-list"))return;var t=e.target.textContent,n=document.querySelector(".cat-list.upper-case");n&&n.classList.remove("upper-case");if(e.target.closest(".cat-list").classList.add("upper-case"),"All categories"===t)return void W.fetchTopBooks()})),o("2FZpB"),o("UL92Z"),o("gjDBM"),o("bhhwi");var D=new(0,(u=o("sRYpV")).FetchApiBooks),J={bestsellersSectionEl:document.querySelector(".bookshelf"),bodyEl:document.querySelector("body"),modalEl:document.querySelector(".modal"),modalShoopLinks:document.querySelectorAll(".modal-shop-link"),closeButtonEl:document.querySelector(".modal-close-btn"),modalActionBtnEl:document.querySelector(".modal-action-btn"),modalBookPictureWrapEl:document.querySelector(".modal-book-picture-wrapper"),modalBookInfoWrapEl:document.querySelector(".modal-book-info-wrapper"),modalNotification:document.querySelector(".congratulations-text"),backdropEl:document.querySelector(".backdrop"),acum:document.querySelector(".acum"),spinnerEl:document.querySelector(".spinner-more"),errContainerEl:document.querySelector(".errContainer")},Y="shoppingList",V="ADD TO SHOPPING LIST",U="REMOVE FROM THE SHOPPING LIST",$="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",z=[],Z={},K=null;function Q(e){(e.target.hasAttribute("data-modal-close")||"Escape"===e.key)&&(J.backdropEl.classList.add("is-hidden"),J.bodyEl.classList.remove("modalIsOpen"),J.modalEl.classList.add("is-hidden"),J.errContainerEl.classList.add("is-hidden"),J.backdropEl.removeEventListener("click",Q),document.removeEventListener("keydown",Q),J.modalActionBtnEl.removeEventListener("click",X),J.modalNotification.innerHTML="")}function X(e){var t=document.getElementById("".concat(Z.id)).querySelector("a div.book-shoppingcart");e.target.textContent===V?(e.target.textContent=U,J.modalNotification.innerHTML='<p class="congratulations-text">'.concat($,"</p>"),z.push(Z),ee(),J.acum.innerHTML=z.length,t.classList.remove("is-hidden")):(e.target.textContent=V,J.modalNotification.innerHTML="",z=z.filter((function(e){return e.id!==Z.id})),ee(),J.acum.innerHTML=z.length,t.classList.add("is-hidden"))}function ee(){localStorage.setItem(Y,JSON.stringify(z))}JSON.parse(localStorage.getItem(Y))&&(z=JSON.parse(localStorage.getItem(Y)),J.acum.innerHTML=z.length),J.bestsellersSectionEl.addEventListener("click",(function(e){if(e.preventDefault(),J.modalActionBtnEl.addEventListener("click",X),J.backdropEl.addEventListener("click",Q),document.addEventListener("keydown",Q),"IMG"!==e.target.nodeName&&"A"!==e.target.nodeName&&"P"!==e.target.nodeName)return;J.spinnerEl.classList.remove("spinner-hidden"),J.bodyEl.classList.add("modalIsOpen"),J.backdropEl.classList.remove("is-hidden"),K="IMG"===e.target.nodeName?e.target.parentNode.parentNode.parentNode.id:"A"===e.target.nodeName?e.target.parentNode.id:e.target.parentNode.parentNode.id;D.fetchBookInfo(K).then((function(e){J.spinnerEl.classList.add("spinner-hidden"),function(e){var t=e.book_image,n=e.author,r=e.list_name,o=e.description,i=e.buy_links,a=e.title,c=e._id;Z={bookImg:t,listName:r,author:n,description:o,buyLinks:i,title:a,id:c};var s='<img src="'.concat(t,'" class="modalBookImg">'),l='<h4 class="modal-book-title">'.concat(a,'</h3>\n                          <p class="modal-book-author">').concat(n,'</p>\n                          <p class="modal-book-description">').concat(o,"</p>");J.modalBookPictureWrapEl.innerHTML=s,J.modalBookInfoWrapEl.innerHTML=l,J.modalShoopLinks[0].setAttribute("href",i[0].url),J.modalShoopLinks[1].setAttribute("href",i[1].url),J.modalShoopLinks[2].setAttribute("href",i[4].url)}(e),J.modalEl.classList.remove("is-hidden"),z.some((function(t){return t.id===e._id}))?(J.modalActionBtnEl.textContent=U,J.modalNotification.innerHTML=$):J.modalActionBtnEl.textContent=V})).catch((function(e){console.log("sd",e),J.errContainerEl.classList.remove("is-hidden"),J.errContainerEl.innerHTML='<p class="errText">'.concat(e,"</p>")}))})),o("8Veln")}();
//# sourceMappingURL=index.35d7e49e.js.map