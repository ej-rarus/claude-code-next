'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function SandboxingPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-shield-alt" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          샌드박싱
        </h2>
        <p>OS 수준의 파일 시스템 & 네트워크 격리로 더 안전하게 코딩하세요.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          샌드박싱이란?
        </h3>
        <p className="description">
          샌드박싱은 Claude Code의 bash 명령을 <strong>OS 수준에서 격리</strong>하는 보안 기능이에요.
          파일 시스템과 네트워크 접근을 제한해서, 매번 권한을 묻지 않아도 <strong>안전하게 자율 실행</strong>할 수 있어요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-folder-minus"></i></div>
            <div className="feature-content">
              <h4>파일 시스템 격리</h4>
              <p>작업 디렉토리 밖의 파일 수정을 차단해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-globe"></i></div>
            <div className="feature-content">
              <h4>네트워크 격리</h4>
              <p>허용된 도메인만 접근할 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-robot"></i></div>
            <div className="feature-content">
              <h4>자율 실행</h4>
              <p>샌드박스 안에서는 승인 없이 자동 실행돼요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-lock"></i></div>
            <div className="feature-content">
              <h4>프롬프트 인젝션 방어</h4>
              <p>악성 명령이 시스템 파일이나 네트워크에 접근하는 것을 차단해요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 활성화 */}
      <div className="card">
        <h3>
          <i className="fas fa-play-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          활성화 방법
        </h3>
        <p><code>/sandbox</code> 명령으로 활성화할 수 있어요.</p>
        <CommandBox command="/sandbox" />
        <p style={{ marginTop: '12px' }}>메뉴에서 모드를 선택하세요.</p>

        <div className="comparison-table" style={{ marginTop: '16px' }}>
          <table>
            <thead>
              <tr>
                <th>모드</th>
                <th>동작</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Auto-allow</strong></td>
                <td>샌드박스 안의 명령은 자동 승인. 밖은 일반 권한 플로우.</td>
              </tr>
              <tr>
                <td><strong>Regular permissions</strong></td>
                <td>모든 명령이 승인 필요. 샌드박스는 격리만 담당.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 플랫폼 */}
      <div className="card">
        <h3>
          <i className="fas fa-desktop" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          플랫폼별 지원
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>플랫폼</th>
                <th>기술</th>
                <th>설치</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>macOS</strong></td><td>Seatbelt</td><td>기본 내장 (추가 설치 불필요)</td></tr>
              <tr><td><strong>Linux / WSL2</strong></td><td>bubblewrap</td><td><code>sudo apt-get install bubblewrap socat</code></td></tr>
              <tr><td><strong>WSL1</strong></td><td>-</td><td>미지원</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 설정 */}
      <div className="card">
        <h3>
          <i className="fas fa-cog" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          설정
        </h3>

        <AccordionItem title="쓰기 허용 경로 추가" icon="fa-folder-open" defaultOpen>
          <p>기본적으로 현재 작업 디렉토리만 쓰기 가능해요. 추가 경로를 허용하려면:</p>
          <CommandBox command={`// settings.json
{
  "sandbox": {
    "enabled": true,
    "filesystem": {
      "allowWrite": ["~/.kube", "//tmp/build"]
    }
  }
}`} />
          <p style={{ marginTop: '12px' }}><strong>경로 접두사:</strong></p>
          <ul>
            <li><code>//</code> — 절대 경로 (<code>//tmp</code> → <code>/tmp</code>)</li>
            <li><code>~/</code> — 홈 디렉토리 기준</li>
            <li><code>/</code> — 설정 파일 위치 기준</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="네트워크 도메인 제어" icon="fa-globe">
          <p>새 도메인 접근 시 권한 확인이 나타나요. 허용하면 이후 같은 도메인은 자동 허용돼요.</p>
          <p style={{ marginTop: '8px' }}>커스텀 프록시로 고급 네트워크 제어도 가능해요.</p>
          <CommandBox command={`{
  "sandbox": {
    "network": {
      "httpProxyPort": 8080,
      "socksProxyPort": 8081
    }
  }
}`} />
        </AccordionItem>
      </div>

      {/* 보안 이점 */}
      <div className="card">
        <h3>
          <i className="fas fa-lock" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          보안 이점
        </h3>
        <div className="tip-box">
          <i className="fas fa-shield-alt"></i>
          <span><strong>파일 보호</strong>: ~/.bashrc, /bin/ 등 시스템 파일 수정 차단</span>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-shield-alt"></i>
          <span><strong>네트워크 보호</strong>: 허용되지 않은 서버로 데이터 유출 차단</span>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-shield-alt"></i>
          <span><strong>의존성 보호</strong>: 악성 NPM 패키지나 빌드 스크립트로부터 보호</span>
        </div>
      </div>

      {/* 오픈소스 */}
      <div className="card">
        <h3>
          <i className="fas fa-code" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          오픈소스
        </h3>
        <p className="description">
          샌드박스 런타임은 오픈소스 NPM 패키지로 공개되어 있어요.
          직접 만든 에이전트나 MCP 서버에도 적용할 수 있어요.
        </p>
        <CommandBox command="npx @anthropic-ai/sandbox-runtime <command-to-sandbox>" />
      </div>

      <style jsx>{`
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
