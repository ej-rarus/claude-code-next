'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      // TODO: Implement search
      console.log('Search:', searchQuery);
    }
  };

  return (
    <>
      <button className="mobile-toggle" onClick={onMenuClick}>
        <i className="fas fa-bars"></i>
      </button>

      <div className="topbar">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleSearch}
          />
        </div>
        <div className="topbar-actions">
          <ThemeToggle />
          <button className="btn btn-ghost">
            <i className="fas fa-keyboard"></i>
            단축키
          </button>
          <button className="btn btn-primary">
            <i className="fas fa-question-circle"></i>
            도움말
          </button>
        </div>
      </div>
    </>
  );
}
