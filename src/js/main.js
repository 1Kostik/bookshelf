const refs = {
    bestsellersSectionEl: document.querySelector('.bookshelf'),
    categoriesListEl: document.querySelector('.categories-list'),
    allCategoriesTitleEl: document.querySelector('.cat-list'),
    bestsellersButton:document.querySelector('.bestsellers-button'),
}
var debounce = require('lodash.debounce');
import { makeMarkupBook } from './renderMarkup';
import { FetchApiBooks } from './fetchApi';
const fetchApiBooks = new FetchApiBooks();


window.addEventListener('DOMContentLoaded', loadBooksItems);
refs.allCategoriesTitleEl.addEventListener("click", loadBooksItems);

async function loadBooksItems(event) {
    try {
        const data = await fetchApiBooks.fetchTopBooks();
       const makeupBooks=await makeupBestsellersBooks(data);
       
    } catch (error) {
        console.log(error.message)
    }
}

 
refs.bestsellersSectionEl.addEventListener('click', onButtonCattegoryElClick)
async function onButtonCattegoryElClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return
    }
    refs.buttonCattegoryEl = document.querySelector('.bestsellers-button');
    const cattegoryName = event.target.name;
    const categoreTitleOnMainPage = document.querySelector('.bestsellers-title');
   const data = await fetchApiBooks.fetchSelectedCategory(cattegoryName);
    categoreTitleOnMainPage.innerHTML = changeColorStyleInTitle(cattegoryName);
     makeupCategoryShelf(data, cattegoryName);
}

async function makeupBestsellersBooks(data) {
    const bestsellersTitle = "Best Sellers Books";
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
    }, `<h2 class="bestsellers-title">${changeColorStyleInTitle(bestsellersTitle)}</h2>`);
    refs.bestsellersSectionEl.innerHTML = markup;
}



function changeColorStyleInTitle(category) {
    const titleInArray = category.trim().split(" ");
    const lastWord=titleInArray[titleInArray.length-1];
    const stringExceptLastWord = titleInArray.slice(0, titleInArray.length - 1).join(' ');
    const string = stringExceptLastWord + ` <span class="categories-title-last-word">${lastWord}</span>`;
    return string;
}


refs.categoriesListEl.addEventListener('click', loadCategoryBooksOnClick);
async function loadCategoryBooksOnClick(event) {
    const nameCategory = event.target.textContent;
    console.log(nameCategory)
    const categoreTitleOnMainPage = document.querySelector('.bestsellers-title');
    console.log(categoreTitleOnMainPage)
    const data = await fetchApiBooks.fetchSelectedCategory(nameCategory);
    categoreTitleOnMainPage.innerHTML = changeColorStyleInTitle(nameCategory);
     makeupCategoryShelf(data, nameCategory);
   
}

function makeupCategoryShelf(data, nameCategory) {
    if (nameCategory === 'All categories') {
        nameCategory='Best Sellers Books'
    }
    refs.bestsellersSectionEl.innerHTML= `<h2 class="bestsellers-title">${changeColorStyleInTitle(nameCategory)}</h2>
        <div class="bestsellers-category-item" name="${nameCategory}">
        <ul class="bestsellers-book-list">
       ${makeMarkupBook(data)}
        </ul>
        </div>`
}

