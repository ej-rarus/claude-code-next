'use client';

import { useState, ReactNode } from 'react';
import { Sidebar, Topbar } from '@/components';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="main">
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="content">{children}</div>
      </main>

      <style jsx>{`
        .main {
          margin-left: 280px;
          min-height: 100vh;
        }

        .content {
          padding: 40px;
        }

        @media (max-width: 1024px) {
          .main {
            margin-left: 0;
          }

          .content {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}
