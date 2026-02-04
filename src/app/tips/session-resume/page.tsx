'use client';

import { CommandBox } from '@/components';

export default function SessionResumePage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-history" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          세션 이어하기
        </h2>
        <p>이전 대화 컨텍스트를 불러와서 작업을 이어가는 방법을 알아봅니다.</p>
      </div>

      {/* 개요 */}
      <div className="info-card">
        <div className="info-icon">
          <i className="fas fa-lightbulb"></i>
        </div>
        <div className="info-content">
          <h4>왜 세션을 이어가야 하나요?</h4>
          <p>
            Claude Code는 대화 내용을 세션으로 저장합니다. 터미널을 닫거나 새 세션을 시작해도
            이전 작업 내용을 불러와서 이어갈 수 있어, 컨텍스트를 다시 설명할 필요가 없습니다.
          </p>
        </div>
      </div>

      {/* 방법 1: --resume */}
      <div className="method-section">
        <div className="method-header">
          <div className="method-number">1</div>
          <div className="method-title">
            <h3>--resume 플래그로 시작하기</h3>
            <span className="badge badge-success">가장 간편</span>
          </div>
        </div>
        <div className="method-content">
          <p>터미널에서 Claude Code를 시작할 때 <code>--resume</code> 플래그를 사용하면 가장 최근 세션을 자동으로 불러옵니다.</p>
          <CommandBox command="claude --resume" />
          <div className="tip-box">
            <i className="fas fa-info-circle"></i>
            <span>이 명령어는 마지막으로 작업했던 세션을 바로 이어서 시작합니다.</span>
          </div>
        </div>
      </div>

      {/* 방법 2: --continue */}
      <div className="method-section">
        <div className="method-header">
          <div className="method-number">2</div>
          <div className="method-title">
            <h3>--continue 플래그 사용하기</h3>
            <span className="badge badge-primary">단축 옵션</span>
          </div>
        </div>
        <div className="method-content">
          <p><code>--continue</code> 또는 줄여서 <code>-c</code> 플래그도 동일한 기능을 합니다.</p>
          <CommandBox command="claude --continue" />
          <CommandBox command="claude -c" />
        </div>
      </div>

      {/* 방법 3: /resume 명령어 */}
      <div className="method-section">
        <div className="method-header">
          <div className="method-number">3</div>
          <div className="method-title">
            <h3>/resume 명령어로 선택하기</h3>
            <span className="badge badge-warning">세션 선택 가능</span>
          </div>
        </div>
        <div className="method-content">
          <p>Claude Code 실행 중에 <code>/resume</code> 명령어를 입력하면 이전 세션 목록에서 원하는 세션을 선택할 수 있습니다.</p>
          <CommandBox command="/resume" />
          <div className="example-box">
            <div className="example-header">
              <i className="fas fa-terminal"></i>
              <span>실행 예시</span>
            </div>
            <pre className="example-output">{`> /resume

최근 세션 목록:
1. [2시간 전] PDF 변환 작업 - project-docs 폴더
2. [어제] 회의록 정리 - meeting-notes
3. [2일 전] API 문서 작성 - api-docs

번호를 선택하세요 (1-3):`}</pre>
          </div>
        </div>
      </div>

      {/* 방법 4: 특정 세션 ID로 불러오기 */}
      <div className="method-section">
        <div className="method-header">
          <div className="method-number">4</div>
          <div className="method-title">
            <h3>특정 세션 ID로 불러오기</h3>
            <span className="badge badge-secondary">고급</span>
          </div>
        </div>
        <div className="method-content">
          <p>특정 세션을 직접 지정하여 불러올 수도 있습니다.</p>
          <CommandBox command="claude --resume session_abc123" />
          <div className="tip-box">
            <i className="fas fa-lightbulb"></i>
            <span>세션 ID는 <code>/resume</code> 명령어 실행 시 목록에서 확인할 수 있습니다.</span>
          </div>
        </div>
      </div>

      {/* 유용한 팁 */}
      <div className="tips-section">
        <h3>
          <i className="fas fa-star" style={{ marginRight: '12px', color: 'var(--warning)' }}></i>
          유용한 팁
        </h3>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-card-icon">
              <i className="fas fa-folder"></i>
            </div>
            <div className="tip-card-content">
              <h4>폴더별 세션 관리</h4>
              <p>세션은 작업 폴더별로 관리됩니다. 같은 프로젝트 폴더에서 작업하면 관련 세션을 쉽게 찾을 수 있습니다.</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-card-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="tip-card-content">
              <h4>세션 유효 기간</h4>
              <p>세션은 일정 기간 동안 유지됩니다. 오래된 세션은 자동으로 정리될 수 있으니 중요한 작업은 결과를 파일로 저장해두세요.</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-card-icon">
              <i className="fas fa-memory"></i>
            </div>
            <div className="tip-card-content">
              <h4>컨텍스트 유지</h4>
              <p>세션을 이어가면 이전 대화에서 언급한 파일, 설정, 작업 내용을 Claude가 기억하고 있습니다.</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-card-icon">
              <i className="fas fa-redo"></i>
            </div>
            <div className="tip-card-content">
              <h4>새 세션 시작</h4>
              <p>완전히 새로운 작업을 시작하려면 플래그 없이 <code>claude</code>만 입력하면 됩니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 명령어 요약 */}
      <div className="summary-section">
        <h3>
          <i className="fas fa-list-ul" style={{ marginRight: '12px' }}></i>
          명령어 요약
        </h3>
        <table className="summary-table">
          <thead>
            <tr>
              <th>명령어</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>claude --resume</code></td>
              <td>가장 최근 세션 이어하기</td>
            </tr>
            <tr>
              <td><code>claude -c</code></td>
              <td>--continue의 단축형 (동일 기능)</td>
            </tr>
            <tr>
              <td><code>/resume</code></td>
              <td>세션 목록에서 선택하여 불러오기</td>
            </tr>
            <tr>
              <td><code>claude --resume [ID]</code></td>
              <td>특정 세션 ID로 불러오기</td>
            </tr>
            <tr>
              <td><code>claude</code></td>
              <td>새 세션 시작</td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
        }

        .section-header p {
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        .info-card {
          display: flex;
          gap: 20px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 40px;
        }

        .info-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-icon i {
          font-size: 1.3rem;
          color: white;
        }

        .info-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .info-content p {
          color: var(--text-muted);
          line-height: 1.6;
        }

        .method-section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }

        .method-section:hover {
          border-color: var(--primary);
        }

        .method-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .method-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .method-title {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .method-title h3 {
          font-size: 1.2rem;
          font-weight: 600;
        }

        .method-content p {
          color: var(--text-muted);
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .method-content code {
          background: var(--bg-tertiary);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.9rem;
          color: var(--accent);
        }

        .tip-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 8px;
          padding: 12px 16px;
          margin-top: 16px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .tip-box i {
          color: var(--primary);
          flex-shrink: 0;
        }

        .example-box {
          background: var(--bg-tertiary);
          border-radius: 12px;
          overflow: hidden;
          margin-top: 16px;
        }

        .example-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .example-output {
          padding: 16px;
          margin: 0;
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-primary);
          white-space: pre-wrap;
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
        }

        .tips-section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .tips-section h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .tip-card {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: var(--bg-tertiary);
          border-radius: 12px;
        }

        .tip-card-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tip-card-icon i {
          color: var(--primary);
        }

        .tip-card-content h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .tip-card-content p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .tip-card-content code {
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.8rem;
        }

        .summary-section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
        }

        .summary-section h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }

        .summary-table {
          width: 100%;
          border-collapse: collapse;
        }

        .summary-table th,
        .summary-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--border-color);
        }

        .summary-table th {
          font-weight: 600;
          color: var(--text-muted);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .summary-table td code {
          background: var(--bg-tertiary);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.9rem;
          color: var(--accent);
        }

        .summary-table tr:last-child td {
          border-bottom: none;
        }

        .badge {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .badge-success {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .badge-primary {
          background: rgba(99, 102, 241, 0.2);
          color: var(--primary);
        }

        .badge-warning {
          background: rgba(245, 158, 11, 0.2);
          color: #f59e0b;
        }

        .badge-secondary {
          background: rgba(156, 163, 175, 0.2);
          color: #9ca3af;
        }

        @media (max-width: 768px) {
          .tips-grid {
            grid-template-columns: 1fr;
          }

          .method-title {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .info-card {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
