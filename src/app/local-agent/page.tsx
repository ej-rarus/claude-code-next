'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function LocalAgentPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-robot" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          로컬 에이전트
        </h2>
        <p>Claude가 알아서 계획하고, 여러 단계를 스스로 실행하는 "자율 모드"예요.</p>
      </div>

      {/* 섹션 1: 에이전트 모드란? */}
      <div className="card">
        <h3>
          <i className="fas fa-microchip" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          에이전트 모드란?
        </h3>
        <p className="description">
          Claude Code는 단순히 질문에 답하는 게 아니에요.
          <strong>에이전트 모드</strong>에서는 목표를 이해하고, 계획을 세우고, 여러 단계를 <strong>알아서 실행</strong>해요.
          파일 읽기, 수정, 테스트, 결과 확인까지 전부 자동으로 진행해요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-list-check"></i>
            </div>
            <div className="feature-content">
              <h4>계획 수립</h4>
              <p>할 일을 분석하고 단계별 계획을 세워요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-files-medical"></i>
            </div>
            <div className="feature-content">
              <h4>여러 파일 동시 작업</h4>
              <p>여러 파일을 한꺼번에 읽고, 고치고, 만들어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-screwdriver-wrench"></i>
            </div>
            <div className="feature-content">
              <h4>도구 자동 선택</h4>
              <p>필요한 도구를 알아서 골라 써요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-circle-check"></i>
            </div>
            <div className="feature-content">
              <h4>중간 검증</h4>
              <p>각 단계마다 결과를 확인하고, 문제가 있으면 스스로 고쳐요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 섹션 2: 에이전트 모드 활용 */}
      <div className="card">
        <h3>
          <i className="fas fa-sliders" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          에이전트 모드 활용
        </h3>

        <AccordionItem title="Plan mode — 먼저 계획, 나중에 실행" defaultOpen>
          <p>
            <code>/plan</code> 명령을 쓰면 <strong>계획 모드</strong>가 켜져요.
            Claude가 바로 작업하지 않고 먼저 "이렇게 할 거야"라고 계획을 보여줘요.
            내가 "좋아, 해"라고 하면 그때 실행을 시작해요.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span>Claude Code 프롬프트</span>
            </div>
            <pre>{`/plan
로그인 기능에 소셜 로그인(Google, Kakao)을 추가해줘.
기존 이메일 로그인은 유지하면서 추가해야 해.`}</pre>
          </div>
          <p className="note">
            계획 모드에서는 파일을 건드리지 않으니 안심하고 여러 방법을 탐색해볼 수 있어요.
          </p>
        </AccordionItem>

        <AccordionItem title="백그라운드 작업 — 병렬로 일하기">
          <p>
            시간이 오래 걸리는 작업(테스트, 빌드 등)을
            뒤에서 돌려놓고, 동시에 다른 일을 할 수 있어요.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span>Claude Code 프롬프트</span>
            </div>
            <pre>{`전체 테스트를 백그라운드로 돌려줘.
그 동안 나는 README 업데이트를 할게.`}</pre>
          </div>
          <p className="note">
            뒤에서 돌리던 작업이 끝나면 결과를 확인할 수 있어요.
          </p>
        </AccordionItem>

        <AccordionItem title="도우미 분신술 — 여러 명이 동시에 일하기">
          <p>
            Claude가 혼자 다 하지 않고 <strong>도우미를 여러 명 불러서</strong> 동시에 일을 시킬 수 있어요.
            메인 대화는 그대로 유지하면서, 각 도우미가 독립적으로 조사하거나 작업해요.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span>작동 방식</span>
            </div>
            <pre>{`사용자: "인증 모듈을 리팩토링해줘"

Claude (메인):
  ├─ 서브에이전트 1: 현재 인증 코드 분석
  ├─ 서브에이전트 2: 의존성 파일 탐색
  └─ 서브에이전트 3: 테스트 파일 확인
  → 결과 종합 후 리팩토링 실행`}</pre>
          </div>
          <p className="note">
            도우미들이 동시에 일하니까 훨씬 빨라요.
          </p>
        </AccordionItem>
      </div>

      {/* 섹션 3: 효과적인 프롬프트 */}
      <div className="card">
        <h3>
          <i className="fas fa-pen-fancy" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          효과적인 프롬프트
        </h3>
        <p className="description">
          Claude에게 일을 잘 시키려면, <strong>뭘 왜 어떻게 해줘</strong>라고 구체적으로 말하는 게 중요해요.
        </p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>대충 시키면</th>
                <th>잘 시키면</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>버그 고쳐줘</td>
                <td>로그인 시 세션 만료 에러가 발생해. 원인을 찾고, 수정하고, 테스트까지 돌려줘.</td>
              </tr>
              <tr>
                <td>API 만들어줘</td>
                <td>기존 사용자 API 패턴을 참고해서 주문 CRUD API를 만들어줘. 타입 정의, 라우트, 에러 처리를 포함해줘.</td>
              </tr>
              <tr>
                <td>리팩토링 해줘</td>
                <td>utils 폴더의 중복 함수를 정리해줘. 현재 사용처를 분석하고, 공통 모듈로 합치고, import를 업데이트해줘.</td>
              </tr>
              <tr>
                <td>테스트 작성해줘</td>
                <td>auth 모듈의 로그인, 회원가입, 비밀번호 변경 함수에 대해 성공/실패 케이스를 포함한 테스트를 작성해줘.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>핵심:</strong> "뭘 해줘"뿐 아니라 "왜 필요한지"와 "어떻게 해줘"까지 말해주면 Claude가 훨씬 잘해요.
          </div>
        </div>
      </div>

      {/* 섹션 4: Claude Agent SDK */}
      <div className="card">
        <h3>
          <i className="fas fa-code" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Claude Agent SDK (개발자용)
        </h3>

        <div className="tip-box" style={{ marginTop: '0', marginBottom: '20px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>비개발자는 이 부분은 넘어가도 돼요.</strong> 터미널에서 Claude Code를 쓰는 것만으로도 위의 기능을 충분히 쓸 수 있어요.
          </div>
        </div>

        <p className="description">
          <strong>@anthropic-ai/claude-code</strong> 패키지를 사용하면 Claude Code의 에이전트 기능을
          여러분의 코드에서 직접 호출할 수 있어요.
        </p>

        <h4 style={{ marginBottom: '12px' }}>설치</h4>
        <CommandBox command="npm install @anthropic-ai/claude-code" />

        <h4 style={{ marginTop: '20px', marginBottom: '12px' }}>기본 사용</h4>
        <div className="code-block">
          <div className="code-header">
            <span>TypeScript</span>
          </div>
          <pre>{`import { claude } from "@anthropic-ai/claude-code";

const result = await claude({
  prompt: "src 폴더의 구조를 분석하고 요약해줘",
  options: {
    maxTurns: 10,
    allowedTools: ["Read", "Glob", "Grep"],
  },
});

console.log(result.stdout);`}</pre>
        </div>

        <h4 style={{ marginTop: '20px', marginBottom: '12px' }}>주요 옵션</h4>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>옵션</th>
                <th>설명</th>
                <th>기본값</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>prompt</code></td>
                <td>에이전트에게 전달할 작업 지시</td>
                <td>(필수)</td>
              </tr>
              <tr>
                <td><code>allowedTools</code></td>
                <td>사용 가능한 도구 목록</td>
                <td>전체</td>
              </tr>
              <tr>
                <td><code>maxTurns</code></td>
                <td>최대 실행 턴 수</td>
                <td>무제한</td>
              </tr>
              <tr>
                <td><code>cwd</code></td>
                <td>작업 디렉토리 경로</td>
                <td>현재 디렉토리</td>
              </tr>
              <tr>
                <td><code>systemPrompt</code></td>
                <td>시스템 프롬프트 커스터마이즈</td>
                <td>기본 프롬프트</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 섹션 5: 팁 */}
      <div className="card">
        <h3>
          <i className="fas fa-star" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          팁
        </h3>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>CLAUDE.md와 함께 쓰기:</strong> 프로젝트 규칙을
            CLAUDE.md에 적어두면 Claude가 그 규칙에 맞춰 일해요.
          </div>
        </div>

        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>큰 일은 나눠서 시키기:</strong> "전부 다 고쳐줘"보다
            "이 부분부터 먼저 고치고, 다음에 저 부분을 정리하자"가 결과가 훨씬 좋아요.
          </div>
        </div>

        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>권한 설정 활용:</strong> 위험한 작업(파일 삭제 등)은 확인을 받게 하고,
            안전한 작업(파일 읽기 등)은 자동으로 허용하도록 설정하면 편해요.
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

        .tip-box {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: rgba(249, 115, 22, 0.1);
          border-radius: 12px;
          border-left: 4px solid var(--primary);
          margin-top: 16px;
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

        .note {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 8px;
        }

        .note code {
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.85rem;
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
      `}</style>
    </>
  );
}
