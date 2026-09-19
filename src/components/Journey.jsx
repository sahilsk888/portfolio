import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { journeyMilestones } from '../data/journey';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 0.6,
            },
            opacity: 1,
            x: 0,
            ease: 'power2.out',
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={containerRef} className="scene-section">
      <div className="editorial-container">
        <div className="eyebrow">SCENE 07 // EVOLUTION & EDUCATION</div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1' }}>
            ACADEMIC & TECHNICAL PROGRESSION
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.1rem', maxWidth: '750px' }}>
            A disciplined trajectory in Computer Science and Data Science Engineering — from bare-metal programming concepts to production machine learning pipelines.
          </p>
        </div>

        <div style={{ maxWidth: '900px' }}>
          {journeyMilestones.map((item, idx) => (
            <div
              key={item.year}
              ref={(el) => (itemsRef.current[idx] = el)}
              className="journey-timeline-item"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                  {item.year}
                </span>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  // {item.period} — {item.category}
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', marginBottom: '0.75rem', color: 'var(--text-highlight)' }}>
                {item.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                {item.summary}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                    <span style={{ color: 'var(--text-highlight)' }}>•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
