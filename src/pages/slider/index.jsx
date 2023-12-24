import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";
export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop
    >
      <SwiperSlide>
        <h3>Floral</h3>
        <h1>Excellent bouquets for you</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h3>Floral</h3>
        <h1>Excellent bouquets for you</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h3>Floral</h3>
        <h1>Excellent bouquets for you</h1>
      </SwiperSlide>
    </Swiper>
  );
};
