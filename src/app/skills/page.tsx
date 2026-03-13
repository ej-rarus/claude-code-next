'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function SkillsPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-wand-magic-sparkles" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          Skills (커스텀 슬래시 명령)
        </h2>
        <p>자주 쓰는 작업을 나만의 단축 명령으로 만들어 보세요.</p>
      </div>

      {/* Skills란? */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Skills란?
        </h3>
        <p className="description">
          <strong>Skills</strong>는 자주 하는 작업을 <strong>단축 명령으로 만들어 두는 기능</strong>이에요.
          한 번 만들어 놓으면 <code>/명령어</code> 한 줄로 바로 실행할 수 있어요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <div className="feature-content">
              <h4>빠른 실행</h4>
              <p><code>/커밋</code>처럼 한 줄이면 바로 실행돼요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-recycle"></i>
            </div>
            <div className="feature-content">
              <h4>재사용 가능</h4>
              <p>한 번 만들면 어디서든 계속 쓸 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="feature-content">
              <h4>팀 공유</h4>
              <p>프로젝트에 넣어두면 팀원 모두 같은 명령을 쓸 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="feature-content">
              <h4>쉬운 형식</h4>
              <p>코딩 없이 텍스트 파일 하나로 만들 수 있어요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 기본 제공 Skills */}
      <div className="card">
        <h3>
          <i className="fas fa-box-open" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          기본 제공 Skills (Bundled)
        </h3>
        <p className="description">
          Claude Code에 <strong>기본으로 포함된 Skills</strong>이에요. 별도 설정 없이 바로 사용할 수 있어요.
        </p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>명령어</th>
                <th>기능</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>/simplify</code></td>
                <td>최근 변경 파일을 3개 에이전트가 병렬로 검토 (코드 재사용, 품질, 효율성)</td>
              </tr>
              <tr>
                <td><code>/batch</code></td>
                <td>대규모 변경을 5~30개 단위로 분할 후 병렬 실행. 각각 PR 생성</td>
              </tr>
              <tr>
                <td><code>/debug</code></td>
                <td>현재 세션의 디버그 로그를 분석해서 문제를 진단</td>
              </tr>
              <tr>
                <td><code>/loop</code></td>
                <td>프롬프트를 주기적으로 반복 실행 (배포 체크, PR 모니터링 등)</td>
              </tr>
              <tr>
                <td><code>/claude-api</code></td>
                <td>Claude API 레퍼런스 로드. <code>anthropic</code> import 시 자동 활성화</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 저장 위치 */}
      <div className="card">
        <h3>
          <i className="fas fa-folder-open" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          저장 위치
        </h3>
        <p className="description">
          Skills 파일은 두 곳에 저장할 수 있어요. 용도에 따라 골라 쓰세요.
        </p>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>개인용</th>
                <th>프로젝트용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>경로</td>
                <td><code>~/.claude/skills/</code></td>
                <td><code>.claude/skills/</code></td>
              </tr>
              <tr>
                <td>범위</td>
                <td>내 컴퓨터 전체</td>
                <td>해당 프로젝트만</td>
              </tr>
              <tr>
                <td>Git 포함</td>
                <td><span className="badge muted">아니오</span></td>
                <td><span className="badge success">예</span></td>
              </tr>
              <tr>
                <td>팀 공유</td>
                <td><span className="badge muted">불가</span></td>
                <td><span className="badge success">가능</span></td>
              </tr>
              <tr>
                <td>추천 용도</td>
                <td>개인 습관, 메모 스타일</td>
                <td>팀 워크플로우, 코딩 컨벤션</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>팁:</strong> 폴더로 나눠서 정리할 수도 있어요.
            예를 들어 <code>.claude/skills/git/commit.md</code>처럼 넣으면
            <code>/git:commit</code>으로 쓸 수 있어요.
          </div>
        </div>
      </div>

      {/* 만드는 법 */}
      <div className="card">
        <h3>
          <i className="fas fa-hammer" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          만드는 법
        </h3>

        <AccordionItem title="1단계: 폴더 만들기" defaultOpen>
          <p>Skills를 저장할 폴더를 만들어요.</p>
          <CommandBox command="mkdir -p .claude/skills" />
          <p className="note">내 컴퓨터 전체에서 쓰려면 <code>mkdir -p ~/.claude/skills</code>를 쓰세요.</p>
        </AccordionItem>

        <AccordionItem title="2단계: SKILL.md 파일 작성">
          <p>폴더 안에 텍스트 파일을 만들어요. 파일 이름이 곧 명령어 이름이 돼요.</p>
          <div className="code-block">
            <div className="code-header">
              <span>.claude/skills/commit.md</span>
            </div>
            <pre>{`---
name: commit
description: 변경사항을 커밋합니다
allowed-tools:
  - Bash(git diff:*)
  - Bash(git add:*)
  - Bash(git commit:*)
---

# 커밋 메시지 작성

1. \`git diff --staged\`로 변경사항을 확인하세요
2. 변경 내용을 요약하여 한국어 커밋 메시지를 작성하세요
3. 형식: "카테고리: 변경 내용 요약"
   - feat: 새 기능
   - fix: 버그 수정
   - docs: 문서 수정
   - refactor: 리팩토링`}</pre>
          </div>
          <p className="note">
            <code>---</code> 사이의 부분은 <strong>설정</strong>(이름, 설명 등)이고,
            아래는 Claude에게 보내는 <strong>지시 내용</strong>이에요.
          </p>
        </AccordionItem>

        <AccordionItem title="3단계: 사용하기">
          <p>Claude Code에서 <code>/</code>를 입력하면 내가 만든 명령이 목록에 나타나요.</p>
          <CommandBox command="/commit" />
          <p className="note">뒤에 추가 정보를 붙일 수도 있어요: <code>/commit 로그인 버그 수정</code></p>
        </AccordionItem>
      </div>

      {/* Frontmatter 옵션 */}
      <div className="card">
        <h3>
          <i className="fas fa-sliders-h" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          설정 항목 (--- 안에 적는 것들)
        </h3>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>필드</th>
                <th>필수</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>name</code></td>
                <td><span className="badge muted">선택</span></td>
                <td>명령어 이름. 생략하면 폴더 이름 사용</td>
              </tr>
              <tr>
                <td><code>description</code></td>
                <td><span className="badge success">추천</span></td>
                <td>명령어 설명. Claude가 자동 로드 여부를 판단해요</td>
              </tr>
              <tr>
                <td><code>allowed-tools</code></td>
                <td><span className="badge muted">선택</span></td>
                <td>이 명령에서 자동으로 허용할 동작</td>
              </tr>
              <tr>
                <td><code>disable-model-invocation</code></td>
                <td><span className="badge muted">선택</span></td>
                <td><code>true</code>로 설정하면 수동으로만 실행 가능 (Claude가 자동으로 쓰지 않음)</td>
              </tr>
              <tr>
                <td><code>user-invocable</code></td>
                <td><span className="badge muted">선택</span></td>
                <td><code>false</code>로 설정하면 / 메뉴에서 숨김 (Claude만 사용)</td>
              </tr>
              <tr>
                <td><code>model</code></td>
                <td><span className="badge muted">선택</span></td>
                <td>사용할 모델 (sonnet, haiku, opus)</td>
              </tr>
              <tr>
                <td><code>context</code></td>
                <td><span className="badge muted">선택</span></td>
                <td><code>fork</code>로 설정하면 서브에이전트에서 실행</td>
              </tr>
              <tr>
                <td><code>hooks</code></td>
                <td><span className="badge muted">선택</span></td>
                <td>이 Skill 실행 시 동작할 Hooks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-shield-alt"></i>
          <div>
            <strong>보안:</strong> <code>allowed-tools</code>에 <code>Bash(git *)</code>처럼 쓰면 git 관련 명령은 모두 허용돼요.
            꼭 필요한 것만 허용하는 게 안전해요.
          </div>
        </div>
      </div>

      {/* 실전 예시 */}
      <div className="card">
        <h3>
          <i className="fas fa-code" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          실전 예시
        </h3>

        <AccordionItem title="예시 1: 커밋 메시지 자동 생성" defaultOpen>
          <div className="code-block">
            <div className="code-header">
              <span>.claude/skills/commit.md</span>
            </div>
            <pre>{`---
name: commit
description: 변경사항을 분석하여 커밋합니다
allowed-tools:
  - Bash(git diff:*)
  - Bash(git add:*)
  - Bash(git commit:*)
---

스테이징된 변경사항을 분석하고 커밋 메시지를 작성하세요.

## 규칙
- 한국어로 작성
- 형식: "카테고리: 요약" (feat/fix/docs/refactor/test)
- 50자 이내
- $ARGUMENTS가 있으면 커밋 메시지에 반영`}</pre>
          </div>
          <p className="note">사용: <code>/commit</code> 또는 <code>/commit 로그인 기능 추가</code></p>
        </AccordionItem>

        <AccordionItem title="예시 2: PR 리뷰 체크리스트">
          <div className="code-block">
            <div className="code-header">
              <span>.claude/skills/review-pr.md</span>
            </div>
            <pre>{`---
name: review-pr
description: PR의 변경사항을 리뷰합니다
allowed-tools:
  - Bash(git diff:*)
  - Bash(git log:*)
---

현재 브랜치의 변경사항을 리뷰하고 체크리스트를 작성하세요.

## 체크 항목
- [ ] 코드 스타일 일관성
- [ ] 에러 처리 누락 여부
- [ ] 불필요한 console.log 제거
- [ ] 타입 안전성 확인
- [ ] 테스트 커버리지`}</pre>
          </div>
        </AccordionItem>

        <AccordionItem title="예시 3: 이슈 기반 브랜치 생성">
          <div className="code-block">
            <div className="code-header">
              <span>.claude/skills/start-issue.md</span>
            </div>
            <pre>{`---
name: start-issue
description: 이슈 번호로 작업 브랜치를 만듭니다
allowed-tools:
  - Bash(git checkout:*)
  - Bash(git branch:*)
---

이슈 번호를 받아 작업 브랜치를 생성하세요.

## 규칙
- 브랜치명: feature/$ARGUMENTS (예: feature/42)
- main 브랜치에서 분기
- 분기 후 해당 브랜치로 전환`}</pre>
          </div>
          <p className="note">사용: <code>/start-issue 42</code></p>
        </AccordionItem>
      </div>

      {/* 유용한 문법 */}
      <div className="card">
        <h3>
          <i className="fas fa-magic" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          유용한 문법
        </h3>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>문법</th>
                <th>설명</th>
                <th>예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>$ARGUMENTS</code></td>
                <td>명령어 뒤에 입력한 텍스트 전체</td>
                <td><code>/commit 버그 수정</code> → <code>버그 수정</code></td>
              </tr>
              <tr>
                <td><code>{'$0, $1, $2...'}</code></td>
                <td>공백으로 구분된 개별 인자</td>
                <td><code>/deploy prod v2</code> → <code>$1=prod</code>, <code>$2=v2</code></td>
              </tr>
              <tr>
                <td><code>{'!`명령어`'}</code></td>
                <td>셸 명령어 결과를 본문에 삽입</td>
                <td><code>{'!`git branch --show-current`'}</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <div className="code-header">
            <span>인자 활용 예시</span>
          </div>
          <pre>{`---
name: translate
description: 파일을 번역합니다
---

!` + '`cat $1`' + ` 파일의 내용을 $2로 번역하세요.
번역된 내용을 같은 파일에 저장하세요.`}</pre>
        </div>
        <p className="note">사용: <code>/translate README.md 영어</code></p>
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
      `}</style>
    </>
  );
}
