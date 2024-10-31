// Hero Swiper
new Swiper('.hero-section .swiper', {
    keyboard: { enabled: true },
    autoplay: { delay: 10000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
  });
  
  // Section Two Swiper
  new Swiper('.section-2-swiper', {
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
  });
  