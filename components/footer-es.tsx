'use client';

import Link from 'next/link';

export default function FooterES() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-text)',
        color: '#94A3B8',
        paddingTop: '56px',
        paddingBottom: '80px',
        marginTop: '80px',
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: '#ffffff', letterSpacing: '-0.02em' }}>MyAIJourney</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '260px' }}>Reseñas honestas y detalladas de herramientas IA para profesionales y entusiastas que navegan el mundo de la inteligencia artificial.</p>
            <p style={{ fontSize: '0.78rem', marginTop: '16px', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', borderLeft: '3px solid var(--color-cta)', lineHeight: 1.6 }}>
              <strong style={{ color: '#e2e8f0' }}>Divulgación de Afiliados:</strong> Algunos enlaces en este sitio son enlaces de afiliados. Puedo ganar una comisión sin costo adicional para ti.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e2e8f0', marginBottom: '16px' }}>Navegación</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link href="/es" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Inicio</Link>
              <Link href="/es/blog" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Todas las Reseñas</Link>
              <Link href="/about" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Acerca de</Link>
              <Link href="/contact" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Contacto</Link>
            </nav>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e2e8f0', marginBottom: '16px' }}>Categorías</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link href="/es/blog?category=AI+Writing" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Escritura IA</Link>
              <Link href="/es/blog?category=AI+Video" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Video IA</Link>
              <Link href="/es/blog?category=AI+Marketing" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Marketing IA</Link>
              <Link href="/es/blog?category=AI+Image+Tools" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Imágenes IA</Link>
              <Link href="/es/blog?category=AI+Automation" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Automatización IA</Link>
            </nav>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e2e8f0', marginBottom: '16px' }}>Mantente Actualizado</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>Recibe las últimas reseñas de herramientas IA en tu correo.</p>
          </div>
        </div>
        <div style={{ paddingTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.85rem' }}>&copy; {year} MyAIJourney.org. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ color: '#94A3B8', textDecoration: 'none' }}>Política de Privacidad</Link>
            <Link href="/terms" style={{ color: '#94A3B8', textDecoration: 'none' }}>Términos</Link>
            <Link href="/disclaimer" style={{ color: '#94A3B8', textDecoration: 'none' }}>Aviso Legal</Link>
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

