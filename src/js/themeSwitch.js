// 1)))


  function onChange() {
    // const header = document.querySelector('.header-container');
    // const checkbox = document.querySelector('.theme-switcher-input');
    // const iconLogo = document.querySelector('.logo-name');
    // const iconShop = document.querySelector('.logo-shop');
    // const current = document.querySelector('.current');
    // const burgerIcon = document.querySelector('.burger-icon');
    // const navItems = document.querySelectorAll('.navigation-item');
    if (checkbox.checked) {
      checkbox.classList.toggle('dark-theme');
      // header.classList.toggle('dark-theme');
      // iconLogo.classList.toggle('dark-theme');
      // iconShop.classList.toggle('dark-theme');
      // current.classList.toggle('dark-theme');
      // burgerIcon.classList.toggle('dark-theme');
      // navItems.forEach(element => {
      //   element.classList.toggle('dark-theme');
      // });
    } else {
      checkbox.classList.toggle('dark-theme');
      // header.classList.toggle('dark-theme');
      // iconLogo.classList.toggle('dark-theme');
      // iconShop.classList.toggle('dark-theme');
      // current.classList.toggle('dark-theme');
      // burgerIcon.classList.toggle('dark-theme');
      // navItems.forEach(element => {
      //   element.classList.toggle('dark-theme');
      // });
    }
  }


const darkTheme = {
  header: '#111111',
  body: '#202024',
  hoverFocus: '#EAC645',
  bgCardBookShoppingList: '#202024',
  textCardBookShoppingList: '#FFFFFF',
}

const lightTheme = {
   header: '#FFFFFF',
   body: '#D0D0D0', 
   hoverFocus: '#4F2EE8',
   bgCardBookShoppingList: '#F6F6F6',
   textCardBookShoppingList: '#111111',
}

let currentTheme = 'light';

const element = document.documentElement;

function themeSwitch() {
  if (currentTheme === 'light') {
     element.style.setProperty('--bg-white-header', darkTheme.header);
     element.style.setProperty('--bg-home-page', darkTheme.body);
     element.style.setProperty('--hover-focus', darkTheme.hoverFocus);
     element.style.setProperty('--bg-card-book-shoppinglist-page', darkTheme.bgCardBookShoppingList);
     element.style.setProperty('--text-color-card-book-shoppinglist-page', darkTheme.textCardBookShoppingList);

     currentTheme = 'dark';
     localStorage.setItem('data-theme', 'dark');
  } else {
     element.style.setProperty('--bg-white-header', lightTheme.header);
     element.style.setProperty('--bg-home-page', lightTheme.body);
     element.style.setProperty('--hover-focus', lightTheme.hoverFocus);
     element.style.setProperty('--bg-card-book-shoppinglist-page', lightTheme.bgCardBookShoppingList);
     element.style.setProperty('--text-color-card-book-shoppinglist-page', lightTheme.textCardBookShoppingList);

     currentTheme = 'light';
     localStorage.setItem('data-theme', 'light');
   }
}

const checkbox = document.querySelector('#checkbox');
console.log(checkbox);

checkbox.addEventListener('change', themeSwitch);
checkbox.addEventListener('change', onChange);

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