// 1)))

const darkTheme = {
  header: '#111111',
  body: '#202024',
  hoverFocus: '#EAC645',
}

const lightTheme = {
   header: '#FFFFFF',
   body: '#D0D0D0', 
   hoverFocus: '#4F2EE8',
}

let currentTheme = 'light';

const element = document.documentElement;

function themeSwitch() {
  if (currentTheme === 'light') {
     element.style.setProperty('--bg-white-header', darkTheme.header);
     element.style.setProperty('--bg-home-page', darkTheme.body);
     element.style.setProperty('--hover-focus', darkTheme.hoverFocus);
     currentTheme = 'dark';
  } else {
     element.style.setProperty('--bg-white-header', lightTheme.header);
     element.style.setProperty('--bg-home-page', lightTheme.body);
     element.style.setProperty('--hover-focus', lightTheme.hoverFocus);
     currentTheme = 'light';
  }
}

const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', themeSwitch);


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