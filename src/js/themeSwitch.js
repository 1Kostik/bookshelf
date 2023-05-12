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

// 1)))

//   function onChange() {
//     // const header = document.querySelector('.header-container');
//     // const checkbox = document.querySelector('.theme-switcher-input');
//     // const iconLogo = document.querySelector('.logo-name');
//     // const iconShop = document.querySelector('.logo-shop');
//     // const current = document.querySelector('.current');
//     // const burgerIcon = document.querySelector('.burger-icon');
//     // const navItems = document.querySelectorAll('.navigation-item');
//     if (checkbox.checked) {
//       checkbox.classList.toggle('dark-theme');
//       // header.classList.toggle('dark-theme');
//       // iconLogo.classList.toggle('dark-theme');
//       // iconShop.classList.toggle('dark-theme');
//       // current.classList.toggle('dark-theme');
//       // burgerIcon.classList.toggle('dark-theme');
//       // navItems.forEach(element => {
//       //   element.classList.toggle('dark-theme');
//       // });
//     } else {
//       checkbox.classList.toggle('dark-theme');
//       // header.classList.toggle('dark-theme');
//       // iconLogo.classList.toggle('dark-theme');
//       // iconShop.classList.toggle('dark-theme');
//       // current.classList.toggle('dark-theme');
//       // burgerIcon.classList.toggle('dark-theme');
//       // navItems.forEach(element => {
//       //   element.classList.toggle('dark-theme');
//       // });
//     }
//   }

// const darkTheme = {
//   header: '#111111',
//   body: '#202024',
//   hoverFocus: '#EAC645',
//   bgCardBookShoppingList: '#202024',
//   textCardBookShoppingList: '#FFFFFF',
// }

// const lightTheme = {
//   header: '#FFFFFF',
//   body: '#F6F6F6',
//   hoverFocus: '#4F2EE8',
//   bgCardBookShoppingList: '#F6F6F6',
//   textCardBookShoppingList: '#111111',
// };

// let currentTheme = 'light';

// const element = document.documentElement;

// function themeSwitch() {
//   if (currentTheme === 'light') {
//      element.style.setProperty('--bg-white-header', darkTheme.header);
//      element.style.setProperty('--bg-home-page', darkTheme.body);
//      element.style.setProperty('--hover-focus', darkTheme.hoverFocus);
//      element.style.setProperty('--bg-card-book-shoppinglist-page', darkTheme.bgCardBookShoppingList);
//      element.style.setProperty('--text-color-card-book-shoppinglist-page', darkTheme.textCardBookShoppingList);

//      currentTheme = 'dark';
//      localStorage.setItem('data-theme', 'dark');
//   } else {
//      element.style.setProperty('--bg-white-header', lightTheme.header);
//      element.style.setProperty('--bg-home-page', lightTheme.body);
//      element.style.setProperty('--hover-focus', lightTheme.hoverFocus);
//      element.style.setProperty('--bg-card-book-shoppinglist-page', lightTheme.bgCardBookShoppingList);
//      element.style.setProperty('--text-color-card-book-shoppinglist-page', lightTheme.textCardBookShoppingList);

//      currentTheme = 'light';
//      localStorage.setItem('data-theme', 'light');
//    }
// }

// const checkbox = document.querySelector('#checkbox');
// console.log(checkbox);

// checkbox.addEventListener('change', themeSwitch);
// checkbox.addEventListener('change', onChange);

// 2)))

// function themeSwitch() {
//    if (document.body.classList.contains('dark')) {
//      document.body.classList.remove('dark');
//      localStorage.setItem('data-theme', 'light');
//    } else {
//       document.body.classList.add('dark');
//       localStorage.setItem('data-theme', 'dark');
//    }
// }

// if (localStorage.getItem('data-theme') === 'dark') {
//   document.body.classList.add('dark');
// }

// const checkbox = document.querySelector('#checkbox');

// checkbox.addEventListener('change', themeSwitch);
