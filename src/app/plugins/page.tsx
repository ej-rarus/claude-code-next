'use client';

import { CommandBox, AccordionItem } from '@/components';

export default function PluginsPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-puzzle-piece" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          Plugins
        </h2>
        <p>Skills, 에이전트, Hooks, MCP를 하나로 묶어서 팀과 공유하세요.</p>
      </div>

      {/* 소개 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          플러그인이란?
        </h3>
        <p className="description">
          <strong>플러그인</strong>은 Skills, 에이전트, Hooks, MCP 서버를 하나의 패키지로 묶어서
          <strong> 프로젝트와 팀 간에 공유</strong>할 수 있는 확장 시스템이에요.
          마켓플레이스를 통해 배포하거나, 로컬에서 직접 개발할 수 있어요.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-share-alt"></i></div>
            <div className="feature-content">
              <h4>팀 공유</h4>
              <p>한 번 만들면 팀 전체가 같은 워크플로우를 사용할 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-box-open"></i></div>
            <div className="feature-content">
              <h4>올인원 패키지</h4>
              <p>Skills + 에이전트 + Hooks + MCP를 하나로 묶어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-store"></i></div>
            <div className="feature-content">
              <h4>마켓플레이스</h4>
              <p>공식 마켓플레이스에서 설치하거나 직접 배포할 수 있어요.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-code-branch"></i></div>
            <div className="feature-content">
              <h4>버전 관리</h4>
              <p>시맨틱 버저닝으로 안정적인 업데이트를 제공해요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 플러그인 vs 독립 설정 */}
      <div className="card">
        <h3>
          <i className="fas fa-balance-scale" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          플러그인 vs 독립 설정
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>방식</th>
                <th>Skill 이름</th>
                <th>적합한 상황</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>독립 설정</strong> (.claude/)</td>
                <td><code>/hello</code></td>
                <td>개인 워크플로우, 실험, 단일 프로젝트</td>
              </tr>
              <tr>
                <td><strong>플러그인</strong></td>
                <td><code>/my-plugin:hello</code></td>
                <td>팀 공유, 여러 프로젝트, 마켓플레이스 배포</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <span><code>.claude/</code>에서 먼저 실험하고, 준비되면 플러그인으로 변환하세요!</span>
        </div>
      </div>

      {/* 만들기 */}
      <div className="card">
        <h3>
          <i className="fas fa-plus-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          플러그인 만들기
        </h3>

        <AccordionItem title="1단계: 디렉토리 & 매니페스트 생성" icon="fa-folder-plus" defaultOpen>
          <CommandBox command={`mkdir my-plugin
mkdir my-plugin/.claude-plugin`} />
          <p style={{ marginTop: '12px' }}><code>.claude-plugin/plugin.json</code> 파일을 만드세요.</p>
          <CommandBox command={`{
  "name": "my-plugin",
  "description": "팀 코드 리뷰 플러그인",
  "version": "1.0.0",
  "author": { "name": "Your Name" }
}`} />
        </AccordionItem>

        <AccordionItem title="2단계: Skill 추가" icon="fa-magic">
          <CommandBox command={`mkdir -p my-plugin/skills/code-review`} />
          <p style={{ marginTop: '8px' }}><code>skills/code-review/SKILL.md</code>를 작성하세요.</p>
          <CommandBox command={`---
description: 코드 품질과 보안을 리뷰합니다
---

코드를 분석하고 품질, 보안, 모범 사례에 대한
피드백을 제공하세요.`} />
        </AccordionItem>

        <AccordionItem title="3단계: 로컬 테스트" icon="fa-play">
          <CommandBox command="claude --plugin-dir ./my-plugin" />
          <p style={{ marginTop: '8px' }}>여러 플러그인을 동시에 로드할 수도 있어요.</p>
          <CommandBox command="claude --plugin-dir ./plugin-one --plugin-dir ./plugin-two" />
        </AccordionItem>
      </div>

      {/* 플러그인 구조 */}
      <div className="card">
        <h3>
          <i className="fas fa-sitemap" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          플러그인 구조
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>디렉토리</th>
                <th>용도</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>.claude-plugin/</code></td><td><code>plugin.json</code> 매니페스트</td></tr>
              <tr><td><code>skills/</code></td><td>SKILL.md 파일 (에이전트 스킬)</td></tr>
              <tr><td><code>commands/</code></td><td>마크다운 명령 파일</td></tr>
              <tr><td><code>agents/</code></td><td>커스텀 에이전트 정의</td></tr>
              <tr><td><code>hooks/</code></td><td>hooks.json 이벤트 핸들러</td></tr>
              <tr><td><code>.mcp.json</code></td><td>MCP 서버 설정</td></tr>
              <tr><td><code>.lsp.json</code></td><td>LSP 서버 설정</td></tr>
              <tr><td><code>settings.json</code></td><td>기본 설정값</td></tr>
            </tbody>
          </table>
        </div>
        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-exclamation-triangle"></i>
          <span><code>commands/</code>, <code>agents/</code> 등은 플러그인 루트에 두세요. <code>.claude-plugin/</code> 안에 넣지 마세요!</span>
        </div>
      </div>

      {/* 설치 & 공유 */}
      <div className="card">
        <h3>
          <i className="fas fa-download" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          설치 & 공유
        </h3>
        <p className="description">
          다른 사람이 만든 플러그인은 <code>/plugins install</code> 명령으로 설치할 수 있어요.
        </p>
        <p style={{ marginTop: '12px' }}><strong>마켓플레이스 제출:</strong></p>
        <ul>
          <li><strong>Claude.ai</strong>: claude.ai/settings/plugins/submit</li>
          <li><strong>Console</strong>: platform.claude.com/plugins/submit</li>
        </ul>
      </div>

      {/* 기존 설정 마이그레이션 */}
      <div className="card">
        <h3>
          <i className="fas fa-exchange-alt" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          기존 설정 → 플러그인 변환
        </h3>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>독립 설정 (.claude/)</th>
                <th>플러그인</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>하나의 프로젝트에서만 사용</td><td>마켓플레이스로 공유 가능</td></tr>
              <tr><td><code>.claude/commands/</code></td><td><code>plugin-name/commands/</code></td></tr>
              <tr><td><code>settings.json</code>에 Hooks</td><td><code>hooks/hooks.json</code></td></tr>
              <tr><td>수동 복사해서 공유</td><td><code>/plugins install</code>로 설치</td></tr>
            </tbody>
          </table>
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
