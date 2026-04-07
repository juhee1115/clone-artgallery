window.addEventListener("load", () => {
  const swiper = new Swiper(".sw-exhibit", {
    slidesPerView: 4,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

window.addEventListener("load", () => {
  const bannerSwiper = new Swiper(".swiper-banner", {
    loop: true,
    pagination: {
      el: ".banner-pagination",
      clickable: true,
    },
  });
});
