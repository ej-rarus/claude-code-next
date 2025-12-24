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
  keywords: string[];
  description: string;
}

const searchItems: SearchItem[] = [
  // 시작하기
  {
    href: '/',
    icon: 'fa-home',
    label: '홈',
    category: '시작하기',
    description: 'Claude Code 문서 가이드 메인 페이지',
    keywords: ['메인', '홈페이지', '시작', '소개', '문서 작업', 'AI', '비개발자'],
  },
  {
    href: '/quickstart',
    icon: 'fa-rocket',
    label: '빠른 시작',
    category: '시작하기',
    description: '4단계로 Claude Code 시작하기',
    keywords: ['시작', '폴더 지정', '파일 확인', '작업 요청', '결과 활용', '클립보드', 'FAQ', '무료', '파일 형식', '크기 제한'],
  },
  // 설치 가이드
  {
    href: '/install/step0',
    icon: 'fa-info-circle',
    label: '0단계: 시작하기 전에',
    category: '설치 가이드',
    description: '설치 전 확인사항',
    keywords: ['맥북', 'MacBook', 'macOS', 'Apple Silicon', 'M1', 'M2', 'M3', '인터넷', '관리자 권한', '필수 조건'],
  },
  {
    href: '/install/step1',
    icon: 'fa-download',
    label: '1단계: Homebrew',
    category: '설치 가이드',
    description: 'Homebrew 패키지 관리자 설치',
    keywords: ['Homebrew', '홈브류', '패키지 관리자', '터미널', 'brew', '설치', 'install'],
  },
  {
    href: '/install/step2',
    icon: 'fa-terminal',
    label: '2단계: iTerm2',
    category: '설치 가이드',
    description: 'iTerm2 터미널 설치',
    keywords: ['iTerm2', '아이텀', '터미널', 'terminal', 'brew install', 'cask'],
  },
  {
    href: '/install/step3',
    icon: 'fa-robot',
    label: '3단계: Claude Code',
    category: '설치 가이드',
    description: 'Claude Code CLI 설치',
    keywords: ['Claude Code', '클로드 코드', 'npm', 'Node.js', '노드', 'CLI', '설치', 'anthropic'],
  },
  {
    href: '/install/basic',
    icon: 'fa-play-circle',
    label: '기본 사용법',
    category: '설치 가이드',
    description: 'AI에게 일 시키는 방법',
    keywords: ['사용법', '명령어', '파일 변환', 'PPT', '워드', 'PDF', '요약', '데이터 분석', '엑셀', '문서 작성', '회의록', '기획서', '보고서', '반복 작업', '이름 바꾸기', '크기 조정', '코드', '버그', '테스트', '번역', '영어', '맞춤법', '웹 검색', 'URL', '경쟁사', '폴더 구조', '중복 파일', '요약', '키워드', '목차', '클립보드', '복사', '할 일', '체크리스트', '일정', '타임라인', '마감일'],
  },
  // 파일 변환
  {
    href: '/convert/ppt',
    icon: 'fa-file-powerpoint',
    label: 'PPT → MD',
    category: '파일 변환',
    description: 'PowerPoint를 마크다운으로 변환',
    keywords: ['PPT', 'PowerPoint', '파워포인트', '마크다운', 'markdown', '변환', '슬라이드', '발표자료', 'pptx'],
  },
  {
    href: '/convert/pdf',
    icon: 'fa-file-pdf',
    label: 'PDF → MD',
    category: '파일 변환',
    description: 'PDF를 마크다운으로 변환',
    keywords: ['PDF', '마크다운', 'markdown', '변환', '문서', '텍스트 추출', '요약'],
  },
  {
    href: '/convert/image',
    icon: 'fa-image',
    label: '이미지 → 텍스트',
    category: '파일 변환',
    description: '이미지에서 텍스트 추출 (OCR)',
    keywords: ['이미지', 'image', 'OCR', '텍스트 추출', 'PNG', 'JPG', 'JPEG', '사진', '스크린샷', '글자 인식'],
  },
  {
    href: '/convert/excel',
    icon: 'fa-file-excel',
    label: 'Excel → 테이블',
    category: '파일 변환',
    description: 'Excel을 마크다운 테이블로 변환',
    keywords: ['Excel', '엑셀', '테이블', '표', 'xlsx', 'csv', '스프레드시트', '데이터'],
  },
  // 문서 작성
  {
    href: '/docs/create',
    icon: 'fa-plus',
    label: '새 문서 생성',
    category: '문서 작성',
    description: '새로운 문서 만들기',
    keywords: ['문서 생성', '새 문서', '만들기', '작성', '기획서', '보고서', '제안서', '초안'],
  },
  {
    href: '/docs/edit',
    icon: 'fa-pencil-alt',
    label: '문서 수정',
    category: '문서 작성',
    description: '기존 문서 수정하기',
    keywords: ['문서 수정', '편집', 'edit', '고치기', '업데이트', '변경'],
  },
  {
    href: '/docs/template',
    icon: 'fa-copy',
    label: '템플릿 활용',
    category: '문서 작성',
    description: '문서 템플릿 사용하기',
    keywords: ['템플릿', 'template', '양식', '서식', '회의록', '보고서', '기획서'],
  },
  // 고급 기능
  {
    href: '/analysis',
    icon: 'fa-search',
    label: '문서 분석',
    category: '고급 기능',
    description: '문서 내용 분석하기',
    keywords: ['분석', 'analysis', '요약', '핵심', '키워드', '통계', '인사이트'],
  },
  {
    href: '/web',
    icon: 'fa-globe',
    label: '웹 정보 수집',
    category: '고급 기능',
    description: '웹에서 정보 가져오기',
    keywords: ['웹', 'web', 'URL', '크롤링', '정보 수집', '인터넷', '검색', '사이트'],
  },
  {
    href: '/automation',
    icon: 'fa-magic',
    label: '자동화',
    category: '고급 기능',
    description: '반복 작업 자동화',
    keywords: ['자동화', 'automation', '반복', '일괄 처리', 'batch', '스크립트', '매크로'],
  },
  // 레퍼런스
  {
    href: '/examples',
    icon: 'fa-lightbulb',
    label: '실전 예시',
    category: '레퍼런스',
    description: '실제 업무 활용 예시',
    keywords: ['예시', 'example', '회의록', 'API 문서', '보고서 요약', '번역', '다국어', '실전'],
  },
  {
    href: '/tips',
    icon: 'fa-star',
    label: '유용한 팁',
    category: '레퍼런스',
    description: '효율적인 사용 팁',
    keywords: ['팁', 'tip', '클립보드', '복사', '단축키', '파일 경로', '드래그', '일괄 처리', '이어하기'],
  },
  {
    href: '/limits',
    icon: 'fa-info-circle',
    label: '가능/불가능',
    category: '레퍼런스',
    description: 'Claude Code의 기능 범위',
    keywords: ['가능', '불가능', '제한', '한계', '지원', '파일 변환', '동영상', '오디오', '데이터베이스', 'exe'],
  },
];

