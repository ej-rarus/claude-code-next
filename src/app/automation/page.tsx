'use client';

import { CommandBox } from '@/components';

export default function AutomationPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-magic" style={{ color: 'var(--secondary)', marginRight: '12px' }}></i>
          자동화
        </h2>
        <p>반복적인 작업을 자동화합니다.</p>
      </div>

      <div className="card">
        <h3>자동화 기능</h3>
        <CommandBox command='이 폴더의 모든 .txt 파일을 .md로 변환해줘' />
        <CommandBox command='모든 문서에서 "2023"을 "2024"로 바꿔줘' />
        <CommandBox command='매일 실행할 수 있는 스크립트를 만들어줘' />
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
