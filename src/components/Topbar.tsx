'use client';

import { useState } from 'react';

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
          <i className="fas fa-search" style={{ color: 'var(--gray)' }}></i>
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleSearch}
          />
        </div>
        <div className="topbar-actions">
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

      <style jsx>{`
        .topbar {
          position: sticky;
          top: 0;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 50;
        }

        .search-box {
          display: flex;
          align-items: center;
          background: var(--dark-light);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 12px 20px;
          width: 400px;
          transition: all 0.3s ease;
        }

        .search-box:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .search-box input {
          background: none;
          border: none;
          color: var(--white);
          font-size: 0.95rem;
          width: 100%;
          margin-left: 12px;
          outline: none;
        }

        .search-box input::placeholder {
          color: var(--gray);
        }

        .topbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        @media (max-width: 1024px) {
          .topbar {
            padding: 16px 20px;
            padding-left: 80px;
          }

          .search-box {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 640px) {
          .topbar {
            flex-direction: column;
            gap: 12px;
            padding: 16px;
            padding-left: 70px;
          }

          .search-box {
            max-width: 100%;
          }

          .topbar-actions {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
