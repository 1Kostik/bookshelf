!function(){var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")};var o={};function t(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,o,n){o&&t(e.prototype,o);n&&t(e,n);return e};var n=document.querySelector(".shopping-list-empty-page"),s=localStorage.getItem("shoppingList"),i=JSON.parse(s),l=i.map((function(e){var o=e.bookImg,t=e.author,n=e.listName,s=e.description,i=e.title,l=e.buyLinks,a=e.id,c=document.createElement("div");c.classList.add("shoplist-book-container"),c.dataset.id=a;var r='<img src="'.concat(o,'" class="shoplist-book-img">\n        <div class="shoplist-desc-container">\n          <h4 class="shoplist-book-title">').concat(i,'</h4>\n          <p class="shoplist-book-genre">').concat(n,'</p>\n          <p class="shoplist-book-description">').concat(s,'</p>\n           <p class="shoplist-book-author">').concat(t,'</p>\n        </div>\n        <div class="shoplist-icons">\n    <ul class="shoplist-icons-list">\n      <li class="shoplist-icons-li">\n        <a href="').concat(l[0].url,'">\n          <div class="shoplist-icon-amazon"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="').concat(l[2].url,'">\n          <div class="shoplist-icon-barnesAndNoble"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="').concat(l[4].url,'">\n          <div class="shoplist-icon-bookshop"></div>\n        </a>\n      </li>\n    </ul>\n  </div>\n        <div class="shoplist-trash"></div>\n');return c.innerHTML=r,c}));var a=document.createElement("div");function c(e){var o=e.target.closest(".shoplist-book-container").dataset.id;i=i.filter((function(e){return e.id!==o})),localStorage.setItem("shoppingList",JSON.stringify(i)),a.removeChild(e.target.closest(".shoplist-book-container")),0===i.length&&a.replaceWith(n)}a.classList.add("shopping-list-container"),l.forEach((function(e){a.appendChild(e)})),n.replaceWith(a),document.querySelectorAll(".shoplist-trash").forEach((function(e){e.addEventListener("click",c)})),0===i.length&&(document.querySelector(".shopping-list-container")||document.body.appendChild(a),a.replaceWith(n)),function(){var e={openModalBtn:document.querySelector("[data-modal-open-sign]"),closeModalBtn:document.querySelector("[data-modal-close-sign]"),modal:document.querySelector("[data-modal-sign]"),openModalBtnMob:document.querySelector("[data-modal-open-sign-mobile]"),mobileMenuBtn:document.querySelector("[data-mobile-menu-btn]"),mobileMenu:document.querySelector("[data-mobile-menu]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.mobileMenu.classList.remove("is-open"),e.mobileMenuBtn.classList.remove("is-open"),e.body.classList.remove("mobile-menu-open")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.openModalBtnMob.addEventListener("click",o)}(),window.onload=function(){var e=document.querySelector(".isshowbtn");window.onscroll=function(){window.scrollY>500?e.classList.remove("isshowbtn__hide"):window.scrollY<500&&e.classList.add("isshowbtn__hide")},e.onclick=function(e){window.scrollTo({top:0,behavior:"smooth"})}};document.querySelector(".countBtn");document.querySelector(".acum").innerHTML=0;var r=document.querySelector("[data-mobile-menu-btn]"),d=document.querySelector("[data-mobile-menu]"),p=document.querySelector("body");r.addEventListener("click",(function(){r.classList.toggle("is-open"),d.classList.toggle("is-open"),p.classList.toggle("mobile-menu-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(d.classList.remove("is-open"),r.classList.remove("is-open"),p.classList.remove("mobile-menu-open"))}));var u="#111111",h="#202024",m="#EAC645",g="#202024",b="#FFFFFF",y="#FFFFFF",v="#F6F6F6",f="#4F2EE8",L="#F6F6F6",k="#111111",S="light",w=document.documentElement;var F=document.querySelector("#checkbox");console.log(F),F.addEventListener("change",(function(){"light"===S?(w.style.setProperty("--bg-white-header",u),w.style.setProperty("--bg-home-page",h),w.style.setProperty("--hover-focus",m),w.style.setProperty("--bg-card-book-shoppinglist-page",g),w.style.setProperty("--text-color-card-book-shoppinglist-page",b),S="dark",localStorage.setItem("data-theme","dark")):(w.style.setProperty("--bg-white-header",y),w.style.setProperty("--bg-home-page",v),w.style.setProperty("--hover-focus",f),w.style.setProperty("--bg-card-book-shoppinglist-page",L),w.style.setProperty("--text-color-card-book-shoppinglist-page",k),S="light",localStorage.setItem("data-theme","light"))})),F.addEventListener("change",(function(){F.checked,F.classList.toggle("dark-theme")}))}();
//# sourceMappingURL=shopping_list.bb353007.js.map
