!function(){function t(t,n,e,i){Object.defineProperty(t,n,{get:e,set:i,enumerable:!0,configurable:!0})}function n(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=e.parcelRequire0688;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in r){var n=r[t];delete r[t];var e={id:t,exports:{}};return i[t]=e,n.call(e.exports,e,e.exports),e.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,n){r[t]=n},e.parcelRequire0688=o),o.register("iE7OH",(function(n,e){var i,r;t(n.exports,"register",(function(){return i}),(function(t){return i=t})),t(n.exports,"resolve",(function(){return r}),(function(t){return r=t}));var o={};i=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)o[n[e]]=t[n[e]]},r=function(t){var n=o[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),o.register("aNJCr",(function(n,e){var i;t(n.exports,"getBundleURL",(function(){return i}),(function(t){return i=t}));var r={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(t){var n=r[t];return n||(n=function(){try{throw new Error}catch(n){var t=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),r[t]=n),n}})),o("iE7OH").register(JSON.parse('{"hZqDn":"shopping_list.cc3b6518.js","eP7Vz":"symbol-defs.b0301ca0.svg","fFNaz":"index.9e4769ea.js"}')),o("sRYpV");var a,s=o("8MBJY"),c=o("a2hTj"),u=o("8nrFW"),l=o("l5bVx"),h="Expected a function",g=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,b="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,P=b||m||Function("return this")(),k=Object.prototype.toString,y=Math.max,E=Math.min,x=function(){return P.Date.now()};function N(t,n,e){var i,r,o,a,s,c,u=0,l=!1,g=!1,f=!0;if("function"!=typeof t)throw new TypeError(h);function d(n){var e=i,o=r;return i=r=void 0,u=n,a=t.apply(o,e)}function p(t){return u=t,s=setTimeout(b,n),l?d(t):a}function v(t){var e=t-c;return void 0===c||e>=n||e<0||g&&t-u>=o}function b(){var t=x();if(v(t))return m(t);s=setTimeout(b,function(t){var e=n-(t-c);return g?E(e,o-(t-u)):e}(t))}function m(t){return s=void 0,f&&i?d(t):(i=r=void 0,a)}function P(){var t=x(),e=v(t);if(i=arguments,r=this,c=t,e){if(void 0===s)return p(c);if(g)return s=setTimeout(b,n),d(c)}return void 0===s&&(s=setTimeout(b,n)),a}return n=C(n)||0,w(e)&&(l=!!e.leading,o=(g="maxWait"in e)?y(C(e.maxWait)||0,n):o,f="trailing"in e?!!e.trailing:f),P.cancel=function(){void 0!==s&&clearTimeout(s),u=0,i=c=r=s=void 0},P.flush=function(){return void 0===s?a:m(x())},P}function w(t){var e=void 0===t?"undefined":n(l)(t);return!!t&&("object"==e||"function"==e)}function C(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(l)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==k.call(t)}(t))return NaN;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(g,"");var i=d.test(t);return i||p.test(t)?v(t.slice(2),i?2:8):f.test(t)?NaN:+t}a=function(t,n,e){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError(h);return w(e)&&(i="leading"in e?!!e.leading:i,r="trailing"in e?!!e.trailing:r),N(t,n,{leading:i,maxWait:n,trailing:r})};var O;O=o("aNJCr").getBundleURL("hZqDn")+o("iE7OH").resolve("eP7Vz");var S="",L=function(){"use strict";function t(){n(s)(this,t),this.ikonArr=["<<","<","1","2","3","...",">",">>"],this.markup="",this.arrForRender=[],this.buttonElements=[],this.totalPages,this.currentPage=1,this.sliceBegin=0,this.sliceEnd=3,this.increaseIndex=1,this.decreaseIndex=-1,this.groupPaginIndex=window.innerWidth<768?2:3}return n(c)(t,[{key:"paginationButtonMarkup",value:function(t){var e=this;this.markup='     \n      <button class="pagination-button pag-pointer double-left">'.concat(this.ikonArr[0],'\n        <svg>\n          <use href="').concat(n(O),'#left-arrow" x="-3"></use>\n          <use class="second-left-arrow" href="').concat(n(O),'#left-arrow" x="3"></use>\n        </svg>\n      </button>\n      <button class="pagination-button pag-pointer left-pointer">').concat(this.ikonArr[1],'\n        <svg>\n          <use href="').concat(n(O),'#left-arrow"></use>\n        </svg>\n      </button>\n      <button class="pagination-button pag-number-pointer">').concat(this.ikonArr[2],'</button>\n      <button class="pagination-button pag-number-pointer">').concat(this.ikonArr[3],'</button>\n      <button class="pagination-button pag-number-pointer">').concat(this.ikonArr[4],'</button>\n      <button class="pagination-button pag-pt">').concat(this.ikonArr[5],'</button>\n      <button class="pagination-button pag-pointer right-pointer">').concat(this.ikonArr[6],'\n        <svg>\n          <use href="').concat(n(O),'#right-arrow"></use>\n        </svg>\n      </button>\n      <button class="pagination-button pag-pointer double-right">').concat(this.ikonArr[7],'\n        <svg>\n          <use href="').concat(n(O),'#right-arrow" x="-3"></use>\n          <use class="second-left-arrow" href="').concat(n(O),'#right-arrow" x="3"></use>\n        </svg>\n      </button>'),B.paginationContainer.innerHTML=this.markup;window.addEventListener("resize",n(a)((function(){window.innerWidth<768?(e.groupPaginIndex=2,e.changeNumberOfButtons(),e.highlightCurrentPage(),e.changeStateOfNavigationButtons()):(e.groupPaginIndex=3,e.currentPage>2&&(e.changeNumberOfButtons(),e.highlightCurrentPage(),e.changeStateOfNavigationButtons()))}),100)),this.buttonElements=n(u)(B.paginationContainer.children),this.buttonElements.forEach((function(t){t.classList.add("pagination-hidden")})),t.length>3&&t.length<7?this.buttonElements.forEach((function(t,n){4!==n&&t.classList.remove("pagination-hidden")})):t.length>6&&t.length<10?this.buttonElements.forEach((function(t,n){5!==n&&t.classList.remove("pagination-hidden")})):t.length>9&&this.buttonElements.forEach((function(t){t.classList.remove("pagination-hidden")}))}},{key:"makeSliceForRender",value:function(t){this.totalPages=Math.ceil(t.length/3),this.currentPage>this.totalPages&&(this.currentPage=this.totalPages),this.paginationButtonMarkup(t),this.changeNumberOfButtons(),this.highlightCurrentPage(),this.changeStateOfNavigationButtons(),this.sliceBegin=3*(this.currentPage-1),this.sliceEnd=this.sliceBegin+3,this.arrForRender=t.slice(this.sliceBegin,this.sliceEnd),S=this.arrForRender.map(F).join(""),B.shoppingListContainerEl.innerHTML=S,document.querySelectorAll(".shoplist-trash").forEach((function(t){t.addEventListener("click",T)}))}},{key:"changeCurrentPage",value:function(t){this.currentPage+=t}},{key:"highlightCurrentPage",value:function(){var t=this;this.buttonElements.forEach((function(n){t.currentPage===Number(n.textContent)?(n.classList.add("active"),n.setAttribute("disabled","")):n.classList.remove("active")}))}},{key:"changeNumberOfButtons",value:function(){var t=this;if(2===this.groupPaginIndex)this.currentPage>2&&this.buttonElements.slice(2,4).forEach((function(n,e){n.textContent=t.currentPage+e-1}));else{var n=this;this.currentPage>2&&this.buttonElements.slice(2,5).forEach((function(t,e){t.textContent=n.currentPage+e-1})),this.currentPage>2&&this.currentPage===this.totalPages&&this.buttonElements.slice(2,5).forEach((function(t,e){t.textContent=n.currentPage+e-2}))}}},{key:"changeStateOfNavigationButtons",value:function(){1===this.currentPage&&this.buttonElements.slice(0,2).forEach((function(t){t.setAttribute("disabled",""),t.classList.add("pag-pointer-not-active")})),this.currentPage===this.totalPages&&(this.buttonElements[5].style.display="none",this.buttonElements.slice(6).forEach((function(t){t.setAttribute("disabled",""),t.classList.add("pag-pointer-not-active")}))),this.currentPage===this.totalPages-1&&3===this.groupPaginIndex&&(this.buttonElements[5].style.display="none"),this.currentPage===this.totalPages-1&&2===this.groupPaginIndex&&(this.buttonElements[5].style.display="block")}},{key:"increase",value:function(t){this.changeCurrentPage(this.increaseIndex),this.makeSliceForRender(t)}},{key:"decrease",value:function(t){this.changeCurrentPage(this.decreaseIndex),this.makeSliceForRender(t)}},{key:"firstPage",value:function(t){this.currentPage=1,this.makeSliceForRender(t)}},{key:"lastPage",value:function(t){this.currentPage=this.totalPages,this.makeSliceForRender(t)}},{key:"targetPage",value:function(t,n){this.currentPage=n,this.makeSliceForRender(t)}},{key:"nextGroup",value:function(t){this.changeCurrentPage(this.groupPaginIndex),this.makeSliceForRender(t)}},{key:"afterBookDeleteUpdate",value:function(t){var n=this;this.makeSliceForRender(t),this.currentPage>1&&this.currentPage<=2&&this.buttonElements.slice(2,5).forEach((function(t,e){t.textContent=n.currentPage+e-1})),this.highlightCurrentPage()}}]),t}();(0,o("d7XPc").isAuthUser)();var B={paginationContainer:document.querySelector(".pagination-container"),shoppingListContainerEl:document.querySelector(".shopping-list-container")};function F(t){var n=t.bookImg,e=t.author,i=t.listName,r=t.description,o=t.title,a=t.buyLinks,s=t.id;return'<div class="shoplist-book-container" id="'.concat(s,'"><img src="').concat(n,'" class="shoplist-book-img">\n        <div class="shoplist-desc-container">\n          <h4 class="shoplist-book-title">').concat(o,'</h4>\n          <p class="shoplist-book-genre">').concat(i,'</p>\n          <p class="shoplist-book-description">').concat(r,'</p>\n           <p class="shoplist-book-author">').concat(e,'</p>\n        </div>\n        <div class="shoplist-icons">\n    <ul class="shoplist-icons-list">\n      <li class="shoplist-icons-li">\n        <a href="').concat(a[0].url,'" target="blank">\n          <div class="shoplist-icon-amazon"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="').concat(a[2].url,'">\n          <div class="shoplist-icon-barnesAndNoble"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="').concat(a[4].url,'">\n          <div class="shoplist-icon-bookshop"></div>\n        </a>\n      </li>\n    </ul>\n  </div>\n        <div class="shoplist-trash"></div> </div>\n')}var R=new L;B.paginationContainer.addEventListener("click",(function(t){var n;"svg"===t.target.nodeName?n=t.target.parentNode.textContent.trim():"use"===t.target.nodeName?n=t.target.parentNode.parentNode.textContent.trim():"BUTTON"===t.target.nodeName&&(n=t.target.textContent.trim());var e=!Number.isNaN(Number(n));">"===n?R.increase(j):"<"===n?R.decrease(j):"<<"===n?R.firstPage(j):">>"===n?R.lastPage(j):e?R.targetPage(j,Number(n)):"..."===n&&R.nextGroup(j)}));var A=localStorage.getItem("shoppingList"),j=JSON.parse(A);function T(t){var n=t.target.closest(".shoplist-book-container").id;j=j.filter((function(t){return t.id!==n})),localStorage.setItem("shoppingList",JSON.stringify(j)),R.afterBookDeleteUpdate(j),0===j.length&&(B.shoppingListContainerEl.innerHTML='<div class="shopping-list-empty-page">\n            <p class="shopping-list-empty-text">\n              This page is empty, add some books <br />\n              and proceed to order.\n            </p>\n            <div class="shopping-list-empty-image"></div>\n          </div>')}0!==j.length&&R.firstPage(j),o("2FZpB"),o("gjDBM"),o("bhhwi"),o("8Veln")}();
//# sourceMappingURL=shopping_list.cc3b6518.js.map
