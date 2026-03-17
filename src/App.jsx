import React, { useEffect, useState } from "react";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import "./App.css";

function TypingText({ text, speed = 60 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index += 1;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
}

const projects = [
  {
    title: "Student Paycheck Buddy",
    tech: "Python",
    description:
      "Developed a personal finance tool to track paychecks, manage expenses, and analyze spending patterns. Designed to help users better understand their financial habits and savings over time.",
    link: "https://github.com/JasvinK/Student-Paycheck-Buddy",
  },
  {
    title: "AVR LCD Digital Clock",
    tech: "C • Arduino • Embedded Systems",
    description:
      "Built a digital clock on an Arduino Mega2560 using timer interrupts and a 2×16 LCD display. Implemented real-time clock functionality along with a stopwatch using low-level embedded programming techniques.",
    link: "https://github.com/JasvinK/Avr-lcd-digital-clock",
  },
  {
    title: "Web Protocol Analyzer",
    tech: "Python • Networking",
    description:
      "Created a networking tool that analyzes websites by detecting HTTP/2 support, cookies, redirects, and authentication requirements to better understand how web protocols function.",
    link: "https://github.com/JasvinK/python-web-protocol-analyzer",
  },
];

const timelineItems = [
  {
    title: "Community Leader (CL)",
    place: "University of Victoria Residence Services",
    date: "Aug 2025 – Present",
    description:
      "Build community for 40+ residents through events, peer support, and conflict resolution while managing residence programs and budgets.",
  },
  {
    title: "Barista",
    place: "Starbucks Coffee Company",
    date: "May 2025 – Jul 2025",
    description:
      "Delivered fast, friendly customer service in a high-volume café environment while maintaining strong operational standards. Collaborated with team members during peak hours to ensure efficiency, quality beverage preparation, and a welcoming atmosphere for customers."
  },
  {
    title: "Barista",
    place: "UVSS – The Bean There Café, Victoria B.C",
    date: "Dec 2023 – Present",
    description:
      "Delivered excellent customer service in a fast-paced café while demonstrating strong organizational and communication skills. Supervised shifts and managed high-volume operations during peak hours.",
  },
  {
    title: "Volunteer",
    place: "Punch Out Parkinson’s",
    date: "May 2025 – Aug 2025",
    description:
      "Supported elders with Parkinson’s and mobility challenges during guided exercise sessions encouraging independence and confidence.",
  },
  {
    title: "Cadet Activity Program",
    place: "Royal Canadian Air Cadets – Langley B.C",
    date: "August 2023",
    description:
      "Worked as a Summer Camp Counsellor guiding cadets through camping skills, air rifle handling, and marching techniques while developing teamwork and leadership.",
  },
];

const languages = ["Python", "Java", "C", "Assembly", "HTML"];

const tools = [
  "VS Code",
  "Git",
  "Arduino IDE",
  "Jupyter Notebook",
  "Google Docs",
  "Google Sheets",
  "Google Slides",
  "Adobe Illustrator",
  "Canva",
  "Notion",
  "Slack",
];

export default function App() {
  return (
    <div className="site">
      <section className="hero">
        <div className="hero-content">

          <h1>Hi, I'm Jasvin Kaur </h1>

          <p className="subtitle">
            <TypingText
              text="Building software, solving problems, and learning every day"
              speed={50}
            />
          </p>

          <div className="socials centered-socials">
            <a href="mailto:jasvin.kar@gmail.com" aria-label="Email">
              <Mail size={22} />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jasvin-kaur-3b7069311/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/JasvinK"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={22} />
              <span>GitHub</span>
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
            >
              <FileText size={22} />
              <span>Resume</span>
            </a>
            
          </div>
        </div>

        <div className="wave-divider">
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,85.3C1120,85,1280,107,1360,117.3L1440,128L1440,140L1360,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z" />
          </svg>
        </div>
      </section>

      <section className="timeline-section projects-timeline-section">
        <div className="container">
          <h2>Projects</h2>

          <div className="timeline">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`timeline-row ${index % 2 === 0 ? "left" : "right"}`}
              > 
                <div className="timeline-card">
                <h3>{project.title}</h3>
                <p className="project-tech-line">{project.tech}</p>
                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                  </a>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section"></section>
      <section className="timeline-section">
        <div className="container">
          <h2>Work Experience</h2>

          <div className="timeline">
            {timelineItems.map((item, index) => (
              <div
                key={item.title + item.place}
                className={`timeline-row ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-card">
                  <h3>{item.title}</h3>
                  <p className="place">{item.place}</p>
                  <p className="date">{item.date}</p>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="container">
          <h2 className="center-title">My Skills</h2>

          <div className="skills-grid">
            <div className="skill-card gradient-card">
              <h3>Languages</h3>
              <div className="tag-list">
                {languages.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card gradient-card gradient-card-alt">
              <h3>Tools & Platforms</h3>
              <div className="tag-list">
                {tools.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-card colorful-about">
            <h3>About Me</h3>
            <p>
              Hi! I'm Jasvin, a third-year computer Science student at the University of Victoria with a
              passion for learning how technology works and building things with it. I enjoy
              exploring different areas of computing — from software development and data
              analysis to embedded systems.

              I like creating projects that challenge me to learn new tools and think
              creatively about solving problems. I'm always excited to keep learning,
              improving my skills, and working on projects that make a real impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}