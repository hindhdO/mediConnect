import React from 'react'; // Added React import
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; // Correct import for Swiper and SwiperSlide

import 'swiper/css'; // Importing CSS globally
import 'swiper/css/pagination'; // Importing Pagination CSS
import patientAvatar from '../../assets/images/patient-avatar.png'; // Correct path to patient avatar image
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
     navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1, 
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2, 
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" /> {/* Removed the closing parenthesis */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" /> {/* Removed the closing parenthesis */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" /> {/* Removed the closing parenthesis */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" /> {/* Removed the closing parenthesis */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" /> {/* Removed the closing parenthesis */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                  <HiStar className="text-yellowColor w-[18px] h-5" /> 
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>




      </Swiper>
    </div>
  );
};

export default Testimonial;
