/**
 * Luxury Gold Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)
	
	

  // ── 메인 (히어로) ──
  groom: {
    name: "장지훈",
    nameEn: "Jihun",
    father: "장성진",
    mother: "박순희",
    fatherDeceased: true,
    motherDeceased: false
  },

  bride: {
    name: "이다정",
    nameEn: "Dajeong",
    father: "이용수",
    mother: "김영옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-29",
    time: "17:00",
    venue: "W웨딩 국민연금",
    hall: "에메랄드홀 3층",
    address: "부산광역시 연제구 연산동 중앙대로 1000",
    tel: "051-668-7979",
    mapLinks: {
      kakao: "https://place.map.kakao.com/11097221",
      naver: "https://naver.me/5mI0Kqw0"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "We're getting married",
    content: "선선한 가을바람이 시작되는\n8월의 마지막 토요일에\n저희 두 사람의 행복한 시작에 초대합니다.\n\n귀한 걸음 하시어\n저희의 앞날을 빛내주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "Since 2022",
    content: "2022년 11월 19일, 시원한 계절에 시작된 우리.\n맛있는 것을 함께 먹고, 좋은 곳을 함께 걸으며\n4년 동안 예쁘게 연애해 온 저희가 드디어 결혼합니다!\n\n이제는 부부라는 이름으로\n더 아끼고 행복하게 살겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "장지훈", bank: "신한은행", number: "110-364-674264" },
      { role: "어머니", name: "박순희", bank: "농협은행", number: "817064-52-103831" }
    ],
    bride: [
      { role: "신부", name: "이다정", bank: "신한은행", number: "110-610-517650" },
      { role: "아버지", name: "이용수", bank: "농협은행", number: "356113-86-75103" },
      { role: "어머니", name: "김영옥", bank: "농협은행", number: "121033-56-070708" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "지훈 & 다정 Wedding day",
    description: "2026.08.29 5:00PM, W웨딩 국민연금홀 3F"
  }
};
