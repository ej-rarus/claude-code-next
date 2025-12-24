'use client';

import Link from 'next/link';
import { CommandBox } from '@/components';

export default function Step3Page() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-robot" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          3단계: Claude AI 설치하기
        </h2>
        <p>드디어! AI 비서를 설치합니다 (5분 소요)</p>
      </div>

      <div className="tip-box info">
        <i className="fas fa-robot"></i>
        <div className="tip-content">
          <h4>Claude가 뭔가요?</h4>
          <p>ChatGPT처럼 대화하는 AI인데, <span className="emphasis">내 컴퓨터 파일을 직접 읽고 작업할 수 있어요!</span> PPT 변환, 문서 정리, 데이터 분석 등을 대화하듯이 시킬 수 있습니다.</p>
        </div>
      </div>

      <div className="tip-box warning">
        <i className="fas fa-exclamation-triangle"></i>
        <div className="tip-content">
          <h4>설치 전 확인 필수!</h4>
          <p>Claude Code는 <span className="emphasis">유료 플랜(Claude Pro 또는 Team)</span> 사용자만 이용할 수 있습니다. 무료 계정으로는 설치해도 사용할 수 없으니 주의하세요!</p>
          <p style={{ marginTop: '8px' }}>유료 플랜: 월 $20 (Claude Pro) 또는 월 $30/인 (Team)</p>
        </div>
      </div>

      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Claude 설치하기</h3>
          <p>iTerm2를 열고 아래 명령어를 입력하세요.</p>
          <CommandBox command="brew install --cask claude-code" />
          <p style={{ marginTop: '16px' }}>2-3분 기다리면 설치 완료!</p>

          <div className="tip-box info" style={{ marginTop: '16px' }}>
            <i className="fas fa-sync-alt"></i>
            <div className="tip-content">
              <h4>터미널 재시작 필요!</h4>
              <p>설치 후 <span className="emphasis">터미널을 완전히 종료(Command + Q)했다가 다시 열어주세요.</span> 그래야 <code>claude</code> 명령어가 인식됩니다.</p>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3>계정 만들기 (무료)</h3>
          <p>Claude를 사용하려면 Anthropic 계정이 필요해요. <span className="emphasis">무료</span>로 만들 수 있습니다!</p>
          <ol style={{ paddingLeft: '24px', color: 'var(--gray)', marginTop: '12px' }}>
            <li style={{ marginBottom: '12px' }}>
              <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>여기를 클릭</a>해서 Anthropic 사이트로 이동
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>"Sign Up"</strong> 또는 <strong>"계정 만들기"</strong> 클릭
            </li>
            <li style={{ marginBottom: '12px' }}>
              이메일 주소와 비밀번호 입력
            </li>
            <li>
              이메일로 온 인증 링크 클릭하면 끝!
            </li>
          </ol>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h3>로그인하기</h3>
          <p>이제 내 컴퓨터의 Claude와 계정을 연결합니다.</p>
          <CommandBox command="claude auth login" />
          <ul style={{ marginTop: '16px' }}>
            <li><strong>브라우저가 자동으로 열립니다</strong> (Safari, Chrome 등)</li>
            <li>방금 만든 계정으로 <strong>로그인</strong></li>
            <li>"Claude Code 접근 허용" 같은 버튼이 나오면 <strong>"허용"</strong> 클릭</li>
            <li>"인증 완료" 메시지가 보이면 → 터미널로 돌아오세요</li>
          </ul>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <h3>첫 대화 해보기!</h3>
          <p>드디어 AI와 대화할 준비가 끝났어요! 간단히 테스트해봅시다.</p>
          <CommandBox command="claude" />
          <p style={{ marginTop: '16px' }}>이제 아무거나 질문해보세요!</p>
          <div className="command-box" style={{ marginTop: '12px' }}>
            <div className="command-content">
              안녕? 내 이름은 김철수야. 기억해줘!
            </div>
          </div>
          <p style={{ marginTop: '16px', color: 'var(--primary)', fontWeight: 600 }}>AI가 답변하면 설치 완료!</p>
        </div>
      </div>

      <div className="tip-box" style={{ background: 'linear-gradient(135deg, rgba(32, 236, 138, 0.2), rgba(160, 255, 209, 0.2))', borderColor: 'var(--primary)' }}>
        <i className="fas fa-trophy"></i>
        <div className="tip-content">
          <h4>축하합니다!</h4>
          <p>모든 설치가 완료되었습니다! 이제 실제 업무에 활용하는 방법을 배워봅시다.</p>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/install/basic" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
          사용법 배우기
          <i className="fas fa-graduation-cap" style={{ marginLeft: '8px' }}></i>
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
        .step-card ul, .step-card ol {
          padding-left: 24px;
          color: var(--gray);
        }
        .step-card li {
          margin-bottom: 8px;
          line-height: 1.6;
        }
        .command-box {
          background: #0d1117;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 16px 20px;
        }
        .command-content {
          color: var(--accent);
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}
