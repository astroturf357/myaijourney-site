'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, localeFlags, getLocaleFromPath, getPathWithLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = getLocaleFromPath(pathname);

  const switchLocale = (locale: Locale) => {
    const newPath = getPathWithLocale(pathname, locale);
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '5px 10px',
          borderRadius: '6px',
          border: '1px solid var(--color-border)',
          background: 'transparent',
          cursor: 'pointer',
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '0.78rem',
          color: 'var(--color-text)',
          transition: 'all 0.15s',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {localeFlags[currentLocale]}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
      </button>

      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 99 }} />
          <div
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '6px',
              background: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-md)',
              overflow: 'hidden',
              zIndex: 100,
              minWidth: '130px',
            }}
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '10px 14px',
                  border: 'none',
                  background: currentLocale === locale ? 'rgba(37,99,235,0.08)' : 'transparent',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: currentLocale === locale ? 700 : 500,
                  fontSize: '0.85rem',
                  color: currentLocale === locale ? 'var(--color-primary)' : 'var(--color-text)',
                  textAlign: 'left',
                  transition: 'background 0.1s',
                }}
                onMouseEnter={(e) => { if (currentLocale !== locale) e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }}
                onMouseLeave={(e) => { if (currentLocale !== locale) e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ fontWeight: 700, fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{localeFlags[locale]}</span>
                {localeNames[locale]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

