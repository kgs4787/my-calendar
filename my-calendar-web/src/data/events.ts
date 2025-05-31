// src/data/events.ts

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  isAllDay?: boolean; // 하루 종일 이벤트 여부 (선택 사항)
}

// 가상의 일정 데이터
const events: CalendarEvent[] = [
  {
    id: "1",
    title: "프로젝트 마감",
    start: new Date(2025, 5, 5, 9, 0), // 2025년 6월 5일 9시 (월은 0부터 시작)
    end: new Date(2025, 5, 5, 17, 0),
  },
  {
    id: "2",
    title: "회의",
    start: new Date(2025, 5, 10, 14, 0),
    end: new Date(2025, 5, 10, 15, 0),
  },
  {
    id: "3",
    title: "병원 진료",
    start: new Date(2025, 5, 15, 10, 30),
    end: new Date(2025, 5, 15, 11, 0),
    isAllDay: true, // 하루 종일 이벤트로 가정
  },
  {
    id: "4",
    title: "친구 생일",
    start: new Date(2025, 5, 20), // 시간 없이 날짜만
    end: new Date(2025, 5, 20),
    isAllDay: true,
  },
  {
    id: "5",
    title: "독서 모임",
    start: new Date(2025, 5, 25, 19, 0),
    end: new Date(2025, 5, 25, 20, 0),
  },
];

export default events;
