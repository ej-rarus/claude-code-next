'use client';

import { CommandBox } from '@/components';

// Metadata moved to layout or removed for client component

export default function ConvertPdfPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-file-pdf" style={{ color: 'var(--danger)', marginRight: '12px' }}></i>
          PDF → 마크다운
        </h2>
        <p>PDF 문서를 편집 가능한 마크다운 형식으로 변환합니다.</p>
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3>기본 사용법</h3>
        <p style={{ color: 'var(--gray)', marginBottom: '16px' }}>
          PDF 파일 경로를 지정하고 변환을 요청하세요.
        </p>
        <CommandBox command='document.pdf 파일을 마크다운으로 변환해줘' />
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3>고급 옵션</h3>
        <p style={{ color: 'var(--gray)', marginBottom: '16px' }}>
          특정 페이지만 변환하거나 표 형식을 유지할 수 있습니다.
        </p>
        <CommandBox command='report.pdf의 1-5페이지만 마크다운으로 변환해줘' />
        <CommandBox command='이 PDF의 표를 마크다운 테이블로 변환해줘' />
      </div>

      <div className="tip-box">
        <i className="fas fa-lightbulb"></i>
        <div>
          <strong>팁:</strong> 스캔된 PDF의 경우 OCR이 자동으로 적용됩니다.
          이미지가 많은 PDF는 변환 시간이 더 걸릴 수 있습니다.
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

        .tip-box {
          display: flex;
          gap: 16px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 12px;
          padding: 20px;
          margin-top: 24px;
        }

        .tip-box i {
          color: var(--primary);
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
}
