export class FetchApiBooks {
  constructor() {
    this.baseUrl = 'https://books-backend.p.goit.global';

    this.categoryList = '/books/category-list';
    this.topBooks = '/books/top-books';
    this.selectedCategory = '/books/category?category=';
    this.bookInfo = '/books/';
  }
  fetchApi(param) {
    return fetch(`${this.baseUrl}${param}`).then(response => response.json());
  }
  fetchCategoryList() {
    return this.fetchApi(this.categoryList);
  }
  fetchTopBooks() {
    return this.fetchApi(this.topBooks);
  }
  fetchSelectedCategory(category) {
    return this.fetchApi(`${this.selectedCategory}${category}`);
  }
  fetchBookInfo(id) {
    return this.fetchApi(`${this.bookInfo}${id}`);
  }
}

//---------------- EXAMPLE -----------------------
// const fetchList = new FetchApiBooks();

// // fetchList.fetchCategoryList();
// fetchList.fetchTopBooks();
// fetchList.fetchSelectedCategory("Paperback Nonfiction");
// fetchList.fetchBookInfo("643282b1e85766588626a07f");



// import { renderBook, renderBestSellCategories } from './renderMarkup';

// fetchList
//   .fetchTopBooks()
//   .then(renderBestSellCategories)
//     .catch(error => console.log(error));
  





    

  

// function renderBook(book) {
//   const { book_image, author, title } = book;

//   return ` <li class="card">
//             <a>
//                 <img src="${book_image}" class="cardImg">
//                 <div class="titleContainer">
//                 <h2 class="cardTitle">${title}</h2>
//                 </div>
//                 <p class="cardAuthor">${author}</p>
//             </a>
//         </li> `;
// }

// function renderBestSellCategories(bestSellers) {
//   const bestCategory = bestSellers.flatMap(bestSellCat => {
//     const { list_name: listName, books } = bestSellCat;

//     const fiveBooks = books.map(renderBook).join(' ');
//     return `  <ul>
//                 <h3 style="color: red">${listName}</h3>
//                 ${fiveBooks}
//               </ul>`;
//   });
//   containerEl.innerHTML = bestCategory;
// }


