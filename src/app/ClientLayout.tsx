'use client';

import { useState, ReactNode } from 'react';
import { Sidebar, Topbar, ThemeProvider } from '@/components';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="main">
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="content">
          {children}
          <footer className="footer">
            <p>
              Made with <span className="heart">&#10084;</span> by{' '}
              <a href="https://leeeunjae.com" target="_blank" rel="noopener noreferrer">
                EJ Lee
              </a>
            </p>
          </footer>
        </div>
      </main>
      <style jsx>{`
        .footer {
          margin-top: 60px;
          padding: 24px 0;
          border-top: 1px solid var(--border-color);
          text-align: center;
        }
        .footer p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .footer .heart {
          color: #ef4444;
        }
        .footer a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
        }
        .footer a:hover {
          text-decoration: underline;
        }
      `}</style>
    </ThemeProvider>
  );
}
