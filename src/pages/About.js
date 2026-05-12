import { expertiseBlocks, timelineEvents } from '../data';
import RichText from '../components/common/RichText';

const baseUrl = (process.env.PUBLIC_URL || '').trimEnd('/');

function About() {
  return (
    <div className="page-shell">
      <section className="hero-section small-hero">
        <div className="hero-copy">
          <span className="eyebrow">UX/UI Engineer & Creative Developer</span>
          <span className="profile-location">Turin, Italy</span>
          <h1>Designing thoughtful digital experiences.</h1>
          <RichText as="p">
            I design digital experiences that feel as thoughtful as they are effective. My work blends **strategy**, **systems**, and **storytelling** into products that stand resilient under attention.
          </RichText>
        </div>
        <div className="hero-visual glass-panel">
          <img src={baseUrl + '/assets/profile/gaia-lecis.jpg'} alt="Gaia Lecis About" />
        </div>
      </section>

      <section className="story-section">
        <div className="section-header">
          <span className="eyebrow">My Story</span>
          <h2>Building experiences from cinematic storytelling to modern UI craftsmanship.</h2>
        </div>
        <div className="story-copy">
          <RichText as="p">
            Hi, I’m Gaia Lecis — a **Cinema and Media Engineering MSc grad** with a passion for turning bold ideas into unforgettable digital experiences. I live at the intersection of **art and technology**, where storytelling meets innovation. Whether it's building immersive worlds in VR, crafting stunning 3D/2D visuals, designing playful game mechanics, or experimenting with AI-driven workflows, I thrive on pushing creative boundaries.
          </RichText>
          <RichText as="p">
            I also bring that same energy into the world of **UX/UI design and front-end development** — translating complex concepts into intuitive, visually engaging interfaces that not only look great but feel seamless to use. From wireframes and user flows to pixel-perfect, responsive interfaces built with modern web tools, I love crafting digital products that connect and delight.
          </RichText>
          <RichText as="p">
            From cinematic production to interactive media, I’ve worked across a wide spectrum of creative tech projects — diving deep into **3D modeling**, **animation**, **photorealistic rendering**, **VFX**, **front-end coding**, and **immersive XR environments**. I'm a curious problem-solver, an energetic team player, and a lifelong learner who's always exploring the next tool, platform, or idea that can elevate the experience.
          </RichText>
        </div>
        <RichText as="div" className="story-cta">
          Let’s build the **future of digital creativity** — one pixel, line of code, and frame at a time.
        </RichText>
      </section>

      <section className="section-strong">
        <div className="section-header">
          <span className="eyebrow">Expertise & Workflow</span>
          <h2>Designing systems that feel intuitive, elegant, and human-first.</h2>
        </div>
        <div className="feature-grid">
          {expertiseBlocks.map((item) => (
            <article key={item.title} className="feature-card glass-panel">
              <h3>{item.title}</h3>
              <RichText as="p">{item.description}</RichText>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-base">
        <div className="section-header">
          <span className="eyebrow">Professional Arc</span>
          <h2>Years of crafting digital excellence.</h2>
        </div>
        <div className="timeline">
          {timelineEvents.map((event) => (
            <div key={event.year} className="timeline-item glass-panel">
              <span className="timeline-year">{event.year}</span>
              <h3>{event.title}</h3>
              <RichText as="p">{event.description}</RichText>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-panel glass-panel">
        <h2>Does my profile suite your needs?</h2>
        <RichText as="p">
          If you are building a **bold digital product** and want a partner to define the experience, let’s make it feel **built for people** and **polished for performance**.
        </RichText>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:gaialecis@gmail.com">
            Let's talk!
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
