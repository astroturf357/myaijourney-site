import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import NewsletterForm from '@/components/newsletter-form';
import AffiliateCTA from '@/components/affiliate-cta';
import { posts, getPostBySlug, formatDate } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3 - relatedPosts.length);
  const sidebar = [...relatedPosts, ...otherPosts].slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)',
            padding: '56px 0 40px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--color-text-muted)',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                textDecoration: 'none',
                marginBottom: '24px',
                transition: 'color 0.15s',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All Reviews
            </Link>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="badge">{post.category}</span>
              {post.featured && <span className="badge badge-orange">Featured Review</span>}
              {post.affiliateName && (
                <span
                  style={{
                    fontSize: '0.72rem',
                    background: 'rgba(249,115,22,0.1)',
                    color: 'var(--color-cta)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  Contains affiliate links
                </span>
              )}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.7rem, 4vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                marginBottom: '20px',
                color: 'var(--color-text)',
              }}
            >
              {post.title}
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px', maxWidth: '680px' }}>
              {post.excerpt}
            </p>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem' }}>J</span>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.88rem', color: 'var(--color-text)' }}>Jim Harrell</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{formatDate(post.publishedAt)} &bull; {post.readTime} min read</p>
                </div>
              </div>
              {post.rating && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(249,115,22,0.08)',
                    borderRadius: '8px',
                    border: '1px solid rgba(249,115,22,0.2)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24"
                        fill={s <= Math.round(post.rating!) ? 'var(--color-cta)' : 'none'}
                        stroke="var(--color-cta)" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-cta)', fontSize: '0.9rem' }}>{post.rating.toFixed(1)}/5</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section style={{ padding: '56px 0 80px' }}>
          <div
            className="container"
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: '56px',
              alignItems: 'start',
            }}
          >
            {/* Article content */}
            <div>
              <article
                className="prose"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Affiliate CTA */}
              {post.affiliateLink && post.affiliateName && (
                <AffiliateCTA
                  affiliateLink={post.affiliateLink}
                  affiliateName={post.affiliateName}
                  slug={post.slug}
                />
              )}

              {/* Tags */}
              <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--color-border)' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '12px' }}>Tags</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      style={{
                        padding: '4px 12px',
                        background: 'rgba(37,99,235,0.07)',
                        color: 'var(--color-primary)',
                        borderRadius: '999px',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'all 0.15s',
                      }}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Newsletter */}
              <div
                style={{
                  padding: '24px',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #1d4ed8 100%)',
                  borderRadius: '12px',
                  color: '#ffffff',
                }}
              >
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>Get Weekly AI Reviews</p>
                <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6, marginBottom: '16px' }}>Join 2,400+ readers getting the latest AI tool reviews every week.</p>
                <NewsletterForm dark={true} />
              </div>

              {/* Related posts */}
              {sidebar.length > 0 && (
                <div
                  style={{
                    padding: '24px',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '16px' }}>More Reviews</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {sidebar.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                      >
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '7px', flexShrink: 0 }} />
                        <div>
                          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.88rem', color: 'var(--color-text)', lineHeight: 1.35, marginBottom: '4px' }}>{p.title}</p>
                          <span className="badge" style={{ fontSize: '0.7rem' }}>{p.category}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

        <style>{`
          @media (max-width: 900px) {
            .container > div[style*="gridTemplateColumns: 1fr 340px"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}






