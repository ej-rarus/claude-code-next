'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function CodeWebPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-cloud" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          웹에서 Claude Code
        </h2>
        <p>브라우저에서 바로 Claude Code를 사용하세요. 설치 없이, 어디서든.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          웹 Claude Code란?
        </h3>
        <p className="description">
          <strong>claude.ai/code</strong>에서 바로 Claude Code를 실행할 수 있어요.
          로컬에 아무것도 설치할 필요 없이, 클라우드 서버에서 코드를 분석하고 수정해요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-question"></i>
            </div>
            <div className="feature-content">
              <h4>코드 질문</h4>
              <p>코드 구조나 기능 구현 방식에 대해 질문할 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-bug"></i>
            </div>
            <div className="feature-content">
              <h4>버그 수정</h4>
              <p>명확한 버그를 자동으로 찾아서 수정해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <div className="feature-content">
              <h4>병렬 작업</h4>
              <p>여러 작업을 동시에 실행할 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="feature-content">
              <h4>모바일 지원</h4>
              <p>iOS, Android 앱에서도 사용 가능해요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 시작하기 */}
      <div className="card">
        <h3>
          <i className="fas fa-play-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          시작하기
        </h3>
        <ol className="step-list">
          <li><strong>claude.ai/code</strong> 방문</li>
          <li>GitHub 계정 연결</li>
          <li>Claude GitHub 앱을 레포지토리에 설치</li>
          <li>기본 실행 환경 선택</li>
          <li>코딩 작업 제출!</li>
          <li>Diff 뷰에서 변경사항 확인 후 PR 생성</li>
        </ol>
      </div>

      {/* 터미널 ↔ 웹 이동 */}
      <div className="card">
        <h3>
          <i className="fas fa-exchange-alt" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          터미널 ↔ 웹 이동
        </h3>

        <AccordionItem title="터미널 → 웹으로 보내기" icon="fa-upload" defaultOpen>
          <p><code>--remote</code> 플래그로 웹 세션을 생성할 수 있어요.</p>
          <CommandBox command='claude --remote "로그인 버그 수정해줘"' />
          <p style={{ marginTop: '8px' }}>클라우드에서 실행되므로 로컬 작업을 계속할 수 있어요.</p>
        </AccordionItem>

        <AccordionItem title="웹 → 터미널로 가져오기" icon="fa-download">
          <p>웹에서 실행 중인 세션을 로컬 터미널로 가져올 수 있어요.</p>
          <CommandBox command="claude --teleport" />
          <p style={{ marginTop: '8px' }}>또는 세션 내에서 <code>/teleport</code> 명령을 사용하세요.</p>
        </AccordionItem>
      </div>

      {/* 활용 팁 */}
      <div className="card">
        <h3>
          <i className="fas fa-lightbulb" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          활용 팁
        </h3>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <span><strong>로컬에서 계획, 클라우드에서 실행</strong>: Plan 모드로 먼저 계획을 세우고, <code>--remote</code>로 자율 실행하세요.</span>
        </div>

        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <span><strong>병렬 작업</strong>: 각 <code>--remote</code> 명령은 독립 세션이에요. 여러 개를 동시에 실행하세요.</span>
        </div>

        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <span><strong>모바일 모니터링</strong>: iOS/Android Claude 앱에서 진행 상태를 확인하고 피드백을 줄 수 있어요.</span>
        </div>
      </div>

      {/* 사용 가능 플랜 */}
      <div className="card">
        <h3>
          <i className="fas fa-user-check" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          사용 가능 플랜
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>플랜</th>
                <th>사용 가능</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Pro</td><td><span className="badge success">가능</span></td></tr>
              <tr><td>Max</td><td><span className="badge success">가능</span></td></tr>
              <tr><td>Team</td><td><span className="badge success">가능</span></td></tr>
              <tr><td>Enterprise</td><td><span className="badge success">가능</span> (프리미엄 시트)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .step-list {
          padding-left: 20px;
        }
        .step-list li {
          margin-bottom: 8px;
          line-height: 1.6;
        }
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
