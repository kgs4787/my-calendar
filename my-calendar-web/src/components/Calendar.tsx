// src/components/Calendar.tsx

"use client"; // 클라이언트 컴포넌트로 지정

import React, { useState } from "react";
import Calendar from "react-calendar"; // react-calendar 라이브러리 임포트
import "react-calendar/dist/Calendar.css"; // react-calendar 기본 CSS 임포트

// Date 또는 Date[] 타입 정의 (단일 날짜 또는 날짜 범위 선택을 위함)
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar() {
  // 달력에서 선택된 날짜(또는 날짜 범위)를 관리하는 상태
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="my-calendar-container">
      <h2>달력</h2>
      <Calendar
        onChange={onChange} // 날짜가 변경될 때 호출될 함수
        value={value} // 현재 선택된 날짜
        calendarType="gregory" // 달력 타입 (그레고리력)
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        } // 일자만 표시
        showNeighboringMonth={false} // 이전/다음 달 날짜 표시 여부
        locale="ko-KR" // 한국어 로케일 설정
      />
      {value && (
        <p className="selected-date-info">
          선택된 날짜:{" "}
          {Array.isArray(value) && value[0] && value[1]
            ? `${value[0].toLocaleDateString(
                "ko-KR"
              )} ~ ${value[1].toLocaleDateString("ko-KR")}`
            : value instanceof Date
            ? value.toLocaleDateString("ko-KR")
            : "없음"}
        </p>
      )}
    </div>
  );
}
