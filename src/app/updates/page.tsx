'use client';

import { CommandBox } from '@/components';

interface UpdateEntry {
  date: string;
  version: string;
  highlights: string[];
  tag?: 'major' | 'minor' | 'patch';
}

const updates: UpdateEntry[] = [
  {
    date: '2026-03-09',
    version: 'v2.5.0',
    tag: 'major',
    highlights: [
      '플러그인 시스템 정식 출시 (Skills + MCP + Hooks 패키징)',
      '에이전트 팀 (실험적) — 여러 Claude 세션이 협력하는 병렬 작업',
      '네이티브 설치 방식 권장 (curl 한 줄, npm 더 이상 불필요)',
      'CLAUDE.md @경로 임포트, .claude/rules/ 지원',
    ],
  },
  {
    date: '2026-02-20',
    version: 'v2.4.0',
    tag: 'major',
    highlights: [
      'Desktop 앱 출시 (macOS, Windows) — 터미널 없이 사용',
      'Web 버전 (claude.ai/code) — 브라우저에서 바로 사용',
      'Remote Control API — 외부 앱에서 Claude Code 제어',
      'Slack 연동 — Slack에서 Claude Code 세션 실행',
      'Chrome 확장 — 웹페이지 컨텍스트를 Claude Code에 전달',
    ],
  },
  {
    date: '2026-01-30',
    version: 'v2.3.0',
    tag: 'major',
    highlights: [
      'Fast Mode — 같은 Opus 모델로 2.5배 빠른 출력',
      '샌드박싱 — 파일/네트워크 격리로 안전한 실행',
      '체크포인트 — 자동 추적, Esc×2로 되돌리기',
      '스케줄 작업 (/loop) — 반복 실행 및 일회성 알림',
    ],
  },
  {
    date: '2025-12-19',
    version: 'v2.2.0',
    tag: 'minor',
    highlights: [
      '서브에이전트 개선 — 커스텀 에이전트 정의, 전용 Skills',
      'Hook 타입 확장 — command, http, prompt, agent 4종',
      'MCP Tool Search — 도구 자동 검색 모드',
      'MCP HTTP 전송 (SSE 대체, OAuth 인증)',
      'Skills 번들 제공 — /simplify, /batch, /debug, /loop, /claude-api',
    ],
  },
  {
    date: '2025-05-22',
    version: 'v2.1.2',
    tag: 'minor',
    highlights: [
      'Sonnet 4.6 모델 추가',
      'Windows ARM64 지원',
      '로그인 방식 개선',
      '여러 작업 동시 처리 안정화',
      'PDF 읽을 때 페이지 범위 지정 가능',
    ],
  },
  {
    date: '2025-05-15',
    version: 'v2.1.1',
    tag: 'patch',
    highlights: [
      '하위 작업 처리 방식 개선',
      '백그라운드 작업 안정화',
      'MCP 서버 연결 개선',
    ],
  },
  {
    date: '2025-05-08',
    version: 'v2.1.0',
    tag: 'major',
    highlights: [
      '단축 명령(Skills) 기능 정식 출시',
      '나만의 /명령어 만들기 지원',
      '여러 작업 동시 처리 기능 추가',
      '백그라운드 작업 실행 지원',
    ],
  },
  {
    date: '2025-04-24',
    version: 'v2.0.9',
    tag: 'patch',
    highlights: [
      '계획 세우기 모드 개선',
      '질문 시 미리보기 기능 추가',
      '검색 키보드 조작 개선',
    ],
  },
  {
    date: '2025-04-17',
    version: 'v2.0.8',
    tag: 'patch',
    highlights: [
      'Opus 4.5 모델 지원',
      'Haiku 4.5 모델 지원',
      '대화 내용 자동 요약 기능 개선',
    ],
  },
  {
    date: '2025-04-10',
    version: 'v2.0.7',
    tag: 'minor',
    highlights: [
      'VS Code에서 바로 사용하기 강화',
      'JetBrains 에디터 지원 추가',
      '이벤트 훅(Hooks) 기능 추가',
    ],
  },
  {
    date: '2025-04-03',
    version: 'v2.0.6',
    tag: 'patch',
    highlights: [
      '웹 검색 기능 개선',
      '웹 페이지 읽기 속도 향상',
      '주피터 노트북 읽기/편집 지원',
    ],
  },
  {
    date: '2025-03-27',
    version: 'v2.0.5',
    tag: 'patch',
    highlights: [
      '커밋 메시지 자동 작성 개선',
      'PR 만들기 기능 안정화',
      '파일 수정 정확도 향상',
    ],
  },
  {
    date: '2025-03-20',
    version: 'v2.0.3',
    tag: 'minor',
    highlights: [
      'MCP 플러그인 시스템 지원',
      '브라우저 자동 조작 도구 추가',
      'Figma 디자인 연동',
    ],
  },
  {
    date: '2025-03-13',
    version: 'v2.0.2',
    tag: 'patch',
    highlights: [
      '계획 세우기 모드 도입',
      '계획 → 실행 워크플로우',
      '할 일 목록 관리 기능',
    ],
  },
  {
    date: '2025-03-06',
    version: 'v2.0.1',
    tag: 'patch',
    highlights: [
      'CLAUDE.md 설정 파일 지원',
      '자동 메모리 기능 (대화 내용 기억)',
      '이전 대화 이어하기 개선',
    ],
  },
  {
    date: '2025-02-27',
    version: 'v2.0.0',
    tag: 'major',
    highlights: [
      'Claude Code v2 정식 출시',
      'VS Code에서 바로 사용하기 지원',
      '파일 읽기/수정/만들기 도구 추가',
      '안전한 명령어 실행 모드 도입',
    ],
  },
];

