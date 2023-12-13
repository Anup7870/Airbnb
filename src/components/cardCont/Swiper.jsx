import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import "./cardCont.scss";
register();

const MySwiper = (images) => {
  const swiperRef = useRef(null);
  // console.log(images.images);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      // These are new...
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            width: 17px;
            height: 17px;
            padding: 7px;
            border-radius: 100%;
            color: #717171;
            opacity: 0.8;
          }
          .swiper-pagination-bullet{
            width: 7px;
            height: 7px;
            background-color: #717171;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init='false' class='swiper'>
      {
        // eslint-disable-next-line react/prop-types
        images&&images.images.map((images) => {
          // console.log(images)
          return (
            <swiper-slide class='swiper-slide'>
              <img src={images} />
            </swiper-slide>
          );
        })
      }
      {/* <swiper-slide class='swiper-slide'>
        <img src='https://a0.muscache.com/im/pictures/82e3a044-9e2a-4555-9bee-608a862b3c59.jpg?im_w=720' />
      </swiper-slide>
      <swiper-slide class='swiper-slide'>
        <img src='https://a0.muscache.com/im/pictures/88f69773-af7a-447f-8e80-3aa376f71209.jpg?im_w=720' />
      </swiper-slide>
      <swiper-slide class='swiper-slide'>
        <img src='https://a0.muscache.com/im/pictures/32f780de-3a79-4ae8-ac37-a2898e935380.jpg?im_w=720' />
      </swiper-slide>
      <swiper-slide class='swiper-slide'>
        <img src='https://a0.muscache.com/im/pictures/30615af2-683b-4cb9-aa7f-94fa5aeb303a.jpg?im_w=720' />
      </swiper-slide>
      <swiper-slide class='swiper-slide'>
        <img src='https://a0.muscache.com/im/pictures/997a8468-9b82-4ead-b7be-59e559354aa0.jpg?im_w=720' />
      </swiper-slide> */}
    </swiper-container>
  );
};

export default MySwiper;
