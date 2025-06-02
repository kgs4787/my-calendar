// src/components/Calendar.tsx

"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 이 줄은 유지!
import events from "@/data/events";
import { CalendarEvent } from "@/data/events";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  const hasEventOnDate = (date: Date): boolean => {
    return events.some(
      (event: CalendarEvent) =>
        event.start.getFullYear() === date.getFullYear() &&
        event.start.getMonth() === date.getMonth() &&
        event.start.getDate() === date.getDate()
    );
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    return (
      <div className="relative w-full h-full">
        {view === "month" && hasEventOnDate(date) && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
        )}
      </div>
    );
  };

  const handleDateClick = (date: Date) => {
    alert(
      `${date.toLocaleDateString(
        "ko-KR"
      )} 일정을 확인하거나 추가할 수 있습니다.`
    );
  };

  return (
    // 달력 컨테이너에 Tailwind 클래스 적용
    <div className="flex flex-col items-center mt-8 p-5 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">달력</h2>
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
        className="w-full max-w-md border border-gray-200 rounded-md shadow-sm"
      />
      {value && (
        <p className="mt-5 text-lg text-gray-700 font-bold">
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
