'use client';

import { CommandBox } from '@/components';

export default function ConvertPptPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-file-powerpoint" style={{ color: '#D35230', marginRight: '12px' }}></i>
          PPT → Markdown 변환
        </h2>
        <p>파워포인트 파일의 텍스트를 추출하여 마크다운 문서로 변환합니다.</p>
      </div>

      <div className="command-section">
        <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>기본 명령어</h3>

        <div style={{ marginBottom: '24px' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>기본 변환</p>
          <CommandBox command="이 PPT 파일 마크다운으로 변환해줘" />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>특정 파일 지정</p>
          <CommandBox command="바이오스펙트럼_디자인요청서.pptx 내용 MD로 정리해줘" />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>특정 슬라이드만</p>
          <CommandBox command="PPT에서 3~5번 슬라이드만 추출해줘" />
        </div>

        <h3 style={{ fontSize: '1.3rem', marginTop: '48px', marginBottom: '20px' }}>변환 결과물</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>PPT 요소</th>
                <th>변환 결과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>슬라이드 제목</td>
                <td><code># 제목</code> 또는 <code>## 소제목</code></td>
              </tr>
              <tr>
                <td>본문 텍스트</td>
                <td>일반 텍스트 또는 리스트</td>
              </tr>
              <tr>
                <td>표</td>
                <td>마크다운 테이블</td>
              </tr>
              <tr>
                <td>이미지</td>
                <td>이미지 설명 텍스트</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box info" style={{ marginTop: '32px' }}>
          <i className="fas fa-info-circle"></i>
          <div className="tip-content">
            <h4>참고</h4>
            <p>PPT 내의 이미지는 텍스트로 변환되지 않지만, 이미지 파일을 별도로 분석해달라고 요청하면 내용을 설명해드릴 수 있습니다.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .command-section {
          margin-top: 40px;
        }
        .table-container {
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          background: var(--bg-secondary);
          border-radius: 12px;
          overflow: hidden;
        }
        th, td {
          padding: 16px 20px;
          text-align: left;
          border-bottom: 1px solid var(--border-color);
        }
        th {
          background: rgba(99, 102, 241, 0.1);
          font-weight: 600;
          color: var(--text-primary);
        }
        td {
          color: var(--text-muted);
        }
        tr:last-child td {
          border-bottom: none;
        }
        code {
          background: var(--bg-tertiary);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.9rem;
          color: var(--accent);
        }
      `}</style>
    </>
  );
}
