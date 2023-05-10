const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  loopSlides: 4,
  slidesPerView: 4,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
  },

  breakpoints:{
    768:{
        slidesPerView: 6,
    },
    1440:{
        slidesPerView:6,
    }
 }
});