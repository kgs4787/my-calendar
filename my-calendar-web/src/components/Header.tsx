// src/components/Header.tsx

import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center">
        <h1 className="text-2xl font-bold m-0">나의 개인 일정 관리</h1>
      </div>
    </header>
  );
}
