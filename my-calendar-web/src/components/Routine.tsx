// 매일매일해야하는 루틴을 관리하는 컴포넌트
"use client";

import React, { useState } from "react";

export default function MyRoutine() {
  const [routines, setRoutines] = useState<string[]>([]);
  const [newRoutine, setNewRoutine] = useState("");

  const handleAddRoutine = () => {
    if (newRoutine.trim() !== "") {
      setRoutines([...routines, newRoutine]);
      setNewRoutine("");
    }
  };

  const handleRemoveRoutine = (index: number) => {
    const updatedRoutines = routines.filter((_, i) => i !== index);
    setRoutines(updatedRoutines);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">매일매일 해야하는 루틴</h2>
      <input
        type="text"
        value={newRoutine}
        onChange={(e) => setNewRoutine(e.target.value)}
        placeholder="새로운 루틴을 입력하세요"
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button
        onClick={handleAddRoutine}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        추가
      </button>
      <ul className="mt-4">
        {routines.map((routine, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{routine}</span>
            <button
              onClick={() => handleRemoveRoutine(index)}
              className="text-red-500 hover:text-red-700"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
