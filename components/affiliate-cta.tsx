'use client';

import { useState } from 'react';

interface AffiliateCTAProps {
  affiliateLink: string;
  affiliateName: string;
  slug: string;
}

export default function AffiliateCTA({ affiliateLink, affiliateName, slug }: AffiliateCTAProps) {
  const [showGate, setShowGate] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  if (!affiliateLink || affiliateLink === '#') return null;

  const toolName = affiliateName.replace('Try ', '').replace(' Instead', '');
  const utmUrl = `${affiliateLink}${affiliateLink.includes('?') ? '&' : '?'}utm_source=myaijourney&utm_medium=blog&utm_campaign=${slug}&utm_content=cta_button`;

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    await fetch('/api/gate-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, tool: toolName, slug, url: utmUrl }),
    }).catch(() => {});
    setStatus('done');
    window.location.href = utmUrl;
  };

  return (
    <>
      <div
        style={{
          marginTop: '40px',
          padding: '28px',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(249,115,22,0.05) 100%)',
          borderRadius: '12px',
          border: '2px solid rgba(37,99,235,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px', color: 'var(--color-text)' }}>
            Ready to try it yourself?
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            This is an affiliate link — I may earn a commission at no extra cost to you.
          </p>
        </div>
        <button
          onClick={() => setShowGate(true)}
          className="btn-primary"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          {affiliateName}
        </button>
      </div>

      {/* Email gate popup */}
      {showGate && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '24px',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowGate(false); }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              maxWidth: '440px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
              animation: 'chatSlideUp 0.2s ease',
            }}
          >
            <div style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)', padding: '24px 28px' }}>
              <p style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '6px' }}>
                Get My Free AI Toolkit Guide
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Enter your email and I will send you my personal AI toolkit recommendations + unlock the link to {toolName}.
              </p>
            </div>
            <form onSubmit={handleGateSubmit} style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className="input-field"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="input-field"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary"
                style={{ justifyContent: 'center', width: '100%', opacity: status === 'loading' ? 0.7 : 1 }}
              >
                {status === 'loading' ? 'Unlocking...' : `Unlock ${toolName} Link`}
              </button>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', textAlign: 'center', lineHeight: 1.5 }}>
                No spam. You will also be subscribed to my weekly AI tools newsletter. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

