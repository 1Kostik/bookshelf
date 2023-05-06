const refs = {
    bestsellersSectionEl: document.querySelector('.bookshelf'),
}

import {makeMarkupBook} from './renderMarkup'

async function getBestsellersBooks() {
    try {
        const response = await fetch('https://books-backend.p.goit.global/books/top-books');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message)
    }
}


window.addEventListener('DOMContentLoaded', loadBooksItems);
async function loadBooksItems(event) {
    try {
        const data = await getBestsellersBooks();
        makeupBestsellersBooks(data);

    } catch (error) {
        console.log(error.message)
    }
}

async function makeupBestsellersBooks(data) {
    console.log(data);
    const bestsellersTitle = "Best Sellers Books";
    const markup =await data.reduce((acc, {list_name, books}) => {
       acc += `
        <div class="bestsellers-category-item">
        <p class="bestsellers-category-name" name="${list_name}">${list_name}</p> 
        <ul class="bestsellers-book-list">
        ${makeMarkupBook(books)}
        </ul>
        <button type="button" class="bestsellers-button">see more</button>
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

