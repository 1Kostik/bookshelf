(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-sign]"),closeModalBtn:document.querySelector("[data-modal-close-sign]"),modal:document.querySelector("[data-modal-sign]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),window.onload=()=>{const e=document.querySelector(".isshowbtn");window.onscroll=()=>{window.scrollY>500?e.classList.remove("isshowbtn__hide"):window.scrollY<500&&e.classList.add("isshowbtn__hide")},e.onclick=e=>{window.scrollTo({top:0,behavior:"smooth"})}};document.querySelector(".countBtn");document.querySelector(".acum").innerHTML=0;const e=document.querySelector("[data-mobile-menu-btn]"),o=document.querySelector("[data-mobile-menu]"),t=document.querySelector("body");e.addEventListener("click",(function(){e.classList.toggle("is-open"),o.classList.toggle("is-open"),t.classList.toggle("mobile-menu-open")}));const n="#111111",s="#202024",l="#EAC645",c="#FFFFFF",d="#D0D0D0",r="#4F2EE8";let i="light";const a=document.documentElement;document.querySelector("#checkbox").addEventListener("change",(function(){"light"===i?(a.style.setProperty("--bg-white-header",n),a.style.setProperty("--bg-home-page",s),a.style.setProperty("--hover-focus",l),i="dark"):(a.style.setProperty("--bg-white-header",c),a.style.setProperty("--bg-home-page",d),a.style.setProperty("--hover-focus",r),i="light")}));
//# sourceMappingURL=shopping_list.9837efdc.js.map
