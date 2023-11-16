export function makeMarkupBook(books) {
    const markup=  books.reduce((acc, { _id, book_image, author, title}) => {
        acc += `<li class="book-item" id="${_id}">
     <a class="bookshelf-bool-link" href="#">
    <div class="book-img-container _${_id}">
    <div class="book-shoppingcart is-hidden"></div>
     <img class="book-img" loading="lazy" src="${book_image}" alt="${title}"  width="180px" height="256px"/>
     <div class="books-overlay">
     <p class="books-overlay-text">quick view 
     </p>
     </div>   
     </div>
     <p class="book-title">${title}</p>
        <p class="author-name">${author}</p>
        </a>
        </li>
    `
        return acc
    }, '')
    return markup
}

