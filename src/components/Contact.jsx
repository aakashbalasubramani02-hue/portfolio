import { personalInfo } from '../data/portfolio';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <span className="section-label">// contact</span>
        <h2>Let&apos;s Build Something Intelligent.</h2>
        <p className="contact-desc">
          I&apos;m interested in AI/ML, software engineering, agentic AI, and
          opportunities where intelligent systems can solve real-world problems.
        </p>
        <div className="contact-links">
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            <span className="contact-link-label">Email</span>
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.github}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">GitHub</span>
            {personalInfo.githubDisplay}
          </a>
          <a
            href={personalInfo.linkedin}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">LinkedIn</span>
            {personalInfo.linkedinDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
