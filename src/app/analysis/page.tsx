'use client';

import { CommandBox } from '@/components';

export default function AnalysisPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-search" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          문서 분석
        </h2>
        <p>긴 문서를 요약하거나, 중요한 내용만 뽑아줘요.</p>
      </div>

      <div className="card">
        <h3>이렇게 써보세요</h3>
        <CommandBox command='이 문서를 3문장으로 요약해줘' />
        <CommandBox command='핵심 키워드를 추출해줘' />
        <CommandBox command='두 문서를 비교 분석해줘' />
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
