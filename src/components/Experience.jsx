import { experience } from '../data/portfolio';

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// experience</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="experience-list">
          {experience.map((exp) => (
            <div className="experience-card" key={`${exp.company}-${exp.role}`}>
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
