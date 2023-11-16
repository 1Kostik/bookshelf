import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import {
  onAuthStateChanged,
  signOut,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { Notify } from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyCueUsU1d0mcpHAngXb_ZLT9zY8yGpC2NA',
  authDomain: 'book-bd801.firebaseapp.com',
  databaseURL:
    'https://book-bd801-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'book-bd801',
  storageBucket: 'book-bd801.appspot.com',
  messagingSenderId: '728958539605',
  appId: '1:728958539605:web:6d42e4f70f332c7467c1dc',
};
// const form = document.querySelector('.form_sign');
const inputName = document.getElementById('names');
const inputEmail = document.getElementById('emails');
const inputPassword = document.getElementById('pass');
const btnEnter = document.getElementById('btnEnter');
const btnUp = document.querySelector('.btnUp');
const btnLogOut = document.getElementById('btnLogOut');
const btnIn = document.querySelector('.btnIn');
const logOutBtn = document.getElementById('logOutBtn');
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// listner for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    const signUpBox = document.getElementById('signUpBox');
    signUpBox.classList.add('is-out');
    const navMain = document.getElementById('navMain');
    navMain.classList.toggle('is-hidden');
    const authBox = document.getElementById('authBox');
    authBox.classList.remove('is-out');

    const loggedUserName = localStorage.getItem('name');
    const blueBtn = document.querySelector('.user-name');
    blueBtn.textContent = loggedUserName;
    // console.log(loggedUserName);

    //покажи шоплист и добавь имя на кнопку в хедере и покажи иконку випадающего окна(при клике выведи кнопку логаут)

    console.log('user loggged in');
  } else {
    // window.location.replace('./index.html');
    // window.location.href = './index.html';
    // localStorage.removeItem('shoppingList');

    //убери шоплист и убери имя на кнопку в хедере и убери иконку випадающего окна

    console.log('user loggged out');
  }
});

async function createLoginEmailPassword(e) {
  if (btnEnter.classList.contains('btnUp')) {
    e.preventDefault();
    const loginEmail = inputEmail.value;
    const loginPassword = inputPassword.value;
    const loginName = inputName.value;

    const create = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    ).then(userCredential => {
      const user = userCredential.user;
      const username = loginName;
      localStorage.setItem('name', username);
      const loggedUserName = localStorage.getItem('name');
      const blueBtn = document.querySelector('.user-name');
      blueBtn.textContent = loggedUserName;

      set(ref(database, 'users/' + user.uid), {
        name: loginName,
        books: [0],
      });

      Notify.info('Sign up is successful, please Sign in to continue!');
    });

    //   const userId = auth.currentUser.uid;

    //   const getValue = await returnName();
    //   function returnName() {
    //      return onValue(
    //         ref(database, '/users/' + userId),
    //         snapshot => {
    //            const username = snapshot.val().name;
    //            console.log(username);
    //          },
    //          {
    //             onlyOnce: true,
    //          }
    //          );
    //       }
  }
}

btnEnter.addEventListener('click', createLoginEmailPassword);

const loginEmailPassword = async e => {
  if (btnEnter.classList.contains('btnIn')) {
    e.preventDefault();

    const loginEmail = inputEmail.value;
    const loginPassword = inputPassword.value;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );

    const userId = auth.currentUser.uid;
    const getValue = await returnName();
    function returnName() {
      return onValue(
        ref(database, 'users/' + userId),
        snapshot => {
          const username = snapshot.val().name;
          const userBooks = snapshot.val().books;
          if (userBooks) {
            localStorage.setItem('shoppingList', JSON.stringify(userBooks));
          }

          localStorage.setItem('name', username);

          const loggedUserName = localStorage.getItem('name');
          const blueBtn = document.querySelector('.user-name');
          blueBtn.textContent = loggedUserName;
        },
        {
          onlyOnce: true,
        }
      );
    }
  } else {
    return;
  }

  // auth.onAuthStateChanged(user => {
  //   if (user) {
  //     //покажи шоплист и добавь имя на кнопку в хедере и покажи иконку випадающего окна(при клике выведи кнопку логаут)
  //     const loggedUserName = localStorage.getItem('name');

  //     console.log('user loggged in');
  //   }
  //   // } else {
  //   //   //убери шоплист и убери имя на кнопку в хедере и убери иконку випадающего окна
  //   //   console.log('user loggged out');
  //   // }
  // });
};

btnEnter.addEventListener('click', loginEmailPassword);

logOutBtn.addEventListener('click', onBtnLogout);

//функция выхода

function onBtnLogout(event) {
  event.preventDefault();

  // localStorage.getItem('shoppingList');
  const shoppingListJSON = localStorage.getItem('shoppingList');
  let currentBooks = JSON.parse(shoppingListJSON);
  const currentName = localStorage.getItem('name');

  function writeUserData() {
    const database = getDatabase();
    const userId = auth.currentUser.uid;
    set(ref(database, 'users/' + userId), {
      books: currentBooks,
      name: currentName,
    });
  }
  writeUserData();

  auth.signOut().then(() => {
    window.location.replace('./index.html');
    location.reload();
    window.location.href = './index.html';
    localStorage.removeItem('shoppingList');

    console.log('user signed out');
  });
}
