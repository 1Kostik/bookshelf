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
};
console.log(refs.modalShoopLinks);
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

//  ----------------------- onCardClick FUNCTION------------------------------
function onCardClick(e) {
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
      refs.modalEl.classList.remove('is-hidden');

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
  console.log(buyLinks);
  const modalImgMarkup = `<img src="${bookImg}" class="modalBookImg">`;
  const modalInfoMarkup = `<h4 class="modal-book-title">${title}</h3>
                          <p class="modal-book-author">${author}</p>
                          <p class="modal-book-description">${description}</p>`;

  refs.modalBookPictureWrapEl.innerHTML = modalImgMarkup;
  refs.modalBookInfoWrapEl.innerHTML = modalInfoMarkup;
  refs.modalShoopLinks[0].setAttribute('href', buyLinks[0]);
  refs.modalShoopLinks[1].setAttribute('href', buyLinks[1]);
  refs.modalShoopLinks[2].setAttribute('href', buyLinks[4]);
  console.dir(refs.modalShoopLinks[0]);
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
    refs.modalEl.classList.add('is-hidden');

    refs.modalNotification.textContent = '';
  }
}
// ------------------------------------------------------------------------

// -------------------ADD or REMOVE BOOK in SHOPPING LIST--------------------
function onModalActionBtnClick(e) {
  const selectedEl = document.getElementById(`${shoppingBook.id}`);
  // --------------- add book ----------------------
  if (e.target.textContent === BUTTON_TEXT_ADD) {
    e.target.textContent = BUTTON_TEXT_REMOVE;
    refs.modalNotification.textContent = NOTIFICATION;

    selectedEl.style.setProperty('background-color', '#4f2ee8');

    shoppingList.push(shoppingBook);
    updateBookOnStorage();

    refs.acum.innerHTML = shoppingList.length;
  }
  // --------------- remove book ----------------------
  else {
    e.target.textContent = BUTTON_TEXT_ADD;
    refs.modalNotification.textContent = '';

    removesBookFromShoppingList();
    updateBookOnStorage();

    refs.acum.innerHTML = shoppingList.length;

    selectedEl.style.setProperty('background-color', '#ffffff');
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
