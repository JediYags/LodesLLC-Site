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
import luxuryLogoBackground from "./assets/luxury-logo-background.png";
import iconLogo from "./assets/lodes-icon-clean.png";
import horizontalHeaderLogo from "./assets/horizontal-header-logo.png";
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
      "radial-gradient(circle at center, rgba(217,164,65,.10), transparent 34%), linear-gradient(115deg, #030405, #08111a 48%, #030405)"
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


const copy = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      capabilities: "Capabilities",
      naics: "NAICS",
      quotes: "Vendor Quotes"
    },
    langButton: "ES",
    eyebrow: "Technology • Logistics • Government Support",
    headline: "Built on Honor. Powered by Technology.",
    lead: "LODΣS delivers innovative technology and logistics solutions for government and commercial clients. We plan. We integrate. We deliver results.",
    badges: ["Disabled Veteran-Owned", "Mission-Focused", "Secure & Compliant"],
    servicesEyebrow: "Our Services",
    servicesTitle: "Solutions that drive mission success.",
    servicesText: "A focused service model built for organizations that need reliable execution, technical coordination, and disciplined logistics support.",
    serviceCards: [
      ["Technology Solutions", "Network infrastructure, structured cabling, endpoint coordination, system integration, and technical field support."],
      ["Logistics Support", "Operational coordination, movement planning, vendor support, equipment tracking, and mission-critical delivery workflows."],
      ["Government Contracting", "Contract-ready support for federal, state, and local requirements with an emphasis on documentation, accountability, and performance."]
    ],
    honorEyebrow: "Honor-Led Operations",
    honorTitle: "Veteran discipline applied to modern mission support.",
    honorP1: "LODΣS was built around the values that matter when requirements are time-sensitive, technical, and operationally important: honor, accountability, readiness, and follow-through.",
    honorP2: "As a disabled veteran-owned business, we bring a mission-first standard to technology integration, logistics coordination, vendor support, and government contracting opportunities. Our role is to help clients and partners move from requirement to execution with clarity and confidence.",
    capabilities: [
      "Disabled Veteran-Owned Business",
      "Mission-Focused Planning",
      "Secure & Compliant Support",
      "Technology Integration",
      "Quality-Focused Delivery",
      "Logistics Coordination"
    ],
    naicsEyebrow: "NAICS Alignment",
    naicsTitle: "Built for technology, logistics, and government opportunities.",
    naicsText: "These codes represent the current direction of LODΣS capabilities and can be refined as contract opportunities become more specific.",
    naicsGroups: [
      ["Technology & Technical Services", [
        ["541512", "Computer Systems Design Services"],
        ["541513", "Computer Facilities Management Services"],
        ["541519", "Other Computer Related Services"],
        ["541611", "Administrative Management & General Management Consulting"]
      ]],
      ["Logistics & Transportation", [
        ["488510", "Freight Transportation Arrangement"],
        ["493110", "General Warehousing & Storage"],
        ["493190", "Other Warehousing & Storage"],
        ["541614", "Process, Physical Distribution & Logistics Consulting"]
      ]],
      ["Infrastructure & Field Support", [
        ["237130", "Power and Communication Line and Related Structures Construction"],
        ["238210", "Electrical Contractors and Other Wiring Installation Contractors"],
        ["561210", "Facilities Support Services"],
        ["561621", "Security Systems Services"]
      ]]
    ],
    quotesTitle: "Submit a vendor quote.",
    quotesText: "When LODΣS posts a contract opportunity, subcontractors, vendors, and partner companies can email their quote package for review. Please include your company information, pricing, scope assumptions, timeline, and any relevant certifications or past performance.",
    quoteItems: ["Company profile", "Scope response", "Pricing", "Timeline", "Past performance", "Certifications"],
    quoteButton: "{t.quoteButton}",
    footer: "© 2026 LODΣS. Technology and logistics solutions delivered with honor, precision, and purpose."
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      capabilities: "Capacidades",
      naics: "NAICS",
      quotes: "Cotizaciones"
    },
    langButton: "EN",
    eyebrow: "Tecnología • Logística • Apoyo Gubernamental",
    headline: "Construido con Honor. Impulsado por Tecnología.",
    lead: "LODΣS ofrece soluciones innovadoras de tecnología y logística para clientes gubernamentales y comerciales. Planificamos. Integramos. Entregamos resultados.",
    badges: ["Empresa de Veterano Discapacitado", "Enfoque de Misión", "Seguro y Conforme"],
    servicesEyebrow: "Nuestros Servicios",
    servicesTitle: "Soluciones que impulsan el éxito de la misión.",
    servicesText: "Un modelo de servicio enfocado para organizaciones que necesitan ejecución confiable, coordinación técnica y apoyo logístico disciplinado.",
    serviceCards: [
      ["Soluciones Tecnológicas", "Infraestructura de red, cableado estructurado, coordinación de equipos, integración de sistemas y apoyo técnico en campo."],
      ["Apoyo Logístico", "Coordinación operativa, planificación de movimiento, apoyo a proveedores, seguimiento de equipos y flujos de entrega críticos."],
      ["Contratación Gubernamental", "Apoyo listo para contratos federales, estatales y locales con énfasis en documentación, responsabilidad y desempeño."]
    ],
    honorEyebrow: "Operaciones Guiadas por Honor",
    honorTitle: "Disciplina de veterano aplicada al apoyo moderno de misión.",
    honorP1: "LODΣS fue creado alrededor de valores esenciales cuando los requisitos son sensibles al tiempo, técnicos y operacionalmente importantes: honor, responsabilidad, preparación y cumplimiento.",
    honorP2: "Como empresa propiedad de un veterano discapacitado, llevamos un estándar de misión primero a la integración tecnológica, coordinación logística, apoyo a proveedores y oportunidades de contratación gubernamental.",
    capabilities: [
      "Empresa de Veterano Discapacitado",
      "Planificación Enfocada en la Misión",
      "Apoyo Seguro y Conforme",
      "Integración Tecnológica",
      "Entrega Enfocada en Calidad",
      "Coordinación Logística"
    ],
    naicsEyebrow: "Alineación NAICS",
    naicsTitle: "Preparado para tecnología, logística y oportunidades gubernamentales.",
    naicsText: "Estos códigos representan la dirección actual de las capacidades de LODΣS y pueden refinarse según oportunidades contractuales específicas.",
    naicsGroups: [
      ["Tecnología y Servicios Técnicos", [
        ["541512", "Servicios de Diseño de Sistemas Informáticos"],
        ["541513", "Servicios de Gestión de Instalaciones Informáticas"],
        ["541519", "Otros Servicios Relacionados con Computadoras"],
        ["541611", "Consultoría Administrativa y de Gestión General"]
      ]],
      ["Logística y Transporte", [
        ["488510", "Organización de Transporte de Carga"],
        ["493110", "Almacenamiento General"],
        ["493190", "Otros Servicios de Almacenamiento"],
        ["541614", "Consultoría de Logística, Distribución y Procesos"]
      ]],
      ["Infraestructura y Apoyo en Campo", [
        ["237130", "Construcción de Líneas de Energía y Comunicación"],
        ["238210", "Contratistas Eléctricos y Cableado"],
        ["561210", "Servicios de Apoyo a Instalaciones"],
        ["561621", "Servicios de Sistemas de Seguridad"]
      ]]
    ],
    quotesTitle: "Enviar una cotización de proveedor.",
    quotesText: "Cuando LODΣS publique una oportunidad de contrato, subcontratistas, proveedores y empresas asociadas pueden enviar su paquete de cotización por correo electrónico para revisión. Incluya información de la empresa, precio, alcance, cronograma, certificaciones y experiencia relevante.",
    quoteItems: ["Perfil de empresa", "Respuesta al alcance", "Precio", "Cronograma", "Experiencia", "Certificaciones"],
    quoteButton: "Enviar cotización a contact@lodestech.com",
    footer: "© 2026 LODΣS. Soluciones de tecnología y logística entregadas con honor, precisión y propósito."
  }
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [lang, setLang] = useState("en");
  const t = copy[lang];
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

      <header className={`site-header ${activeSection !== "home" ? "scrolled" : ""}`}>
        <button className="header-brand" onClick={() => scrollTo("home")} aria-label="Go to home">
          {activeSection !== "home" ? (
            <img className="header-logo-horizontal" src={horizontalHeaderLogo} alt="LODΣS horizontal logo" />
          ) : (
            <span className="wordmark">LOD<span>Σ</span>S</span>
          )}
        </button>

        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => scrollTo(item.id)}
            >
              {t.nav[item.id] || item.label}
            </button>
          ))}
        </nav>

        <button className="language-toggle" onClick={() => setLang(lang === "en" ? "es" : "en")} aria-label="Toggle language">
          {t.langButton}
        </button>
      </header>

      <section id="home" className="section hero">
        <div className="hero-background-logo">
          <img src={luxuryLogoBackground} alt="LODΣS luxury background logo" />
        </div>
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.headline}</h1>
          <p className="lead">{t.lead}</p>

          <div className="credibility-row">
            <span><Medal size={16} /> {t.badges[0]}</span>
            <span><ShieldCheck size={16} /> {t.badges[1]}</span>
            <span><LockKeyhole size={16} /> {t.badges[2]}</span>
          </div>
        </motion.div>

      </section>

      <section id="services" className="section">
        <SectionIntro
          eyebrow={t.servicesEyebrow}
          title={t.servicesTitle}
          text={t.servicesText}
        />

        <div className="cards three">
          <ServiceCard
            icon={<Network />}
            title={t.serviceCards[0][0]}
            text={t.serviceCards[0][1]}
          />
          <ServiceCard
            icon={<Truck />}
            title={t.serviceCards[1][0]}
            text={t.serviceCards[1][1]}
          />
          <ServiceCard
            icon={<FileCheck2 />}
            title={t.serviceCards[2][0]}
            text={t.serviceCards[2][1]}
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
            <p className="eyebrow">{t.honorEyebrow}</p>
            <h2>{t.honorTitle}</h2>
            <p>{t.honorP1}</p>
            <p>{t.honorP2}</p>
          </motion.div>

          <div className="capability-stack">
            <Capability icon={<ShieldCheck />} title={t.capabilities[0]} />
            <Capability icon={<Crosshair />} title={t.capabilities[1]} />
            <Capability icon={<LockKeyhole />} title={t.capabilities[2]} />
            <Capability icon={<RadioTower />} title={t.capabilities[3]} />
            <Capability icon={<BadgeCheck />} title={t.capabilities[4]} />
            <Capability icon={<Map />} title={t.capabilities[5]} />
          </div>
        </div>
      </section>

      <section id="naics" className="section">
        <SectionIntro
          eyebrow={t.naicsEyebrow}
          title={t.naicsTitle}
          text={t.naicsText}
        />

        <div className="naics-grid">
          {t.naicsGroups.map(([title, items]) => (
            <NaicsGroup key={title} title={title} items={items} />
          ))}
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
          <h2>{t.quotesTitle}</h2>
          <p>{t.quotesText}</p>

          <div className="quote-requirements">
            {t.quoteItems.map((item) => <span key={item}>{item}</span>)}
          </div>

          <a
            className="quote-button"
            href="mailto:contact@lodestech.com?subject=Vendor%20Quote%20Submission%20-%20LOD%CE%A3S&body=Hello%20LOD%CE%A3S%20Team%2C%0A%0AI%20am%20submitting%20a%20vendor%20quote%20for%20the%20following%20opportunity%3A%0A%0ACompany%20Name%3A%0APoint%20of%20Contact%3A%0APhone%3A%0AEmail%3A%0AWebsite%3A%0AUEI%2FCAGE%20Code%20(if%20applicable)%3A%0A%0AOpportunity%2FProject%20Name%3A%0AService%20Category%3A%0AScope%20Summary%3A%0AQuoted%20Price%3A%0ATimeline%2FAvailability%3A%0APast%20Performance%3A%0ACertifications%3A%0A%0AThank%20you%2C"
          >
            <Mail size={20} />
            {t.quoteButton}
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>

      <footer>
        <img src={iconLogo} alt="LODΣS icon" />
        <p>{t.footer}</p>
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
