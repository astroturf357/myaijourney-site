import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import NewsletterForm from '@/components/newsletter-form';

export const metadata: Metadata = {
  title: 'About — Jim Harrell',
  description: 'Meet Jim Harrell, the automation specialist and AI enthusiast behind MyAIJourney. Learn about the mission to provide honest, no-fluff AI tool reviews.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)',
            padding: '72px 0 56px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '56px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-cta) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 8px 30px rgba(37,99,235,0.25)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '3.5rem',
                  color: '#ffffff',
                }}
              >
                J
              </span>
            </div>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '8px' }}>
                About the Author
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.4rem',
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  marginBottom: '16px',
                  color: 'var(--color-text)',
                }}
              >
                Hey, I am Jim Harrell
              </h1>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                Automation specialist, AI enthusiast, and the person behind every review on this site. I research and curate AI tools so you do not have to waste money on ones that do not deliver.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/blog" className="btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Read My Reviews
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="section">
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '56px',
                alignItems: 'start',
              }}
            >
              {/* Story */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '20px' }}>
                  My Story
                </h2>
                <div className="prose">
                  <p>
                    I have been working in automation and workflow optimization for over a decade. When AI tools started exploding onto the scene, I became obsessed with figuring out which ones actually worked and which were just hype.
                  </p>
                  <p>
                    MyAIJourney started as a personal log of my research. I was tired of reading reviews written by people who barely scratched the surface. Real recommendations require real knowledge of how these tools fit into actual workflows.
                  </p>
                  <p>
                    I research and curate AI tools by diving deep into features, pricing, user feedback, and real-world use cases. I track what works, what does not, and where the hidden costs lurk.
                  </p>
                  <h2>What Makes MyAIJourney Different</h2>
                  <p>
                    Most AI review sites are either affiliate farms (positive reviews of everything) or tech blogs that cover AI from a distance. I sit in the middle: yes, I use affiliate links (disclosed prominently), but I will absolutely tell you when a tool is not worth your money.
                  </p>
                  <p>
                    My background in automation means I approach AI tools from a systems perspective. I am not just asking "is this impressive?" but "does this actually save time, and at what cost?"
                  </p>
                  <h2>Affiliate Disclosure</h2>
                  <p>
                    Some links on this site are affiliate links. When you buy through them, I may earn a commission at no extra cost to you. This helps keep the site running. However, my opinions are always my own — I will never recommend something I do not believe in, and I will always disclose when affiliate links are present.
                  </p>
                </div>
              </div>

              {/* Stats / sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { number: '50+', label: 'Tools Reviewed' },
                  { number: '3+', label: 'Years Testing AI' },
                  { number: '2,400+', label: 'Newsletter Subscribers' },
                  { number: '10+', label: 'Years in Automation' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: '24px',
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '10px',
                      textAlign: 'center',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.2rem',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        color: 'var(--color-primary)',
                        marginBottom: '4px',
                      }}
                    >
                      {stat.number}
                    </p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                      {stat.label}
                    </p>
                  </div>
                ))}

                {/* What I use section */}
                <div
                  style={{
                    padding: '24px',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '10px',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '14px' }}>My Daily AI Stack</p>
                  {[
                    { tool: 'Claude Pro', use: 'Writing & analysis' },
                    { tool: 'ChatGPT Plus', use: 'Coding & plugins' },
                    { tool: 'Perplexity Pro', use: 'Research' },
                    { tool: 'Midjourney', use: 'Image creation' },
                    { tool: 'Zapier + AI', use: 'Automation' },
                  ].map((item) => (
                    <div key={item.tool} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.88rem' }}>{item.tool}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section
          style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, #1d4ed8 100%)',
            padding: '64px 0',
          }}
        >
          <div className="container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Follow My AI Journey
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px', lineHeight: 1.6 }}>
              Get my weekly AI tool review directly in your inbox. No fluff, just honest takes.
            </p>
            <NewsletterForm dark={true} />
          </div>
        </section>

        <style>{`
          @media (max-width: 768px) {
            .container > div[style*="gridTemplateColumns: 2fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}



