'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function ScheduledTasksPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-clock" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          예약 작업 (/loop)
        </h2>
        <p>프롬프트를 자동으로 반복 실행하거나, 나중에 실행되도록 예약하세요.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          예약 작업이란?
        </h3>
        <p className="description">
          <strong>/loop</strong> 명령을 사용하면 프롬프트를 <strong>주기적으로 자동 실행</strong>할 수 있어요.
          배포 상태 확인, PR 모니터링, 빌드 체크 등을 자동화하세요.
          작업은 세션이 끝나면 사라지는 <strong>세션 범위</strong>예요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-redo"></i></div>
            <div className="feature-content">
              <h4>반복 실행</h4>
              <p>5분/30분/1시간 등 원하는 간격으로 프롬프트를 반복해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-bell"></i></div>
            <div className="feature-content">
              <h4>일회성 알림</h4>
              <p>"3시에 릴리스 브랜치 푸시해" 같은 리마인더도 가능해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-layer-group"></i></div>
            <div className="feature-content">
              <h4>명령 루프</h4>
              <p>다른 Skill이나 명령을 주기적으로 실행할 수 있어요.</p>
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

        <AccordionItem title="반복 실행 (/loop)" icon="fa-sync-alt" defaultOpen>
          <p><code>/loop</code> 뒤에 간격과 프롬프트를 입력하세요.</p>
          <CommandBox command="/loop 5m 배포가 완료됐는지 확인하고 결과 알려줘" />
          <p style={{ marginTop: '12px' }}>간격을 생략하면 기본 10분 간격이에요.</p>
          <CommandBox command="/loop 빌드 상태 확인해줘" />
          <p style={{ marginTop: '12px' }}>다른 명령을 루프할 수도 있어요.</p>
          <CommandBox command="/loop 20m /review-pr 1234" />
        </AccordionItem>

        <AccordionItem title="일회성 리마인더" icon="fa-bell">
          <p>자연어로 리마인더를 설정하세요.</p>
          <CommandBox command="3시에 릴리스 브랜치 푸시하라고 알려줘" />
          <CommandBox command="45분 후에 통합 테스트 통과했는지 확인해줘" />
        </AccordionItem>

        <AccordionItem title="작업 관리" icon="fa-list-ul">
          <p>자연어로 예약된 작업을 확인하고 취소할 수 있어요.</p>
          <CommandBox command="예약된 작업 목록 보여줘" />
          <CommandBox command="배포 체크 작업 취소해줘" />
        </AccordionItem>
      </div>

      {/* 간격 문법 */}
      <div className="card">
        <h3>
          <i className="fas fa-stopwatch" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          간격 문법
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>형식</th>
                <th>예시</th>
                <th>간격</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>앞에 붙이기</td><td><code>/loop 30m 빌드 확인</code></td><td>30분마다</td></tr>
              <tr><td>뒤에 every 붙이기</td><td><code>/loop 빌드 확인 every 2h</code></td><td>2시간마다</td></tr>
              <tr><td>간격 생략</td><td><code>/loop 빌드 확인</code></td><td>기본 10분마다</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '12px' }}>지원 단위: <code>s</code>(초), <code>m</code>(분), <code>h</code>(시간), <code>d</code>(일). 초 단위는 1분으로 올림 처리돼요.</p>
      </div>

      {/* 동작 방식 */}
      <div className="card">
        <h3>
          <i className="fas fa-cogs" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          동작 방식
        </h3>
        <ul>
          <li>예약된 프롬프트는 <strong>Claude가 대기 중일 때</strong> 실행돼요 (응답 중에는 대기)</li>
          <li>모든 시간은 <strong>로컬 타임존</strong> 기준이에요</li>
          <li>반복 작업은 <strong>3일 후 자동 만료</strong>돼요</li>
          <li>세션당 최대 <strong>50개</strong> 예약 작업이 가능해요</li>
        </ul>
      </div>

      {/* 제한사항 */}
      <div className="card">
        <h3>
          <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px', color: 'var(--warning)' }}></i>
          제한사항
        </h3>
        <ul>
          <li>Claude Code가 실행 중이고 대기 상태일 때만 작동해요</li>
          <li>터미널을 닫으면 모든 예약 작업이 취소돼요</li>
          <li>세션 재시작 시 예약 작업은 유지되지 않아요</li>
          <li>놓친 실행은 다시 실행되지 않아요 (catch-up 없음)</li>
        </ul>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-info-circle"></i>
          <span>영구적인 스케줄링이 필요하면 <strong>Desktop 앱의 예약 작업</strong>이나 <strong>GitHub Actions</strong>를 사용하세요.</span>
        </div>
      </div>

      {/* 비활성화 */}
      <div className="card">
        <h3>
          <i className="fas fa-ban" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          비활성화
        </h3>
        <p>예약 작업 기능을 완전히 끄려면 환경 변수를 설정하세요.</p>
        <CommandBox command="CLAUDE_CODE_DISABLE_CRON=1" />
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
