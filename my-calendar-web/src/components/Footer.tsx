import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 py-4 text-center border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm m-0">
          &copy; {currentYear} 나의 개인 일정 관리. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
