// Apps carousel on the homepage
// ----------------------------------------
(function () {
  "use strict";

  if (!document.querySelector(".apps-slider")) return;

  new Swiper(".apps-slider", {
    spaceBetween: 24,
    centerInsufficientSlides: true,
    pagination: {
      el: ".apps-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
})();
