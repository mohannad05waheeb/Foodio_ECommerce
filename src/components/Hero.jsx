import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import burger from "../assets/burger.png";
import pizza from "../assets/pizza.png";
import drink from "../assets/drink.png";
const Hero = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src={burger} alt="Burger" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt="Pizza" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={drink} alt="Drink" className="w-full h-auto" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Hero;