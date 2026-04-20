let mySwiper = null;

function initSwiper() {
  // Инициализируем Swiper только на мобильных (< 768px)
  if (window.innerWidth < 768) {
    if (!mySwiper) {
      mySwiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    }
  }
  // Уничтожаем Swiper на планшете и десктопе (≥ 768px)
  else if (mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }
}

// Инициализация при загрузке
initSwiper();

// Пересоздание при изменении размера окна
window.addEventListener("resize", initSwiper);

let isShown = false;
document.querySelector("#mybutton").addEventListener("click", () => {
  const width = window.innerWidth;

  if (isShown) {
    document.querySelectorAll(".swiper-wrapper .hidden").forEach((slide) => {
      slide.classList.remove("hidden", "slide--hidden");
    });

    if (width >= 1024) {
      document
        .querySelectorAll(".swiper-wrapper .swiper-slide:nth-last-child(-n + 3)")
        .forEach((slide) => {
          slide.classList.add("hidden", "slide--hidden");
        });
    } else if (width >= 768) {
      document
        .querySelectorAll(
          ".swiper-wrapper .swiper-slide:nth-last-child(-n + 5)",
        )
        .forEach((slide) => {
          slide.classList.add("hidden");
        });
    }

    document.querySelector("#mybutton").innerHTML =
      "<img id='arrowIcon' src='./img/swipe/expand_down.png' alt='раскрыть'>Показать все";
    isShown = false;
  } else {
    document.querySelectorAll(".swiper-wrapper .hidden").forEach((slide) => {
      slide.classList.remove("hidden", "slide--hidden");
    });
    document.querySelector("#mybutton").innerHTML =
      "<img id='arrowIcon' src='./img/swipe/expand_up.png' alt='скрыть'>Скрыть";
    isShown = true;
  }
});