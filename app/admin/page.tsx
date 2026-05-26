'use client';

import { useState } from 'react';
import { posts } from '@/lib/posts';

const ADMIN_PASSWORD = 'myaijourney2025';

const SHEETS = [
  { name: 'Affiliate Click Tracker', url: 'https://docs.google.com/spreadsheets/d/16cGE5lKH9uywrpEXyswH-ztZHkFaAk5pEFE3Gtltz4I/edit', icon: '🔗', desc: 'Real-time click tracking by tool and post' },
  { name: 'Subscriber Tracker', url: 'https://docs.google.com/spreadsheets/d/1t2CgoKT0rtp7o9OUQggJ3VHE7fkapR6LcVDaTvTd1X0/edit', icon: '📧', desc: 'Every new email signup with date and status' },
  { name: 'Unsubscribes', url: 'https://docs.google.com/spreadsheets/d/1djg1wZmE8tlM1qYwzzA-hLH7ExYyOIh2AHeJ297FfMY/edit', icon: '📉', desc: 'Churn tracking with reasons' },
  { name: 'Newsletter Analytics', url: 'https://docs.google.com/spreadsheets/d/1Krpmafe810uh8DZ0syVAagIPVuHylfvQMI4KdeGMiBU/edit', icon: '📊', desc: 'Open rates, click rates, campaign performance' },
];

const AUTOMATIONS = [
  { name: 'Blog Bot', schedule: 'Every 2 days', status: 'active', desc: 'Auto-discovers AI tools, writes reviews, publishes to blog, shares on LinkedIn + Facebook', url: 'https://codewords.agemo.ai/run/myaijourney_blog_bot_718cf954', color: '#2563EB' },
  { name: 'Email Drip', schedule: 'Daily', status: 'active', desc: '7-day welcome sequence: Day 0 welcome, Day 1 Claude, Day 3 Perplexity, Day 5 AI Toolkit, Day 7 Roadmap', url: 'https://codewords.agemo.ai/run/myaijourney_email_drip_0eed9486', color: '#F97316' },
  { name: 'Unsubscribe Tracker', schedule: 'Daily', status: 'active', desc: 'Checks Brevo for unsubscribes and logs to Google Sheets', url: 'https://codewords.agemo.ai/run/myaijourney_unsub_tracker_29bdcbd0', color: '#EF4444' },
  { name: 'Newsletter Analytics', schedule: 'Weekly', status: 'active', desc: 'Pulls open rates, click rates, and campaign stats from Brevo', url: 'https://codewords.agemo.ai/run/myaijourney_newsletter_analytics_4d04a0e8', color: '#8B5CF6' },
  { name: 'AI Chat Widget', schedule: '24/7', status: 'active', desc: 'GPT-4.1-mini powered assistant on every page', url: null, color: '#10B981' },
  { name: 'Click Tracker', schedule: 'Real-time', status: 'active', desc: 'Logs every affiliate CTA click with UTM params to Google Sheets', url: null, color: '#06B6D4' },
];

