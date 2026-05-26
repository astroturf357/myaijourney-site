'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './language-switcher';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/best-ai-tools', label: 'Best AI Tools' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Accent bar */}
      <div className="accent-bar" />
      <header
        style={{
          background: '#ffffff',
          borderBottom: '1px solid var(--color-border)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="https://codewords-uploads.s3.amazonaws.com/runtime_v2/615520b6d898410d9b4fbc1d34e8c0fb2e7ef1ceaf294fe8be2966d9a78d57fe/myaijourney_logo_v3.png" alt="MyAIJourney" width="36" height="36" style={{ objectFit: 'contain' }} />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
              }}
            >
              MyAI<span style={{ color: 'var(--color-primary)' }}>Journey</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  color: pathname === link.href ? 'var(--color-primary)' : 'var(--color-text)',
                  background: pathname === link.href ? 'rgba(37,99,235,0.08)' : 'transparent',
                  transition: 'all 0.15s ease',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/blog"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '8px 18px', marginLeft: '8px' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Subscribe
            </Link>
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--color-text)',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            style={{
              background: '#ffffff',
              borderTop: '1px solid var(--color-border)',
              padding: '16px 24px 24px',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 500,
                    padding: '10px 12px',
                    borderRadius: '6px',
                    color: pathname === link.href ? 'var(--color-primary)' : 'var(--color-text)',
                    background: pathname === link.href ? 'rgba(37,99,235,0.08)' : 'transparent',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className="btn-primary"
                onClick={() => setMobileOpen(false)}
                style={{ marginTop: '12px', justifyContent: 'center' }}
              >
                Subscribe to Newsletter
              </Link>
              <div style={{ marginTop: '12px' }}>
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}






