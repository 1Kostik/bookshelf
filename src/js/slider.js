const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
  },

  breakpoints:{
    320:{
        slidesPerView: 4,
    },
    768:{
        slidesPerView:6,
        
    }
 }
});

let goToStartButton = document.querySelector('.swiper-button-go-to-start');
let nextButton = document.querySelector('.swiper-button-next');

goToStartButton.addEventListener('click', function (){
    swiper.slideTo(0);
})
swiper.on('reachEnd',function (){
    nextButton.style.display = 'none';
    goToStartButton.style.display = 'block';
})
swiper.on('slideChange', function (){
    if (swiper.isEnd) {
        nextButton.style.display = 'none';
        goToStartButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
        goToStartButton.style.display = 'none';
    }
})

