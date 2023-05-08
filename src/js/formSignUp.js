// modal

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open-sign]"),
        closeModalBtn: document.querySelector("[data-modal-close-sign]"),
        modal: document.querySelector("[data-modal-sign]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
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