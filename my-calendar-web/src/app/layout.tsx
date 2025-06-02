// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // 전역 스타일시트 임포트
import Header from "@/components/Header"; // Header 컴포너트 임포트
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "나의 개인 일정 관리",
  description: "Next.js로 만드는 개인 일정 관리 웹 애플리케이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className + " bg-gray-50 text-gray-900"}>
        <div className="flex flex-col min-h-screen">
          {/* 전체 레이아웃을 위한 flex 컨테이너 */}
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            {/* 메인 콘텐츠 영역이 유연하게 확장되도록 */}
            {children}
          </main>
          <Footer /> {/* Footer 컴포넌트 추가 */}
        </div>
      </body>
    </html>
  );
}
