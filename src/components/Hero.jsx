import { personalInfo } from '../data/portfolio';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <span className="hero-greeting">{personalInfo.greeting}</span>
          <h1>{personalInfo.headline}</h1>
          <p className="hero-role">{personalInfo.role}</p>
          <p className="hero-desc">{personalInfo.tagline}</p>
          <p className="hero-desc-long">{personalInfo.description}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects ↓</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
