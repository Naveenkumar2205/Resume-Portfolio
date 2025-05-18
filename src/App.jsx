import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const header = document.querySelector(".header");
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: targetPosition - headerHeight - 20,
          behavior: "smooth",
        });
        setIsMenuOpen(false); // Close menu on link click
      }
    };

    const links = document.querySelectorAll(".nav-links a");
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav">
        <h1 className="logo">Naveen Kumar</h1>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#qualification">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-row">
            <h2 className="footer-name">Naveen Kumar</h2>
          </div>
          <div className="footer-row footer-icons">
            <a
              href="https://www.linkedin.com/in/naveen-kumar22/"
              aria-label="LinkedIn"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/Naveenkumar2205"
              aria-label="GitHub"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:naveenkumaramujuru@gmail.com"
              aria-label="Email"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="footer-row">
            <p className="footer-copyright">© Naveen Kumar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const IntroSection = () => {
  return (
    <section className="intro-section" id="home">
      <div className="social-column">
        <a
          href="https://www.linkedin.com/in/naveen-kumar22/"
          aria-label="LinkedIn"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="mailto:naveenkumaramujuru@gmail.com"
          aria-label="Email"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://github.com/Naveenkumar2205"
          aria-label="GitHub"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://x.com/Navin__x"
          aria-label="Twitter"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>

      <div className="content-column">
        <div className="name-with-icon">
          <h2>Naveen Kumar</h2>
          <i className="fas fa-hand waving-hand"></i>
        </div>
        <h3 className="title-with-line">FullStack Software Developer</h3>
        <p>
          Building cutting-edge digital solutions with fullstack expertise, I
          turn visions into reality with clean, scalable code, delivering
          robust, user-centric applications tailored to your needs.
        </p>
        <button
          className="say-hello-btn1"
          onClick={() => {
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
              const header = document.querySelector(".header");
              const headerHeight = header ? header.offsetHeight : 0;
              const targetPosition =
                contactSection.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({
                top: targetPosition - headerHeight - 20,
                behavior: "smooth",
              });
            }
          }}
          aria-label="Go to Contact Section"
        >
          Say Hello
          <i className="fas fa-hand"></i>
        </button>
      </div>

      <div className="image-column">
        <img src="/profile.JPG" alt="Naveen Kumar" />
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-row full-width">
        <h2>About Me</h2>
        <p>My Introduction</p>
      </div>

      <div className="about-row two-columns">
        <div className="about-column image-column">
          <img src="/profile1.jpg" alt="About Naveen Kumar" />
        </div>

        <div className="about-column three-rows">
          <div className="about-sub-row expertise-columns">
            <div className="expertise-box">
              <i
                className="fas fa-code expertise-icon"
                aria-label="Years of Experience"
              ></i>
              <h5>Experience</h5>
              <p>1.8 Years</p>
            </div>
            <div className="expertise-box">
              <i
                className="fas fa-project-diagram expertise-icon"
                aria-label="Projects Completed"
              ></i>
              <h5>Projects</h5>
              <p>8 Completed</p>
            </div>
            <div className="expertise-box">
              <i
                className="fas fa-tools expertise-icon"
                aria-label="Technologies Mastered"
              ></i>
              <h5>Lovin'</h5>
              <p>Open Source</p>
            </div>
          </div>
          <div className="about-sub-row">
            <p>
              Coding wizard with a love for the stars ✨ and football ⚽. Gamer
              extraordinaire on the side. A true team player, bringing tech-savvy
              and eclectic passions to the table.
            </p>
          </div>
          <div className="about-sub-row">
            <a
              href="/resume.pdf"
              download="Naveen_IIT_INDORE_Resume.pdf"
              className="say-hello-btn"
              aria-label="Download Resume"
            >
              Download Resume
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="about-row full-width">
        <h2>Skills</h2>
        <p>Things I Know</p>
      </div>

      <div className="about-row two-columns">
        <div className="about-column three-rows">
          <div className="expertise-columns">
            <div className="expertise-box">
              <div className="expertise-row full-row">
                <h5>Frontend</h5>
              </div>
              <div className="expertise-row sub-row">
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="React Skill"
                  ></i>
                  <div className="skill-details">
                    <span>React.JS</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="JavaScript Skill"
                  ></i>
                  <div className="skill-details">
                    <span>JavaScript</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
              </div>
              <div className="expertise-row sub-row">
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="HTML Skill"
                  ></i>
                  <div className="skill-details">
                    <span>HTML, CSS</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="CSS Skill"
                  ></i>
                  <div className="skill-details">
                    <span>DevExpress</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
              </div>
              <div className="expertise-row sub-row">
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="TypeScript Skill"
                  ></i>
                  <div className="skill-details">
                    <span>Bootstrap</span>
                    <span className="proficiency">Intermediate</span>
                  </div>
                </div>
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="Vue Skill"
                  ></i>
                  <div className="skill-details">
                    <span>Next.js</span>
                    <span className="proficiency">Basic</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="expertise-box">
              <div className="expertise-row full-row">
                <h5>Backend</h5>
              </div>
              <div className="expertise-row sub-row">
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="Node.js Skill"
                  ></i>
                  <div className="skill-details">
                    <span>Node.js</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="Express Skill"
                  ></i>
                  <div className="skill-details">
                    <span>Express.js</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
              </div>
              <div className="expertise-row sub-row">
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="Python Skill"
                  ></i>
                  <div className="skill-details">
                    <span>C#, .NET</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="Django Skill"
                  ></i>
                  <div className="skill-details">
                    <span>C++, Python</span>
                    <span className="proficiency">Intermediate</span>
                  </div>
                </div>
              </div>
              <div className="expertise-row sub-row">
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="MongoDB Skill"
                  ></i>
                  <div className="skill-details">
                    <span>REST API</span>
                    <span className="proficiency">Intermediate</span>
                  </div>
                </div>
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="SQL Skill"
                  ></i>
                  <div className="skill-details">
                    <span>Flask</span>
                    <span className="proficiency">Basic</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="expertise-box">
              <div className="expertise-row full-row">
                <h5>Other</h5>
              </div>
              <div className="expertise-row sub-row">
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="Git Skill"
                  ></i>
                  <div className="skill-details">
                    <span>DSA, Git</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="Docker Skill"
                  ></i>
                  <div className="skill-details">
                    <span>SQL, SSMS</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
              </div>
              <div className="expertise-row sub-row">
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="Webpack Skill"
                  ></i>
                  <div className="skill-details">
                    <span>WebSockets</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="Jenkins Skill"
                  ></i>
                  <div className="skill-details">
                    <span>VS/VS Code</span>
                    <span className="proficiency">Advanced</span>
                  </div>
                </div>
              </div>
              <div className="expertise-row sub-row">
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="VS Code Skill"
                  ></i>
                  <div className="skill-details">
                    <span>AWS, Azure</span>
                    <span className="proficiency">Intermediate</span>
                  </div>
                </div>
                <div className="skill-item">
                  <i
                    className="fas fa-check-circle skill-icon"
                    aria-label="Figma Skill"
                  ></i>
                  <div className="skill-details">
                    <span>Figma</span>
                    <span className="proficiency">Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QualificationSection = () => {
  const [activeSection, setActiveSection] = useState("education");

  const handleEducationClick = () => {
    setActiveSection("education");
  };

  const handleExperienceClick = () => {
    setActiveSection("experience");
  };

  return (
    <section className="skills-section" id="qualification">
      <div className="about-row full-width">
        <h2>Qualifications</h2>
        <p>My Journey</p>
      </div>

      <div className="text-line-container">
        <div className="text-element">
          <h2 onClick={handleEducationClick}>
            <i className="fas fa-book icon"></i> Education
          </h2>
        </div>
        <div className="line-container">
          <div className="top-dot"></div>
          <div className="middle-dot"></div>
          {activeSection !== "experience" && (
            <>
              <div className="content-card top-card">
                <div className="content-row">
                  <span className="content-part">Undergraduation</span>
                </div>
                <div className="content-row">
                  <span className="content-part">IIT - INDORE</span>
                </div>
                <div className="content-row">
                  <i className="fas fa-calendar-alt calendar-icon"></i>
                  <span className="content-part">2019 - 2023</span>
                </div>
              </div>
              <div className="content-card bottom-card">
                <div className="content-row">
                  <span className="content-part">AP State Board (X+XII)</span>
                </div>
                <div className="content-row">
                  <span className="content-part">Guntur - Andhra Pradesh</span>
                </div>
                <div className="content-row">
                  <i className="fas fa-calendar-alt calendar-icon"></i>
                  <span className="content-part">2017 - 2019</span>
                </div>
              </div>
            </>
          )}
          {activeSection !== "education" && (
            <>
              <div className="content-card experience-card">
                <div className="content-row">
                  <span className="content-part">
                    FullStack Developer Intern
                  </span>
                </div>
                <div className="content-row">
                  <span className="content-part">
                    QMin Infotech - Ahmedabad
                  </span>
                </div>
                <div className="content-row">
                  <i className="fas fa-calendar-alt calendar-icon"></i>
                  <span className="content-part">16/09/23 - 16/10/23</span>
                </div>
              </div>
              <div className="content-card cncf-card">
                <div className="content-row">
                  <span className="content-part">Software Engineer</span>
                </div>
                <div className="content-row">
                  <span className="content-part">
                    Robosys Automation - Ahmedabad
                  </span>
                </div>
                <div className="content-row">
                  <i className="fas fa-calendar-alt calendar-icon"></i>
                  <span className="content-part">16/11/23 - Present</span>
                </div>
              </div>
              <div className="content-card relocation-card">
                <div className="content-row">
                  <i className="fas fa-map-marker-alt relocation-icon"></i>
                  <span className="content-part">
                    Open to relocate across India, preferably South.
                  </span>
                </div>
              </div>
            </>
          )}
          <div className="line"></div>
        </div>
        <div className="text-element">
          <h2 onClick={handleExperienceClick}>
            <i className="fas fa-briefcase icon"></i> Experience
          </h2>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="about-row full-width">
        <h2>Get in Touch</h2>
        <p>Contact Me</p>
      </div>
      <div className="contact-row two-columns">
        <div className="column first-column">
          <div className="contact-card">
            <span className="contact-content icon-row">
              <i className="fas fa-phone icon"></i>
            </span>
            <span className="contact-content label-row">Mobile</span>
            <span className="contact-content value-row">+91-9676936253</span>
            <span className="contact-content action-row">Connect Me</span>
          </div>
          <div className="contact-card">
            <span className="contact-content icon-row">
              <i className="fas fa-envelope icon"></i>
            </span>
            <span className="contact-content label-row">Email</span>
            <span className="contact-content value-row">
              naveenkumaramujuru@gmail.com
            </span>
            <span className="contact-content action-row">
              <a
                href="mailto:naveenkumaramujuru@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write Me
              </a>
            </span>
          </div>
          <div className="contact-card">
            <span className="contact-content icon-row">
              <i className="fab fa-linkedin"></i>
            </span>
            <span className="contact-content label-row">Linkedin</span>
            <span className="contact-content value-row">@naveen-kumar22</span>
            <span className="contact-content action-row">
              <a
                href="https://www.linkedin.com/in/naveen-kumar22/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write Me
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// New Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        // Show button when scrolled below the top of "About Me" section
        setIsVisible(aboutTop < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top-btn ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <QualificationSection />
        <ContactSection />
        <Footer />
      </div>
      <BackToTopButton />
    </div>
  );
}