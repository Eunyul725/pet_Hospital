import { Link } from 'react-router-dom';
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';




function MedicalCases() {
  const medicalImgs = [
    { src: '/images/medical1.jpg', alt: 'medicalImg1' },
    { src: '/images/medical2.jpg', alt: 'medicalImg2' },
    { src: '/images/medical3.jpg', alt: 'medicalImg3' },
  ]

  const diseaseList = [
    { name: '심혈관내과', src:'/images/disease1.png' },
    { name: '내분비내과', src:'/images/disease2.png' },
    { name: '일반외과', src:'/images/disease3.png' },
    { name: '정형외과', src:'/images/disease4.png' },
  ]

  const swiperRef = useRef(null);
  const [ , setActiveIndex ] = useState(0);

  return (
    <section 
      id="medicalcases" 
      className='w-full h-auto md:h-[360px] bg-teal-600 py-12 md:py-20 mt-20 md:mt-28 md:mb-28'
    >
      <div className="max-w-7xl w-full mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className='relative w-full md:max-w-[320px] lg:max-w-[500px] aspect-video md:aspect-[500/430] overflow-hidden rounded'>
          <Swiper
            modules={[ Autoplay ]}
            spaceBetween={20}
            onSwiper = {(swiper)=> ( swiperRef.current = swiper )}
            loop = {true}
            slidesPerView = {1}
            onSlideChange = {(swiper) => { setActiveIndex(swiper.realIndex); }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            className='w-full h-full'
          >
            {
              medicalImgs.map(( item, idx )=> (
                <SwiperSlide key={idx} >
                  <Link to='/disease' onClick={(e) => e.preventDefault()} className='block w-full h-full'>
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className='w-full h-full object-cover object-right brightness-[0.90] rounded'
                      width="500"
                      height="430"
                      loading='lazy'
                    />
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='flex flex-col justify-between flex-1'>
          <div className="text-white flex flex-col gap-4 mt-8 mb-6">
            <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold leading-snug">
              소중한 가족 반려견, 반려묘<br />
              위드힐이 지켜드리겠습니다.
            </h2>
            <p className="text-center md:text-left text-base md:text-lg mb-6 leading-relaxed">
              정직하고 정확한 진료를 통해 수술, 재활까지<br />
              치료가 필요한 모든 아이들을 꼼꼼히 돌보겠습니다.
            </p>
            <Link 
              to="/about" 
              className='text-right hover:underline hover:text-yellow-400 text-sm md:text-base'
            >
              병원 둘러보기
            </Link>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
            {
              diseaseList.map(( item, idx )=> (
                <Link 
                  to='/about' 
                  key={idx} 
                  className="relative block w-full aspect-[170/120] md:mt-5 rounded overflow-hidden"
                >
                  <img 
                    src={item.src} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-center brightness-[0.65]" 
                  />
                  <p 
                    className="
                      absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      text-white text-base md:text-lg font-bold 
                      whitespace-nowrap tracking-wider drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]
                    "
                  >
                    {item.name}
                  </p>                              
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default MedicalCases;