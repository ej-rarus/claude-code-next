'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function McpPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-plug" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          MCP 서버
        </h2>
        <p>Claude에게 추가 능력을 붙여주는 확장 기능이에요.</p>
      </div>

      {/* MCP란? */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          MCP란 무엇인가요?
        </h3>
        <p className="description">
          <strong>MCP (Model Context Protocol)</strong>는 Claude에게 추가 능력을 붙여주는 <strong>확장 기능</strong>이에요.
          쉽게 말해, Claude가 더 많은 곳(파일, 데이터베이스, 웹 등)에 접근할 수 있게 해주는 "플러그인" 같은 거예요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-folder-open"></i>
            </div>
            <div className="feature-content">
              <h4>내 컴퓨터 파일</h4>
              <p>파일과 폴더를 읽고 수정할 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-database"></i>
            </div>
            <div className="feature-content">
              <h4>데이터베이스</h4>
              <p>데이터베이스에서 직접 데이터를 가져올 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-code-branch"></i>
            </div>
            <div className="feature-content">
              <h4>Git 연동</h4>
              <p>코드 변경 이력 보기, 저장, 분기 관리 등이 가능해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-globe"></i>
            </div>
            <div className="feature-content">
              <h4>웹 연결</h4>
              <p>외부 웹사이트나 서비스에서 실시간 데이터를 가져와요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Claude Code vs Claude Desktop */}
      <div className="card">
        <h3>
          <i className="fas fa-balance-scale" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Claude Code vs Claude Desktop
        </h3>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>기능</th>
                <th>Claude Code</th>
                <th>Claude Desktop</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>로컬 파일 접근</td>
                <td><span className="badge success">기본 제공</span></td>
                <td><span className="badge warning">MCP 필요</span></td>
              </tr>
              <tr>
                <td>터미널 명령어 실행</td>
                <td><span className="badge success">기본 제공</span></td>
                <td><span className="badge warning">MCP 필요</span></td>
              </tr>
              <tr>
                <td>Git 통합</td>
                <td><span className="badge success">기본 제공</span></td>
                <td><span className="badge warning">MCP 필요</span></td>
              </tr>
              <tr>
                <td>웹 검색</td>
                <td><span className="badge success">기본 제공</span></td>
                <td><span className="badge warning">MCP 필요</span></td>
              </tr>
              <tr>
                <td>GUI 인터페이스</td>
                <td><span className="badge muted">터미널 기반</span></td>
                <td><span className="badge success">기본 제공</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>팁:</strong> Claude Code는 이미 내 컴퓨터 파일에 접근할 수 있어서 MCP가 꼭 필요하진 않아요.
            반면 Claude Desktop(앱 버전)에서 같은 기능을 쓰려면 MCP 설정이 필요해요.
          </div>
        </div>
      </div>

      {/* Claude Desktop에서 MCP 설정하기 */}
      <div className="card">
        <h3>
          <i className="fas fa-cog" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Claude Desktop에서 MCP 설정하기
        </h3>

        <AccordionItem title="1단계: 설정 파일 열기" defaultOpen>
          <p>Claude Desktop의 MCP 설정 파일을 열어요.</p>
          <CommandBox command="open ~/Library/Application\ Support/Claude/claude_desktop_config.json" />
          <p className="note">파일이 없다면 새로 만드세요.</p>
        </AccordionItem>

        <AccordionItem title="2단계: 파일시스템 MCP 서버 추가">
          <p>내 컴퓨터 파일에 접근하게 하려면 아래 설정을 넣어요.</p>
          <div className="code-block">
            <pre>{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/사용자이름/Documents"
      ]
    }
  }
}`}</pre>
          </div>
          <p className="note"><code>/Users/사용자이름/Documents</code> 부분을 실제 작업 폴더 위치로 바꿔주세요.</p>
        </AccordionItem>

        <AccordionItem title="3단계: Git MCP 서버 추가 (선택)">
          <p>Git 기능도 쓰고 싶다면 아래 설정을 추가해요.</p>
          <div className="code-block">
            <pre>{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/사용자이름/Documents"]
    },
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git", "--repository", "/Users/사용자이름/프로젝트폴더"]
    }
  }
}`}</pre>
          </div>
        </AccordionItem>

        <AccordionItem title="4단계: Claude Desktop 재시작">
          <p>설정을 저장한 후 Claude Desktop을 완전히 종료했다가 다시 실행해요.</p>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <span>Command + Q로 Claude Desktop 종료</span>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <span>Claude Desktop 다시 실행</span>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <span>설정 아이콘에서 MCP 서버 연결 확인</span>
            </div>
          </div>
        </AccordionItem>
      </div>

      {/* 인기 MCP 서버 */}
      <div className="card">
        <h3>
          <i className="fas fa-star" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          인기 MCP 서버
        </h3>

        <div className="server-list">
          <div className="server-item">
            <div className="server-name">
              <i className="fas fa-folder"></i>
              <strong>filesystem</strong>
            </div>
            <p>로컬 파일 및 디렉토리 접근</p>
            <code>@modelcontextprotocol/server-filesystem</code>
          </div>

          <div className="server-item">
            <div className="server-name">
              <i className="fab fa-github"></i>
              <strong>github</strong>
            </div>
            <p>GitHub 이슈, PR, 저장소 관리</p>
            <code>@modelcontextprotocol/server-github</code>
          </div>

          <div className="server-item">
            <div className="server-name">
              <i className="fas fa-database"></i>
              <strong>postgres</strong>
            </div>
            <p>PostgreSQL 데이터베이스 쿼리</p>
            <code>@modelcontextprotocol/server-postgres</code>
          </div>

          <div className="server-item">
            <div className="server-name">
              <i className="fas fa-search"></i>
              <strong>brave-search</strong>
            </div>
            <p>Brave 검색 엔진으로 웹 검색</p>
            <code>@modelcontextprotocol/server-brave-search</code>
          </div>

          <div className="server-item">
            <div className="server-name">
              <i className="fab fa-slack"></i>
              <strong>slack</strong>
            </div>
            <p>Slack 채널 메시지 읽기/쓰기</p>
            <code>@modelcontextprotocol/server-slack</code>
          </div>
        </div>

        <div className="link-box">
          <a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" style={{ marginRight: '8px' }}></i>
            더 많은 MCP 서버 보기
          </a>
        </div>
      </div>

      {/* 문제 해결 */}
      <div className="card">
        <h3>
          <i className="fas fa-wrench" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          문제 해결
        </h3>

        <AccordionItem title="MCP 서버가 연결되지 않아요">
          <ul>
            <li>설정 파일에 오타가 없는지 확인하세요.</li>
            <li>Node.js가 깔려 있는지 확인: <code>node --version</code></li>
            <li>Claude Desktop을 완전히 종료한 뒤 다시 실행하세요.</li>
            <li>터미널에서 직접 실행해서 에러 메시지가 뜨는지 확인하세요.</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="파일을 찾을 수 없다고 해요">
          <ul>
            <li>설정 파일의 폴더 위치가 정확한지 확인하세요.</li>
            <li><code>~</code> 대신 전체 경로(<code>/Users/이름/...</code>)를 써보세요.</li>
            <li>해당 폴더를 열 수 있는 권한이 있는지 확인하세요.</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="npx/uvx 명령어를 찾을 수 없어요">
          <ul>
            <li><strong>npx</strong>: Node.js가 필요해요 - <code>brew install node</code>로 설치</li>
            <li><strong>uvx</strong>: uv가 필요해요 - <code>brew install uv</code>로 설치</li>
          </ul>
        </AccordionItem>
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

        .badge.warning {
          background: rgba(234, 179, 8, 0.15);
          color: #eab308;
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
        }

        .tip-box i {
          color: var(--primary);
          font-size: 1.2rem;
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

        .code-block pre {
          padding: 16px;
          margin: 0;
          font-size: 0.85rem;
          font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
        }

        .note {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 8px;
        }

        .steps {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 12px;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .step-number {
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

        .server-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .server-item {
          padding: 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
        }

        .server-name {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .server-name i {
          color: var(--primary);
        }

        .server-item p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .server-item code {
          font-size: 0.8rem;
          background: var(--bg-secondary);
          padding: 4px 8px;
          border-radius: 4px;
          color: var(--primary);
        }

        .link-box {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
        }

        .link-box a {
          display: inline-flex;
          align-items: center;
          color: var(--primary);
          font-weight: 500;
          text-decoration: none;
        }

        .link-box a:hover {
          text-decoration: underline;
        }

        ul {
          margin: 0;
          padding-left: 20px;
        }

        li {
          margin-bottom: 8px;
          line-height: 1.6;
        }

        li code {
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.85rem;
        }
      `}</style>
    </>
  );
}
