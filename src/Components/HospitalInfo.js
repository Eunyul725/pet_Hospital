import { Link } from 'react-router-dom';


function HospitalInfo() {

  const infos = [
    {
      id: 1,
      src: '/images/direct1.png',
      title: '병원둘러보기',
      sub: '대기실, 진료실, 수술실까지 모든 공간에서 편안함을 느낄 수 있도록 준비했습니다.',
      path: '/about/facility'
    },
    {
      id: 2,
      src: '/images/direct2.png',
      title: '진료예약안내',
      sub: '온라인으로 쉽고 빠르게 방문 전 원하는 시간으로 예약이 가능합니다.',
      path: '/reservation'
    },
    {
      id: 3,
      src: '/images/direct3.png',
      title: '보유장비',
      sub: '신속하고 정밀한 진단을 위해 대학병원급 장비를 보유하고 있습니다.',
      path: '/about/equipment'
    }
  ]

  return (
    <section id='hospitalInfo' className='max-w-7xl mx-auto px-4 text-center md:pt-10'>
      <h3 className='text-2xl md:text-3xl font-bold pt-[80px] md:pt-[120px]'>
        정밀하고 정확한 진단, 위드힐동물메디컬센터
      </h3>
      <p className='mb-12 text-sm md:text-base'>
        내원하는 아이들에게 건강한 미소와 행복을 줄 수 있도록 노력하겠습니다.
      </p>
      {/* 카드 리스트 */}
      <div className='flex flex-col md:flex-row flex-1 justify-between items-center mb-10 p-6 border-y-2 border-[#222] md:gap-0'>
        {
          infos.map(( info, idx )=> (
            <div key={idx} className='w-full md:w-1/3 border-b md:border-b-0 md:border-r border-[#ccc] md:last:border-r-0 pb-6 last:border-b-0 md:pb-0' >
              <Link 
                to={info.path}
                onClick={(e) => e.preventDefault()}
                className='flex flex-col justify-center items-center'
              >
                <img 
                  src={info.src} 
                  alt={`위드힐 ${info.title} 이미지`} 
                  loading="lazy"
                  className='w-36 h-auto mb-4' 
                />
                <h4 className='text-[20px] font-bold mb-2'>{info.title}</h4>
                <p className='w-[280px]'>{info.sub}</p>
              </Link>
            </div>
          ))
        }
      </div>
      <div className='flex flex-wrap mb-[200px]'>
        <div className='w-full md:w-2/5 flex flex-col'>
          <div className='w-full h-full md:h-1/2 flex bg-emerald-100 p-6 justify-around items-center'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>인사말</h3>
            <Link 
              to="/about" 
              className='text-sm text-gray-800 border border-gray-800 px-4 py-1 rounded hover:bg-teal-800 hover:text-white transition'
            >
                View More +
            </Link>
          </div>
          <div className='w-full h-full md:h-1/2 bg-teal-100 p-6 flex justify-around items-center'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>예약안내</h3>
            <div className='h-full flex flex-col gap-2 md:justify-evenly items-center'>
              <Link 
                to="/about"
                className='text-sm text-gray-800 border border-gray-800 px-4 py-1 rounded hover:bg-teal-700 hover:text-white transition'>
                    전화상담 : 031-523-3256
              </Link>
              <Link 
                to="/about"
                className='text-sm text-gray-800 border border-gray-800 px-4 py-1 rounded hover:bg-teal-700 hover:text-white transition'>
                카카오플러스 
                <span>View More +</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full md:w-3/5 bg-teal-600 p-8 flex flex-col justify-between text-white'>
          <div className='mb-4'>
            <h3 className='text-2xl font-semibold text-yellow-400 mb-3'>오시는 길</h3>
            <p className='text-sm leading-relaxed'>경기도 남양주시 순화궁로 341(지번: 경기도 남양주시 별내동 931-7) 24시위드힐동물메디컬센터</p>
          </div>
          <div className='w-full h-auto mt-4 flex flex-col items-center'>
            <a
                href="https://map.kakao.com/?urlX=527760&urlY=1154897&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
                target="_blank"
                rel="noopener noreferrer"
                className='w-full max-w-[500px]'
            >
              <img
                src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=527760&MY=1154897&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
                alt="카카오맵 미리보기"
                width={504}
                height={310}
                className="w-full border border-[#ccc]"
              />
            </a>
            <div className="w-full bg-[#f9f9f9] border border-t-0 border-[#dfdfdf] px-3 py-2 md:px-4 md:py-3 sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px] text-sm rounded-b">
              <div className="flex justify-between items-center">
                <img
                  src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                  alt="카카오맵"
                  className="h-4 md:h-[18px] w-auto"
                  loading="lazy"
                />
                <a
                  href="https://map.kakao.com/?urlX=527760&urlY=1154897&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-gray-600 hover:underline shrink-0"
                >
                  지도 크게 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HospitalInfo;