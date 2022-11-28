import Swiper, {Navigation} from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});
