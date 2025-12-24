'use client';

import Link from 'next/link';

export default function Home() {
  const stats = [
    { icon: 'fa-file-alt', number: '10+', label: '지원 파일 형식' },
    { icon: 'fa-bolt', number: '100x', label: '작업 속도 향상' },
    { icon: 'fa-cogs', number: '50+', label: '자동화 명령어' },
    { icon: 'fa-check-circle', number: '24/7', label: '언제든 사용 가능' },
  ];

  const features = [
    {
      href: '/convert/pdf',
      icon: 'fa-exchange-alt',
      title: '파일 변환',
      description: 'PPT, PDF, 이미지, Excel 등 다양한 파일을 마크다운으로 변환합니다.',
      tags: ['PPT', 'PDF', 'OCR'],
    },
    {
      href: '/docs/create',
      icon: 'fa-file-signature',
      title: '문서 생성',
      description: '회의록, 기획서, API 문서 등 다양한 형식의 문서를 자동으로 생성합니다.',
      tags: ['회의록', '기획서', '템플릿'],
    },
    {
      href: '/analysis',
      icon: 'fa-chart-bar',
      title: '문서 분석',
      description: '긴 문서를 요약하고, 핵심 내용을 추출하며, 문서 간 비교 분석을 수행합니다.',
      tags: ['요약', '비교', '추출'],
    },
    {
      href: '/web',
      icon: 'fa-globe',
      title: '웹 정보 수집',
      description: '웹 페이지 내용을 분석하고, 최신 정보를 검색하여 문서화합니다.',
      tags: ['크롤링', '검색', '분석'],
    },
    {
      href: '/automation',
      icon: 'fa-robot',
      title: '자동화',
      description: '여러 파일 일괄 처리, 패턴 기반 수정 등 반복 작업을 자동화합니다.',
      tags: ['일괄처리', '패턴', '스크립트'],
    },
    {
      href: '/tips',
      icon: 'fa-lightbulb',
      title: '팁 & 트릭',
      description: 'Claude Code를 더 효율적으로 사용하기 위한 유용한 팁들을 확인하세요.',
      tags: ['클립보드', '단축키', '효율'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            <i className="fas fa-sparkles"></i>
            AI-Powered Document Assistant
          </span>
          <h1>
            Claude Code
            <br />
            가이드
          </h1>
          <p>
            AI와 함께하는 스마트한 문서 작업. 파일 변환, 문서 생성, 자동화까지 모든
            것을 한 곳에서.
          </p>
          <div className="hero-buttons">
            <Link href="/quickstart" className="btn btn-primary">
              <i className="fas fa-play"></i>
              시작하기
            </Link>
            <Link href="/examples" className="btn btn-ghost">
              <i className="fas fa-book"></i>
              예시 보기
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <i className={`fas ${stat.icon}`}></i>
            <div className="number">{stat.number}</div>
            <div className="label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="section-header">
        <h2>주요 기능</h2>
        <p>Claude Code로 할 수 있는 다양한 문서 작업을 살펴보세요.</p>
      </div>

      <div className="cards-grid">
        {features.map((feature, index) => (
          <Link key={index} href={feature.href} className="card">
            <div className="card-icon">
              <i className={`fas ${feature.icon}`}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="card-tags">
              {feature.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          border-radius: 24px;
          padding: 80px 60px;
          margin-bottom: 40px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 600px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99, 102, 241, 0.2);
          color: var(--primary);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 60px;
        }

        .stat-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
        }

        .stat-card i {
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .stat-card .number {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-card .label {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-top: 4px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .section-header p {
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }

        .card:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px var(--shadow-color);
        }

        .card-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .card-icon i {
          font-size: 1.5rem;
          color: var(--primary);
        }

        .card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero {
            padding: 60px 40px;
          }

          .hero h1 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding: 40px 24px;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
