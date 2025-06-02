// src/app/page.tsx

import React from "react";
import MyCalendar from "@/components/Calendar"; // MyCalendar 컴포넌트 임포트

export default function Home() {
  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          어서오세요! 일정을 관리해보세요.
        </h2>
        <p className="text-gray-600 mb-6">
          왼쪽 사이드바(예정)나 상단 메뉴(예정)를 통해 원하는 기능을 이용할 수
          있습니다.
        </p>
        <div className="mb-8">
          <MyCalendar />
        </div>
        <div className="border-2 border-dashed border-blue-200 rounded-lg p-6 text-center bg-blue-50">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            [여기에 오늘 할 일 또는 일정 목록이 들어갈 예정]
          </h3>
          <p className="text-blue-500">
            오늘의 일정, 마감 기한이 임박한 할 일 등을 표시합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