const PLATFORMS = [
  { name: 'Blog', status: 'live', url: 'https://myaijourney.org', manage: 'https://codewords.agemo.ai', icon: '🌐' },
  { name: 'LinkedIn', status: 'connected', url: 'https://www.linkedin.com', manage: 'https://codewords.agemo.ai', icon: '💼' },
  { name: 'Facebook Page', status: 'needs posting permissions', url: 'https://www.facebook.com/pages', manage: 'https://codewords.agemo.ai', icon: '📘' },
  { name: 'Brevo (Email)', status: 'active', url: 'https://app.brevo.com', manage: 'https://app.brevo.com/settings/keys/api', icon: '✉️' },
  { name: 'Google Search Console', status: 'pending verification', url: 'https://search.google.com/search-console', manage: 'https://search.google.com/search-console', icon: '🔍' },
  { name: 'Hostinger DNS', status: 'active', url: 'https://hpanel.hostinger.com', manage: 'https://hpanel.hostinger.com', icon: '🌐' },
  { name: 'Medium', status: 'not connected', url: 'https://medium.com', manage: 'https://medium.com/me/settings/security', icon: '📝' },
  { name: 'Pinterest', status: 'not connected', url: 'https://pinterest.com', manage: 'https://developers.pinterest.com', icon: '📌' },
];

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState(false);

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: '#0f1117', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)' }}>
        <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '40px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB, #F97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          </div>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '8px' }}>Admin Dashboard</h1>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '24px' }}>Enter your password to access</p>
          <form onSubmit={(e) => { e.preventDefault(); if (pw === ADMIN_PASSWORD) { setAuthed(true); } else { setPwError(true); } }}>
            <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setPwError(false); }} placeholder="Password" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: pwError ? '2px solid #EF4444' : '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '1rem', fontFamily: 'var(--font-body)', outline: 'none', marginBottom: '12px' }} />
            {pwError && <p style={{ color: '#EF4444', fontSize: '0.82rem', marginBottom: '12px' }}>Wrong password</p>}
            <button type="submit" style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#2563EB', color: '#fff', border: 'none', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>Access Dashboard</button>
          </form>
        </div>
      </div>
    );
  }

  const totalPosts = posts.length;
  const avgRating = (posts.reduce((sum, p) => sum + (p.rating || 0), 0) / posts.filter(p => p.rating).length).toFixed(1);
  const categories = [...new Set(posts.map(p => p.category))];

  return (
    <div style={{ minHeight: '100vh', background: '#0f1117', color: '#e2e8f0', fontFamily: 'var(--font-body)' }}>
      {/* Header */}
      <div style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #2563EB, #F97316)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', fontSize: '1.05rem' }}>MyAIJourney <span style={{ color: '#F97316' }}>Admin</span></span>
        </div>
        <a href="/" style={{ color: '#60A5FA', fontSize: '0.85rem', fontFamily: 'var(--font-heading)', textDecoration: 'none' }}>View Site &rarr;</a>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Blog Posts', value: totalPosts, color: '#2563EB' },
            { label: 'Avg Rating', value: `${avgRating}/5`, color: '#F97316' },
            { label: 'Categories', value: categories.length, color: '#8B5CF6' },
            { label: 'Automations', value: AUTOMATIONS.length, color: '#10B981' },
            { label: 'Platforms', value: PLATFORMS.filter(p => p.status !== 'not connected').length, color: '#06B6D4' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', borderLeft: `3px solid ${s.color}` }}>
              <p style={{ color: '#94A3B8', fontSize: '0.78rem', fontFamily: 'var(--font-heading)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>{s.label}</p>
              <p style={{ color: '#fff', fontSize: '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Automations */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            Automations
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '12px' }}>
            {AUTOMATIONS.map((a) => (
              <div key={a.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', marginTop: '5px', flexShrink: 0, boxShadow: '0 0 8px rgba(34,197,94,0.5)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', fontSize: '0.92rem' }}>{a.name}</span>
                    <span style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '999px', background: `${a.color}20`, color: a.color, fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{a.schedule}</span>
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.5 }}>{a.desc}</p>
                  {a.url && <a href={a.url} target="_blank" rel="noopener" style={{ color: '#60A5FA', fontSize: '0.8rem', fontFamily: 'var(--font-heading)', fontWeight: 600, textDecoration: 'none', marginTop: '8px', display: 'inline-block' }}>Run Manually &rarr;</a>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Sheets */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /></svg>
            Google Sheets Dashboards
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
            {SHEETS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '18px', textDecoration: 'none', transition: 'all 0.15s', display: 'block' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.background = 'rgba(16,185,129,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{s.icon}</div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', fontSize: '0.92rem', marginBottom: '4px' }}>{s.name}</p>
                <p style={{ color: '#94A3B8', fontSize: '0.8rem', lineHeight: 1.5 }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Platforms */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            Connected Platforms
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px' }}>
            {PLATFORMS.map((p) => {
              const isLive = p.status === 'live' || p.status === 'active' || p.status === 'connected';
              const isPending = p.status.includes('pending') || p.status.includes('needs');
              return (
                <div key={p.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.3rem' }}>{p.icon}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#fff', fontSize: '0.88rem' }}>{p.name}</p>
                    <p style={{ fontSize: '0.75rem', color: isLive ? '#22c55e' : isPending ? '#F59E0B' : '#64748B' }}>
                      {isLive ? '● ' : isPending ? '◐ ' : '○ '}{p.status}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {p.url && <a href={p.url} target="_blank" rel="noopener" style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(37,99,235,0.15)', color: '#60A5FA', fontFamily: 'var(--font-heading)', fontWeight: 600, textDecoration: 'none' }}>Visit</a>}
                    {p.manage && <a href={p.manage} target="_blank" rel="noopener" style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(249,115,22,0.15)', color: '#FDBA74', fontFamily: 'var(--font-heading)', fontWeight: 600, textDecoration: 'none' }}>Manage</a>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Blog Posts */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
            Published Posts ({totalPosts})
          </h2>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#94A3B8', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Title</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#94A3B8', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Category</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', color: '#94A3B8', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Rating</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#94A3B8', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Published</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', color: '#94A3B8', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>View</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p) => (
                  <tr key={p.slug} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '12px 16px', color: '#fff', fontWeight: 600, maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</td>
                    <td style={{ padding: '12px 16px' }}><span style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(37,99,235,0.15)', color: '#60A5FA', fontWeight: 600 }}>{p.category}</span></td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', color: '#F97316', fontWeight: 700 }}>{p.rating ? `${p.rating}/5` : '-'}</td>
                    <td style={{ padding: '12px 16px', color: '#94A3B8' }}>{p.publishedAt}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}><a href={`/blog/${p.slug}`} target="_blank" style={{ color: '#60A5FA', textDecoration: 'none', fontWeight: 600 }}>View</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}




