'use client';

import { useState } from 'react';

interface CommandBoxProps {
  command: string;
}

export default function CommandBox({ command }: CommandBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(command);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = command;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="command-box">
      <code className="command-content">{command}</code>
      <button
        className={`copy-btn ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
      >
        {copied ? (
          <>
            <i className="fas fa-check"></i> 복사됨
          </>
        ) : (
          <>
            <i className="fas fa-copy"></i> 복사
          </>
        )}
      </button>
    </div>
  );
}
