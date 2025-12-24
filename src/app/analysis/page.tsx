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
        <p>문서를 분석하고 핵심 내용을 추출합니다.</p>
      </div>

      <div className="card">
        <h3>분석 기능</h3>
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
