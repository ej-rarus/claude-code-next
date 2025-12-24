'use client';

import Link from 'next/link';
import { CommandBox } from '@/components';

export default function Step2Page() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-terminal" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          2단계: iTerm2 설치하기
        </h2>
        <p>더 편한 터미널 프로그램을 설치합니다 (2분 소요)</p>
      </div>

      <div className="tip-box info">
        <i className="fas fa-info-circle"></i>
        <div className="tip-content">
          <h4>왜 iTerm2가 필요한가요?</h4>
          <p>기본 터미널보다 <span className="emphasis">복사/붙여넣기가 쉽고, 여러 창을 나눠서 볼 수 있고, 더 예쁩니다!</span> 업무 효율이 훨씬 좋아져요.</p>
        </div>
      </div>

      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>iTerm2 설치하기</h3>
          <p>1단계에서 설치한 Homebrew를 사용하면 아주 간단합니다!</p>
          <CommandBox command="brew install --cask iterm2" />
          <p style={{ marginTop: '16px' }}>1-2분 기다리면 자동으로 설치됩니다!</p>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3>iTerm2 실행하기</h3>
          <p>설치가 끝났으면 이제 실행해봅시다.</p>
          <ul>
            <li>화면 왼쪽 아래 <strong>런치패드(로켓 모양)</strong> 클릭</li>
            <li>검색창에 "<strong>iterm</strong>" 입력</li>
            <li><strong>iTerm</strong> 앱을 클릭해서 실행</li>
          </ul>
          <p style={{ marginTop: '16px', color: 'var(--primary)' }}>기본 터미널보다 예쁜 창이 열리면 성공!</p>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h3>앞으로는 이걸로 작업하세요</h3>
          <p>이제부터는 기본 터미널 대신 <span className="emphasis">iTerm2</span>를 사용하시면 됩니다.</p>
          <ul>
            <li><strong>복사:</strong> 마우스로 드래그하면 자동 복사</li>
            <li><strong>붙여넣기:</strong> Command + V</li>
            <li><strong>화면 분할:</strong> Command + D (옆으로) / Command + Shift + D (아래로)</li>
            <li><strong>새 탭:</strong> Command + T</li>
          </ul>
          <p style={{ marginTop: '16px' }}><strong>팁:</strong> Dock에 추가해두면 다음부터 쉽게 실행할 수 있어요!</p>
        </div>
      </div>

      <div className="tip-box">
        <i className="fas fa-star"></i>
        <div className="tip-content">
          <h4>Dock에 고정하는 방법</h4>
          <p>iTerm을 실행한 상태에서 → 하단 Dock의 iTerm 아이콘을 <strong>오른쪽 클릭</strong> → "옵션" → "Dock에 유지"를 선택하세요.</p>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/install/step3" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
          마지막 단계로
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
        .step-card ul {
          padding-left: 24px;
          color: var(--gray);
        }
        .step-card li {
          margin-bottom: 8px;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
