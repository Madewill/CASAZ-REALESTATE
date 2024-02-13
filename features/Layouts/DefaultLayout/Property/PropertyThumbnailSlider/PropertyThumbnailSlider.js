import { useState, useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Divider } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper/core";

// Initialize Swiper core modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const PropertyThumbnailSlider = ({ photos }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thumbsSwiperRef = useRef(null);

  useEffect(() => {
    if (!thumbsSwiper) {
      setThumbsSwiper(thumbsSwiperRef.current.swiper);
    }
  }, [thumbsSwiper]);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-color": "#fff",
        }}
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={{ FreeMode, Navigation, Thumbs }}
        className="mySwiper2"
      >
        {photos.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Divider marginY="1rem" />

      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={{ FreeMode, Navigation, Thumbs }}
        className="mySwiper"
        onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
      >
        {photos.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PropertyThumbnailSlider;
