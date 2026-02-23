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
        <p>PDF 파일 내용을 텍스트로 바꿔서 편집할 수 있게 해줘요.</p>
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3>기본 사용법</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
          PDF 파일 이름을 말하고 변환해달라고 하면 돼요.
        </p>
        <CommandBox command='document.pdf 파일을 마크다운으로 변환해줘' />
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3>이런 것도 돼요</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
          원하는 페이지만 골라서 변환할 수도 있어요.
        </p>
        <CommandBox command='report.pdf의 1-5페이지만 마크다운으로 변환해줘' />
        <CommandBox command='이 PDF의 표를 마크다운 테이블로 변환해줘' />
      </div>

      <div className="tip-box">
        <i className="fas fa-lightbulb"></i>
        <div>
          <strong>팁:</strong> 사진으로 찍은 PDF도 글자를 읽어내요 (OCR 기능).
          그림이 많은 PDF는 시간이 좀 더 걸릴 수 있어요.
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

        .tip-box {
          display: flex;
          gap: 16px;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.3);
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
