'use client';

import { CommandBox } from '@/components';

export default function TipsPage() {
  const tips = [
    {
      title: '클립보드 활용',
      icon: 'fa-clipboard',
      badge: { text: '필수', type: 'success' as const },
      content: '결과물을 바로 클립보드에 복사하여 다른 앱에 붙여넣기할 수 있습니다.',
      command: '방금 결과 클립보드에 복사해줘',
    },
    {
      title: '파일 경로 단축',
      icon: 'fa-folder',
      badge: { text: '효율', type: 'primary' as const },
      content: 'Finder에서 파일을 터미널로 드래그하면 전체 경로가 자동 입력됩니다.',
    },
    {
      title: '작업 이어하기',
      icon: 'fa-history',
      badge: { text: '생산성', type: 'warning' as const },
      content: '이전 대화 내용을 기억하므로 "아까 그 파일" 같은 표현으로 이어서 작업할 수 있습니다.',
      command: '아까 변환한 파일에서 표만 추출해줘',
    },
    {
      title: '일괄 처리',
      icon: 'fa-layer-group',
      badge: { text: '자동화', type: 'primary' as const },
      content: '여러 파일을 한 번에 처리할 수 있습니다.',
      command: '이 폴더의 모든 PDF를 마크다운으로 변환해줘',
    },
  ];

  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-star" style={{ color: 'var(--warning)', marginRight: '12px' }}></i>
          유용한 팁
        </h2>
        <p>Claude Code를 더 효율적으로 사용하기 위한 팁들입니다.</p>
      </div>

      <div className="tips-list">
        {tips.map((tip, index) => (
          <div key={index} className="tip-card">
            <div className="tip-header">
              <div className="tip-icon">
                <i className={`fas ${tip.icon}`}></i>
              </div>
              <div className="tip-title">
                <h3>{tip.title}</h3>
                <span className={`badge badge-${tip.badge.type}`}>
                  {tip.badge.text}
                </span>
              </div>
            </div>
            <p className="tip-content">{tip.content}</p>
            {tip.command && <CommandBox command={tip.command} />}
          </div>
        ))}
      </div>

      <div className="shortcuts-section">
        <h3>
          <i className="fas fa-keyboard" style={{ marginRight: '12px' }}></i>
          유용한 단축키
        </h3>
        <div className="shortcuts-grid">
          <div className="shortcut-item">
            <span>클립보드 복사</span>
            <code>Cmd + C</code>
          </div>
          <div className="shortcut-item">
            <span>붙여넣기</span>
            <code>Cmd + V</code>
          </div>
          <div className="shortcut-item">
            <span>PDF로 저장</span>
            <code>Cmd + P</code>
          </div>
          <div className="shortcut-item">
            <span>파일 → 클립보드</span>
            <code>cat file | pbcopy</code>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
        }

        .section-header p {
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 48px;
        }

        .tip-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .tip-card:hover {
          border-color: var(--primary);
        }

        .tip-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .tip-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tip-icon i {
          font-size: 1.3rem;
          color: var(--primary);
        }

        .tip-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tip-title h3 {
          font-size: 1.2rem;
          font-weight: 600;
        }

        .tip-content {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 16px;
        }

        .shortcuts-section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
        }

        .shortcuts-section h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }

        .shortcuts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .shortcut-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: var(--bg-tertiary);
          border-radius: 8px;
        }

        .shortcut-item code {
          background: var(--bg-primary);
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          color: var(--accent);
        }

        @media (max-width: 640px) {
          .shortcuts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
