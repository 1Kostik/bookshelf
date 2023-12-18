import { Pagination } from './pagination';
import { isAuthUser } from './isAuthUser';
isAuthUser();

export const refs = {
  paginationContainer: document.querySelector('.pagination-container'),
  shoppingListContainerEl: document.querySelector('.shopping-list-container'),
};

// CreateMarkup
export function makeShoplistMarkup(shoppingList) {
  const { bookImg, author, listName, description, title, buyLinks, id } =
    shoppingList;

  const shoplistMarkup = `<div class="shoplist-book-container" id="${id}"><img src="${bookImg}" class="shoplist-book-img">
        <div class="shoplist-desc-container">
          <h4 class="shoplist-book-title">${title}</h4>
          <p class="shoplist-book-genre">${listName}</p>
          <p class="shoplist-book-description">${description}</p>
           <p class="shoplist-book-author">${author}</p>
        </div>
        <div class="shoplist-icons">
    <ul class="shoplist-icons-list">
      <li class="shoplist-icons-li">
        <a href="${buyLinks[0].url}" target="blank">
          <div class="shoplist-icon-amazon"></div>
        </a>
      </li>
      <li class="shoplist-icons-li">
        <a href="${buyLinks[2].url}">
          <div class="shoplist-icon-barnesAndNoble"></div>
        </a>
      </li>
      <li class="shoplist-icons-li">
        <a href="${buyLinks[4].url}">
          <div class="shoplist-icon-bookshop"></div>
        </a>
      </li>
    </ul>
  </div>
        <div class="shoplist-trash"></div> </div>
`;
  return shoplistMarkup;
}

//  Empty container markup
function emptyContainerMarkup() {
  refs.shoppingListContainerEl.innerHTML = `<div class="shopping-list-empty-page">
            <p class="shopping-list-empty-text">
              This page is empty, add some books <br />
              and proceed to order.
            </p>
            <div class="shopping-list-empty-image"></div>
          </div>`;
}

const pagination = new Pagination();

refs.paginationContainer.addEventListener('click', onTargetPageClick);

function onTargetPageClick(e) {
  let targetEL;

  if (e.target.nodeName === 'svg') {
    targetEL = e.target.parentNode.textContent.trim();
  } else if (e.target.nodeName === 'use') {
    targetEL = e.target.parentNode.parentNode.textContent.trim();
  } else if (e.target.nodeName === 'BUTTON') {
    targetEL = e.target.textContent.trim();
  }

  const isTargetNumber = !Number.isNaN(Number(targetEL));

  if (targetEL === '>') {
    pagination.increase(localStorageShoppingList);
  } else if (targetEL === '<') {
    pagination.decrease(localStorageShoppingList);
  } else if (targetEL === '<<') {
    pagination.firstPage(localStorageShoppingList);
  } else if (targetEL === '>>') {
    pagination.lastPage(localStorageShoppingList);
  } else if (isTargetNumber) {
    pagination.targetPage(localStorageShoppingList, Number(targetEL));
  } else if (targetEL === '...') {
    pagination.nextGroup(localStorageShoppingList);
  }
}

const shoppingListJSON = localStorage.getItem('shoppingList');
let localStorageShoppingList = JSON.parse(shoppingListJSON);

if (localStorageShoppingList.length !== 0) {
  pagination.firstPage(localStorageShoppingList);
}

// REMOVE BOOK
export function removesBookFromShoppingList(event) {
  const id = event.target.closest('.shoplist-book-container').id;
  localStorageShoppingList = localStorageShoppingList.filter(
    book => book.id !== id
  );
  localStorage.setItem(
    'shoppingList',
    JSON.stringify(localStorageShoppingList)
  );

  pagination.afterBookDeleteUpdate(localStorageShoppingList);

  if (localStorageShoppingList.length === 0) {
    emptyContainerMarkup();
  }
}
