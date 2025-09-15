import React from "react";
import Image from "next/image";
import "./globals.css";

const Home: React.FC = () => (
  <>
    <nav className="navbar">
      <a className="nav-btn" href="#hero">Home</a>
      <a className="nav-btn" href="#about">About</a>
      <a className="nav-btn" href="#projects">Projects</a>
      <a className="nav-btn" href="#experience">Experience</a>
      <a className="nav-btn" href="#resume">Resume</a>
      <a className="nav-btn" href="#contact">Contact</a>
    </nav>

    <div className="hero" id="hero">
      <Image src="/ibaad.png" alt="Ibaad Khan" width={200} height={200} />
      <h1>Ibaad Khan</h1>
      <p className="subtitle">Data Analyst & Web Development Student</p>
      <p className="tagline">Turning data into insights and building web solutions.</p>
      <a href="#projects" className="resume-link">View Projects</a>
    </div>

    <div className="container">
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a dedicated, results-oriented <strong>Business Data Analyst</strong> with a passion for leveraging data to drive strategic decision-making. I bring a wealth of experience in UAT testing, data analysis, and visualization to the table.
        </p>
        <p>
          In my current role at Citigroup, I excel at streamlining testing processes through the integration of new tools. I am adept at gathering and documenting requirements to implement analytics reports, ensuring alignment with organizational goals and regulatory standards.
        </p>
        <ul>
          <li><strong>Location:</strong> Greater Tampa Bay Area (Remote or In Person)</li>
          <li><strong>Services:</strong> Business Analytics, Data Reporting, Financial Reporting, Database Development, Project Management</li>
          <li><strong>Contact for pricing</strong></li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-list">
          <div className="project-card">
            <h3>Sales Dashboard</h3>
            <p>Interactive dashboard visualizing sales data using Power BI.</p>
          </div>
          <div className="project-card">
            <h3>Customer Insights</h3>
            <p>Python analysis of customer data to find trends and patterns.</p>
          </div>
          <div className="project-card">
            <h3>Personal Portfolio Website</h3>
            <p>This website! Built with React and CSS as part of my web dev course.</p>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-list">
          <div className="experience-card">
            <Image src="/pwc.png" alt="PwC logo" className="company-logo" width={60} height={30} />
            <h3>Data Risk Management - Senior Associate <span>@ PwC</span></h3>
            <p><em>May 2025 – Present · Tampa, FL (Contract)</em></p>
            <p>Skills: Tableau, Data Analytics, Data Lineage, Enterprise Risk Management, Data Quality</p>
          </div>
          <div className="experience-card">
            <Image src="/alvarez.png" alt="Alvarez & Marsal logo" className="company-logo" width={60} height={30} />
            <h3>Data Reporting Analyst <span>@ Alvarez & Marsal</span></h3>
            <p><em>Jun 2024 – May 2025 · Tampa, FL (Full-time)</em></p>
            <p>Skills: Microsoft Power BI, Data Analytics, Asset Management, DAX, Microsoft Excel</p>
          </div>
          <div className="experience-card">
            <Image src="/citi.png" alt="Citi logo" className="company-logo" width={60} height={30} />
            <h3>Business Data Analyst <span>@ Citi</span></h3>
            <p><em>Jan 2023 – Jun 2024 · Tampa, FL (Contract, Hybrid)</em></p>
            <p>Skills: Requirements Analysis, Data Validation, Test Scripts, SQL, Jira, Financial Reporting, User Acceptance Testing, Documentation, EDA, Knime</p>
          </div>
          <div className="experience-card">
            <Image src="/acts.png" alt="ACTS logo" className="company-logo" width={60} height={30} />
            <h3>Data Analyst <span>@ ACTS - Agency for Community Treatment Services</span></h3>
            <p><em>Feb 2022 – Jan 2023 · Tampa, FL (Full-time)</em></p>
            <p>Skills: SQL, Microsoft Excel, Ad Hoc Reporting, Data Analytics</p>
          </div>
          <div className="experience-card">
            <Image src="/universal.png" alt="Universal Academy logo" className="company-logo" width={60} height={30} />
            <h3>Volleyball Coach <span>@ Universal Academy</span></h3>
            <p><em>Feb 2020 – Jan 2023 · Tampa, FL (Full-time)</em></p>
          </div>
          <div className="experience-card">
            <Image src="/podium.png" alt="Podium Education logo" className="company-logo" width={60} height={30} />
            <h3>Data Analyst <span>@ Podium Education</span></h3>
            <p><em>May 2021 – Aug 2021 · Tampa, FL (Internship)</em></p>
            <p>Skills: Tableau, SQL, Microsoft Excel</p>
          </div>
          <div className="experience-card">
            <Image src="/usf.png" alt="University of South Florida logo" className="company-logo" width={60} height={30} />
            <h3>Data Analytics Bootcamp <span>@ University of South Florida</span></h3>
            <p><em>Mar 2021 – May 2021</em></p>
            <p>Skills: Data Analytics</p>
          </div>
          <div className="experience-card">
            <Image src="/kaa.png" alt="Khan, Arndt & Associates logo" className="company-logo" width={60} height={30} />
            <h3>Data Entry Analyst <span>@ Khan, Arndt & Associates</span></h3>
            <p><em>May 2019 – Jul 2019 · St. Petersburg, FL (Full-time)</em></p>
          </div>
        </div>
      </section>

      <section id="resume">
        <h2>Resume</h2>
        <p>
          Download my resume to learn more about my experience and skills.
        </p>
        <a href="/resume.pdf" className="resume-link" download>Download Resume (PDF)</a>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Let's connect! Reach out via email or find me on LinkedIn and GitHub.</p>
        <div className="contact-info">
          <a href="mailto:ibaad@example.com">Email</a>
          <a href="https://linkedin.com/in/ibaadkhan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </div>

    <footer>
      &copy; 2025 Ibaad Khan. All rights reserved.
    </footer>
  </>
);

export default Home;