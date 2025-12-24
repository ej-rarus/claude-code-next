'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  const [activeTab, setActiveTab] = useState<'quickstart' | 'faq'>('quickstart');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickstartSteps = [
    { step: 1, title: '작업 폴더 지정', desc: '작업할 폴더 경로를 알려주세요' },
    { step: 2, title: '파일 확인', desc: '폴더 내 파일 목록 확인' },
    { step: 3, title: '작업 요청', desc: '원하는 작업을 자연어로 요청' },
    { step: 4, title: '결과 활용', desc: '파일 저장 또는 클립보드 복사' },
  ];

  const faqs = [
    {
      q: 'Claude Code는 무료인가요?',
      a: 'API 사용량에 따라 과금됩니다. Pro 플랜($20/월)으로 더 많은 사용량을 받을 수 있습니다.',
    },
    {
      q: '어떤 파일 형식을 지원하나요?',
      a: 'PDF, PPT, Word, Excel, 이미지(PNG, JPG), 텍스트 파일 등 대부분의 문서 형식을 지원합니다.',
    },
    {
      q: '파일 크기 제한이 있나요?',
      a: '단일 파일 약 100MB까지 처리 가능합니다. 큰 파일은 분할 처리를 권장합니다.',
    },
    {
      q: '한국어도 잘 이해하나요?',
      a: '네, Claude는 한국어를 매우 잘 이해합니다. 자연스러운 한국어로 대화하시면 됩니다.',
    },
  ];

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>
              <i className="fas fa-question-circle" style={{ marginRight: '12px', color: 'var(--primary)' }}></i>
              도움말
            </h2>
            <button className="close-btn" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="tabs">
            <button
              className={`tab ${activeTab === 'quickstart' ? 'active' : ''}`}
              onClick={() => setActiveTab('quickstart')}
            >
              <i className="fas fa-rocket"></i>
              빠른 시작
            </button>
            <button
              className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => setActiveTab('faq')}
            >
              <i className="fas fa-comments"></i>
              자주 묻는 질문
            </button>
          </div>

          <div className="modal-body">
            {activeTab === 'quickstart' && (
              <div className="quickstart-content">
                <p className="intro">4단계로 Claude Code를 시작하세요:</p>
                <div className="steps-list">
                  {quickstartSteps.map((item) => (
                    <div key={item.step} className="step-item">
                      <div className="step-number">{item.step}</div>
                      <div className="step-info">
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/quickstart" className="more-link" onClick={onClose}>
                  자세히 보기
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="faq-content">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <div className="faq-question">
                      <i className="fas fa-question"></i>
                      {faq.q}
                    </div>
                    <div className="faq-answer">{faq.a}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="modal-footer">
            <Link href="/examples" className="footer-link" onClick={onClose}>
              <i className="fas fa-lightbulb"></i>
              실전 예시 보기
            </Link>
            <Link href="/tips" className="footer-link" onClick={onClose}>
              <i className="fas fa-star"></i>
              유용한 팁
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          width: 90%;
          max-width: 520px;
          max-height: 85vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-header h2 {
          font-size: 1.3rem;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 1.2rem;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .tabs {
          display: flex;
          padding: 0 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .tab {
          flex: 1;
          padding: 16px;
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          transition: all 0.2s ease;
        }

        .tab:hover {
          color: var(--text-primary);
        }

        .tab.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
        }

        .modal-body {
          padding: 24px;
          overflow-y: auto;
          flex: 1;
        }

        .intro {
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: var(--bg-secondary);
          border-radius: 12px;
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .step-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .step-info strong {
          font-size: 0.95rem;
        }

        .step-info span {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .more-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
        }

        .more-link:hover {
          text-decoration: underline;
        }

        .faq-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          padding: 16px;
          background: var(--bg-secondary);
          border-radius: 12px;
        }

        .faq-question {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .faq-question i {
          width: 24px;
          height: 24px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          color: white;
        }

        .faq-answer {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          padding-left: 36px;
        }

        .modal-footer {
          display: flex;
          gap: 12px;
          padding: 16px 24px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }

        .footer-link {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: 8px;
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .footer-link:hover {
          background: var(--primary);
          color: white;
        }

        .footer-link i {
          color: var(--warning);
        }

        .footer-link:hover i {
          color: white;
        }
      `}</style>
    </>
  );
}
