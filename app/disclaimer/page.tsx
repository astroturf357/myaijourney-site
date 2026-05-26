import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Affiliate & Earnings Disclaimer',
  description: 'Affiliate and earnings disclaimer for MyAIJourney.org. Full transparency about our affiliate relationships and compensation.',
};

export default function DisclaimerPage() {
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
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 700 }}>Affiliate & Earnings Disclaimer</h1>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>Last updated: May 2025</p>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="prose">
              <h2>Affiliate Disclosure</h2>
              <p>MyAIJourney.org is a participant in various affiliate programs. This means some of the links on this website are affiliate links. When you click on an affiliate link and make a purchase, I may receive a small commission at <strong>no additional cost to you</strong>.</p>

              <h2>Which Links Are Affiliate Links?</h2>
              <p>I mark affiliate content clearly throughout the site:</p>
              <ul>
                <li>Blog posts containing affiliate links display an <strong>"Contains affiliate links"</strong> badge at the top</li>
                <li>Individual product CTAs (call-to-action buttons) are labeled as affiliate links</li>
                <li>The footer on every page includes a general affiliate disclosure</li>
              </ul>

              <h2>My Commitment to Honest Reviews</h2>
              <p>Affiliate relationships <strong>do not</strong> influence the content of my reviews. Here is how I maintain editorial integrity:</p>
              <ul>
                <li><strong>I test every tool for at least 2 weeks</strong> in real work scenarios before reviewing</li>
                <li><strong>I give negative reviews</strong> when tools do not deliver on their promises</li>
                <li><strong>I disclose all affiliate relationships</strong> prominently and clearly</li>
                <li><strong>I do not accept payment</strong> for favorable reviews</li>
                <li><strong>I recommend tools I actually use</strong> in my own daily workflow</li>
              </ul>

              <h2>Earnings Disclaimer</h2>
              <p>This website may generate income through:</p>
              <ul>
                <li>Affiliate commissions from product recommendations</li>
                <li>Display advertising (if applicable)</li>
                <li>Sponsored content (always clearly labeled as sponsored)</li>
              </ul>
              <p>Income generated from this website varies and there are no guarantees of earnings. Any income figures mentioned on this site are for illustrative purposes only.</p>

              <h2>AI-Assisted Content Disclosure</h2>
              <p>This site may use AI tools to assist in content research and drafting. All reviews are based on real hands-on human testing for a minimum of 2 weeks. Star ratings reflect genuine human assessment. Every review is fact-checked and edited by Jim Harrell before publication.</p>

              <h2>AI Chat Assistant Disclaimer</h2>
              <p>Our AI chat assistant is powered by third-party AI models (OpenAI) and may produce inaccurate or outdated information. It should not be relied upon as the sole basis for purchasing decisions. The assistant may recommend products for which we earn affiliate commissions. It does not replace professional consultation for business-critical technology decisions.</p>

              <h2>Limitation of AI Liability</h2>
              <p>MyAIJourney shall not be liable for any losses or adverse outcomes resulting from decisions based on AI chat responses, AI-assisted content, or AI tool recommendations on this site. Users assume full responsibility for their own purchasing and technology decisions.</p>

              <h2>Product Information Accuracy</h2>
              <p>I strive to provide accurate information about the products and services I review. However:</p>
              <ul>
                <li>Product pricing, features, and availability may change after a review is published</li>
                <li>My experience with a tool may differ from yours based on use case and technical setup</li>
                <li>Always verify current pricing and features on the official product website before purchasing</li>
              </ul>

              <h2>FTC Compliance</h2>
              <p>This disclosure is provided in compliance with the Federal Trade Commission (FTC) guidelines on endorsements and testimonials. I believe in full transparency with my readers.</p>

              <h2>Questions?</h2>
              <p>If you have questions about our affiliate relationships or this disclaimer, please reach out at <a href="mailto:support@myaijourney.org">support@myaijourney.org</a> or through our <a href="/contact">contact page</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}




