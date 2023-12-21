import _ from 'lodash.throttle';
import arrows from '../images/svg-from-maket/symbol-defs.svg';
import {
  removesBookFromShoppingList,
  makeShoplistMarkup,
  refs,
} from './shoppingList';

let shoplistBooksMarkup = '';

export class Pagination {
  constructor() {
    this.ikonArr = ['<<', '<', '1', '2', '3', '...', '>', '>>'];
    this.markup = '';

    this.arrForRender = [];
    this.buttonElements = [];
    this.totalPages;

    this.currentPage = 1;
    this.sliceBegin = 0;
    this.sliceEnd = 3;

    this.increaseIndex = 1;
    this.decreaseIndex = -1;
    this.groupPaginIndex = window.innerWidth < 768 ? 2 : 3;

    this.booksList = [];
  }

  paginationButtonMarkup(shoppingList) {
    this.markup = `     
      <button class="pagination-button pag-pointer double-left">${this.ikonArr[0]}
        <svg>
          <use href="${arrows}#left-arrow" x="-3"></use>
          <use class="second-left-arrow" href="${arrows}#left-arrow" x="3"></use>
        </svg>
      </button>
      <button class="pagination-button pag-pointer left-pointer">${this.ikonArr[1]}
        <svg>
          <use href="${arrows}#left-arrow"></use>
        </svg>
      </button>
      <button class="pagination-button pag-number-pointer">${this.ikonArr[2]}</button>
      <button class="pagination-button pag-number-pointer">${this.ikonArr[3]}</button>
      <button class="pagination-button pag-number-pointer">${this.ikonArr[4]}</button>
      <button class="pagination-button pag-pt">${this.ikonArr[5]}</button>
      <button class="pagination-button pag-pointer right-pointer">${this.ikonArr[6]}
        <svg>
          <use href="${arrows}#right-arrow"></use>
        </svg>
      </button>
      <button class="pagination-button pag-pointer double-right">${this.ikonArr[7]}
        <svg>
          <use href="${arrows}#right-arrow" x="-3"></use>
          <use class="second-left-arrow" href="${arrows}#right-arrow" x="3"></use>
        </svg>
      </button>`;

    refs.paginationContainer.innerHTML = this.markup;

    this.buttonElements = [...refs.paginationContainer.children];
    this.buttonElements.forEach(element => {
      element.classList.add('pagination-hidden');
    });

    if (shoppingList.length > 3 && shoppingList.length < 7) {
      this.buttonElements.forEach((element, i) => {
        if (i !== 4) {
          element.classList.remove('pagination-hidden');
        }
      });
    } else if (shoppingList.length > 6 && shoppingList.length < 10) {
      this.buttonElements.forEach((element, i) => {
        if (i !== 5) {
          element.classList.remove('pagination-hidden');
        }
      });
    } else if (shoppingList.length > 9) {
      this.buttonElements.forEach(element => {
        element.classList.remove('pagination-hidden');
      });
    }
  }

  makeSliceForRender(shoppingList) {
    let sliceLength = this.groupPaginIndex === 3 ? 3 : 4;
    this.totalPages = Math.ceil(shoppingList.length / sliceLength);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }

    this.paginationButtonMarkup(shoppingList);
    this.changeNumberOfButtons();
    this.highlightCurrentPage();
    this.changeStateOfNavigationButtons();

    this.sliceBegin = (this.currentPage - 1) * sliceLength;
    this.sliceEnd = this.sliceBegin + sliceLength;
    this.arrForRender = shoppingList.slice(this.sliceBegin, this.sliceEnd);

    shoplistBooksMarkup = this.arrForRender.map(makeShoplistMarkup).join('');
    refs.shoppingListContainerEl.innerHTML = shoplistBooksMarkup;

    const shoplistTrash = document.querySelectorAll('.shoplist-trash');
    shoplistTrash.forEach(trash => {
      trash.addEventListener('click', removesBookFromShoppingList);
    });
  }

  changeCurrentPage(index) {
    this.currentPage += index;
  }

  highlightCurrentPage() {
    this.buttonElements.forEach(element => {
      if (this.currentPage === Number(element.textContent)) {
        element.classList.add('active');
        element.setAttribute('disabled', '');
      } else {
        element.classList.remove('active');
      }
    });
  }

  changeNumberOfButtons() {
    if (this.groupPaginIndex === 2) {
      if (this.currentPage > 2) {
        this.buttonElements.slice(2, 4).forEach((element, i) => {
          element.textContent = this.currentPage + i - 1;
        });
      }
    } else {
      if (this.currentPage > 2) {
        this.buttonElements.slice(2, 5).forEach((element, i) => {
          element.textContent = this.currentPage + i - 1;
        });
      }
      if (this.currentPage > 2 && this.currentPage === this.totalPages) {
        this.buttonElements.slice(2, 5).forEach((element, i) => {
          element.textContent = this.currentPage + i - 2;
        });
      }
    }
  }

  changeStateOfNavigationButtons() {
    if (this.currentPage === 1) {
      this.buttonElements.slice(0, 2).forEach(element => {
        element.setAttribute('disabled', '');
        element.classList.add('pag-pointer-not-active');
      });
    }
    if (this.currentPage === this.totalPages) {
      this.buttonElements[5].style.display = 'none';
      this.buttonElements.slice(6).forEach(element => {
        element.setAttribute('disabled', '');
        element.classList.add('pag-pointer-not-active');
      });
    }
    if (
      this.currentPage === this.totalPages - 1 &&
      this.groupPaginIndex === 3
    ) {
      this.buttonElements[5].style.display = 'none';
    }
    if (
      this.currentPage === this.totalPages - 1 &&
      this.groupPaginIndex === 2
    ) {
      this.buttonElements[5].style.display = 'block';
    }
  }

  increase(shoppingList) {
    this.booksList = shoppingList;
    this.changeCurrentPage(this.increaseIndex);
    this.makeSliceForRender(shoppingList);
  }
  decrease(shoppingList) {
    this.booksList = shoppingList;
    this.changeCurrentPage(this.decreaseIndex);
    this.makeSliceForRender(shoppingList);
  }
  firstPage(shoppingList) {
    this.booksList = shoppingList;
    this.currentPage = 1;
    this.makeSliceForRender(shoppingList);
  }
  lastPage(shoppingList) {
    this.booksList = shoppingList;
    this.currentPage = this.totalPages;
    this.makeSliceForRender(shoppingList);
  }
  targetPage(shoppingList, page) {
    this.booksList = shoppingList;
    this.currentPage = page;
    this.makeSliceForRender(shoppingList);
  }
  nextGroup(shoppingList) {
    this.booksList = shoppingList;
    this.changeCurrentPage(this.groupPaginIndex);
    this.makeSliceForRender(shoppingList);
  }

  afterBookDeleteUpdate(shoppingList) {
    this.booksList = shoppingList;
    this.makeSliceForRender(shoppingList);
    if (this.currentPage > 1 && this.currentPage <= 2) {
      this.buttonElements.slice(2, 5).forEach((element, i) => {
        element.textContent = this.currentPage + i - 1;
      });
    }
    this.highlightCurrentPage();
  }
}
