import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.98 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.6,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power2.out',
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseProject = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" ref={containerRef} className="scene-section">
      <div className="editorial-container">
        <div className="eyebrow">SCENE 06 // SELECTED WORK</div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1' }}>
              FEATURED SYSTEMS
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.1rem' }}>
              Deep technical case studies in Machine Learning, Distributed Systems, and Full-Stack Engineering.
            </p>
          </div>

          <span className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            [ CLICK CASE STUDY TO EXPAND ]
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((project, idx) => (
            <article
              key={project.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="project-card"
              onClick={() => handleOpenProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenProject(project);
                }
              }}
              aria-label={`View details for ${project.name}: ${project.subtitle}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span className="project-number">PROJECT {project.number}</span>
                  <h3 className="project-title">{project.name}</h3>
                  <div
                    style={{
                      fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
                      color: 'var(--accent-cyan)',
                      fontFamily: 'var(--font-display)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {project.subtitle}
                  </div>
                </div>

                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    background: 'var(--bg-void)',
                    transition: 'all 0.3s ease',
                  }}
                  className="project-arrow-badge"
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.96rem',
                  lineHeight: '1.6',
                  maxWidth: '850px',
                  marginBottom: '1.35rem',
                }}
              >
                {project.tagline}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.1rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.focus.map((tag) => (
                    <span key={tag} className="project-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  DISCOVER ARCHITECTURE →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseProject}
      />
    </section>
  );
}
