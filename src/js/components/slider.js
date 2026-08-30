// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    slidesPerGroup: 1,
    centeredSlides: true,

    breakpoints: {
      992: {
        centeredSlides: false,
      }
    }
  });
};
