'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <i className="fas fa-check-circle" style={{ color: 'var(--success)' }}></i>
      <span>{message}</span>
    </div>
  );
}
