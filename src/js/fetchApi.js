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






  