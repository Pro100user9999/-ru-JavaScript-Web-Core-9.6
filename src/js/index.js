import '../scss/style.scss'
import './burgerMenu';

console.log('It works!')
import initMobileSwiper from './swipe/_swiper-init';
import initMobileSwiper2 from './swipe2/_swipe2';
import initMobileSwiper3 from './swipe3/_swiper3';

document.addEventListener('DOMContentLoaded', () => {
    initMobileSwiper();
    initMobileSwiper2();
    initMobileSwiper3();
});

