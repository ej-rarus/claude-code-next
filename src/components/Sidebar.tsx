'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  href: string;
  icon: string;
  label: string;
}

interface NavFolder {
  icon: string;
  label: string;
  items: NavItem[];
}

const navSections = {
  start: {
    title: '시작하기',
    items: [
      { href: '/', icon: 'fa-home', label: '홈' },
      { href: '/quickstart', icon: 'fa-rocket', label: '빠른 시작' },
    ],
  },
  install: {
    title: '설치 가이드',
    items: [
      { href: '/install/step0', icon: 'fa-info-circle', label: '0단계: 시작하기 전에' },
      { href: '/install/step1', icon: 'fa-download', label: '1단계: 패키지 관리자' },
      { href: '/install/step2', icon: 'fa-terminal', label: '2단계: 터미널 설치' },
      { href: '/install/step3', icon: 'fa-robot', label: '3단계: Claude Code' },
      { href: '/install/basic', icon: 'fa-play-circle', label: '기본 사용법' },
    ],
  },
  convert: {
    title: '기능 가이드',
    folder: {
      icon: 'fa-file-export',
      label: '파일 변환',
      items: [
        { href: '/convert/ppt', icon: 'fa-file-powerpoint', label: 'PPT → MD' },
        { href: '/convert/pdf', icon: 'fa-file-pdf', label: 'PDF → MD' },
        { href: '/convert/image', icon: 'fa-image', label: '이미지 → 텍스트' },
        { href: '/convert/excel', icon: 'fa-file-excel', label: 'Excel → 테이블' },
      ],
    },
  },
  docs: {
    title: '문서 작성',
    folder: {
      icon: 'fa-edit',
      label: '문서 작성',
      items: [
        { href: '/docs/create', icon: 'fa-plus', label: '새 문서 생성' },
        { href: '/docs/edit', icon: 'fa-pencil-alt', label: '문서 수정' },
        { href: '/docs/template', icon: 'fa-copy', label: '템플릿 활용' },
      ],
    },
  },
  features: {
    title: '고급 기능',
    items: [
      { href: '/analysis', icon: 'fa-search', label: '문서 분석' },
      { href: '/web', icon: 'fa-globe', label: '웹 정보 수집' },
      { href: '/automation', icon: 'fa-magic', label: '자동화' },
      { href: '/mcp', icon: 'fa-plug', label: 'MCP 서버' },
    ],
  },
  tools: {
    title: '확장 & 도구',
    items: [
      { href: '/skills', icon: 'fa-wand-magic-sparkles', label: 'Skills (커스텀 명령)' },
      { href: '/hooks', icon: 'fa-bell', label: 'Hooks (이벤트 훅)' },
      { href: '/claude-md', icon: 'fa-file-code', label: 'CLAUDE.md (프로젝트 설정)' },
      { href: '/ide', icon: 'fa-laptop-code', label: 'IDE 연동' },
      { href: '/github-integration', icon: 'fab fa-github', label: 'GitHub 연동' },
      { href: '/local-agent', icon: 'fa-robot', label: '로컬 에이전트' },
      { href: '/openclaw', icon: 'fa-paw', label: 'OpenClaw' },
    ],
  },
  reference: {
    title: '레퍼런스',
    items: [
      { href: '/examples', icon: 'fa-lightbulb', label: '실전 예시' },
      { href: '/examples/shopify-theme', icon: 'fa-palette', label: 'Shopify 테마 디자인' },
      { href: '/tips', icon: 'fa-star', label: '유용한 팁' },
      { href: '/tips/session-resume', icon: 'fa-history', label: '세션 이어하기' },
      { href: '/tips/markdown-viewer', icon: 'fa-eye', label: 'MD 파일 보기' },
      { href: '/limits', icon: 'fa-info-circle', label: '가능/불가능' },
      { href: '/updates', icon: 'fa-bullhorn', label: '업데이트 내역' },
    ],
  },
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [openFolders, setOpenFolders] = useState<string[]>(['convert', 'docs']);

  const toggleFolder = (key: string) => {
    setOpenFolders((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const isActive = (href: string) => pathname === href;

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <Link href="/" className="logo" onClick={onClose}>
          <div className="logo-icon">
            <i className="fas fa-bolt"></i>
          </div>
          <span>Claudxk</span>
        </Link>
      </div>

      <nav>
        {/* 시작하기 */}
        <div className="nav-section">
          <div className="nav-section-title">{navSections.start.title}</div>
          {navSections.start.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
              onClick={onClose}
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* 설치 가이드 */}
        <div className="nav-section">
          <div className="nav-section-title">{navSections.install.title}</div>
          {navSections.install.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
              onClick={onClose}
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* 파일 변환 */}
        <div className="nav-section">
          <div className="nav-section-title">{navSections.convert.title}</div>
          <div
            className={`nav-folder ${openFolders.includes('convert') ? 'open' : ''}`}
            onClick={() => toggleFolder('convert')}
          >
            <div className="nav-item nav-folder-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className={`fas ${navSections.convert.folder.icon}`}></i>
                <span>{navSections.convert.folder.label}</span>
              </div>
              <i className="fas fa-chevron-right arrow"></i>
            </div>
            <div className="nav-folder-content">
              {navSections.convert.folder.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                >
                  <i className={`fas ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 문서 작성 */}
        <div className="nav-section">
          <div className="nav-section-title">{navSections.docs.title}</div>
          <div
            className={`nav-folder ${openFolders.includes('docs') ? 'open' : ''}`}
            onClick={() => toggleFolder('docs')}
          >
            <div className="nav-item nav-folder-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className={`fas ${navSections.docs.folder.icon}`}></i>
                <span>{navSections.docs.folder.label}</span>
              </div>
              <i className="fas fa-chevron-right arrow"></i>
            </div>
            <div className="nav-folder-content">
              {navSections.docs.folder.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                >
                  <i className={`fas ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 고급 기능 */}
        <div className="nav-section">
          <div className="nav-section-title">{navSections.features.title}</div>
          {navSections.features.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
              onClick={onClose}
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* 확장 & 도구 */}
        <div className="nav-section">
          <div className="nav-section-title">{navSections.tools.title}</div>
          {navSections.tools.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
              onClick={onClose}
            >
              <i className={item.icon.startsWith('fab ') ? item.icon : `fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* 레퍼런스 */}
        <div className="nav-section">
          <div className="nav-section-title">{navSections.reference.title}</div>
          {navSections.reference.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
              onClick={onClose}
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
