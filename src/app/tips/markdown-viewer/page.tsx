'use client';

import Link from 'next/link';
import { OSTabs } from '@/components';

export default function MarkdownViewerPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-eye" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          마크다운 파일 보는 법
        </h2>
        <p>Claude Code가 생성한 .md 파일을 예쁘게 보는 방법을 알아봅니다.</p>
      </div>

      <div className="tip-box info">
        <i className="fas fa-info-circle"></i>
        <div className="tip-content">
          <h4>마크다운(.md) 파일이란?</h4>
          <p>마크다운은 텍스트 기반의 <span className="emphasis">문서 작성 형식</span>입니다. Claude Code는 결과물을 .md 파일로 저장하는 경우가 많은데, 일반 텍스트 편집기로 열면 #, *, - 같은 기호가 그대로 보여서 읽기 불편합니다.</p>
        </div>
      </div>

      <OSTabs>
        {{
          mac: (
            <>
              <div className="steps-container">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Antigravity 설치하기</h3>
                  <p><span className="emphasis">Antigravity</span>는 Mac에서 마크다운 파일을 예쁘게 보여주는 무료 앱입니다.</p>
                  <ul>
                    <li><strong>App Store</strong>를 열어주세요</li>
                    <li>검색창에 "<strong>Antigravity</strong>"를 입력하세요</li>
                    <li>"Antigravity - Markdown Viewer"를 찾아서 <strong>받기</strong> 버튼을 클릭하세요</li>
                  </ul>
                  <div className="app-store-link">
                    <a href="https://apps.apple.com/app/antigravity-markdown-viewer/id1510131438" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-apple"></i>
                      App Store에서 보기
                    </a>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>기본 앱으로 설정하기</h3>
                  <p>.md 파일을 더블클릭하면 항상 Antigravity로 열리도록 설정합니다.</p>
                  <ul>
                    <li>아무 <strong>.md 파일</strong>을 Finder에서 찾아주세요</li>
                    <li>파일을 <strong>우클릭</strong> (또는 Control + 클릭)</li>
                    <li>"<strong>정보 가져오기</strong>"를 클릭하세요</li>
                    <li>"<strong>다음으로 열기</strong>" 섹션을 찾아서 펼치세요</li>
                    <li>드롭다운에서 "<strong>Antigravity</strong>"를 선택하세요</li>
                    <li>"<strong>모두 변경...</strong>" 버튼을 클릭하세요</li>
                    <li>확인 창에서 "<strong>계속</strong>"을 클릭하세요</li>
                  </ul>
                  <p style={{ marginTop: '16px', color: 'var(--primary)' }}>이제 모든 .md 파일이 Antigravity로 열립니다!</p>
                </div>

                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>파일 열어보기</h3>
                  <p>설정이 완료되면 .md 파일을 더블클릭하면 바로 예쁘게 렌더링된 문서가 보입니다.</p>
                  <div className="comparison">
                    <div className="comparison-item">
                      <div className="comparison-label">텍스트 편집기로 열었을 때</div>
                      <div className="comparison-content raw">
                        # 회의록{'\n'}
                        ## 참석자{'\n'}
                        - 홍길동{'\n'}
                        - 김철수{'\n'}
                        **중요**: 다음 주까지 완료
                      </div>
                    </div>
                    <div className="comparison-arrow">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className="comparison-item">
                      <div className="comparison-label">Antigravity로 열었을 때</div>
                      <div className="comparison-content rendered">
                        <h1 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>회의록</h1>
                        <h2 style={{ fontSize: '1rem', marginBottom: '6px' }}>참석자</h2>
                        <ul style={{ marginLeft: '16px', marginBottom: '8px' }}>
                          <li>홍길동</li>
                          <li>김철수</li>
                        </ul>
                        <strong>중요</strong>: 다음 주까지 완료
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tip-box success">
                <i className="fas fa-lightbulb"></i>
                <div className="tip-content">
                  <h4>VS Code 사용자를 위한 팁</h4>
                  <p>VS Code에서 .md 파일을 열고 <span className="emphasis">Cmd + Shift + V</span>를 누르면 미리보기가 열립니다. 또는 우측 상단의 미리보기 아이콘을 클릭하세요.</p>
                  <div className="shortcut-demo">
                    <code>Cmd</code> + <code>Shift</code> + <code>V</code>
                  </div>
                </div>
              </div>

              <div className="tip-box warning" style={{ marginTop: '20px' }}>
                <i className="fas fa-code"></i>
                <div className="tip-content">
                  <h4>다른 마크다운 뷰어 옵션</h4>
                  <ul style={{ marginTop: '8px' }}>
                    <li><strong>Typora</strong> - 유료, 편집과 미리보기 동시 지원</li>
                    <li><strong>MacDown</strong> - 무료, 오픈소스</li>
                    <li><strong>Marked 2</strong> - 유료, 고급 기능 지원</li>
                  </ul>
                </div>
              </div>
            </>
          ),
          windows: (
            <>
              <div className="steps-container">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>VS Code 설치하기 (추천)</h3>
                  <p><span className="emphasis">VS Code</span>는 무료 코드 편집기로, 마크다운 미리보기 기능이 기본 제공됩니다.</p>
                  <ul>
                    <li>Windows Terminal을 열어주세요</li>
                    <li>아래 명령어를 입력하세요</li>
                  </ul>
                  <div className="command-box" style={{ marginTop: '12px' }}>
                    <div className="command-content">winget install Microsoft.VisualStudioCode</div>
                  </div>
                  <p style={{ marginTop: '16px' }}>또는 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>VS Code 공식 사이트</a>에서 다운로드하세요.</p>
                </div>

                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>기본 앱으로 설정하기</h3>
                  <p>.md 파일을 더블클릭하면 항상 VS Code로 열리도록 설정합니다.</p>
                  <ul>
                    <li>아무 <strong>.md 파일</strong>을 파일 탐색기에서 찾아주세요</li>
                    <li>파일을 <strong>우클릭</strong>하세요</li>
                    <li>"<strong>연결 프로그램</strong>" → "<strong>다른 앱 선택</strong>"을 클릭하세요</li>
                    <li>"<strong>Visual Studio Code</strong>"를 선택하세요</li>
                    <li>"<strong>항상 이 앱을 사용하여 .md 파일 열기</strong>"를 체크하세요</li>
                    <li>"<strong>확인</strong>"을 클릭하세요</li>
                  </ul>
                  <p style={{ marginTop: '16px', color: 'var(--primary)' }}>이제 모든 .md 파일이 VS Code로 열립니다!</p>
                </div>

                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>미리보기 사용하기</h3>
                  <p>VS Code에서 .md 파일을 열고 미리보기를 켜보세요.</p>
                  <div className="shortcut-demo" style={{ marginBottom: '16px' }}>
                    <code>Ctrl</code> + <code>Shift</code> + <code>V</code>
                    <span style={{ color: 'var(--text-muted)', marginLeft: '12px' }}>미리보기 열기</span>
                  </div>
                  <div className="comparison">
                    <div className="comparison-item">
                      <div className="comparison-label">원본 마크다운</div>
                      <div className="comparison-content raw">
                        # 회의록{'\n'}
                        ## 참석자{'\n'}
                        - 홍길동{'\n'}
                        - 김철수{'\n'}
                        **중요**: 다음 주까지 완료
                      </div>
                    </div>
                    <div className="comparison-arrow">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className="comparison-item">
                      <div className="comparison-label">미리보기 화면</div>
                      <div className="comparison-content rendered">
                        <h1 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>회의록</h1>
                        <h2 style={{ fontSize: '1rem', marginBottom: '6px' }}>참석자</h2>
                        <ul style={{ marginLeft: '16px', marginBottom: '8px' }}>
                          <li>홍길동</li>
                          <li>김철수</li>
                        </ul>
                        <strong>중요</strong>: 다음 주까지 완료
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tip-box success">
                <i className="fas fa-lightbulb"></i>
                <div className="tip-content">
                  <h4>나란히 보기 팁</h4>
                  <p><span className="emphasis">Ctrl + K V</span>를 누르면 원본과 미리보기를 나란히 볼 수 있습니다.</p>
                  <div className="shortcut-demo">
                    <code>Ctrl</code> + <code>K</code> 누른 후 <code>V</code>
                  </div>
                </div>
              </div>

              <div className="tip-box warning" style={{ marginTop: '20px' }}>
                <i className="fas fa-code"></i>
                <div className="tip-content">
                  <h4>다른 마크다운 뷰어 옵션</h4>
                  <ul style={{ marginTop: '8px' }}>
                    <li><strong>Typora</strong> - 유료, 편집과 미리보기 동시 지원</li>
                    <li><strong>Obsidian</strong> - 무료, 메모 앱으로도 활용 가능</li>
                    <li><strong>MarkdownPad</strong> - Windows 전용, 무료 버전 있음</li>
                  </ul>
                </div>
              </div>
            </>
          )
        }}
      </OSTabs>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/tips" className="btn btn-secondary" style={{ fontSize: '1rem', padding: '12px 24px' }}>
          <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
          팁 목록으로 돌아가기
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
        .step-card ul {
          padding-left: 24px;
          color: var(--text-muted);
        }
        .step-card li {
          margin-bottom: 8px;
          line-height: 1.6;
        }
        .app-store-link {
          margin-top: 20px;
        }
        .app-store-link a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .app-store-link a:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
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
        .comparison {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 20px;
        }
        .comparison-item {
          flex: 1;
          background: var(--bg-tertiary);
          border-radius: 12px;
          overflow: hidden;
        }
        .comparison-label {
          background: var(--bg-primary);
          padding: 8px 16px;
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: center;
        }
        .comparison-content {
          padding: 16px;
          font-size: 0.9rem;
          min-height: 120px;
        }
        .comparison-content.raw {
          font-family: monospace;
          white-space: pre-line;
          color: var(--text-muted);
        }
        .comparison-content.rendered {
          color: var(--text);
        }
        .comparison-arrow {
          color: var(--primary);
          font-size: 1.5rem;
        }
        .shortcut-demo {
          margin-top: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .shortcut-demo code {
          background: var(--bg-tertiary);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .comparison {
            flex-direction: column;
          }
          .comparison-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </>
  );
}
