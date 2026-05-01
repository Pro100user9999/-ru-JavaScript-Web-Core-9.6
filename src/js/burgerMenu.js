const initBurgerMenu = () => {
  const burgerButton = document.querySelector('.header__button--burger');
  const mobileMenu = document.querySelector('#mobileMenu');
  const closeButton = document.querySelector('.mobile-menu__close');
  const overlay = document.querySelector('[data-menu-overlay]');
  const body = document.body;

  const menuOpenClass = 'is-open';
  const bodyLockedClass = 'body--menu-open';

  if (!burgerButton || !mobileMenu || !closeButton || !overlay) {
    return;
  }

  const openMenu = () => {
    mobileMenu.classList.add(menuOpenClass);
    overlay.classList.add(menuOpenClass);
    body.classList.add(bodyLockedClass);
  };

  const closeMenu = () => {
    mobileMenu.classList.remove(menuOpenClass);
    overlay.classList.remove(menuOpenClass);
    body.classList.remove(bodyLockedClass);
  };

  const toggleMenu = () => {
    if (mobileMenu.classList.contains(menuOpenClass)) {
      closeMenu();
      return;
    }

    openMenu();
  };

  burgerButton.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
};

document.addEventListener('DOMContentLoaded', initBurgerMenu);
