let currentTheme = 'light';

const element = document.documentElement;
const checkbox = document.querySelector('#checkbox');
const shopListAmazon = document.querySelectorAll('.shoplist-icon-amazon');
const modalAmazon = document.querySelector('.shop-image_amazon');
const modalSingUpForm = document.querySelector('.wrap_modal_sign');
const shopListNobel = document.querySelectorAll(
  '.shoplist-icon-barnesAndNoble'
);
const shopListBook = document.querySelectorAll('.shoplist-icon-bookshop');

const lightTheme = {
  headerBg: '#FFFFFF',
  bodyBg: '#F6F6F6',
  mainText: '#111111',
  categoryText: 'rgba(17, 17, 17, 0.6)',
  categoryHover: '#4F2EE8',
  modalBookBg: '#FFFFFF',
  textShopList: 'rgba(0, 0, 0, 0.6)',
  textSingUpBtn: '#f3f3f3',
};

const darkTheme = {
  headerBg: '#111111',
  bodyBg: '#202024',
  mainText: '#FFFFFF',
  categoryText: 'rgba(255, 255, 255, 0.6)',
  categoryHover: '#EAC645',
  modalBookBg: '#202024',
  textShopList: 'rgba(255, 255, 255, 0.6)',
  textSingUpBtn: '#202024',
};

checkbox.addEventListener('change', onChange);

function onChange() {
  if (checkbox.checked) {
    checkbox.classList.toggle('dark-theme');
    modalAmazon.classList.toggle('dark-theme');
    modalSingUpForm.classList.toggle('dark-theme');
    shopListAmazon.forEach(element => {
      element.classList.toggle('shoplist-icon-amazon-dark-theme');
    });
    shopListNobel.forEach(element => {
      element.classList.toggle('shoplist-icon-dark-theme');
    });
    shopListBook.forEach(element => {
      element.classList.toggle('shoplist-icon-dark-theme');
    });
  } else {
    checkbox.classList.toggle('dark-theme');
    modalAmazon.classList.toggle('dark-theme');
    modalSingUpForm.classList.toggle('dark-theme');
    shopListAmazon.forEach(element => {
      element.classList.toggle('shoplist-icon-amazon-dark-theme');
    });
    shopListNobel.forEach(element => {
      element.classList.toggle('shoplist-icon-dark-theme');
    });
    shopListBook.forEach(element => {
      element.classList.toggle('shoplist-icon-dark-theme');
    });
  }
  themeSwitch();
}

if (localStorage.getItem('data-theme') === 'dark') {
  onChange();
}

function themeSwitch() {
  if (currentTheme === 'light') {
    element.style.setProperty('--bg-white-header', darkTheme.headerBg);
    element.style.setProperty('--bg-home-page', darkTheme.bodyBg);
    element.style.setProperty('--text-color-title-dark', darkTheme.mainText);
    element.style.setProperty(
      '--text-color-allcategories-white-theme',
      darkTheme.categoryText
    );
    element.style.setProperty('--hover-focus', darkTheme.categoryHover);
    element.style.setProperty(
      '--bg-modal-book-white-theme',
      darkTheme.modalBookBg
    );
    element.style.setProperty('--text-empty-shoplist', darkTheme.textShopList);
    element.style.setProperty('--text-singup-btn', darkTheme.textSingUpBtn);

    currentTheme = 'dark';
    localStorage.setItem('data-theme', 'dark');
  } else {
    element.style.setProperty('--bg-white-header', lightTheme.headerBg);
    element.style.setProperty('--bg-home-page', lightTheme.bodyBg);
    element.style.setProperty('--text-color-title-dark', lightTheme.mainText);
    element.style.setProperty(
      '--text-color-allcategories-white-theme',
      lightTheme.categoryText
    );
    element.style.setProperty('--hover-focus', lightTheme.categoryHover);
    element.style.setProperty(
      '--bg-modal-book-white-theme',
      lightTheme.modalBookBg
    );
    element.style.setProperty('--text-empty-shoplist', lightTheme.textShopList);
    element.style.setProperty('--text-singup-btn', lightTheme.textSingUpBtn);

    currentTheme = 'light';
    localStorage.setItem('data-theme', 'light');
  }
}
