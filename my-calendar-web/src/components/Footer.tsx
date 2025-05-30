// src/components/Footer.tsx

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // 현재 연도를 동적으로 가져옵니다.

  return (
    <footer className="app-footer">
      <div className="container">
        <p>&copy; {currentYear} 나의 개인 일정 관리. All rights reserved.</p>
        {/* <nav>
          <a href="/privacy">개인정보처리방침</a>
          <a href="/terms">이용약관</a>
        </nav> */}
      </div>
    </footer>
  );
}
