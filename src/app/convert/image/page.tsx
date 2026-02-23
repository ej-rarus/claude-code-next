'use client';

import { CommandBox } from '@/components';

export default function ConvertImagePage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-image" style={{ color: 'var(--accent)', marginRight: '12px' }}></i>
          이미지 → 텍스트
        </h2>
        <p>사진이나 스크린샷에서 글자를 읽어내요.</p>
      </div>

      <div className="card">
        <h3>기본 사용법</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
          사진 속 글자를 텍스트로 뽑아줘요.
        </p>
        <CommandBox command='screenshot.png에서 텍스트를 추출해줘' />
        <CommandBox command='이 사진의 영수증 내용을 텍스트로 변환해줘' />
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
          margin-bottom: 8px;
        }
      `}</style>
    </>
  );
}
