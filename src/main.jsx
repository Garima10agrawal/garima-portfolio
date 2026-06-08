import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  Coffee,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import avatarHero from "./assets/avatar-hero-wave-transparent.png";
import avatarAbout from "./assets/avatar-about-transparent.png";
import avatarWorkTwirl from "./assets/avatar-work-twirl-transparent.png";
import avatarSkills from "./assets/avatar-skills-transparent.png";
import avatarFooter from "./assets/avatar-footer-phone-coffee-transparent.png";
import "./styles.css";

const navItems = ["Home", "About", "Work", "Connect"];

const work = [
  {
    initials: "CH",
    label: "Product Analytics",
    title: "Contoso Hotel",
    desc: "Sentiment dashboard linking guest feedback to NPS and revenue uplift.",
    tools: "Power BI, KPIs, ETL, stakeholder reporting",
    data: "Reviews, surveys, bookings, service tickets"
  },
  {
    initials: "SX",
    label: "Consulting",
    title: "Senoptix",
    desc: "Market entry roadmap, pricing tiers and $5-15M revenue scenarios.",
    tools: "Market research, interviews, financial modelling",
    data: "12 interviews, channel economics, scenarios"
  },
  {
    initials: "ZP",
    label: "Business Analysis",
    title: "ZipPay BNPL",
    desc: "Inclusive onboarding, user stories and customer trust controls.",
    tools: "Miro, user stories, prototypes, business case",
    data: "3 regions, funnel assumptions, segment insights"
  },
  {
    initials: "PM",
    label: "PMO",
    title: "Delivery Control Tower",
    desc: "Portfolio visibility, SOPs and delivery governance rhythm.",
    tools: "Asana, Everhour, SOPs, RAG reporting",
    data: "Milestones, time logs, risks, delivery updates"
  }
];

const journey = [
  ["2026", "Project Management Intern", "Innomate/UXT | PMO updates, lifecycle docs, Asana and Everhour."],
  ["2025", "Master of Commerce", "UNSW | Business Analytics & Digital Transformation."],
  ["2025", "Consulting Project Lead", "Senoptix + Equoia | market entry, interviews and financial models."],
  ["2024", "Sydney Experience", "Camp Australia | communication, leadership and stakeholder empathy."],
  ["2022", "Software Developer Intern", "KData | 60% faster SME financial reporting."],
  ["2023", "B.Tech Engineering", "Manipal University Jaipur | computer and communication engineering."]
];

const capabilities = [
  ["Business analysis", "Requirements, user stories, acceptance criteria, process maps and practical documentation that delivery teams can actually use."],
  ["Product analytics", "KPI design, dashboard thinking, customer insights and business-ready recommendations from messy data."],
  ["Consulting strategy", "Market research, stakeholder interviews, commercial modelling and concise executive narratives."],
  ["PMO support", "Portfolio visibility, SOPs, time tracking, milestone updates and escalation clarity."],
  ["Data storytelling", "Power BI, SQL, Excel and clear reporting packs that help non-technical stakeholders decide faster."]
];

const tools = ["Power BI", "SQL", "Python", "Advanced Excel", "Tableau", "SAS", "Asana", "Everhour", "Miro", "Jira", "Trello", "Notion", "Google Colab", "API integration"];

function App() {
  return (
    <div className="site-shell">
      <div className="side-line left" />
      <div className="side-line right" />
      <SketchBackground />
      <AussiePlayLayer />
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Capabilities />
        <Tools />
        <Connect />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a className="logo" href="#home">GA</a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
      <a className="available" href="#connect">
        <span /> Available to work
      </a>
    </header>
  );
}

