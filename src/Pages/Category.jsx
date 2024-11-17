import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionTitle from "../components/SectionTitle";

const Category = () => {
  return (
    <section className="px-4 py-8 md:px-8 lg:px-16">
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={slide1}
            alt="Salads"
            className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
          <h3 className="uppercase mt-4 text-2xl md:text-3xl lg:text-4xl text-gray-700 text-center font-semibold">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={slide2}
            alt="Pizzas"
            className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
          <h3 className="uppercase mt-4 text-2xl md:text-3xl lg:text-4xl text-gray-700 text-center font-semibold">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={slide3}
            alt="Soups"
            className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
          <h3 className="uppercase mt-4 text-2xl md:text-3xl lg:text-4xl text-gray-700 text-center font-semibold">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={slide4}
            alt="Desserts"
            className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
          <h3 className="uppercase mt-4 text-2xl md:text-3xl lg:text-4xl text-gray-700 text-center font-semibold">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={slide5}
            alt="Salads"
            className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
          <h3 className="uppercase mt-4 text-2xl md:text-3xl lg:text-4xl text-gray-700 text-center font-semibold">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
