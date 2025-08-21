import { useState, useRef } from "react";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

const banners = [
    {
        src: '/images/banner1.jpg',
        title: '남양주 최대 규모 의료진 | 24시 위드힐동물메디컬센터',
        subtitle: '365일 24시간 가족같은 마음으로 따뜻한 치료를 위해 노력합니다'
    },
    {
        src: '/images/banner3.jpg',
        title: '국제 고양이 수의사회(ISFM) Gold 레벨 인증병원',
        subtitle: '고양이들이 편안한 상태에서 최고의 진료를 받을 수 있는 고양이 친화병원입니다.'
    },
    {
        src: '/images/banner4.jpg',
        title: '남양주 프리미엄 MRI & CT 영상진단센터',
        subtitle: '국내 최신형 MRI와 16채널 CT장비를 구축하여 보다 정밀하고 빠른 영상진단 서비스를 제공합니다. '
    },
    {
        src: '/images/banner2.jpg',
        title: '2차 전문 의료기관',
        subtitle: '일반 동물 병원에서 진행하기 어려운 치료와 고급 장비가 필요한 검사 등이 가능한 2차 전문 의료기관입니다.'
    },
]


function MainSlider() {

    const swiperRef = useRef(null);
    const [ , setActiveIndex ] = useState(0);

    

    return (
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <Swiper
          modules = {[Autoplay, Navigation, Pagination]}
          onSwiper = {(swiper)=> ( swiperRef.current = swiper )}
          loop = {true}
          slidesPerView = {1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay = {{ delay: 4000, disableOnInteraction: false }}
          navigation = {{ nextEl:".swiper-button-next", prevEl:".swiper-button-prev", }}
          pagination = {{ clickable: true }}
          className = "h-full"
        >
          {
            banners.map((item, idx)=> (
              <SwiperSlide key={idx}>
                <div className = "relative w-full h-full overflow-hidden aspect-video">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    width="16"
                    height="9"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className="absolute top-2/3 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-16 text-white max-w-xl md:max-w-4xl z-10 select-none">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-lg">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
                </div>
              </SwiperSlide>
            ))
          }
          <button
            className="swiper-button-prev absolute top-1/2 left-4 z-20 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity"
            aria-label="previous slide"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>
          <button
            className="swiper-button-next absolute top-1/2 right-4 z-20 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity"
            aria-label="next slide"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        </Swiper>
      </section>
    )
}

export default MainSlider;