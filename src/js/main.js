const refs = {
    bestsellersSectionEl: document.querySelector('.bookshelf'),
    categoriesListEl: document.querySelector('.categories-list'),
    allCategoriesTitleEl: document.querySelector('.cat-list'),
    bestsellersButton:document.querySelector('.bestsellers-button'),
}
var debounce = require('lodash.debounce');
import { makeMarkupBook } from './renderMarkup';
import { FetchApiBooks } from './fetchApi';
import Notiflix from 'notiflix';
const fetchApiBooks = new FetchApiBooks();


window.addEventListener('DOMContentLoaded', loadTopBooksOnClick);
refs.allCategoriesTitleEl.addEventListener("click",  loadTopBooksOnClick);

async function  loadTopBooksOnClick(event) {
    try {
        const data = await fetchApiBooks.fetchTopBooks();
        if (data.length === 0 || data === undefined) {
            Notiflix.Notify.failure("Sorry, we didn't find anything according to your request.");
           return
       }
        makeMarkupTopBooksGallery(data);
       
    } catch (error) {
        console.log(error.message)
    }
}

refs.bestsellersSectionEl.addEventListener('click', onCattegoryButtonElClick)
async function onCattegoryButtonElClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return
    }
    const cattegoryName = event.target.name;
     try {
         const data = await fetchApiBooks.fetchSelectedCategory(cattegoryName);
         if (data.length === 0 || data === undefined) {
            Notiflix.Notify.failure("Sorry, we didn't find anything according to your request.");
           return
       }
        document.querySelector('.bestsellers-title').innerHTML = changeColorStyleInTitle(cattegoryName);
         makeMarkupCategoryShelf(data, cattegoryName);
    } catch (error) {
        console.log(error.message)
    }
}

async function  makeMarkupTopBooksGallery(data) {
    const markup =await data.reduce((acc, {list_name, books}) => {
       acc += `
        <div class="bestsellers-category-item">
        <p class="bestsellers-category-name" name="${list_name}">${list_name}</p> 
        <ul class="bestsellers-book-list">
        ${makeMarkupBook(books)}
        </ul>
        <button type="button" class="bestsellers-button" name="${list_name}">see more</button>
        </div>`
        
        return acc
    }, `<h2 class="bestsellers-title">${changeColorStyleInTitle('Best Sellers Books')}</h2>`);
    refs.bestsellersSectionEl.innerHTML = markup;
}


function changeColorStyleInTitle(category) {
    const titleToArray = category.trim().split(" ");
    const lastWord=titleToArray[titleToArray.length-1];
    const stringExceptLastWord = titleToArray.slice(0, titleToArray.length - 1).join(' ');
    const stringFinal = stringExceptLastWord + ` <span class="categories-title-last-word">${lastWord}</span>`;
    return stringFinal;
}


refs.categoriesListEl.addEventListener('click', loadCategoryBooksOnClick);
async function loadCategoryBooksOnClick(event) {
    if (event.target.nodeName !== 'LI' || event.target.textContent=== 'All categories') {
        return
    }
    const nameCategory = event.target.textContent;
 try {
     const data = await fetchApiBooks.fetchSelectedCategory(nameCategory);
     if (data.length === 0 || data === undefined) {
            Notiflix.Notify.failure("Sorry, we didn't find anything according to your request.");
           return
       }
    document.querySelector('.bestsellers-title').innerHTML = changeColorStyleInTitle(nameCategory);
     makeMarkupCategoryShelf(data, nameCategory);
    } catch (error) {
        console.log(error.message)
    }
}

function makeMarkupCategoryShelf(data, nameCategory) {
    refs.bestsellersSectionEl.innerHTML= `<h2 class="bestsellers-title">${changeColorStyleInTitle(nameCategory)}</h2>
        <div class="bestsellers-category-item" name="${nameCategory}">
        <ul class="bestsellers-book-list">
       ${makeMarkupBook(data)}
        </ul>
        </div>`
}

