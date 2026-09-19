import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Layers, Cpu, CheckCircle2, Workflow } from 'lucide-react';
import { GithubIcon } from './Icons';
import gsap from 'gsap';

export default function ProjectModal({ project, isOpen, onClose }) {
  const backdropRef = useRef(null);
  const drawerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Entrance animation
      gsap.killTweensOf([backdropRef.current, drawerRef.current, contentRef.current]);
      
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
      });

      gsap.fromTo(
        drawerRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.5, ease: 'power3.out' }
      );

      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.45, delay: 0.2, ease: 'power2.out' }
      );
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    // Smooth exit animation before unmounting/setting state
    gsap.to(drawerRef.current, {
      x: '100%',
      duration: 0.4,
      ease: 'power3.in',
    });

    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      handleClose();
    }
  };

  if (!project && !isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className={`modal-backdrop ${isOpen ? 'open' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div ref={drawerRef} className="modal-drawer">
        <button
          onClick={handleClose}
          className="modal-close-btn"
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        {project && (
          <div ref={contentRef} style={{ marginTop: '1rem' }}>
            <div className="eyebrow">
              PROJECT {project.number} // ARCHITECTURAL BREAKDOWN
            </div>

            <h2
              id="project-modal-title"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
              }}
            >
              {project.name}
            </h2>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-display)',
                marginBottom: '1.5rem',
              }}
            >
              {project.subtitle}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {project.focus.map((tag) => (
                <span key={tag} className="project-badge">
                  {tag}
                </span>
              ))}
            </div>

            <hr className="hairline" style={{ marginBottom: '2.5rem' }} />

            {/* Overview */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                OVERVIEW
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                {project.overview}
              </p>
            </div>

            {/* Role / Contribution */}
            <div style={{ marginBottom: '2.5rem', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                ROLE & RESPONSIBILITY
              </h4>
              <p style={{ color: 'var(--text-highlight)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                {project.role}
              </p>
            </div>

            {/* Architecture Pipeline */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Workflow size={18} style={{ color: 'var(--accent-cyan)' }} />
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
                  SYSTEM ARCHITECTURE PIPELINE
                </h4>
              </div>
              <div
                className="font-mono"
                style={{
                  background: '#0a0a0e',
                  padding: '1.25rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-cyan)',
                  lineHeight: '1.7',
                }}
              >
                {project.architecture}
              </div>
            </div>

            {/* Key Engineering Highlights */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                KEY ENGINEERING IMPLEMENTATIONS
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div style={{ marginBottom: '3rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '0.85rem' }}>
                TECHNOLOGIES UTILIZED
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.4rem 0.9rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.8rem 1.4rem',
                    background: 'var(--text-highlight)',
                    color: 'var(--bg-void)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  <GithubIcon size={18} />
                  VIEW REPOSITORY
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
