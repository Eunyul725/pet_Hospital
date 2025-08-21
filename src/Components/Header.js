import React, { useState, useEffect } from 'react';
import { PawPrint, Globe, Search, Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  const [ activeMenu, setActiveMenu ] = useState(null);
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const [ scrolled, setScrolled ] = useState(false);
  const [ hoveredSubMenu, setHoveredSubMenu ] = useState(null);

  useEffect( ()=> {
    const handleScroll = ()=> {
      setScrolled( window.scrollY > 10 );
    }
    window.addEventListener('scroll', handleScroll);
    return ()=> {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const menuData = {
    HOSPITAL: {
      displayName: "병원소개 +",
      path: "/about",
      sections: [
          { title: "병원소개", items: ["인사말", "의료진소개", "시설안내", "장비소개", "오시는길", "연혁", "비전", "조직도", "사회공헌활동"] }
      ],
      avatar: { name: "병원소개", type: "about" }
    },
    INFORMATION: {
      displayName: "진료안내 +",
      path: "/info",
      sections: [
          { title: "진료안내", items: ["진료시간표", "예약안내", "진료과 소개", "진료비 안내", "응급환자 관리", "온라인 상담"] }
      ],
      avatar: { name: "진료안내", type: "info" }
    },
    DEPARTMENT: {
      displayName: "진료과목 +",
      path: "/departments",
      sections: [
          { title: "진료과목", items: ["내과", "외과", "영상의학과", "치과", "건강검진센터", "재활의학과", "피부과"] }
      ],
      avatar: { name: "진료과목", type: "department" }
    },
    EMERGENCY: {
      displayName: "응급관리 +",
      path: "/emergency",
      sections: [
          {
          title: "응급관리",
          items: ["24시간 응급진료", "응급센터 소개", "전문 의료진", "응급 서비스 안내"]
          }
      ],
      avatar: { name: "응급관리", type: "emergency" }
    }
  };
  
  const handleMenuHover = (menu) =>{
    setActiveMenu(menu);
    setIsMenuOpen(true);
  }
  const handleMenuLeave = () => {
    setActiveMenu(null);
    setIsMenuOpen(false);
  }
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
        id='main_header' 
        className={`
          ${scrolled || isMenuOpen || mobileMenuOpen ? "bg-white" : 'bg-transparent'} 
          w-full h-[70px] fixed left-0 top-0 right-0 z-[100000] transition duration-300 ease-in-out
        `}
    >
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between items-center h-16 relative">
        {/* 로고 */}
        <Link to='/' className="block">
          <h1 className="w-[250px] flex items-center">
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-base">
                <PawPrint />
              </span>
            </div>
            <span className={`ml-2 text-xl font-bold ${scrolled || isMenuOpen || mobileMenuOpen ? 'text-gray-900': 'text-white'} `}>
              위드힐동물메디컬센터
            </span>
          </h1>
        </Link>

        <div
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={handleMenuLeave}
          className="relative hidden lg:block"
        >
          {/* nav */}
          <nav className='flex items-center gap-8'>
            {
              Object.keys(menuData).map((menu) => (
                <Link
                  to={menuData[menu].path}
                  key={menu}
                  onMouseEnter={() => handleMenuHover(menu)}
                  className={`
                    flex items-center md:min-w-[160px] hover:text-teal-600 text-lg font-bold transition-colors duration-200 h-[70px] pt-4
                    ${scrolled || isMenuOpen || mobileMenuOpen ? 'text-gray-700':'text-white'} 
                    ${(isMenuOpen && (activeMenu === menu || hoveredSubMenu === menu)) ? 'text-teal-600': ''}
                  `}
                >
                  {menuData[menu].displayName}
                </Link>
              ))
            }
          </nav>

          {/* dropdown sub menu */}
          {
            isMenuOpen && (
              <div 
                onMouseEnter={()=> setIsMenuOpen(true)}
                onMouseLeave={handleMenuLeave}
                className='absolute top-[70px] left-1/2 -translate-x-1/2 w-full lg:w-[100vw] lg:h-[320px] bg-white z-[30000] transition-all duration-300 ease-in-out'
              >
                <div className='max-w-7xl mx-auto pb-6 flex justify-between pointer-events-auto'>
                  {
                    Object.entries(menuData).map(([menuKey, menuVal], idx)=> (
                      <div key={idx} className='min-w-[160px] pr-5'>
                        <ul key={idx} className='border-t'>
                          {
                            menuVal.sections[0].items.map((item, itemIdx) => (
                              <li
                                key={`${menuKey}-${itemIdx}`}
                                onMouseEnter={() => setHoveredSubMenu(menuKey)}
                                onMouseLeave={() => setHoveredSubMenu(null)} 
                              >
                                <Link
                                  to="/"
                                  onClick={(e) => e.preventDefault()}
                                  className="text-gray-600 font-semibold text-sm transition-colors block mt-3 hover:text-white hover:bg-teal-600 hover:rounded-full pl-2 "
                                >
                                  {item}
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    ))
                  }
                </div>
              </div>      
            )
          }
        </div>

        { /* global, search */}
        <div className="flex items-center space-x-4 h-[70px] pt-4 ">
          <Globe 
            aria-label="언어 변경"
            onClick={(e) => e.preventDefault()} 
            className={`h-6 w-6 cursor-pointer ${scrolled || isMenuOpen || mobileMenuOpen ? 'text-gray-800':'text-white'}`} 
          />
          <Search 
            aria-label="검색"
            onClick={(e) => e.preventDefault()} 
            className={`h-6 w-6 cursor-pointer ${scrolled || isMenuOpen || mobileMenuOpen ? 'text-gray-800':'text-white'}`} 
          />
          {/* 햄버거 메뉴 버튼 */}
          <button onClick={toggleMobileMenu} className="lg:hidden" aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}>
            {mobileMenuOpen ? (
              <CloseIcon className={`w-6 h-6 ${scrolled || mobileMenuOpen ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <MenuIcon className={`w-6 h-6 ${scrolled || mobileMenuOpen ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* 모바일/태블릿 메뉴 */}
        {
          mobileMenuOpen && (
            <div className="lg:hidden bg-white absolute top-[70px] left-0 w-full z-[9998] shadow-md">
              <ul className="flex flex-col px-6 py-4 space-y-4">
                {Object.entries(menuData).map(([menuKey, menuVal]) => (
                  <li key={menuKey}>
                    <details className="group">
                      <summary className="text-gray-800 hover:text-teal-600 text-base cursor-pointer py-1 outline-none font-bold group-open:text-teal-600">
                        {menuVal.avatar.name}
                      </summary>
                      <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-800">
                        {menuVal.sections.map((section) =>
                          section.items.map((item, idx) => (
                            <li key={`${menuKey}-${idx}`}>
                              <Link to={menuVal.path} className='block py-1 hover:text-teal-600 hover:font-semibold hover:underline'>{item}</Link>
                            </li>
                          ))
                        )}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>

      {/* dropdown sub menu - bg */}
      {isMenuOpen && (
        <div
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={handleMenuLeave}
          className="absolute top-14 left-0 w-full h-[340px] bg-white shadow-md z-[20000] transition-all duration-300 ease-in-out"
        />
      )}
    </header>
  )
}

export default Header;