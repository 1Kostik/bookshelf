!function(){function t(t,n,e,i){Object.defineProperty(t,n,{get:e,set:i,enumerable:!0,configurable:!0})}function n(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=e.parcelRequire0688;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in o){var n=o[t];delete o[t];var e={id:t,exports:{}};return i[t]=e,n.call(e.exports,e,e.exports),e.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,n){o[t]=n},e.parcelRequire0688=r),r.register("iE7OH",(function(n,e){var i,o;t(n.exports,"register",(function(){return i}),(function(t){return i=t})),t(n.exports,"resolve",(function(){return o}),(function(t){return o=t}));var r={};i=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)r[n[e]]=t[n[e]]},o=function(t){var n=r[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),r.register("aNJCr",(function(n,e){var i;t(n.exports,"getBundleURL",(function(){return i}),(function(t){return i=t}));var o={};function r(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(t){var n=o[t];return n||(n=function(){try{throw new Error}catch(n){var t=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return r(t[2])}return"/"}(),o[t]=n),n}})),r("iE7OH").register(JSON.parse('{"hZqDn":"shopping_list.c15c9a58.js","eP7Vz":"symbol-defs.b0301ca0.svg","fFNaz":"index.9e4769ea.js"}')),r("sRYpV");var s,a=r("l5bVx"),c="Expected a function",u=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,g=/^0o[0-7]+$/i,f=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,b=d||p||Function("return this")(),v=Object.prototype.toString,m=Math.max,k=Math.min,P=function(){return b.Date.now()};function y(t,n,e){var i,o,r,s,a,u,l=0,h=!1,g=!1,f=!0;if("function"!=typeof t)throw new TypeError(c);function d(n){var e=i,r=o;return i=o=void 0,l=n,s=t.apply(r,e)}function p(t){return l=t,a=setTimeout(v,n),h?d(t):s}function b(t){var e=t-u;return void 0===u||e>=n||e<0||g&&t-l>=r}function v(){var t=P();if(b(t))return y(t);a=setTimeout(v,function(t){var e=n-(t-u);return g?k(e,r-(t-l)):e}(t))}function y(t){return a=void 0,f&&i?d(t):(i=o=void 0,s)}function N(){var t=P(),e=b(t);if(i=arguments,o=this,u=t,e){if(void 0===a)return p(u);if(g)return a=setTimeout(v,n),d(u)}return void 0===a&&(a=setTimeout(v,n)),s}return n=x(n)||0,E(e)&&(h=!!e.leading,r=(g="maxWait"in e)?m(x(e.maxWait)||0,n):r,f="trailing"in e?!!e.trailing:f),N.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=u=o=a=void 0},N.flush=function(){return void 0===a?s:y(P())},N}function E(t){var e=void 0===t?"undefined":n(a)(t);return!!t&&("object"==e||"function"==e)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(a)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(E(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=E(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var i=h.test(t);return i||g.test(t)?f(t.slice(2),i?2:8):l.test(t)?NaN:+t}s=function(t,n,e){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(c);return E(e)&&(i="leading"in e?!!e.leading:i,o="trailing"in e?!!e.trailing:o),y(t,n,{leading:i,maxWait:n,trailing:o})};var N,L=r("8MBJY"),w=r("a2hTj"),C=r("8nrFW");N=r("aNJCr").getBundleURL("hZqDn")+r("iE7OH").resolve("eP7Vz");var O="",S=function(){"use strict";function t(){n(L)(this,t),this.ikonArr=["<<","<","1","2","3","...",">",">>"],this.markup="",this.arrForRender=[],this.buttonElements=[],this.totalPages,this.currentPage=1,this.sliceBegin=0,this.sliceEnd=3,this.increaseIndex=1,this.decreaseIndex=-1,this.groupPaginIndex=window.innerWidth<768?2:3,this.booksList=[]}return n(w)(t,[{key:"paginationButtonMarkup",value:function(t){this.markup='     \n      <button class="pagination-button pag-pointer double-left">'.concat(this.ikonArr[0],'\n        <svg>\n          <use href="').concat(n(N),'#left-arrow" x="-3"></use>\n          <use class="second-left-arrow" href="').concat(n(N),'#left-arrow" x="3"></use>\n        </svg>\n      </button>\n      <button class="pagination-button pag-pointer left-pointer">').concat(this.ikonArr[1],'\n        <svg>\n          <use href="').concat(n(N),'#left-arrow"></use>\n        </svg>\n      </button>\n      <button class="pagination-button pag-number-pointer">').concat(this.ikonArr[2],'</button>\n      <button class="pagination-button pag-number-pointer">').concat(this.ikonArr[3],'</button>\n      <button class="pagination-button pag-number-pointer">').concat(this.ikonArr[4],'</button>\n      <button class="pagination-button pag-pt">').concat(this.ikonArr[5],'</button>\n      <button class="pagination-button pag-pointer right-pointer">').concat(this.ikonArr[6],'\n        <svg>\n          <use href="').concat(n(N),'#right-arrow"></use>\n        </svg>\n      </button>\n      <button class="pagination-button pag-pointer double-right">').concat(this.ikonArr[7],'\n        <svg>\n          <use href="').concat(n(N),'#right-arrow" x="-3"></use>\n          <use class="second-left-arrow" href="').concat(n(N),'#right-arrow" x="3"></use>\n        </svg>\n      </button>'),B.paginationContainer.innerHTML=this.markup,this.buttonElements=n(C)(B.paginationContainer.children),this.buttonElements.forEach((function(t){t.classList.add("pagination-hidden")})),t.length>3&&t.length<7?this.buttonElements.forEach((function(t,n){4!==n&&t.classList.remove("pagination-hidden")})):t.length>6&&t.length<10?this.buttonElements.forEach((function(t,n){5!==n&&t.classList.remove("pagination-hidden")})):t.length>9&&this.buttonElements.forEach((function(t){t.classList.remove("pagination-hidden")}))}},{key:"makeSliceForRender",value:function(t){var n=3===this.groupPaginIndex?3:4;this.totalPages=Math.ceil(t.length/n),this.currentPage>this.totalPages&&(this.currentPage=this.totalPages),this.paginationButtonMarkup(t),this.changeNumberOfButtons(),this.highlightCurrentPage(),this.changeStateOfNavigationButtons(),this.sliceBegin=(this.currentPage-1)*n,this.sliceEnd=this.sliceBegin+n,this.arrForRender=t.slice(this.sliceBegin,this.sliceEnd),O=this.arrForRender.map(F).join(""),B.shoppingListContainerEl.innerHTML=O,document.querySelectorAll(".shoplist-trash").forEach((function(t){t.addEventListener("click",T)}))}},{key:"changeCurrentPage",value:function(t){this.currentPage+=t}},{key:"highlightCurrentPage",value:function(){var t=this;this.buttonElements.forEach((function(n){t.currentPage===Number(n.textContent)?(n.classList.add("active"),n.setAttribute("disabled","")):n.classList.remove("active")}))}},{key:"changeNumberOfButtons",value:function(){var t=this;if(2===this.groupPaginIndex)this.currentPage>2&&this.buttonElements.slice(2,4).forEach((function(n,e){n.textContent=t.currentPage+e-1}));else{var n=this;this.currentPage>2&&this.buttonElements.slice(2,5).forEach((function(t,e){t.textContent=n.currentPage+e-1})),this.currentPage>2&&this.currentPage===this.totalPages&&this.buttonElements.slice(2,5).forEach((function(t,e){t.textContent=n.currentPage+e-2}))}}},{key:"changeStateOfNavigationButtons",value:function(){1===this.currentPage&&this.buttonElements.slice(0,2).forEach((function(t){t.setAttribute("disabled",""),t.classList.add("pag-pointer-not-active")})),this.currentPage===this.totalPages&&(this.buttonElements[5].style.display="none",this.buttonElements.slice(6).forEach((function(t){t.setAttribute("disabled",""),t.classList.add("pag-pointer-not-active")}))),this.currentPage===this.totalPages-1&&3===this.groupPaginIndex&&(this.buttonElements[5].style.display="none"),this.currentPage===this.totalPages-1&&2===this.groupPaginIndex&&(this.buttonElements[5].style.display="block")}},{key:"increase",value:function(t){this.booksList=t,this.changeCurrentPage(this.increaseIndex),this.makeSliceForRender(t)}},{key:"decrease",value:function(t){this.booksList=t,this.changeCurrentPage(this.decreaseIndex),this.makeSliceForRender(t)}},{key:"firstPage",value:function(t){this.booksList=t,this.currentPage=1,this.makeSliceForRender(t)}},{key:"lastPage",value:function(t){this.booksList=t,this.currentPage=this.totalPages,this.makeSliceForRender(t)}},{key:"targetPage",value:function(t,n){this.booksList=t,this.currentPage=n,this.makeSliceForRender(t)}},{key:"nextGroup",value:function(t){this.booksList=t,this.changeCurrentPage(this.groupPaginIndex),this.makeSliceForRender(t)}},{key:"afterBookDeleteUpdate",value:function(t){var n=this;this.booksList=t,this.makeSliceForRender(t),this.currentPage>1&&this.currentPage<=2&&this.buttonElements.slice(2,5).forEach((function(t,e){t.textContent=n.currentPage+e-1})),this.highlightCurrentPage()}}]),t}();(0,r("d7XPc").isAuthUser)();var B={paginationContainer:document.querySelector(".pagination-container"),shoppingListContainerEl:document.querySelector(".shopping-list-container")};function F(t){var n=t.bookImg,e=t.author,i=t.listName,o=t.description,r=t.title,s=t.buyLinks,a=t.id;return'<div class="shoplist-book-container" id="'.concat(a,'"><img src="').concat(n,'" class="shoplist-book-img">\n        <div class="shoplist-desc-container">\n          <h4 class="shoplist-book-title">').concat(r,'</h4>\n          <p class="shoplist-book-genre">').concat(i,'</p>\n          <p class="shoplist-book-description">').concat(o,'</p>\n           <p class="shoplist-book-author">').concat(e,'</p>\n        </div>\n        <div class="shoplist-icons">\n    <ul class="shoplist-icons-list">\n      <li class="shoplist-icons-li">\n        <a href="').concat(s[0].url,'" target="blank">\n          <div class="shoplist-icon-amazon"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="').concat(s[2].url,'">\n          <div class="shoplist-icon-barnesAndNoble"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="').concat(s[4].url,'">\n          <div class="shoplist-icon-bookshop"></div>\n        </a>\n      </li>\n    </ul>\n  </div>\n        <div class="shoplist-trash"></div> </div>\n')}var R=new S;window.addEventListener("resize",n(s)((function(){window.innerWidth<768?(R.groupPaginIndex=2,R.makeSliceForRender(R.booksList),R.changeNumberOfButtons(),R.highlightCurrentPage(),R.changeStateOfNavigationButtons()):(R.groupPaginIndex=3,R.makeSliceForRender(R.booksList),R.currentPage>2&&(R.changeNumberOfButtons(),R.highlightCurrentPage(),R.changeStateOfNavigationButtons()))}),300)),B.paginationContainer.addEventListener("click",(function(t){var n;"svg"===t.target.nodeName?n=t.target.parentNode.textContent.trim():"use"===t.target.nodeName?n=t.target.parentNode.parentNode.textContent.trim():"BUTTON"===t.target.nodeName&&(n=t.target.textContent.trim());var e=!Number.isNaN(Number(n));">"===n?R.increase(j):"<"===n?R.decrease(j):"<<"===n?R.firstPage(j):">>"===n?R.lastPage(j):e?R.targetPage(j,Number(n)):"..."===n&&R.nextGroup(j)}));var A=localStorage.getItem("shoppingList"),j=JSON.parse(A);function T(t){var n=t.target.closest(".shoplist-book-container").id;j=j.filter((function(t){return t.id!==n})),localStorage.setItem("shoppingList",JSON.stringify(j)),R.afterBookDeleteUpdate(j),0===j.length&&(B.shoppingListContainerEl.innerHTML='<div class="shopping-list-empty-page">\n            <p class="shopping-list-empty-text">\n              This page is empty, add some books <br />\n              and proceed to order.\n            </p>\n            <div class="shopping-list-empty-image"></div>\n          </div>')}0!==j.length&&R.firstPage(j),r("2FZpB"),r("gjDBM"),r("bhhwi"),r("8Veln")}();
//# sourceMappingURL=shopping_list.c15c9a58.js.map
