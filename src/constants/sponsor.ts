import khuLogo from '@/assets/icons/khu.png';
import pearlAbyssLogo from '@/assets/icons/pearlAbyss.png';
import smilegateLogo from '@/assets/icons/smilegate.png';
import kraftonLogo from '@/assets/icons/krafton.png';
import kogLogo from '@/assets/icons/kog.png';
import BackEndLogo from '@/assets/icons/BackEnd.png';
import LemonSoundLogo from '@/assets/icons/LemonSound.png';
import { StaticImageData } from 'next/image';

export type Sponsor = {
    title: string;
    image: StaticImageData;
    link: string;
}

// 요청하신 순서: 경희대, 펄어비스, 스마일게이트, 코그, 뒤끝, 레몬사운드, 크래프톤
export const SPONSOR_LIST: Sponsor[] = [
    {
        title: '경희대학교 소프트웨어융합대학',
        image: khuLogo,
        link: 'https://software.khu.ac.kr/',
    },
    {
        title: '펄어비스',
        image: pearlAbyssLogo,
        link: 'https://www.pearlabyss.com/',
    },
    {
        title: '스마일게이트 퓨처랩',
        image: smilegateLogo,
        link: 'https://futurelab.smilegate.com/',
    },
    {
        title: 'KOG',
        image: kogLogo,
        link: 'https://www.kog.co.kr/',
    },
    {
        title: '뒤끝',
        image: BackEndLogo,
        link: 'https://backnd.com/ko/',
    },
    {
        title: '레몬사운드',
        image: LemonSoundLogo,
        link: 'https://www.lemonsound.co/',
    },
    {
        title: '크래프톤',
        image: kraftonLogo,
        link: 'https://www.krafton.com/',
    }
];