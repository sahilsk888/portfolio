import React, { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'INTRODUCTION' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'journey', label: 'JOURNEY' },
  { id: 'connect', label: 'CONNECT' }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      
      for (const item of [...NAV_ITEMS].reverse()) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id, e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-floating" aria-label="Portfolio sections">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => scrollTo(item.id, e)}
          className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
