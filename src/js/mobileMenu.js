import { logoutAndSaveData } from "./formSignUp";
const mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const body = document.querySelector('body');
const autorizatedBtn = document.querySelector('.authorizated-btn');
const logOutBtn = document.querySelector('.log-out-btn');
const logOutMobileButton=document.querySelector('.log-out-mobile-btn');
const arrowIcon = document.querySelector('.user-icon-arrow');
const mobileSignBtn = document.querySelector('[data-modal-open-sign-mobile]');
const mobileAuthBox= document.querySelector('.authorizated-mobile-menu-box');
const userName = document.querySelector('.mobile-user-name');
mobileMenuBtn.addEventListener('click', openMobileMenu);

function openMobileMenu() {
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  if(fileName==='index.html'){
    document.querySelector('.mobile-navigation-item-home').classList.add('current')
  }
  if(fileName==='shopping_list.html'){
    document.querySelector('.mobile-navigation-item-shopping').classList.add('current')
  }
  const isUserAuth=JSON.parse(localStorage.getItem('userInfo'))
  if(isUserAuth){
    userName.textContent=isUserAuth.name;
    mobileSignBtn.style.display='none';
    mobileAuthBox.style.display='flex';
  }
  else{
    mobileSignBtn.style.display='flex';
    mobileAuthBox.style.display='none';
  }
  mobileMenuBtn.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  body.classList.toggle('mobile-menu-open');
}

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  mobileMenuBtn.classList.remove('is-open');
  body.classList.remove('mobile-menu-open');
});

autorizatedBtn.addEventListener('click', openLogOutBtn);
function openLogOutBtn(e) {
  e.preventDefault();
  logOutBtn.classList.toggle('visually-hidden');
  if(arrowIcon.style.transform==="rotate(180deg)"){
    arrowIcon.style.transform="rotate(0deg)"
    return
  }
  arrowIcon.style.transform = "rotate(180deg)";
}

logOutBtn.addEventListener('click', logOutUser)
logOutMobileButton.addEventListener('click', logOutUser)
async function logOutUser(e){
  e.preventDefault()
  const result=await logoutAndSaveData()
  console.log(result)
  if(result==='ok'){
    localStorage.removeItem('userInfo')
    localStorage.removeItem('shoppingList')
    const currentOrigin = window.location.origin;
    const finalUrl = currentOrigin + '/bookshelf/index.html';
    window.location.href = finalUrl;
  }else{
    console.log('Some probleme with server')
  }
}