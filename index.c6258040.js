!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequire0688;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequire0688=o),o("sRYpV");var i={};function a(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,l,"next",t)}function l(t){a(i,r,o,c,l,"throw",t)}c(void 0)}))}};var c={},l=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=d;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=u(t,e,n);if("normal"===l.type){if(r=n.done?h:f,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function v(){}function y(){}function g(){}var b={};l(b,i,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(q([])));E&&E!==n&&r.call(E,i)&&(b=E);var w=g.prototype=v.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function q(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return y.prototype=g,l(w,"constructor",g),l(g,"constructor",y),y.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(x.prototype),l(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(w),l(w,c,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=q,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:q(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(c);try{regeneratorRuntime=l}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}function s(t){return t.reduce((function(t,e){var n=e._id,r=e.book_image,o=e.author,i=e.title;return t+='<li class="book-item" id="'.concat(n,'">\n     <a class="bookshelf-bool-link" href="#">\n    <div class="book-img-container">\n     <img class="book-img" loading="lazy" src="').concat(r,'" alt="').concat(i,'"  width="180px" height="256px"/>\n     <div class="books-overlay">\n     <p class="books-overlay-text">quick view \n     </p>\n     </div>   \n     </div>\n     <p class="book-title">').concat(i,'</p>\n        <p class="author-name">').concat(o,"</p>\n        </a>\n        </li>\n    ")}),"")}var u=o("sRYpV"),d=o("6JpON"),f={bestsellersSectionEl:document.querySelector(".bookshelf"),categoriesListEl:document.querySelector(".categories-list"),allCategoriesTitleEl:document.querySelector(".cat-list"),bestsellersButton:document.querySelector(".bestsellers-button"),spinnerEl:document.querySelector(".spinner-more")},p={},h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var m=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,L="object"==typeof e&&e&&e.Object===Object&&e,E="object"==typeof self&&self&&self.Object===Object&&self,w=L||E||Function("return this")(),k=Object.prototype.toString,x=Math.max,S=Math.min,T=function(){return w.Date.now()};function N(e){var n=void 0===e?"undefined":t(h)(e);return!!e&&("object"==n||"function"==n)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(h)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==k.call(e)}(e))return NaN;if(N(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=N(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var r=y.test(e);return r||g.test(e)?b(e.slice(2),r?2:8):v.test(e)?NaN:+e}p=function(t,e,n){var r,o,i,a,c,l,s=0,u=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,i=o;return r=o=void 0,s=e,a=t.apply(i,n)}function h(t){return s=t,c=setTimeout(v,e),u?p(t):a}function m(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-s>=i}function v(){var t=T();if(m(t))return y(t);c=setTimeout(v,function(t){var n=e-(t-l);return d?S(n,i-(t-s)):n}(t))}function y(t){return c=void 0,f&&r?p(t):(r=o=void 0,a)}function g(){var t=T(),n=m(t);if(r=arguments,o=this,l=t,n){if(void 0===c)return h(l);if(d)return c=setTimeout(v,e),p(l)}return void 0===c&&(c=setTimeout(v,e)),a}return e=O(e)||0,N(n)&&(u=!!n.leading,i=(d="maxWait"in n)?x(O(n.maxWait)||0,e):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=l=o=c=void 0},g.flush=function(){return void 0===c?a:y(T())},g};var q=new(0,u.FetchApiBooks);function _(t){return M.apply(this,arguments)}function M(){return(M=t(i)(t(c).mark((function e(n){var r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f.spinnerEl.classList.remove("spinner-hidden"),e.next=4,q.fetchTopBooks();case 4:if(0!==(r=e.sent).length&&void 0!==r){e.next=8;break}return t(d).Notify.failure("Sorry, we didn't find anything according to your request."),e.abrupt("return");case 8:f.spinnerEl.classList.add("spinner-hidden"),B(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function j(){return(j=t(i)(t(c).mark((function e(n){var r,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return f.spinnerEl.classList.remove("spinner-hidden"),r=n.target.name,e.prev=4,e.next=7,q.fetchSelectedCategory(r);case 7:if(0!==(o=e.sent).length&&void 0!==o){e.next=11;break}return t(d).Notify.failure("Sorry, we didn't find anything according to your request."),e.abrupt("return");case 11:P(r),document.querySelector(".bestsellers-title").innerHTML=I(r),H(o,r),f.spinnerEl.classList.add("spinner-hidden"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})))).apply(this,arguments)}function B(t){return A.apply(this,arguments)}function A(){return(A=t(i)(t(c).mark((function e(n){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.reduce((function(t,e){var n=e.list_name,r=e.books;return t+='\n        <div class="bestsellers-category-item">\n        <p class="bestsellers-category-name" name="'.concat(n,'">').concat(n,'</p> \n        <ul class="bestsellers-book-list">\n        ').concat(s(r),'\n        </ul>\n        <div class="bestsellers-button-container">\n        <button type="button" class="bestsellers-button" name="').concat(n,'">see more</button>\n        </div>\n        </div>')}),'<h2 class="bestsellers-title">'.concat(I("Best Sellers Books"),"</h2>"));case 2:r=t.sent,f.bestsellersSectionEl.innerHTML=r,F();case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function I(t){var e=t.trim().split(" "),n=e[e.length-1];return e.slice(0,e.length-1).join(" ")+' <span class="categories-title-last-word">'.concat(n,"</span>")}function C(){return(C=t(i)(t(c).mark((function e(n){var r,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("LI"===n.target.nodeName&&"All categories"!==n.target.textContent.trim()){e.next=2;break}return e.abrupt("return");case 2:return f.spinnerEl.classList.remove("spinner-hidden"),r=n.target.textContent,e.prev=4,e.next=7,q.fetchSelectedCategory(r);case 7:if(0!==(o=e.sent).length&&void 0!==o){e.next=11;break}return t(d).Notify.failure("Sorry, we didn't find anything according to your request."),e.abrupt("return");case 11:document.querySelector(".bestsellers-title").innerHTML=I(r),H(o,r),f.spinnerEl.classList.add("spinner-hidden"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}function H(t,e){f.bestsellersSectionEl.innerHTML='<h2 class="bestsellers-title">'.concat(I(e),'</h2>\n        <div class="bestsellers-category-item" name="').concat(e,'">\n        <ul class="category-book-list">\n       ').concat(s(t),"\n        </ul>\n        </div>")}function P(t){var e=document.querySelector(".upper-case");e&&e.classList.remove("upper-case"),document.querySelector('li[name="'.concat(t,'"]')).classList.add("upper-case")}function F(){var t=Array.from(document.querySelectorAll(".bestsellers-book-list"));window.innerWidth<768&&t.forEach((function(t){for(var e=0;e<t.children.length;e+=1)t.children[e].hidden=0!==e})),window.innerWidth>=768&&window.outerWidth<1440&&t.forEach((function(t){for(var e=0;e<t.children.length;e+=1)t.children[e].hidden=!(e<=2)})),window.innerWidth>=1440&&t.forEach((function(t){for(var e=0;e<t.children.length;e+=1)t.children[e].hidden=!1}))}window.addEventListener("DOMContentLoaded",_),f.allCategoriesTitleEl.addEventListener("click",_),f.bestsellersSectionEl.addEventListener("click",(function(t){return j.apply(this,arguments)})),f.categoriesListEl.addEventListener("click",(function(t){return C.apply(this,arguments)})),window.addEventListener("resize",p(F,200));u=o("sRYpV"),document.querySelector(".categories");var G=document.querySelector(".categories-list"),R=(document.querySelector(".cat-list"),new(0,u.FetchApiBooks));R.fetchCategoryList().then((function(t){return t.reduce((function(t,e){return t+='<li class ="cat-list cat-text" name = "'.concat(e.list_name,'">').concat(e.list_name,"</li>")}),"")})).then((function(t){G.insertAdjacentHTML("beforeend",t)})),G.addEventListener("click",(function(t){if(!t.target.classList.contains("cat-list"))return;var e=t.target.textContent,n=document.querySelector(".cat-list.upper-case");n&&n.classList.remove("upper-case");if(t.target.closest(".cat-list").classList.add("upper-case"),"All categories"===e)return void R.fetchTopBooks()})),o("2FZpB"),o("UL92Z"),o("gjDBM"),o("bhhwi");var W=new(0,(u=o("sRYpV")).FetchApiBooks),D={bestsellersSectionEl:document.querySelector(".bookshelf"),bodyEl:document.querySelector("body"),modalEl:document.querySelector(".modal"),modalShoopLinks:document.querySelectorAll(".modal-shop-link"),closeButtonEl:document.querySelector(".modal-close-btn"),modalActionBtnEl:document.querySelector(".modal-action-btn"),modalBookPictureWrapEl:document.querySelector(".modal-book-picture-wrapper"),modalBookInfoWrapEl:document.querySelector(".modal-book-info-wrapper"),modalNotification:document.querySelector(".congratulations-text"),backdropEl:document.querySelector(".backdrop"),acum:document.querySelector(".acum"),spinnerEl:document.querySelector(".spinner-more"),errContainerEl:document.querySelector(".errContainer")},Y="shoppingList",V="ADD TO SHOPPING LIST",J="REMOVE FROM THE SHOPPING LIST",U="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",$=[],z={},Z=null;function K(t){(t.target.hasAttribute("data-modal-close")||"Escape"===t.key)&&(D.backdropEl.classList.add("is-hidden"),D.bodyEl.classList.remove("modalIsOpen"),D.modalEl.classList.add("is-hidden"),D.errContainerEl.classList.add("is-hidden"),D.backdropEl.removeEventListener("click",K),document.removeEventListener("keydown",K),D.modalActionBtnEl.removeEventListener("click",Q),D.modalNotification.innerHTML="")}function Q(t){var e=document.getElementById("".concat(z.id));t.target.textContent===V?(t.target.textContent=J,D.modalNotification.innerHTML='<p class="congratulations-text">'.concat(U,"</p>"),e.style.setProperty("background-color","#4f2ee8"),$.push(z),X(),D.acum.innerHTML=$.length):(t.target.textContent=V,D.modalNotification.innerHTML="",$=$.filter((function(t){return t.id!==z.id})),X(),D.acum.innerHTML=$.length,e.style.setProperty("background-color",""))}function X(){localStorage.setItem(Y,JSON.stringify($))}JSON.parse(localStorage.getItem(Y))&&($=JSON.parse(localStorage.getItem(Y)),D.acum.innerHTML=$.length),D.bestsellersSectionEl.addEventListener("click",(function(t){if(t.preventDefault(),D.spinnerEl.classList.remove("spinner-hidden"),D.modalActionBtnEl.addEventListener("click",Q),D.backdropEl.addEventListener("click",K),document.addEventListener("keydown",K),"IMG"!==t.target.nodeName&&"A"!==t.target.nodeName&&"P"!==t.target.nodeName)return;D.bodyEl.classList.add("modalIsOpen"),D.backdropEl.classList.remove("is-hidden"),Z="IMG"===t.target.nodeName?t.target.parentNode.parentNode.parentNode.id:"A"===t.target.nodeName?t.target.parentNode.id:t.target.parentNode.parentNode.id;W.fetchBookInfo(Z).then((function(t){D.spinnerEl.classList.add("spinner-hidden"),function(t){var e=t.book_image,n=t.author,r=t.list_name,o=t.description,i=t.buy_links,a=t.title,c=t._id;z={bookImg:e,listName:r,author:n,description:o,buyLinks:i,title:a,id:c};var l='<img src="'.concat(e,'" class="modalBookImg">'),s='<h4 class="modal-book-title">'.concat(a,'</h3>\n                          <p class="modal-book-author">').concat(n,'</p>\n                          <p class="modal-book-description">').concat(o,"</p>");D.modalBookPictureWrapEl.innerHTML=l,D.modalBookInfoWrapEl.innerHTML=s,D.modalShoopLinks[0].setAttribute("href",i[0].url),D.modalShoopLinks[1].setAttribute("href",i[1].url),D.modalShoopLinks[2].setAttribute("href",i[4].url)}(t),D.modalEl.classList.remove("is-hidden"),$.some((function(e){return e.id===t._id}))?(D.modalActionBtnEl.textContent=J,D.modalNotification.innerHTML=U):D.modalActionBtnEl.textContent=V})).catch((function(t){console.log("sd",t),D.errContainerEl.classList.remove("is-hidden"),D.errContainerEl.innerHTML='<p class="errText">'.concat(t,"</p>")}))}));var tt,et=document.querySelector(".numberList"),nt=["1","2","3","4","5","6","7","8","9","10","11","12","13","14"],rt=["<<","<","1","2","3","...",">",">>"],ot=nt.length,it="",at=Math.floor(ot/3)+1,ct=3*at;ot>3&&ot<7?it="<li>".concat(rt[2],"</li><li>").concat(rt[3],"</li>"):ot>6&&ot<10?it="<li>".concat(rt[2],"</li><li>").concat(rt[3],"</li><li>").concat(rt[4],"</li>"):ot>9&&(it="<li>".concat(rt[0],"</li><li>").concat(rt[1],"</li><li>").concat(rt[2],"</li><li>").concat(rt[3],"</li><li>").concat(rt[4],"</li><li>").concat(rt[5],"</li><li>").concat(rt[6],"</li><li>").concat(rt[7],"</li>")),et.innerHTML=it,console.log(nt),console.log(ct),console.log(at),tt=nt,console.log(tt.slice(ct,-4)),o("8Veln")}();
//# sourceMappingURL=index.c6258040.js.map
