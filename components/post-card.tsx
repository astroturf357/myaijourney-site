'use client';

import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { formatDate } from '@/lib/posts';

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="13" height="13" viewBox="0 0 24 24"
          fill={s <= Math.round(rating) ? 'var(--color-cta)' : 'none'}
          stroke="var(--color-cta)" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginLeft: '3px', fontWeight: 600 }}>{rating.toFixed(1)}</span>
    </div>
  );
}

interface PostCardProps {
  post: Post;
  large?: boolean;
  showFeaturedBadge?: boolean;
  showAffiliateBadge?: boolean;
}

export default function PostCard({ post, large = false, showFeaturedBadge = false, showAffiliateBadge = false }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{
        display: 'block',
        background: 'var(--color-surface)',
        borderRadius: '10px',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        boxShadow: 'var(--shadow-sm)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.borderColor = 'var(--color-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.borderColor = 'var(--color-border)';
      }}
    >
      {/* Color band */}
      <div
        style={{
          height: large ? '6px' : '4px',
          background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-cta) 100%)',
        }}
      />
      <div style={{ padding: large ? '28px' : '22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <span className="badge">{post.category}</span>
          {showFeaturedBadge && post.featured && <span className="badge badge-orange">Featured</span>}
          {post.rating && <StarRating rating={post.rating} />}
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: large ? '1.4rem' : '1.05rem',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: '10px',
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
          }}
        >
          {post.title}
        </h2>
        <p
          style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.92rem',
            lineHeight: 1.6,
            marginBottom: '16px',
          }}
        >
          {post.excerpt}
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {formatDate(post.publishedAt)}
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime} min read
          </span>
          {showAffiliateBadge && post.affiliateName && (
            <span
              style={{
                fontSize: '0.75rem',
                background: 'rgba(249,115,22,0.1)',
                color: 'var(--color-cta)',
                padding: '2px 8px',
                borderRadius: '999px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
              }}
            >
              Affiliate
            </span>
          )}
          <span style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-heading)' }}>
            Read review
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

