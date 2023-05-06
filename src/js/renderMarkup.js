 export function makeMarkupBook( books ) {
    const markup=  books.reduce((acc, { _id, book_image, author, title}) => {
     acc+=`<li class="book-item" id="${_id}">
    <div class="book-img-container">
     <img class="book-img" loading="lazy" src="${book_image}" alt="${title}"  width="180px" height="256px"/>
        </div>
     <p class="book-title">${title}</p>
        <p class="author-name">${author}</p>
        </li>
    `
        return acc
    }, '')
    return markup
}