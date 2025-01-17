const swiper = new Swiper('.team__swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  initialSlide: 2,
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
});

function updateVisibleSlides(swiper) {
  swiper.slides.forEach(slide => slide.classList.remove('visible-slide'));

  const visibleSlides = swiper.slides.filter((slide, index) => {
    const slideIndex = index - swiper.realIndex;
    return slideIndex >= 0 && slideIndex < swiper.params.slidesPerView;
  });

  visibleSlides.forEach(slide => slide.classList.add('visible-slide'));
}