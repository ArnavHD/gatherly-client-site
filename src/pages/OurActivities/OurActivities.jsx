import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://i.ibb.co/hRKwtR8m/Purple-Festival-Crowd-Silhouettes.png",
  "https://i.ibb.co/RpSFxtMj/Community-Volunteers-Sorting-Supplies.png",
  "https://i.ibb.co/XxBhx5wJ/Instructor-Presenting-Python-Code-Workshop.png",
  "https://i.ibb.co/q3KYwLTx/Golden-Hour-Mountain-Hikers.png",
  "https://i.ibb.co/YFckQYjX/Volleyball-Spike-Over-the-Net.png",
  "https://i.ibb.co/yBYkfsNG/Laughter-Around-a-Warmly-Lit-Table.png",
];


const OurActivities = () => {
  const galleryImages = [...images, ...images, ...images];

  return (
    <section className="bg-[#222c46] py-20 overflow-hidden">
      <h2 className="text-4xl text-white text-center libre mb-12">Our Activities</h2>

      <Swiper
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        loopAdditionalSlides={6}
        speed={700}
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 180,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="w-full max-w-6xl pb-12"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index} className="!w-[200px] sm:!w-[260px]">
            <img
              src={image}
              alt={`Gatherly activity ${(index % images.length) + 1}`}
              className="w-full h-[320px] object-cover rounded-xl shadow-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurActivities;
