import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Terminal, Sparkles, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsOverview() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 0.6,
          },
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="scene-section" style={{ minHeight: '80vh' }}>
      <div className="editorial-container">
        <div className="eyebrow">SCENE 03 // TECHNICAL ARSENAL</div>

        <div ref={headlineRef} style={{ maxWidth: '950px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.03em', lineHeight: '1.05', marginBottom: '1.5rem' }}>
            ENGINEERING & <br />
            <span style={{ color: 'var(--text-muted)' }}>INTELLIGENT SYSTEMS</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '720px', lineHeight: '1.7' }}>
            A comprehensive Computer Science skill set structured across core systems programming, reactive web architecture, predictive data modeling, and machine intelligence.
          </p>
        </div>

        <div
          ref={counterRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            marginTop: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div>
            <div className="font-mono" style={{ fontSize: '2.25rem', fontWeight: '600', color: 'var(--accent-cyan)' }}>07+</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Core Languages</div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '2.25rem', fontWeight: '600', color: 'var(--text-highlight)' }}>10+</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Frameworks & Libs</div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '2.25rem', fontWeight: '600', color: 'var(--accent-cyan)' }}>04</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Database Engines</div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '2.25rem', fontWeight: '600', color: 'var(--text-highlight)' }}>100%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Rigorous Practice</div>
          </div>
        </div>
      </div>
    </section>
  );
}
