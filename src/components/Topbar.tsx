'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import ShortcutsModal from './ShortcutsModal';
import HelpModal from './HelpModal';
import SearchModal from './SearchModal';

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const router = useRouter();
  const { toggleTheme } = useTheme();
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Ignore if typing in input/textarea
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement
    ) {
      // Allow Escape to close search even when in input
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
      return;
    }

    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const modifier = isMac ? e.metaKey : e.ctrlKey;

    if (modifier) {
      switch (e.key.toLowerCase()) {
        case 'k':
          e.preventDefault();
          setIsSearchOpen(true);
          break;
        case 'd':
          e.preventDefault();
          toggleTheme();
          break;
        case '/':
          e.preventDefault();
          setIsShortcutsOpen(true);
          break;
        case '1':
          e.preventDefault();
          router.push('/quickstart');
          break;
        case '2':
          e.preventDefault();
          router.push('/install/step0');
          break;
        case '3':
          e.preventDefault();
          router.push('/examples');
          break;
        case '4':
          e.preventDefault();
          router.push('/tips');
          break;
      }

      // Cmd+Shift+? for help
      if (e.shiftKey && e.key === '?') {
        e.preventDefault();
        setIsHelpOpen(true);
      }
    }
  }, [toggleTheme, router, isSearchOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <button className="mobile-toggle" onClick={onMenuClick}>
        <i className="fas fa-bars"></i>
      </button>

      <div className="topbar">
        <div
          className="search-box"
          onClick={() => setIsSearchOpen(true)}
        >
          <i className="fas fa-search"></i>
          <span className="search-placeholder">검색어를 입력하세요...</span>
          <kbd className="search-shortcut">⌘K</kbd>
        </div>
        <div className="topbar-actions">
          <ThemeToggle />
          <button
            className="btn btn-ghost"
            onClick={() => setIsShortcutsOpen(true)}
            title="단축키 (⌘/)"
          >
            <i className="fas fa-keyboard"></i>
            <span className="btn-text">단축키</span>
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setIsHelpOpen(true)}
            title="도움말 (⌘?)"
          >
            <i className="fas fa-question-circle"></i>
            <span className="btn-text">도움말</span>
          </button>
        </div>
      </div>

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <style jsx>{`
        .search-box {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .search-box:hover {
          border-color: var(--primary);
          background: var(--bg-tertiary);
        }

        .search-box i {
          color: var(--text-muted);
        }

        .search-placeholder {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .search-shortcut {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 2px 8px;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-left: auto;
        }

        .btn-text {
          display: inline;
        }

        @media (max-width: 768px) {
          .search-placeholder {
            display: none;
          }

          .search-shortcut {
            display: none;
          }

          .btn-text {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
