var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},t=s.parcelRequire0688;null==t&&((t=function(s){if(s in i)return i[s].exports;if(s in o){var t=o[s];delete o[s];var e={id:s,exports:{}};return i[s]=e,t.call(e.exports,e,e.exports),e.exports}var n=new Error("Cannot find module '"+s+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(s,i){o[s]=i},s.parcelRequire0688=t),t("9TCtp");const e=document.querySelector(".shopping-list-empty-page"),n=localStorage.getItem("shoppingList");let l=JSON.parse(n);const a=l.map((function(s){const{bookImg:i,author:o,listName:t,description:e,title:n,buyLinks:l,id:a}=s,c=document.createElement("div");c.classList.add("shoplist-book-container"),c.dataset.id=a;const r=`<img src="${i}" class="shoplist-book-img">\n        <div class="shoplist-desc-container">\n          <h4 class="shoplist-book-title">${n}</h4>\n          <p class="shoplist-book-genre">${t}</p>\n          <p class="shoplist-book-description">${e}</p>\n           <p class="shoplist-book-author">${o}</p>\n        </div>\n        <div class="shoplist-icons">\n    <ul class="shoplist-icons-list">\n      <li class="shoplist-icons-li">\n        <a href="${l[0].url}">\n          <div class="shoplist-icon-amazon"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="${l[2].url}">\n          <div class="shoplist-icon-barnesAndNoble"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="${l[4].url}">\n          <div class="shoplist-icon-bookshop"></div>\n        </a>\n      </li>\n    </ul>\n  </div>\n        <div class="shoplist-trash"></div>\n`;return c.innerHTML=r,c}));const c=document.createElement("div");c.classList.add("shopping-list-container"),a.forEach((s=>{c.appendChild(s)})),e.replaceWith(c);function r(s){const i=s.target.closest(".shoplist-book-container").dataset.id;l=l.filter((s=>s.id!==i)),localStorage.setItem("shoppingList",JSON.stringify(l)),c.removeChild(s.target.closest(".shoplist-book-container")),0===l.length&&c.replaceWith(e)}document.querySelectorAll(".shoplist-trash").forEach((s=>{s.addEventListener("click",r)})),0===l.length&&(document.querySelector(".shopping-list-container")||document.body.appendChild(c),c.replaceWith(e)),t("7Buz0"),t("31u3U"),t("3oIZ9"),t("2klI5"),t("7tzR7");
//# sourceMappingURL=shopping_list.b979e89a.js.map
