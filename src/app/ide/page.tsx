'use client';

import { CommandBox, AccordionItem, OSTabs } from '@/components';

export default function IdePage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-laptop-code" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          IDE 연동
        </h2>
        <p>VS Code나 JetBrains IDE에서 Claude Code를 바로 사용하세요.</p>
      </div>

      {/* 개요 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          개요
        </h3>
        <p className="description">
          Claude Code는 터미널에서 사용하는 CLI 도구이지만,
          <strong> IDE 확장/플러그인</strong>을 통해 에디터 안에서도 직접 사용할 수 있습니다.
          코드를 보면서 바로 Claude에게 질문하고, 인라인으로 수정할 수 있습니다.
        </p>
      </div>

      {/* VS Code */}
      <div className="card">
        <h3>
          <i className="fas fa-code" style={{ marginRight: '8px', color: '#007ACC' }}></i>
          VS Code 확장
        </h3>

        <AccordionItem title="설치 방법" defaultOpen>
          <p>VS Code 마켓플레이스에서 설치합니다.</p>
          <div className="step-list">
            <div className="step">
              <span className="step-num">1</span>
              <div>
                <p>VS Code를 열고 확장 탭을 엽니다 (<code>Cmd+Shift+X</code> / <code>Ctrl+Shift+X</code>)</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <div>
                <p><strong>&quot;Claude Code&quot;</strong>를 검색합니다</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <div>
                <p>Anthropic 공식 확장을 찾아 <strong>Install</strong>을 클릭합니다</p>
              </div>
            </div>
          </div>
          <p className="note">또는 터미널에서 직접 설치할 수도 있습니다.</p>
          <CommandBox command="code --install-extension anthropic.claude-code" />
        </AccordionItem>

        <AccordionItem title="주요 기능">
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon" style={{ background: '#007ACC' }}>
                <i className="fas fa-i-cursor"></i>
              </div>
              <div className="feature-content">
                <h4>인라인 편집</h4>
                <p>코드를 선택한 후 Claude에게 수정을 요청하면 에디터에서 바로 변경됩니다.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon" style={{ background: '#007ACC' }}>
                <i className="fas fa-comments"></i>
              </div>
              <div className="feature-content">
                <h4>채팅 패널</h4>
                <p>사이드바에서 Claude와 대화하며 코드를 분석하고 질문할 수 있습니다.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon" style={{ background: '#007ACC' }}>
                <i className="fas fa-terminal"></i>
              </div>
              <div className="feature-content">
                <h4>터미널 통합</h4>
                <p>VS Code 내장 터미널에서 Claude Code CLI를 바로 사용할 수 있습니다.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon" style={{ background: '#007ACC' }}>
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="feature-content">
                <h4>컨텍스트 인식</h4>
                <p>현재 열린 파일, 선택한 코드를 자동으로 Claude에게 전달합니다.</p>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="주요 단축키">
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>동작</th>
                  <th>Mac</th>
                  <th>Windows/Linux</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Claude 패널 열기</td>
                  <td><code>Cmd+Shift+P</code> → &quot;Claude&quot;</td>
                  <td><code>Ctrl+Shift+P</code> → &quot;Claude&quot;</td>
                </tr>
                <tr>
                  <td>인라인 편집 요청</td>
                  <td>코드 선택 → <code>Cmd+L</code></td>
                  <td>코드 선택 → <code>Ctrl+L</code></td>
                </tr>
                <tr>
                  <td>새 대화 시작</td>
                  <td><code>Cmd+Shift+L</code></td>
                  <td><code>Ctrl+Shift+L</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </AccordionItem>
      </div>

      {/* JetBrains */}
      <div className="card">
        <h3>
          <i className="fas fa-puzzle-piece" style={{ marginRight: '8px', color: '#FE315D' }}></i>
          JetBrains 플러그인
        </h3>

        <AccordionItem title="설치 방법" defaultOpen>
          <div className="step-list">
            <div className="step">
              <span className="step-num">1</span>
              <div>
                <p>JetBrains IDE에서 <strong>Settings → Plugins</strong>를 엽니다</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <div>
                <p>Marketplace에서 <strong>&quot;Claude Code&quot;</strong>를 검색합니다</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <div>
                <p><strong>Install</strong>을 클릭하고 IDE를 재시작합니다</p>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="지원 IDE">
          <div className="ide-grid">
            <div className="ide-item">
              <strong>IntelliJ IDEA</strong>
              <span>Java, Kotlin</span>
            </div>
            <div className="ide-item">
              <strong>WebStorm</strong>
              <span>JavaScript, TypeScript</span>
            </div>
            <div className="ide-item">
              <strong>PyCharm</strong>
              <span>Python</span>
            </div>
            <div className="ide-item">
              <strong>GoLand</strong>
              <span>Go</span>
            </div>
            <div className="ide-item">
              <strong>PHPStorm</strong>
              <span>PHP</span>
            </div>
            <div className="ide-item">
              <strong>RubyMine</strong>
              <span>Ruby</span>
            </div>
          </div>
        </AccordionItem>
      </div>

      {/* 비교 */}
      <div className="card">
        <h3>
          <i className="fas fa-balance-scale" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          터미널 vs IDE 비교
        </h3>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>터미널 (CLI)</th>
                <th>IDE 연동</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>강점</td>
                <td>전체 프로젝트 작업, 복잡한 멀티파일 변경</td>
                <td>현재 파일 중심 빠른 편집</td>
              </tr>
              <tr>
                <td>멀티파일</td>
                <td><span className="badge success">강력</span></td>
                <td><span className="badge muted">제한적</span></td>
              </tr>
              <tr>
                <td>시각적 피드백</td>
                <td>텍스트 기반</td>
                <td>에디터 내 하이라이트</td>
              </tr>
              <tr>
                <td>도구 사용</td>
                <td>Bash, Git, MCP 등 전체</td>
                <td>에디터 기능 중심</td>
              </tr>
              <tr>
                <td>추천 상황</td>
                <td>리팩토링, 새 기능 구현</td>
                <td>빠른 수정, 코드 질문</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>팁:</strong> 두 가지를 함께 사용하는 것이 가장 효과적입니다.
            큰 작업은 터미널에서, 작은 수정은 IDE에서 처리하세요.
            터미널의 Claude Code가 수정한 파일은 IDE에서 바로 확인할 수 있습니다.
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

        .badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .badge.success {
          background: rgba(34, 197, 94, 0.15);
          color: #22c55e;
        }

        .badge.muted {
          background: var(--bg-primary);
          color: var(--text-muted);
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

        .step-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .step {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .step-num {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          font-size: 0.85rem;
          font-weight: 600;
          flex-shrink: 0;
        }

        .step p {
          margin: 4px 0 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .step code {
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.85rem;
        }

        .ide-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
        }

        .ide-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
        }

        .ide-item strong {
          font-size: 0.95rem;
        }

        .ide-item span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </>
  );
}
