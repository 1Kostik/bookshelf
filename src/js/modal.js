import { FetchApiBooks } from './fetchApi';
const fetchBook = new FetchApiBooks();

const refs = {
  bestsellersSectionEl: document.querySelector('.bookshelf'),
  bodyEl: document.querySelector('body'),
  closeButtonEl: document.querySelector('.modal-close-btn'),
  modalActionBtnEl: document.querySelector('.modal-action-btn'),
  modalBookCardWrapEl: document.querySelector('.modal-book-card-wrapper'),
  modalNotification: document.querySelector('.congratulations-text'),
  backdropEl: document.querySelector('.backdrop'),
};

const STORAGE_KEY = 'shoppingList';
const BUTTON_TEXT_ADD = 'ADD TO SHOPPING LIST';
const BUTTON_TEXT_REMOVE = 'REMOVE FROM THE SHOPPING LIST';
const NOTIFICATION =
  'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';

let shoppingList = [];
let shoppingBook = {};
let bookId = null;

if (JSON.parse(localStorage.getItem(STORAGE_KEY))) {
  shoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY));
}

refs.bestsellersSectionEl.addEventListener('click', onCardClick);

//  ----------------------- onCardClick FUNCTION------------------------------
function onCardClick(e) {
  console.dir(e.target.nodeName !== 'IMG');
  console.dir(e.target.parentNode.nodeName !== 'LI');

  refs.modalActionBtnEl.addEventListener('click', onModalActionBtnClick);
  refs.backdropEl.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onModalClose);
  // ______ on book card click check____
  if (e.target.nodeName !== 'IMG' && e.target.parentNode.nodeName !== 'LI') {
    return;
  }
  // _________________________________________
  refs.bodyEl.classList.add('modalIsOpen');
  refs.backdropEl.classList.remove('is-hidden');

  // _______get book`s Id___________________
  if (e.target.nodeName === 'IMG') {
    bookId = e.target.parentNode.parentNode.id;
  } else {
    bookId = e.target.parentNode.id;
  }
  //__________________________________________
  fetchBook
    .fetchBookInfo(bookId)
    .then(bookInfo => {
      renderModalCard(bookInfo);

      const isIdFinded = shoppingList.some(({ id }) => id === bookInfo._id);
      if (isIdFinded) {
        refs.modalActionBtnEl.textContent = BUTTON_TEXT_REMOVE;
        refs.modalNotification.textContent = NOTIFICATION;
      } else {
        refs.modalActionBtnEl.textContent = BUTTON_TEXT_ADD;
      }
    })
    .catch(err => console.log(err));
}

// ------------------RENDER MODAL BOOK CARD---------------------------------------------
function renderModalCard(bookInfo) {
  const {
    book_image: bookImg,
    author,
    list_name: listName,
    description,
    buy_links: buyLinks,
    title,
    _id: id,
  } = bookInfo;

  shoppingBook = {
    bookImg,
    listName,
    author,
    description,
    buyLinks,
    title,
    id,
  };

  const modalCardMarkup = `<div class="modal-book-picture-wrapper">
                 <img src="${bookImg}" class="modalBookImg"> 
            </div>
            <div class="modal-book-info-wrapper">
                <h4 class="modal-book-title">${title}</h3>
                <p class="modal-book-author">${author}</p>
                <p class="modal-book-description">${description}</p>
                <ul class="list modal-shop-list"> 
                    <li>
                    <a href="${buyLinks[0].url}" class="modal-shop-link icon-amazon">
                    </a>
                    </li>
                    <li>
                    <a href="${buyLinks[2].url}" class="modal-shop-link icon-barnesAndNoble">
                    </a>
                    </li>
                    <li>
                    <a href="${buyLinks[4].url}" class="modal-shop-link icon-bookshop">
                    </a>
                    </li>
                </ul>
            </div>`;

  refs.modalBookCardWrapEl.innerHTML = modalCardMarkup;
}
// --------------------------------------------------------------------------------------

// --------------------CLOSE MODAL-----------------------------------------
function onModalClose(e) {
  if (e.target.hasAttribute('data-modal-close') || e.key === 'Escape') {
    refs.backdropEl.classList.add('is-hidden');
    refs.bodyEl.classList.remove('modalIsOpen');

    refs.backdropEl.removeEventListener('click', onModalClose);
    document.removeEventListener('keydown', onModalClose);
    refs.modalActionBtnEl.removeEventListener('click', onModalActionBtnClick);

    refs.modalBookCardWrapEl.innerHTML = ''; // if spinner will be  - delete
    refs.modalActionBtnEl.textContent = ''; // if spinner will be  - delete
    refs.modalNotification.textContent = '';
  }
}
// ------------------------------------------------------------------------

// -------------------ADD or REMOVE BOOK in SHOPPING LIST--------------------
function onModalActionBtnClick(e) {
  // --------------- add book ----------------------
  if (e.target.textContent === BUTTON_TEXT_ADD) {
    e.target.textContent = BUTTON_TEXT_REMOVE;
    refs.modalNotification.textContent = NOTIFICATION;

    shoppingList.push(shoppingBook);
    updateBookOnStorage();
  }
  // --------------- remove book ----------------------
  else {
    e.target.textContent = BUTTON_TEXT_ADD;
    refs.modalNotification.textContent = '';
    removesBookFromShoppingList();
    updateBookOnStorage();
  }
}
// -----------------------------------------------------------------------

function removesBookFromShoppingList() {
  shoppingList = shoppingList.filter(({ id }) => id !== shoppingBook.id);
}

function updateBookOnStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
}

export { shoppingList, updateBookOnStorage, removesBookFromShoppingList };

// import shoppingList from './modal';  // to shopping LIST
// console.log(shoppingList);
