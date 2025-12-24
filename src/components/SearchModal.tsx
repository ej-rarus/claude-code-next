'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  href: string;
  icon: string;
  label: string;
  category: string;
}

const searchItems: SearchItem[] = [
  // 시작하기
  { href: '/', icon: 'fa-home', label: '홈', category: '시작하기' },
  { href: '/quickstart', icon: 'fa-rocket', label: '빠른 시작', category: '시작하기' },
  // 설치 가이드
  { href: '/install/step0', icon: 'fa-info-circle', label: '0단계: 시작하기 전에', category: '설치 가이드' },
  { href: '/install/step1', icon: 'fa-download', label: '1단계: Homebrew', category: '설치 가이드' },
  { href: '/install/step2', icon: 'fa-terminal', label: '2단계: iTerm2', category: '설치 가이드' },
  { href: '/install/step3', icon: 'fa-robot', label: '3단계: Claude Code', category: '설치 가이드' },
  { href: '/install/basic', icon: 'fa-play-circle', label: '기본 사용법', category: '설치 가이드' },
  // 파일 변환
  { href: '/convert/ppt', icon: 'fa-file-powerpoint', label: 'PPT → MD', category: '파일 변환' },
  { href: '/convert/pdf', icon: 'fa-file-pdf', label: 'PDF → MD', category: '파일 변환' },
  { href: '/convert/image', icon: 'fa-image', label: '이미지 → 텍스트', category: '파일 변환' },
  { href: '/convert/excel', icon: 'fa-file-excel', label: 'Excel → 테이블', category: '파일 변환' },
  // 문서 작성
  { href: '/docs/create', icon: 'fa-plus', label: '새 문서 생성', category: '문서 작성' },
  { href: '/docs/edit', icon: 'fa-pencil-alt', label: '문서 수정', category: '문서 작성' },
  { href: '/docs/template', icon: 'fa-copy', label: '템플릿 활용', category: '문서 작성' },
  // 고급 기능
  { href: '/analysis', icon: 'fa-search', label: '문서 분석', category: '고급 기능' },
  { href: '/web', icon: 'fa-globe', label: '웹 정보 수집', category: '고급 기능' },
  { href: '/automation', icon: 'fa-magic', label: '자동화', category: '고급 기능' },
  // 레퍼런스
  { href: '/examples', icon: 'fa-lightbulb', label: '실전 예시', category: '레퍼런스' },
  { href: '/tips', icon: 'fa-star', label: '유용한 팁', category: '레퍼런스' },
  { href: '/limits', icon: 'fa-info-circle', label: '가능/불가능', category: '레퍼런스' },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return searchItems;
    const lowerQuery = query.toLowerCase();
    return searchItems.filter(
      (item) =>
        item.label.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filteredItems.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
        e.preventDefault();
        handleSelect(filteredItems[selectedIndex]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setQuery('');
      setSelectedIndex(0);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleSelect = (item: SearchItem) => {
    router.push(item.href);
    onClose();
  };

  if (!isOpen) return null;

  // Group items by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  let currentIndex = 0;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="search-modal" onClick={(e) => e.stopPropagation()}>
          <div className="search-input-wrapper">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="페이지 검색..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <kbd>Esc</kbd>
          </div>

          <div className="search-results">
            {filteredItems.length === 0 ? (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <p>검색 결과가 없습니다</p>
              </div>
            ) : (
              Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="result-group">
                  <div className="group-title">{category}</div>
                  {items.map((item) => {
                    const itemIndex = currentIndex++;
                    return (
                      <div
                        key={item.href}
                        className={`result-item ${itemIndex === selectedIndex ? 'selected' : ''}`}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(itemIndex)}
                      >
                        <i className={`fas ${item.icon}`}></i>
                        <span>{item.label}</span>
                        {itemIndex === selectedIndex && (
                          <span className="enter-hint">
                            <kbd>Enter</kbd>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          <div className="search-footer">
            <div className="hint">
              <kbd>↑</kbd><kbd>↓</kbd> 이동
            </div>
            <div className="hint">
              <kbd>Enter</kbd> 선택
            </div>
            <div className="hint">
              <kbd>Esc</kbd> 닫기
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
          align-items: flex-start;
          justify-content: center;
          padding-top: 15vh;
          z-index: 1000;
          animation: fadeIn 0.15s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .search-modal {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          width: 90%;
          max-width: 560px;
          max-height: 70vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: slideDown 0.2s ease;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-color);
        }

        .search-input-wrapper i {
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        .search-input-wrapper input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .search-input-wrapper input::placeholder {
          color: var(--text-muted);
        }

        .search-input-wrapper kbd {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 4px 8px;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .search-results {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }

        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          color: var(--text-muted);
        }

        .no-results i {
          font-size: 2rem;
          margin-bottom: 12px;
          opacity: 0.5;
        }

        .result-group {
          margin-bottom: 8px;
        }

        .group-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 8px 12px 4px;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .result-item:hover,
        .result-item.selected {
          background: var(--bg-secondary);
        }

        .result-item.selected {
          background: var(--primary);
          color: white;
        }

        .result-item i {
          width: 20px;
          text-align: center;
          color: var(--text-muted);
        }

        .result-item.selected i {
          color: white;
        }

        .result-item span {
          flex: 1;
        }

        .enter-hint {
          opacity: 0.7;
        }

        .enter-hint kbd {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 0.7rem;
        }

        .search-footer {
          display: flex;
          gap: 16px;
          padding: 12px 20px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }

        .hint {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .hint kbd {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 0.7rem;
          min-width: 20px;
          text-align: center;
        }
      `}</style>
    </>
  );
}
