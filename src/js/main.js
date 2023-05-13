const refs = {
  bestsellersSectionEl: document.querySelector('.bookshelf'),
  categoriesListEl: document.querySelector('.categories-list'),
  allCategoriesTitleEl: document.querySelector('.cat-list'),
  bestsellersButton: document.querySelector('.bestsellers-button'),
  spinnerEl: document.querySelector('.spinner-more'),
};
var debounce = require('lodash.debounce');
import { makeMarkupBook } from './renderMarkup';
import { FetchApiBooks } from './fetchApi';
import Notiflix from 'notiflix';
const fetchApiBooks = new FetchApiBooks();


function findAndMarkCartBook(shoppingList) {
  if (shoppingList===undefined || shoppingList === null) {
  return
  }
  shoppingList.forEach(({ id }) => {
    let findEl = document.querySelector(`._${id}`);
    if (!findEl) {
      return
    }
    findEl
      .querySelector('.book-shoppingcart')
      .classList.remove('is-hidden');
  });
}

window.addEventListener('DOMContentLoaded', loadTopBooksOnClick);
refs.allCategoriesTitleEl.addEventListener('click', loadTopBooksOnClick);

async function loadTopBooksOnClick(event) {
  try {
    refs.spinnerEl.classList.remove('spinner-hidden');
    const data = await fetchApiBooks.fetchTopBooks();
    if (data === undefined || data === null) {
      Notiflix.Notify.failure(
        "Sorry, we didn't find anything according to your request."
      );
      return;
    }
    refs.spinnerEl.classList.add('spinner-hidden');
    const markup = await makeMarkupTopBooksGallery(data);
    const shoppingList = await JSON.parse(localStorage.getItem('shoppingList'));
    findAndMarkCartBook(shoppingList);
  } catch (error) {
    console.log(error.message);
  }
}

refs.bestsellersSectionEl.addEventListener('click', onCattegoryButtonElClick);
async function onCattegoryButtonElClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
const shoppingList = await JSON.parse(localStorage.getItem('shoppingList'));
  refs.spinnerEl.classList.remove('spinner-hidden');
  const cattegoryName = event.target.name;
  try {
    const data = await fetchApiBooks.fetchSelectedCategory(cattegoryName);
    if ( data === undefined || data===null ) {
      Notiflix.Notify.failure(
        "Sorry, we didn't find anything according to your request."
      );
      return;
    }
    toUpperCaseCategoryName(cattegoryName);
    document.querySelector('.bestsellers-title').innerHTML =
      changeColorStyleInTitle(cattegoryName);
    const markup= await makeMarkupCategoryShelf(data, cattegoryName);
    const shoppingList =await JSON.parse(localStorage.getItem('shoppingList'));
    findAndMarkCartBook(shoppingList);
    
    refs.spinnerEl.classList.add('spinner-hidden');
  } catch (error) {
    console.log(error.message);
  }
}

async function makeMarkupTopBooksGallery(data) {
  const markup = await data.reduce((acc, { list_name, books }) => {
    acc += `
        <div class="bestsellers-category-item">
        <p class="bestsellers-category-name" name="${list_name}">${list_name}</p> 
        <ul class="bestsellers-book-list">
        ${makeMarkupBook(books)}
        </ul>
        <div class="bestsellers-button-container">
        <button type="button" class="bestsellers-button" name="${list_name}">see more</button>
        </div>
        </div>`;

    return acc;
  }, `<h2 class="bestsellers-title">${changeColorStyleInTitle('Best Sellers Books')}</h2>`);
  refs.bestsellersSectionEl.innerHTML = markup;
  hideBooks();
}

function changeColorStyleInTitle(category) {
  const titleToArray = category.trim().split(' ');
  const lastWord = titleToArray[titleToArray.length - 1];
  const stringExceptLastWord = titleToArray
    .slice(0, titleToArray.length - 1)
    .join(' ');
  const stringFinal =
    stringExceptLastWord +
    ` <span class="categories-title-last-word">${lastWord}</span>`;
  return stringFinal;
}

refs.categoriesListEl.addEventListener('click', loadCategoryBooksOnClick);
async function loadCategoryBooksOnClick(event) {
  if (
    document.querySelector('.bestsellers-category-item') === null ||
    event.target.nodeName !== 'LI' ||
    event.target.textContent.trim() === 'All categories'
  ) {
    return;
  }
  refs.spinnerEl.classList.remove('spinner-hidden');
  const nameCategory = event.target.textContent;
  try {
    const data = await fetchApiBooks.fetchSelectedCategory(nameCategory);
    if (data === undefined || data === null) {
      Notiflix.Notify.failure(
        "Sorry, we didn't find anything according to your request."
      );
      return;
    }
    document.querySelector('.bestsellers-title').innerHTML =
      changeColorStyleInTitle(nameCategory);
   makeMarkupCategoryShelf(data, nameCategory);
    const shoppingList = await JSON.parse(localStorage.getItem('shoppingList'));
    findAndMarkCartBook(shoppingList);
    refs.spinnerEl.classList.add('spinner-hidden');
  } catch (error) {
    console.log(error.message);
  }
}

function makeMarkupCategoryShelf(data, nameCategory) {
  refs.bestsellersSectionEl.innerHTML = `<h2 class="bestsellers-title">${changeColorStyleInTitle(
    nameCategory
  )}</h2>
        <div class="bestsellers-category-item" name="${nameCategory}">
        <ul class="category-book-list">
       ${makeMarkupBook(data)}
        </ul>
        </div>`;
}

function toUpperCaseCategoryName(cattegoryName) {
  const listEl = document.querySelector('.upper-case');
  if (listEl) {
    listEl.classList.remove('upper-case');
  }
  document
    .querySelector(`li[name="${cattegoryName}"]`)
    .classList.add('upper-case');
}

window.addEventListener('resize', debounce(hideBooks, 200));
function hideBooks() {
  const listCategoriesEl = Array.from(
    document.querySelectorAll('.bestsellers-book-list')
  );
  if (window.innerWidth < 768) {
    listCategoriesEl.forEach(item => {
      for (let i = 0; i < item.children.length; i += 1) {
        if (i === 0) {
          item.children[i].hidden = false;
          continue;
        }
        item.children[i].hidden = true;
      }
    });
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    listCategoriesEl.forEach(item => {
      for (let i = 0; i < item.children.length; i += 1) {
        if (i <= 2) {
          item.children[i].hidden = false;
          continue;
        }
        item.children[i].hidden = true;
      }
    });
  }
  if (window.innerWidth >= 1440) {
    listCategoriesEl.forEach(item => {
      for (let i = 0; i < item.children.length; i += 1) {
        item.children[i].hidden = false;
      }
    });
  }
}

// window.addEventListener('resize', showPicture);
// async function showPicture() {
//     const width = window.innerWidth;
//     const data = await getBestsellersBooks();
//     console.log(data[1]);
//     data.map(item => {
//         console.log(item.books)
//     })
//        if (width <= 375) {
//            const correctArrey = data.slice(0, 1);
//            console.log(correctArrey,"ok")
//         return makeMarkupBook(correctArrey);

//        } else if (width > 375 && width <= 768) {
//            const correctArrey = data.slice(0, 3)
//            console.log(correctArrey)
//         return makeMarkupBook(correctArrey);

//        }
//    return makeMarkupBook(data);
// }
