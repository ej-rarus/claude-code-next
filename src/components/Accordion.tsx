'use client';

import { useState, ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  icon?: string;
  badge?: {
    text: string;
    type: 'success' | 'warning' | 'danger' | 'primary';
  };
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  title,
  icon,
  badge,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>
          {icon && <i className={`fas ${icon}`} style={{ color: 'var(--primary)' }}></i>}
          {title}
          {badge && (
            <span className={`badge badge-${badge.type}`}>
              {badge.text}
            </span>
          )}
        </h4>
        <i className="fas fa-chevron-down arrow"></i>
      </div>
      <div className="accordion-content">{children}</div>
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
}

export default function Accordion({ children }: AccordionProps) {
  return <div className="accordion">{children}</div>;
}
