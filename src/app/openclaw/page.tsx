'use client';

import { CommandBox, AccordionItem, OSTabs } from '@/components';

export default function OpenClawPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-paw" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          OpenClaw
        </h2>
        <p>카톡이나 슬랙에서 AI와 대화할 수 있는 무료 도구예요.</p>
      </div>

      {/* OpenClaw이란? */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          OpenClaw이란?
        </h3>
        <p className="description">
          <strong>OpenClaw</strong>는 내 컴퓨터에서 돌아가는 <strong>무료 AI 비서</strong>예요.
          WhatsApp, Telegram, Slack 같은 채팅 앱에 연결해서 AI한테 뭐든 물어볼 수 있어요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-laptop"></i>
            </div>
            <div className="feature-content">
              <h4>로컬 실행</h4>
              <p>내 컴퓨터에서 돌아가서 데이터가 밖으로 안 나가요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-comments"></i>
            </div>
            <div className="feature-content">
              <h4>메시징 앱 연동</h4>
              <p>평소 쓰던 채팅 앱에서 AI와 대화할 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-lock-open"></i>
            </div>
            <div className="feature-content">
              <h4>오픈소스</h4>
              <p>코드가 공개되어 있어서 누구나 확인하고 참여할 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <div className="feature-content">
              <h4>확장 가능</h4>
              <p>원하는 기능을 추가해서 나만의 비서로 만들 수 있어요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Claude Code와 차이점 */}
      <div className="card">
        <h3>
          <i className="fas fa-balance-scale" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Claude Code와 비교
        </h3>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>Claude Code</th>
                <th>OpenClaw</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>주요 용도</td>
                <td>코딩 및 개발 작업</td>
                <td>일상 업무 비서</td>
              </tr>
              <tr>
                <td>인터페이스</td>
                <td>터미널 (CLI)</td>
                <td>메시징 앱 (채팅)</td>
              </tr>
              <tr>
                <td>강점</td>
                <td>코드 분석, 파일 처리, Git</td>
                <td>자연어 대화, 일정 관리, 알림</td>
              </tr>
              <tr>
                <td>AI 모델</td>
                <td>Claude (Anthropic)</td>
                <td>Claude, GPT 등 선택 가능</td>
              </tr>
              <tr>
                <td>비용</td>
                <td>Anthropic 구독</td>
                <td>오픈소스 무료 + AI API 비용</td>
              </tr>
              <tr>
                <td>카테고리</td>
                <td>개발 도구</td>
                <td>개인 비서</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>팁:</strong> Claude Code는 개발 작업에, OpenClaw는 일상 업무에 각각 특화되어 있습니다.
            두 도구를 함께 사용하면 시너지를 낼 수 있습니다.
          </div>
        </div>
      </div>

      {/* 설치하기 */}
      <div className="card">
        <h3>
          <i className="fas fa-download" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          설치하기
        </h3>
        <p className="description">
          Node.js 22 이상이 필요해요. Claude Code 설치할 때 이미 깔았다면 바로 진행하면 돼요.
        </p>

        <AccordionItem title="1단계: Node.js 버전 확인" defaultOpen>
          <p>터미널에서 Node.js 버전을 확인합니다. 22 이상이면 됩니다.</p>
          <CommandBox command="node --version" />
          <p className="note">22 미만이라면 최신 버전을 설치하세요.</p>

          <OSTabs>
            {{
              mac: (
                <div>
                  <CommandBox command="brew install node" />
                </div>
              ),
              windows: (
                <div>
                  <CommandBox command="winget install OpenJS.NodeJS" />
                </div>
              ),
            }}
          </OSTabs>
        </AccordionItem>

        <AccordionItem title="2단계: OpenClaw 설치">
          <p>npm으로 OpenClaw를 설치합니다.</p>
          <CommandBox command="npm install -g openclaw" />
        </AccordionItem>

        <AccordionItem title="3단계: 초기 설정">
          <p>설치 후 초기 설정 마법사를 실행합니다.</p>
          <CommandBox command="openclaw onboard" />
          <p className="note">AI API 키 입력, 기본 채널 설정 등을 안내합니다.</p>
        </AccordionItem>
      </div>

      {/* 주요 명령어 */}
      <div className="card">
        <h3>
          <i className="fas fa-terminal" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          주요 명령어
        </h3>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>명령어</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>openclaw onboard</code></td>
                <td>초기 설정 마법사 실행</td>
              </tr>
              <tr>
                <td><code>openclaw gateway</code></td>
                <td>메시징 게이트웨이 시작 (채널 연결)</td>
              </tr>
              <tr>
                <td><code>openclaw agent</code></td>
                <td>AI 에이전트 실행</td>
              </tr>
              <tr>
                <td><code>openclaw dashboard</code></td>
                <td>웹 대시보드 열기</td>
              </tr>
              <tr>
                <td><code>openclaw status</code></td>
                <td>현재 연결 상태 확인</td>
              </tr>
              <tr>
                <td><code>openclaw doctor</code></td>
                <td>설정 및 연결 문제 진단</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 채널 연결 */}
      <div className="card">
        <h3>
          <i className="fas fa-link" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          지원 채널
        </h3>
        <p className="description">
          이런 채팅 앱들과 연결할 수 있어요.
        </p>

        <div className="channel-list">
          <div className="channel-item">
            <div className="channel-icon whatsapp">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="channel-content">
              <h4>WhatsApp</h4>
              <p>QR 코드 스캔으로 연결</p>
            </div>
          </div>

          <div className="channel-item">
            <div className="channel-icon telegram">
              <i className="fab fa-telegram-plane"></i>
            </div>
            <div className="channel-content">
              <h4>Telegram</h4>
              <p>Bot Token으로 연결</p>
            </div>
          </div>

          <div className="channel-item">
            <div className="channel-icon slack">
              <i className="fab fa-slack"></i>
            </div>
            <div className="channel-content">
              <h4>Slack</h4>
              <p>Slack App으로 연결</p>
            </div>
          </div>

          <div className="channel-item">
            <div className="channel-icon discord">
              <i className="fab fa-discord"></i>
            </div>
            <div className="channel-content">
              <h4>Discord</h4>
              <p>Bot Token으로 연결</p>
            </div>
          </div>
        </div>
      </div>

      {/* 비용 */}
      <div className="card">
        <h3>
          <i className="fas fa-coins" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          비용
        </h3>
        <p className="description">
          OpenClaw 프로그램 자체는 <strong>완전 무료</strong>예요.
          AI한테 물어보는 부분만 AI 회사에 내는 비용이 있어요.
        </p>

        <div className="cost-breakdown">
          <div className="cost-item free">
            <div className="cost-label">
              <i className="fas fa-check-circle"></i>
              <span>OpenClaw 소프트웨어</span>
            </div>
            <span className="cost-value">무료</span>
          </div>
          <div className="cost-item free">
            <div className="cost-label">
              <i className="fas fa-check-circle"></i>
              <span>업데이트 및 지원</span>
            </div>
            <span className="cost-value">무료</span>
          </div>
          <div className="cost-item paid">
            <div className="cost-label">
              <i className="fas fa-exclamation-circle"></i>
              <span>AI API 사용료</span>
            </div>
            <span className="cost-value">사용량에 따라</span>
          </div>
        </div>
      </div>

      {/* 주의사항 */}
      <div className="card">
        <h3>
          <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px', color: '#eab308' }}></i>
          주의사항
        </h3>

        <div className="warning-list">
          <div className="warning-item">
            <i className="fas fa-key"></i>
            <div>
              <strong>API 키 보안</strong>
              <p>API 키는 환경 변수나 설정 파일에 안전하게 저장하세요. 절대 공유하거나 공개 저장소에 올리지 마세요.</p>
            </div>
          </div>
          <div className="warning-item">
            <i className="fas fa-shield-alt"></i>
            <div>
              <strong>인증 설정 필수</strong>
              <p>메시징 채널 연결 시 반드시 인증을 설정하세요. 인증 없이는 누구나 AI에게 명령을 보낼 수 있습니다.</p>
            </div>
          </div>
          <div className="warning-item">
            <i className="fas fa-box"></i>
            <div>
              <strong>공식 패키지만 사용</strong>
              <p>npm의 공식 <code>openclaw</code> 패키지만 설치하세요. 유사한 이름의 비공식 패키지에 주의하세요.</p>
            </div>
          </div>
        </div>

        <div className="link-box">
          <a href="https://github.com/nicepkg/openclaw" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" style={{ marginRight: '8px' }}></i>
            OpenClaw GitHub 저장소
          </a>
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

        .channel-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }

        .channel-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
        }

        .channel-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-size: 1.3rem;
          color: white;
          flex-shrink: 0;
        }

        .channel-icon.whatsapp { background: #25d366; }
        .channel-icon.telegram { background: #0088cc; }
        .channel-icon.slack { background: #4a154b; }
        .channel-icon.discord { background: #5865f2; }

        .channel-content h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .channel-content p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }

        .cost-breakdown {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cost-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
        }

        .cost-label {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cost-item.free .cost-label i {
          color: #22c55e;
        }

        .cost-item.paid .cost-label i {
          color: #eab308;
        }

        .cost-value {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .cost-item.free .cost-value {
          color: #22c55e;
        }

        .cost-item.paid .cost-value {
          color: #eab308;
        }

        .warning-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
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

        .link-box {
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
      `}</style>
    </>
  );
}
