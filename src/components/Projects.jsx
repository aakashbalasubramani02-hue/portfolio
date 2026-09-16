import { projects, minorProjects } from '../data/portfolio';

function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.featured ? ' featured' : ''}`}>
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-badge">{project.badge}</span>
      </div>
      {project.subtitle && (
        <p className="project-subtitle">{project.subtitle}</p>
      )}
      <p className="project-desc">{project.description}</p>
      {project.highlights.length > 0 && (
        <ul className="project-highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {project.technologies.length > 0 && (
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      )}
    </article>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// projects</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Selected work across AI, full-stack development, and software engineering.
          </p>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

          {/* Minor Projects Card */}
          <div className="minor-projects-card">
            <h3>{minorProjects.title}</h3>
            <p>{minorProjects.description}</p>
            <div className="minor-tag-list">
              {minorProjects.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
