import Notiflix from "notiflix";

// modal

(() => {
    const refs = {
      closeModalBtn: document.querySelector('[data-modal-close-sign]'),
        openModalBtn: document.querySelector('[data-modal-open-sign]'),
      
      modal: document.querySelector('[data-modal-sign]'),
        openModalBtnMob: document.querySelector('[data-modal-open-sign-mobile]'),
      
      mobileMenuBtn: document.querySelector('[data-mobile-menu-btn]'),
        mobileMenu: document.querySelector('[data-mobile-menu]'),
      
      body: document.querySelector('body'),
        wrapmodalsign: document.querySelector('.wrap_modal_sign'),
      
      btnSign: document.querySelector('.sign-btn-on-modal'),
        signUp: document.querySelector('.sign-up'),
      
      signIn: document.querySelector('.sign-in'),
        name: document.querySelector('.name'),
      
      backdropEl: document.querySelector('.bacckdrop-sign'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtnMob.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.mobileMenu.classList.remove('is-open');
        refs.mobileMenuBtn.classList.remove('is-open');
        refs.body.classList.remove('mobile-menu-open');
        refs.wrapmodalsign.classList.toggle('is-hidden');
        // refs.closeModalBtn.classList.toggle('is-hidden'); //----
    };

    refs.btnSign.addEventListener('click', (evt) => {
        evt.preventDefault()
        Notiflix.Notify.success('We are glad you to welcome on our site!')
    });

    refs.signIn.addEventListener('click', (evt) => {
        evt.preventDefault()
        Notiflix.Notify.info('Hello! Nice to see you again')
        refs.btnSign.innerHTML = 'sign in';

        refs.signIn.classList.add("is-current-sign");
        refs.signUp.classList.remove("is-current-sign");

        refs.name.classList.add("is-hiden");
    });

    refs.signUp.classList.add("is-current-sign");

    refs.signUp.addEventListener('click', (evt) => {
        evt.preventDefault()
        Notiflix.Notify.info(`Hello! let&#39;s get to know each other`)
        refs.btnSign.innerHTML = 'sign up';

        refs.signIn.classList.remove("is-current-sign");
        refs.signUp.classList.add("is-current-sign");

        refs.name.classList.remove("is-hiden");
    })


    // close
    refs.backdropEl.addEventListener('click', closeModal);
 
    // refs.modal.classList.add('is-hidden');
    function closeModal(event) {
        const clickOnBackdropEl = event.target
        // console.log(clickOnBackdropEl)
        if (
          clickOnBackdropEl.hasAttribute('data-modal-sign')) {
          refs.backdropEl.classList.add('is-hidden'); 
           refs.wrapmodalsign.classList.toggle('is-hidden');
        }
        return
    }
    document.addEventListener("keydown", event => {        
      
        if (event.key === 'Escape') {
            refs.backdropEl.classList.add('is-hidden')
            refs.wrapmodalsign.classList.toggle('is-hidden');
           
        }
    
    });
    

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




let x = 0;
const counter = document.querySelector('.countBtn');

const acum = document.querySelector('.acum');

acum.innerHTML = x;

if (acum === '') {
    acum.classList.add("visibility");
}
// window.addEventListener('keydown', keypress)
// function keypress(e) {
//     console.dir(e.key)
// }