function Hero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const avatarScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1.28, 0.72]);
  const avatarY = useTransform(scrollYProgress, [0, 0.7, 1], [0, 120, 280]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section className="hero" id="home" ref={ref}>
      <motion.div className="hero-copy" style={{ scale: textScale }}>
        <motion.p className="kicker" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>Hey, welcome to my portfolio</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Garima Agrawal
        </motion.h1>
        <motion.p className="role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}>
          Business Analyst & Consultant
        </motion.p>
        <motion.div className="hero-tags" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <span><MapPin size={16} /> Based in Sydney</span>
          <span><Sparkles size={16} /> Available to work</span>
        </motion.div>
      </motion.div>
      <motion.div className="hero-avatar waving winking" style={{ scale: avatarScale, y: avatarY }}>
        <AvatarImage src={avatarHero} />
      </motion.div>
      <a className="scroll-cue" href="#about"><ArrowDown size={18} /> Scroll</a>
    </section>
  );
}

function About() {
  return (
    <section className="chapter about" id="about">
      <motion.div className="avatar-pop open-arms" initial={{ opacity: 0, x: -90, scale: 0.75 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false, amount: 0.45 }}>
        <AvatarImage src={avatarAbout} />
      </motion.div>
      <motion.div className="chapter-copy" initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.4 }}>
        <p className="kicker">About</p>
        <h2>“I translate ambiguity into useful decisions.”</h2>
        <p>
          A Sydney-based analyst with engineering roots, analytics training and a consulting mindset. I like clean requirements, calm dashboards and work that makes teams feel clear.
        </p>
      </motion.div>
      <Journey />
    </section>
  );
}

