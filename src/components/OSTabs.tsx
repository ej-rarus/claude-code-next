'use client';

import { useState, useEffect } from 'react';

type OS = 'mac' | 'windows';

interface OSTabsProps {
  children: {
    mac: React.ReactNode;
    windows: React.ReactNode;
  };
}

export default function OSTabs({ children }: OSTabsProps) {
  const [os, setOS] = useState<OS>('mac');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('preferred-os');
    if (saved === 'mac' || saved === 'windows') {
      setOS(saved);
    }
  }, []);

  const handleChange = (newOS: OS) => {
    setOS(newOS);
    localStorage.setItem('preferred-os', newOS);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="os-tabs">
        <div className="os-tabs-header">
          <button className="os-tab active">
            <i className="fab fa-apple"></i>
            macOS
          </button>
          <button className="os-tab">
            <i className="fab fa-windows"></i>
            Windows
          </button>
        </div>
        <div className="os-tabs-content">
          {children.mac}
        </div>
      </div>
    );
  }

  return (
    <div className="os-tabs">
      <div className="os-tabs-header">
        <button
          className={`os-tab ${os === 'mac' ? 'active' : ''}`}
          onClick={() => handleChange('mac')}
        >
          <i className="fab fa-apple"></i>
          macOS
        </button>
        <button
          className={`os-tab ${os === 'windows' ? 'active' : ''}`}
          onClick={() => handleChange('windows')}
        >
          <i className="fab fa-windows"></i>
          Windows
        </button>
      </div>
      <div className="os-tabs-content">
        {children[os]}
      </div>
    </div>
  );
}
