'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function HooksPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-bell" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          Hooks (이벤트 훅)
        </h2>
        <p>도구 호출 전후에 자동으로 실행되는 셸 명령을 설정하세요.</p>
      </div>

      {/* Hooks란? */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Hooks란?
        </h3>
        <p className="description">
          <strong>Hooks</strong>는 Claude Code가 특정 동작을 수행할 때 <strong>자동으로 실행되는 셸 명령</strong>입니다.
          예를 들어 파일을 저장한 후 자동으로 포맷팅을 실행하거나, 커밋 전에 린트 검사를 하는 등의 워크플로우를 설정할 수 있습니다.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-play-circle"></i>
            </div>
            <div className="feature-content">
              <h4>자동 실행</h4>
              <p>도구 호출 전후에 별도 입력 없이 자동으로 동작합니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-filter"></i>
            </div>
            <div className="feature-content">
              <h4>조건부 실행</h4>
              <p>matcher로 특정 도구에만 훅을 적용할 수 있습니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="feature-content">
              <h4>품질 보호</h4>
              <p>코드 품질 검사, 보안 체크 등을 자동화합니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-cog"></i>
            </div>
            <div className="feature-content">
              <h4>간단한 설정</h4>
              <p>JSON 설정 파일 하나로 관리합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 이벤트 종류 */}
      <div className="card">
        <h3>
          <i className="fas fa-list" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          이벤트 종류
        </h3>
        <p className="description">
          Hooks는 다음 이벤트에 반응합니다. 각 이벤트마다 실행 시점이 다릅니다.
        </p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>이벤트</th>
                <th>실행 시점</th>
                <th>주요 용도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>PreToolUse</code></td>
                <td>도구 호출 <strong>직전</strong></td>
                <td>린트 검사, 권한 확인</td>
              </tr>
              <tr>
                <td><code>PostToolUse</code></td>
                <td>도구 호출 <strong>직후</strong></td>
                <td>포맷팅, 로그 기록</td>
              </tr>
              <tr>
                <td><code>Notification</code></td>
                <td>알림 발생 시</td>
                <td>커스텀 알림 (소리, 팝업)</td>
              </tr>
              <tr>
                <td><code>Stop</code></td>
                <td>에이전트 응답 완료 시</td>
                <td>결과 후처리, 정리 작업</td>
              </tr>
              <tr>
                <td><code>SubagentStop</code></td>
                <td>서브에이전트 종료 시</td>
                <td>서브 작업 후처리</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>팁:</strong> 가장 많이 쓰이는 이벤트는 <code>PreToolUse</code>와 <code>PostToolUse</code>입니다.
            파일 작성 전 검증, 작성 후 포맷팅 같은 패턴이 일반적입니다.
          </div>
        </div>
      </div>

      {/* 설정 위치 */}
      <div className="card">
        <h3>
          <i className="fas fa-folder-open" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          설정 위치
        </h3>
        <p className="description">
          Hooks는 <code>settings.json</code> 파일에 정의합니다. 개인용과 프로젝트용 두 가지 위치가 있습니다.
        </p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>경로</th>
                <th>범위</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>개인 설정</td>
                <td><code>~/.claude/settings.json</code></td>
                <td>내 컴퓨터 전체</td>
              </tr>
              <tr>
                <td>프로젝트 설정</td>
                <td><code>.claude/settings.json</code></td>
                <td>해당 프로젝트만</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Hook 구조 */}
      <div className="card">
        <h3>
          <i className="fas fa-sitemap" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Hook 구조
        </h3>
        <p className="description">
          <code>settings.json</code>의 <code>hooks</code> 필드에 이벤트별 훅 배열을 정의합니다.
          각 훅은 <code>matcher</code>(대상 도구)와 <code>hooks</code>(실행할 명령) 배열로 구성됩니다.
        </p>

        <div className="code-block">
          <div className="code-header">
            <span>settings.json 기본 구조</span>
          </div>
          <pre>{`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "echo '파일 저장 전 실행됩니다'"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "echo '파일 저장 후 실행됩니다'"
          }
        ]
      }
    ]
  }
}`}</pre>
        </div>

        <div className="comparison-table" style={{ marginTop: '16px' }}>
          <table>
            <thead>
              <tr>
                <th>필드</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>matcher</code></td>
                <td>대상 도구 이름 (예: <code>Write</code>, <code>Bash</code>, <code>Edit</code>)</td>
              </tr>
              <tr>
                <td><code>hooks</code></td>
                <td>실행할 명령 배열</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td>항상 <code>&quot;command&quot;</code></td>
              </tr>
              <tr>
                <td><code>command</code></td>
                <td>실행할 셸 명령어</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 실전 예시 */}
      <div className="card">
        <h3>
          <i className="fas fa-code" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          실전 예시
        </h3>

        <AccordionItem title="예시 1: 커밋 전 린트 검사" defaultOpen>
          <p>Bash에서 <code>git commit</code> 명령이 실행되기 전에 ESLint로 코드를 검사합니다.</p>
          <div className="code-block">
            <div className="code-header">
              <span>.claude/settings.json</span>
            </div>
            <pre>{`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if echo '$TOOL_INPUT' | grep -q 'git commit'; then npx eslint . --max-warnings 0; fi"
          }
        ]
      }
    ]
  }
}`}</pre>
          </div>
          <p className="note">린트 검사에 실패하면 (exit code 0이 아니면) 훅이 도구 실행을 차단합니다.</p>
        </AccordionItem>

        <AccordionItem title="예시 2: 파일 저장 후 자동 포맷팅">
          <p>Claude가 파일을 작성한 후 Prettier로 자동 포맷팅합니다.</p>
          <div className="code-block">
            <div className="code-header">
              <span>.claude/settings.json</span>
            </div>
            <pre>{`{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write '$TOOL_INPUT_FILE_PATH'"
          }
        ]
      }
    ]
  }
}`}</pre>
          </div>
          <p className="note"><code>$TOOL_INPUT_FILE_PATH</code>는 저장된 파일 경로로 자동 치환됩니다.</p>
        </AccordionItem>

        <AccordionItem title="예시 3: 커스텀 알림 소리">
          <p>Claude의 응답이 완료되면 알림 소리를 재생합니다.</p>
          <div className="code-block">
            <div className="code-header">
              <span>~/.claude/settings.json</span>
            </div>
            <pre>{`{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "afplay /System/Library/Sounds/Glass.aiff"
          }
        ]
      }
    ]
  }
}`}</pre>
          </div>
          <p className="note">macOS 기본 사운드를 사용합니다. <code>matcher</code>를 비워두면 모든 알림에 반응합니다.</p>
        </AccordionItem>
      </div>

      {/* 주의사항 */}
      <div className="card">
        <h3>
          <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px', color: '#eab308' }}></i>
          주의사항
        </h3>

        <div className="warning-list">
          <div className="warning-item">
            <i className="fas fa-clock"></i>
            <div>
              <strong>타임아웃</strong>
              <p>훅 명령은 기본 60초 타임아웃이 있습니다. 오래 걸리는 작업은 비동기로 처리하세요.</p>
            </div>
          </div>
          <div className="warning-item">
            <i className="fas fa-shield-alt"></i>
            <div>
              <strong>보안</strong>
              <p>프로젝트 설정(<code>.claude/settings.json</code>)의 훅은 팀원이 볼 수 있습니다.
              민감한 명령은 개인 설정에 넣으세요.</p>
            </div>
          </div>
          <div className="warning-item">
            <i className="fas fa-bug"></i>
            <div>
              <strong>디버깅</strong>
              <p>훅이 예상대로 동작하지 않으면 <code>claude --debug</code>로 실행하여 훅 로그를 확인하세요.</p>
            </div>
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

        .warning-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .warning-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: rgba(234, 179, 8, 0.08);
          border: 1px solid rgba(234, 179, 8, 0.2);
          border-radius: 12px;
        }

        .warning-item > i {
          color: #eab308;
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .warning-item strong {
          display: block;
          margin-bottom: 4px;
        }

        .warning-item p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }

        .warning-item code {
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.85rem;
        }
      `}</style>
    </>
  );
}
