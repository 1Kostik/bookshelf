function t(t){return t.reduce(((t,{_id:e,book_image:o,author:s,title:n})=>t+=`<li class="book-item" id="${e}">\n    <img class="book-img" loading="lazy" src="${o}" alt="${n}"  width="180px" height="256px"/>\n        <p class="book-title">${n}</p>\n        <p class="author-name">${s}</p>\n        </li>\n    `),"")}const e={bestsellersSectionEl:document.querySelector(".bookshelf")};window.addEventListener("DOMContentLoaded",(async function(o){try{!async function(o){console.log(o);const s=await o.reduce(((e,{list_name:o,books:s})=>e+=`\n        <div class="bestsellers-category-item">\n        <p class="bestsellers-category-name">${o}</p> \n        <ul class="bestsellers-book-list">\n        ${t(s)}\n        </ul>\n        <button type="button" class="bestsellers-button">see more</button>\n        </div>`),"");e.bestsellersSectionEl.innerHTML=s}(await async function(){try{const t=await fetch("https://books-backend.p.goit.global/books/top-books");return await t.json()}catch(t){console.log(t.message)}}())}catch(t){console.log(t.message)}}));const o=new class{fetchApi(t){return fetch(`${this.baseUrl}${t}`).then((t=>t.json()))}fetchCategoryList(){return this.fetchApi(this.categoryList)}fetchTopBooks(){return this.fetchApi(this.topBooks)}fetchSelectedCategory(t){return this.fetchApi(`${this.selectedCategory}${t}`)}fetchBookInfo(t){return this.fetchApi(`${this.bookInfo}${t}`)}constructor(){this.baseUrl="https://books-backend.p.goit.global",this.categoryList="/books/category-list",this.topBooks="/books/top-books",this.selectedCategory="/books/category?category=",this.bookInfo="/books/"}},s=document.querySelector(".categories"),n=document.querySelector(".categories-list");function c(t){return t.reduce(((t,e)=>t+=`<li>${e.list_name}</li>`),"")}o.fetchCategoryList().then(c).then((function(t){n.insertAdjacentHTML("beforeend",t)})),s.addEventListener("click",(function(t){t.preventDefault();let e=t.target.textContent;if("All categories"===e)return void o.fetchTopBooks();o.fetchSelectedCategory(e).then(c)}));
//# sourceMappingURL=index.27df3d41.js.map
