// import { scrollIntoView } from "scroll-js";

import { FetchApiBooks } from './fetchApi';

const fetchCategories = new FetchApiBooks();

const categoriesRef = document.querySelector('.categories');
const categoriesListRef = document.querySelector('.categories-list');

fetchCategories.fetchCategoryList().then(markupCategories).then(createOnScreen);

categoriesRef.addEventListener('click', onCategoryNameClick);

function onCategoryNameClick(e) {
  e.preventDefault();

  let currenName = e.target.textContent;
  if (currenName === 'All categories') {
    fetchCategories.fetchTopBooks();
    return;
  }
  fetchCategories.fetchSelectedCategory(currenName).then(markupCategories);
}

function markupCategories(catArray) {
  return catArray.reduce((acc, item) => {
    acc += `<li>${item.list_name}</li>`;
    return acc;
  }, '');
}

function createOnScreen(data) {
  categoriesListRef.insertAdjacentHTML('beforeend', data);
}
