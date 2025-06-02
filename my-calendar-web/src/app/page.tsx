// src/app/page.tsx

import React from "react";
import MyCalendar from "@/components/Calendar";
import MyRoutine from "@/components/Routine";

export default function Home() {
  return (
    <section className="py-10 bg-gray-50 flex-grow">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-5">
          어서오세요! 일정을 관리해보세요.
        </h2>
        <p className="text-center text-gray-600 mb-10 leading-relaxed">
          왼쪽 사이드바(예정)나 상단 메뉴(예정)를 통해 원하는 기능을 이용할 수
          있습니다.
        </p>

        {/* 달력 컴포넌트가 들어갈 자리 */}
        <div className="mb-10">
          <MyCalendar />
        </div>

        {/* 예시: 오늘 할 일/일정 목록이 들어갈 자리 */}
        <div className="border border-dashed border-gray-300 p-8 mt-8 text-center text-gray-500 rounded-lg bg-white shadow-sm">
          <MyRoutine />
        </div>
      </div>
    </section>
  );
}
