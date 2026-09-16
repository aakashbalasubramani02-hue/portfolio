import { achievements } from '../data/portfolio';

function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// achievements</span>
          <h2 className="section-title">Achievements & Extracurricular</h2>
        </div>
        <div className="achievements-list">
          {achievements.map((item) => (
            <div className="achievement-card" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
