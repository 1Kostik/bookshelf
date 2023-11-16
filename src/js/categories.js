import { FetchApiBooks } from './fetchApi';

const categoriesRef = document.querySelector('.categories');

const categoriesListRef = document.querySelector('.categories-list');
const catListRef = document.querySelector('.cat-list');

const fetchCategories = new FetchApiBooks();

fetchCategories.fetchCategoryList().then(markupCategories).then(createOnScreen);

categoriesListRef.addEventListener('click', onCategoryNameClick);

function onCategoryNameClick(e) {
  const catList = e.target.classList.contains('cat-list');
  if (!catList) {
    return;
  }
  let currentName = e.target.textContent;

  const currenUpperCaseCategory = document.querySelector(
    '.cat-list.upper-case'
  );

  if (currenUpperCaseCategory) {
    currenUpperCaseCategory.classList.remove('upper-case');
  }

  const currentCat = e.target;
  const parentCurrentCat = currentCat.closest('.cat-list');

  parentCurrentCat.classList.add('upper-case');

  if (currentName === 'All categories') {
    fetchCategories.fetchTopBooks();
    return;
  }
}

function markupCategories(catArray) {
  return catArray.reduce((acc, item) => {
    acc += `<li class ="cat-list cat-text" name = "${item.list_name}">${item.list_name}</li>`;
    return acc;
  }, '');
}

function createOnScreen(data) {
  categoriesListRef.insertAdjacentHTML('beforeend', data);
}
