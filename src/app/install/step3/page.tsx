'use client';

import Link from 'next/link';
import { CommandBox, OSTabs } from '@/components';

export default function Step3Page() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-robot" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          3단계: Claude Code 설치하기
        </h2>
        <p>드디어! AI 비서를 설치합니다</p>
      </div>

      <div className="tip-box info">
        <i className="fas fa-robot"></i>
        <div className="tip-content">
          <h4>Claude가 뭔가요?</h4>
          <p>ChatGPT처럼 대화하는 AI인데, <span className="emphasis">내 컴퓨터 파일을 직접 읽고 작업할 수 있어요!</span> PPT 변환, 문서 정리, 데이터 분석 등을 말로 시키면 알아서 해줘요.</p>
        </div>
      </div>

      <div className="tip-box warning">
        <i className="fas fa-exclamation-triangle"></i>
        <div className="tip-content">
          <h4>설치 전 확인 필수!</h4>
          <p>Claude Code는 <span className="emphasis">유료 플랜(Pro, Max, Team, Enterprise)</span>이 있어야 써요. 무료 계정으로는 깔아도 쓸 수 없으니 주의!</p>
          <p style={{ marginTop: '8px' }}>가격: 월 $20 (Pro) / 월 $100 (Max) / 월 $30/인 (Team)</p>
        </div>
      </div>

      <div className="tip-box info">
        <i className="fas fa-desktop"></i>
        <div className="tip-content">
          <h4>터미널이 어렵다면?</h4>
          <p><span className="emphasis">Desktop 앱</span>을 쓰면 터미널 없이도 Claude Code를 사용할 수 있어요! <Link href="/desktop" style={{ color: 'var(--primary)', fontWeight: 600 }}>Desktop 앱 안내 보기</Link></p>
        </div>
      </div>

      <OSTabs>
        {{
          mac: (
            <>
              <div className="steps-container">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Claude Code 설치하기 (권장)</h3>
                  <p>iTerm2를 열고 아래 명령어 <span className="emphasis">한 줄</span>만 입력하면 끝! Node.js 설치도 필요 없어요.</p>
                  <CommandBox command="curl -fsSL https://claude.ai/install.sh | bash" />
                  <p style={{ marginTop: '16px' }}>설치가 끝나면 터미널을 껐다 켜세요.</p>

                  <div className="tip-box info" style={{ marginTop: '16px' }}>
                    <i className="fas fa-sync-alt"></i>
                    <div className="tip-content">
                      <h4>자동 업데이트!</h4>
                      <p>이 방식으로 설치하면 <span className="emphasis">백그라운드에서 자동으로 최신 버전으로 업데이트</span>돼요.</p>
                    </div>
                  </div>

                  <div className="tip-box warning" style={{ marginTop: '16px' }}>
                    <i className="fas fa-exclamation-circle"></i>
                    <div className="tip-content">
                      <h4>반드시 터미널을 껐다 켜세요!</h4>
                      <p>설치 후 <span className="emphasis">터미널을 완전히 종료(Command + Q)했다가 다시 열어주세요.</span></p>
                      <p style={{ marginTop: '4px', color: 'var(--text-muted)' }}>창 닫기(X 버튼)만으로는 안 돼요! 앱 자체를 종료해야 다음 명령어가 작동해요.</p>
                    </div>
                  </div>
                </div>

                <div className="step-card" style={{ opacity: 0.85 }}>
                  <div className="step-number" style={{ background: 'var(--text-muted)' }}>?</div>
                  <h3>다른 설치 방법 (선택)</h3>
                  <p>위 명령어가 안 되는 경우에만 아래 방법을 시도하세요.</p>
                  <p style={{ fontSize: '0.95rem' }}><strong>Homebrew:</strong></p>
                  <CommandBox command="brew install --cask claude-code" />
                  <p style={{ marginTop: '12px', fontSize: '0.95rem' }}><strong>npm (구버전 호환):</strong></p>
                  <CommandBox command="npm install -g @anthropic-ai/claude-code" />
                  <p style={{ marginTop: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>npm 설치는 Node.js 18+이 필요하고 자동 업데이트가 안 됩니다.</p>
                </div>

                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>계정 만들기 (무료)</h3>
                  <p>Claude를 쓰려면 Anthropic 계정이 필요해요. <span className="emphasis">무료</span>로 만들 수 있어요!</p>
                  <ol style={{ paddingLeft: '24px', color: 'var(--text-muted)', marginTop: '12px' }}>
                    <li style={{ marginBottom: '12px' }}>
                      <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>여기를 클릭</a>해서 Anthropic 사이트로 이동
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <strong>"Sign Up"</strong> 또는 <strong>"계정 만들기"</strong> 클릭
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      이메일 주소와 비밀번호 입력
                    </li>
                    <li>
                      이메일로 온 인증 링크 클릭하면 끝!
                    </li>
                  </ol>
                </div>

                <div className="step-card">
                  <div className="step-number">4</div>
                  <h3>로그인하기</h3>
                  <p>내 컴퓨터의 Claude와 계정을 연결해요.</p>
                  <CommandBox command="claude auth login" />
                  <ul style={{ marginTop: '16px' }}>
                    <li><strong>웹 브라우저가 자동으로 열려요</strong> (Safari, Chrome 등)</li>
                    <li>방금 만든 계정으로 <strong>로그인</strong></li>
                    <li>"Claude Code 접근 허용" 같은 버튼이 나오면 <strong>"허용"</strong> 클릭</li>
                    <li>"인증 완료" 메시지가 보이면 → 터미널로 돌아오세요</li>
                  </ul>
                </div>

                <div className="step-card">
                  <div className="step-number">5</div>
                  <h3>첫 대화 해보기!</h3>
                  <p>드디어 AI와 대화할 준비가 끝났어요! 간단히 테스트해봅시다.</p>
                  <CommandBox command="claude" />
                  <p style={{ marginTop: '16px' }}>이제 아무거나 질문해보세요!</p>
                  <div className="command-box" style={{ marginTop: '12px' }}>
                    <div className="command-content">
                      안녕? 내 이름은 김철수야. 기억해줘!
                    </div>
                  </div>
                  <p style={{ marginTop: '16px', color: 'var(--primary)', fontWeight: 600 }}>AI가 답변하면 설치 완료!</p>
                </div>
              </div>
            </>
          ),
          windows: (
            <>
              <div className="steps-container">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Git for Windows 설치</h3>
                  <p>Claude Code는 내부적으로 Git Bash를 사용해요. 먼저 Git을 설치하세요.</p>
                  <CommandBox command="winget install Git.Git" />
                  <p style={{ marginTop: '12px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>이미 Git이 있다면 이 단계는 건너뛰세요!</p>
                </div>

                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>Claude Code 설치하기 (권장)</h3>
                  <p>PowerShell을 열고 아래 명령어를 입력하세요. Node.js 설치도 필요 없어요!</p>
                  <CommandBox command="irm https://claude.ai/install.ps1 | iex" />
                  <p style={{ marginTop: '16px' }}>설치가 끝나면 터미널을 껐다 켜세요.</p>

                  <div className="tip-box info" style={{ marginTop: '16px' }}>
                    <i className="fas fa-sync-alt"></i>
                    <div className="tip-content">
                      <h4>자동 업데이트!</h4>
                      <p>이 방식으로 설치하면 <span className="emphasis">백그라운드에서 자동으로 최신 버전으로 업데이트</span>돼요.</p>
                    </div>
                  </div>

                  <div className="tip-box warning" style={{ marginTop: '16px' }}>
                    <i className="fas fa-exclamation-circle"></i>
                    <div className="tip-content">
                      <h4>터미널을 껐다 켜세요!</h4>
                      <p>설치 후 <span className="emphasis">터미널을 완전히 종료했다가 다시 열어주세요.</span> 그래야 <code>claude</code> 명령어가 작동해요.</p>
                    </div>
                  </div>
                </div>

                <div className="step-card" style={{ opacity: 0.85 }}>
                  <div className="step-number" style={{ background: 'var(--text-muted)' }}>?</div>
                  <h3>다른 설치 방법 (선택)</h3>
                  <p>위 명령어가 안 되는 경우에만 시도하세요.</p>
                  <p style={{ fontSize: '0.95rem' }}><strong>WinGet:</strong></p>
                  <CommandBox command="winget install Anthropic.ClaudeCode" />
                  <p style={{ marginTop: '12px', fontSize: '0.95rem' }}><strong>npm (구버전 호환):</strong></p>
                  <CommandBox command="npm install -g @anthropic-ai/claude-code" />
                  <p style={{ marginTop: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>npm 설치는 Node.js 18+이 필요하고 자동 업데이트가 안 됩니다.</p>
                </div>

                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>계정 만들기 (무료)</h3>
                  <p>Claude를 쓰려면 Anthropic 계정이 필요해요. <span className="emphasis">무료</span>로 만들 수 있어요!</p>
                  <ol style={{ paddingLeft: '24px', color: 'var(--text-muted)', marginTop: '12px' }}>
                    <li style={{ marginBottom: '12px' }}>
                      <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>여기를 클릭</a>해서 Anthropic 사이트로 이동
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <strong>"Sign Up"</strong> 또는 <strong>"계정 만들기"</strong> 클릭
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      이메일 주소와 비밀번호 입력
                    </li>
                    <li>
                      이메일로 온 인증 링크 클릭하면 끝!
                    </li>
                  </ol>
                </div>

                <div className="step-card">
                  <div className="step-number">4</div>
                  <h3>로그인하기</h3>
                  <p>내 컴퓨터의 Claude와 계정을 연결해요.</p>
                  <CommandBox command="claude auth login" />
                  <ul style={{ marginTop: '16px' }}>
                    <li><strong>웹 브라우저가 자동으로 열려요</strong> (Chrome, Edge 등)</li>
                    <li>방금 만든 계정으로 <strong>로그인</strong></li>
                    <li>"Claude Code 접근 허용" 같은 버튼이 나오면 <strong>"허용"</strong> 클릭</li>
                    <li>"인증 완료" 메시지가 보이면 → 터미널로 돌아오세요</li>
                  </ul>
                </div>

                <div className="step-card">
                  <div className="step-number">5</div>
                  <h3>첫 대화 해보기!</h3>
                  <p>드디어 AI와 대화할 준비가 끝났어요! 간단히 테스트해봅시다.</p>
                  <CommandBox command="claude" />
                  <p style={{ marginTop: '16px' }}>이제 아무거나 질문해보세요!</p>
                  <div className="command-box" style={{ marginTop: '12px' }}>
                    <div className="command-content">
                      안녕? 내 이름은 김철수야. 기억해줘!
                    </div>
                  </div>
                  <p style={{ marginTop: '16px', color: 'var(--primary)', fontWeight: 600 }}>AI가 답변하면 설치 완료!</p>
                </div>
              </div>
            </>
          )
        }}
      </OSTabs>

      <div className="tip-box" style={{ background: 'linear-gradient(135deg, rgba(32, 236, 138, 0.2), rgba(160, 255, 209, 0.2))', borderColor: 'var(--primary)' }}>
        <i className="fas fa-trophy"></i>
        <div className="tip-content">
          <h4>축하합니다!</h4>
          <p>모든 설치가 끝났어요! 이제 실제로 AI에게 일 시키는 방법을 배워봐요.</p>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/install/basic" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
          사용법 배우기
          <i className="fas fa-graduation-cap" style={{ marginLeft: '8px' }}></i>
        </Link>
      </div>

      <style jsx>{`
        .steps-container {
          display: grid;
          gap: 24px;
          margin: 40px 0;
        }
        .step-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          position: relative;
          transition: all 0.3s ease;
        }
        .step-card:hover {
          transform: translateX(10px);
          border-color: var(--primary);
        }
        .step-number {
          position: absolute;
          top: -15px;
          left: 32px;
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
        }
        .step-card h3 {
          margin-bottom: 16px;
          font-size: 1.4rem;
        }
        .step-card p {
          color: var(--text-muted);
          margin-bottom: 20px;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .step-card ul, .step-card ol {
          padding-left: 24px;
          color: var(--text-muted);
        }
        .step-card li {
          margin-bottom: 8px;
          line-height: 1.6;
        }
        .command-box {
          background: var(--command-bg);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px 20px;
        }
        .command-content {
          color: var(--accent);
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}
