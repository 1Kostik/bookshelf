// const btn = document.querySelector(".btn");

// btn.addEventListener('click', themeSwitch);

function themeSwitch() {
   if (document.body.classList.contains('dark')) {
     document.body.classList.remove('dark');
     localStorage.setItem('data-theme', 'light');
   } else {
      document.body.classList.add('dark');
      localStorage.setItem('data-theme', 'dark');
   }
}

if (localStorage.getItem('data-theme') === 'dark') {
  document.body.classList.add('dark');
}

