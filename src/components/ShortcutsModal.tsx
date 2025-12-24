'use client';

import { useEffect } from 'react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShortcutsModal({ isOpen, onClose }: ShortcutsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const shortcuts = [
    { keys: ['⌘', 'K'], description: '검색창 열기' },
    { keys: ['⌘', 'D'], description: '다크/라이트 모드 전환' },
    { keys: ['⌘', '/'], description: '단축키 도움말' },
    { keys: ['⌘', '?'], description: '도움말 열기' },
    { keys: ['Esc'], description: '모달 닫기' },
  ];

  const navigationShortcuts = [
    { keys: ['⌘', '1'], description: '빠른 시작' },
    { keys: ['⌘', '2'], description: '설치 가이드' },
    { keys: ['⌘', '3'], description: '실전 예시' },
    { keys: ['⌘', '4'], description: '유용한 팁' },
  ];

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>
              <i className="fas fa-keyboard" style={{ marginRight: '12px', color: 'var(--primary)' }}></i>
              키보드 단축키
            </h2>
            <button className="close-btn" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="modal-body">
            <div className="shortcut-section">
              <h3>일반</h3>
              <div className="shortcut-list">
                {shortcuts.map((shortcut, index) => (
                  <div key={index} className="shortcut-item">
                    <span className="shortcut-desc">{shortcut.description}</span>
                    <div className="shortcut-keys">
                      {shortcut.keys.map((key, keyIndex) => (
                        <span key={keyIndex}>
                          <kbd>{key}</kbd>
                          {keyIndex < shortcut.keys.length - 1 && <span className="plus">+</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="shortcut-section">
              <h3>페이지 이동</h3>
              <div className="shortcut-list">
                {navigationShortcuts.map((shortcut, index) => (
                  <div key={index} className="shortcut-item">
                    <span className="shortcut-desc">{shortcut.description}</span>
                    <div className="shortcut-keys">
                      {shortcut.keys.map((key, keyIndex) => (
                        <span key={keyIndex}>
                          <kbd>{key}</kbd>
                          {keyIndex < shortcut.keys.length - 1 && <span className="plus">+</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          width: 90%;
          max-width: 480px;
          max-height: 80vh;
          overflow: hidden;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-header h2 {
          font-size: 1.3rem;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 1.2rem;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .modal-body {
          padding: 24px;
          overflow-y: auto;
          max-height: calc(80vh - 80px);
        }

        .shortcut-section {
          margin-bottom: 24px;
        }

        .shortcut-section:last-child {
          margin-bottom: 0;
        }

        .shortcut-section h3 {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .shortcut-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .shortcut-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-radius: 8px;
        }

        .shortcut-desc {
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .shortcut-keys {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        kbd {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 28px;
          height: 28px;
          padding: 0 8px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-primary);
          font-family: inherit;
        }

        .plus {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin: 0 2px;
        }
      `}</style>
    </>
  );
}
