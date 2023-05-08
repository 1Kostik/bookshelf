const shoppingListContainer = document.querySelector(
  '.shopping-list-empty-page'
);
const shoppingListJSON = localStorage.getItem('shoppingList');
const shoppingList = JSON.parse(shoppingListJSON);

const shoplistBooks = shoppingList.map(makeShoplistMarkup);

function makeShoplistMarkup(shoppingList) {
  const { bookImg, author, listName, description, buyLinks, title, id } =
    shoppingList;

  const shoplistBookContainer = document.createElement('div');
  shoplistBookContainer.classList.add('shoplist-book-container');

  const shoplistMarkup = `<img src="${bookImg}" class="shoplist-book-img">
        <div class="shoplist-desc-container">
          <h4 class="shoplist-book-title">${title}</h4>
          <p class="shoplist-book-genre">${listName}</p>
          <p class="shoplist-book-description">${description}</p>
          <p class="shoplist-book-author">${author}</p>
        </div>
        <a href="#" class="shoplist-trash"></a>`;

  shoplistBookContainer.innerHTML = shoplistMarkup;

  return shoplistBookContainer;
}

const newShoppingListContainer = document.createElement('div');
newShoppingListContainer.classList.add('shopping-list-container');
shoplistBooks.forEach(book => {
  newShoppingListContainer.appendChild(book);
});

shoppingListContainer.replaceWith(newShoppingListContainer);
