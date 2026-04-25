import Swiper from 'swiper/bundle';

let mySwiper = null;
let isShown = false;

const initMobileSwiper = () => {
  const btn = document.querySelector("#mybutton2");
  if (!btn) return; 

  function destroySwiper() {
    if (mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = null;
    }
  }

  function resizeHandler() {
    const width = window.innerWidth;

    // 1. Логика Swiper (только мобилки < 768)
    if (width < 768) {
      if (!mySwiper) {
        mySwiper = new Swiper(".swiper2", {
          direction: "horizontal",
          loop: true,
          wrapperClass: "swiper-wrapper2",
          slideClass: "swiper-slide2",
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: { el: ".swiper-pagination2", clickable: true },
          navigation: { nextEl: ".swiper-button-next2", prevEl: ".swiper-button-prev2" },
          scrollbar: { el: ".swiper-scrollbar2" },
        });
      }
    } else {
      destroySwiper();
    }

    // 2. Логика скрытия слайдов (Планшеты/Десктоп)
    const slides = document.querySelectorAll(".swiper-wrapper2 .swiper-slide2");
    
    // Сначала сбрасываем всё
    slides.forEach(s => s.classList.remove("slide--hidden2"));

    if (width >= 1024) {
      document.querySelectorAll(".swiper-wrapper2 .swiper-slide2:nth-last-child(-n + 3)")
        .forEach(s => s.classList.add("slide--hidden2"));
    }
  }

  // Клик по кнопке "Показать все / Скрыть"
  btn.addEventListener("click", () => {
    const width = window.innerWidth;
    const hiddenSlides = document.querySelectorAll(".swiper-wrapper2 .swiper-slide2.slide--hidden2");
    const allSlides = document.querySelectorAll(".swiper-wrapper2 .swiper-slide2");

    if (isShown) {
      // Скрываем обратно
      resizeHandler(); 
      btn.innerHTML = "<img id='arrowIcon2' src='./img/swiper2/expand_down.png' alt='раскрыть'> Показать все";
      isShown = false;
    } else {
      // Показываем всё
      allSlides.forEach(s => s.classList.remove("slide--hidden2"));
      btn.innerHTML = "<img id='arrowIcon2' src='./img/swiper2/expand_up.png' alt='скрыть'> Скрыть";
      isShown = true;
    }
  });

  window.addEventListener("resize", resizeHandler);
  resizeHandler(); 
};

export default initMobileSwiper;
