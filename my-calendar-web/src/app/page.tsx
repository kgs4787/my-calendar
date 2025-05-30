// src/app/page.tsx

import React from "react";
import MyCalendar from "@/components/Calendar"; // MyCalendar 컴포넌트 임포트

export default function Home() {
  return (
    <section className="main-content">
      <div className="container">
        <h2>어서오세요! 일정을 관리해보세요.</h2>
        <p>
          왼쪽 사이드바(예정)나 상단 메뉴(예정)를 통해 원하는 기능을 이용할 수
          있습니다.
        </p>

        {/* 달력 컴포넌트가 들어갈 자리 */}
        <div className="calendar-section-wrapper">
          {" "}
          {/* wrapper div 추가 (스타일링 용이) */}
          <MyCalendar /> {/* MyCalendar 컴포넌트 사용 */}
        </div>

        {/* 예시: 오늘 할 일/일정 목록이 들어갈 자리 */}
        <div
          className="todo-list-section"
          style={{
            border: "1px dashed #ccc",
            padding: "30px",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <h3>[여기에 오늘 할 일 또는 일정 목록이 들어갈 예정]</h3>
          <p>오늘의 일정, 마감 기한이 임박한 할 일 등을 표시합니다.</p>
        </div>
      </div>
    </section>
  );
}
