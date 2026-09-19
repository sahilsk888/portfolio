import React from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';
import BackgroundAmbient from './components/BackgroundAmbient';
import Hero from './components/Hero';
import About from './components/About';
import SkillsOverview from './components/SkillsOverview';
import SkillsDev from './components/SkillsDev';
import SkillsDataAI from './components/SkillsDataAI';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Connect from './components/Connect';

export default function App() {
  // Initialize Lenis momentum scroll and GSAP sync
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-void text-primary selection:bg-white selection:text-black">
      {/* Ambient Dark Purple & Dark Blue Atmospheric Background */}
      <BackgroundAmbient />

      {/* Custom Magnetic Cursor */}
      <Cursor />

      {/* Global Scroll Progress Bar */}
      <ScrollProgress />

      {/* Minimal Floating Navigation */}
      <Navigation />

      {/* Main Editorial Story Flow */}
      <main id="main-content">
        {/* Scene 01: Introduction */}
        <Hero />

        {/* Scene 02: About */}
        <About />

        {/* Scene 03: Technical Arsenal Overview */}
        <SkillsOverview />

        {/* Scene 04: Development & Systems */}
        <SkillsDev />

        {/* Scene 05: Data Science & AI */}
        <SkillsDataAI />

        {/* Scene 06: Selected Projects */}
        <Projects />

        {/* Scene 07: Academic & Technical Journey */}
        <Journey />

        {/* Scene 08: Connect & Socials */}
        <Connect />
      </main>
    </div>
  );
}
