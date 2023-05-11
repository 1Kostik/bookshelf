import Notiflix from "notiflix";

// modal

(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open-sign]'),
        closeModalBtn: document.querySelector('[data-modal-close-sign]'),
        modal: document.querySelector('[data-modal-sign]'),
        openModalBtnMob: document.querySelector('[data-modal-open-sign-mobile]'),
        mobileMenuBtn: document.querySelector('[data-mobile-menu-btn]'),
        mobileMenu: document.querySelector('[data-mobile-menu]'),
        body: document.querySelector('body'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtnMob.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.mobileMenu.classList.remove('is-open');
        refs.mobileMenuBtn.classList.remove('is-open');
        refs.body.classList.remove('mobile-menu-open');
    }
})();






// scrol
window.onload = () => {
    const scrolbtn = document.querySelector('.isshowbtn');

    window.onscroll = () => {
        if (window.scrollY > 500) {
            scrolbtn.classList.remove('isshowbtn__hide')
        } else if (window.scrollY < 500) {
            scrolbtn.classList.add('isshowbtn__hide')
        }
    };

    scrolbtn.onclick = (evt) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };
}







// let x = 0;
// const counter = document.querySelector('.countBtn');
// const shopList = document.querySelector('#hide');

// const acum = document.querySelector('.acum');

// function count() {
// 	x++;

//     if (x > 0) {
//         shopList.classList.remove('is-hiden')
//         console.log('спрацювало')
//     }

//     console.log(x)

// 	acum.innerHTML = x;
// }

// counter.addEventListener('click', (evt) => {
// count();

// })



let x = 0;
const counter = document.querySelector('.countBtn');

const acum = document.querySelector('.acum');

acum.innerHTML = x;

if (acum ==='') {
    acum.classList.add("visibility");
}




const refs = {
    btnSign: document.querySelector('.sign-btn-on-modal'),

    signUp: document.querySelector(".sign-up"),
    signIn: document.querySelector('.sign-in'),

    name: document.querySelector('.name'),
    backdropEl: document.querySelector('.bacckdrop-sign'),
}

refs.btnSign.addEventListener('click', (evt) => {
    evt.preventDefault()
    Notiflix.Notify.info('We are glad you to welcome on our site!')
});

refs.signIn.addEventListener('click', (evt) => {
    evt.preventDefault()
    Notiflix.Notify.info('Hello! Nice to see you again')
    refs.btnSign.innerHTML = 'sign in';

    refs.signIn.classList.add("is-current-sign");
    refs.signUp.classList.remove("is-current-sign");

    refs.name.classList.add("visibility");
});

refs.signUp.classList.add("is-current-sign");

refs.signUp.addEventListener('click', (evt) => {
    evt.preventDefault()
    Notiflix.Notify.info(`Hello! let&#39;s get to know each other`)
    refs.btnSign.innerHTML = 'sign up';

    refs.signIn.classList.remove("is-current-sign");
    refs.signUp.classList.add("is-current-sign");

    refs.name.classList.remove("visibility");
})


refs.backdropEl.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onModalClose);

  function onModalClose(e) {

    if (e.target.hasAttribute('data-modal-close-sign') || e.key === 'Escape') {
      refs.backdropEl.classList.add('is-hidden');
    //   refs.bodyEl.classList.remove('modalIsOpen');
  
      refs.backdropEl.removeEventListener('click', onModalClose);
      document.removeEventListener('keydown', onModalClose);
      refs.modalActionBtnEl.removeEventListener('click', onModalActionBtnClick);
      refs.modalEl.classList.add('is-hidden');
  
      refs.modalNotification.innerHTML = '';
    }
  }
  