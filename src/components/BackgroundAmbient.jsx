import React from 'react';

export default function BackgroundAmbient() {
  return (
    <div
      className="ambient-bg-wrapper"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Deep Violet / Purple Nebula (Top Right) */}
      <div
        className="ambient-glow ambient-glow-purple"
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '65vw',
          height: '65vw',
          maxWidth: '950px',
          maxHeight: '950px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, rgba(76, 29, 149, 0.12) 40%, rgba(15, 12, 35, 0) 70%)',
          filter: 'blur(90px)',
          willChange: 'transform',
        }}
      />

      {/* Deep Sapphire / Cobalt Blue Nebula (Mid Left) */}
      <div
        className="ambient-glow ambient-glow-blue"
        style={{
          position: 'absolute',
          top: '35%',
          left: '-15%',
          width: '60vw',
          height: '60vw',
          maxWidth: '850px',
          maxHeight: '850px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.20) 0%, rgba(30, 58, 138, 0.10) 45%, rgba(10, 14, 30, 0) 70%)',
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
      />

      {/* Deep Indigo / Dark Purple Ambient Basin (Bottom Center) */}
      <div
        className="ambient-glow ambient-glow-indigo"
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '20%',
          width: '70vw',
          height: '55vw',
          maxWidth: '1000px',
          maxHeight: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(67, 24, 153, 0.12) 40%, transparent 70%)',
          filter: 'blur(110px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
