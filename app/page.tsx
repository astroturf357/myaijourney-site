import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PostCard from '@/components/post-card';
import NewsletterForm from '@/components/newsletter-form';
import { posts, getFeaturedPosts } from '@/lib/posts';

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = posts.slice(0, 5);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 50%, #FFF7ED 100%)',
            padding: '80px 0 72px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37,99,235,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249,115,22,0.05) 0%, transparent 40%)',
            }}
          />
          <div className="container" style={{ position: 'relative' }}>
            <div style={{ maxWidth: '780px' }}>
              <div className="animate-in" style={{ marginBottom: '16px' }}>
                <span className="badge badge-orange">
                  Honest AI Tool Reviews Since 2023
                </span>
              </div>
              <h1
                className="animate-in animate-in-delay-1"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-text)',
                  marginBottom: '24px',
                }}
              >
                Navigate the AI Landscape{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-cta) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  with Confidence
                </span>
              </h1>
              <p
                className="animate-in animate-in-delay-2"
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '40px',
                  maxWidth: '620px',
                }}
              >
                In-depth reviews, honest comparisons, and practical guides on the AI tools that matter. Built for professionals who want real answers, not sponsored fluff.
              </p>
              <div className="animate-in animate-in-delay-3">
                <NewsletterForm />
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '12px' }}>
                  Join 2,400+ AI enthusiasts. No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust indicators */}
        <section
          style={{
            background: 'var(--color-surface)',
            borderBottom: '1px solid var(--color-border)',
            padding: '20px 0',
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { label: '50+ Tools Reviewed' },
              { label: 'Affiliate Disclosed' },
              { label: '3+ Years Testing AI' },
              { label: '2,400+ Subscribers' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.88rem', fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item.label}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        <section className="section">
          <div className="container">
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginBottom: '32px',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-primary)',
                    marginBottom: '6px',
                  }}
                >
                  Featured Reviews
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-text)',
                  }}
                >
                  Top AI Tool Reviews
                </h2>
              </div>
              <Link
                href="/blog"
                className="btn-secondary"
                style={{ fontSize: '0.88rem', padding: '9px 20px' }}
              >
                See All Reviews
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              {featuredPosts[0] && <PostCard post={featuredPosts[0]} large={true} />}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '20px',
                }}
              >
                {featuredPosts.slice(1, 3).map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section
          style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, #1d4ed8 100%)',
            padding: '72px 0',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)',
            }}
          />
          <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Get AI Tool Reviews in Your Inbox
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
              Every week I review one AI tool in depth and share what I actually discovered — not what the marketing says.
            </p>
            <NewsletterForm dark={true} />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', marginTop: '12px' }}>
              Join 2,400+ readers. Free. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* All Recent Posts */}
        <section className="section">
          <div className="container">
            <div style={{ marginBottom: '32px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                  marginBottom: '6px',
                }}
              >
                Latest
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text)',
                }}
              >
                Recent Reviews
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '20px',
              }}
            >
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <Link href="/blog" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                View All {posts.length} Reviews
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

