import Swiper from 'swiper/bundle';

let mySwiper = null;
let isShown = false;

const initMobileSwiper = () => {
  const block = document.querySelector(".swipe_block2");
  if (!block) return;

  const btn = block.querySelector("#mybutton2");
  const swiperEl = block.querySelector("#mobileSwiper2");
  const wrapper = block.querySelector(".swiper-wrapper2");
  const slides = block.querySelectorAll(".swiper-slide2");
  const initiallyHiddenSlides = block.querySelectorAll(".swiper-slide2.hidden2");

  if (!btn || !swiperEl || !wrapper) return;

  function destroySwiper() {
    if (mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = null;
    }
  }

  function resizeHandler() {
    const width = window.innerWidth;

    if (width < 768) {
      slides.forEach(slide => slide.classList.remove("hidden2"));
      btn.setAttribute("aria-expanded", "false");
      isShown = false;

      if (!mySwiper) {
        mySwiper = new Swiper(swiperEl, {
          direction: "horizontal",
          loop: false,
          wrapperClass: "swiper-wrapper2",
          slideClass: "swiper-slide2",
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: block.querySelector(".swiper-pagination2"),
            clickable: true,
          },
          navigation: {
            nextEl: block.querySelector(".swiper-button-next2"),
            prevEl: block.querySelector(".swiper-button-prev2"),
          },
        });
      }
    } else {
      destroySwiper();

      if (!isShown) {
        initiallyHiddenSlides.forEach(slide => slide.classList.add("hidden2"));
      }
    }
  }

  btn.addEventListener("click", () => {
    if (window.innerWidth < 768) return;

    if (isShown) {
      initiallyHiddenSlides.forEach(slide => slide.classList.add("hidden2"));
      btn.innerHTML = "<img id='arrowIcon2' src='./img/swiper2/expand_down.png' alt='раскрыть'> Показать все";
      btn.setAttribute("aria-expanded", "false");
      isShown = false;
    } else {
      slides.forEach(slide => slide.classList.remove("hidden2"));
      btn.innerHTML = "<img id='arrowIcon2' src='./img/swiper2/expand_up.png' alt='скрыть'> Скрыть";
      btn.setAttribute("aria-expanded", "true");
      isShown = true;
    }
  });

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
};

export default initMobileSwiper;
