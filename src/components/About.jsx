import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Database, Code2, Server, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FOCUS_AREAS = [
  { title: 'Data Science', desc: 'Predictive modeling, EDA, feature engineering, and statistical analysis.', icon: Database },
  { title: 'Artificial Intelligence', desc: 'Neural network architectures, transformers, NLP, and computer vision.', icon: Brain },
  { title: 'Machine Learning', desc: 'Supervised/unsupervised algorithms, evaluation pipelines, and interpretability.', icon: Cpu },
  { title: 'Full-Stack Development', desc: 'Modern reactive frontends coupled with high-concurrency API backends.', icon: Code2 },
  { title: 'Software Engineering', desc: 'Object-oriented systems, data structures, algorithm efficiency, and architecture.', icon: Server }
];

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal manifesto statement
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 0.6,
          },
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          ease: 'power2.out',
        }
      );

      // Staggered focus cards reveal
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: containerRef.current.querySelector('.focus-grid'),
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.8,
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="scene-section">
      <div className="editorial-container">
        <div className="eyebrow">SCENE 02 // ABOUT & PHILOSOPHY</div>

        <div ref={textRef} style={{ marginBottom: '4.5rem' }}>
          <p className="about-statement">
            Computer Science student focused on building{' '}
            <span className="highlight">intelligent</span>,{' '}
            <span className="highlight">data-driven</span>, and{' '}
            <span className="highlight">scalable digital experiences</span>.
          </p>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '850px', lineHeight: '1.7' }}>
            Bridging algorithmic precision with production software engineering. From training predictive models and mining complex datasets to engineering resilient web backends and real-time distributed state synchronization.
          </p>
        </div>

        <hr className="hairline" style={{ marginBottom: '3.5rem' }} />

        <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>CORE DISCIPLINES</div>
        <div className="focus-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {FOCUS_AREAS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                ref={(el) => (cardsRef.current[idx] = el)}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'border-color 0.3s ease, transform 0.3s ease'
                }}
                className="skill-card"
              >
                <div style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Icon size={22} />
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>0{idx + 1}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
