 export function makeMarkupBook( books ) {
    const markup=  books.reduce((acc, { _id, book_image, author, title}) => {
     acc+=`<li class="book-item" id="${_id}">
    <img src="${book_image}" alt="${title}" class="book-img" width="180px" height="256px"/>
        <p>${title}</p>
        <p>${author}</p>
        </li>
    `
        return acc
    }, '')
    return markup
}