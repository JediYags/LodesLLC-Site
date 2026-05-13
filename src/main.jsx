import React from 'react';
import { createRoot } from 'react-dom/client';
import { ShieldCheck, Network, HardHat, FileCheck2, Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import './styles.css';

function App() {
  return <div className="page">
    <header className="header">
      <div className="brand"><div className="logo">L</div><div><strong>LODES LLC</strong><span>Contracting • Low Voltage • Government</span></div></div>
      <nav><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="btn small" href="#contact">Request Quote</a>
    </header>

    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">Veteran-owned contracting support</p>
        <h1>Reliable contracting and network installation services.</h1>
        <p>Lodes LLC provides general contracting support, low-voltage/network installations, and project-ready services for commercial, residential, and government clients.</p>
        <div className="actions"><a className="btn" href="#contact">Start a Project <ArrowRight size={18}/></a><a className="btn secondary" href="#services">View Services</a></div>
      </div>
      <div className="heroCard">
        <div className="mark">L</div>
        <h2>Built for precision. Managed with accountability.</h2>
        <p>Clean execution, clear communication, dependable results.</p>
        <div className="steps"><span>Plan</span><span>Execute</span><span>Document</span><span>Support</span></div>
      </div>
    </section>

    <section id="services" className="section">
      <p className="eyebrow">Services</p><h2>Practical support for real-world projects.</h2>
      <div className="grid">
        <Card icon={<HardHat/>} title="General Contracting" text="Project coordination, repairs, installations, painting, maintenance support, and field execution." />
        <Card icon={<Network/>} title="Low-Voltage & Network" text="Structured cabling, network drops, access points, camera wiring, rack cleanup, and small business network buildouts." />
        <Card icon={<FileCheck2/>} title="Government Contracting" text="Contract-ready support for local, state, and federal opportunities with documentation-focused delivery." />
      </div>
    </section>

    <section className="light">
      <div><p className="eyebrow dark">Government Ready</p><h2>Positioned for public-sector work.</h2></div>
      <div className="checklist">
        <p>Lodes LLC is structured to pursue contracting opportunities with a professional operating foundation, clear service categories, and dependable project delivery.</p>
        <span><CheckCircle2/> Veteran-owned business</span><span><CheckCircle2/> SDVOSB pathway</span><span><CheckCircle2/> Network infrastructure</span><span><CheckCircle2/> Field-service capable</span>
      </div>
    </section>

    <section id="about" className="section split">
      <div className="aboutBox"><ShieldCheck size={46}/><h2>Built on discipline, service, and execution.</h2></div>
      <p>Lodes LLC was created to provide dependable contracting and technology installation services with a professional standard. This draft uses placeholder text until your final business details are added.</p>
    </section>

    <section id="contact" className="contact">
      <div><h2>Let’s talk about your next project.</h2><p>Send project details, location, timeline, and the type of work needed.</p></div>
      <div className="contactLines"><span><Phone/> Phone: Coming soon</span><span><Mail/> Email: Coming soon</span><span><MapPin/> Jacksonville, Florida</span></div>
    </section>
    <footer>© 2026 Lodes LLC. All rights reserved.</footer>
  </div>
}
function Card({icon,title,text}){return <div className="card"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>}

createRoot(document.getElementById('root')).render(<App/>);
