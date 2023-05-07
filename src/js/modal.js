import { FetchApiBooks } from './fetchApi';
const fetchBook = new FetchApiBooks();

const refs = {
  bestsellersSectionEl: document.querySelector('.bookshelf'),
  modalContainer: document.querySelector('.modal-window'),
  closeButtonEl: document.querySelector('.modalClose'),
  shopButtonEl: document.querySelector('.modalButton'),
  cardBookWrapper: document.querySelector('.cardBookWrapper'),
  modalNotification: document.querySelector('.modalNotification'),
};
console.log(refs);

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

function onCardClick(e) {
  refs.shopButtonEl.addEventListener('click', onModalButtonClick);
  document.addEventListener('click', onModalClose); //change listener on backDrop!!!!
  document.addEventListener('keydown', onModalClose);

  if (e.target.nodeName !== 'IMG' && e.target.parentNode.nodeName !== 'LI') {
    return;
  }
  refs.modalContainer.classList.remove('hid');
  if (e.target.nodeName === 'IMG') {
    bookId = e.target.parentNode.parentNode.id;
  } else {
    bookId = e.target.parentNode.id;
  }
  fetchBook
    .fetchBookInfo(bookId)
    .then(bookInfo => {
      renderModalCard(bookInfo);

      const isIdFinded = shoppingList.some(({ id }) => id === bookInfo._id);
      if (isIdFinded) {
        refs.shopButtonEl.textContent = BUTTON_TEXT_REMOVE;
      } else {
        refs.shopButtonEl.textContent = BUTTON_TEXT_ADD;
      }
    })
    .catch(err => console.log(err));
}

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

  const modalCardMarkup = `<img src="${bookImg}" width="192" hight="281"> 
    <h4>${title}</h4> 
    <p>${author}</p> 
    <p>${description}</p>
    <a href="${buyLinks[0].url}" target="_blank">Amazon</a>
    <a href="${buyLinks[2].url}" target="_blank">Barnes and Noble</a>
    <a href="${buyLinks[4].url}" target="_blank">Bookshop</a>`;

  refs.cardBookWrapper.innerHTML = modalCardMarkup;
}

function onModalClose(e) {
  // add to if - onBackDropClose condition !!!!!!!!!!!!!!
  if (e.target.dataset.close || e.key === 'Escape') {
    refs.modalContainer.classList.add('hid');

    document.removeEventListener('click', onModalClose);
    document.removeEventListener('keydown', onModalClose);
    refs.shopButtonEl.removeEventListener('click', onModalButtonClick);

    refs.cardBookWrapper.innerHTML = ''; // if wiil be spinner - delete
    refs.shopButtonEl.innerHTML = ''; // if wiil be spinner - delete
  }
}

function onModalButtonClick(e) {
  // --------------- ADD BOOK ----------------------
  if (e.target.textContent === BUTTON_TEXT_ADD) {
    e.target.textContent = BUTTON_TEXT_REMOVE;
    refs.modalNotification.innerHTML = NOTIFICATION;

    shoppingList.push(shoppingBook);
    updateBookOnStorage();
  }
  // --------------- REMOVE BOOK ----------------------
  else {
    e.target.textContent = BUTTON_TEXT_ADD;
    refs.modalNotification.innerHTML = '';
    removesBookFromShoppingList();
    updateBookOnStorage();
  }
}

function removesBookFromShoppingList() {
  shoppingList = shoppingList.filter(({ id }) => id !== shoppingBook.id);
}

function updateBookOnStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
}

export { shoppingList, updateBookOnStorage, removesBookFromShoppingList };

// import shoppingList from './modal';  // to shopping LIST
// console.log(shoppingList);
