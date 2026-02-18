"use client"; // 상태(State)를 사용하기 위해 가장 윗줄에 반드시 추가해야 합니다!

import { useState } from 'react';
import { SPONSOR_LIST } from '@/constants/sponsor';
import SponsorCard from '../components/sponsorCard';
import Image from 'next/image';
import kogIcon from '@/assets/icons/kog.png';

export default function SponsorSection() {
    // 모달창의 열림/닫힘 상태를 관리하는 변수 (기본값: false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 창을 여는 함수
    const openModal = () => setIsModalOpen(true);
    // 창을 닫는 함수
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="w-full flex flex-col items-center">
            {/* 후원사 목록 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start place-items-center">
                {SPONSOR_LIST.map((sponsor) => (
                    <SponsorCard key={sponsor.title} {...sponsor}/>
                ))}
            </div>

            {/* 코그 이미지 */}
            <div className="mt-16 flex justify-center">
                <Image 
                    src={kogIcon} 
                    alt="코그" 
                    className="w-32 h-auto opacity-80" 
                />
            </div>

            {/* 후원 문의 버튼 (a 태그에서 button으로 변경) */}
            <button 
                onClick={openModal} 
                className="mt-16 py-2.5 px-6 text-base font-semibold rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
            >
                후원 문의
            </button>

            {/* 모달(팝업) 창 영역 */}
            {isModalOpen && (
                <div 
                    // 배경 흐리게 (backdrop-blur-sm) 및 반투명 검은색 (bg-black/60)
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={closeModal} // 배경을 클릭해도 창이 닫히도록 설정
                >
                    <div 
                        // 모달 박스 디자인: 둥근 모서리(rounded-2xl), 어두운 배경(bg-neutral-800)
                        className="relative w-full max-w-sm p-8 bg-neutral-800 rounded-2xl shadow-2xl text-center flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()} // 박스 안쪽을 클릭했을 때는 닫히지 않도록 방지
                    >
                        {/* 오른쪽 위 X 닫기 버튼 */}
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl font-bold transition-colors"
                        >
                            &times;
                        </button>
                        
                        {/* 모달 내부 내용 */}
                        <h3 className="text-xl font-bold text-white mb-6">후원 문의</h3>
                        <div className="text-gray-200 space-y-2 text-base w-full">
                            <p><span className="font-semibold text-white">회장</span> 권신혁</p>
                            <p>tlsgur0427@khu.ac.kr</p>
                            <p>010-8920-0427</p>
                            <p className="pt-2">
                                <a 
                                    href="https://open.kakao.com/o/sDlXLrbi" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                                >
                                    카카오톡 오픈채팅
                                </a>
                            </p>
                        </div>
                        <p className="mt-8 text-sm text-gray-400">상기 연락처로 문의 부탁드립니다!</p>
                    </div>
                </div>
            )}
        </section>
    );
}