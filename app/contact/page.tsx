'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          style={{
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)',
            padding: '56px 0 40px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '8px' }}>
              Get in Touch
            </p>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Contact Me
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', maxWidth: '540px', lineHeight: 1.6 }}>
              Questions about a review? Interested in working together? Partnership inquiry? Drop me a message.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="section">
          <div
            className="container"
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 360px',
              gap: '56px',
              alignItems: 'start',
            }}
          >
            {/* Contact form */}
            <div>
              {status === 'success' ? (
                <div
                  style={{
                    padding: '40px',
                    background: 'rgba(22,163,74,0.06)',
                    border: '2px solid rgba(22,163,74,0.2)',
                    borderRadius: '12px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(22,163,74,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: '#15803d', marginBottom: '12px' }}>
                    Message Sent!
                  </h2>
                  <p style={{ color: '#166534', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thanks for reaching out. I typically reply within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label
                        htmlFor="name"
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          color: 'var(--color-text)',
                          marginBottom: '6px',
                        }}
                      >
                        Name <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          color: 'var(--color-text)',
                          marginBottom: '6px',
                        }}
                      >
                        Email <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        color: 'var(--color-text)',
                        marginBottom: '6px',
                      }}
                    >
                      Subject <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="">Select a subject...</option>
                      <option value="Review Question">Question about a review</option>
                      <option value="Affiliate Partnership">Affiliate / Partnership inquiry</option>
                      <option value="Tool Suggestion">Tool suggestion for review</option>
                      <option value="Advertising">Advertising inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        color: 'var(--color-text)',
                        marginBottom: '6px',
                      }}
                    >
                      Message <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me what is on your mind..."
                      rows={6}
                      className="input-field"
                      style={{ resize: 'vertical', minHeight: '140px' }}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#dc2626', fontSize: '0.88rem', padding: '12px 16px', background: 'rgba(220,38,38,0.06)', borderRadius: '6px', border: '1px solid rgba(220,38,38,0.2)' }}>
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary"
                    style={{ justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'wait' : 'pointer' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  title: 'Email',
                  text: 'support@myaijourney.org',
                  sub: 'I reply within 24-48 hours',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  title: 'Response Time',
                  text: '24 to 48 hours',
                  sub: 'Monday through Friday',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: '24px',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '10px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(37,99,235,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>{item.title}</p>
                    <p style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '2px' }}>{item.text}</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{item.sub}</p>
                  </div>
                </div>
              ))}

              {/* Affiliate notice */}
              <div
                style={{
                  padding: '20px',
                  background: 'rgba(249,115,22,0.06)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  borderRadius: '10px',
                }}
              >
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-cta)', marginBottom: '8px' }}>
                  Partnership Inquiries
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  I work with AI companies and SaaS tools that I genuinely use and recommend. I do not accept all inquiries — fit matters.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <style>{`
          @media (max-width: 768px) {
            .container > div[style*="gridTemplateColumns: 1fr 360px"] {
              grid-template-columns: 1fr !important;
            }
            form > div[style*="gridTemplateColumns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}




