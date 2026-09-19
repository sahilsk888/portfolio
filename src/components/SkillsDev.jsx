import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillsCategories } from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

const DEV_CATEGORY_IDS = ['programming', 'web_dev', 'databases', 'tools_devops', 'cloud_deployment'];

export default function SkillsDev() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const devCategories = skillsCategories.filter(cat => DEV_CATEGORY_IDS.includes(cat.id));

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((el, index) => {
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
    <section id="development" ref={containerRef} className="scene-section">
      <div className="editorial-container">
        <div className="eyebrow">SCENE 04 // DEVELOPMENT & SYSTEMS</div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            SOFTWARE ARCHITECTURE & STACK
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Production-oriented tools and programming languages powering low-latency backends, structured schemas, and responsive web platforms.
          </p>
        </div>

        <div className="skills-grid">
          {devCategories.map((cat, catIdx) => (
            <div
              key={cat.id}
              ref={el => (cardsRef.current[catIdx] = el)}
              className="skill-card"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-highlight)', letterSpacing: '0.04em' }}>
                  {cat.title}
                </h3>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                  0{catIdx + 1}
                </span>
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.4' }}>
                {cat.tagline}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-row">
                    <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {skill.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
