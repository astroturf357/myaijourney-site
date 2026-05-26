import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import FooterES from '@/components/footer-es';
import PostCardES from '@/components/post-card-es';
import NewsletterForm from '@/components/newsletter-form';
import { posts, getFeaturedPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'MyAIJourney — Reseñas y Análisis de Herramientas IA',
  description: 'Reseñas detalladas, comparaciones honestas y guías prácticas sobre las herramientas de IA que importan. Para profesionales que quieren respuestas reales.',
  alternates: { canonical: 'https://myaijourney.org/es', languages: { 'en': 'https://myaijourney.org', 'es': 'https://myaijourney.org/es' } },
};

export default function HomePageES() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = posts.slice(0, 5);

  return (
    <>
      <Navbar />
      <main>
        <section
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 50%, #FFF7ED 100%)',
            padding: '80px 0 72px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37,99,235,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249,115,22,0.05) 0%, transparent 40%)' }} />
          <div className="container" style={{ position: 'relative' }}>
            <div style={{ maxWidth: '780px' }}>
              <div className="animate-in" style={{ marginBottom: '16px' }}>
                <span className="badge badge-orange">Reseñas honestas de herramientas IA desde 2023</span>
              </div>
              <h1 className="animate-in animate-in-delay-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--color-text)', marginBottom: '24px' }}>
                Navega el mundo de la IA{' '}
                <span style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-cta) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>con confianza</span>
              </h1>
              <p className="animate-in animate-in-delay-2" style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '620px' }}>
                Reseñas detalladas, comparaciones honestas y guías prácticas sobre las herramientas de IA que importan. Para profesionales que quieren respuestas reales, no publicidad disfrazada.
              </p>
              <div className="animate-in animate-in-delay-3">
                <NewsletterForm />
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '12px' }}>Únete a 2,400+ entusiastas de IA. Sin spam. Cancela cuando quieras.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', padding: '20px 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['50+ Herramientas Analizadas', 'Afiliación Declarada', '3+ Años Probando IA', '2,400+ Suscriptores'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.88rem', fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '6px' }}>Reseñas Destacadas</p>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Mejores Reseñas de Herramientas IA</h2>
              </div>
              <Link href="/es/blog" className="btn-secondary" style={{ fontSize: '0.88rem', padding: '9px 20px' }}>Ver Todas las Reseñas</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              {featuredPosts[0] && <PostCardES post={featuredPosts[0]} large={true} />}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {featuredPosts.slice(1, 3).map((post) => (<PostCardES key={post.slug} post={post} />))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #1d4ed8 100%)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: '#ffffff', marginBottom: '16px', letterSpacing: '-0.02em' }}>Recibe Reseñas de IA en Tu Correo</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>Cada semana analizo una herramienta de IA en profundidad y comparto lo que realmente descubrí.</p>
            <NewsletterForm dark={true} />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', marginTop: '12px' }}>Únete a 2,400+ lectores. Gratis. Cancela cuando quieras.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '6px' }}>Últimas</p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Reseñas Recientes</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
              {recentPosts.map((post) => (<PostCardES key={post.slug} post={post} />))}
            </div>
          </div>
        </section>
      </main>
      <FooterES />
    </>
  );
}





