const containerEl = document.querySelector('.container');

function renderBook(book) {
  const { book_image, author, title } = book;

  return ` <li class="card">
            <a>
                <img src="${book_image}" class="cardImg">
                <div class="titleContainer">
                <h2 class="cardTitle">${title}</h2>
                </div>
                <p class="cardAuthor">${author}</p>
            </a>
        </li> `;
}

function renderBestSellCategories(bestSellers) {
  const bestCategory = bestSellers.flatMap(bestSellCat => {
    const { list_name: listName, books } = bestSellCat;

    const fiveBooksMarkUp = books.map(renderBook).join(' ');
    return `  <ul>
                <h3 style="color: red">${listName}</h3>
                ${fiveBooksMarkUp}
              </ul>`;
  });
  containerEl.innerHTML = bestCategory;
}

export { renderBook, renderBestSellCategories };
