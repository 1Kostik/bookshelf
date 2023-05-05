// import { markupCategories } from './markupCat.js';
// import { createOnScreen } from './createOnScreen.js';
// import { scrollIntoView } from "scroll-js";

const categoriesRef = document.body.querySelector('.categories');
const categoriesListRef = document.querySelector('.categories-list');

function getCategories() {
  const url = 'https://books-backend.p.goit.global/books/category-list';
  fetch(url)
    .then(response => response.json())
    .then(markupCategories)
    .then(createOnScreen);
}

getCategories();

categoriesRef.addEventListener('click', onCategoryNameClick);

function onCategoryNameClick(e) {
  e.preventDefault();
  let currenUrl = e.target.href;
  fetch(currenUrl).then(response => response.json());
}

function markupCategories(catArray) {
  const CAT_URL =
    'https://books-backend.p.goit.global/books/category?category=';
  return catArray.reduce((acc, item) => {
    acc += `<li><a href="${CAT_URL}${item.list_name}">${item.list_name}</a></li>`;
    return acc;
  }, '');
}



function createOnScreen(data) {
  categoriesListRef.insertAdjacentHTML('beforeend', data);
}
