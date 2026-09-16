import { aboutParagraphs } from '../data/portfolio';

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// about</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
