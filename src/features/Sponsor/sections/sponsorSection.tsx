"use client";

import { useState } from 'react';
import { SPONSOR_LIST } from '@/constants/sponsor';
import SponsorCard from '../components/sponsorCard';

export default function SponsorSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="w-full flex flex-col items-center">
            
            {/* 후원사 목록: 
                - max-w-[1200px]를 추가하여 전체 너비를 제한했습니다.
                - 이렇게 하면 카드가 4개 배치된 후 공간이 모자라 5번째부터 아랫줄로 넘어가며 2줄이 완성됩니다.
                - 간격(gap)은 카드 너비를 고려해 gap-8 md:gap-12 정도로 살짝 조절했습니다.
            */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-12 mt-8 w-full max-w-[1200px] px-4">
                {SPONSOR_LIST.map((sponsor) => (
                    <SponsorCard key={sponsor.title} {...sponsor}/>
                ))}
            </div>
            {/* ====================================================================== */}

            {/* 후원 문의 버튼 */}
            <button 
                onClick={openModal} 
                className="mt-16 py-2.5 px-6 text-base font-semibold rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
            >
                후원 문의
            </button>

            {/* 모달(팝업) 창 영역 */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div 
                        className="relative w-full max-w-sm p-8 bg-neutral-800 rounded-2xl shadow-2xl text-center flex flex-col items-center cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl font-bold transition-colors"
                        >
                            &times;
                        </button>
                        
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