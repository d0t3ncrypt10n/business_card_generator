import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="home-wrapper">
      {/* Ambient Background Effects */}
      <div className="ambient-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="home-content">
        {/* Hero Section */}
        <header className="hero-section">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            New: Multiple Templates
          </div>
          
          <h1 className="hero-title">
            Create Stunning <br/>
            <span className="gradient-text">Business Cards</span>
          </h1>
          
          <p className="hero-subtitle">
            Share your contact info effortlessly with a tap or scan. No app required. Make a lasting impression instantly.
          </p>
          
          <div className="hero-cta">
            <Link to={user ? "/dashboard" : "/register"} className="btn-primary">
              Get Started Free
            </Link>
            <Link to={user ? "/dashboard" : "/login"} className="btn-secondary">
              <span className="material-symbols-outlined">login</span>
              Sign In
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual">
            <div className="card-mockup">
              <div className="mockup-overlay"></div>
              <div className="mockup-content">
                <div className="mockup-avatar"></div>
                <div className="mockup-line mockup-line-1"></div>
                <div className="mockup-line mockup-line-2"></div>
                <div className="mockup-icons">
                  <div className="mockup-icon"><span className="material-symbols-outlined">call</span></div>
                  <div className="mockup-icon"><span className="material-symbols-outlined">mail</span></div>
                  <div className="mockup-icon"><span className="material-symbols-outlined">link</span></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="divider"></div>

        {/* Social Proof */}
        <section className="social-proof">
          <p className="social-proof-text">Trusted by 50,000+ Professionals</p>
          <div className="social-proof-logos">
            <div className="logo-item">
              <span className="material-symbols-outlined">diamond</span>
              <span className="logo-name">LuxCorp</span>
            </div>
            <div className="logo-item">
              <span className="material-symbols-outlined">bolt</span>
              <span className="logo-name">FastTech</span>
            </div>
            <div className="logo-item">
              <span className="material-symbols-outlined">eco</span>
              <span className="logo-name">EcoLife</span>
            </div>
            <div className="logo-item">
              <span className="material-symbols-outlined">rocket_launch</span>
              <span className="logo-name">LaunchPad</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="features-header">
            <h2 className="features-title">
              Everything you need to <span className="text-primary">network smarter</span>.
            </h2>
            <p className="features-subtitle">Packed with features designed for the modern professional.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon icon-primary">
                <span className="material-symbols-outlined">qr_code_2</span>
              </div>
              <div>
                <h3 className="feature-title">QR Codes</h3>
                <p className="feature-text">Instant sharing via scan</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon icon-purple">
                <span className="material-symbols-outlined">style</span>
              </div>
              <div>
                <h3 className="feature-title">Multiple Templates</h3>
                <p className="feature-text">Choose from 3 unique designs</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon icon-blue">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div>
                <h3 className="feature-title">View Tracking</h3>
                <p className="feature-text">Track card views in real-time</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon icon-pink">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <div>
                <h3 className="feature-title">Custom Colors</h3>
                <p className="feature-text">Match your brand identity</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon icon-orange">
                <span className="material-symbols-outlined">share</span>
              </div>
              <div>
                <h3 className="feature-title">Share Analytics</h3>
                <p className="feature-text">Track shares and engagement</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon icon-green">
                <span className="material-symbols-outlined">download</span>
              </div>
              <div>
                <h3 className="feature-title">Export Options</h3>
                <p className="feature-text">Download as PNG or PDF</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon icon-cyan">
                <span className="material-symbols-outlined">link</span>
              </div>
              <div>
                <h3 className="feature-title">Social Links</h3>
                <p className="feature-text">Connect all your profiles</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon icon-rose">
                <span className="material-symbols-outlined">edit</span>
              </div>
              <div>
                <h3 className="feature-title">Live Preview</h3>
                <p className="feature-text">See changes instantly</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <h2 className="section-title">How it Works</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon timeline-icon-active">
                <span className="material-symbols-outlined">person_add</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Create your profile</h3>
                <p className="timeline-text">Sign up in seconds and input your details.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <span className="material-symbols-outlined">edit</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Customize your look</h3>
                <p className="timeline-text">Choose colors, add a logo, and pick a layout.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <span className="material-symbols-outlined">ios_share</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Share instantly</h3>
                <p className="timeline-text">Share via QR code, link, or Apple Wallet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="cta-footer">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Ready to upgrade?</h2>
              <p className="cta-subtitle">Join the future of networking today.</p>
              <Link to={user ? "/dashboard" : "/register"} className="cta-button">
                Get Started for Free
              </Link>
              <p className="cta-note">No credit card required</p>
            </div>
            <div className="cta-blob cta-blob-1"></div>
            <div className="cta-blob cta-blob-2"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
