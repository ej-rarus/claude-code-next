'use client';

import Link from 'next/link';
import { CommandBox } from '@/components';

export default function BasicPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-play-circle" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          기본 사용법
        </h2>
        <p>AI에게 일 시키는 방법 3단계</p>
      </div>

      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>iTerm 열고 Claude 실행</h3>
          <p>매번 작업할 때마다 이렇게 시작하세요.</p>
          <CommandBox command="claude" />
          <p style={{ marginTop: '16px' }}>프롬프트(▶)가 나오면 준비 완료!</p>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3>작업 폴더 알려주기</h3>
          <p>어떤 폴더에서 작업할지 먼저 알려주세요.</p>
          <div className="command-box" style={{ marginTop: '12px' }}>
            <div className="command-content">
              ~/Desktop/회사업무 폴더에서 작업할 거야
            </div>
          </div>
          <p style={{ marginTop: '16px' }}><strong>팁:</strong> 폴더 경로는 Finder에서 폴더를 드래그해서 터미널에 놓으면 자동으로 입력돼요!</p>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h3>하고 싶은 일 말하기</h3>
          <p>이제 원하는 작업을 <span className="emphasis">일상 대화처럼</span> 말하면 됩니다!</p>
          <div className="command-box" style={{ marginTop: '12px' }}>
            <div className="command-content">
              발표자료.pptx 파일 읽고 마크다운으로 정리해줘
            </div>
          </div>
          <p style={{ marginTop: '16px' }}>AI가 자동으로 파일을 읽고 작업합니다!</p>
        </div>
      </div>

      <h3 style={{ margin: '60px 0 24px' }}>자주 쓰는 명령어 패턴</h3>

      <div className="cards-grid">
        <div className="card">
          <h3>파일 변환</h3>
          <div className="command-box">
            <div className="command-content" style={{ padding: '16px', fontSize: '0.9rem' }}>
              "이 PPT 읽고 워드로 정리해줘"<br/><br/>
              "이미지.png 속 글자 추출해줘"<br/><br/>
              "PDF 파일 요약해줘"
            </div>
          </div>
        </div>

        <div className="card">
          <h3>데이터 분석</h3>
          <div className="command-box">
            <div className="command-content" style={{ padding: '16px', fontSize: '0.9rem' }}>
              "엑셀 파일 분석해줘"<br/><br/>
              "매출 합계 계산해줘"<br/><br/>
              "상위 10개 항목 표로 만들어줘"
            </div>
          </div>
        </div>

        <div className="card">
          <h3>문서 작성</h3>
          <div className="command-box">
            <div className="command-content" style={{ padding: '16px', fontSize: '0.9rem' }}>
              "회의록 양식 만들어줘"<br/><br/>
              "이 내용으로 기획서 작성해줘"<br/><br/>
              "보고서 초안 작성해줘"
            </div>
          </div>
        </div>

        <div className="card">
          <h3>반복 작업</h3>
          <div className="command-box">
            <div className="command-content" style={{ padding: '16px', fontSize: '0.9rem' }}>
              "파일 100개 이름 바꿔줘"<br/><br/>
              "모든 이미지 크기 조정해줘"<br/><br/>
              "문서 10개 합쳐줘"
            </div>
          </div>
        </div>
      </div>

      <div className="tip-box info" style={{ marginTop: '40px' }}>
        <i className="fas fa-magic"></i>
        <div className="tip-content">
          <h4>더 좋은 결과를 얻으려면?</h4>
          <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
            <li style={{ marginBottom: '8px' }}>구체적으로 말하기: "PPT 정리" → "PPT를 제목별로 나눠서 정리"</li>
            <li style={{ marginBottom: '8px' }}>파일 이름 명확히: "문서.docx" → "2024_연간보고서.docx"</li>
            <li style={{ marginBottom: '8px' }}>원하는 형식 말하기: "표로 정리" / "리스트로 정리" / "요약해줘"</li>
            <li>친절하게 대화하기: AI도 친절한 말투를 좋아해요!</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/examples" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
          실전 예시 보기
          <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
        </Link>
      </div>

      <style jsx>{`
        .steps-container {
          display: grid;
          gap: 24px;
          margin: 40px 0;
        }
        .step-card {
          background: var(--dark-light);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px;
          position: relative;
          transition: all 0.3s ease;
        }
        .step-card:hover {
          transform: translateX(10px);
          border-color: var(--primary);
        }
        .step-number {
          position: absolute;
          top: -15px;
          left: 32px;
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
        }
        .step-card h3 {
          margin-bottom: 16px;
          font-size: 1.4rem;
        }
        .step-card p {
          color: var(--gray);
          margin-bottom: 20px;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        .card {
          background: var(--dark-light);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }
        .card h3 {
          font-size: 1.1rem;
          margin-bottom: 16px;
        }
        .command-box {
          background: #0d1117;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
        }
        .command-content {
          color: var(--accent);
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.9rem;
          padding: 16px;
        }
      `}</style>
    </>
  );
}
