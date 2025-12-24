# Claude Code 가이드

Mac에서 Claude Code를 설치하고 사용하는 방법을 안내하는 한국어 가이드 웹사이트입니다.

**Live Site**: https://claude-code-guide-eight.vercel.app/

## 기술 스택

- **Framework**: Next.js 16.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Runtime**: React 19
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics & Speed Insights

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx           # 메인 페이지
│   ├── layout.tsx         # 루트 레이아웃 (SEO, 메타데이터)
│   ├── globals.css        # 전역 스타일
│   ├── install/           # 설치 가이드
│   │   ├── basic/         # 기본 설치
│   │   ├── step0/         # 시작하기 전에
│   │   ├── step1/         # Homebrew 설치
│   │   ├── step2/         # iTerm2 설치
│   │   └── step3/         # Claude Code 설치
│   ├── quickstart/        # 빠른 시작 가이드
│   ├── convert/           # 파일 변환 가이드
│   │   ├── pdf/
│   │   ├── ppt/
│   │   ├── image/
│   │   └── excel/
│   ├── docs/              # 문서 작업 가이드
│   │   ├── create/
│   │   ├── edit/
│   │   └── template/
│   ├── analysis/          # 문서 분석
│   ├── web/               # 웹 정보 수집
│   ├── automation/        # 자동화
│   ├── examples/          # 예시 모음
│   ├── tips/              # 팁 & 트릭
│   └── limits/            # 제한사항
└── components/
    ├── Sidebar.tsx        # 사이드바 네비게이션
    ├── Topbar.tsx         # 상단 바
    ├── SearchModal.tsx    # 검색 모달
    ├── HelpModal.tsx      # 도움말 모달
    ├── ShortcutsModal.tsx # 단축키 모달
    ├── ThemeProvider.tsx  # 다크/라이트 테마
    ├── ThemeToggle.tsx    # 테마 토글 버튼
    ├── CommandBox.tsx     # 명령어 박스
    ├── Accordion.tsx      # 아코디언 UI
    └── Toast.tsx          # 토스트 알림
```

## 주요 기능

- **설치 가이드**: Homebrew, iTerm2, Claude Code 단계별 설치 방법
- **파일 변환**: PDF, PPT, 이미지, Excel 파일을 마크다운으로 변환
- **문서 생성**: 회의록, 기획서, API 문서 등 자동 생성
- **문서 분석**: 요약, 비교, 핵심 내용 추출
- **웹 정보 수집**: 웹 페이지 크롤링 및 분석
- **자동화**: 일괄 처리, 패턴 기반 수정
- **다크/라이트 테마**: 시스템 설정에 따른 자동 전환

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버: http://localhost:3000

## 배포

Vercel에 자동 배포됩니다. `main` 브랜치에 push하면 자동으로 배포됩니다.

```bash
# Vercel CLI로 수동 배포
npx vercel --prod
```

## 라이선스

Private
