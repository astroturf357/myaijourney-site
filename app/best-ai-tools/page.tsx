import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import NewsletterForm from '@/components/newsletter-form';

export const metadata: Metadata = {
  title: 'Best AI Tools 2025 — Ranked & Reviewed',
  description: 'The definitive ranking of the best AI tools in 2025. Honest reviews, real ratings, and affiliate-disclosed recommendations across writing, video, SEO, images, and marketing.',
};

const tools = [
  { name: 'Claude AI', rating: 4.8, category: 'AI Assistant', price: '$20/mo', slug: 'claude-ai-review-2025', desc: 'Best AI for writing and analysis. 200K context window, human-quality output.', badge: 'Top Pick' },
  { name: 'Synthesia', rating: 4.5, category: 'AI Video', price: '$22/mo', slug: 'synthesia-review-2025', desc: 'Create professional videos with AI avatars. Used by SAP, Heineken, Merck.', badge: 'Enterprise Pick' },
  { name: 'CodeWords', rating: 4.7, category: 'AI Automation', price: 'Free tier', slug: 'codewords-review-2025', desc: 'Build entire automated businesses through conversation. No coding required.', badge: 'Most Innovative' },
  { name: 'Perplexity AI', rating: 4.3, category: 'AI Search', price: '$20/mo', slug: 'perplexity-ai-vs-google-search', desc: 'AI-powered search that gives direct answers with sources. Google alternative.' },
  { name: 'NeuronWriter', rating: 4.3, category: 'AI SEO', price: '$19/mo', slug: 'neuronwriter-review-2025', desc: 'SEO content optimizer for Google AND AI search platforms.', badge: 'Best Value SEO' },
  { name: 'ArtSpace AI', rating: 4.3, category: 'AI Images', price: 'Lifetime deal', slug: 'artspace-ai-review-2025', desc: '238 one-click AI image tools. Face swaps, restoration, upscaling.', badge: 'Best Lifetime Deal' },
  { name: 'OutlierKit', rating: 4.2, category: 'YouTube Analytics', price: 'Free trial', slug: 'outlierkit-review-2025', desc: 'YouTube competitor analysis. Find what content actually drives views.' },
  { name: 'Rytr', rating: 4.0, category: 'AI Writing', price: '$7.50/mo', slug: 'rytr-review-2025', desc: 'Budget AI writer used by 8M+ people. Unlimited writing for $7.50/mo.', badge: 'Best Budget' },
  { name: 'Midjourney v6', rating: 4.6, category: 'AI Images', price: '$10/mo', slug: 'midjourney-vs-dall-e-3-image-comparison', desc: 'Best AI image generator for artistic quality and style control.' },
  { name: 'ChatGPT Plus', rating: 4.5, category: 'AI Assistant', price: '$20/mo', slug: 'chatgpt-plugins-best-for-productivity', desc: 'Most versatile AI with plugins, browsing, coding, and image generation.' },
  { name: 'Launchyard', rating: 2.5, category: 'AI Business', price: '$49.99/mo + 20%', slug: 'launchyard-review-2025', desc: 'AI business builder with predatory pricing. Great concept, bad deal.', badge: 'Avoid' },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      {[1,2,3,4,5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= Math.round(rating) ? 'var(--color-cta)' : 'none'} stroke="var(--color-cta)" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-cta)', fontSize: '0.9rem', marginLeft: '4px' }}>{rating}/5</span>
    </div>
  );
}

export default function BestAIToolsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 50%, #FFF7ED 100%)',
            padding: '72px 0 56px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge badge-orange" style={{ marginBottom: '16px', display: 'inline-block' }}>Updated May 2025</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '20px' }}>
              The Best AI Tools in 2025{' '}
              <span style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-cta))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ranked & Reviewed</span>
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 32px' }}>
              Every tool on this list has been researched, analyzed, and rated honestly. No sponsored placements. Affiliate links are disclosed and never influence our ratings.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {tools.map((tool, i) => (
                <Link
                  key={tool.slug}
                  href={`/blog/${tool.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '24px',
                    background: 'var(--color-surface)',
                    border: tool.badge === 'Avoid' ? '2px solid rgba(239,68,68,0.3)' : tool.badge === 'Top Pick' ? '2px solid rgba(37,99,235,0.3)' : '1px solid var(--color-border)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    boxShadow: 'var(--shadow-sm)',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: tool.badge === 'Avoid' ? 'rgba(239,68,68,0.1)' : 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: tool.badge === 'Avoid' ? '#EF4444' : 'var(--color-primary)', flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-text)' }}>{tool.name}</span>
                      <span className="badge">{tool.category}</span>
                      {tool.badge && (
                        <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, background: tool.badge === 'Avoid' ? 'rgba(239,68,68,0.1)' : tool.badge === 'Top Pick' ? 'rgba(37,99,235,0.1)' : 'rgba(249,115,22,0.1)', color: tool.badge === 'Avoid' ? '#EF4444' : tool.badge === 'Top Pick' ? 'var(--color-primary)' : 'var(--color-cta)' }}>
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '8px' }}>{tool.desc}</p>
                    <Stars rating={tool.rating} />
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-text)', fontSize: '1rem' }}>{tool.price}</p>
                    <p style={{ color: 'var(--color-primary)', fontSize: '0.82rem', fontFamily: 'var(--font-heading)', fontWeight: 600, marginTop: '4px' }}>Read review →</p>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: '56px', padding: '40px', background: 'linear-gradient(135deg, var(--color-primary), #1d4ed8)', borderRadius: '16px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Get Weekly AI Tool Reviews</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '24px', lineHeight: 1.6 }}>Join 2,400+ readers. Every week I break down a new AI tool so you do not waste money on the wrong ones.</p>
              <NewsletterForm dark={true} />
            </div>

            <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: '10px' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6, textAlign: 'center' }}>
                <strong style={{ color: 'var(--color-cta)' }}>Affiliate Disclosure:</strong> Some links on this page are affiliate links. I may earn a commission at no extra cost to you. Ratings are based on genuine research and are never influenced by affiliate relationships.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

