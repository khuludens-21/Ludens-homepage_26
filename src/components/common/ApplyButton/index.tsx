'use client';

import React from "react";
import * as gtag from '@/components/ga/gtag';

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf9b7GRrLJCc1Wt_NH0NbGjli8qyswK7tUkTUX3lOyDn5PC1A/viewform";

type ApplyButtonProps =
    React.ComponentPropsWithoutRef<"a"> & {
        className?: string;
        color?: string;
        speed?: React.CSSProperties['animationDuration'];
        thickness?: number;
        href?: string;
    }

const ApplyButton = ({
    className = "",
    color = "white",
    speed = "6s",
    thickness = 1,
    href = APPLY_URL,
    onClick,
    ...props
}: ApplyButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
                gtag.event("sign_up", {
                    event_category: 'apply_button',
                    event_label: 'apply_button_click',
                    value: 1,
                });
                if (onClick) onClick(e);
            }}
            className={`relative inline-block overflow-hidden rounded-[20px] ${className} cursor-pointer`}
            style={{
                padding: `${thickness}px 0`
            }}
            {...props}
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
        </a>
    );
};

export default ApplyButton;