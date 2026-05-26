'use client';

import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { formatDate } from '@/lib/posts';
import { getPostES } from '@/lib/posts-es';

const catES: Record<string, string> = {
  'E-commerce': 'Comercio Electrónico', 'AI Marketing': 'Marketing IA', 'AI Image Tools': 'Imágenes IA',
  'AI Writing': 'Escritura IA', 'AI Video': 'Video IA', 'AI Automation': 'Automatización IA',
  'AI Business Tools': 'Herramientas de Negocio IA', 'AI Video Generation': 'Generación de Video IA',
  'AI Assistants': 'Asistentes IA', 'AI Search': 'Búsqueda IA', 'Productivity': 'Productividad',
  'AI SEO': 'SEO IA', 'YouTube Analytics': 'Análisis YouTube',
};

interface PostCardESProps {
  post: Post;
  large?: boolean;
  showFeaturedBadge?: boolean;
  showAffiliateBadge?: boolean;
}

export default function PostCardES({ post, large = false, showFeaturedBadge = false, showAffiliateBadge = false }: PostCardESProps) {
  const es = getPostES(post.slug);
  const title = es?.title || post.title;
  const excerpt = es?.excerpt || post.excerpt;

  return (
    <Link
      href={`/es/blog/${post.slug}`}
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
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
    >
      <div style={{ height: large ? '6px' : '4px', background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-cta) 100%)' }} />
      <div style={{ padding: large ? '28px' : '22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <span className="badge">{catES[post.category] || post.category}</span>
          {showFeaturedBadge && post.featured && <span className="badge badge-orange">Destacada</span>}
          {post.rating && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              {[1,2,3,4,5].map((s) => (<svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={s <= Math.round(post.rating!) ? 'var(--color-cta)' : 'none'} stroke="var(--color-cta)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>))}
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginLeft: '3px', fontWeight: 600 }}>{post.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: large ? '1.4rem' : '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '10px', lineHeight: 1.3, letterSpacing: '-0.02em' }}>{title}</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>{excerpt}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{formatDate(post.publishedAt)}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{post.readTime} min de lectura</span>
          {showAffiliateBadge && post.affiliateName && <span style={{ fontSize: '0.75rem', background: 'rgba(249,115,22,0.1)', color: 'var(--color-cta)', padding: '2px 8px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Afiliado</span>}
          <span style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>Leer reseña →</span>
        </div>
      </div>
    </Link>
  );
}



