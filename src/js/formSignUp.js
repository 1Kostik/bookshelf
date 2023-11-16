import Notiflix from "notiflix";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth,db} from '../firebase/confige.js'
import { ref, set, onValue } from "firebase/database";
import {  signOut } from "firebase/auth";
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

      signUpForm:document.querySelector('.form_sign'),
      
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
    };
    
    refs.btnSign.addEventListener('click', (evt) => {
        evt.preventDefault()
        const name=document.querySelector('.name').value;
        const email=document.querySelector('.email').value;
        const password=document.querySelector('.pass').value;
        if(refs.btnSign.textContent==='Sign up'){
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => { 
            const user = userCredential.user;
            if(user){
            const db_ref = ref(db, 'users/' + user.uid);
            const user_data = {
                email,
                name
            };
            set(db_ref, user_data)
              getUserInfo(user.uid)
              Notiflix.Notify.success('We are glad you to welcome on our site!');
              const currentOrigin = window.location.origin;
                const finalUrl = currentOrigin + '/bookshelf/index.html';
                window.location.href = finalUrl;
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(error.code)
            if(errorCode==='auth/invalid-email'){
              Notiflix.Notify.failure('Enter a valid email');
            }
            if(errorCode==='auth/weak-password'){
              Notiflix.Notify.failure('The password must be at least 6 characters');
            }
            if(errorCode==='auth/email-already-in-use'){
              Notiflix.Notify.failure('User with this email is already in the database');
            }
            if(errorCode==='auth/missing-email'){
              Notiflix.Notify.failure('Enter email. This field is required');
            }
          });
        }
        if(refs.btnSign.textContent==='sign in'){
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => { 
            const user = userCredential.user;
            if(user){
              const a=getUserInfo(user.uid)
              setTimeout(()=>{
                const currentOrigin = window.location.origin;
                const finalUrl = currentOrigin + '/bookshelf/index.html';
                window.location.href = finalUrl;
              }, 1000)
            }
            Notiflix.Notify.success('Welcome on our site!');
          })
          .catch((error) => {
            const errorCode = error.code;
            if(errorCode==='auth/invalid-email'){
              Notiflix.Notify.failure('Enter a valid email');
            }
            if(errorCode==='auth/weak-password'){
              Notiflix.Notify.failure('The password must be at least 6 characters');
            }
            if(error.code==='auth/user-not-found'){
              Notiflix.Notify.failure('User with this email was not found');
            }
            if(error.code==='auth/wrong-password'){
              Notiflix.Notify.failure('Wrong password');
            }
          });
        }    
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


    
    refs.backdropEl.addEventListener('click', closeModal);
 
    function closeModal(event) {
        const clickOnBackdropEl = event.target
        if (clickOnBackdropEl.hasAttribute('data-modal-sign')) {
          refs.backdropEl.classList.add('is-hidden'); 
           refs.wrapmodalsign.classList.toggle('is-hidden');
        }
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
if (!acum ) {
    acum.classList.add("visibility");
}




function getUserInfo(userId){
  const dbRef =ref(db, `users/${userId}`);
    onValue(dbRef, (snapshot) => {
      const userData = snapshot.val();
      const userInfo={email:userData.email, name:userData.name}
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      if(userData.userBooks && userData.userBooks.length>0){
        localStorage.setItem('shoppingList', JSON.stringify(userData.userBooks))
      }
                 
    });
}


export async function logoutAndSaveData() {
  try {
    // Получаем текущего пользователя
    const user = auth.currentUser;

    // Проверяем, есть ли пользователь
    if (user) {
      // Сохраняем данные перед выходом (замените эту часть кода на вашу логику сохранения данных)
      const userInfo=JSON.parse(localStorage.getItem('userInfo'))
      const userBooks=JSON.parse(localStorage.getItem('shoppingList'))
      const userData = {
        userBooks,
        ...userInfo
      };
      await set(ref(db, `users/${user.uid}`), userData);

      // Выполняем выход
      await signOut(auth);
  
      // Дополнительные действия после успешного выхода
      return 'ok'
    } else {
      console.log('No user is currently signed in.');
      return 'error'
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
}