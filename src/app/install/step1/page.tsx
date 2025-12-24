'use client';

import Link from 'next/link';
import { CommandBox } from '@/components';

export default function Step1Page() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-download" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          1단계: Homebrew 설치하기
        </h2>
        <p>프로그램 설치를 쉽게 도와주는 도구를 설치합니다 (3분 소요)</p>
      </div>

      <div className="tip-box info">
        <i className="fas fa-info-circle"></i>
        <div className="tip-content">
          <h4>Homebrew가 뭔가요?</h4>
          <p>Mac에서 프로그램을 쉽게 설치할 수 있게 해주는 <span className="emphasis">설치 도우미</span>입니다. 앱스토어가 아닌 프로그램들을 간단한 명령어로 설치할 수 있게 해줍니다.</p>
        </div>
      </div>

      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>터미널 열기</h3>
          <p><span className="emphasis">터미널</span>은 컴퓨터에게 글자로 명령을 내리는 프로그램입니다. Mac에 기본으로 설치되어 있어요.</p>
          <ul>
            <li>화면 오른쪽 위 <strong>돋보기 아이콘</strong>을 클릭하거나</li>
            <li>키보드에서 <strong>Command + Space</strong>를 누르세요</li>
            <li>"<strong>터미널</strong>" 또는 "<strong>Terminal</strong>"이라고 입력하고 Enter</li>
          </ul>
          <p style={{ marginTop: '16px', color: 'var(--primary)' }}>검은색 창이 열리면 성공입니다!</p>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3>설치 명령어 복사하기</h3>
          <p>아래 회색 박스 오른쪽의 <span className="emphasis">복사 버튼</span>을 클릭하세요.</p>
          <CommandBox command='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"' />
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h3>터미널에 붙여넣고 실행</h3>
          <p>복사한 명령어를 터미널 창에 <span className="emphasis">붙여넣기(Command + V)</span>하고 <strong>Enter</strong>를 누르세요.</p>
          <ul>
            <li>비밀번호를 입력하라고 나오면 → <strong>Mac 로그인 비밀번호</strong>를 입력하세요 (화면에 안 보여도 입력되고 있어요!)</li>
            <li>설치가 시작되면 → 2-3분 기다리세요 (자동으로 진행됩니다)</li>
            <li>"Installation successful!"이 보이면 → 완료!</li>
          </ul>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <h3>설치 확인하기</h3>
          <p>제대로 설치되었는지 확인해봅시다.</p>
          <CommandBox command="brew --version" />
          <p style={{ marginTop: '16px' }}>숫자가 나오면 <span style={{ color: 'var(--primary)', fontWeight: 600 }}>성공!</span></p>
        </div>
      </div>

      <div className="tip-box warning">
        <i className="fas fa-exclamation-triangle"></i>
        <div className="tip-content">
          <h4>M1, M2, M3 칩 Mac 사용자는 한 단계 더!</h4>
          <p>최신 Mac(2020년 이후)을 사용하신다면 아래 명령어도 실행해주세요.</p>
          <div style={{ marginTop: '12px' }}>
            <CommandBox command="echo 'export PATH=/opt/homebrew/bin:$PATH' >> ~/.zshrc && source ~/.zshrc" />
          </div>
        </div>
      </div>

      <div className="tip-box info" style={{ marginTop: '20px' }}>
        <i className="fas fa-sync-alt"></i>
        <div className="tip-content">
          <h4>터미널 재시작 필요!</h4>
          <p>Homebrew 설치 후 <span className="emphasis">터미널을 완전히 종료했다가 다시 열어주세요.</span></p>
          <ul style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
            <li>터미널 창을 닫는 것만으로는 부족합니다</li>
            <li><strong>Command + Q</strong>를 눌러 터미널 앱 자체를 종료하세요</li>
            <li>다시 터미널(또는 iTerm2)을 열고 다음 단계를 진행하세요</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/install/step2" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
          다음 단계로
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
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          position: relative;
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
          color: #ffffff;
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
          color: var(--text-muted);
          margin-bottom: 20px;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .step-card ul {
          padding-left: 24px;
          color: var(--text-muted);
        }
        .step-card li {
          margin-bottom: 8px;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
