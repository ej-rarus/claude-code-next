'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function ChromePage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fab fa-chrome" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          Chrome 연동
        </h2>
        <p>Claude가 브라우저를 직접 조작해서 웹앱을 테스트하고 디버깅해요.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Chrome 연동이란?
        </h3>
        <p className="description">
          <strong>Claude in Chrome</strong> 확장 프로그램을 설치하면, Claude Code가 <strong>Chrome 브라우저를 직접 제어</strong>할 수 있어요.
          코드를 수정하고 → 브라우저에서 바로 확인하고 → 문제를 찾아 수정하는 것까지 한 번에!
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-bug"></i></div>
            <div className="feature-content">
              <h4>라이브 디버깅</h4>
              <p>콘솔 에러를 읽고, DOM 상태를 확인하고, 코드를 바로 수정해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-paint-brush"></i></div>
            <div className="feature-content">
              <h4>디자인 검증</h4>
              <p>Figma 목업대로 만들고, 브라우저에서 비교 확인해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-clipboard-check"></i></div>
            <div className="feature-content">
              <h4>웹앱 테스트</h4>
              <p>폼 검증, 시각적 회귀 테스트, 사용자 플로우 확인이 가능해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-sign-in-alt"></i></div>
            <div className="feature-content">
              <h4>로그인 상태 공유</h4>
              <p>내가 로그인한 사이트에 Claude도 접근할 수 있어요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 필요 조건 */}
      <div className="card">
        <h3>
          <i className="fas fa-check-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          필요 조건
        </h3>
        <ul>
          <li><strong>Google Chrome</strong> 또는 <strong>Microsoft Edge</strong> 브라우저</li>
          <li><strong>Claude in Chrome</strong> 확장 프로그램 (Chrome 웹 스토어에서 설치)</li>
          <li>Claude Code <strong>v2.0.73</strong> 이상</li>
          <li>Anthropic 직접 플랜 (Pro, Max, Teams, Enterprise)</li>
        </ul>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-info-circle"></i>
          <span>Brave, Arc 등 다른 Chromium 브라우저는 아직 지원되지 않아요. WSL도 미지원이에요.</span>
        </div>
      </div>

      {/* 사용법 */}
      <div className="card">
        <h3>
          <i className="fas fa-play-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          사용법
        </h3>
        <p><strong>1단계:</strong> Chrome 플래그로 Claude Code를 실행하세요.</p>
        <CommandBox command="claude --chrome" />
        <p style={{ marginTop: '12px' }}><strong>2단계:</strong> Claude에게 브라우저 작업을 요청하세요.</p>
        <CommandBox command='code.claude.com/docs에 가서 검색창에 "hooks"를 입력하고 결과를 알려줘' />
        <p style={{ marginTop: '12px' }}>이미 세션 중이라면 <code>/chrome</code> 명령으로 연결할 수도 있어요.</p>
      </div>

      {/* 활용 예시 */}
      <div className="card">
        <h3>
          <i className="fas fa-lightbulb" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          활용 예시
        </h3>

        <AccordionItem title="코드 수정 → 브라우저 확인 자동화" icon="fa-magic" defaultOpen>
          <p>Claude가 코드를 수정하면 자동으로 브라우저에서 결과를 확인하고, 문제가 있으면 다시 수정해요.</p>
          <CommandBox command="이 버튼의 색상을 파란색으로 바꾸고 브라우저에서 확인해줘" />
        </AccordionItem>

        <AccordionItem title="인증된 웹앱 조작" icon="fa-key">
          <p>내가 로그인한 상태를 공유하므로 Google Docs, Notion 등에 접근할 수 있어요.</p>
          <CommandBox command="내 Google Sheets에서 이번 달 매출 데이터를 가져와줘" />
        </AccordionItem>

        <AccordionItem title="GIF 녹화" icon="fa-video">
          <p>브라우저 작업을 GIF로 녹화해서 문서화하거나 공유할 수 있어요.</p>
        </AccordionItem>
      </div>

      <style jsx>{`
        .description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .comparison-table {
          overflow-x: auto;
          margin-bottom: 16px;
        }
        .comparison-table table {
          width: 100%;
          border-collapse: collapse;
        }
        .comparison-table th,
        .comparison-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--border-color);
        }
        .comparison-table th {
          background: var(--bg-primary);
          font-weight: 600;
          font-size: 0.9rem;
        }
        .comparison-table td {
          font-size: 0.9rem;
        }
        .comparison-table td code {
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.85rem;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        .feature-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: var(--bg-tertiary);
          border-radius: 8px;
        }
        .feature-icon {
          font-size: 1.5rem;
          color: var(--primary);
          min-width: 40px;
          text-align: center;
        }
        .feature-content h4 { margin: 0 0 4px; font-size: 0.95rem; }
        .feature-content p { margin: 0; font-size: 0.85rem; color: var(--text-muted); }
      `}</style>
    </>
  );
}
