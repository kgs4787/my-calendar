// src/app/page.tsx

import React from "react";

export default function Home() {
  return (
    <section className="main-content">
      <div className="container">
        {/*
          이곳에 메인 콘텐츠 (예: 달력, 오늘 할 일 목록 등)가 들어갑니다.
          나중에 별도의 컴포넌트들을 여기에 임포트하여 사용하게 됩니다.
        */}
        <h2>어서오세요! 일정을 관리해보세요.</h2>
        <p>
          왼쪽 사이드바(예정)나 상단 메뉴(예정)를 통해 원하는 기능을 이용할 수
          있습니다.
        </p>

        {/* 예시: 달력 컴포넌트가 들어갈 자리 */}
        <div
          className="calendar-section"
          style={{
            border: "1px dashed #ccc",
            padding: "50px",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <h3>[여기에 달력 컴포넌트가 들어갈 예정]</h3>
          <p>월별 달력, 날짜 선택 기능 등이 구현됩니다.</p>
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
