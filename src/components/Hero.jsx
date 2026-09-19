import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textColRef = useRef(null);
  const photoWrapperRef = useRef(null);
  const photoImgRef = useRef(null);
  const badgeRef = useRef(null);
  const greetingRef = useRef(null);
  const titleRef = useRef(null);
  const rolesRef = useRef(null);
  const bioRef = useRef(null);
  const socialsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          greetingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0 },
          '-=0.6'
        )
        .fromTo(
          rolesRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8 },
          '-=0.7'
        )
        .fromTo(
          bioRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          socialsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        // Photo entrance: smooth fade-in, slight upward movement, subtle scale-in
        .fromTo(
          photoWrapperRef.current,
          { opacity: 0, y: 30, scale: 1.03 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
          '-=1.2'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        );

      // Scroll-driven Parallax and Exit Transformation
      // Photo moves subtly with gentle parallax, anchored to page
      gsap.to(photoImgRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
        y: 60,
        scale: 1.02,
        ease: 'none',
      });

      // Text column moves smoothly upward
      gsap.to(textColRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
        y: -40,
        opacity: 0.25,
        filter: 'blur(5px)',
        ease: 'none',
      });

      // Photo wrapper fades smoothly on exit
      gsap.to(photoWrapperRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        opacity: 0.2,
        filter: 'blur(6px)',
        ease: 'none',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="hero"
      ref={containerRef}
      className="scene-section hero-scene"
      style={{
        minHeight: '100vh',
        justifyContent: 'center',
        padding: '7rem 0 3rem',
        position: 'relative',
      }}
    >
      <div className="editorial-container">
        <div className="hero-main-grid">
          {/* LEFT SIDE: Text and Identity */}
          <div ref={textColRef} className="hero-left-col">
            <div ref={badgeRef} className="eyebrow" style={{ marginBottom: '1.25rem' }}>
              PORTFOLIO // SCENE 01
            </div>

            <div
              ref={greetingRef}
              className="font-mono"
              style={{
                fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)',
                color: 'var(--text-muted)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              HELLO, I'M
            </div>

            <h1 ref={titleRef} className="hero-title-giant">
              SAHIL
            </h1>

            <div ref={rolesRef} className="hero-subtitle-block" style={{ margin: '1.5rem 0' }}>
              <div className="hero-role-title">
                CSE STUDENT
              </div>
              <div className="hero-role-subtitle" style={{ color: 'var(--accent-cyan)' }}>
                DATA SCIENCE ENGINEER
              </div>
            </div>

            <p
              ref={bioRef}
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                lineHeight: '1.65',
                maxWidth: '520px',
                marginBottom: '2rem',
              }}
            >
              "Building intelligent solutions for a better tomorrow."
            </p>

            {/* Social Links Row in Hero */}
            <div
              ref={socialsRef}
              className="hero-socials-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://github.com/sahilsk888"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-pill"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GITHUB</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sahil-sk-65a5463b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-pill"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LINKEDIN</span>
              </a>

              <a
                href="https://www.instagram.com/__ssahil_l/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-pill"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={16} />
                <span>INSTAGRAM</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <button
              ref={scrollIndicatorRef}
              onClick={handleScrollDown}
              className="scroll-indicator"
              aria-label="Scroll to explore next section"
            >
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={15} className="scroll-indicator-arrow" />
            </button>
          </div>

          {/* RIGHT SIDE: Personal Full-Body Photograph */}
          <div className="hero-right-col">
            <div ref={photoWrapperRef} className="hero-photo-container">
              {/* Scene Number Index Tag */}
              <div className="hero-photo-index font-mono" aria-hidden="true">
                01 / 08
              </div>

              {/* Underlying authentic photograph */}
              <img
                ref={photoImgRef}
                src="/images/sahil.jpg"
                alt="Sahil — CSE Student & Data Science Engineer"
                className="hero-photo-img"
                loading="eager"
              />

              {/* Upper Background Desaturation & Darkening Layer */}
              {/* Targets the bright outdoor canopy and desaturates it while keeping Sahil's body and face authentic */}
              <div className="hero-photo-desaturate-overlay" aria-hidden="true" />

              {/* Multi-directional Dark Vignette & Edge Blend Gradient */}
              {/* Ensures the photo blends seamlessly into the dark website background on all sides */}
              <div className="hero-photo-gradient-overlay" aria-hidden="true" />

              {/* Subtle ambient indigo/purple lighting wash */}
              <div className="hero-photo-ambient-wash" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
