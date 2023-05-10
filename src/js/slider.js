const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  loopSlides: 4,
  slidesPerView: 4,
  freeMode: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
  },

  breakpoints:{
    768:{
        slidesPerView: 6,
        loop: true,
        loopSlides: 6,
    },
    1024:{
        slidesPerView:6,
        loop: true,
        loopSlides: 6,
    }
 }
});