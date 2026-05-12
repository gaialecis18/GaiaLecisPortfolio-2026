import { Link } from 'react-router-dom';
import { projects } from '../data';
import RichText from '../components/common/RichText';
import ProjectCard from '../components/projects/ProjectCard';

function Home() {
  return (
    <div className="page-shell">
      <section className="hero-section home-hero">
        <div className="hero-copy">
          <span className="eyebrow">Gaia Lecis — Creative Developer & UX/UI Engineer</span>
          <h1>
            Crafting <span className="glow-text">Digital Poise.</span>
          </h1>
          <RichText as="p">
            A symbiotic fusion of **UX/UI mastery** and **front-end engineering**. I craft high-stakes experiences that command attention through mathematical precision and aesthetic soul.
          </RichText>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore work
            </a>
            <Link to="/about" className="button button-secondary">
              About me
            </Link>
          </div>
        </div>
        <a href="#projects" className="scroll-cue" aria-label="Scroll to selected work">
          <span>Scroll</span>
          <span className="scroll-cue-line" aria-hidden="true"></span>
        </a>
      </section>

      <section id="projects" className="section-strong">
        <div className="section-header">
          <span className="eyebrow">Selected Work</span>
          <h2>Dive deep into my most recent projects.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-base">
        <div className="section-copy">
          <h2>Structured creativity for ambitious digital products.</h2>
          <RichText as="p">
            Whether it’s a mobile wellness experience, a **premium design system**, or a **performance-led web platform**, every interaction is crafted to feel intentional, considered, and memorable.
          </RichText>
        </div>
      </section>
    </div>
  );
}

export default Home;
