import { Link } from 'react-router-dom';

const baseUrl = (process.env.PUBLIC_URL || '').trimEnd('/');

function ProjectCard({ project }) {
  const cardTags = project.cardTags ?? [project.focus, project.role].filter(Boolean);

  return (
    <Link
      className="project-card-link"
      to={`/projects/${project.slug}`}
      aria-label={`View ${project.title} case study`}
    >
      <article className="project-card glass-panel">
        <div className="project-card-image-wrap">
          <img
            className="project-card-image"
            src={baseUrl + project.hero}
            alt={project.title}
          />
        </div>
        <div className="project-card-content">
          <span className="project-card-tag">{project.caseStudy}</span>
          <h3>{project.title}</h3>
          <div className="project-card-tags" aria-label={`${project.title} project tags`}>
            {cardTags.map((tag) => (
              <span key={tag} className="project-card-chip">
                {tag}
              </span>
            ))}
          </div>
          <div className="project-card-footer">
            <span className="project-card-role">{project.role}</span>
            <span className="button project-card-cta">View case study</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;
