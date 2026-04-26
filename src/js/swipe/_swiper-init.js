import Swiper from 'swiper/bundle';

// Переносим переменные в область видимости функции
let mySwiper = null;
let isShown = false;

const initMobileSwiper = () => {
  const btn = document.querySelector("#mybutton");
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
        mySwiper = new Swiper(".swiper", {
          direction: "horizontal",
          loop: false,
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: { el: ".swiper-pagination", clickable: true },
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          scrollbar: { el: ".swiper-scrollbar" },
        });
      }
    } else {
      destroySwiper();
    }

    // 2. Логика скрытия слайдов (Планшеты/Десктоп)
    const slides = document.querySelectorAll(".swiper-wrapper .swiper-slide");
    
    // Сначала сбрасываем всё
    slides.forEach(s => s.classList.remove("slide--hidden"));

    if (width >= 768 && width < 1024) {
      document.querySelectorAll(".swiper-wrapper .swiper-slide:nth-last-child(-n + 5)")
        .forEach(s => s.classList.add("slide--hidden"));
    } else if (width >= 1024) {
      document.querySelectorAll(".swiper-wrapper .swiper-slide:nth-last-child(-n + 3)")
        .forEach(s => s.classList.add("slide--hidden"));
    }
  }

  // Клик по кнопке "Показать все / Скрыть"
  btn.addEventListener("click", () => {
    const width = window.innerWidth;
    const hiddenSlides = document.querySelectorAll(".swiper-wrapper .swiper-slide.slide--hidden");
    const allSlides = document.querySelectorAll(".swiper-wrapper .swiper-slide");

    if (isShown) {
      // Скрываем обратно
      resizeHandler(); 
      btn.innerHTML = "<img id='arrowIcon' src='./img/swipe/expand_down.png' alt='раскрыть'>Показать все";
      isShown = false;
    } else {
      // Показываем всё
      allSlides.forEach(s => s.classList.remove("slide--hidden"));
      btn.innerHTML = "<img id='arrowIcon' src='./img/swipe/expand_up.png' alt='скрыть'>Скрыть";
      isShown = true;
    }
  });

  window.addEventListener("resize", resizeHandler);
  resizeHandler(); // Первый запуск
};

export default initMobileSwiper;