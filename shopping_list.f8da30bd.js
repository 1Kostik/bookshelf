!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},s=n.parcelRequire0688;null==s&&((s=function(n){if(n in i)return i[n].exports;if(n in t){var s=t[n];delete t[n];var o={id:n,exports:{}};return i[n]=o,s.call(o.exports,o,o.exports),o.exports}var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(n,i){t[n]=i},n.parcelRequire0688=s),s("sRYpV");var o=document.querySelector(".shopping-list-empty-page"),e=localStorage.getItem("shoppingList"),a=JSON.parse(e),l=a.map((function(n){var i=n.bookImg,t=n.author,s=n.listName,o=n.description,e=n.title,a=n.buyLinks,l=n.id,c=document.createElement("div");c.classList.add("shoplist-book-container"),c.dataset.id=l;var r='<img src="'.concat(i,'" class="shoplist-book-img">\n        <div class="shoplist-desc-container">\n          <h4 class="shoplist-book-title">').concat(e,'</h4>\n          <p class="shoplist-book-genre">').concat(s,'</p>\n          <p class="shoplist-book-description">').concat(o,'</p>\n           <p class="shoplist-book-author">').concat(t,'</p>\n        </div>\n        <div class="shoplist-icons">\n    <ul class="shoplist-icons-list">\n      <li class="shoplist-icons-li">\n        <a href="').concat(a[0].url,'" target="blank">\n          <div class="shoplist-icon-amazon"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="').concat(a[2].url,'" target="blank">\n          <div class="shoplist-icon-barnesAndNoble"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="').concat(a[4].url,'" target="blank">\n          <div class="shoplist-icon-bookshop"></div>\n        </a>\n      </li>\n    </ul>\n  </div>\n        <div class="shoplist-trash"></div>\n');return c.innerHTML=r,c}));var c=document.createElement("div");function r(n){var i=n.target.closest(".shoplist-book-container").dataset.id;a=a.filter((function(n){return n.id!==i})),localStorage.setItem("shoppingList",JSON.stringify(a)),c.removeChild(n.target.closest(".shoplist-book-container")),0===a.length&&(c.replaceWith(o),d.classList.add("pagination-hidden"))}c.classList.add("shopping-list-container"),l.forEach((function(n){c.appendChild(n)})),o.replaceWith(c),document.querySelectorAll(".shoplist-trash").forEach((function(n){n.addEventListener("click",r)})),0===a.length&&(document.querySelector(".shopping-list-container")||document.body.appendChild(c),c.replaceWith(o));var d=document.querySelector(".pagination-container");d&&(0===a.length?d.classList.add("pagination-hidden"):d.classList.remove("pagination-hidden")),s("2FZpB"),s("UL92Z"),s("gjDBM"),s("bhhwi"),s("8Veln")}();
//# sourceMappingURL=shopping_list.f8da30bd.js.map
