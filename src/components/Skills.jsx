import { skills } from '../data/portfolio';

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// skills</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I have worked with.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-category" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
