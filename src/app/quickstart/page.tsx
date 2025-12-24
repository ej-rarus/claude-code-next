'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function QuickstartPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-rocket" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          빠른 시작
        </h2>
        <p>4단계로 Claude Code 문서 작업을 시작하세요.</p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h4>작업 폴더 지정</h4>
            <p>먼저 작업할 폴더 경로를 알려주세요.</p>
            <CommandBox command='/Users/username/Desktop/project 경로에서 작업할거야' />
            <div className="tip-box">
              <i className="fas fa-lightbulb"></i>
              <div>
                <strong>팁:</strong> Finder에서 폴더를 터미널로 드래그하면 경로가 자동으로 입력됩니다.
              </div>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h4>파일 확인</h4>
            <p>폴더 내 파일 목록을 확인합니다.</p>
            <CommandBox command='현재 폴더에 어떤 파일들이 있어?' />
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h4>작업 요청</h4>
            <p>원하는 작업을 자연어로 요청하세요.</p>
            <CommandBox command='이 PDF 파일을 마크다운으로 변환해줘' />
            <CommandBox command='회의록.txt 파일을 읽고 요약해줘' />
            <CommandBox command='새로운 기획서 초안을 작성해줘' />
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h4>결과 활용</h4>
            <p>결과물을 파일로 저장하거나 클립보드에 복사합니다.</p>
            <CommandBox command='결과를 output.md 파일로 저장해줘' />
            <CommandBox command='방금 결과 클립보드에 복사해줘' />
          </div>
        </div>
      </div>

      <div className="section-header" style={{ marginTop: '60px' }}>
        <h2>자주 묻는 질문</h2>
      </div>

      <div className="accordion">
        <AccordionItem
          title="Claude Code는 무료인가요?"
          icon="fa-dollar-sign"
          defaultOpen={true}
        >
          <p style={{ color: 'var(--text-muted)' }}>
            Claude Code는 Anthropic의 API 사용량에 따라 과금됩니다.
            월 $20의 Pro 플랜에 가입하면 더 많은 사용량을 제공받을 수 있습니다.
          </p>
        </AccordionItem>

        <AccordionItem
          title="어떤 파일 형식을 지원하나요?"
          icon="fa-file"
        >
          <p style={{ color: 'var(--text-muted)' }}>
            PDF, PPT, Word, Excel, 이미지(PNG, JPG), 텍스트 파일 등
            대부분의 일반적인 문서 형식을 지원합니다.
          </p>
        </AccordionItem>

        <AccordionItem
          title="파일 크기 제한이 있나요?"
          icon="fa-weight-hanging"
        >
          <p style={{ color: 'var(--text-muted)' }}>
            단일 파일은 약 100MB까지 처리할 수 있습니다.
            매우 큰 파일의 경우 분할하여 처리하는 것을 권장합니다.
          </p>
        </AccordionItem>
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

        .steps {
          margin-bottom: 40px;
        }

        .step {
          display: flex;
          gap: 24px;
          margin-bottom: 40px;
        }

        .step-number {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .step-content {
          flex: 1;
        }

        .step-content h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .step-content p {
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .tip-box {
          display: flex;
          gap: 16px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 12px;
          padding: 16px 20px;
          margin-top: 16px;
        }

        .tip-box i {
          color: var(--primary);
          font-size: 1.1rem;
        }

        .accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
      `}</style>
    </>
  );
}
