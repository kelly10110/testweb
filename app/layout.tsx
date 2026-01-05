import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "태아 보험 전문 상담 | 우리 아이 첫 보험",
  description: "전문 상담사가 맞춤형 태아 보험을 추천해드립니다. 무료 상담 신청하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
