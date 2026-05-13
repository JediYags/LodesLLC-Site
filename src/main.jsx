import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  ArrowRight,
  ShieldCheck,
  Network,
  Truck,
  FileCheck2,
  Medal,
  RadioTower,
  Crosshair,
  LockKeyhole,
  Map,
  BadgeCheck,
  ServerCog,
  ClipboardList
} from "lucide-react";
import primaryLogo from "./assets/lodes-primary-clean.png";
import iconLogo from "./assets/lodes-icon-clean.png";
import "./styles.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Capabilities", id: "capabilities" },
  { label: "NAICS", id: "naics" },
  { label: "Vendor Quotes", id: "quotes" }
];

const backgrounds = [
  {
    id: "home",
    image:
      "linear-gradient(115deg, rgba(0,0,0,.88), rgba(3,10,18,.76)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80')"
  },
  {
    id: "services",
    image:
      "linear-gradient(115deg, rgba(0,0,0,.90), rgba(4,12,22,.82)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=80')"
  },
  {
    id: "capabilities",
    image:
      "linear-gradient(115deg, rgba(0,0,0,.90), rgba(7,12,18,.82)), url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=80')"
  },
  {
    id: "naics",
    image:
      "linear-gradient(115deg, rgba(0,0,0,.91), rgba(8,10,15,.84)), url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2200&q=80')"
  },
  {
    id: "quotes",
    image:
      "linear-gradient(115deg, rgba(0,0,0,.92), rgba(7,12,18,.88)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2200&q=80')"
  }
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const glowX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const observers = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.42 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const activeBackground = useMemo(() => {
    return backgrounds.find((bg) => bg.id === activeSection)?.image || backgrounds[0].image;
  }, [activeSection]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      <motion.div className="progress-line" style={{ scaleX: scrollYProgress }} />
      <motion.div className="ambient-glow" style={{ left: glowX }} />
      <div className="scrolling-background" style={{ backgroundImage: activeBackground }} />

      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo("home")} aria-label="Go to home">
          LOD<span>Σ</span>S
        </button>

        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <section id="home" className="section hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Technology • Logistics • Government Support</p>
          <h1>Built on Honor. Powered by Technology.</h1>
          <p className="lead">
            LODΣS delivers innovative technology and logistics solutions for government and
            commercial clients. We plan. We integrate. We deliver results.
          </p>

          <div className="credibility-row">
            <span><Medal size={16} /> Disabled Veteran-Owned</span>
            <span><ShieldCheck size={16} /> Mission-Focused</span>
            <span><LockKeyhole size={16} /> Secure & Compliant</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <img src={primaryLogo} alt="LODΣS primary logo" />
        </motion.div>
      </section>

      <section id="services" className="section">
        <SectionIntro
          eyebrow="Our Services"
          title="Solutions that drive mission success."
          text="A focused service model built for organizations that need reliable execution, technical coordination, and disciplined logistics support."
        />

        <div className="cards three">
          <ServiceCard
            icon={<Network />}
            title="Technology Solutions"
            text="Network infrastructure, structured cabling, endpoint coordination, system integration, and technical field support."
          />
          <ServiceCard
            icon={<Truck />}
            title="Logistics Support"
            text="Operational coordination, movement planning, vendor support, equipment tracking, and mission-critical delivery workflows."
          />
          <ServiceCard
            icon={<FileCheck2 />}
            title="Government Contracting"
            text="Contract-ready support for federal, state, and local requirements with an emphasis on documentation, accountability, and performance."
          />
        </div>
      </section>

      <section id="capabilities" className="section honor">
        <div className="split">
          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
          >
            <Medal className="gold-icon" size={42} />
            <p className="eyebrow">Honor-Led Operations</p>
            <h2>Veteran discipline applied to modern mission support.</h2>
            <p>
              LODΣS was built around the values that matter when requirements are time-sensitive,
              technical, and operationally important: honor, accountability, readiness, and
              follow-through.
            </p>
            <p>
              As a disabled veteran-owned business, we bring a mission-first standard to
              technology integration, logistics coordination, vendor support, and government
              contracting opportunities. Our role is to help clients and partners move from
              requirement to execution with clarity and confidence.
            </p>
          </motion.div>

          <div className="capability-stack">
            <Capability icon={<ShieldCheck />} title="Disabled Veteran-Owned Business" />
            <Capability icon={<Crosshair />} title="Mission-Focused Planning" />
            <Capability icon={<LockKeyhole />} title="Secure & Compliant Support" />
            <Capability icon={<RadioTower />} title="Technology Integration" />
            <Capability icon={<BadgeCheck />} title="Quality-Focused Delivery" />
            <Capability icon={<Map />} title="Logistics Coordination" />
          </div>
        </div>
      </section>

      <section id="naics" className="section">
        <SectionIntro
          eyebrow="NAICS Alignment"
          title="Built for technology, logistics, and government opportunities."
          text="These codes represent the current direction of LODΣS capabilities and can be refined as contract opportunities become more specific."
        />

        <div className="naics-grid">
          <NaicsGroup
            title="Technology & Technical Services"
            items={[
              ["541512", "Computer Systems Design Services"],
              ["541513", "Computer Facilities Management Services"],
              ["541519", "Other Computer Related Services"],
              ["541611", "Administrative Management & General Management Consulting"]
            ]}
          />
          <NaicsGroup
            title="Logistics & Transportation"
            items={[
              ["488510", "Freight Transportation Arrangement"],
              ["493110", "General Warehousing & Storage"],
              ["493190", "Other Warehousing & Storage"],
              ["541614", "Process, Physical Distribution & Logistics Consulting"]
            ]}
          />
          <NaicsGroup
            title="Infrastructure & Field Support"
            items={[
              ["237130", "Power and Communication Line and Related Structures Construction"],
              ["238210", "Electrical Contractors and Other Wiring Installation Contractors"],
              ["561210", "Facilities Support Services"],
              ["561621", "Security Systems Services"]
            ]}
          />
        </div>
      </section>

      <section id="quotes" className="section contact-section">
        <motion.div
          className="quote-box"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <ClipboardList className="gold-icon" size={44} />
          <h2>Submit a vendor quote.</h2>
          <p>
            When LODΣS posts a contract opportunity, subcontractors, vendors, and partner
            companies can email their quote package for review. Please include your company
            information, pricing, scope assumptions, timeline, and any relevant certifications
            or past performance.
          </p>

          <div className="quote-requirements">
            <span>Company profile</span>
            <span>Scope response</span>
            <span>Pricing</span>
            <span>Timeline</span>
            <span>Past performance</span>
            <span>Certifications</span>
          </div>

          <a
            className="quote-button"
            href="mailto:contact@lodestech.com?subject=Vendor%20Quote%20Submission%20-%20LOD%CE%A3S&body=Hello%20LOD%CE%A3S%20Team%2C%0A%0AI%20am%20submitting%20a%20vendor%20quote%20for%20the%20following%20opportunity%3A%0A%0ACompany%20Name%3A%0APoint%20of%20Contact%3A%0APhone%3A%0AEmail%3A%0AWebsite%3A%0AUEI%2FCAGE%20Code%20(if%20applicable)%3A%0A%0AOpportunity%2FProject%20Name%3A%0AService%20Category%3A%0AScope%20Summary%3A%0AQuoted%20Price%3A%0ATimeline%2FAvailability%3A%0APast%20Performance%3A%0ACertifications%3A%0A%0AThank%20you%2C"
          >
            <Mail size={20} />
            Send quote to contact@lodestech.com
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>

      <footer>
        <img src={iconLogo} alt="LODΣS icon" />
        <p>© 2026 LODΣS. Technology and logistics solutions delivered with honor, precision, and purpose.</p>
      </footer>
    </main>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <motion.div
      className="section-intro"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.015 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.article>
  );
}

function Capability({ icon, title }) {
  return (
    <motion.div
      className="capability"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 6 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
    >
      {icon}
      <span>{title}</span>
    </motion.div>
  );
}

function NaicsGroup({ title, items }) {
  return (
    <motion.div
      className="naics-group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.55 }}
    >
      <h3>{title}</h3>
      {items.map(([code, description]) => (
        <div className="naics-row" key={code}>
          <strong>{code}</strong>
          <span>{description}</span>
        </div>
      ))}
    </motion.div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
