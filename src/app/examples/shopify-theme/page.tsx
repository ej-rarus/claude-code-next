'use client';

import { CommandBox, AccordionItem, OSTabs } from '@/components';

export default function ShopifyThemeDevPage() {
  return (
    <>
      <div className="section-header">
        <h2>
          <i className="fas fa-palette" style={{ color: 'var(--primary)', marginRight: '12px' }}></i>
          Shopify 테마 실시간 디자인
        </h2>
        <p>피그마 없이, 브라우저에서 바로 확인하면서 Shopify 테마를 수정하는 방법을 안내합니다.</p>
      </div>

      {/* 이 가이드는 누구를 위한 건가요? */}
      <div className="card highlight-card">
        <h3>
          <i className="fas fa-paint-brush" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          이 가이드는 누구를 위한 건가요?
        </h3>
        <p className="description">
          <strong>Shopify 테마를 직접 수정하면서 디자인하고 싶은 디자이너</strong>를 위한 가이드예요.
        </p>
        <div className="use-case-grid">
          <div className="use-case before">
            <div className="use-case-label">기존 방식</div>
            <div className="use-case-content">
              <p>피그마에서 디자인 &rarr; 개발자에게 전달 &rarr; 개발 &rarr; 확인 &rarr; 수정 요청 &rarr; 반복...</p>
            </div>
          </div>
          <div className="use-case after">
            <div className="use-case-label">새로운 방식</div>
            <div className="use-case-content">
              <p>브라우저에서 바로 수정 &rarr; 실시간 확인 &rarr; 마음에 들면 저장. 끝!</p>
            </div>
          </div>
        </div>
        <p className="description" style={{ marginBottom: '0', marginTop: '16px' }}>
          Claude Code에게 &quot;이 색상 바꿔줘&quot;, &quot;여기 간격 넓혀줘&quot; 같은 말만 하면
          코드를 몰라도 테마를 수정할 수 있어요. 수정 결과는 브라우저에서 바로 확인할 수 있습니다.
        </p>
      </div>

      {/* 어떻게 동작하는 건가요? */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          어떻게 동작하는 건가요?
        </h3>
        <p className="description">
          Shopify 테마 코드를 내 컴퓨터에 가져와서, 로컬 미리보기 서버를 켜면
          브라우저에서 실시간으로 수정 결과를 볼 수 있어요.
        </p>

        <div className="how-it-works">
          <div className="how-step">
            <div className="how-icon"><i className="fab fa-github"></i></div>
            <div className="how-label">GitHub에서<br/>테마 코드 가져오기</div>
          </div>
          <div className="how-arrow"><i className="fas fa-chevron-right"></i></div>
          <div className="how-step">
            <div className="how-icon"><i className="fas fa-server"></i></div>
            <div className="how-label">내 컴퓨터에서<br/>미리보기 서버 실행</div>
          </div>
          <div className="how-arrow"><i className="fas fa-chevron-right"></i></div>
          <div className="how-step">
            <div className="how-icon"><i className="fas fa-comments"></i></div>
            <div className="how-label">Claude에게<br/>수정 요청</div>
          </div>
          <div className="how-arrow"><i className="fas fa-chevron-right"></i></div>
          <div className="how-step">
            <div className="how-icon"><i className="fas fa-eye"></i></div>
            <div className="how-label">브라우저에서<br/>바로 확인</div>
          </div>
        </div>

        <div className="tip-box" style={{ marginTop: '20px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>코드를 몰라도 괜찮아요.</strong> Claude Code가 코드를 대신 수정해줍니다.
            디자이너는 &quot;색상 바꿔줘&quot;, &quot;폰트 크기 키워줘&quot; 같은 말만 하면 돼요.
          </div>
        </div>
      </div>

      {/* 권한 요청 안내 */}
      <div className="card permission-card">
        <h3>
          <i className="fas fa-user-shield" style={{ marginRight: '8px', color: '#ef4444' }}></i>
          먼저! 권한을 받으세요
        </h3>
        <p className="description" style={{ marginBottom: '16px' }}>
          시작하기 전에 아래 <strong>2가지 권한</strong>이 반드시 필요해요.
          없으면 아래 과정을 진행할 수 없으니 <strong>먼저 요청</strong>하세요.
        </p>
        <div className="permission-grid">
          <div className="permission-item">
            <div className="permission-icon"><i className="fab fa-github"></i></div>
            <div className="permission-content">
              <h4>GitHub 저장소 접근 권한</h4>
              <p>테마 코드가 올라가 있는 GitHub 저장소에 초대를 받아야 해요.</p>
            </div>
          </div>
          <div className="permission-item">
            <div className="permission-icon"><i className="fas fa-store"></i></div>
            <div className="permission-content">
              <h4>Shopify 스토어 접근 권한</h4>
              <p>테마를 미리보려면 해당 Shopify 스토어의 직원(Staff) 권한이 필요해요.</p>
            </div>
          </div>
        </div>
        <div className="permission-cta">
          <i className="fas fa-paper-plane"></i>
          <div>
            <strong>은국님</strong> 또는 <strong>Nurani님</strong>에게 아래 내용으로 요청하세요:
            <div className="permission-template">
              &quot;GitHub 레포 초대 + Shopify 스토어 Staff 권한 요청드립니다.
              제 GitHub 아이디는 <code>___</code>, Shopify 로그인 이메일은 <code>___</code> 입니다.&quot;
            </div>
          </div>
        </div>
      </div>

      {/* 사전 준비: 처음 한 번만 하면 돼요 */}
      <div className="card">
        <h3>
          <i className="fas fa-clipboard-check" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          사전 준비 (처음 한 번만 하면 돼요)
        </h3>
        <p className="description">
          위 권한을 받았으면, 아래 도구들을 순서대로 설치하세요. 이미 설치된 건 건너뛰면 돼요.
          <strong> 각 항목의 &quot;설치 확인&quot; 명령어를 실행해서 버전이 나오면 이미 설치된 거예요.</strong>
        </p>

        {/* 준비물 1: 터미널 */}
        <div className="prereq-card">
          <div className="prereq-number">1</div>
          <div className="prereq-body">
            <h4>터미널 프로그램</h4>
            <p>
              명령어를 입력하는 프로그램이에요. 컴퓨터에 기본 내장되어 있습니다.
            </p>
            <OSTabs>
              {{
                mac: (
                  <div>
                    <p>Spotlight (Cmd + Space)에서 <strong>&quot;터미널&quot;</strong> 또는 <strong>&quot;Terminal&quot;</strong>을 검색해서 열어요.</p>
                    <p className="note">더 좋은 터미널을 원하면 <strong>iTerm2</strong>를 추천해요. 설치 가이드의 2단계를 참고하세요.</p>
                  </div>
                ),
                windows: (
                  <div>
                    <p>시작 메뉴에서 <strong>&quot;Windows Terminal&quot;</strong> 또는 <strong>&quot;명령 프롬프트&quot;</strong>를 검색해서 열어요.</p>
                  </div>
                ),
              }}
            </OSTabs>
          </div>
        </div>

        {/* 준비물 2: Homebrew / WinGet */}
        <div className="prereq-card">
          <div className="prereq-number">2</div>
          <div className="prereq-body">
            <h4>패키지 관리자 (다른 도구를 설치해주는 도구)</h4>
            <p>
              앞으로 필요한 프로그램들을 쉽게 설치할 수 있게 해주는 도구예요.
            </p>
            <OSTabs>
              {{
                mac: (
                  <div>
                    <p style={{ marginBottom: '8px' }}><strong>설치 확인:</strong></p>
                    <CommandBox command="brew --version" />
                    <p className="note">버전이 나오면 이미 설치된 거예요. 안 나오면 아래 명령어로 설치하세요.</p>
                    <CommandBox command='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"' />
                  </div>
                ),
                windows: (
                  <div>
                    <p>Windows 10 이상이면 <strong>WinGet</strong>이 기본 내장되어 있어요.</p>
                    <p style={{ marginBottom: '8px' }}><strong>설치 확인:</strong></p>
                    <CommandBox command="winget --version" />
                  </div>
                ),
              }}
            </OSTabs>
          </div>
        </div>

        {/* 준비물 3: Git */}
        <div className="prereq-card">
          <div className="prereq-number">3</div>
          <div className="prereq-body">
            <h4>Git (코드를 가져오는 도구)</h4>
            <p>
              GitHub에 있는 테마 코드를 내 컴퓨터로 복사(클론)하는 데 필요해요.
            </p>
            <p style={{ marginBottom: '8px' }}><strong>설치 확인:</strong></p>
            <CommandBox command="git --version" />
            <p className="note">버전이 나오면 이미 설치된 거예요.</p>
            <OSTabs>
              {{
                mac: (
                  <div>
                    <p>macOS에는 보통 기본 내장되어 있어요. 안 되면 아래 명령어로 설치하세요.</p>
                    <CommandBox command="xcode-select --install" />
                    <p className="note">팝업이 뜨면 &quot;설치&quot; 버튼을 누르세요. 몇 분 걸릴 수 있어요.</p>
                  </div>
                ),
                windows: (
                  <div>
                    <CommandBox command="winget install Git.Git" />
                    <p className="note">설치 후 터미널을 껐다 다시 켜세요.</p>
                  </div>
                ),
              }}
            </OSTabs>
          </div>
        </div>

        {/* 준비물 4: Node.js */}
        <div className="prereq-card">
          <div className="prereq-number">4</div>
          <div className="prereq-body">
            <h4>Node.js (Shopify CLI가 돌아가는 기반)</h4>
            <p>
              Shopify CLI를 실행하려면 Node.js가 필요해요. 직접 쓸 일은 없지만 뒤에서 동작합니다.
            </p>
            <p style={{ marginBottom: '8px' }}><strong>설치 확인:</strong></p>
            <CommandBox command="node --version" />
            <OSTabs>
              {{
                mac: (
                  <div>
                    <CommandBox command="brew install node" />
                  </div>
                ),
                windows: (
                  <div>
                    <CommandBox command="winget install OpenJS.NodeJS.LTS" />
                    <p className="note">설치 후 터미널을 껐다 다시 켜세요.</p>
                  </div>
                ),
              }}
            </OSTabs>
          </div>
        </div>

        {/* 준비물 5: Shopify CLI */}
        <div className="prereq-card">
          <div className="prereq-number">5</div>
          <div className="prereq-body">
            <h4>Shopify CLI (테마 미리보기 도구)</h4>
            <p>
              이게 핵심이에요! 내 컴퓨터에서 Shopify 테마를 실행하고 브라우저로 미리볼 수 있게 해주는 도구입니다.
            </p>
            <p style={{ marginBottom: '8px' }}><strong>설치 확인:</strong></p>
            <CommandBox command="shopify version" />
            <OSTabs>
              {{
                mac: (
                  <div>
                    <CommandBox command="brew tap shopify/shopify && brew install shopify-cli" />
                  </div>
                ),
                windows: (
                  <div>
                    <CommandBox command="npm install -g @shopify/cli @shopify/theme" />
                  </div>
                ),
              }}
            </OSTabs>
          </div>
        </div>

        {/* 준비물 6: Claude Code */}
        <div className="prereq-card">
          <div className="prereq-number">6</div>
          <div className="prereq-body">
            <h4>Claude Code (AI 코딩 도우미)</h4>
            <p>
              코드를 직접 짤 필요 없이 말로 수정을 요청할 수 있어요.
              이 사이트의 <strong>설치 가이드</strong>를 따라 설치하세요.
            </p>
            <p style={{ marginBottom: '8px' }}><strong>설치 확인:</strong></p>
            <CommandBox command="claude --version" />
          </div>
        </div>

        <div className="warning-item" style={{ marginTop: '20px' }}>
          <i className="fas fa-exclamation-triangle"></i>
          <div>
            <strong>설치가 어렵다면?</strong> 은국님이나 Nurani님에게
            &quot;위 6가지 설치 도와주세요&quot;라고 요청하세요. 처음 한 번만 세팅하면 그 다음부터는 쉬워요.
          </div>
        </div>
      </div>

      {/* Step 1: 테마 코드 가져오기 */}
      <div className="card">
        <h3>
          <i className="fas fa-download" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Step 1. 테마 코드 가져오기
        </h3>
        <p className="description">
          GitHub에 올라가 있는 Shopify 테마 코드를 내 컴퓨터로 가져와요.
          이걸 &quot;클론(clone)&quot;이라고 해요. 원본과 연결된 복사본을 만드는 거예요.
        </p>

        <div className="diagram">
          <div className="diagram-item">
            <div className="diagram-icon"><i className="fab fa-github"></i></div>
            <div className="diagram-label">GitHub<br/>(테마 원본)</div>
          </div>
          <div className="diagram-arrow"><i className="fas fa-long-arrow-alt-right"></i></div>
          <div className="diagram-item">
            <div className="diagram-icon"><i className="fas fa-laptop"></i></div>
            <div className="diagram-label">내 컴퓨터<br/>(작업할 복사본)</div>
          </div>
        </div>

        <AccordionItem title="Claude Code에게 시키기 (추천)" defaultOpen>
          <p>Claude Code를 열고, GitHub 주소와 저장할 위치를 말해주세요.</p>
          <div className="code-block">
            <div className="code-header">
              <span>Claude Code 프롬프트</span>
            </div>
            <pre>{`https://github.com/우리팀/우리테마 이거
/Users/나/Documents/프로젝트 밑에 클론해줘`}</pre>
          </div>
          <p className="note">
            GitHub 주소는 팀에서 알려준 URL을 그대로 붙여넣기하면 돼요.
            저장 위치도 자유롭게 정할 수 있어요.
          </p>
        </AccordionItem>

        <AccordionItem title="GitHub 주소는 어디서 찾나요?">
          <p>팀에서 공유받은 GitHub 레포지토리 페이지에 가면 초록색 <strong>&lt;&gt; Code</strong> 버튼이 있어요.</p>
          <p>그 버튼을 누르면 나오는 <code>https://github.com/...</code> 주소를 복사하면 됩니다.</p>
          <div className="code-block">
            <div className="code-header">
              <span>GitHub 주소 예시</span>
            </div>
            <pre>{`https://github.com/lukuku-dev/jentestore-korea
https://github.com/lukuku-dev/misto-global`}</pre>
          </div>
        </AccordionItem>

        <AccordionItem title="저장 위치를 어디로 하면 좋을까요?">
          <p>어디든 상관없지만, 찾기 쉬운 곳을 추천해요.</p>
          <OSTabs>
            {{
              mac: (
                <div>
                  <div className="code-block">
                    <div className="code-header"><span>추천 경로</span></div>
                    <pre>{`/Users/내이름/Documents/프로젝트이름`}</pre>
                  </div>
                  <p className="note">Finder에서 &quot;문서&quot; 폴더 안에 프로젝트 폴더를 만들어두면 찾기 쉬워요.</p>
                </div>
              ),
              windows: (
                <div>
                  <div className="code-block">
                    <div className="code-header"><span>추천 경로</span></div>
                    <pre>{`C:\\Users\\내이름\\Documents\\프로젝트이름`}</pre>
                  </div>
                </div>
              ),
            }}
          </OSTabs>
        </AccordionItem>
      </div>

      {/* Step 2: 스토어 ID 확인 */}
      <div className="card">
        <h3>
          <i className="fas fa-key" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Step 2. 스토어 ID 확인하기
        </h3>
        <p className="description">
          개발 서버를 켜려면 &quot;어떤 Shopify 스토어의 데이터로 미리보기할지&quot; 알려줘야 해요.
          이때 필요한 게 <strong>스토어 ID</strong>예요.
        </p>

        <AccordionItem title="스토어 ID 찾는 방법" defaultOpen>
          <p>Shopify Admin에 로그인한 뒤, <strong>브라우저 주소창</strong>을 보세요.</p>
          <div className="code-block">
            <div className="code-header">
              <span>Shopify Admin 주소</span>
            </div>
            <pre>{`https://admin.shopify.com/store/여기가-스토어ID
                                    ──────────────
                                    ↑ 이 부분을 복사하세요`}</pre>
          </div>
          <p style={{ marginTop: '16px' }}>또는 <code>.myshopify.com</code> 앞부분이 스토어 ID예요.</p>
          <div className="code-block">
            <div className="code-header">
              <span>myshopify.com 주소</span>
            </div>
            <pre>{`https://여기가-스토어ID.myshopify.com
       ──────────────
       ↑ 이 부분이 스토어 ID`}</pre>
          </div>
        </AccordionItem>

        <AccordionItem title="스토어 ID 예시">
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>스토어 주소</th>
                  <th>스토어 ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>my-brand.myshopify.com</code></td>
                  <td><code>my-brand</code></td>
                </tr>
                <tr>
                  <td><code>4e1550-7b.myshopify.com</code></td>
                  <td><code>4e1550-7b</code></td>
                </tr>
                <tr>
                  <td><code>misto-glboal.myshopify.com</code></td>
                  <td><code>misto-glboal</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note">스토어 ID를 모르겠으면 스토어 관리자(보통 개발자)에게 물어보세요.</p>
        </AccordionItem>
      </div>

      {/* Step 3: 첫 인증 */}
      <div className="card">
        <h3>
          <i className="fas fa-lock-open" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Step 3. 스토어 인증하기 (처음 한 번만)
        </h3>
        <p className="description">
          처음 접속하는 스토어는 본인 확인이 필요해요.
          <strong> 한 번만 하면 다음부터는 자동으로 접속돼요.</strong>
        </p>

        <AccordionItem title="인증하는 방법" defaultOpen>
          <p>이 단계는 <strong>터미널에서 직접</strong> 해야 해요. (Claude Code에서는 비밀번호 입력이 안 돼요.)</p>
          <div className="step-by-step">
            <div className="mini-step">
              <span className="mini-num">1</span>
              <span>터미널을 열어요</span>
            </div>
            <div className="mini-step">
              <span className="mini-num">2</span>
              <span>아래 명령어를 입력하세요 (스토어 ID를 내 것으로 바꿔주세요)</span>
            </div>
          </div>
          <CommandBox command="cd /테마가/저장된/경로 && shopify theme dev --store=내스토어ID" />
          <div className="step-by-step" style={{ marginTop: '12px' }}>
            <div className="mini-step">
              <span className="mini-num">3</span>
              <span>브라우저가 열리면 Shopify 계정으로 로그인하세요</span>
            </div>
            <div className="mini-step">
              <span className="mini-num">4</span>
              <span>로그인 성공하면 터미널에 &quot;Preview your theme&quot; 메시지가 나와요</span>
            </div>
            <div className="mini-step">
              <span className="mini-num">5</span>
              <span>Ctrl + C를 눌러서 서버를 끄세요 (인증만 하면 되니까요)</span>
            </div>
          </div>
        </AccordionItem>

        <div className="warning-item" style={{ marginTop: '16px' }}>
          <i className="fas fa-exclamation-triangle"></i>
          <div>
            <strong>왜 터미널에서 해야 하나요?</strong> Shopify 인증은 비밀번호 입력이나
            브라우저 로그인이 필요한데, Claude Code에서는 이런 대화형 입력이 지원되지 않아요.
            한 번만 터미널에서 인증하면 그 다음부터는 Claude Code에서 바로 실행할 수 있어요.
          </div>
        </div>

        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>이미 인증된 스토어:</strong> 이전에 같은 스토어에 접속한 적 있으면 이 단계는 건너뛰세요.
            Claude Code에서 바로 Step 4로 넘어가면 돼요.
          </div>
        </div>
      </div>

      {/* Step 4: 개발 서버 실행 */}
      <div className="card">
        <h3>
          <i className="fas fa-play-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Step 4. 미리보기 서버 실행하기
        </h3>
        <p className="description">
          이제 Claude Code에서 미리보기 서버를 켤 수 있어요.
          서버가 켜지면 브라우저에서 테마를 실시간으로 확인할 수 있습니다.
        </p>

        <AccordionItem title="Claude Code에서 실행 (추천)" defaultOpen>
          <div className="code-block">
            <div className="code-header">
              <span>Claude Code 프롬프트</span>
            </div>
            <pre>{`/테마/경로에서 shopify theme dev --store="내스토어ID" 실행해줘`}</pre>
          </div>
          <p style={{ marginTop: '12px' }}>성공하면 이런 결과가 나와요:</p>
          <div className="code-block result-block">
            <div className="code-header">
              <span>실행 결과</span>
            </div>
            <pre>{`╭─ success ─────────────────────────────────────────╮
│                                                   │
│  Preview your theme                               │
│    • http://127.0.0.1:9292     ← 이 주소를 열어요!  │
│                                                   │
╰───────────────────────────────────────────────────╯`}</pre>
          </div>
        </AccordionItem>

        <AccordionItem title="브라우저에서 확인하기">
          <div className="step-by-step">
            <div className="mini-step">
              <span className="mini-num">1</span>
              <span>Chrome이나 Safari를 열어요</span>
            </div>
            <div className="mini-step">
              <span className="mini-num">2</span>
              <span>주소창에 <code>http://127.0.0.1:9292</code>를 입력하세요</span>
            </div>
            <div className="mini-step">
              <span className="mini-num">3</span>
              <span>Shopify 스토어가 보이면 성공!</span>
            </div>
          </div>
          <p className="note" style={{ marginTop: '12px' }}>
            <code>127.0.0.1</code>은 &quot;내 컴퓨터&quot;라는 뜻이에요. 인터넷에 공개되는 게 아니라 내 컴퓨터에서만 볼 수 있어요.
          </p>
        </AccordionItem>
      </div>

      {/* Step 5: 테마 수정하기 */}
      <div className="card">
        <h3>
          <i className="fas fa-magic" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Step 5. 테마 수정하기 (실시간!)
        </h3>
        <p className="description">
          미리보기 서버가 켜져 있는 상태에서 Claude Code에게 수정을 요청하면,
          브라우저에서 <strong>바로</strong> 결과를 확인할 수 있어요.
        </p>

        <AccordionItem title="수정 요청 예시" defaultOpen>
          <p>이런 식으로 말하면 돼요. 코드를 몰라도 괜찮아요!</p>
          <div className="example-prompts">
            <div className="example-prompt">
              <div className="example-tag">색상</div>
              <p>&quot;헤더 배경색을 #1a1a2e로 바꿔줘&quot;</p>
            </div>
            <div className="example-prompt">
              <div className="example-tag">레이아웃</div>
              <p>&quot;상품 카드 사이 간격을 24px로 넓혀줘&quot;</p>
            </div>
            <div className="example-prompt">
              <div className="example-tag">타이포</div>
              <p>&quot;메인 제목 폰트 크기를 32px로 키워줘&quot;</p>
            </div>
            <div className="example-prompt">
              <div className="example-tag">구조</div>
              <p>&quot;footer에 Instagram 링크를 추가해줘&quot;</p>
            </div>
            <div className="example-prompt">
              <div className="example-tag">반응형</div>
              <p>&quot;모바일에서 상품 그리드를 1열로 바꿔줘&quot;</p>
            </div>
            <div className="example-prompt">
              <div className="example-tag">이미지</div>
              <p>&quot;히어로 배너 높이를 500px로 줄여줘&quot;</p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="수정하면 바로 반영되나요?">
          <p>
            네! 개발 서버가 <strong>파일 변경을 감지</strong>해서 브라우저에 자동으로 반영해요.
            Claude Code가 파일을 수정하면 브라우저를 새로고침하지 않아도 바뀌는 게 보여요.
          </p>
          <p style={{ marginTop: '8px' }}>
            만약 바로 안 보이면 브라우저에서 <strong>Cmd + R</strong> (Mac) 또는 <strong>F5</strong> (Windows)로 새로고침하세요.
          </p>
        </AccordionItem>

        <AccordionItem title="Shopify 테마의 주요 파일들">
          <p>알아두면 요청할 때 더 정확하게 말할 수 있어요.</p>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>폴더/파일</th>
                  <th>역할</th>
                  <th>요청 예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>sections/</code></td>
                  <td>페이지의 각 섹션 (헤더, 푸터, 상품 등)</td>
                  <td>&quot;header 섹션 수정해줘&quot;</td>
                </tr>
                <tr>
                  <td><code>assets/</code></td>
                  <td>CSS, JS, 이미지 파일</td>
                  <td>&quot;전체 폰트 바꿔줘&quot;</td>
                </tr>
                <tr>
                  <td><code>templates/</code></td>
                  <td>페이지 레이아웃 설정</td>
                  <td>&quot;상품 페이지 구조 바꿔줘&quot;</td>
                </tr>
                <tr>
                  <td><code>snippets/</code></td>
                  <td>재사용되는 작은 코드 조각</td>
                  <td>&quot;가격 표시 형식 바꿔줘&quot;</td>
                </tr>
                <tr>
                  <td><code>layout/</code></td>
                  <td>전체 페이지 뼈대</td>
                  <td>&quot;전체 레이아웃 수정해줘&quot;</td>
                </tr>
                <tr>
                  <td><code>config/</code></td>
                  <td>테마 설정값</td>
                  <td>&quot;테마 설정 확인해줘&quot;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note">
            폴더 이름을 몰라도 괜찮아요. &quot;헤더 색상 바꿔줘&quot;처럼 말하면 Claude가 알아서 맞는 파일을 찾아줘요.
          </p>
        </AccordionItem>
      </div>

      {/* Step 6: 수정사항 저장 (GitHub에 올리기) */}
      <div className="card">
        <h3>
          <i className="fas fa-cloud-upload-alt" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          Step 6. 수정사항 저장하기
        </h3>
        <p className="description">
          수정이 마음에 들면 GitHub에 올려서 팀과 공유하세요.
          이것도 Claude Code에게 시키면 돼요.
        </p>

        <AccordionItem title="GitHub에 올리기" defaultOpen>
          <div className="code-block">
            <div className="code-header">
              <span>Claude Code 프롬프트</span>
            </div>
            <pre>{`수정한 내용 커밋하고 푸시해줘`}</pre>
          </div>
          <p className="note">
            Claude가 변경된 파일들을 정리해서 GitHub에 올려줘요.
            팀원들이 변경사항을 확인할 수 있게 됩니다.
          </p>
        </AccordionItem>

        <AccordionItem title="커밋이 뭔가요?">
          <p>
            &quot;커밋(commit)&quot;은 수정한 내용을 저장하는 거예요. 게임의 세이브 포인트라고 생각하면 돼요.
            &quot;푸시(push)&quot;는 그 세이브를 GitHub에 올리는 거예요.
          </p>
          <div className="diagram">
            <div className="diagram-item">
              <div className="diagram-icon"><i className="fas fa-save"></i></div>
              <div className="diagram-label">커밋<br/>(로컬 저장)</div>
            </div>
            <div className="diagram-arrow"><i className="fas fa-long-arrow-alt-right"></i></div>
            <div className="diagram-item">
              <div className="diagram-icon"><i className="fas fa-cloud-upload-alt"></i></div>
              <div className="diagram-label">푸시<br/>(GitHub에 올리기)</div>
            </div>
          </div>
        </AccordionItem>
      </div>

      {/* 여러 테마 동시 작업 */}
      <div className="card">
        <h3>
          <i className="fas fa-th-list" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          여러 스토어 동시에 작업하기
        </h3>
        <p className="description">
          프로젝트가 여러 개일 때, 각각 다른 포트(번호)로 동시에 미리볼 수 있어요.
        </p>

        <AccordionItem title="포트가 뭔가요?" defaultOpen>
          <p>
            미리보기 서버의 &quot;문 번호&quot;라고 생각하세요. 기본은 <code>9292</code>번 문을 사용해요.
            두 번째 서버를 열려면 다른 문 번호를 지정해야 해요.
          </p>
        </AccordionItem>

        <AccordionItem title="두 번째 서버 포트 충돌 에러">
          <p>이미 서버가 하나 실행 중인데 또 실행하면 이런 에러가 나요:</p>
          <div className="code-block">
            <div className="code-header">
              <span>에러 메시지</span>
            </div>
            <pre className="error-text">{`Error: listen EADDRINUSE: address already in use 127.0.0.1:9292`}</pre>
          </div>
          <p style={{ marginTop: '12px' }}>걱정 마세요! <code>--port</code>로 다른 번호를 지정하면 돼요.</p>
          <CommandBox command="shopify theme dev --store='두번째스토어' --port=9293" />
        </AccordionItem>

        <AccordionItem title="실전 예시">
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>스토어</th>
                  <th>브라우저 주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>스토어 A (기본)</td>
                  <td><code>http://127.0.0.1:9292</code></td>
                </tr>
                <tr>
                  <td>스토어 B (포트 변경)</td>
                  <td><code>http://127.0.0.1:9293</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="code-block">
            <div className="code-header">
              <span>Claude Code 프롬프트</span>
            </div>
            <pre>{`스토어B 테마 개발 서버를 9293 포트로 실행해줘`}</pre>
          </div>
        </AccordionItem>
      </div>

      {/* 전체 워크플로우 */}
      <div className="card">
        <h3>
          <i className="fas fa-route" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          전체 흐름 한눈에 보기
        </h3>
        <p className="description">
          처음 세팅부터 수정, 저장까지 전체 과정이에요.
        </p>

        <div className="workflow">
          <div className="workflow-step">
            <div className="workflow-num">1</div>
            <div className="workflow-content">
              <h4>테마 코드 가져오기 (처음 1회)</h4>
              <div className="code-block">
                <div className="code-header"><span>Claude Code 프롬프트</span></div>
                <pre>{`https://github.com/우리팀/테마이름
/Users/나/Documents/프로젝트 밑에 클론해줘`}</pre>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="workflow-num">2</div>
            <div className="workflow-content">
              <h4>스토어 인증하기 (처음 1회, 터미널에서)</h4>
              <div className="code-block">
                <pre>{`cd /테마/경로
shopify theme dev --store="내스토어ID"
# → 브라우저에서 Shopify 로그인
# → 성공 후 Ctrl + C로 종료`}</pre>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="workflow-num">3</div>
            <div className="workflow-content">
              <h4>미리보기 서버 켜기</h4>
              <div className="code-block">
                <div className="code-header"><span>Claude Code 프롬프트</span></div>
                <pre>{`개발 서버 실행해줘`}</pre>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="workflow-num">4</div>
            <div className="workflow-content">
              <h4>브라우저에서 미리보기 열기</h4>
              <p><code>http://127.0.0.1:9292</code>를 브라우저에서 열어요</p>
            </div>
          </div>

          <div className="workflow-step">
            <div className="workflow-num">5</div>
            <div className="workflow-content">
              <h4>Claude Code에게 수정 요청</h4>
              <div className="code-block">
                <div className="code-header"><span>Claude Code 프롬프트</span></div>
                <pre>{`헤더 배경색을 검정으로 바꿔줘`}</pre>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="workflow-num">6</div>
            <div className="workflow-content">
              <h4>브라우저에서 확인 &rarr; 반복</h4>
              <p>마음에 들 때까지 5번을 반복하세요</p>
            </div>
          </div>

          <div className="workflow-step">
            <div className="workflow-num">7</div>
            <div className="workflow-content">
              <h4>수정 완료 후 GitHub에 저장</h4>
              <div className="code-block">
                <div className="code-header"><span>Claude Code 프롬프트</span></div>
                <pre>{`수정한 내용 커밋하고 푸시해줘`}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="tip-box" style={{ marginTop: '20px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>매일 하는 작업은 3~7번만 반복하면 돼요.</strong> 1~2번은 처음 한 번만 하면 됩니다.
          </div>
        </div>
      </div>

      {/* 자주 묻는 질문 */}
      <div className="card">
        <h3>
          <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          자주 묻는 질문
        </h3>

        <AccordionItem title="'EADDRINUSE' 에러가 나요" defaultOpen>
          <p>이미 다른 서버가 같은 포트를 쓰고 있어요. <code>--port</code> 옵션으로 다른 번호를 쓰세요.</p>
          <CommandBox command="shopify theme dev --store='내스토어' --port=9293" />
        </AccordionItem>

        <AccordionItem title="Claude Code에서 비밀번호를 입력할 수 없어요">
          <p>
            정상이에요. Claude Code는 비밀번호 입력을 지원하지 않아요.
            터미널(Terminal 또는 iTerm2)에서 먼저 한 번 인증을 완료하세요.
          </p>
        </AccordionItem>

        <AccordionItem title="인증했는데 또 비밀번호를 물어봐요">
          <p>인증이 만료된 거예요. 터미널에서 다시 한 번 인증하면 돼요.</p>
          <CommandBox command="cd /테마/경로 && shopify theme dev --store='내스토어ID'" />
        </AccordionItem>

        <AccordionItem title="수정했는데 브라우저에 안 보여요">
          <p>
            브라우저에서 <strong>Cmd + R</strong> (Mac) 또는 <strong>F5</strong> (Windows)로 새로고침해보세요.
            그래도 안 되면 개발 서버가 켜져 있는지 확인하세요.
          </p>
        </AccordionItem>

        <AccordionItem title="실수로 잘못 수정했어요. 되돌릴 수 있나요?">
          <p>Claude Code에게 되돌려달라고 하면 돼요.</p>
          <div className="code-block">
            <div className="code-header"><span>Claude Code 프롬프트</span></div>
            <pre>{`방금 수정한 거 원래대로 되돌려줘`}</pre>
          </div>
          <p className="note">Git이 변경 이력을 저장하고 있어서 언제든 되돌릴 수 있어요. 걱정 마세요!</p>
        </AccordionItem>

        <AccordionItem title="실제 스토어에 바로 반영되나요?">
          <p>
            <strong>아니요!</strong> 개발 서버는 내 컴퓨터에서만 보이는 미리보기예요.
            실제 스토어에 반영하려면 별도로 &quot;테마 배포&quot; 과정이 필요해요.
            이건 보통 개발자가 해요.
          </p>
        </AccordionItem>
      </div>

      {/* 팁 */}
      <div className="card">
        <h3>
          <i className="fas fa-star" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
          디자이너를 위한 팁
        </h3>

        <div className="tip-box">
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>구체적으로 말하세요:</strong> &quot;이쁘게 바꿔줘&quot;보다 &quot;배경색 #f5f5f5, 폰트 크기 16px, 간격 24px로 바꿔줘&quot;처럼
            구체적인 수치를 말하면 원하는 결과가 나와요.
          </div>
        </div>

        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>스크린샷 활용:</strong> 브라우저에서 스크린샷을 찍어서 &quot;이 부분 수정해줘&quot;라고 보여주면
            Claude가 정확히 어디를 수정해야 하는지 이해해요.
          </div>
        </div>

        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>모바일도 확인하세요:</strong> 브라우저 개발자 도구(F12)에서 모바일 모드로
            확인하거나, Claude에게 &quot;모바일에서 어떻게 보이는지 확인해줘&quot;라고 요청하세요.
          </div>
        </div>

        <div className="tip-box" style={{ marginTop: '12px' }}>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>작업할 때마다 커밋하세요:</strong> &quot;헤더 색상 변경 커밋해줘&quot;처럼 수정할 때마다
            커밋하면 나중에 문제가 생겨도 쉽게 되돌릴 수 있어요.
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
          border-color: var(--primary);
          border-width: 2px;
        }

        .permission-card {
          border-color: #ef4444;
          border-width: 2px;
          background: rgba(239, 68, 68, 0.03);
        }

        .permission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }

        .permission-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: var(--bg-primary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .permission-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border-radius: 12px;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .permission-content h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .permission-content p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }

        .permission-cta {
          display: flex;
          gap: 12px;
          padding: 16px 20px;
          background: rgba(239, 68, 68, 0.08);
          border-radius: 12px;
          border-left: 4px solid #ef4444;
        }

        .permission-cta > i {
          color: #ef4444;
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .permission-cta > div {
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .permission-template {
          margin-top: 10px;
          padding: 12px 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .permission-template code {
          background: var(--bg-tertiary);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.85rem;
        }

        .description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .use-case-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .use-case {
          padding: 16px;
          border-radius: 12px;
        }

        .use-case.before {
          background: rgba(239, 68, 68, 0.06);
          border: 1px solid rgba(239, 68, 68, 0.15);
        }

        .use-case.after {
          background: rgba(34, 197, 94, 0.06);
          border: 1px solid rgba(34, 197, 94, 0.15);
        }

        .use-case-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .use-case.before .use-case-label { color: #ef4444; }
        .use-case.after .use-case-label { color: #22c55e; }

        .use-case-content p {
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
          color: var(--text-secondary);
        }

        .how-it-works {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px 0;
          flex-wrap: wrap;
        }

        .how-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          min-width: 100px;
        }

        .how-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          border: 2px solid var(--border-color);
          border-radius: 16px;
          font-size: 1.4rem;
          color: var(--primary);
        }

        .how-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-align: center;
          line-height: 1.4;
          font-weight: 500;
        }

        .how-arrow {
          color: var(--primary);
          font-size: 1.2rem;
          flex-shrink: 0;
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

        .prereq-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .prereq-number {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          font-size: 0.8rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .prereq-body {
          flex: 1;
        }

        .prereq-body h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .prereq-body > p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .account-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 8px;
        }

        .account-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px;
          background: var(--bg-secondary);
          border-radius: 8px;
        }

        .account-item > i {
          font-size: 1.3rem;
          color: var(--primary);
          margin-top: 2px;
          width: 24px;
          text-align: center;
          flex-shrink: 0;
        }

        .account-item strong {
          display: block;
          margin-bottom: 4px;
          font-size: 0.9rem;
        }

        .account-item span {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
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

        .warning-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: rgba(234, 179, 8, 0.08);
          border: 1px solid rgba(234, 179, 8, 0.2);
          border-radius: 12px;
          margin-top: 16px;
        }

        .warning-item i {
          color: #eab308;
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .warning-item div {
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

        .result-block {
          border-color: #22c55e;
        }

        .error-text {
          color: #ef4444;
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

        .diagram {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 24px;
          margin: 16px 0;
        }

        .diagram-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .diagram-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          border: 2px solid var(--border-color);
          border-radius: 16px;
          font-size: 1.5rem;
          color: var(--primary);
        }

        .diagram-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          text-align: center;
          line-height: 1.4;
        }

        .diagram-arrow {
          color: var(--primary);
          font-size: 1.5rem;
        }

        .step-by-step {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 12px 0;
        }

        .mini-step {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
        }

        .mini-num {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-secondary);
          flex-shrink: 0;
        }

        .example-prompts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 10px;
          margin-top: 12px;
        }

        .example-prompt {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
        }

        .example-tag {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: var(--primary);
          color: white;
          padding: 3px 8px;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .example-prompt p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .workflow {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .workflow-step {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .workflow-num {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          font-size: 0.9rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .workflow-content {
          flex: 1;
        }

        .workflow-content h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .workflow-content p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .workflow-content .code-block {
          margin: 0;
        }

        @media (max-width: 640px) {
          .section-header h2 { font-size: 1.5rem; }
          .feature-grid { grid-template-columns: 1fr; }
          .use-case-grid { grid-template-columns: 1fr; }
          .permission-grid { grid-template-columns: 1fr; }
          .how-it-works { gap: 8px; }
          .how-step { min-width: 70px; }
          .how-icon { width: 44px; height: 44px; font-size: 1.1rem; }
          .how-label { font-size: 0.7rem; }
          .how-arrow { font-size: 0.9rem; }
          .diagram { gap: 16px; }
          .diagram-icon { width: 48px; height: 48px; font-size: 1.2rem; }
          .example-prompts { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
