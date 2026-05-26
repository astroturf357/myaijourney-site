'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-text)',
        color: '#94A3B8',
        paddingTop: '56px',
        paddingBottom: '32px',
        marginTop: '80px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'var(--color-primary)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                MyAIJourney
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '260px' }}>
              Honest, in-depth AI tools reviews and insights for professionals and enthusiasts navigating the AI landscape.
            </p>
            <p
              style={{
                fontSize: '0.78rem',
                marginTop: '16px',
                padding: '10px 14px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '6px',
                borderLeft: '3px solid var(--color-cta)',
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: '#e2e8f0' }}>Affiliate Disclosure:</strong> Some links on this site are affiliate links. I may earn a commission at no extra cost to you if you purchase through them.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#e2e8f0',
                marginBottom: '16px',
              }}
            >
              Navigation
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/blog', label: 'All Reviews' },
                { href: '/about', label: 'About Me' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.15s',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#e2e8f0',
                marginBottom: '16px',
              }}
            >
              Categories
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'AI Assistants',
                'AI Search',
                'Productivity',
                'AI Image Tools',
                'AI Writing',
              ].map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  style={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.15s',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  {cat}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter mini */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#e2e8f0',
                marginBottom: '16px',
              }}
            >
              Stay Updated
            </h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
              Get the latest AI tool reviews delivered to your inbox.
            </p>
            <form
              action="/api/subscribe"
              method="post"
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
                fetch('/api/subscribe', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email }),
                }).then(() => {
                  form.reset();
                  alert('Thanks! You are subscribed.');
                });
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                style={{
                  padding: '10px 14px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                }}
              />
              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', fontSize: '0.88rem' }}>
                Subscribe Free
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '0.85rem' }}>
            &copy; {year} MyAIJourney.org. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem' }}>
            <Link href="/privacy" style={{ color: '#94A3B8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: '#94A3B8', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/disclaimer" style={{ color: '#94A3B8', textDecoration: 'none' }}>Disclaimer</Link>
            <a href="https://x.com/harrell44499" target="_blank" rel="noopener" style={{ color: '#94A3B8', textDecoration: 'none' }}>X / Twitter</a>
            <a href="https://www.instagram.com/jimharrell65/" target="_blank" rel="noopener" style={{ color: '#94A3B8', textDecoration: 'none' }}>Instagram</a>
            <a href="https://www.reddit.com/user/Appropriate-Hat6012/" target="_blank" rel="noopener" style={{ color: '#94A3B8', textDecoration: 'none' }}>Reddit</a>
            <a href="https://www.tiktok.com/@jim.harrell4" target="_blank" rel="noopener" style={{ color: '#94A3B8', textDecoration: 'none' }}>TikTok</a>
            <a href="https://www.pinterest.com/jimharrell65/" target="_blank" rel="noopener" style={{ color: '#94A3B8', textDecoration: 'none' }}>Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}









