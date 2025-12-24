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
        <div className="content">{children}</div>
      </main>
    </ThemeProvider>
  );
}
