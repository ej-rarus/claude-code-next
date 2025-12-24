'use client';

export default function LimitsPage() {
  const canDo = [
    '텍스트 기반 파일 변환 (PDF, PPT, Word, Excel)',
    '문서 요약 및 분석',
    '새 문서 작성 및 편집',
    '웹 페이지 정보 수집',
    '파일 일괄 처리',
    '마크다운, JSON, CSV 등 형식 변환',
  ];

  const cantDo = [
    '실시간 동영상/오디오 처리',
    '복잡한 그래픽 디자인 작업',
    '실행 파일(.exe) 생성',
    '데이터베이스 직접 접근',
    '외부 서버 접속 (SSH 등)',
    '민감한 개인정보 처리',
  ];

  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-info-circle" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          가능/불가능
        </h2>
        <p>Claude Code의 기능 범위를 확인하세요.</p>
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
