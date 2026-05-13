import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, MapPin, ShieldCheck, Cpu, Building2, Users, CheckCircle2, TrendingUp, LockKeyhole, Ship, Truck, Server, ClipboardCheck } from 'lucide-react';
import './styles.css';

const email = 'Yeury.Tavarez@lodestech.com';
const brand = 'LODǝS';

function LotusLogo({ small=false }) {
  return (
    <div className={`logo-mark ${small ? 'small' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" role="img">
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 97C44 78 39 58 60 25C81 58 76 78 60 97Z" />
          <path d="M38 92C23 76 19 57 32 36C51 59 55 78 38 92Z" />
          <path d="M82 92C97 76 101 57 88 36C69 59 65 78 82 92Z" />
          <path d="M21 83C13 68 15 53 26 43C34 63 38 77 21 83Z" />
          <path d="M99 83C107 68 105 53 94 43C86 63 82 77 99 83Z" />
          <path d="M60 97V112" />
          <path d="M60 18V7" />
          <path d="M44 25V14" />
          <path d="M76 25V14" />
          <path d="M27 38V26" />
          <path d="M93 38V26" />
          <circle cx="60" cy="7" r="3" fill="currentColor" />
          <circle cx="44" cy="14" r="3" fill="currentColor" />
          <circle cx="76" cy="14" r="3" fill="currentColor" />
          <circle cx="27" cy="26" r="3" fill="currentColor" />
          <circle cx="93" cy="26" r="3" fill="currentColor" />
          <path d="M60 112H37"/><path d="M60 112h23"/>
        </g>
      </svg>
    </div>
  );
}

function Header(){return <header className="site-header"><a className="brand" href="#top"><LotusLogo small/><span>{brand}</span></a><nav><a href="#services">Services</a><a href="#capabilities">Capabilities</a><a href="#naics">NAICS</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>}

function Hero(){return <section id="top" className="hero"><div className="hero-bg"><div className="grid-floor"/><div className="world-lines"/><div className="ship-line"/><div className="data-panel p1"/><div className="data-panel p2"/></div><div className="hero-content"><div className="eyebrow">Built on honor.</div><h1>Built on honor.<br/><span>Powered by technology.</span></h1><p>Lodes LLC delivers innovative technology and logistics solutions for government and commercial clients.</p><p className="subline">We plan. We integrate. We deliver results.</p><a className="email-card" href={`mailto:${email}`}><Mail size={22}/><span>{email}</span><strong>Email Us</strong><span className="arrow">→</span></a></div><div className="hero-lotus"><LotusLogo/><div className="pulse one"/><div className="pulse two"/></div></section>}

const services=[
  {icon:Building2,title:'Facility & Contract Support',text:'Mission-ready support for facility improvement, maintenance coordination, and commercial project execution.'},
  {icon:Cpu,title:'Technology Solutions',text:'Network infrastructure, low-voltage coordination, systems integration, hardware staging, and IT support workflows.'},
  {icon:ShieldCheck,title:'Government Contracting',text:'Federal, state, and local support with disciplined documentation, compliance awareness, and performance focus.'},
  {icon:Truck,title:'Logistics Operations',text:'Planning, coordination, supply movement, vendor support, and delivery-focused operational execution.'}
];

function Services(){return <section id="services" className="section"><div className="section-title"><span>Our Services</span><h2>Solutions that drive mission success</h2></div><div className="service-grid">{services.map(({icon:Icon,title,text})=><article className="service-card" key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>}

function Capabilities(){const items=[['Experienced Team',Users],['Quality Focused',CheckCircle2],['On-Time Delivery',TrendingUp],['Secure & Compliant',LockKeyhole],['Technology Driven',Server],['Logistics Ready',Ship]];return <section id="capabilities" className="capabilities">{items.map(([label,Icon])=><div className="cap-item" key={label}><Icon/><span>{label}</span></div>)}</section>}

const naics = [
  {group:'Technology & IT', codes:[['541512','Computer Systems Design Services'],['541513','Computer Facilities Management Services'],['541519','Other Computer Related Services'],['541611','Administrative Management & General Management Consulting Services']]},
  {group:'Logistics & Transportation', codes:[['484110','General Freight Trucking, Local'],['484121','General Freight Trucking, Long-Distance'],['488510','Freight Transportation Arrangement'],['493110','General Warehousing & Storage'],['493190','Other Warehousing & Storage']]},
  {group:'Facilities & Construction Support', codes:[['236220','Commercial & Institutional Building Construction'],['238210','Electrical Contractors & Other Wiring Installation Contractors'],['238220','Plumbing, Heating, and Air-Conditioning Contractors'],['238290','Other Building Equipment Contractors']]}
];
function Naics(){return <section id="naics" className="section naics-section"><div className="section-title"><span>NAICS Coverage</span><h2>Procurement categories we can align with</h2><p>These codes provide a working starting point for capability statements, SAM.gov profiles, subcontracting opportunities, and future government bids. Final code selection should match the exact solicitation scope.</p></div><div className="naics-grid">{naics.map(cat=><article className="naics-card" key={cat.group}><h3>{cat.group}</h3>{cat.codes.map(([code,desc])=><div className="code-row" key={code}><strong>{code}</strong><span>{desc}</span></div>)}</article>)}</div></section>}

function About(){return <section id="about" className="about"><div><span className="eyebrow">About Lodes LLC</span><h2>Honor-led execution for technology, logistics, and mission support.</h2></div><p>Lodes LLC is built to serve clients that need dependable coordination, disciplined communication, and practical delivery. We combine technology-focused thinking with logistics-minded execution to support commercial operations and government contracting opportunities.</p></section>}

function Contact(){return <footer id="contact" className="footer"><div className="footer-brand"><LotusLogo small/><h2>{brand}</h2><p>Innovative technology and logistics solutions delivered with honor, precision, and purpose.</p></div><div><h3>Contact</h3><a href={`mailto:${email}`}><Mail size={18}/>{email}</a><p><MapPin size={18}/>Serving Government & Commercial Clients</p></div><div><h3>Certifications / Positioning</h3><ul><li><ClipboardCheck/>Small Business</li><li><ClipboardCheck/>Technology Focused</li><li><ClipboardCheck/>Logistics Capable</li><li><ClipboardCheck/>Quality Driven</li></ul></div><div className="copyright">© 2026 Lodes LLC. All rights reserved.</div></footer>}

function App(){return <><Header/><main><Hero/><Services/><Capabilities/><Naics/><About/></main><Contact/></>}

createRoot(document.getElementById('root')).render(<App/>);
