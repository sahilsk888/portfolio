import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon } from './Icons';
import { socialLinks } from '../data/socialLinks';

gsap.registerPlugin(ScrollTrigger);

const ICONS = {
  email: MailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

export default function Connect() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 0.6,
          },
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        }
      );

      linksRef.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 65%',
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
    <footer id="connect" ref={containerRef} className="scene-section" style={{ minHeight: '90vh', justifyContent: 'space-between', paddingBottom: '3rem' }}>
      <div className="editorial-container">
        <div className="eyebrow">SCENE 08 // CONNECT & INITIATE</div>

        <div ref={headlineRef} style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.03em', lineHeight: '0.95', marginBottom: '1.5rem' }}>
            LET’S BUILD <br />
            <span style={{ color: 'var(--text-muted)' }}>INTELLIGENT VALUE.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '650px', lineHeight: '1.6' }}>
            Open to collaborative engineering, research dialogues, data science initiatives, and ambitious software development.
          </p>
        </div>

        {/* Social Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '1000px', marginBottom: '5rem' }}>
          {socialLinks.map((link, idx) => {
            const Icon = ICONS[link.id];
            return (
              <a
                key={link.id}
                ref={(el) => (linksRef.current[idx] = el)}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="social-link-card"
                aria-label={`${link.platform}: ${link.handle}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="social-platform-name">{link.platform}</div>
                    <div className="social-handle">{link.handle}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    CONNECT DIRECTLY
                  </span>
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
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Minimal Editorial Colophon / Footer Bottom */}
      <div className="editorial-container" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-highlight)', fontWeight: '600' }}>
              SAHIL
            </span>
            <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '1rem' }}>
              CSE STUDENT // DATA SCIENCE ENGINEER
            </span>
          </div>

          <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            DESIGNED WITH EDITORIAL MOTION & PRECISION
          </div>
        </div>
      </div>
    </footer>
  );
}
