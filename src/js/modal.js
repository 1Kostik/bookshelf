import { FetchApiBooks } from './fetchApi';
const fetchBook = new FetchApiBooks();

const refs = {
  bestsellersSectionEl: document.querySelector('.bookshelf'),
  bodyEl: document.querySelector('body'),
  modalEl: document.querySelector('.modal'),
  modalShoopLinks: document.querySelectorAll('.modal-shop-link'),
  closeButtonEl: document.querySelector('.modal-close-btn'),
  modalActionBtnEl: document.querySelector('.modal-action-btn'),
  modalBookPictureWrapEl: document.querySelector('.modal-book-picture-wrapper'),
  modalBookInfoWrapEl: document.querySelector('.modal-book-info-wrapper'),
  modalNotification: document.querySelector('.congratulations-text'),
  backdropEl: document.querySelector('.backdrop'),
  acum: document.querySelector('.acum'),
  spinnerEl: document.querySelector('.spinner-more'),
  errContainerEl: document.querySelector('.errContainer'),
};

const STORAGE_KEY = 'shoppingList';
const BUTTON_TEXT_ADD = 'ADD TO SHOPPING LIST';
const BUTTON_TEXT_REMOVE = 'REMOVE FROM THE SHOPPING LIST';
const NOTIFICATION = `Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.`;

let shoppingList = [];
let shoppingBook = {};
let bookId = null;

if (JSON.parse(localStorage.getItem(STORAGE_KEY))) {
  shoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY));
  refs.acum.innerHTML = shoppingList.length;
}

refs.bestsellersSectionEl.addEventListener('click', onCardClick);

//  ----------------------- ON CARD CLICK FUNCTION------------------------------
function onCardClick(e) {
  e.preventDefault();

  refs.modalActionBtnEl.addEventListener('click', onModalActionBtnClick);
  refs.backdropEl.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onModalClose);
  
  // ______ on book-card click check____
  if (
    e.target.nodeName !== 'IMG' &&
    e.target.nodeName !== 'A' &&
    e.target.nodeName !== 'P'
    ) {
      return;
    }
  refs.spinnerEl.classList.remove('spinner-hidden');

  // _________________________________________
  refs.bodyEl.classList.add('modalIsOpen');
  refs.backdropEl.classList.remove('is-hidden');

  // _______get book`s Id___________________

  if (e.target.nodeName === 'IMG') {
    bookId = e.target.parentNode.parentNode.parentNode.id;
  } else if (e.target.nodeName === 'A') {
    bookId = e.target.parentNode.id;
  } else {
    bookId = e.target.parentNode.parentNode.id;
  }
  //__________________________________________

  fetchBook
    .fetchBookInfo(bookId)
    .then(bookInfo => {
      refs.spinnerEl.classList.add('spinner-hidden');

      renderModalCard(bookInfo);

      refs.modalEl.classList.remove('is-hidden');

      const isShoppingListIncludeId = shoppingList.some(
        ({ id }) => id === bookInfo._id
      );

      if (isShoppingListIncludeId) {
        refs.modalActionBtnEl.textContent = BUTTON_TEXT_REMOVE;
        refs.modalNotification.innerHTML = NOTIFICATION;
      } else {
        refs.modalActionBtnEl.textContent = BUTTON_TEXT_ADD;
      }
    })
    .catch(err => {
      console.log('sd', err);
      refs.errContainerEl.classList.remove('is-hidden');
      refs.errContainerEl.innerHTML = `<p class="errText">${err}</p>`;
    });
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

  const modalImgMarkup = `<img src="${bookImg}" class="modalBookImg">`;
  const modalInfoMarkup = `<h4 class="modal-book-title">${title}</h3>
                          <p class="modal-book-author">${author}</p>
                          <p class="modal-book-description">${description}</p>`;

  refs.modalBookPictureWrapEl.innerHTML = modalImgMarkup;
  refs.modalBookInfoWrapEl.innerHTML = modalInfoMarkup;

  refs.modalShoopLinks[0].setAttribute('href', buyLinks[0].url);
  refs.modalShoopLinks[1].setAttribute('href', buyLinks[1].url);
  refs.modalShoopLinks[2].setAttribute('href', buyLinks[4].url);
}
// --------------------------------------------------------------------------------------

// --------------------CLOSE MODAL-----------------------------------------
function onModalClose(e) {
  if (e.target.hasAttribute('data-modal-close') || e.key === 'Escape') {
    refs.backdropEl.classList.add('is-hidden');
    refs.bodyEl.classList.remove('modalIsOpen');
    refs.modalEl.classList.add('is-hidden');
    refs.errContainerEl.classList.add('is-hidden');

    refs.backdropEl.removeEventListener('click', onModalClose);
    document.removeEventListener('keydown', onModalClose);
    refs.modalActionBtnEl.removeEventListener('click', onModalActionBtnClick);

    refs.modalNotification.innerHTML = '';
  }
}
// ------------------------------------------------------------------------

// -------------------ADD or REMOVE BOOK in SHOPPING LIST--------------------
function onModalActionBtnClick(e) {
  const selectedEl = document.getElementById(`${shoppingBook.id}`);
  const cartEl = selectedEl.querySelector('a div.book-shoppingcart');

  // --------------- add book ----------------------
  if (e.target.textContent === BUTTON_TEXT_ADD) {
    e.target.textContent = BUTTON_TEXT_REMOVE;
    refs.modalNotification.innerHTML = `<p class="congratulations-text">${NOTIFICATION}</p>`;

    shoppingList.push(shoppingBook);
    updateBookOnStorage();

    refs.acum.innerHTML = shoppingList.length;

    cartEl.classList.remove('is-hidden');
  }
  // --------------- remove book ----------------------
  else {
    e.target.textContent = BUTTON_TEXT_ADD;
    refs.modalNotification.innerHTML = '';

    removesBookFromShoppingList();
    updateBookOnStorage();

    refs.acum.innerHTML = shoppingList.length;

    cartEl.classList.add('is-hidden');
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
