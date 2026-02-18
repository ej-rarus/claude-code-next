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
        <p>자주 쓰는 작업을 나만의 슬래시 명령으로 만들어 보세요.</p>
      </div>

      {/* Skills란? */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Skills란?
        </h3>
        <p className="description">
          <strong>Skills</strong>는 Claude Code에서 사용할 수 있는 <strong>재사용 가능한 슬래시 명령</strong>입니다.
          자주 반복하는 작업을 한 번 정의해 두면 <code>/명령어</code>로 간단히 실행할 수 있습니다.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <div className="feature-content">
              <h4>빠른 실행</h4>
              <p><code>/커밋</code>처럼 슬래시 명령으로 즉시 호출됩니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-recycle"></i>
            </div>
            <div className="feature-content">
              <h4>재사용 가능</h4>
              <p>한 번 만들면 어떤 프로젝트에서든 반복 사용할 수 있습니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="feature-content">
              <h4>팀 공유</h4>
              <p>프로젝트에 포함하면 팀원 모두가 같은 명령을 사용합니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="feature-content">
              <h4>마크다운 기반</h4>
              <p>별도 프로그래밍 없이 마크다운 파일 하나로 만듭니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 저장 위치 */}
      <div className="card">
        <h3>
          <i className="fas fa-folder-open" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          저장 위치
        </h3>
        <p className="description">
          Skills 파일은 두 곳에 저장할 수 있습니다. 용도에 따라 선택하세요.
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
            <strong>팁:</strong> 하위 폴더도 사용할 수 있습니다.
            예를 들어 <code>.claude/skills/git/commit.md</code>처럼 정리하면
            <code>/git:commit</code>으로 호출됩니다.
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
          <p>Skills를 저장할 폴더를 만듭니다.</p>
          <CommandBox command="mkdir -p .claude/skills" />
          <p className="note">개인용이라면 <code>mkdir -p ~/.claude/skills</code>를 사용하세요.</p>
        </AccordionItem>

        <AccordionItem title="2단계: SKILL.md 파일 작성">
          <p>폴더 안에 마크다운 파일을 만듭니다. 파일 이름이 곧 명령어 이름이 됩니다.</p>
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
            <code>---</code> 사이의 부분이 <strong>frontmatter</strong>(설정),
            아래가 <strong>본문</strong>(Claude에게 보내는 지시)입니다.
          </p>
        </AccordionItem>

        <AccordionItem title="3단계: 사용하기">
          <p>Claude Code에서 슬래시(<code>/</code>)를 입력하면 내가 만든 스킬이 목록에 나타납니다.</p>
          <CommandBox command="/commit" />
          <p className="note">인자를 전달할 수도 있습니다: <code>/commit 로그인 버그 수정</code></p>
        </AccordionItem>
      </div>

      {/* Frontmatter 옵션 */}
      <div className="card">
        <h3>
          <i className="fas fa-sliders-h" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Frontmatter 주요 옵션
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
                <td><span className="badge success">필수</span></td>
                <td>슬래시 명령어 이름 (예: <code>commit</code>)</td>
              </tr>
              <tr>
                <td><code>description</code></td>
                <td><span className="badge success">필수</span></td>
                <td>명령어 설명 (목록에 표시됨)</td>
              </tr>
              <tr>
                <td><code>allowed-tools</code></td>
                <td><span className="badge muted">선택</span></td>
                <td>자동 허용할 도구 목록 (권한 확인 건너뛰기)</td>
              </tr>
              <tr>
                <td><code>context</code></td>
                <td><span className="badge muted">선택</span></td>
                <td>자동으로 읽어올 파일 경로 목록</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tip-box">
          <i className="fas fa-shield-alt"></i>
          <div>
            <strong>보안:</strong> <code>allowed-tools</code>에는 와일드카드 패턴을 사용할 수 있습니다.
            예: <code>Bash(git *)</code>는 git으로 시작하는 모든 명령을 허용합니다.
            필요한 최소 권한만 부여하세요.
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
          background: rgba(99, 102, 241, 0.1);
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
