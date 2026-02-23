'use client';

import { AccordionItem, CommandBox } from '@/components';

export default function ClaudeMdPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-file-code" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          CLAUDE.md — 내 AI 맞춤 설정
        </h2>
        <p>"항상 한국어로 답해줘" 같은 내 습관을 Claude에게 알려주는 파일이에요.</p>
      </div>

      {/* 핵심 개념 — 비유로 설명 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          한 줄 요약
        </h3>
        <p className="description" style={{ marginBottom: '16px' }}>
          CLAUDE.md는 <strong>"Claude에게 붙여주는 포스트잇"</strong>이에요.<br/>
          매번 "한국어로 답해줘", "파일명은 영어로 해줘" 이런 말 반복하기 귀찮잖아요?<br/>
          이걸 파일에 한 번 적어두면, <strong>Claude가 매번 자동으로 읽고 기억</strong>해요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-brain"></i>
            </div>
            <div className="feature-content">
              <h4>자동으로 읽어요</h4>
              <p>대화 시작하면 알아서 읽어요. 매번 알려줄 필요 없어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-edit"></i>
            </div>
            <div className="feature-content">
              <h4>그냥 텍스트예요</h4>
              <p>특별한 형식 없이 메모장처럼 적으면 돼요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 가장 먼저: 전역 설정 */}
      <div className="card highlight-card">
        <h3>
          <i className="fas fa-star" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          먼저 해보세요: 내 기본 습관 설정하기
        </h3>
        <p className="description">
          제일 많이 쓰는 건 <strong>"내 컴퓨터 전체에 적용되는 설정"</strong>이에요.<br/>
          한 번만 적어두면 어떤 폴더에서 Claude를 열든 항상 적용돼요.
        </p>

        <div className="steps-container">
          <div className="step-item">
            <div className="step-num">1</div>
            <div className="step-content">
              <h4>터미널에서 파일 만들기</h4>
              <p>아래 명령어를 복사해서 터미널에 붙여넣으세요.</p>
              <CommandBox command="touch ~/.claude/CLAUDE.md && open ~/.claude/CLAUDE.md" />
              <p className="note">Mac 기준이에요. 텍스트 편집기가 열리면 성공!</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-num">2</div>
            <div className="step-content">
              <h4>내가 원하는 규칙 적기</h4>
              <p>열린 파일에 아래처럼 적고 저장하세요. 원하는 내용을 자유롭게 수정해도 돼요.</p>
              <div className="code-block">
                <div className="code-header">
                  <span>~/.claude/CLAUDE.md (내 전체 설정)</span>
                </div>
                <pre>{`# 내 Claude 설정

## 기본 규칙
- 항상 한국어로 답해줘
- 존댓말 대신 편한 말투로 해줘
- 설명은 짧고 핵심만

## 파일 작업
- 파일 이름은 영어로 만들어줘
- 파일 수정 전에 꼭 물어봐줘
- 결과물은 바탕화면에 저장해줘`}</pre>
              </div>
            </div>
          </div>

          <div className="step-item">
            <div className="step-num">3</div>
            <div className="step-content">
              <h4>끝! 이제 자동으로 적용돼요</h4>
              <p>다음에 Claude를 실행하면 이 설정을 자동으로 읽고, 내가 적은 규칙대로 동작해요.</p>
            </div>
          </div>
        </div>

        <div className="tip-box success">
          <i className="fas fa-check-circle"></i>
          <div>
            <strong>이게 전부예요!</strong> 비개발자분은 여기까지만 해도 충분해요.
            아래 내용은 "프로젝트별로 다른 규칙을 쓰고 싶을 때" 참고하세요.
          </div>
        </div>
      </div>

      {/* 다양한 예시 — 비개발자 친화 */}
      <div className="card">
        <h3>
          <i className="fas fa-pen" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          이런 것도 적을 수 있어요
        </h3>

        <AccordionItem title="예시: 문서 작업 스타일" defaultOpen>
          <div className="code-block">
            <div className="code-header">
              <span>~/.claude/CLAUDE.md</span>
            </div>
            <pre>{`# 내 Claude 설정

## 문서 스타일
- 보고서는 1장 분량으로 요약해줘
- 제목은 굵게, 소제목은 번호 매겨줘
- 전문 용어 쓸 때는 괄호로 쉬운 설명 넣어줘

## 번역
- 영어→한국어 번역 시 자연스러운 한국어로
- 고유명사는 번역하지 말고 영어 그대로 써줘`}</pre>
          </div>
        </AccordionItem>

        <AccordionItem title="예시: 데이터 정리 습관">
          <div className="code-block">
            <div className="code-header">
              <span>~/.claude/CLAUDE.md</span>
            </div>
            <pre>{`# 내 Claude 설정

## 엑셀/데이터 작업
- 날짜 형식은 2026-01-01 (YYYY-MM-DD)로 통일
- 금액에는 천 단위 쉼표 넣어줘 (예: 1,000,000원)
- CSV 파일은 UTF-8로 저장해줘

## 파일 정리
- 결과 파일명: 원본이름_결과_날짜.확장자
- 예: 매출보고_요약_20260223.md`}</pre>
          </div>
        </AccordionItem>

        <AccordionItem title="예시: 개발자용 프로젝트 규칙">
          <div className="code-block">
            <div className="code-header">
              <span>프로젝트 폴더/CLAUDE.md</span>
            </div>
            <pre>{`# 프로젝트 규칙

## 코딩 규칙
- TypeScript 사용, strict 모드
- 함수는 화살표 함수로
- 커밋 메시지는 한국어로

## 폴더 구조
- src/app/ — 페이지
- src/components/ — 공통 컴포넌트
- src/lib/ — 유틸리티 함수`}</pre>
          </div>
        </AccordionItem>
      </div>

      {/* 파일 위치 — 심화 */}
      <div className="card">
        <h3>
          <i className="fas fa-folder-open" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          심화: 여러 곳에 설정 파일 두기
        </h3>
        <p className="description">
          CLAUDE.md는 세 곳에 둘 수 있어요. 여러 개를 동시에 쓸 수도 있고,
          같은 내용이 겹치면 더 구체적인 위치에 있는 게 우선돼요.
        </p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>위치</th>
                <th>경로</th>
                <th>언제 쓰나요?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="badge success">추천!</span> 내 컴퓨터 전체</td>
                <td><code>~/.claude/CLAUDE.md</code></td>
                <td>내 습관, 말투, 기본 규칙 (모든 작업에 적용)</td>
              </tr>
              <tr>
                <td>특정 프로젝트만</td>
                <td><code>프로젝트폴더/CLAUDE.md</code></td>
                <td>이 프로젝트에서만 쓰는 규칙 (팀 공유 가능)</td>
              </tr>
              <tr>
                <td>특정 하위 폴더만</td>
                <td><code>프로젝트/src/CLAUDE.md</code></td>
                <td>이 폴더에서만 쓰는 세부 규칙</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>팁:</strong> 대부분의 사용자는 "내 컴퓨터 전체" 설정 하나만 써도 충분해요.
            프로젝트별로 다른 규칙이 필요할 때만 추가하면 돼요.
          </div>
        </div>
      </div>

      {/* 자동 메모리 */}
      <div className="card">
        <h3>
          <i className="fas fa-memory" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          참고: 자동 메모리
        </h3>
        <p className="description">
          CLAUDE.md 말고도, Claude는 대화하면서 배운 것을 <strong>자동으로 메모</strong>해둬요.
          "이거 기억해줘"라고 말하면 다음 대화에서도 기억하고 있어요.
        </p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>CLAUDE.md (내가 적는 것)</th>
                <th>자동 메모리 (Claude가 적는 것)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>누가?</td>
                <td>내가 직접 적어요</td>
                <td>Claude가 알아서 메모해요</td>
              </tr>
              <tr>
                <td>뭘 적나요?</td>
                <td>내 규칙, 습관, 선호도</td>
                <td>대화에서 배운 것, 경험</td>
              </tr>
              <tr>
                <td>어떻게?</td>
                <td>파일을 열어서 직접 수정</td>
                <td>"이거 기억해줘"라고 말하면 됨</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>쉽게 말하면:</strong> CLAUDE.md는 "내가 미리 써두는 지시서"이고,
            자동 메모리는 "Claude가 대화하면서 스스로 적는 노트"예요. 둘 다 자동으로 읽혀요.
          </div>
        </div>
      </div>

      {/* 작성 팁 */}
      <div className="card">
        <h3>
          <i className="fas fa-star" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          잘 쓰는 팁
        </h3>

        <div className="tips-list">
          <div className="tips-item">
            <i className="fas fa-check-circle"></i>
            <div>
              <strong>짧고 핵심만</strong>
              <p>너무 길면 중요한 내용이 묻혀요. 한 줄에 하나씩, 핵심만 적으세요.</p>
            </div>
          </div>
          <div className="tips-item">
            <i className="fas fa-check-circle"></i>
            <div>
              <strong>"해줘" 형태로 적으세요</strong>
              <p>"한국어" (X) → "항상 한국어로 답해줘" (O). Claude가 더 잘 이해해요.</p>
            </div>
          </div>
          <div className="tips-item">
            <i className="fas fa-check-circle"></i>
            <div>
              <strong>안 되는 것도 적으세요</strong>
              <p>"파일을 물어보지 않고 삭제하지 마" 같은 금지 사항도 중요해요.</p>
            </div>
          </div>
          <div className="tips-item">
            <i className="fas fa-check-circle"></i>
            <div>
              <strong>필요할 때 수정하세요</strong>
              <p>언제든 파일을 열어서 내용을 추가하거나 바꿀 수 있어요.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-header { margin-bottom: 40px; }
        .section-header h2 { font-size: 2rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; }
        .section-header p { color: var(--text-muted); font-size: 1.1rem; }

        .card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }
        .card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }

        .highlight-card {
          border: 2px solid var(--primary);
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(245, 158, 11, 0.05));
        }

        .description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }

        .feature-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: var(--bg-primary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary);
          color: white;
          border-radius: 10px;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .feature-content h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .feature-content p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }

        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 20px;
        }

        .step-item {
          display: flex;
          gap: 16px;
        }

        .step-num {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 50%;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .step-content {
          flex: 1;
        }

        .step-content h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .step-content p {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .note {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 8px;
        }

        .comparison-table {
          overflow-x: auto;
          margin-bottom: 16px;
        }

        .comparison-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .comparison-table th,
        .comparison-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--border-color);
        }

        .comparison-table th {
          background: var(--bg-primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .comparison-table td {
          font-size: 0.9rem;
        }

        .comparison-table td code {
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.85rem;
        }

        .badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .badge.success {
          background: rgba(34, 197, 94, 0.15);
          color: #22c55e;
        }

        .badge.warning {
          background: rgba(249, 115, 22, 0.15);
          color: #f97316;
        }

        .badge.muted {
          background: var(--bg-primary);
          color: var(--text-muted);
        }

        .tip-box {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: rgba(249, 115, 22, 0.1);
          border-radius: 12px;
          border-left: 4px solid var(--primary);
          margin-top: 16px;
        }

        .tip-box.success {
          background: rgba(34, 197, 94, 0.1);
          border-left-color: #22c55e;
        }

        .tip-box.success i {
          color: #22c55e;
        }

        .tip-box i {
          color: var(--primary);
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tip-box div {
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .code-block {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow-x: auto;
          margin: 12px 0;
        }

        .code-header {
          padding: 8px 16px;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
        }

        .code-block pre {
          padding: 16px;
          margin: 0;
          font-size: 0.85rem;
          font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
          line-height: 1.6;
        }

        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tips-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
        }

        .tips-item > i {
          color: #22c55e;
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tips-item strong {
          display: block;
          margin-bottom: 4px;
        }

        .tips-item p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
}
