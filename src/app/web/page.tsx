'use client';

import { CommandBox } from '@/components';

export default function WebPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-globe" style={{ color: 'var(--accent)', marginRight: '12px' }}></i>
          웹 정보 수집
        </h2>
        <p>웹 페이지에서 정보를 수집하고 문서화합니다.</p>
      </div>

      <div className="card">
        <h3>웹 수집 기능</h3>
        <CommandBox command='이 URL의 내용을 요약해줘' />
        <CommandBox command='최신 뉴스를 검색해서 정리해줘' />
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
