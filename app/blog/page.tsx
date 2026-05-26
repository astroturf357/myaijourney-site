'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PostCard from '@/components/post-card';
import { posts, getAllCategories } from '@/lib/posts';
import { Suspense } from 'react';

function BlogContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category');
  const activeTag = searchParams.get('tag');
  const categories = getAllCategories();

  let filteredPosts = posts;
  if (activeCategory) {
    filteredPosts = posts.filter((p) => p.category === activeCategory);
  } else if (activeTag) {
    filteredPosts = posts.filter((p) => p.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase()));
  }

  return (
    <>
      <Navbar />
      <main>
        <section
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)',
            padding: '56px 0 40px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '8px' }}>
              {activeCategory ? activeCategory : activeTag ? `Tag: ${activeTag}` : 'All Reviews'}
            </p>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px' }}>
              {activeCategory || activeTag ? `${filteredPosts.length} Review${filteredPosts.length !== 1 ? 's' : ''} Found` : 'AI Tools Reviews & Guides'}
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.6 }}>
              Honest, in-depth reviews of the AI tools shaping how we work, create, and think.
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px' }}>
              <Link
                href="/blog"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: !activeCategory && !activeTag ? 'var(--color-primary)' : 'rgba(37,99,235,0.08)',
                  color: !activeCategory && !activeTag ? '#ffffff' : 'var(--color-primary)',
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                }}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    padding: '6px 16px',
                    borderRadius: '999px',
                    background: activeCategory === cat ? 'var(--color-primary)' : 'rgba(37,99,235,0.08)',
                    color: activeCategory === cat ? '#ffffff' : 'var(--color-primary)',
                    textDecoration: 'none',
                    transition: 'all 0.15s',
                  }}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {filteredPosts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>No reviews found for this filter.</p>
                <Link href="/blog" className="btn-primary" style={{ marginTop: '20px', display: 'inline-flex' }}>View All Reviews</Link>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: '24px',
                }}
              >
                {filteredPosts.map((post) => (
                  <PostCard key={post.slug} post={post} showFeaturedBadge={true} showAffiliateBadge={true} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <BlogContent />
    </Suspense>
  );
}

