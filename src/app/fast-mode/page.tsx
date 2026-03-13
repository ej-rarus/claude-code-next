'use client';

import { CommandBox } from '@/components';

export default function FastModePage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-bolt" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          Fast Mode
        </h2>
        <p>Opus 4.6의 응답 속도를 2.5배 빠르게! 빠른 반복 작업에 최적이에요.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Fast Mode란?
        </h3>
        <p className="description">
          Fast Mode는 <strong>같은 Opus 4.6 모델</strong>을 더 빠른 API 설정으로 실행하는 기능이에요.
          다른 모델이 아니라 <strong>동일한 품질</strong>을 유지하면서 <strong>2.5배 빠른 응답</strong>을 제공해요.
          대신 토큰당 비용이 더 높아요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-tachometer-alt"></i></div>
            <div className="feature-content">
              <h4>2.5배 빠른 응답</h4>
              <p>같은 모델, 같은 품질, 더 빠른 속도.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-toggle-on"></i></div>
            <div className="feature-content">
              <h4>간편 토글</h4>
              <p>/fast 명령으로 언제든 ON/OFF할 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-equals"></i></div>
            <div className="feature-content">
              <h4>동일한 모델</h4>
              <p>모델을 바꾸는 게 아니에요. Opus 4.6 그대로!</p>
            </div>
          </div>
        </div>
      </div>

      {/* 사용법 */}
      <div className="card">
        <h3>
          <i className="fas fa-play-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          사용법
        </h3>
        <p>Claude Code에서 <code>/fast</code>를 입력하고 Tab을 누르면 토글돼요.</p>
        <CommandBox command="/fast" />
        <ul style={{ marginTop: '12px' }}>
          <li>활성화되면 프롬프트 옆에 <strong>↯</strong> 아이콘이 표시돼요</li>
          <li>다시 <code>/fast</code>를 입력하면 비활성화돼요</li>
          <li>다른 모델이면 자동으로 Opus 4.6로 전환돼요</li>
          <li>비활성화해도 Opus 4.6에 유지돼요 (이전 모델로 돌아가지 않음)</li>
        </ul>
        <p style={{ marginTop: '12px' }}>또는 설정 파일에서 활성화할 수도 있어요.</p>
        <CommandBox command={`// settings.json
{ "fastMode": true }`} />
      </div>

      {/* 비용 */}
      <div className="card">
        <h3>
          <i className="fas fa-dollar-sign" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          비용 비교
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>모드</th>
                <th>입력 (MTok)</th>
                <th>출력 (MTok)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fast Mode</strong> (200K 이하)</td>
                <td>$30</td>
                <td>$150</td>
              </tr>
              <tr>
                <td><strong>Fast Mode</strong> (200K 초과)</td>
                <td>$60</td>
                <td>$225</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <span>세션 시작부터 Fast Mode를 켜면 비용이 더 효율적이에요. 중간에 켜면 전체 컨텍스트에 Fast Mode 가격이 적용돼요.</span>
        </div>
      </div>

      {/* 언제 사용? */}
      <div className="card">
        <h3>
          <i className="fas fa-lightbulb" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          언제 사용하면 좋을까?
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Fast Mode 추천</th>
                <th>일반 모드 추천</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>빠른 코드 수정 반복</td><td>긴 자율 작업</td></tr>
              <tr><td>라이브 디버깅</td><td>배치 처리 / CI/CD</td></tr>
              <tr><td>마감이 급한 작업</td><td>비용이 중요한 작업</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Fast Mode vs Effort Level */}
      <div className="card">
        <h3>
          <i className="fas fa-sliders-h" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Fast Mode vs Effort Level
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>설정</th>
                <th>효과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fast Mode</strong></td>
                <td>같은 품질, 낮은 지연, 높은 비용</td>
              </tr>
              <tr>
                <td><strong>낮은 Effort Level</strong></td>
                <td>적은 사고 시간, 빠른 응답, 복잡한 작업에서 품질 저하 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '12px' }}>둘 다 함께 사용할 수도 있어요 — 간단한 작업에서 최대 속도를 원할 때!</p>
      </div>

      {/* 요구사항 */}
      <div className="card">
        <h3>
          <i className="fas fa-check-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          필요 조건
        </h3>
        <ul>
          <li><strong>Extra usage 활성화</strong> 필요 (Plan 기본 사용량과 별도 과금)</li>
          <li><strong>구독 플랜</strong>: Pro, Max, Teams, Enterprise</li>
          <li>Teams/Enterprise는 <strong>관리자가 먼저 활성화</strong>해야 해요</li>
          <li>Amazon Bedrock, Google Vertex, Azure Foundry에서는 <strong>사용 불가</strong></li>
        </ul>
      </div>

      {/* Rate Limit */}
      <div className="card">
        <h3>
          <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px', color: 'var(--warning)' }}></i>
          Rate Limit 동작
        </h3>
        <ul>
          <li>Fast Mode rate limit에 도달하면 자동으로 <strong>일반 Opus 4.6</strong>로 전환돼요</li>
          <li><strong>↯</strong> 아이콘이 회색으로 바뀌어요 (쿨다운 표시)</li>
          <li>쿨다운이 끝나면 <strong>자동으로 다시 활성화</strong>돼요</li>
          <li>수동으로 끄려면 <code>/fast</code>를 다시 입력하세요</li>
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
