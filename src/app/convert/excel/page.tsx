'use client';

import { CommandBox } from '@/components';

export default function ConvertExcelPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-file-excel" style={{ color: 'var(--success)', marginRight: '12px' }}></i>
          Excel → 테이블
        </h2>
        <p>Excel 데이터를 마크다운 테이블로 변환합니다.</p>
      </div>

      <div className="card">
        <h3>기본 사용법</h3>
        <CommandBox command='data.xlsx를 마크다운 테이블로 변환해줘' />
        <CommandBox command='이 엑셀의 Sheet2만 테이블로 만들어줘' />
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
          margin-bottom: 16px;
        }
      `}</style>
    </>
  );
}
