export type ActivityType = "세미나" | "행사" | "스터디" | "기타" | "친목활동" | "학술활동";

// year를 string 혹은 string[]로 모두 허용
export type Activity = {
  id: string;
  title: string;
  type: ActivityType;
  year: string | string[]; // <-- changed
  date: string;
  description: string;
};

export const YEAR_LIST = ["전체", "9기", "8기", "7기", "6기", "5기"];

// 예시로 언리얼 스터디 항목을 배열 형태로 변경
export const ACTIVITY_LIST: Activity[] = [
  {
    id: "24",
    title: "언리얼 스터디",
    type: "스터디",
    year: "8기",
    date: "2025.07.14 - 2025.08.04",
    description: "언리얼 에디터의 기본적인 개념 학습",
  },
  {
    id: "23",
    title: "4월 정기총회",
    type: "세미나",
    year: "8기",
    date: "2025.04.03",
    description: "4월 정기 총회 및 동아리 스티커 배부",
  },
  {
    id: "22",
    title: "25-1 MT",
    type: "친목활동",
    year: "8기",
    date: "2025.03.28 - 2025.03.29",
    description: "부원들과 친목 활동 진행",
  },
  {
    id: "21",
    title: "펄어비스 사옥 방문",
    type: "행사",
    year: "8기",
    date: "2025.03.21",
    description: "기업 컨택 활동 진행",
  },
  {
    id: "20",
    title: "유니티 스터디",
    type: "학술활동",
    year: "8기",
    date: "2025.03.19 - 2025.04.09",
    description: "기초 유니티 엔진 개념 학습 활동",
  },
  {
    id: "19",
    title: "리턴 얼라이브 대회",
    type: "친목활동",
    year: "8기",
    date: "2025.03.17",
    description: "KOG사의 '리턴 얼라이브' 대회 진행",
  },
  {
    id: "18",
    title: "8기 개강총회",
    type: "세미나",
    year: "8기",
    date: "2025.03.06",
    description: "동아리 소개 및 활동 안내",
  },
  {
    id: "17",
    title: "연합 파이썬 스터디",
    type: "스터디",
    year: "8기",
    date: "2025.03.02",
    description: "루덴스 X 하이퍼 연합 파이썬 스터디",
  },
  {
    id: "16",
    title: "24-2 루덴스 게임 제작 발표회",
    type: "세미나",
    year: "7기",
    date: "2024.12.20",
    description: "코그, 크래프톤과 함께한 게임 제작 발표회",
  },
  {
    id: "15",
    title: "7기 정기총회",
    type: "세미나",
    year: "7기",
    date: "2024.09.04",
    description: "동아리 활동 보고 및 발표",
  },
  {
    id: "14",
    title: "스마일게이트 견학",
    type: "기타",
    year: "7기",
    date: "2024.08.29",
    description: "게임 업계 방문 및 현업자 Q&A",
  },
  {
    id: "13",
    title: "24-2 Ludens 게임 제작 발표회",
    type: "세미나",
    year: "7기",
    date: "2024.12.20",
    description: "프로젝트 회고 세미나",
  },
  {
    id: "12",
    title: "24-1 개강총회",
    type: "행사",
    year: "6기",
    date: "2024.03.07",
    description: "개강 총회",
  },
  {
    id: "11",
    title: "24-1 아주대 게임 교류회",
    type: "행사",
    year: "6기",
    date: "2024.05.24",
    description: "아주대 게임 제작 동아리 브레인스톰, TML과 게임 교류회",
  },
  {
    id: "10",
    title: "24-1 사막",
    type: "친목활동",
    year: "6기",
    date: "2024.04.05",
    description: "1년에 1번, 벚꽃과 함께하는 사막",
  },
  {
    id: "9",
    title: "2024 Summer Unreal Study",
    type: "스터디",
    // year를 복수 기수로 설정하는 예시
    year: ["6기", "7기"], // <-- changed
    date: "2024.07.23 - 2024.08.09",
    description: "여름방학 동안 진행한 언리얼 엔진5 입문 스터디",
  },
  {
    id: "8",
    title: "24-1 유니티 기초 세션",
    type: "스터디",
    year: "6기",
    date: "2024.03.15 - 2024.04.05",
    description: "직접 수행하는 유니티 엔진 기본 익히기",
  },
  {
    id: "7",
    title: "24-1 유니티 심화 세션",
    type: "스터디",
    year: "6기",
    date: "2024.05.12 - 2024.05.26",
    description: "Photon을 이용한 3D 레이싱 멀티 게임 제작",
  },
  {
    id: "6",
    title: "24-1 컴투스 인턴십 채용 설명회",
    type: "행사",
    year: "6기",
    date: "2024.03.15 - 2024.04.05",
    description: "직접 수행하는 유니티 엔진 기본 익히기",
  },
  {
    id: "5",
    title: "24-1 MT",
    type: "친목활동",
    year: "6기",
    date: "2024.03.16",
    description: "부원간의 네트워킹 및 단결 활동 진행",
  },
  {
    id: "4",
    title: "24-1 알고리즘 스터디",
    type: "스터디",
    year: "6기",
    date: "2024.03.04 - 2024.04.04",
    description: "알고리즘 입문 스터디",
  },
  {
    id : "3",
    title : "이화여대 KING 게임 교류회",
    type : "세미나",
    year : "5기",
    date : "2023.11.17",
    description: "타대학 게임 제작 동아리와의 교류회 진행",
  },
  {
    id : "2",
    title : "23-2 MT",
    type : "친목활동",
    year : "5기",
    date : "2023.11.03 - 2023.11.04",
    description: "부원들과 재밌는 MT 활동 진행",
  },
  {
    id : "1",
    title : "23-2 축제부스",
    type : "친목활동",
    year : "5기",
    date : "2023.09.19",
    description: "제작한 게임으로 축제 부스 운영",
  },
];
