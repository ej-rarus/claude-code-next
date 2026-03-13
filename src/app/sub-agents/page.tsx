'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function SubAgentsPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-users-cog" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          서브에이전트
        </h2>
        <p>특정 작업에 특화된 AI 도우미를 만들어 Claude에게 일을 나눠주세요.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          서브에이전트란?
        </h3>
        <p className="description">
          <strong>서브에이전트</strong>는 특정 작업(코드 리뷰, 디버깅, 데이터 분석 등)에 특화된 <strong>AI 도우미</strong>예요.
          각각 독립된 작업 공간에서 실행되며, 필요한 도구만 사용하도록 제한할 수 있어요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-brain"></i></div>
            <div className="feature-content">
              <h4>컨텍스트 보존</h4>
              <p>메인 대화의 컨텍스트를 소비하지 않아요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-lock"></i></div>
            <div className="feature-content">
              <h4>도구 제한</h4>
              <p>필요한 도구만 허용해서 안전하게 실행해요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-bolt"></i></div>
            <div className="feature-content">
              <h4>병렬 실행</h4>
              <p>여러 서브에이전트를 동시에 돌릴 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-coins"></i></div>
            <div className="feature-content">
              <h4>비용 절감</h4>
              <p>간단한 작업은 Haiku 같은 빠른 모델에 맡길 수 있어요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 기본 제공 서브에이전트 */}
      <div className="card">
        <h3>
          <i className="fas fa-box-open" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          기본 제공 서브에이전트
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>이름</th>
                <th>모델</th>
                <th>용도</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Explore</strong></td><td>Haiku</td><td>빠른 코드 검색/분석 (읽기 전용)</td></tr>
              <tr><td><strong>Plan</strong></td><td>상속</td><td>Plan 모드에서 조사/분석</td></tr>
              <tr><td><strong>General-purpose</strong></td><td>상속</td><td>복잡한 다단계 작업</td></tr>
              <tr><td><strong>Bash</strong></td><td>상속</td><td>터미널 명령 실행</td></tr>
              <tr><td><strong>Claude Code Guide</strong></td><td>Haiku</td><td>Claude Code 기능 안내</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 만들기 */}
      <div className="card">
        <h3>
          <i className="fas fa-plus-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          나만의 서브에이전트 만들기
        </h3>

        <AccordionItem title="방법 1: /agents 메뉴 (가장 쉬운 방법)" icon="fa-magic" defaultOpen>
          <ol>
            <li>Claude Code에서 <code>/agents</code> 입력</li>
            <li><strong>Create new agent</strong> 선택</li>
            <li>범위 선택 (User-level 또는 Project-level)</li>
            <li><strong>Generate with Claude</strong>로 자동 생성하거나 직접 작성</li>
            <li>도구, 모델, 색상 선택 후 저장</li>
          </ol>
        </AccordionItem>

        <AccordionItem title="방법 2: 마크다운 파일 직접 작성" icon="fa-file-alt">
          <p>에이전트 파일을 직접 만들 수도 있어요.</p>
          <p><strong>저장 위치:</strong></p>
          <ul>
            <li><code>~/.claude/agents/</code> — 모든 프로젝트에서 사용</li>
            <li><code>.claude/agents/</code> — 현재 프로젝트에서만 사용</li>
          </ul>
          <CommandBox command={`# ~/.claude/agents/code-reviewer.md 예시
---
name: code-reviewer
description: 코드 품질과 보안을 검사합니다
tools: Read, Glob, Grep
model: sonnet
---

코드를 분석하고 품질, 보안, 모범 사례에 대한
피드백을 제공하세요.`} />
        </AccordionItem>
      </div>

      {/* 설정 옵션 */}
      <div className="card">
        <h3>
          <i className="fas fa-sliders-h" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          주요 설정 옵션
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>설정</th>
                <th>설명</th>
                <th>예시</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>name</code></td><td>에이전트 이름</td><td><code>code-reviewer</code></td></tr>
              <tr><td><code>description</code></td><td>언제 사용할지 설명</td><td>코드 리뷰 전문가</td></tr>
              <tr><td><code>tools</code></td><td>사용 가능 도구</td><td><code>Read, Grep, Glob</code></td></tr>
              <tr><td><code>model</code></td><td>사용할 모델</td><td><code>sonnet</code>, <code>haiku</code>, <code>opus</code></td></tr>
              <tr><td><code>memory</code></td><td>학습 내용 저장</td><td><code>user</code>, <code>project</code></td></tr>
              <tr><td><code>maxTurns</code></td><td>최대 실행 횟수</td><td><code>10</code></td></tr>
              <tr><td><code>isolation</code></td><td>격리 실행</td><td><code>worktree</code></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 활용 예시 */}
      <div className="card">
        <h3>
          <i className="fas fa-lightbulb" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          활용 예시
        </h3>
        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <span><strong>코드 리뷰</strong>: 코드 변경 후 자동으로 품질/보안 검사</span>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <span><strong>병렬 조사</strong>: 여러 서브에이전트로 다른 파일/모듈을 동시 분석</span>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <span><strong>비용 절감</strong>: 간단한 검색은 Haiku, 복잡한 분석은 Opus에 맡기기</span>
        </div>
      </div>

      <style jsx>{`
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        .feature-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: var(--bg-tertiary);
          border-radius: 8px;
        }
        .feature-icon {
          font-size: 1.5rem;
          color: var(--primary);
          min-width: 40px;
          text-align: center;
        }
        .feature-content h4 { margin: 0 0 4px; font-size: 0.95rem; }
        .feature-content p { margin: 0; font-size: 0.85rem; color: var(--text-muted); }
      `}</style>
    </>
  );
}
