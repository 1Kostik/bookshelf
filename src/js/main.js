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
    console.log(data)
    const markup =await data.reduce((acc, {list_name, books}) => {
       acc += `
        <div class="bestsellers-category-item">
        <p class="bestsellers-category-name">${list_name}</p> 
        <ul class="bestsellers-book-list">
        ${makeMarkupBook(books)}
        </ul>
        <button type="button" class="bestsellers-button">see more</button>
        </div>`
        
        return acc
    }, '');
    refs.bestsellersSectionEl.innerHTML = markup;
}

