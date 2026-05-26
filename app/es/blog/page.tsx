'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import FooterES from '@/components/footer-es';
import PostCardES from '@/components/post-card-es';
import { posts, getAllCategories } from '@/lib/posts';
import { Suspense } from 'react';

const catES: Record<string, string> = {
  'E-commerce': 'Comercio Electrónico',
  'AI Marketing': 'Marketing IA',
  'AI Image Tools': 'Imágenes IA',
  'AI Writing': 'Escritura IA',
  'AI Video': 'Video IA',
  'AI Automation': 'Automatización IA',
  'AI Business Tools': 'Herramientas de Negocio IA',
  'AI Video Generation': 'Generación de Video IA',
  'AI Assistants': 'Asistentes IA',
  'AI Search': 'Búsqueda IA',
  'Productivity': 'Productividad',
  'AI SEO': 'SEO IA',
  'YouTube Analytics': 'Análisis YouTube',
};

function BlogContentES() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category');
  const categories = getAllCategories();

  let filteredPosts = posts;
  if (activeCategory) {
    filteredPosts = posts.filter((p) => p.category === activeCategory);
  }

  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)', padding: '56px 0 40px', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '8px' }}>
              {activeCategory ? (catES[activeCategory] || activeCategory) : 'Todas las Reseñas'}
            </p>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Reseñas y Guías de Herramientas IA
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.6 }}>
              Reseñas honestas y detalladas de las herramientas de IA que están transformando cómo trabajamos y creamos.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px' }}>
              <Link href="/es/blog" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, padding: '6px 16px', borderRadius: '999px', background: !activeCategory ? 'var(--color-primary)' : 'rgba(37,99,235,0.08)', color: !activeCategory ? '#ffffff' : 'var(--color-primary)', textDecoration: 'none' }}>Todas</Link>
              {categories.map((cat) => (
                <Link key={cat} href={`/es/blog?category=${encodeURIComponent(cat)}`} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, padding: '6px 16px', borderRadius: '999px', background: activeCategory === cat ? 'var(--color-primary)' : 'rgba(37,99,235,0.08)', color: activeCategory === cat ? '#ffffff' : 'var(--color-primary)', textDecoration: 'none' }}>{catES[cat] || cat}</Link>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {filteredPosts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>No se encontraron reseñas para este filtro.</p>
                <Link href="/es/blog" className="btn-primary" style={{ marginTop: '20px', display: 'inline-flex' }}>Ver Todas las Reseñas</Link>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
                {filteredPosts.map((post) => (
                  <PostCardES key={post.slug} post={post} showFeaturedBadge={true} showAffiliateBadge={true} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterES />
    </>
  );
}

export default function BlogPageES() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <BlogContentES />
    </Suspense>
  );
}

