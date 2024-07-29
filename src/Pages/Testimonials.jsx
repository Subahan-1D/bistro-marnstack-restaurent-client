import SectionTitle from "../components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";

import "@smastrom/react-rating/style.css";

import { Rating } from "@smastrom/react-rating";

import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
      <section className="my-20">
        <SectionTitle
          subHeading="---What Our Clients Say---"
          heading="TESTIMONIALS"
        ></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="my-16 mx-20 space-y-2 flex flex-col items-center ">
                <RiDoubleQuotesL />
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-4">{review.details}</p>
                <h3 className="text-3xl text-yellow-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
};

export default Testimonials;