interface SearchResult extends SearchItem {
  matchedKeyword?: string;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = useMemo((): SearchResult[] => {
    if (!query.trim()) return searchItems;
    const lowerQuery = query.toLowerCase();

    return searchItems
      .map((item) => {
        // Check title match
        if (item.label.toLowerCase().includes(lowerQuery)) {
          return { ...item, matchedKeyword: undefined };
        }
        // Check category match
        if (item.category.toLowerCase().includes(lowerQuery)) {
          return { ...item, matchedKeyword: undefined };
        }
        // Check description match
        if (item.description.toLowerCase().includes(lowerQuery)) {
          return { ...item, matchedKeyword: item.description };
        }
        // Check keywords match
        const matchedKeyword = item.keywords.find((kw) =>
          kw.toLowerCase().includes(lowerQuery)
        );
        if (matchedKeyword) {
          return { ...item, matchedKeyword };
        }
        return null;
      })
      .filter((item): item is SearchResult => item !== null);
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
  }, {} as Record<string, SearchResult[]>);

  let currentIndex = 0;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="search-modal" onClick={(e) => e.stopPropagation()}>
          <div className="search-input-wrapper">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="페이지, 기능, 키워드 검색..."
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
                <span>다른 키워드로 검색해보세요</span>
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
                        <div className="result-content">
                          <span className="result-label">{item.label}</span>
                          {item.matchedKeyword && (
                            <span className="result-match">
                              <i className="fas fa-tag"></i>
                              {item.matchedKeyword}
                            </span>
                          )}
                        </div>
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

        .no-results span {
          font-size: 0.85rem;
          margin-top: 8px;
          opacity: 0.7;
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

        .result-item > i {
          width: 20px;
          text-align: center;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .result-item.selected > i {
          color: white;
        }

        .result-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .result-label {
          font-weight: 500;
        }

        .result-match {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .result-match i {
          font-size: 0.7rem;
        }

        .result-item.selected .result-match {
          color: rgba(255, 255, 255, 0.8);
        }

        .enter-hint {
          opacity: 0.7;
          flex-shrink: 0;
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
