import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { dataAiAreas } from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsDataAI() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 0.6,
            },
            opacity: 1,
            y: 0,
            ease: 'power2.out',
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="data-ai" ref={containerRef} className="scene-section">
      <div className="editorial-container">
        <div className="eyebrow">SCENE 05 // DATA + AI</div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            DATA + AI
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Core competencies across exploratory data science, predictive machine learning pipelines, and artificial intelligence.
          </p>
        </div>

        <div className="skills-grid">
          {dataAiAreas.map((area, idx) => (
            <div
              key={area.id}
              ref={el => (cardsRef.current[idx] = el)}
              className="skill-card"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-highlight)', letterSpacing: '0.02em', fontWeight: '600' }}>
                  {area.name}
                </h3>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                  0{idx + 1}
                </span>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                {area.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
