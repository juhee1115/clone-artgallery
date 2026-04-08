window.addEventListener("load", () => {
  const swiper = new Swiper(".sw-exhibit", {
    slidesPerView: 4,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
   const bannerSwiper = new Swiper(".swiper-banner", {
    loop: true,
    pagination: {
      el: ".banner-pagination",
      clickable: true,
    },
  });

  // gotop버튼
  const goTop = this.document.querySelector("#btn"); 
  //   gotop버튼 클릭시 위로 스크롤
  goTop.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

