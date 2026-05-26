import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for MyAIJourney.org. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
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
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 700 }}>Privacy Policy</h1>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>Last updated: May 2025</p>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="prose">
              <h2>Information We Collect</h2>
              <p>When you visit MyAIJourney.org, we may collect the following types of information:</p>
              <ul>
                <li><strong>Email address</strong> — When you voluntarily subscribe to our newsletter or submit our contact form</li>
                <li><strong>Name</strong> — When you submit our contact form</li>
                <li><strong>Usage data</strong> — Pages visited, time on site, referral source (collected via analytics)</li>
                <li><strong>Device information</strong> — Browser type, operating system, screen resolution</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>To send you our email newsletter with AI tool reviews and insights (only if you opt in)</li>
                <li>To respond to your contact form submissions</li>
                <li>To improve our website content and user experience</li>
                <li>To understand our audience demographics and interests</li>
              </ul>

              <h2>Email Marketing (Mailjet)</h2>
              <p>We use <strong>Mailjet</strong> as our email service provider. When you subscribe to our newsletter, your email address is stored securely by Mailjet in compliance with GDPR. You can unsubscribe at any time by clicking the unsubscribe link at the bottom of any email or by contacting us directly.</p>

              <h2>AI Chat Assistant</h2>
              <p>Our website features an AI-powered chat assistant. When you use the chat assistant:</p>
              <ul>
                <li><strong>Conversations are not stored permanently</strong> — Chat messages are processed in real time to generate responses and are not saved to a database or associated with your identity</li>
                <li><strong>Messages are sent to a third-party AI provider</strong> (OpenAI) for processing. OpenAI's data handling policies apply to message processing</li>
                <li><strong>No personal data is extracted</strong> from your chat conversations for marketing or profiling purposes</li>
                <li><strong>Do not share sensitive personal information</strong> (passwords, financial data, health information) with the chat assistant</li>
              </ul>

              <h2>AI-Generated Content</h2>
              <p>Some content on this site may be partially assisted by AI tools during the writing process. All AI-assisted content is reviewed, fact-checked, and edited by a human (Jim Harrell) before publication. Our review ratings, opinions, and recommendations reflect genuine human testing and judgment, not AI-generated scores.</p>

              <h2>Cookies and Tracking</h2>
              <p>We may use cookies and similar tracking technologies to track activity on our website and to improve our services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

              <h2>Third-Party Links and Affiliate Disclosure</h2>
              <p>Our site contains links to third-party websites and affiliate links. When you click an affiliate link and make a purchase, we may earn a commission at no additional cost to you. These third-party sites have their own privacy policies, and we encourage you to review them.</p>

              <h2>Data Security</h2>
              <p>We take reasonable measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Unsubscribe from our email list at any time</li>
                <li>Object to the processing of your personal data</li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children.</p>

              <h2>Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date.</p>

              <h2>Contact Us</h2>
              <p>If you have questions about this privacy policy, please contact us at <a href="mailto:support@myaijourney.org">support@myaijourney.org</a> or through our <a href="/contact">contact page</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}