function Journey() {
  return (
    <div className="journey">
      <p className="kicker">Journey</p>
      <div className="journey-line">
        {journey.map(([year, title, text]) => (
          <motion.article key={`${year}-${title}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}>
            <span>{year}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section className="chapter work" id="work">
      <motion.div className="twirl-avatar" initial={{ opacity: 0, x: "-40vw", rotate: -90 }} whileInView={{ opacity: 1, x: "38vw", rotate: 360 }} transition={{ duration: 1.1, ease: "easeInOut" }} viewport={{ once: false, amount: 0.35 }}>
        <AvatarImage src={avatarWorkTwirl} />
      </motion.div>
      <div className="section-head">
        <p className="kicker">Work</p>
        <h2>Case studies with a little business sparkle.</h2>
      </div>
      <div className="work-grid">
        {work.map((item, index) => (
          <motion.article className="work-card" key={item.title} initial={{ opacity: 0, scale: 0.9, y: 24 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} whileHover={{ y: -10, scale: 1.03 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.06 }}>
            <div className="project-initials">{item.initials}</div>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <small><strong>Tools:</strong> {item.tools}</small>
            <small><strong>Data:</strong> {item.data}</small>
            <a href="/Garima_Agrawal_Resume.pdf" download>View project <ArrowUpRight size={15} /></a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  const [open, setOpen] = React.useState("Business analysis");

  return (
    <section className="chapter capabilities">
      <motion.div className="smoke-avatar" initial={{ opacity: 0, scale: 0.86, y: 42 }} whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.75, ease: "easeOut" }} viewport={{ once: false, amount: 0.35 }}>
        <AvatarImage src={avatarSkills} />
      </motion.div>
      <div className="section-head">
        <p className="kicker">What I can do for you</p>
        <h2>Pick a skill. I’ll unpack it.</h2>
      </div>
      <div className="accordion">
        {capabilities.map(([title, text]) => {
          const isOpen = open === title;
          return (
            <article className={isOpen ? "capability open" : "capability"} key={title}>
              <button type="button" onClick={() => setOpen(isOpen ? "" : title)}>
                <span>{title}</span>
                <ChevronDown size={22} />
              </button>
              <motion.p initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}>
                {text}
              </motion.p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className="tools-section">
      <motion.div className="mini-avatar" initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }}>
        <AvatarImage src={avatarSkills} />
      </motion.div>
      <div className="more-toggle">More about me</div>
      <h2>Tools I can bring to the table.</h2>
      <div className="tool-cloud">
        {tools.map((tool) => <span key={tool}>{tool}</span>)}
      </div>
    </section>
  );
}

function Connect() {
  return (
    <footer className="connect" id="connect">
      <div className="marquee" aria-hidden="true">
        <span>CONTACT ME • LET’S CHAT • CONNECT • COFFEE? •</span>
        <span>CONTACT ME • LET’S CHAT • CONNECT • COFFEE? •</span>
      </div>
      <motion.div className="phone-scene" initial={{ opacity: 0, scale: 0.86 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.35 }}>
        <div className="phone-card">
          <span className="phone-speaker" />
          <h2>Let’s chat & connect</h2>
          <p>Business Analyst | Sydney | Available to work</p>
          <div className="footer-links">
            <a href="mailto:garima10agrawal@gmail.com"><Mail size={17} /> Email</a>
            <a href="https://linkedin.com/in/garima-10ag2001"><Phone size={17} /> LinkedIn</a>
            <a href="/Garima_Agrawal_Resume.pdf" download><Download size={17} /> Resume</a>
          </div>
        </div>
        <div className="footer-avatar">
          <AvatarImage src={avatarFooter} />
          <Coffee className="coffee-cup" size={44} />
        </div>
      </motion.div>
    </footer>
  );
}

function AvatarImage({ src }) {
  return <img src={src} alt="Cartoon portrait of Garima Agrawal" />;
}

function SketchBackground() {
  return (
    <div className="sketch-bg" aria-hidden="true">
      <motion.span className="sketch star-a" animate={{ rotate: [0, 360] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>✦</motion.span>
      <motion.span className="sketch bridge" animate={{ y: [0, -14, 0] }} transition={{ duration: 7, repeat: Infinity }}>⌒⌒⌒</motion.span>
      <motion.span className="sketch cup" animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity }}>☕</motion.span>
      <motion.span className="sketch opera" animate={{ x: [0, 18, 0] }} transition={{ duration: 8, repeat: Infinity }}>△△△</motion.span>
      <motion.div className="line-doodle opera-house" animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity }}>
        <OperaHouseDoodle />
      </motion.div>
      <motion.div className="line-doodle harbour-bridge" animate={{ x: [0, 14, 0] }} transition={{ duration: 9, repeat: Infinity }}>
        <HarbourBridgeDoodle />
      </motion.div>
      <motion.div className="line-doodle donut-doodle" animate={{ rotate: [-4, 5, -4] }} transition={{ duration: 6, repeat: Infinity }}>
        <DonutDoodle />
      </motion.div>
      <motion.div className="line-doodle coffee-doodle" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <CoffeeCupDoodle />
      </motion.div>
      <motion.div className="line-doodle kangaroo-doodle-bg" animate={{ x: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity }}>
        <KangarooDoodle />
      </motion.div>
      <motion.div className="line-doodle koala-doodle" animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 7, repeat: Infinity }}>
        <KoalaDoodle />
      </motion.div>
      <motion.span className="orb mint" animate={{ x: [0, 40, -20, 0], y: [0, -24, 20, 0] }} transition={{ duration: 11, repeat: Infinity }} />
      <motion.span className="orb peach" animate={{ x: [0, -28, 22, 0], y: [0, 26, -18, 0] }} transition={{ duration: 12, repeat: Infinity }} />
    </div>
  );
}

function AussiePlayLayer() {
  const { scrollYProgress } = useScroll();
  const ballX = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ["8vw", "68vw", "28vw", "76vw"]);
  const ballY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ["82vh", "22vh", "68vh", "34vh"]);
  const ballRotate = useTransform(scrollYProgress, [0, 1], [0, 920]);
  const catOneX = useTransform(scrollYProgress, [0, 0.45, 1], ["4vw", "20vw", "8vw"]);
  const catTwoX = useTransform(scrollYProgress, [0, 0.55, 1], ["78vw", "58vw", "72vw"]);

  return (
    <div className="aussie-play-layer" aria-hidden="true">
      <motion.div className="play-ball" style={{ x: ballX, y: ballY, rotate: ballRotate }} />
      <motion.div className="cat-doodle cat-one" style={{ x: catOneX }}>
        <CatDoodle />
      </motion.div>
      <motion.div className="cat-doodle cat-two" style={{ x: catTwoX }}>
        <CatDoodle />
      </motion.div>
    </div>
  );
}

function CatDoodle() {
  return (
    <svg viewBox="0 0 140 120" role="img" aria-label="">
      <path d="M39 50 32 28l20 11M88 39l20-11-7 23" />
      <path d="M38 49c5-18 20-28 38-26 20 2 34 17 34 38 0 25-18 43-44 43-23 0-39-15-39-36 0-8 3-15 11-19Z" />
      <path d="M93 70c18-2 32 7 34 23 2 12-5 22-17 24" />
      <path d="M45 86c-8 8-16 15-26 20M68 95v20M89 90l13 22" />
      <circle cx="57" cy="61" r="2.8" />
      <circle cx="84" cy="61" r="2.8" />
      <path d="M67 72h8M52 77c-10 0-18 2-28 8M88 77c10 0 18 2 28 8M53 84c-9 3-17 7-25 13M87 84c9 3 17 7 25 13" />
    </svg>
  );
}

function OperaHouseDoodle() {
  return (
    <svg viewBox="0 0 180 120">
      <path d="M16 94h148" />
      <path d="M32 88c16-34 34-55 60-70-5 28-16 52-34 70" />
      <path d="M72 88c14-31 31-51 55-62-2 26-13 47-31 62" />
      <path d="M107 88c13-21 28-34 48-41-4 18-13 32-27 41" />
      <path d="M24 101h132" />
    </svg>
  );
}

function HarbourBridgeDoodle() {
  return (
    <svg viewBox="0 0 220 120">
      <path d="M15 88h190" />
      <path d="M24 88c38-55 134-55 172 0" />
      <path d="M48 88V66M76 88V48M104 88V38M132 88V40M160 88V52M188 88V70" />
      <path d="M44 88 84 54 126 88 164 55 198 88" />
    </svg>
  );
}

function CoffeeCupDoodle() {
  return (
    <svg viewBox="0 0 120 120">
      <path d="M34 44h46l-7 45H42L34 44Z" />
      <path d="M39 34h36" />
      <path d="M82 53c17 0 17 26 0 26" />
      <path d="M44 26c-7-8 8-12 1-20M63 26c-7-8 8-12 1-20" />
    </svg>
  );
}

function DonutDoodle() {
  return (
    <svg viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="38" />
      <circle cx="60" cy="60" r="14" />
      <path d="M37 46c10-9 20 6 30-1s20-4 27 4" />
      <path d="M42 79c7 5 15-3 22 2s17 5 24-2" />
      <path d="M35 62h8M81 41h8M75 84h8" />
    </svg>
  );
}

function KangarooDoodle() {
  return (
    <svg viewBox="0 0 140 120">
      <path d="M86 26c15 1 26 12 28 27 2 14-4 25-16 31" />
      <path d="M82 27c-9 8-15 18-15 31 0 18 12 29 29 27" />
      <path d="M105 29l16-18M110 34l23-10" />
      <path d="M66 61c-21 8-36 21-45 40" />
      <path d="M73 82l-13 28M94 85l11 25" />
      <path d="M65 58c-17-5-29-14-38-27" />
      <circle cx="99" cy="43" r="2.5" />
    </svg>
  );
}

function KoalaDoodle() {
  return (
    <svg viewBox="0 0 130 120">
      <circle cx="38" cy="42" r="20" />
      <circle cx="92" cy="42" r="20" />
      <path d="M35 52c0-22 14-38 30-38s30 16 30 38c0 25-13 42-30 42S35 77 35 52Z" />
      <circle cx="54" cy="52" r="2.5" />
      <circle cx="76" cy="52" r="2.5" />
      <path d="M62 60c4-4 8-4 12 0-1 6-3 9-6 9s-5-3-6-9Z" />
      <path d="M53 77c8 7 22 7 30 0" />
    </svg>
  );
}

createRoot(document.getElementById("root")).render(<App />);
