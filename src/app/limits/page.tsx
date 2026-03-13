'use client';

export default function LimitsPage() {
  const canDo = [
    'PDF, PPT, Word, Excel 파일을 텍스트로 바꾸기',
    '긴 문서 요약하기',
    '새 문서 만들기, 기존 문서 수정하기',
    '웹사이트 내용 읽어오기, 인터넷 검색',
    '여러 파일을 한꺼번에 바꾸기',
    '마크다운, JSON, CSV 등 형식 바꾸기',
    '터미널 명령어 실행 (Git 등)',
    'MCP로 외부 서비스 연결 (Slack, DB, 브라우저 등)',
    'Desktop 앱으로 터미널 없이 사용하기',
    'Web(claude.ai/code)에서 브라우저로 사용하기',
    'Fast Mode로 2.5배 빠른 응답 받기',
    '서브에이전트 / 에이전트 팀으로 병렬 작업',
    '체크포인트로 작업 되돌리기 (Esc×2)',
    '반복 스케줄 작업 (/loop)',
    'Chrome 확장으로 웹페이지 컨텍스트 전달',
    'Slack에서 Claude Code 세션 실행',
  ];

  const cantDo = [
    '동영상이나 음악 파일 편집',
    '포토샵 같은 그래픽 작업',
    '프로그램(.exe) 직접 만들기',
    '인터넷 없이 사용하기',
    '아주 큰 파일 (영상, 게임 등) 처리',
    '실시간 화면 공유나 원격 데스크톱 조작',
  ];

  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-info-circle" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          가능/불가능
        </h2>
        <p>Claude Code가 할 수 있는 것과 못 하는 것을 알아봐요.</p>
      </div>

      <div className="limits-grid">
        <div className="limit-card can">
          <h3>
            <i className="fas fa-check-circle"></i>
            할 수 있는 것
          </h3>
          <ul>
            {canDo.map((item, index) => (
              <li key={index}>
                <i className="fas fa-check"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="limit-card cant">
          <h3>
            <i className="fas fa-times-circle"></i>
            할 수 없는 것
          </h3>
          <ul>
            {cantDo.map((item, index) => (
              <li key={index}>
                <i className="fas fa-times"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .section-header { margin-bottom: 40px; }
        .section-header h2 { font-size: 2rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; }
        .section-header p { color: var(--text-muted); font-size: 1.1rem; }

        .limits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .limit-card {
          background: var(--bg-secondary);
          border-radius: 16px;
          padding: 24px;
        }

        .limit-card.can {
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .limit-card.cant {
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .limit-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .limit-card.can h3 { color: var(--success); }
        .limit-card.cant h3 { color: var(--danger); }

        .limit-card ul {
          list-style: none;
          padding: 0;
        }

        .limit-card li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-light);
          color: var(--text-muted);
        }

        .limit-card li:last-child {
          border-bottom: none;
        }

        .limit-card.can li i { color: var(--success); }
        .limit-card.cant li i { color: var(--danger); }

        @media (max-width: 768px) {
          .limits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
