'use client';

import { CommandBox } from '@/components';

export default function DocsTemplatePage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-copy" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          템플릿 활용
        </h2>
        <p>미리 만들어둔 틀에 맞춰서 문서를 빠르게 만들어줘요.</p>
      </div>

      <div className="card">
        <h3>이렇게 써보세요</h3>
        <CommandBox command='회의록 템플릿을 적용해서 문서를 만들어줘' />
        <CommandBox command='기존 템플릿에 이 내용을 채워줘' />
      </div>

      <style jsx>{`
        .section-header { margin-bottom: 40px; }
        .section-header h2 { font-size: 2rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; }
        .section-header p { color: var(--text-muted); font-size: 1.1rem; }
        .card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; padding: 24px; }
        .card h3 { font-size: 1.2rem; font-weight: 600; margin-bottom: 16px; }
      `}</style>
    </>
  );
}
