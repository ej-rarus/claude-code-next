'use client';

import Link from 'next/link';

export default function Step0Page() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-info-circle" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          0단계: 시작하기 전에
        </h2>
        <p>설치할 프로그램들이 무엇인지, 왜 필요한지 알아봅시다 (2분 소요)</p>
      </div>

      <div className="tip-box success">
        <i className="fas fa-lightbulb"></i>
        <div className="tip-content">
          <h4>이 가이드를 따라하면</h4>
          <p>여러분의 컴퓨터에 <span className="emphasis">AI 비서</span>가 생깁니다. 이 AI는 웹사이트에서 사용하는 Claude와 달리, <span className="emphasis">여러분의 모든 파일에 직접 접근</span>할 수 있어요!</p>
        </div>
      </div>

      <div style={{ marginTop: '32px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--white)' }}>뭘 설치하는 건가요?</h3>

        <div className="step-card">
          <h3>1. Homebrew (홈브루)</h3>
          <p style={{ marginBottom: '12px' }}><span className="emphasis">프로그램 설치 도우미</span>입니다.</p>
          <ul style={{ color: 'var(--gray)', marginTop: '8px' }}>
            <li>Mac에 프로그램을 쉽게 설치할 수 있게 해줍니다</li>
            <li>앱스토어에 없는 개발 도구들도 간단한 명령어로 설치 가능</li>
            <li>비유: "프로그램 자동 설치 기계"</li>
          </ul>
          <div style={{ marginTop: '16px', padding: '16px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
            <p style={{ color: 'var(--white)', fontWeight: 500, marginBottom: '4px' }}>왜 필요한가요?</p>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>iTerm2와 Claude Code를 간편하게 설치하기 위해 먼저 설치합니다.</p>
          </div>
        </div>

        <div className="step-card">
          <h3>2. iTerm2 (아이텀2)</h3>
          <p style={{ marginBottom: '12px' }}><span className="emphasis">향상된 터미널 프로그램</span>입니다.</p>
          <ul style={{ color: 'var(--gray)', marginTop: '8px' }}>
            <li>Mac 기본 터미널보다 편리하고 보기 좋습니다</li>
            <li>복사/붙여넣기가 쉽고, 화면 분할도 가능</li>
            <li>비유: "컴퓨터에게 글자로 명령을 내리는 창"</li>
          </ul>
          <div style={{ marginTop: '16px', padding: '16px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ color: 'var(--white)', fontWeight: 500, marginBottom: '4px' }}>왜 필요한가요?</p>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>Claude Code를 실행하고 AI와 대화하기 위한 창입니다. Mac 기본 터미널도 사용 가능하지만 iTerm2가 훨씬 편합니다.</p>
          </div>
        </div>

        <div className="step-card">
          <h3>3. Claude Code (클로드 코드)</h3>
          <p style={{ marginBottom: '12px' }}><span className="emphasis">여러분 컴퓨터의 AI 비서</span>입니다.</p>
          <ul style={{ color: 'var(--gray)', marginTop: '8px' }}>
            <li>Anthropic의 Claude AI를 터미널에서 사용하는 도구</li>
            <li>자연어로 명령하면 파일 읽기/쓰기/수정을 자동으로 실행</li>
            <li>문서 작성, 파일 변환, 정보 추출 등 다양한 작업 수행</li>
          </ul>
          <div style={{ marginTop: '16px', padding: '16px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--secondary)' }}>
            <p style={{ color: 'var(--white)', fontWeight: 500, marginBottom: '4px' }}>왜 필요한가요?</p>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>우리의 최종 목표! 이것을 사용하기 위해 앞의 두 프로그램을 설치하는 것입니다.</p>
          </div>
          <div style={{ marginTop: '16px', padding: '16px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '8px', borderLeft: '3px solid #f59e0b' }}>
            <p style={{ color: '#f59e0b', fontWeight: 600, marginBottom: '4px' }}>중요: 유료 플랜 필요</p>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>Claude Code는 <strong style={{ color: 'var(--white)' }}>Claude Pro 또는 Team 유료 플랜</strong> 사용자만 이용 가능합니다. 무료 계정으로는 사용할 수 없습니다.</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--white)' }}>Claude Code, 왜 사용해야 하나요?</h3>

        <div className="tip-box info">
          <i className="fas fa-star"></i>
          <div className="tip-content">
            <h4>핵심: 로컬 파일에 직접 접근 가능!</h4>
            <p>웹 브라우저에서 사용하는 Claude와 가장 큰 차이점은 <span className="emphasis">여러분 컴퓨터의 파일들을 직접 읽고 수정할 수 있다</span>는 것입니다.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '24px' }}>
          <div className="card" style={{ background: 'var(--dark-light)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', borderRadius: '12px' }}>
            <div style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <i className="fas fa-globe" style={{ fontSize: '1.2rem' }}></i>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--white)' }}>웹 버전 Claude</h3>
            <ul style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li>파일을 <strong>일일이 업로드</strong>해야 함</li>
              <li>한 번에 <strong>제한된 개수</strong>의 파일만</li>
              <li>수정된 파일을 <strong>다시 다운로드</strong>해야 함</li>
              <li>폴더 구조를 <strong>이해하지 못함</strong></li>
            </ul>
          </div>

          <div className="card" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))', border: '2px solid var(--primary)', padding: '24px', borderRadius: '12px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--success)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>추천!</div>
            <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <i className="fas fa-laptop-code" style={{ fontSize: '1.2rem' }}></i>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--white)' }}>로컬 Claude Code</h3>
            <ul style={{ color: 'var(--white)', fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li>파일을 <strong>즉시 읽고 수정</strong></li>
              <li><strong>여러 파일을 동시에</strong> 처리</li>
              <li>수정 결과가 <strong>자동으로 저장</strong>됨</li>
              <li><strong>폴더 전체를 탐색</strong>하고 이해함</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '32px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--white)' }}>실제 사용 예시</h4>
          <div style={{ background: 'var(--dark-light)', borderRadius: '12px', padding: '24px', borderLeft: '4px solid var(--success)' }}>
            <p style={{ color: 'var(--white)', fontWeight: 500, marginBottom: '16px' }}>상황: 프로젝트 폴더에 있는 10개의 Markdown 파일을 모두 읽고 하나의 보고서로 정리하고 싶다면?</p>

            <div style={{ display: 'grid', gap: '16px' }}>
              <div>
                <p style={{ color: '#ef4444', fontWeight: 600, marginBottom: '8px' }}>웹 Claude</p>
                <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>1. 파일 10개를 찾아서 업로드<br/>2. AI가 분석<br/>3. 결과를 복사해서 새 파일에 붙여넣기<br/>4. 파일을 저장하고 관리</p>
              </div>

              <div>
                <p style={{ color: 'var(--success)', fontWeight: 600, marginBottom: '8px' }}>Claude Code</p>
                <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>1. "이 폴더의 모든 .md 파일을 읽고 report.md로 정리해줘" 한 줄 입력<br/>2. 끝! (AI가 파일을 찾아 읽고, 정리하고, 저장까지 자동으로 완료)</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '32px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--white)' }}>보안도 더 안전합니다</h4>
          <ul style={{ color: 'var(--gray)', lineHeight: '1.8' }}>
            <li>파일이 여러분의 컴퓨터를 <span className="emphasis">벗어나지 않습니다</span></li>
            <li>필요한 부분만 AI 서버로 전송되며, 파일 자체는 로컬에 보관</li>
            <li>민감한 정보가 포함된 파일도 안심하고 작업 가능</li>
          </ul>
        </div>
      </div>

      <div className="tip-box success" style={{ marginTop: '48px' }}>
        <i className="fas fa-check-circle"></i>
        <div className="tip-content">
          <h4>준비되셨나요?</h4>
          <p>이제 <span className="emphasis">Homebrew 설치</span>부터 시작해봅시다!</p>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/install/step1" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
          다음 단계로
          <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
        </Link>
      </div>

      <style jsx>{`
        .step-card {
          background: var(--dark-light);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 20px;
        }
        .step-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: var(--white);
        }
        .card {
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </>
  );
}
