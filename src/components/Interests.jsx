import { buildAreas, exploringTopics } from '../data/portfolio';

function Interests() {
  return (
    <>
      {/* What I Build */}
      <section id="what-i-build">
        <div className="container">
          <div className="section-header">
            <span className="section-label">// focus areas</span>
            <h2 className="section-title">What I Build</h2>
          </div>
          <div className="build-grid">
            {buildAreas.map((area) => (
              <div className="build-card" key={area.title}>
                <span className="build-icon">{area.icon}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Currently Exploring */}
      <section id="exploring">
        <div className="container">
          <div className="section-header">
            <span className="section-label">// interests</span>
            <h2 className="section-title">Currently Exploring</h2>
          </div>
          <div className="exploring-tags">
            {exploringTopics.map((topic) => (
              <span className="exploring-tag" key={topic}>{topic}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Interests;
