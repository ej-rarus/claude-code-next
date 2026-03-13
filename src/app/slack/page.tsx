'use client';

import { CommandBox } from '@/components';

export default function SlackPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fab fa-slack" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          Slack 연동
        </h2>
        <p>Slack에서 @Claude를 멘션하면 코딩 작업을 바로 시작해요.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Slack 연동이란?
        </h3>
        <p className="description">
          Slack 채널에서 <strong>@Claude</strong>를 멘션하고 코딩 작업을 설명하면,
          자동으로 <strong>Claude Code 웹 세션</strong>이 생성되어 작업을 처리해요.
          버그 리포트가 올라오면 바로 수정 작업을 시작할 수 있어요!
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-bug"></i></div>
            <div className="feature-content">
              <h4>버그 조사 & 수정</h4>
              <p>Slack에서 버그가 보고되면 바로 조사하고 수정해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-code"></i></div>
            <div className="feature-content">
              <h4>빠른 코드 수정</h4>
              <p>팀 피드백을 바탕으로 작은 기능을 구현하거나 리팩토링해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-comments"></i></div>
            <div className="feature-content">
              <h4>협업 디버깅</h4>
              <p>팀 대화의 맥락을 활용해서 더 정확하게 디버깅해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-tasks"></i></div>
            <div className="feature-content">
              <h4>병렬 작업</h4>
              <p>여러 작업을 동시에 시작하고 완료 알림을 받아요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 설정 */}
      <div className="card">
        <h3>
          <i className="fas fa-cog" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          설정 방법
        </h3>
        <ol className="step-list">
          <li><strong>Claude 앱 설치</strong>: Slack App Marketplace에서 Claude 앱을 워크스페이스에 추가</li>
          <li><strong>계정 연결</strong>: Slack의 Claude 앱 → App Home → Connect 클릭</li>
          <li><strong>Claude Code 웹 설정</strong>: claude.ai/code에서 GitHub 연결 및 레포 인증</li>
          <li><strong>라우팅 모드 선택</strong>: Code only 또는 Code + Chat 선택</li>
        </ol>
      </div>

      {/* 라우팅 모드 */}
      <div className="card">
        <h3>
          <i className="fas fa-route" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          라우팅 모드
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>모드</th>
                <th>동작</th>
                <th>추천</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Code only</strong></td>
                <td>모든 @멘션을 Claude Code 세션으로 보내요</td>
                <td>개발 전용 채널</td>
              </tr>
              <tr>
                <td><strong>Code + Chat</strong></td>
                <td>코딩 작업은 Claude Code, 일반 질문은 Chat으로 자동 분류</td>
                <td>범용 사용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 필요 조건 */}
      <div className="card">
        <h3>
          <i className="fas fa-check-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          필요 조건
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>요구사항</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Claude 플랜</td><td>Pro, Max, Teams, Enterprise</td></tr>
              <tr><td>Claude Code 웹</td><td>접근 권한 필요</td></tr>
              <tr><td>GitHub</td><td>레포지토리 1개 이상 인증</td></tr>
              <tr><td>Slack</td><td>Claude 앱과 계정 연결</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 터미널에서 설치 */}
      <div className="card">
        <h3>
          <i className="fas fa-terminal" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          터미널에서 설치
        </h3>
        <p>Claude Code 터미널에서도 Slack 앱을 설치할 수 있어요.</p>
        <CommandBox command="/install-slack-app" />
      </div>

      <style jsx>{`
        .step-list {
          padding-left: 20px;
        }
        .step-list li {
          margin-bottom: 10px;
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
