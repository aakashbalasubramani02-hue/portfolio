import { education } from '../data/portfolio';

function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// education</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-timeline">
          {education.map((edu) => (
            <div className="education-card" key={edu.institution}>
              <h3>{edu.institution}</h3>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-meta">{edu.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
