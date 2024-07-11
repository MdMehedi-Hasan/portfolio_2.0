import React, { useRef } from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import munim from '../../Assets/companies/Munim-Bhai-1024x1024.webp'
import fahim from '../../Assets/companies/fahim.jpg'
import anam from '../../Assets/companies/anam.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../Styles/Review.css'
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Reviews() {
  const swiperRef = useRef(null);


  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className='mt-36 mb-36'>
      <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2' id='reviews' data-aos="fade-up" data-aos-duration="1500"><BiMessageDetail />REVIEWS</span>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-16 mb-10' data-aos="fade-up" data-aos-duration="1500">Trusted by <span className='text-primary'>Leading Companies</span></h1>
      <div data-aos="fade-up" data-aos-duration="1500">
        {/* Swiper */}
        <Swiper
          navigation={{
            prevEl: '.custom-slider-prev',
            nextEl: '.custom-slider-next'
          }}
          pagination={{
            el: '.custom-slider-pagination',
            clickable: true,
            type: 'fraction',
          }}
          spaceBetween={60}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='border-2 border-gray-400 rounded-3xl p-5 sm:p-10'>
              <div className='flex items-center gap-3'>
                <img src={munim} alt="munim" className='w-12 h-12 object-cover rounded-full bg-white' />
                <div>
                  <h5>Tanveer Hossain Munim</h5>
                  <span>CTO of <a className='text-primary' href="https://interactivecares.com/">Interactive Cares</a></span>
                </div>
              </div>
              <p className='mt-8 text-lg mb-8'>As the CTO, I am thoroughly impressed with his work. His expertise has been instrumental in creating intuitive and responsive user interfaces for our products. He is an invaluable asset to our team.</p>
              <span className='text-sm'>JOB (Full Time)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border-2 border-gray-400 rounded-3xl p-10'>
              <div className='flex items-center gap-3'>
                <img src={fahim} alt="fahim" className='w-12 h-12 object-cover rounded-full bg-white' />
                <div>
                  <h5>Tanjim Al Fahim</h5>
                  <span>CEO of <a className='text-primary' href="https://arenawebsecurity.net/">Arena Web Security</a></span>
                </div>
              </div>
              <p className='mt-8 text-lg mb-8'>I am constantly amazed by his talent and innovation. His mastery of React.js and JavaScript brings our visions to life with stunning, user-friendly interfaces. He doesn't just code, he craft experiences that delight our users.</p>
              <span className='text-sm'>JOB (Full Time)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border-2 border-gray-400 rounded-3xl p-10'>
              <div className='flex items-center gap-3'>
                <img src={anam} alt="anam" className='w-12 rounded-full' />
                <div>
                  <h5>Sheejon Anam</h5>
                  <span>Founder of <a className='text-primary' href='https://the35mm.net/'>The 35mm</a></span>
                </div>
              </div>
              <p className='mt-8 text-lg mb-8'>Working with him always gave me a positive vibe. He never dissapointed me with his work. I see the vision and he makes it happen for me. A highly professional and creative personality.</p>
              <span className='text-sm'>Project</span>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='relative w-40 mt-16'>
          <div className="custom-slider-prev border-2 rounded-full p-3 text-xl" onClick={goToPrevSlide}><IoIosArrowBack /></div>
          <div className="custom-slider-next border-2 rounded-full p-3 text-xl" onClick={goToNextSlide}><IoIosArrowForward /></div>
          <div className="custom-slider-pagination text-sm"></div>
        </div>
      </div>
    </div>
  )
}
