import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from '../Product/Product';
import styles from './Carousel.module.css';


function Carousel() {


  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50} // Adjust the space between slides
      slidesPerView={3.5} // Adjust this value to control how much of the side slides are visible
      centeredSlides={true}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      className={styles.mySwiper} // This is used for applying specific styles
    >
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
      <SwiperSlide><ProductCard /></SwiperSlide>
    </Swiper>
  );
}

export default Carousel;