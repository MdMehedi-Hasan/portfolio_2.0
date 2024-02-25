import React, { useRef } from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import samir from '../../Assets/companies/al_samir.jpeg'
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
    <div className='mt-10 mb-36'>
      <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2'><BiMessageDetail />REVIEWS</span>
      <h1 className='text-5xl mt-16 mb-10'>Trusted by <span className='text-primary'>Leading Companies</span></h1>
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
          <div className='border-2 border-gray-400 rounded-3xl p-10'>
            <div className='flex items-center gap-3'>
              <img src={samir} alt="Al Samir" className='w-12 rounded-full' />
              <div>
                <h5>Al Samir</h5>
                <span>CEO of <span className='text-primary'>Interactive Cares</span></span>
              </div>
            </div>
            <p className='mt-8 text-xl mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, facilis dolorum! Id fugiat blanditiis esse fugit consequatur aspernatur reprehenderit voluptatibus deleniti veritatis eum. Ducimus, quas numquam.</p>
            <span className='text-sm'>JOB (Full Time)</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='border-2 border-gray-400 rounded-3xl p-10'>
            <div className='flex items-center gap-3'>
              <img src={samir} alt="Al Samir" className='w-12 rounded-full' />
              <div>
                <h5>Tanjim Al Fahim</h5>
                <span>CEO of <span className='text-primary'>Arena Web Security</span></span>
              </div>
            </div>
            <p className='mt-8 text-xl mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, facilis dolorum! Id fugiat blanditiis esse fugit consequatur aspernatur reprehenderit voluptatibus deleniti veritatis eum. Ducimus, quas numquam.</p>
            <span className='text-sm'>JOB (Full Time)</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='border-2 border-gray-400 rounded-3xl p-10'>
            <div className='flex items-center gap-3'>
              <img src={samir} alt="Al Samir" className='w-12 rounded-full' />
              <div>
                <h5>Al Samir</h5>
                <span>CEO of <span className='text-primary'>Interactive Cares</span></span>
              </div>
            </div>
            <p className='mt-8 text-xl mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, facilis dolorum! Id fugiat blanditiis esse fugit consequatur aspernatur reprehenderit voluptatibus deleniti veritatis eum. Ducimus, quas numquam.</p>
            <span className='text-sm'>JOB (Full Time)</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='relative w-40 mt-16'>
        <div className="custom-slider-prev border-2 rounded-full p-3 text-xl" onClick={goToPrevSlide}><IoIosArrowBack /></div>
        <div className="custom-slider-next border-2 rounded-full p-3 text-xl" onClick={goToNextSlide}><IoIosArrowForward /></div>
        <div className="custom-slider-pagination text-sm"></div>
      </div>
    </div>
  )
}
