import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
const Testimonials = () => {
  const reviews = [
    {
      name: "John Carter",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      text: "The pizza was amazing and fresh! Highly recommended.",
      rating: 5
    },
    {
      name: "Michael Adams",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "Fast delivery and delicious food. Will order again!",
      rating: 4
    },
    {
      name: "David Smith",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      text: "The burgers are juicy and full of flavor.",
      rating: 5
    },
    {
      name: "Robert Johnson",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      text: "Best customer service and fresh ingredients.",
      rating: 5
    },
    {
      name: "James Miller",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      text: "Excellent taste and quick service every time.",
      rating: 4
    },
    {
      name: "William Brown",
      image: "https://randomuser.me/api/portraits/men/66.jpg",
      text: "Loved the fresh pizza and friendly staff.",
      rating: 5
    },
    {
      name: "Christopher Taylor",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "The delivery was faster than expected.",
      rating: 5
    },
    {
      name: "Matthew Harris",
      image: "https://randomuser.me/api/portraits/men/88.jpg",
      text: "Amazing taste and reasonable prices.",
      rating: 4
    },
    {
      name: "Anthony Clark",
      image: "https://randomuser.me/api/portraits/men/99.jpg",
      text: "The best burger I’ve ever had!",
      rating: 5
    },
    {
      name: "Mark Lewis",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      text: "Always fresh and tasty food, highly recommend.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-64 
                  hover:bg-orange-500 hover:text-white transition-colors duration-300">
                <div className="flex flex-col items-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
                  <div className="flex mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 group-hover:text-white transition-colors duration-300" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-center overflow-hidden">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonials;