'use client';

import { CommandBox } from '@/components';

export default function DocsEditPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-pencil-alt" style={{ color: 'var(--warning)', marginRight: '12px' }}></i>
          문서 수정
        </h2>
        <p>기존 문서를 수정하고 개선합니다.</p>
      </div>

      <div className="card">
        <h3>문서 수정 예시</h3>
        <CommandBox command='이 문서의 오타를 수정해줘' />
        <CommandBox command='문서 형식을 통일해줘' />
        <CommandBox command='내용을 더 간결하게 다듬어줘' />
      </div>

      <style jsx>{`
        .section-header { margin-bottom: 40px; }
        .section-header h2 { font-size: 2rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; }
        .section-header p { color: var(--gray); font-size: 1.1rem; }
        .card { background: var(--dark-light); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 24px; }
        .card h3 { font-size: 1.2rem; font-weight: 600; margin-bottom: 16px; }
      `}</style>
    </>
  );
}
