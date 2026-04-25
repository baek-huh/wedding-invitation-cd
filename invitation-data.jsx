// invitation-data.jsx — single source of truth for the 청첩장 content
// Shared across all three mood variants

const WEDDING = {
  groom: { name: '허백', parents: ['허원순', '이순분'] },
  bride: { name: '안지현', parents: ['안영석', '정경희'] },
  dateISO: '2026-06-20T18:30:00+09:00',
  dateKO: {
    y: 2026, m: 6, d: 20,
    weekday: '토요일',
    time: '오후 6시 30분',
    display: '2026. 06. 20',
    displayLong: '2026년 6월 20일 토요일 오후 6시 30분',
  },
  venue: {
    name: '라브르에드니아',
    floor: '',
    address: '서울시 송파구 백제고분로 95',
    // Note: no real coords needed for placeholder map; use a static-style sketch
  },
  greeting: [
    '나는 지금껏 내가 만난',
    '모든 이들로 이루어져 있다.',
    '',
    '이제, 가장 소중한 조각을 만나',
    '평생을 함께 하려 합니다.',
    '',
    '이 첫 걸음에',
    '지금껏 저희를 만들어주신',
    '여러분들께서',
    '시작을 함께 해주시면 좋겠습니다.',
  ],
  // Unsplash mood shots — wedding / couple / florals, tasteful & neutral
  // Using source.unsplash.com with seeded ids for reproducibility.
  gallery: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', // couple hands
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', // white florals
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', // bride bouquet
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', // venue tables
    'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80', // rings
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80', // couple minimal
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', // walking bw
    'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=800&q=80', // flowers neutral
  ],
  coverImage: 'uploads/IMG_0763.jpg',
  accounts: {
    groom: [
      { label: '신랑 허백', bank: '카카오뱅크', number: '3333-02-1234567' },
      { label: '아버지 허원순', bank: '국민은행', number: '123-45-6789-012' },
      { label: '어머니 이순분', bank: '신한은행', number: '110-234-567890' },
    ],
    bride: [
      { label: '신부 안지현', bank: '토스뱅크', number: '1000-1234-5678' },
      { label: '아버지 안영석', bank: '우리은행', number: '1002-345-678901' },
      { label: '어머니 정경희', bank: '하나은행', number: '123-456789-01234' },
    ],
  },
  transit: {
    subway: '지하철 8호선 석촌역 3번 출구에서 도보 5분',
    bus: '간선 301, 302 · 지선 3217 · 석촌호수 정류장 하차',
    car: '내비게이션에 "라브르에드니아" 또는 "백제고분로 95" 입력\n건물 내 지하 주차장 2시간 무료',
  },
};

Object.assign(window, { WEDDING });
