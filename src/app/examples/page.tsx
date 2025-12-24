'use client';

import { CommandBox } from '@/components';

export default function ExamplesPage() {
  const examples = [
    {
      title: '회의록 작성',
      icon: 'fa-users',
      description: '녹음 파일이나 메모를 기반으로 정리된 회의록을 생성합니다.',
      commands: [
        '회의_메모.txt를 읽고 공식 회의록 형식으로 정리해줘',
        '결정사항과 액션아이템을 테이블로 정리해줘',
      ],
    },
    {
      title: 'API 문서 생성',
      icon: 'fa-code',
      description: '코드를 분석하여 API 문서를 자동으로 생성합니다.',
      commands: [
        'src/api 폴더의 모든 엔드포인트를 문서화해줘',
        'Swagger 형식으로 API 스펙을 만들어줘',
      ],
    },
    {
      title: '보고서 요약',
      icon: 'fa-file-alt',
      description: '긴 보고서를 핵심 내용만 추출하여 요약합니다.',
      commands: [
        '이 100페이지 보고서를 3페이지로 요약해줘',
        '핵심 수치와 결론만 추출해줘',
      ],
    },
    {
      title: '다국어 번역',
      icon: 'fa-language',
      description: '문서를 다른 언어로 번역합니다.',
      commands: [
        '이 문서를 영어로 번역해줘',
        '기술 용어는 원문 그대로 유지해줘',
      ],
    },
  ];

  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-lightbulb" style={{ color: 'var(--warning)', marginRight: '12px' }}></i>
          실전 예시
        </h2>
        <p>실제 업무에서 활용할 수 있는 Claude Code 사용 예시입니다.</p>
      </div>

      <div className="examples-grid">
        {examples.map((example, index) => (
          <div key={index} className="example-card">
            <div className="example-header">
              <div className="example-icon">
                <i className={`fas ${example.icon}`}></i>
              </div>
              <h3>{example.title}</h3>
            </div>
            <p className="example-desc">{example.description}</p>
            <div className="example-commands">
              {example.commands.map((cmd, cmdIndex) => (
                <CommandBox key={cmdIndex} command={cmd} />
              ))}
            </div>
          </div>
        ))}
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

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .example-card {
          background: var(--dark-light);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .example-card:hover {
          border-color: var(--primary);
        }

        .example-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .example-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .example-icon i {
          font-size: 1.3rem;
          color: var(--primary);
        }

        .example-header h3 {
          font-size: 1.2rem;
          font-weight: 600;
        }

        .example-desc {
          color: var(--gray);
          font-size: 0.95rem;
          margin-bottom: 16px;
        }

        @media (max-width: 768px) {
          .examples-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
