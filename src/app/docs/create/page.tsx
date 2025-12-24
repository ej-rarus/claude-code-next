'use client';

import { CommandBox } from '@/components';

export default function DocsCreatePage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-plus" style={{ color: 'var(--success)', marginRight: '12px' }}></i>
          새 문서 생성
        </h2>
        <p>다양한 형식의 문서를 자동으로 생성합니다.</p>
      </div>

      <div className="card">
        <h3>문서 생성 예시</h3>
        <CommandBox command='새로운 프로젝트 기획서를 작성해줘' />
        <CommandBox command='회의 안건을 바탕으로 회의록 템플릿을 만들어줘' />
        <CommandBox command='README.md 파일을 만들어줘' />
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
        .card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
        }
        .card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
      `}</style>
    </>
  );
}
