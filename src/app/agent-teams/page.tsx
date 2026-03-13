'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function AgentTeamsPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-users" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          Agent Teams
        </h2>
        <p>여러 Claude Code 인스턴스가 팀으로 협업해서 복잡한 작업을 처리해요.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Agent Teams란?
        </h3>
        <p className="description">
          <strong>Agent Teams</strong>는 여러 Claude Code 인스턴스를 팀으로 구성해서 협업하는 기능이에요.
          팀 리더가 작업을 분배하고, 팀원들이 <strong>독립적으로 작업</strong>하면서
          서로 <strong>직접 메시지</strong>를 주고받을 수 있어요.
        </p>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-flask"></i>
          <span><strong>실험적 기능</strong>: 기본 비활성화. 설정에서 활성화해야 사용할 수 있어요.</span>
        </div>

        <div className="feature-grid" style={{ marginTop: '16px' }}>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-project-diagram"></i></div>
            <div className="feature-content">
              <h4>병렬 작업</h4>
              <p>여러 팀원이 각각 다른 모듈을 동시에 작업해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-comments"></i></div>
            <div className="feature-content">
              <h4>직접 소통</h4>
              <p>팀원 간 직접 메시지를 주고받을 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-tasks"></i></div>
            <div className="feature-content">
              <h4>공유 태스크 리스트</h4>
              <p>모든 팀원이 작업 상태를 공유해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-user-tie"></i></div>
            <div className="feature-content">
              <h4>팀 리더</h4>
              <p>메인 세션이 작업을 조율하고 결과를 종합해요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 서브에이전트와 비교 */}
      <div className="card">
        <h3>
          <i className="fas fa-balance-scale" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          서브에이전트 vs Agent Teams
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>서브에이전트</th>
                <th>Agent Teams</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>컨텍스트</strong></td><td>결과만 메인에 반환</td><td>완전 독립</td></tr>
              <tr><td><strong>소통</strong></td><td>메인 에이전트에만 보고</td><td>팀원끼리 직접 소통</td></tr>
              <tr><td><strong>조율</strong></td><td>메인이 모든 작업 관리</td><td>공유 태스크 리스트로 자율 조율</td></tr>
              <tr><td><strong>적합한 상황</strong></td><td>결과만 필요한 집중 작업</td><td>토론과 협업이 필요한 복잡한 작업</td></tr>
              <tr><td><strong>토큰 비용</strong></td><td>낮음</td><td>높음 (각 팀원이 별도 인스턴스)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 활성화 */}
      <div className="card">
        <h3>
          <i className="fas fa-toggle-on" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          활성화 방법
        </h3>
        <p><code>settings.json</code>에 환경 변수를 추가하세요.</p>
        <CommandBox command={`{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}`} />
      </div>

      {/* 사용법 */}
      <div className="card">
        <h3>
          <i className="fas fa-play-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          사용법
        </h3>

        <AccordionItem title="팀 생성" icon="fa-plus-circle" defaultOpen>
          <p>Claude에게 팀을 만들고 작업 구조를 설명하세요.</p>
          <CommandBox command="에이전트 팀을 만들어줘. UX 담당 1명, 기술 아키텍처 담당 1명, 테스트 담당 1명으로 구성해줘." />
        </AccordionItem>

        <AccordionItem title="팀원과 대화" icon="fa-comment-dots">
          <ul>
            <li><strong>In-process 모드</strong>: Shift+Down으로 팀원 전환, 입력 후 Enter</li>
            <li><strong>Split-pane 모드</strong>: tmux/iTerm2 패널 클릭</li>
            <li><strong>Ctrl+T</strong>: 태스크 리스트 확인</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="디스플레이 모드 선택" icon="fa-columns">
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>모드</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>In-process</strong></td><td>모든 팀원이 메인 터미널에서 실행 (Shift+Down 전환)</td></tr>
                <tr><td><strong>Split panes</strong></td><td>각 팀원이 별도 패널 (tmux/iTerm2 필요)</td></tr>
              </tbody>
            </table>
          </div>
        </AccordionItem>
      </div>

      {/* 활용 예시 */}
      <div className="card">
        <h3>
          <i className="fas fa-lightbulb" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          활용 예시
        </h3>

        <div className="tip-box">
          <i className="fas fa-search"></i>
          <span><strong>병렬 코드 리뷰</strong>: 보안, 성능, 테스트 커버리지를 각각 다른 팀원이 동시에 검토</span>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-flask"></i>
          <span><strong>경쟁 가설 디버깅</strong>: 5명의 팀원이 각각 다른 가설을 테스트하고 서로 토론</span>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-layer-group"></i>
          <span><strong>크로스 레이어</strong>: 프론트엔드, 백엔드, 테스트를 각각 담당하는 팀원이 동시에 작업</span>
        </div>
      </div>

      {/* 모범 사례 */}
      <div className="card">
        <h3>
          <i className="fas fa-check-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          모범 사례
        </h3>
        <ul>
          <li>팀원에게 <strong>충분한 컨텍스트</strong>를 제공하세요</li>
          <li><strong>3~5명</strong>으로 시작하세요</li>
          <li>팀원당 <strong>5~6개 작업</strong>이 적절해요</li>
          <li>팀원들이 <strong>서로 다른 파일</strong>을 작업하도록 분배하세요</li>
          <li>리서치와 리뷰부터 시작하고, 그 다음 구현을 맡기세요</li>
          <li>종료 전 <strong>팀 리더로 cleanup</strong>하세요</li>
        </ul>
      </div>

      {/* 제한사항 */}
      <div className="card">
        <h3>
          <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px', color: 'var(--warning)' }}></i>
          제한사항
        </h3>
        <ul>
          <li>세션당 <strong>하나의 팀</strong>만 가능</li>
          <li>In-process 팀원은 세션 재개 불가</li>
          <li>중첩 팀 불가 (팀 안에 팀)</li>
          <li>팀 리더는 변경 불가</li>
          <li>Split panes는 tmux 또는 iTerm2 필요</li>
          <li>토큰 사용량이 단일 세션보다 <strong>훨씬 높아요</strong></li>
        </ul>
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
