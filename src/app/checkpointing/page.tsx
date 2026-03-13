'use client';

import { CommandBox } from '@/components';

export default function CheckpointingPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-history" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          체크포인팅
        </h2>
        <p>코드 변경을 자동으로 추적하고, 언제든 이전 상태로 되돌리세요.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          체크포인팅이란?
        </h3>
        <p className="description">
          Claude Code가 파일을 수정할 때마다 <strong>자동으로 체크포인트</strong>를 생성해요.
          작업이 잘못된 방향으로 갔을 때 <strong>빠르게 이전 상태로 되돌릴 수</strong> 있어요.
          대규모 리팩토링도 안심하고 시도하세요!
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-save"></i></div>
            <div className="feature-content">
              <h4>자동 추적</h4>
              <p>매 프롬프트마다 자동으로 체크포인트를 생성해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-undo-alt"></i></div>
            <div className="feature-content">
              <h4>쉬운 되돌리기</h4>
              <p>Esc 두 번으로 원하는 시점으로 되돌아가요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-compress-alt"></i></div>
            <div className="feature-content">
              <h4>대화 요약</h4>
              <p>특정 시점부터 대화를 요약해서 컨텍스트를 절약해요.</p>
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
        <p><strong>Esc</strong>를 두 번 누르거나 <code>/rewind</code> 명령을 입력하세요.</p>
        <CommandBox command="/rewind" />
        <p style={{ marginTop: '12px' }}>스크롤 가능한 프롬프트 목록이 표시돼요. 원하는 시점을 선택한 후 액션을 고르세요.</p>

        <div className="comparison-table" style={{ marginTop: '16px' }}>
          <table>
            <thead>
              <tr>
                <th>액션</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Restore code and conversation</strong></td>
                <td>코드와 대화 모두 해당 시점으로 되돌리기</td>
              </tr>
              <tr>
                <td><strong>Restore conversation</strong></td>
                <td>대화만 되돌리기 (현재 코드 유지)</td>
              </tr>
              <tr>
                <td><strong>Restore code</strong></td>
                <td>코드만 되돌리기 (대화 유지)</td>
              </tr>
              <tr>
                <td><strong>Summarize from here</strong></td>
                <td>해당 시점 이후의 대화를 요약으로 압축</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Restore vs Summarize */}
      <div className="card">
        <h3>
          <i className="fas fa-exchange-alt" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          되돌리기 vs 요약
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>기능</th>
                <th>Restore</th>
                <th>Summarize</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>코드 변경</strong></td><td>코드를 이전 상태로 되돌림</td><td>코드 변경 없음</td></tr>
              <tr><td><strong>대화 내용</strong></td><td>선택한 시점 이후 삭제</td><td>요약으로 압축</td></tr>
              <tr><td><strong>컨텍스트</strong></td><td>줄어듦</td><td>줄어듦 (더 효율적)</td></tr>
              <tr><td><strong>원본 보존</strong></td><td>-</td><td>세션 기록에 보존됨</td></tr>
            </tbody>
          </table>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <span><strong>Summarize</strong>는 <code>/compact</code>와 비슷하지만, 특정 시점부터만 압축해요. 앞부분은 그대로 유지!</span>
        </div>
      </div>

      {/* 활용 사례 */}
      <div className="card">
        <h3>
          <i className="fas fa-lightbulb" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          활용 사례
        </h3>
        <div className="tip-box">
          <i className="fas fa-code-branch"></i>
          <span><strong>대안 탐색</strong>: 여러 구현 방식을 시도하면서 시작점으로 언제든 복귀</span>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-bug"></i>
          <span><strong>실수 복구</strong>: 버그가 생긴 변경사항을 빠르게 되돌리기</span>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-compress-alt"></i>
          <span><strong>컨텍스트 절약</strong>: 긴 디버깅 세션을 중간부터 요약해서 공간 확보</span>
        </div>
      </div>

      {/* 제한사항 */}
      <div className="card">
        <h3>
          <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px', color: 'var(--warning)' }}></i>
          제한사항
        </h3>
        <ul>
          <li><strong>bash 명령</strong>으로 변경된 파일은 추적되지 않아요 (rm, mv, cp 등)</li>
          <li>Claude Code <strong>외부에서 수정한 파일</strong>은 추적되지 않아요</li>
          <li>체크포인트는 <strong>30일 후 자동 삭제</strong>돼요 (설정 변경 가능)</li>
          <li>세션 간에 체크포인트가 유지되지만, <strong>Git을 대체하지는 않아요</strong></li>
        </ul>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-info-circle"></i>
          <span>체크포인트는 <strong>"로컬 Undo"</strong>이고, Git은 <strong>"영구 히스토리"</strong>예요. 둘 다 사용하세요!</span>
        </div>
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
