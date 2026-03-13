'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function DesktopPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-desktop" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          데스크탑 앱
        </h2>
        <p>터미널 없이도 Claude Code를 사용할 수 있는 독립 앱이에요.</p>
      </div>

      {/* 데스크탑 앱이란? */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          데스크탑 앱이란?
        </h3>
        <p className="description">
          Claude Code <strong>데스크탑 앱</strong>은 터미널이나 IDE 밖에서 Claude Code를 사용할 수 있게 해주는 <strong>독립 실행 프로그램</strong>이에요.
          코드 변경사항을 시각적으로 확인하고, 여러 작업을 동시에 처리하고, 반복 작업을 예약할 수 있어요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-code-compare"></i>
            </div>
            <div className="feature-content">
              <h4>시각적 Diff 리뷰</h4>
              <p>코드 변경사항을 파일별로 시각적으로 비교하고 댓글을 달 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-eye"></i>
            </div>
            <div className="feature-content">
              <h4>앱 프리뷰</h4>
              <p>개발 서버를 실행하고 내장 브라우저에서 바로 확인할 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-columns"></i>
            </div>
            <div className="feature-content">
              <h4>병렬 세션</h4>
              <p>여러 작업을 동시에 진행할 수 있어요. Git Worktree로 충돌 없이!</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="feature-content">
              <h4>예약 작업</h4>
              <p>반복 작업을 스케줄링해서 자동으로 실행할 수 있어요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 설치 */}
      <div className="card">
        <h3>
          <i className="fas fa-download" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          설치하기
        </h3>
        <p className="description">운영체제에 맞는 버전을 다운로드하세요.</p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>운영체제</th>
                <th>지원 사양</th>
                <th>다운로드</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>macOS</strong></td>
                <td>Intel + Apple Silicon</td>
                <td><code>claude.ai</code>에서 다운로드</td>
              </tr>
              <tr>
                <td><strong>Windows x64</strong></td>
                <td>64비트</td>
                <td><code>claude.ai</code>에서 다운로드</td>
              </tr>
              <tr>
                <td><strong>Windows ARM64</strong></td>
                <td>ARM 프로세서</td>
                <td>원격 세션만 가능</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box" style={{ marginTop: '16px' }}>
          <i className="fas fa-lightbulb"></i>
          <span>설치 후 Claude를 실행하고 로그인한 뒤, <strong>Code</strong> 탭을 클릭하면 코딩을 시작할 수 있어요.</span>
        </div>
      </div>

      {/* 주요 기능 */}
      <div className="card">
        <h3>
          <i className="fas fa-star" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          주요 기능
        </h3>

        <AccordionItem title="Diff 리뷰 (코드 변경 확인)" icon="fa-code-compare">
          <p>Claude가 코드를 수정하면, 변경사항이 <strong>Diff 뷰</strong>로 표시돼요.</p>
          <ul>
            <li>파일별로 추가/삭제된 줄을 확인할 수 있어요</li>
            <li>특정 줄을 클릭해서 댓글을 달 수 있어요</li>
            <li><strong>Cmd+Enter</strong> (Mac) / <strong>Ctrl+Enter</strong> (Windows)로 모든 댓글을 한번에 제출</li>
            <li>Claude가 댓글을 읽고 자동으로 수정해요</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="앱 프리뷰 (내장 브라우저)" icon="fa-eye">
          <p>Claude가 개발 서버를 실행하고 내장 브라우저에서 결과를 확인해요.</p>
          <ul>
            <li>프론트엔드 웹앱은 물론, 백엔드 API도 테스트 가능</li>
            <li>Claude가 자동으로 스크린샷을 찍고, DOM을 검사하고, 문제를 수정해요</li>
            <li><strong>세션 유지</strong> 옵션으로 서버 재시작 후에도 로그인 상태 유지</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="PR 모니터링" icon="fa-code-branch">
          <p>GitHub Pull Request 상태를 실시간으로 확인하고 자동 수정할 수 있어요.</p>
          <ul>
            <li>PR 생성 후 리뷰 상태 모니터링</li>
            <li>CI 실패 시 자동 수정 (auto-fix)</li>
            <li>승인 후 자동 병합 (auto-merge) 옵션</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="커넥터 (외부 도구 연결)" icon="fa-plug">
          <p>GitHub, Slack, Linear 등 외부 서비스를 직접 연결할 수 있어요.</p>
          <ul>
            <li>프롬프트 박스의 <strong>+</strong> 버튼으로 추가</li>
            <li>MCP 서버 없이도 외부 서비스 연동 가능</li>
          </ul>
        </AccordionItem>
      </div>

      {/* 권한 모드 */}
      <div className="card">
        <h3>
          <i className="fas fa-shield-alt" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          권한 모드
        </h3>
        <p className="description">Claude가 얼마나 자율적으로 작업할지 설정할 수 있어요.</p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>모드</th>
                <th>파일 수정</th>
                <th>명령 실행</th>
                <th>추천 상황</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ask (기본)</strong></td>
                <td>매번 확인</td>
                <td>매번 확인</td>
                <td>처음 사용할 때</td>
              </tr>
              <tr>
                <td><strong>Auto-accept</strong></td>
                <td>자동 승인</td>
                <td>매번 확인</td>
                <td>파일 수정을 신뢰할 때</td>
              </tr>
              <tr>
                <td><strong>Plan</strong></td>
                <td>불가</td>
                <td>불가</td>
                <td>계획만 세울 때</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box" style={{ marginTop: '16px' }}>
          <i className="fas fa-lightbulb"></i>
          <span>복잡한 작업은 <strong>Plan 모드</strong>로 계획을 먼저 세우고, 승인 후 <strong>Auto-accept</strong>로 실행하는 것이 좋아요.</span>
        </div>
      </div>

      {/* CLI에서 데스크탑으로 */}
      <div className="card">
        <h3>
          <i className="fas fa-exchange-alt" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          터미널에서 데스크탑으로 전환
        </h3>
        <p className="description">
          터미널에서 작업 중에 데스크탑 앱으로 전환할 수 있어요.
        </p>
        <CommandBox command="/desktop" />
        <p style={{ marginTop: '8px' }}>
          또는 <code>/app</code>으로도 같은 동작이에요. 현재 세션이 데스크탑 앱에서 열려요.
        </p>
      </div>

      {/* 환경 설정 */}
      <div className="card">
        <h3>
          <i className="fas fa-cog" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          실행 환경
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>환경</th>
                <th>설명</th>
                <th>용도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Local</strong></td>
                <td>내 컴퓨터에서 실행</td>
                <td>기본. 모든 파일과 도구에 접근 가능</td>
              </tr>
              <tr>
                <td><strong>Remote</strong></td>
                <td>클라우드에서 실행</td>
                <td>긴 작업, 로컬에 없는 레포 작업</td>
              </tr>
              <tr>
                <td><strong>SSH</strong></td>
                <td>원격 서버 연결</td>
                <td>내가 관리하는 서버에서 실행</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
        .feature-content h4 {
          margin: 0 0 4px;
          font-size: 0.95rem;
        }
        .feature-content p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
      `}</style>
    </>
  );
}
