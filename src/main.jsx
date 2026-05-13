import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, ArrowRight, Building2, MonitorCog, ShieldCheck, Users, CheckCircle2, TrendingUp, LockKeyhole, MapPin, Menu, Cpu, Network } from 'lucide-react';
import './styles.css';

const email = 'Yeury.Tavarez@lodestech.com';

function LotusLogo({ compact = false }) {
  return (
    <div className="brand-lockup" aria-label="Lodes LLC logo">
      <div className="lotus-mark">
        <span className="petal p1" />
        <span className="petal p2" />
        <span className="petal p3" />
        <span className="petal p4" />
        <span className="petal p5" />
        <span className="stem s1" />
        <span className="stem s2" />
        <span className="stem s3" />
      </div>
      {!compact && (
        <div>
          <div className="brand-name">LODES LLC</div>
          <div className="brand-subtitle">Technology & Construction</div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <main className="site-shell">
      <header className="nav">
        <LotusLogo />
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="quote-btn" href={`mailto:${email}?subject=Lodes LLC Project Inquiry`}>Request a Quote</a>
        <button className="menu-btn" aria-label="Open menu"><Menu size={22} /></button>
      </header>

      <section className="hero">
        <div className="circuit-grid" />
        <div className="hero-copy">
          <p className="eyebrow">Technology. Construction. Solutions.</p>
          <h1>Built on integrity. Powered by technology.</h1>
          <p className="hero-text">
            Lodes LLC delivers disciplined contracting, low-voltage infrastructure, network deployment, and technology-forward project support for commercial and government clients.
          </p>
          <div className="email-panel">
            <div className="email-title"><Mail size={18} /> Email us for more information</div>
            <form action={`mailto:${email}`} method="post" encType="text/plain" className="email-form">
              <input aria-label="Email address" placeholder="Your email address" name="email" type="email" />
              <button type="submit">Send <ArrowRight size={17} /></button>
            </form>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="tech-building">
            <div className="scan-ring" />
            <LotusLogo compact />
            <div className="tower tower-a" />
            <div className="tower tower-b" />
            <div className="tower tower-c" />
            <div className="data-line l1" />
            <div className="data-line l2" />
            <div className="data-line l3" />
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <p className="section-kicker">Our Services</p>
        <h2>Focused expertise. Measurable impact.</h2>
        <div className="service-grid">
          <Service icon={<Building2 />} title="General Contracting" text="Reliable field support, project coordination, facility improvements, and execution-focused construction services." />
          <Service icon={<MonitorCog />} title="Technology Solutions" text="Network infrastructure, structured cabling, system integration, and practical IT solutions that keep operations moving." />
          <Service icon={<ShieldCheck />} title="Government Contracting" text="Documentation-minded support for public-sector and commercial requirements with a focus on compliance and performance." />
        </div>
      </section>

      <section id="capabilities" className="capability-strip">
        <Capability icon={<Users />} text="Experienced Team" />
        <Capability icon={<CheckCircle2 />} text="Quality Focused" />
        <Capability icon={<TrendingUp />} text="On-Time Delivery" />
        <Capability icon={<LockKeyhole />} text="Secure & Compliant" />
        <Capability icon={<Network />} text="Infrastructure Ready" />
      </section>

      <section id="about" className="section about">
        <div>
          <p className="section-kicker">About Lodes LLC</p>
          <h2>Infrastructure work with a modern operating standard.</h2>
        </div>
        <p>
          Lodes LLC combines construction discipline with technology fluency. We help clients plan, install, modernize, and maintain essential infrastructure with clear communication, clean execution, and dependable follow-through.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Ready to discuss the next project?</h2>
          <p>Send your project scope, location, preferred timeline, and any site requirements. We will review the details and respond with next steps.</p>
        </div>
        <a className="contact-card" href={`mailto:${email}?subject=Lodes LLC Project Inquiry`}>
          <Mail size={22} />
          <span>{email}</span>
        </a>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <LotusLogo />
          <p>A technology and construction firm committed to disciplined execution, secure infrastructure, and measurable project outcomes.</p>
        </div>
        <div>
          <h3>Primary Capabilities</h3>
          <ul>
            <li>Network & low-voltage infrastructure</li>
            <li>Commercial project support</li>
            <li>Government-ready contracting</li>
            <li>Facility modernization</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p><Mail size={15} /> {email}</p>
          <p><MapPin size={15} /> Serving government and commercial clients</p>
        </div>
      </footer>
      <div className="copyright">© 2026 Lodes LLC. All rights reserved.</div>
    </main>
  );
}

function Service({ icon, title, text }) {
  return <article className="service-card"><div className="service-icon">{React.cloneElement(icon, { size: 42 })}</div><h3>{title}</h3><p>{text}</p></article>;
}

function Capability({ icon, text }) {
  return <div className="capability">{React.cloneElement(icon, { size: 24 })}<span>{text}</span></div>;
}

createRoot(document.getElementById('root')).render(<App />);
