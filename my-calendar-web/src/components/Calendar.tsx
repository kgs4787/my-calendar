// src/components/Calendar.tsx

"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import events from "@/data/events";
import { CalendarEvent } from "@/data/events"; // CalendarEvent 타입 임포트

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  // 특정 날짜에 일정이 있는지 확인하는 함수
  // event 매개변수에 CalendarEvent 타입을 명시적으로 사용합니다.
  const hasEventOnDate = (date: Date): boolean => {
    return events.some(
      (
        event: CalendarEvent // <-- 여기에 CalendarEvent 타입을 명시
      ) =>
        event.start.getFullYear() === date.getFullYear() &&
        event.start.getMonth() === date.getMonth() &&
        event.start.getDate() === date.getDate()
    );
  };

  // ... 나머지 코드 (이전과 동일)

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && hasEventOnDate(date)) {
      return <div className="event-dot"></div>;
    }
    return null;
  };

  const handleDateClick = (date: Date) => {
    alert(
      `${date.toLocaleDateString(
        "ko-KR"
      )} 일정을 확인하거나 추가할 수 있습니다.`
    );
  };

  return (
    <div className="my-calendar-container">
      <h2>달력</h2>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="gregory"
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        showNeighboringMonth={false}
        locale="ko-KR"
        tileContent={tileContent}
        onClickDay={handleDateClick}
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