function getTagLabel(tag?: string) {
  switch (tag) {
    case 'major': return '주요';
    case 'minor': return '기능';
    case 'patch': return '패치';
    default: return '패치';
  }
}

function getTagClass(tag?: string) {
  switch (tag) {
    case 'major': return 'tag-major';
    case 'minor': return 'tag-minor';
    case 'patch': return 'tag-patch';
    default: return 'tag-patch';
  }
}

export default function UpdatesPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-bullhorn" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          업데이트 내역
        </h2>
        <p>Claude Code에 새로 추가된 기능과 바뀐 점을 확인해보세요.</p>
      </div>

      {/* 현재 버전 */}
      <div className="card current-version-card">
        <div className="current-version-header">
          <span className="version-badge">v2.5.0</span>
          <span className="version-date">2026년 3월 기준</span>
        </div>
        <p className="current-version-desc">내 버전이 뭔지 확인하려면 터미널에서 이렇게 입력하세요.</p>
        <CommandBox command="claude --version" />
      </div>

      {/* 타임라인 */}
      <h3 className="sub-title">
        <i className="fas fa-clock-rotate-left"></i>
        주요 업데이트 타임라인
      </h3>

      <div className="timeline">
        {updates.map((entry, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <div className={`timeline-dot ${entry.tag === 'major' ? 'dot-major' : ''}`}></div>
              {index < updates.length - 1 && <div className="timeline-line"></div>}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="timeline-version">{entry.version}</span>
                <span className={`timeline-tag ${getTagClass(entry.tag)}`}>{getTagLabel(entry.tag)}</span>
                <span className="timeline-date">{entry.date}</span>
              </div>
              <ul className="timeline-list">
                {entry.highlights.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 업데이트 방법 */}
      <h3 className="sub-title" style={{ marginTop: '48px' }}>
        <i className="fas fa-download"></i>
        업데이트 방법
      </h3>

      <div className="card">
        <p style={{ marginBottom: '12px', color: 'var(--text-muted)' }}>
          최신 버전으로 업데이트하려면 터미널에서 이렇게 입력하세요.
        </p>
        <CommandBox command="claude update" />
        <div className="tip-box" style={{ marginTop: '16px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>팁:</strong> 네이티브 설치(curl)는 <span style={{ fontWeight: 600 }}>자동 업데이트</span>돼요. Homebrew는 <code>brew upgrade claude-code</code>, WinGet은 <code>winget upgrade Anthropic.ClaudeCode</code>로 수동 업데이트하세요.
          </div>
        </div>
      </div>

      {/* 공식 소스 링크 */}
      <h3 className="sub-title" style={{ marginTop: '48px' }}>
        <i className="fas fa-link"></i>
        공식 소스
      </h3>

      <div className="links-grid">
        <a href="https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer" className="link-box">
          <i className="fab fa-github"></i>
          <div>
            <strong>CHANGELOG</strong>
            <span>전체 변경 이력 (GitHub)</span>
          </div>
          <i className="fas fa-external-link-alt"></i>
        </a>
        <a href="https://github.com/anthropics/claude-code/releases" target="_blank" rel="noopener noreferrer" className="link-box">
          <i className="fab fa-github"></i>
          <div>
            <strong>Releases</strong>
            <span>릴리즈 노트 (GitHub)</span>
          </div>
          <i className="fas fa-external-link-alt"></i>
        </a>
        <a href="https://docs.anthropic.com/en/docs/about-claude/models" target="_blank" rel="noopener noreferrer" className="link-box">
          <i className="fas fa-book"></i>
          <div>
            <strong>API Release Notes</strong>
            <span>모델 및 API 변경사항</span>
          </div>
          <i className="fas fa-external-link-alt"></i>
        </a>
        <a href="https://www.anthropic.com/news" target="_blank" rel="noopener noreferrer" className="link-box">
          <i className="fas fa-newspaper"></i>
          <div>
            <strong>Anthropic News</strong>
            <span>공식 뉴스 및 블로그</span>
          </div>
          <i className="fas fa-external-link-alt"></i>
        </a>
      </div>

      <style jsx>{`
        .section-header { margin-bottom: 40px; }
        .section-header h2 { font-size: 2rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; }
        .section-header p { color: var(--text-muted); font-size: 1.1rem; }

        .card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
        }

        .current-version-card {
          margin-bottom: 40px;
        }

        .current-version-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .version-badge {
          background: var(--primary);
          color: white;
          padding: 4px 14px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .version-date {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .current-version-desc {
          color: var(--text-muted);
          margin-bottom: 16px;
          font-size: 0.95rem;
        }

        .sub-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sub-title i {
          color: var(--primary);
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 0;
        }

        .timeline-item {
          display: flex;
          gap: 20px;
          position: relative;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: 20px;
        }

        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--border-color);
          border: 2px solid var(--bg-primary);
          box-shadow: 0 0 0 2px var(--border-color);
          flex-shrink: 0;
          margin-top: 6px;
        }

        .timeline-dot.dot-major {
          background: var(--primary);
          box-shadow: 0 0 0 2px var(--primary);
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          background: var(--border-color);
          margin: 4px 0;
        }

        .timeline-content {
          flex: 1;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px 20px;
          margin-bottom: 16px;
        }

        .timeline-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .timeline-version {
          font-weight: 700;
          font-size: 1.05rem;
        }

        .timeline-tag {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 10px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .tag-major {
          background: rgba(249, 115, 22, 0.15);
          color: var(--primary);
        }

        .tag-minor {
          background: rgba(16, 185, 129, 0.15);
          color: var(--success);
        }

        .tag-patch {
          background: rgba(156, 163, 175, 0.15);
          color: var(--text-muted);
        }

        .timeline-date {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-left: auto;
        }

        .timeline-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .timeline-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 4px 0;
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .timeline-list li i {
          color: var(--success);
          font-size: 0.7rem;
          margin-top: 5px;
          flex-shrink: 0;
        }

        /* Tip box */
        .tip-box {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px 16px;
          background: rgba(249, 115, 22, 0.08);
          border: 1px solid rgba(249, 115, 22, 0.2);
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .tip-box i {
          color: var(--primary);
          margin-top: 2px;
        }

        .tip-box code {
          background: var(--bg-tertiary);
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 0.85rem;
        }

        /* Links grid */
        .links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .link-box {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          text-decoration: none;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .link-box:hover {
          border-color: var(--primary);
          transform: translateY(-1px);
        }

        .link-box > i:first-child {
          font-size: 1.4rem;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .link-box div {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .link-box strong {
          font-size: 0.95rem;
        }

        .link-box span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .link-box > i:last-child {
          font-size: 0.75rem;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .links-grid {
            grid-template-columns: 1fr;
          }

          .timeline-date {
            margin-left: 0;
          }

          .timeline-header {
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
}
