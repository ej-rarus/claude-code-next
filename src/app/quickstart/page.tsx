'use client';

import { CommandBox, AccordionItem, OSTabs } from '@/components';

export default function QuickstartPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-rocket" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          빠른 시작
        </h2>
        <p>4단계면 바로 시작할 수 있어요.</p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h4>작업할 폴더 알려주기</h4>
            <p>Claude가 어느 폴더에서 일할지 알려주세요.</p>
            <CommandBox command='/Users/username/Desktop/project 경로에서 작업할거야' />
            <OSTabs>
              {{
                mac: (
                  <div className="tip-box">
                    <i className="fas fa-lightbulb"></i>
                    <div>
                      <strong>팁:</strong> Finder에서 폴더를 터미널로 끌어다 놓으면 경로가 자동으로 입력돼요.
                    </div>
                  </div>
                ),
                windows: (
                  <div className="tip-box">
                    <i className="fas fa-lightbulb"></i>
                    <div>
                      <strong>팁:</strong> 파일 탐색기에서 폴더를 터미널로 끌어다 놓으면 경로가 자동으로 입력돼요.
                    </div>
                  </div>
                )
              }}
            </OSTabs>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h4>파일 확인하기</h4>
            <p>폴더 안에 뭐가 있는지 물어봐요.</p>
            <CommandBox command='현재 폴더에 어떤 파일들이 있어?' />
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h4>시키기</h4>
            <p>하고 싶은 걸 말로 그냥 얘기하세요.</p>
            <CommandBox command='이 PDF 파일을 마크다운으로 변환해줘' />
            <CommandBox command='회의록.txt 파일을 읽고 요약해줘' />
            <CommandBox command='새로운 기획서 초안을 작성해줘' />
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h4>결과 받기</h4>
            <p>결과를 파일로 저장하거나 복사할 수 있어요.</p>
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
            무료는 아니에요. 사용한 만큼 비용이 나가요.
            월 $20짜리 Pro 플랜에 가입하면 넉넉하게 쓸 수 있어요.
          </p>
        </AccordionItem>

        <AccordionItem
          title="어떤 파일 형식을 지원하나요?"
          icon="fa-file"
        >
          <p style={{ color: 'var(--text-muted)' }}>
            PDF, PPT, Word, Excel, 이미지(PNG, JPG), 텍스트 파일 등
            거의 모든 문서 형식을 읽을 수 있어요.
          </p>
        </AccordionItem>

        <AccordionItem
          title="파일 크기 제한이 있나요?"
          icon="fa-weight-hanging"
        >
          <p style={{ color: 'var(--text-muted)' }}>
            파일 하나당 약 100MB까지 처리할 수 있어요.
            아주 큰 파일은 나눠서 보내면 더 잘 돼요.
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
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.3);
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
