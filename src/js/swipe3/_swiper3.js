import Swiper from 'swiper/bundle';

let mySwiper = null;

const initMobileSwiper3 = () => {
  function destroySwiper() {
    if (mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = null;
    }
  }

  function resizeHandler() {
    if (window.innerWidth < 768) {
      if (!mySwiper) {
        mySwiper = new Swiper(".swiper3", {
          direction: "horizontal",
          loop: false,
          wrapperClass: "swiper-wrapper3",
          slideClass: "swiper-slide3",
          slidesPerView: 1,
          spaceBetween: 16,
          pagination: { el: ".swiper-pagination3", clickable: true },
          navigation: { nextEl: ".swiper-button-next3", prevEl: ".swiper-button-prev3" },
        });
      }
    } else {
      destroySwiper();
    }
  }

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
};

export default initMobileSwiper3;
