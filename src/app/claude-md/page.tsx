'use client';

import { AccordionItem } from '@/components';

export default function ClaudeMdPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-file-code" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          CLAUDE.md (프로젝트 설정)
        </h2>
        <p>프로젝트별 규칙과 컨벤션을 Claude에게 알려주세요.</p>
      </div>

      {/* CLAUDE.md란? */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          CLAUDE.md란?
        </h3>
        <p className="description">
          <strong>CLAUDE.md</strong>는 프로젝트의 규칙, 컨벤션, 중요 정보를 담는 <strong>마크다운 파일</strong>입니다.
          Claude Code는 대화를 시작할 때 이 파일을 자동으로 읽어 프로젝트 맥락을 파악합니다.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-brain"></i>
            </div>
            <div className="feature-content">
              <h4>자동 인식</h4>
              <p>대화 시작 시 자동으로 읽혀 별도 안내가 필요 없습니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <div className="feature-content">
              <h4>계층 구조</h4>
              <p>전역, 프로젝트, 폴더별로 단계적으로 적용됩니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="feature-content">
              <h4>팀 공유</h4>
              <p>Git에 포함하면 팀 전체가 같은 규칙을 사용합니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-edit"></i>
            </div>
            <div className="feature-content">
              <h4>마크다운</h4>
              <p>익숙한 마크다운 형식으로 자유롭게 작성합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 파일 위치 */}
      <div className="card">
        <h3>
          <i className="fas fa-folder-open" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          파일 위치와 우선순위
        </h3>
        <p className="description">
          CLAUDE.md는 세 곳에 둘 수 있으며, 모두 동시에 적용됩니다.
          같은 규칙이 충돌하면 더 구체적인 위치가 우선합니다.
        </p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>위치</th>
                <th>경로</th>
                <th>범위</th>
                <th>우선순위</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>전역</td>
                <td><code>~/.claude/CLAUDE.md</code></td>
                <td>내 모든 프로젝트</td>
                <td><span className="badge muted">낮음</span></td>
              </tr>
              <tr>
                <td>프로젝트 루트</td>
                <td><code>./CLAUDE.md</code></td>
                <td>해당 프로젝트</td>
                <td><span className="badge warning">중간</span></td>
              </tr>
              <tr>
                <td>하위 폴더</td>
                <td><code>./src/CLAUDE.md</code></td>
                <td>해당 폴더 + 하위</td>
                <td><span className="badge success">높음</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>팁:</strong> 전역 설정(<code>~/.claude/CLAUDE.md</code>)에는 개인 스타일(예: &quot;한국어로 응답&quot;)을,
            프로젝트 루트에는 팀 컨벤션을, 하위 폴더에는 특정 모듈의 규칙을 넣으면 좋습니다.
          </div>
        </div>
      </div>

      {/* 작성 예시 */}
      <div className="card">
        <h3>
          <i className="fas fa-code" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          작성 예시
        </h3>

        <AccordionItem title="예시 1: 코딩 컨벤션" defaultOpen>
          <div className="code-block">
            <div className="code-header">
              <span>CLAUDE.md</span>
            </div>
            <pre>{`# 프로젝트 규칙

## 코딩 컨벤션
- TypeScript를 사용합니다
- 함수는 화살표 함수로 작성합니다
- 컴포넌트는 'use client' 지시문을 사용합니다
- 커밋 메시지는 한국어로 작성합니다

## 폴더 구조
- src/app/ — 페이지 라우트
- src/components/ — 공통 컴포넌트
- src/lib/ — 유틸리티 함수`}</pre>
          </div>
        </AccordionItem>

        <AccordionItem title="예시 2: 디버깅 절차">
          <div className="code-block">
            <div className="code-header">
              <span>CLAUDE.md</span>
            </div>
            <pre>{`## 디버깅 절차
1. 현재 동작을 먼저 확인 (재현)
2. 가설을 세우고 근거를 찾기
3. 한 번에 하나씩만 변경
4. 변경 후 반드시 검증

shotgun debugging (여러 곳 동시 변경) 금지`}</pre>
          </div>
        </AccordionItem>

        <AccordionItem title="예시 3: DB 및 아키텍처 메모">
          <div className="code-block">
            <div className="code-header">
              <span>CLAUDE.md</span>
            </div>
            <pre>{`## 데이터베이스
- Supabase 사용 (PostgreSQL)
- RLS 정책이 적용되어 있음
- 트리거 함수에서 public. 접두사 필수

## API
- Supabase JS 클라이언트가 행(hang)되면 REST API 직접 호출
- Cron API는 service_role 키 사용`}</pre>
          </div>
        </AccordionItem>
      </div>

      {/* 자동 메모리 */}
      <div className="card">
        <h3>
          <i className="fas fa-memory" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          자동 메모리 (Auto Memory)
        </h3>
        <p className="description">
          Claude Code는 대화 중 학습한 내용을 <code>~/.claude/projects/</code> 폴더에 자동으로 저장합니다.
          이 <strong>자동 메모리</strong>는 CLAUDE.md와 함께 동작합니다.
        </p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>CLAUDE.md</th>
                <th>자동 메모리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>작성자</td>
                <td>사용자가 직접 작성</td>
                <td>Claude가 자동 기록</td>
              </tr>
              <tr>
                <td>저장 위치</td>
                <td>프로젝트 루트 등</td>
                <td><code>~/.claude/projects/</code></td>
              </tr>
              <tr>
                <td>Git 포함</td>
                <td><span className="badge success">예 (선택)</span></td>
                <td><span className="badge muted">아니오</span></td>
              </tr>
              <tr>
                <td>내용</td>
                <td>규칙, 컨벤션, 구조</td>
                <td>디버깅 경험, 패턴, 메모</td>
              </tr>
              <tr>
                <td>수정</td>
                <td>사용자가 직접</td>
                <td>Claude가 자동 (사용자 요청 시)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>팁:</strong> Claude에게 &quot;이 내용을 기억해줘&quot;라고 말하면 자동 메모리에 저장됩니다.
            &quot;항상 bun을 사용해&quot;, &quot;커밋 메시지는 영어로&quot; 같은 개인 선호도를 알려주세요.
          </div>
        </div>
      </div>

      {/* 추가 팁 */}
      <div className="card">
        <h3>
          <i className="fas fa-star" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          작성 팁
        </h3>

        <div className="tips-list">
          <div className="tips-item">
            <i className="fas fa-check-circle"></i>
            <div>
              <strong>간결하게 작성</strong>
              <p>핵심만 담으세요. CLAUDE.md가 길면 중요한 내용이 묻힐 수 있습니다.</p>
            </div>
          </div>
          <div className="tips-item">
            <i className="fas fa-check-circle"></i>
            <div>
              <strong>구체적으로</strong>
              <p>&quot;좋은 코드를 작성해&quot;보다 &quot;화살표 함수를 사용하고 TypeScript strict 모드 적용&quot;이 낫습니다.</p>
            </div>
          </div>
          <div className="tips-item">
            <i className="fas fa-check-circle"></i>
            <div>
              <strong>업데이트 유지</strong>
              <p>프로젝트가 변경되면 CLAUDE.md도 함께 업데이트하세요.</p>
            </div>
          </div>
          <div className="tips-item">
            <i className="fas fa-check-circle"></i>
            <div>
              <strong>Git에 포함</strong>
              <p>팀 프로젝트라면 CLAUDE.md를 Git에 커밋하여 팀원과 공유하세요.</p>
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
