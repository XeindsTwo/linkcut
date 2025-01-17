import {setupMobileMenu} from "./mobileMenu.js";

setupMobileMenu();

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);

  let targetOffset;

  if (targetId === 'plan') {
    targetOffset = targetElement.offsetTop - 10;
  } else {
    targetOffset = targetElement.offsetTop - 30;
  }

  window.scrollTo({top: targetOffset, behavior: 'smooth'});
}

const menuLinks = document.querySelectorAll('.desktop');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', scrollToSection);
});

const swiper = new Swiper('.team__swiper', {
  navigation: {
    nextEl: '.team__btn--next',
    prevEl: '.team__btn--prev',
  },
  on: {
    init: function () {
      updateVisibleSlides(this);
    },
    slideChange: function () {
      updateVisibleSlides(this);
    },
    transitionStart: function () {
      updateVisibleSlides(this);
    },
  },
  breakpoints: {
    2000: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 2,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },
    590: {
      slidesPerView: 2,
      spaceBetween: 20,
      initialSlide: 0,
    }
  }
});

function updateVisibleSlides(swiper) {
  swiper.slides.forEach(slide => slide.classList.remove('visible-slide'));

  const visibleSlides = swiper.slides.filter((slide, index) => {
    const slideIndex = index - swiper.realIndex;
    return slideIndex >= 0 && slideIndex < swiper.params.slidesPerView;
  });

  visibleSlides.forEach(slide => slide.classList.add('visible-slide'));
}