'use strict';

const rewiewSwiper = document.querySelector('.swiper-rewiew');

if (rewiewSwiper) {
  const swiper = new Swiper('.swiper-rewiew', {
    // Optional parameters
    loop: true,
    autoHeight: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
