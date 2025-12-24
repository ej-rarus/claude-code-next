import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Claude Code 가이드 - Mac에서 AI 코딩 어시스턴트 시작하기",
  description:
    "Mac에서 Claude Code를 설치하고 사용하는 방법을 단계별로 알려드립니다. Homebrew, iTerm2 설치부터 Claude Code 실행까지 초보자도 쉽게 따라할 수 있는 한국어 가이드입니다.",
  keywords:
    "Claude Code, 클로드 코드, AI 코딩, Mac 설치, Homebrew, iTerm2, Anthropic, AI 어시스턴트, 개발 도구, 터미널, 코딩 도우미",
  authors: [{ name: "LUKUKU" }],
  openGraph: {
    type: "website",
    url: "https://claude-code-guide-eight.vercel.app/",
    title: "Claude Code 가이드 - Mac에서 AI 코딩 어시스턴트 시작하기",
    description:
      "Mac에서 Claude Code를 설치하고 사용하는 방법을 단계별로 알려드립니다. 초보자도 쉽게 따라할 수 있는 한국어 가이드.",
    images: [
      {
        url: "https://claude-code-guide-eight.vercel.app/og-image.png",
      },
    ],
    locale: "ko_KR",
    siteName: "Claude Code Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code 가이드 - Mac에서 AI 코딩 어시스턴트 시작하기",
    description:
      "Mac에서 Claude Code를 설치하고 사용하는 방법을 단계별로 알려드립니다. 초보자도 쉽게 따라할 수 있는 한국어 가이드.",
    images: ["https://claude-code-guide-eight.vercel.app/og-image.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "Claude Code 설치 가이드",
              description:
                "Mac에서 Claude Code를 설치하고 사용하는 방법을 단계별로 알려드립니다.",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Homebrew 설치",
                  text: "Mac용 패키지 관리자 Homebrew를 설치합니다.",
                },
                {
                  "@type": "HowToStep",
                  name: "iTerm2 설치",
                  text: "더 나은 터미널 경험을 위해 iTerm2를 설치합니다.",
                },
                {
                  "@type": "HowToStep",
                  name: "Claude Code 설치",
                  text: "Homebrew를 사용하여 Claude Code를 설치하고 계정을 연결합니다.",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
