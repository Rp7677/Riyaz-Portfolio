import "./App.css";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js", primary: true },
      { name: "JavaScript ES6+", primary: true },
      { name: "HTML5", primary: false },
      { name: "CSS3", primary: false },
    ],
  },
  {
    label: "Libraries & Tools",
    skills: [
      { name: "Redux Toolkit", primary: true },
      { name: "Axios", primary: false },
      { name: "React Router", primary: false },
      { name: "Git", primary: false },
      { name: "REST APIs", primary: true },
      { name: "Responsive Design", primary: false },
    ],
  },
  {
    label: "Backend Exposure",
    skills: [
      { name: "Node.js", primary: false },
      { name: "Express.js", primary: false },
      { name: "ASP.NET Core", primary: false },
      { name: "PHP", primary: false },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "PostgreSQL", primary: false },
      { name: "SQL", primary: false },
    ],
  },
];

const projects = [
  {
    num: "01",
    title: "School ERP Management System",
    tag: "Major Project",
    tech: ["React.js", "Redux Toolkit", "Spring Boot", "PostgreSQL"],
    desc: "A multi-module web-based ERP platform for educational institutions managing the full operational lifecycle.",
    bullets: [
      "Built modules for admissions, campus setup, student records, and document workflows",
      "Developed role-based UI for Admin and Staff with permission-gated views",
      "Created multi-step forms with live validation and dynamic data handling",
      "Integrated REST APIs for real-time operations and seamless data flow",
      "Optimized performance using React hooks and efficient state management",
    ],
  },
  {
    num: "02",
    title: "PPSU Conference 2026",
    tag: "Live Deployed Project",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    desc: "A live conference website developed for PPSU Conference 2026 with frontend and backend functionality.",
    bullets: [
      "Developed both frontend and backend using PHP",
      "Built conference pages for event details, registration, and information management",
      "Created responsive UI for students, faculty, and visitors",
      "Deployed the project live for real-world conference usage",
    ],
  },
  {
    num: "03",
    title: "Trip Fund Splitter",
    tag: "Web App",
    tech: ["React.js", "PHP", "SQL"],
    desc: "A collaborative expense management tool for trips and group activities with real-time share calculation.",
    bullets: [
      "Built application to split expenses and manage group payments",
      "Implemented real-time share calculation and payment tracking",
    ],
  },
  {
    num: "04",
    title: "Compute-Mart",
    tag: "E-Commerce",
    tech: ["React.js", "ASP.NET Core"],
    desc: "A responsive e-commerce interface for computer products featuring advanced filtering and pagination.",
    bullets: [
      "Developed product-based UI with filtering, pagination, and responsive design",
      "Integrated backend APIs for product data and user actions",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA · Information Technology",
    institution: "PP Savani University",
    location: "India",
    year: "2024 – 2026",
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    institution: "MK Institute",
    location: "India",
    year: "2021 – 2024",
  },
];

const certifications = [
  "Data Science with Python",
  "Advanced React Development",
  "ASP.NET Development",
];

function App() {
  return (
    <main className="portfolio">

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="logo">
          RP<span> · dev</span>
        </div>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="navBtn">Contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Frontend Developer · Carrollton, Texas</p>
          <h1>
            Riyaz <em>Patel</em>
            <span className="line2">React · Redux · APIs</span>
          </h1>
          <p className="heroText">
            I build <strong>clean, scalable web applications</strong> using React.js with a focus
            on elegant UI architecture, REST API integration, and complex state management.
            Currently seeking frontend or full-stack roles in the United States.
          </p>
          <div className="heroActions">
            <a href="#projects" className="primaryBtn">View Projects ↓</a>
            <a href="mailto:riyazpatel185@gmail.com" className="secondaryBtn">Hire Me →</a>
          </div>
          <div className="stats">
            <div>
              <strong>4+</strong>
              <small>Projects</small>
            </div>
            <div>
              <strong>10+</strong>
              <small>Skills</small>
            </div>
            <div>
              <strong>3</strong>
              <small>Certifications</small>
            </div>
            <div>
              <strong>USA</strong>
              <small>Work Auth</small>
            </div>
          </div>
        </div>

        <div className="heroCard">
          <div className="cardBadge">Available for Work</div>
          <h3>React Frontend Developer</h3>
          <p>
            Specialized in ERP systems, REST API integration, and production-grade
            UI development with Redux Toolkit.
          </p>
          <div className="cardDivider" />
          <div className="cardMeta">
            <div className="cardMetaItem">
              <span className="label">Location</span>
              <span className="value">Carrollton, TX</span>
            </div>
            <div className="cardMetaItem">
              <span className="label">Focus</span>
              <span className="value">Frontend / Full-Stack</span>
            </div>
            <div className="cardMetaItem">
              <span className="label">Status</span>
              <span className="value">Open to Roles</span>
            </div>
            <div className="cardMetaItem">
              <span className="label">Education</span>
              <span className="value">MCA (2026)</span>
            </div>
          </div>
          <div className="cardTags">
            <span>React</span>
            <span>Redux</span>
            <span>REST APIs</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </section>

      <div className="sectionDivider" />

      {/* ── ABOUT ── */}
      <section className="section" id="about">
        <p className="sectionLabel">About Me</p>
        <h2>Focused on real-world <em>product building</em>.</h2>
        <div className="aboutGrid">
          <div className="aboutLeft">
            <p>
              I'm a Frontend Developer with hands-on experience building scalable,
              production-level web applications. My most significant work is a{" "}
              <strong>multi-module School ERP Management System</strong> featuring admissions,
              role-based access control, student records, campus setup, and document workflows.
            </p>
            <p>
              I'm certified in <strong>Data Science with Python</strong>, Advanced React Development,
              and ASP.NET — and I bring exposure to both frontend and backend technologies,
              enabling me to collaborate effectively across the full stack.
            </p>
            <p>
              Based in Carrollton, Texas, I am <strong>authorized to work in the United States</strong>{" "}
              and open to relocation across the country.
            </p>
          </div>
          <div className="aboutRight">
            <div className="infoCard">
              <div className="infoLabel">Contact</div>
              <div className="infoValue">riyazpatel185@gmail.com</div>
            </div>
            <div className="infoCard">
              <div className="infoLabel">Location</div>
              <div className="infoValue">Carrollton, Texas, USA</div>
            </div>
            <div className="infoCard">
              <div className="infoLabel">Work Authorization</div>
              <div className="infoValue">Authorized · Open to Relocation</div>
            </div>
            <div className="infoCard">
              <div className="infoLabel">Certifications</div>
              <div className="infoValue">
                <div className="certBadges">
                  {certifications.map((c) => (
                    <div key={c} className="certBadge">{c}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sectionDivider" />

      {/* ── SKILLS ── */}
      <section className="section skillsSection" id="skills">
        <p className="sectionLabel">Technical Skills</p>
        <h2>Tools & technologies <em>I work with</em>.</h2>
        <div className="skillsLayout">
          <div className="skillsIntro">
            <p>
              A full-spectrum frontend toolkit — from UI architecture and state management
              to API integration and database exposure. Always learning, always building.
            </p>
          </div>
          <div className="skillCategories">
            {skillCategories.map((cat) => (
              <div key={cat.label} className="skillCategory">
                <div className="skillCategoryLabel">{cat.label}</div>
                <div className="skillPills">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className={`skillPill${s.primary ? " primary" : ""}`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sectionDivider" />

      {/* ── PROJECTS ── */}
      <section className="section projectsSection" id="projects">
        <p className="sectionLabel">Featured Work</p>
        <h2>Selected <em>Projects</em>.</h2>
        <div className="projectsGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className="projectNum">{project.num}</div>
              <div className="projectBody">
                <span className="projectTag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <ul className="projectBullets">
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="projectRight">
                <div className="techPills">
                  {project.tech.map((t) => (
                    <span key={t} className="techPill">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="sectionDivider" />

      {/* ── EDUCATION ── */}
      <section className="section eduSection" id="education">
        <p className="sectionLabel">Education</p>
        <h2>Academic <em>Background</em>.</h2>
        <div className="eduGrid">
          {education.map((edu) => (
            <div key={edu.degree} className="eduCard">
              <div className="eduDegree">{edu.short}</div>
              <h3>{edu.degree}</h3>
              <div className="eduInstitution">{edu.institution} · {edu.location}</div>
              <div className="eduYear">{edu.year}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="sectionDivider" />

      {/* ── CONTACT ── */}
      <section className="contact" id="contact">
        <div className="contactInner">
          <div className="contactGrid">
            <div>
              <p className="sectionLabel">Get In Touch</p>
              <h2>Let's build something <em>great together.</em></h2>
              <p>
                Open to Frontend Developer and React Developer roles across the United States.
                I respond to every message — don't hesitate to reach out.
              </p>
              <div className="contactLinks">
                <a href="mailto:riyazpatel185@gmail.com" className="contactLink">
                  <span className="linkIcon">✉</span>
                  riyazpatel185@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/riyaz-patel-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="contactLink"
                >
                  <span className="linkIcon">↗</span>
                  linkedin.com/in/riyaz-patel-tech
                </a>
                <a
                  href="https://github.com/Rp7677/school-erp-system.git"
                  target="_blank"
                  rel="noreferrer"
                  className="contactLink"
                >
                  <span className="linkIcon">↗</span>
                  github.com/riyazpatel
                </a>
                <span className="contactLink">
                  <span className="linkIcon">📍</span>
                  Carrollton, Texas
                </span>
              </div>
            </div>
            <div className="availabilityBadge">
              <div className="availRing">
                <div className="availRingInner">
                  <div className="availDot" />
                  <div className="availText">Open to<br />Opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2025 Riyaz Patel · Frontend Developer</p>
        <p>Carrollton, TX · riyazpatel185@gmail.com</p>
      </footer>

    </main>
  );
}

export default App;
