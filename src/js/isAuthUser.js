const shoppingListLink=document.querySelector('[data-link-to-shoppingList]')
const signButton=document.querySelector('.sign-up-box')
const authBox=document.querySelector('.authorizated-box')
const userName=document.querySelector('.user-name')

export function isAuthUser(){
    const userAuthInfo=JSON.parse(localStorage.getItem('userInfo'))
    if(userAuthInfo){
        shoppingListLink.classList.remove('is-hidden');
        signButton.style.display='none';
        authBox.style.display='flex';
        userName.textContent=userAuthInfo.name
        return
    }
    shoppingListLink.classList.add('is-hidden');
    signButton.style.display='flex'; 
    authBox.style.display='none';
}