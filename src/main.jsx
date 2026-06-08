import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import garimaAvatar from "./assets/garima-cartoon-avatar.png";
import "./styles.css";

const bubbleMotion = {
  hidden: { opacity: 0, y: 34, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const sections = [
  {
    id: "about",
    label: "About",
    title: "I turn messy business questions into calm, useful decisions.",
    copy: "Sydney-based Business Analyst with a UNSW analytics background, engineering foundation and consulting delivery mindset.",
    chips: ["Requirements", "Dashboards", "Stakeholders", "Strategy"]
  },
  {
    id: "work",
    label: "Work",
    title: "Selected case studies with business shape, not just pretty slides.",
    copy: "Product analytics, market entry, BNPL uplift and PMO control tower projects built for recruiter scanning.",
    chips: ["Contoso Hotel", "Senoptix", "ZipPay", "PMO"]
  },
  {
    id: "experience",
    label: "Experience",
    title: "Analytics, PMO and consulting projects across tech, energy and services.",
    copy: "Project Management Intern at Innomate/UXT, Software Developer Intern at KData, and consulting project lead for Senoptix and Equoia.",
    chips: ["Asana", "Power BI", "SQL", "Miro"]
  },
  {
    id: "connect",
    label: "Connect",
    title: "Open to Business Analyst, Product Analyst, PMO and consulting roles.",
    copy: "Based in Sydney with Australian work rights. Happy to discuss analyst, graduate and digital transformation opportunities.",
    chips: ["Sydney", "Open to roles", "Resume ready", "LinkedIn"]
  }
];

const workCards = [
  ["Product Analytics", "Contoso Hotel", "Sentiment dashboard for NPS, repeat bookings and revenue uplift."],
  ["Consulting", "Senoptix", "Market entry, pricing tiers and $5-15M revenue scenarios."],
  ["Business Analysis", "ZipPay BNPL", "Inclusive onboarding, user stories and customer trust controls."],
  ["PMO", "Control Tower", "Portfolio visibility, SOPs and delivery governance rhythm."]
];

function App() {
  const [active, setActive] = React.useState("about");
  const activeSection = sections.find((section) => section.id === active) ?? sections[0];

  return (
    <div className="site-shell">
      <div className="side-line left" aria-hidden="true" />
      <div className="side-line right" aria-hidden="true" />
      <AnimatedBackground />
      <Header active={active} setActive={setActive} />
      <main>
        <Hero setActive={setActive} />
        <BubbleSwitcher active={active} setActive={setActive} />
        <Spotlight section={activeSection} />
        <WorkWall />
        <Experience />
        <Connect />
      </main>
    </div>
  );
}

function Header({ active, setActive }) {
  return (
    <header className="header">
      <a className="logo" href="#home" onClick={() => setActive("about")}>
        <span>GA</span>
        <strong>Garima Agrawal</strong>
      </a>
      <nav aria-label="Portfolio sections">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={active === section.id ? "active" : ""}
            onClick={() => setActive(section.id)}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero({ setActive }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const avatarScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.92, 1.08, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section className="hero" id="home" ref={ref}>
      <motion.div className="hero-inner" style={{ scale: heroScale, y }}>
        <motion.p className="hello" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Hey, welcome to my portfolio
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 }}>
          I’m Garima, a Business Analyst & Consultant.
        </motion.h1>
        <motion.p className="tiny-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }}>
          Sydney-based. Data fluent. Strategy-minded. PMO-ready.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>
          <a className="pill primary" href="#work" onClick={() => setActive("work")}>
            See work <ArrowUpRight size={18} />
          </a>
          <a className="pill outline" href="/Garima_Agrawal_Resume.pdf" download>
            <Download size={18} /> Resume
          </a>
        </motion.div>
      </motion.div>
      <motion.div className="avatar-stage" style={{ scale: avatarScale }}>
        <CartoonAvatar />
      </motion.div>
    </section>
  );
}

function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <motion.span className="orb peach" animate={{ x: [0, 32, -18, 0], y: [0, -28, 22, 0], scale: [1, 1.08, 0.95, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="orb green" animate={{ x: [0, -26, 20, 0], y: [0, 24, -18, 0], scale: [0.9, 1.1, 1, 0.9] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="star one" animate={{ rotate: [0, 360], scale: [1, 1.25, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>✦</motion.span>
      <motion.span className="star two" animate={{ y: [0, -18, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>✧</motion.span>
    </div>
  );
}

function CartoonAvatar() {
  return (
    <motion.div className="cartoon-card" initial={{ opacity: 0, rotate: -4, y: 26 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: 0.85, delay: 0.3 }}>
      <div className="avatar-burst" />
      <img src={garimaAvatar} alt="Cartoon portrait of Garima Agrawal" />
      <p>Business analyst energy, Sydney edition.</p>
    </motion.div>
  );
}

function BubbleSwitcher({ active, setActive }) {
  return (
    <section className="bubble-nav" aria-label="Choose a portfolio section">
      {sections.map((section, index) => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          className={active === section.id ? "bubble active" : "bubble"}
          onClick={() => setActive(section.id)}
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.08, rotate: index % 2 ? -1.5 : 1.5 }}
          whileTap={{ scale: 0.96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
        >
          {section.label}
        </motion.a>
      ))}
    </section>
  );
}

function Spotlight({ section }) {
  return (
    <motion.section
      key={section.id}
      id={section.id}
      className="spotlight"
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="section-label">{section.label}</p>
      <h2>{section.title}</h2>
      <p>{section.copy}</p>
      <div className="chip-row">
        {section.chips.map((chip) => <span key={chip}>{chip}</span>)}
      </div>
    </motion.section>
  );
}

function WorkWall() {
  return (
    <section className="work-wall" id="work">
      <div className="section-top">
        <p className="section-label">Work</p>
        <h2>Small cards. Big business context.</h2>
      </div>
      <div className="work-grid">
        {workCards.map(([type, title, text], index) => (
          <motion.article
            className="work-card"
            key={title}
            variants={bubbleMotion}
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.04, y: -8 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ delay: index * 0.05 }}
          >
            <span>{type}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <p className="section-label">Experience</p>
      <div className="experience-list">
        {[
          ["Innomate/UXT", "PMO updates, Asana, Everhour, SOPs."],
          ["KData Science", "60% faster reporting for SME finance data."],
          ["Senoptix & Equoia", "Market entry, interviews, modelling, roadmap."]
        ].map(([title, text]) => (
          <motion.div className="experience-row" key={title} initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ x: 12 }} viewport={{ once: true }}>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section className="connect" id="connect">
      <motion.div className="connect-bubble" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
        <Sparkles size={24} />
        <h2>Let’s build something useful.</h2>
        <p>Open to Sydney Business Analyst, Product Analyst, PMO and consulting roles.</p>
        <div className="contact-links">
          <a href="mailto:garima10agrawal@gmail.com"><Mail size={17} /> Email</a>
          <a href="tel:+61435683356"><Phone size={17} /> Call</a>
          <a href="https://linkedin.com/in/garima-10ag2001"><BriefcaseBusiness size={17} /> LinkedIn</a>
          <span><MapPin size={17} /> Sydney</span>
        </div>
      </motion.div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
