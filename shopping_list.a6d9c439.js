!function(){var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var t={};function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){t&&o(e.prototype,t);n&&o(e,n);return e};var n=document.querySelector(".shopping-list-empty-page"),s=localStorage.getItem("shoppingList"),a=JSON.parse(s).map((function(e){var t=e.bookImg,o=e.author,n=e.listName,s=e.description,a=(e.buyLinks,e.title),c=(e.id,document.createElement("div"));c.classList.add("shoplist-book-container");var l='<img src="'.concat(t,'" class="shoplist-book-img">\n        <div class="shoplist-desc-container">\n          <h4 class="shoplist-book-title">').concat(a,'</h4>\n          <p class="shoplist-book-genre">').concat(n,'</p>\n          <p class="shoplist-book-description">').concat(s,'</p>\n          <p class="shoplist-book-author">').concat(o,'</p>\n        </div>\n        <a href="#" class="shoplist-trash"></a>');return c.innerHTML=l,c}));var c=document.createElement("div");c.classList.add("shopping-list-container"),a.forEach((function(e){c.appendChild(e)})),n.replaceWith(c),function(){var e={openModalBtn:document.querySelector("[data-modal-open-sign]"),closeModalBtn:document.querySelector("[data-modal-close-sign]"),modal:document.querySelector("[data-modal-sign]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),window.onload=function(){var e=document.querySelector(".isshowbtn");window.onscroll=function(){window.scrollY>500?e.classList.remove("isshowbtn__hide"):window.scrollY<500&&e.classList.add("isshowbtn__hide")},e.onclick=function(e){window.scrollTo({top:0,behavior:"smooth"})}};document.querySelector(".countBtn");document.querySelector(".acum").innerHTML=0;var l=document.querySelector("[data-mobile-menu-btn]"),i=document.querySelector("[data-mobile-menu]"),r=document.querySelector("body");l.addEventListener("click",(function(){l.classList.toggle("is-open"),i.classList.toggle("is-open"),r.classList.toggle("mobile-menu-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(i.classList.remove("is-open"),l.classList.remove("is-open"),r.classList.remove("mobile-menu-open"))}));var d="#111111",p="#202024",u="#EAC645",h="#202024",m="#FFFFFF",g="#FFFFFF",y="#F6F6F6",b="#4F2EE8",v="#F6F6F6",f="#111111",k="light",L=document.documentElement;var w=document.querySelector("#checkbox");console.log(w),w.addEventListener("change",(function(){"light"===k?(L.style.setProperty("--bg-white-header",d),L.style.setProperty("--bg-home-page",p),L.style.setProperty("--hover-focus",u),L.style.setProperty("--bg-card-book-shoppinglist-page",h),L.style.setProperty("--text-color-card-book-shoppinglist-page",m),k="dark",localStorage.setItem("data-theme","dark")):(L.style.setProperty("--bg-white-header",g),L.style.setProperty("--bg-home-page",y),L.style.setProperty("--hover-focus",b),L.style.setProperty("--bg-card-book-shoppinglist-page",v),L.style.setProperty("--text-color-card-book-shoppinglist-page",f),k="light",localStorage.setItem("data-theme","light"))})),w.addEventListener("change",(function(){w.checked,w.classList.toggle("dark-theme")}))}();
//# sourceMappingURL=shopping_list.a6d9c439.js.map