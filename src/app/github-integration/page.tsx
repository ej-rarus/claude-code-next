'use client';

import { CommandBox, AccordionItem, OSTabs } from '@/components';

export default function GitHubIntegrationPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fab fa-github" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          GitHub 연동
        </h2>
        <p>gh CLI와 Claude Code를 조합하여 GitHub 워크플로우를 자동화하세요.</p>
      </div>

      {/* 개요 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          개요
        </h3>
        <p className="description">
          Claude Code는 <strong>GitHub CLI (gh)</strong>와 함께 사용하면
          PR 생성, 이슈 관리, 코드 리뷰 등 GitHub 작업을 자연어로 처리할 수 있습니다.
          복잡한 명령어를 외울 필요 없이 Claude에게 말로 설명하면 됩니다.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-code-branch"></i>
            </div>
            <div className="feature-content">
              <h4>PR 자동 생성</h4>
              <p>변경사항을 분석하여 PR 제목과 설명을 자동 작성합니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-tasks"></i>
            </div>
            <div className="feature-content">
              <h4>이슈 관리</h4>
              <p>이슈를 읽고, 코멘트를 달고, 라벨을 관리합니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-search"></i>
            </div>
            <div className="feature-content">
              <h4>코드 리뷰</h4>
              <p>PR의 변경사항을 분석하고 리뷰 의견을 제안합니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-sync-alt"></i>
            </div>
            <div className="feature-content">
              <h4>워크플로우 자동화</h4>
              <p>이슈 → 브랜치 → 구현 → PR까지 한번에 진행합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* gh CLI 설치 */}
      <div className="card">
        <h3>
          <i className="fas fa-download" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          gh CLI 설치
        </h3>
        <p className="description">
          GitHub CLI가 설치되어 있어야 합니다. 아래 명령어로 설치하세요.
        </p>

        <OSTabs>
          {{
            mac: (
              <div>
                <CommandBox command="brew install gh" />
              </div>
            ),
            windows: (
              <div>
                <CommandBox command="winget install GitHub.cli" />
              </div>
            ),
          }}
        </OSTabs>

        <p className="description" style={{ marginTop: '16px', marginBottom: '0' }}>
          설치 후 GitHub 계정으로 로그인합니다.
        </p>
        <CommandBox command="gh auth login" />
        <p className="note">브라우저가 열리면 GitHub에 로그인하고 권한을 승인하세요.</p>
      </div>

      {/* PR 생성 자동화 */}
      <div className="card">
        <h3>
          <i className="fas fa-code-branch" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          PR 생성 자동화
        </h3>
        <p className="description">
          Claude에게 PR 생성을 요청하면 변경사항을 분석하여 자동으로 PR을 만들어줍니다.
        </p>

        <AccordionItem title="자연어로 PR 생성" defaultOpen>
          <p>Claude Code에서 다음과 같이 요청합니다.</p>
          <div className="code-block">
            <div className="code-header">
              <span>Claude Code 프롬프트</span>
            </div>
            <pre>{`현재 변경사항으로 PR을 만들어줘.
제목은 한국어로, 설명에 변경 내용을 정리해줘.`}</pre>
          </div>
          <p className="note">Claude가 <code>gh pr create</code>를 실행하여 PR을 생성합니다.</p>
        </AccordionItem>

        <AccordionItem title="직접 명령어 사용">
          <p><code>gh</code> 명령어를 직접 사용할 수도 있습니다.</p>
          <CommandBox command="gh pr create --title '로그인 기능 추가' --body '## 변경사항\n- 이메일 로그인 구현\n- 세션 관리 추가'" />
          <CommandBox command="gh pr list" />
          <CommandBox command="gh pr view 42" />
        </AccordionItem>
      </div>

      {/* 이슈 관리 */}
      <div className="card">
        <h3>
          <i className="fas fa-tasks" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          이슈 관리
        </h3>

        <AccordionItem title="이슈 확인" defaultOpen>
          <p>Claude에게 이슈 목록을 확인하거나 특정 이슈의 내용을 물어볼 수 있습니다.</p>
          <div className="code-block">
            <div className="code-header">
              <span>Claude Code 프롬프트</span>
            </div>
            <pre>{`열린 이슈 목록을 보여줘
이슈 #42의 내용을 요약해줘`}</pre>
          </div>
        </AccordionItem>

        <AccordionItem title="이슈에 코멘트 달기">
          <p>분석 결과나 진행 상황을 이슈에 댓글로 남길 수 있습니다.</p>
          <CommandBox command="gh issue comment 42 --body '분석 결과: API 응답 시간이 원인입니다.'" />
        </AccordionItem>
      </div>

      {/* 코드 리뷰 */}
      <div className="card">
        <h3>
          <i className="fas fa-search" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          코드 리뷰 자동화
        </h3>
        <p className="description">
          PR의 변경사항을 Claude가 분석하고 리뷰 의견을 제안합니다.
        </p>

        <div className="code-block">
          <div className="code-header">
            <span>Claude Code 프롬프트</span>
          </div>
          <pre>{`PR #42의 변경사항을 리뷰해줘.
코드 품질, 버그 가능성, 개선점을 분석해줘.`}</pre>
        </div>

        <p className="description" style={{ marginTop: '16px', marginBottom: '16px' }}>
          Claude가 확인하는 항목:
        </p>
        <div className="checklist">
          <div className="checklist-item"><i className="fas fa-check"></i><span>코드 스타일 일관성</span></div>
          <div className="checklist-item"><i className="fas fa-check"></i><span>잠재적 버그 및 에러 처리</span></div>
          <div className="checklist-item"><i className="fas fa-check"></i><span>보안 취약점</span></div>
          <div className="checklist-item"><i className="fas fa-check"></i><span>성능 이슈</span></div>
          <div className="checklist-item"><i className="fas fa-check"></i><span>테스트 커버리지</span></div>
        </div>
      </div>

      {/* 실전 워크플로우 */}
      <div className="card">
        <h3>
          <i className="fas fa-route" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          실전 워크플로우
        </h3>
        <p className="description">
          이슈 확인부터 PR 생성까지 전체 흐름을 Claude Code에서 처리하는 예시입니다.
        </p>

        <div className="workflow">
          <div className="workflow-step">
            <div className="workflow-num">1</div>
            <div className="workflow-content">
              <h4>이슈 확인</h4>
              <div className="code-block">
                <pre>{`이슈 #42의 내용을 읽고 요약해줘`}</pre>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="workflow-num">2</div>
            <div className="workflow-content">
              <h4>브랜치 생성</h4>
              <div className="code-block">
                <pre>{`이슈 #42를 위한 feature 브랜치를 만들어줘`}</pre>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="workflow-num">3</div>
            <div className="workflow-content">
              <h4>구현</h4>
              <div className="code-block">
                <pre>{`이슈 #42에서 요청한 기능을 구현해줘`}</pre>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="workflow-num">4</div>
            <div className="workflow-content">
              <h4>PR 생성</h4>
              <div className="code-block">
                <pre>{`변경사항을 커밋하고 PR을 만들어줘.
이슈 #42를 참조해줘.`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 팁 */}
      <div className="card">
        <h3>
          <i className="fas fa-star" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          팁
        </h3>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>Skills와 함께 사용:</strong> <code>/commit</code>이나 <code>/review-pr</code> 같은
            Skills를 만들어 두면 GitHub 작업을 더 빠르게 처리할 수 있습니다.
          </div>
        </div>

        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>CLAUDE.md에 규칙 추가:</strong> PR 제목 형식, 커밋 메시지 스타일 등을
            CLAUDE.md에 정의해두면 일관된 GitHub 작업이 가능합니다.
          </div>
        </div>

        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>gh 인증 확인:</strong> <code>gh auth status</code>로 로그인 상태를 확인하세요.
            인증이 만료되면 <code>gh auth login</code>으로 다시 로그인합니다.
          </div>
        </div>
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
          margin-bottom: 24px;
        }
        .card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }

        .description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }

        .feature-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: var(--bg-primary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary);
          color: white;
          border-radius: 10px;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .feature-content h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .feature-content p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
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

        .tip-box {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: rgba(249, 115, 22, 0.1);
          border-radius: 12px;
          border-left: 4px solid var(--primary);
          margin-top: 16px;
        }

        .tip-box i {
          color: var(--primary);
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tip-box div {
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .note {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 8px;
        }

        .note code {
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.85rem;
        }

        .code-block {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow-x: auto;
          margin: 12px 0;
        }

        .code-header {
          padding: 8px 16px;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
        }

        .code-block pre {
          padding: 16px;
          margin: 0;
          font-size: 0.85rem;
          font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
          line-height: 1.6;
        }

        .checklist {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .checklist-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
        }

        .checklist-item i {
          color: #22c55e;
          font-size: 0.85rem;
        }

        .workflow {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .workflow-step {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .workflow-num {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          font-size: 0.9rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .workflow-content {
          flex: 1;
        }

        .workflow-content h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .workflow-content .code-block {
          margin: 0;
        }
      `}</style>
    </>
  );
}
