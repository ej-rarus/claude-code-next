'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function RemoteControlPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-wifi" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          Remote Control
        </h2>
        <p>폰, 태블릿, 다른 컴퓨터에서 로컬 세션을 이어서 작업하세요.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Remote Control이란?
        </h3>
        <p className="description">
          <strong>Remote Control</strong>은 내 컴퓨터에서 실행 중인 Claude Code 세션을
          <strong> 다른 기기</strong>(폰, 태블릿, 브라우저)에서 접속해서 제어하는 기능이에요.
          코드는 내 컴퓨터에서 실행되지만, 조작은 어디서든 할 수 있어요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-laptop"></i></div>
            <div className="feature-content">
              <h4>로컬 환경 유지</h4>
              <p>파일, MCP 서버, 도구 모두 내 컴퓨터 그대로 사용해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-sync-alt"></i></div>
            <div className="feature-content">
              <h4>실시간 동기화</h4>
              <p>터미널, 브라우저, 폰에서 동시에 같은 세션을 볼 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
            <div className="feature-content">
              <h4>자동 재연결</h4>
              <p>노트북이 잠자기 모드에서 깨어나면 자동으로 다시 연결돼요.</p>
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

        <AccordionItem title="새 세션으로 시작" icon="fa-plus-circle" defaultOpen>
          <p>프로젝트 폴더에서 아래 명령을 실행하세요.</p>
          <CommandBox command="claude remote-control" />
          <p style={{ marginTop: '8px' }}>세션 URL과 QR 코드가 표시돼요. 스페이스바를 눌러 QR 코드를 전환할 수 있어요.</p>
          <CommandBox command='claude remote-control --name "내 프로젝트"' />
          <p style={{ marginTop: '8px' }}><code>--name</code>으로 세션 이름을 지정하면 나중에 찾기 쉬워요.</p>
        </AccordionItem>

        <AccordionItem title="기존 세션에서 전환" icon="fa-exchange-alt">
          <p>이미 작업 중인 세션을 원격으로 전환하려면:</p>
          <CommandBox command="/remote-control" />
          <p style={{ marginTop: '8px' }}><code>/rc</code>로 줄여서 쓸 수도 있어요.</p>
        </AccordionItem>

        <AccordionItem title="다른 기기에서 접속" icon="fa-mobile-alt">
          <ul>
            <li>터미널에 표시된 <strong>세션 URL</strong>을 브라우저에서 열기</li>
            <li><strong>QR 코드</strong>를 스캔해서 Claude 모바일 앱에서 열기</li>
            <li><strong>claude.ai/code</strong>에서 세션 목록 확인 (초록색 점 = 온라인)</li>
          </ul>
        </AccordionItem>
      </div>

      {/* 모든 세션에서 자동 활성화 */}
      <div className="card">
        <h3>
          <i className="fas fa-cog" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          모든 세션에서 자동 활성화
        </h3>
        <p className="description">
          매번 명령을 입력하지 않고, 모든 세션에서 Remote Control을 자동으로 활성화할 수 있어요.
        </p>
        <p><code>/config</code>에서 <strong>Enable Remote Control for all sessions</strong>을 <code>true</code>로 설정하세요.</p>
      </div>

      {/* 웹 Claude Code와의 차이 */}
      <div className="card">
        <h3>
          <i className="fas fa-balance-scale" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Remote Control vs 웹 Claude Code
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>Remote Control</th>
                <th>웹 Claude Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>실행 위치</strong></td>
                <td>내 컴퓨터</td>
                <td>클라우드 서버</td>
              </tr>
              <tr>
                <td><strong>로컬 파일</strong></td>
                <td>접근 가능</td>
                <td>접근 불가 (GitHub 클론)</td>
              </tr>
              <tr>
                <td><strong>MCP 서버</strong></td>
                <td>사용 가능</td>
                <td>사용 불가</td>
              </tr>
              <tr>
                <td><strong>적합한 상황</strong></td>
                <td>로컬 작업을 다른 기기에서 이어할 때</td>
                <td>설치 없이 새 작업을 시작할 때</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 제한사항 */}
      <div className="card">
        <h3>
          <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px', color: 'var(--warning)' }}></i>
          제한사항
        </h3>
        <ul>
          <li>한 번에 <strong>하나의 원격 세션</strong>만 가능해요</li>
          <li>터미널을 닫으면 세션도 종료돼요</li>
          <li>네트워크가 10분 이상 끊기면 세션이 만료돼요</li>
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
