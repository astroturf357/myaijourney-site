'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CategoryFilter({ categories }: { categories: string[] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px' }}>
      <Link
        href="/blog"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '0.82rem',
          fontWeight: 600,
          padding: '6px 16px',
          borderRadius: '999px',
          background: 'var(--color-primary)',
          color: '#ffffff',
          textDecoration: 'none',
          transition: 'opacity 0.15s',
        }}
      >
        All
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`/blog?category=${encodeURIComponent(cat)}`}
          onMouseEnter={() => setHovered(cat)}
          onMouseLeave={() => setHovered(null)}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.82rem',
            fontWeight: 600,
            padding: '6px 16px',
            borderRadius: '999px',
            background: hovered === cat ? 'var(--color-primary)' : 'rgba(37,99,235,0.08)',
            color: hovered === cat ? '#ffffff' : 'var(--color-primary)',
            textDecoration: 'none',
            transition: 'all 0.15s',
          }}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}

