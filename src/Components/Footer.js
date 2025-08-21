import { Link } from "react-router-dom";
import { PawPrint } from 'lucide-react';



function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* 상단 안내 */}
            <div className=" bg-gray-800 py-8 px-4 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-2 text-sm">
                    <p>진료시간 : 주간진료 09:30 - 22:00 | 야간진료 22:00 - 09:30</p>
                    <p>24시 위드힐동물메디컬센터 문의전화 : 응급진료 24시간 031-532-3256</p>
                </div>
            </div>
            {/* 하단 본문 */}
            <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto py-8 px-4 md:px-10 gap-2">
                <div>
                    <Link to='/' className="block">
                        <h2 className="flex items-center h-16">
                            <div className="flex items-center ">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-gray-900 font-bold text-sm"><PawPrint /></span>
                                </div>
                                <span className='ml-2 text-xl font-bold'>
                                    위드힐동물메디컬센터
                                </span>
                            </div>
                        </h2>
                    </Link>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-sm py-4">
                        <p>031-523-3256</p>
                        <p>경기도 남양주시 순화궁로 341(지번: 경기도 남양주시 별내동 931-7) 24시위드힐동물메디컬센터</p>
                    </div>
                    <p className="text-sm">Copyright&copy; 2022 24시위드힐동물메디컬센터 All rights reserved.</p>
                </div>
                <div className="inline-block pt-20 flex gap-3 justify-end mr-2">
                    <span 
                        className="bg-icon_bg1 w-7 h-7 bg-no-repeat bg-cover bg-center bg-[length:25px_25px] cursor-pointer"
                    ></span>
                    <span 
                        className="bg-icon_bg2 w-7 h-7 bg-no-repeat bg-cover bg-center bg-[length:25px_25px cursor-pointer]" 
                    ></span>
                    <span 
                        className="bg-icon_bg3 w-7 h-7 bg-no-repeat bg-cover bg-center bg-[length:25px_25px] cursor-pointer"
                    ></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;