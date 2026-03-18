'use client';

import React, { useState, useEffect } from "react";
import * as gtag from '@/components/ga/gtag';

type ApplyButtonProps =
    React.ComponentPropsWithoutRef<"button"> & {
        className?: string;
        color?: string;
        speed?: React.CSSProperties['animationDuration'];
        thickness?: number;
    }

const ApplyButton = ({
    className = "",
    color = "white",
    speed = "6s",
    thickness = 1,
}: ApplyButtonProps) => {
    // 모달창 열림/닫힘 상태 관리
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // ESC 키 입력 시 모달 닫기
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    return (
        <>
            <button
                onClick={() => {
                    // 구글 애널리틱스 이벤트 추적 유지
                    gtag.event("sign_up", {
                        event_category: 'apply_button',
                        event_label: 'apply_button_click',
                        value: 1,
                    });
                    openModal();
                }}
                className={`relative inline-block overflow-hidden rounded-[20px] ${className} cursor-pointer`}
                style={{
                    padding: `${thickness}px 0`
                }}
            >
                <div
                    className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                    style={{
                        background: `radial-gradient(circle, ${color}, transparent 10%)`,
                        animationDuration: speed,
                    }}
                ></div>
                <div
                    className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                    style={{
                        background: `radial-gradient(circle, ${color}, transparent 10%)`,
                        animationDuration: speed,
                    }}
                ></div>
                <div className="relative z-1 px-6 py-1.5 text-lg font-extrabold text-white rounded-3xl bg-gradient-to-r from-kyunghee-red-950 via-kyunghee-red-500 via-50% to-kyunghee-red-300 to-80% bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 w-fit">
                    지원하기
                </div>
            </button>

            {/* 지원 마감 안내 모달 창 */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={closeModal} // 어두운 배경 클릭 시 닫힘
                >
                    <div 
                        className="relative w-full max-w-sm p-8 bg-neutral-800 rounded-2xl shadow-2xl text-center flex flex-col items-center cursor-pointer"
                        onClick={closeModal} // 모달 내부를 클릭해도 닫히도록 설정
                    >
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl font-bold transition-colors"
                        >
                            &times;
                        </button>
                        
                        <h3 className="text-xl font-bold text-white mb-6">지원 안내</h3>
                        <div className="text-gray-200 space-y-2 text-base w-full">
                            <p>지금은 지원마감되었습니다.</p>
                            <p>11기 지원을 기다려주세요.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ApplyButton;