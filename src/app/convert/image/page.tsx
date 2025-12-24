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
        <p>이미지에서 텍스트를 추출합니다 (OCR).</p>
      </div>

      <div className="card">
        <h3>기본 사용법</h3>
        <p style={{ color: 'var(--gray)', marginBottom: '16px' }}>
          이미지 파일에서 텍스트를 추출합니다.
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
          color: var(--gray);
          font-size: 1.1rem;
        }
        .card {
          background: var(--dark-light);
          border: 1px solid rgba(255, 255, 255, 0.1);
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
