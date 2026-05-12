import { useParams, Link } from 'react-router-dom';
import { projectMap } from '../data';
import RichText from '../components/common/RichText';
import NotFound from './NotFound';

const baseUrl = (process.env.PUBLIC_URL || '').trimEnd('/');

function ProjectPage() {
  const { slug } = useParams();
  const project = projectMap[slug];

  if (!project) {
    return <NotFound />;
  }

  const metrics = project.metrics ?? [];
  const projectLinks = project.links ?? [];
  const features = project.features ?? [];
  const tools = project.tools ?? [];
  const coverImage = project.coverImage ?? project.hero;
  const showHeroVisual = project.showHeroVisual !== false;
  const toolsSectionNumber = metrics.length > 0 ? '04' : '03';

  const getFeatureContent = (feature, index) => {
    if (typeof feature === 'string') {
      return {
        highlight: `0${index + 1}`,
        title: feature,
      };
    }

    return feature;
  };

  return (
    <div className="page-shell">
      <section className={`hero-section small-hero ${showHeroVisual ? '' : 'project-hero-text-only'}`}>
        <div className="hero-copy">
          <span className="eyebrow">{project.caseStudy}</span>
          <h1>{project.title}</h1>
          <RichText as="p">{project.summary}</RichText>
          {projectLinks.length > 0 && (
            <div className="project-links" aria-label="Project links">
              {projectLinks.map((link) => (
                <a
                  key={link.label}
                  className="button project-link"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  data-type={link.type}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          <div className="project-meta">
            <div>
              <span>Role</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>{project.focus}</strong>
            </div>
          </div>
        </div>
        {showHeroVisual && (
          <div className="hero-visual glass-panel">
            <img src={baseUrl + project.hero} alt={project.title} />
          </div>
        )}
      </section>

      {coverImage && (
        <section className="project-cover-section" aria-label={`${project.title} cover image`}>
          <div className="project-cover">
            <img src={baseUrl + coverImage} alt={`${project.title} cover`} />
          </div>
        </section>
      )}

      <section className="section-strong project-context-section">
        <div className="section-header">
          <span className="eyebrow">01 / Context</span>
          <h2>Project structure.</h2>
        </div>
        <div className="detail-grid project-summary-grid">
          <article className="glass-panel detail-card">
            <h2>Overview</h2>
            <RichText as="p">{project.overview}</RichText>
          </article>
          <div className="project-highlights" aria-label="Project highlights">
            <h2>Why this matters</h2>
            <div className="project-highlight-list">
              {features.map((feature, index) => {
                const featureContent = getFeatureContent(feature, index);

                return (
                  <article key={featureContent.title} className="glass-panel feature-highlight-card">
                    <span className="feature-highlight-marker">{featureContent.highlight}</span>
                    <h3>{featureContent.title}</h3>
                    {featureContent.body && <RichText as="p">{featureContent.body}</RichText>}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-base">
        <div className="section-header">
          <span className="eyebrow">02 / Delivery</span>
          <h2>How the solution was shaped.</h2>
        </div>
        <div className="project-detail-grid">
          {project.details.map((detail) => (
            <article key={detail.title} className="glass-panel detail-card">
              <h3>{detail.title}</h3>
              <RichText as="p">{detail.body}</RichText>
            </article>
          ))}
        </div>
      </section>

      {metrics.length > 0 && (
        <section className="section-base">
          <div className="metrics-copy">
            <span className="eyebrow">03 / Validation</span>
            <h2>Results and signals.</h2>
            <RichText as="p">Key evidence gathered from **research**, **testing**, and **user feedback**.</RichText>
          </div>
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-item glass-panel">
                <span className="metric-value">{metric.value}</span>
                <strong>{metric.label}</strong>
                <RichText as="p">{metric.description}</RichText>
              </div>
            ))}
          </div>
        </section>
      )}

      {tools.length > 0 && (
        <section className="section-base tools-section" aria-labelledby="project-tools-title">
          <div className="section-header tools-header">
            <span className="eyebrow">{toolsSectionNumber} / Toolset</span>
            <h2 id="project-tools-title">Tools used.</h2>
          </div>
          <div className="tools-marquee" aria-label={`Tools used for ${project.title}`}>
            <div className="tools-track">
              <div className="tools-group">
                {tools.map((tool) => (
                  <span key={tool} className="tool-pill">{tool}</span>
                ))}
              </div>
              <div className="tools-group" aria-hidden="true">
                {tools.map((tool) => (
                  <span key={`${tool}-duplicate`} className="tool-pill">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="section-footer">
        <Link to="/" className="button button-secondary">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default ProjectPage;
