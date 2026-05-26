'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  dark?: boolean;
}

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
];

export default function NewsletterForm({ dark = false }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [lang, setLang] = useState('en');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, language: lang }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'You are subscribed! Check your inbox.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 20px',
          background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(37,99,235,0.08)',
          borderRadius: '8px',
          border: dark ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(37,99,235,0.2)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={dark ? '#86efac' : '#16a34a'} strokeWidth="2.5" strokeLinecap="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <p style={{ color: dark ? '#86efac' : '#16a34a', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem' }}>
          {message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '560px' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={status === 'loading'}
          style={{
            flex: '1',
            minWidth: '180px',
            padding: '13px 16px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.97rem',
            borderRadius: '6px',
            border: dark ? '1px solid rgba(255,255,255,0.25)' : '2px solid var(--color-border)',
            background: dark ? 'rgba(255,255,255,0.12)' : '#ffffff',
            color: dark ? '#ffffff' : 'var(--color-text)',
            outline: 'none',
            transition: 'border-color 0.15s',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = dark ? 'rgba(255,255,255,0.5)' : 'var(--color-primary)';
            if (!dark) e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = dark ? 'rgba(255,255,255,0.25)' : 'var(--color-border)';
            e.target.style.boxShadow = 'none';
          }}
        />
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          style={{
            padding: '10px 12px',
            borderRadius: '6px',
            border: dark ? '1px solid rgba(255,255,255,0.25)' : '2px solid var(--color-border)',
            background: dark ? 'rgba(255,255,255,0.12)' : '#ffffff',
            color: dark ? '#ffffff' : 'var(--color-text)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
            outline: 'none',
            minWidth: '100px',
          }}
        >
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code} style={{ color: '#1E293B' }}>{l.label}</option>
          ))}
        </select>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary"
          style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'wait' : 'pointer' }}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
        </button>
      </div>
      {status === 'error' && (
        <p style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '8px' }}>{message}</p>
      )}
    </form>
  );
}

