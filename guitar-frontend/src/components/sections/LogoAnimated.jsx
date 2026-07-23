"use client";

import { useState } from "react";



export default function LogoAnimated() {
  const [animKey, setAnimKey] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px" }}>
      <style>{styles}</style>

      {/* key forces full remount → restarts all CSS animations */}
      <div key={animKey} className="gcm-scene cursor-pointer" onClick={() => setAnimKey((k) => k + 1)}>
        {/* ── PALM TREE ── */}
        <div className="gcm-palm-wrap">
          <svg width="200" height="245" viewBox="0 0 220 285" xmlns="http://www.w3.org/2000/svg" overflow="visible">
            <path className="gcm-trunk" d="M 68 285 C 66 256 63 226 64 196 C 65 166 69 136 72 108 C 74 86 76 62 77 40 C 78 26 78 16 78 10" fill="none" stroke="#7B5230" strokeWidth={12} strokeLinecap="round" />
            <path className="gcm-frond gcm-pf1" d="M 78 10 C 124 -6 196 -10 275 -2 C 234 -2 178 10 88 30" fill="none" stroke="#2D8040" strokeWidth={6} strokeLinecap="round" />
            <path className="gcm-frond gcm-pf2" d="M 78 13 C 126 18 188 34 248 58 C 206 44 150 28 88 30" fill="none" stroke="#3A9950" strokeWidth={5.5} strokeLinecap="round" />
            <path className="gcm-frond gcm-pf3" d="M 78 10 C 73 -8 70 -30 72 -52 C 74 -26 76 -6 78 12" fill="none" stroke="#2D8040" strokeWidth={5.5} strokeLinecap="round" />
            <path className="gcm-frond gcm-pf4" d="M 78 10 C 110 -8 158 -20 210 -16 C 174 -8 130 6 82 16" fill="none" stroke="#48B060" strokeWidth={5} strokeLinecap="round" />
            <path className="gcm-frond gcm-pf5" d="M 78 10 C 54 -8 24 -18 -12 -10 C 18 -7 52 6 80 14" fill="none" stroke="#2D8040" strokeWidth={5} strokeLinecap="round" />
            <path className="gcm-frond gcm-pf6" d="M 78 14 C 54 22 24 36 -2 56 C 26 42 58 26 80 18" fill="none" stroke="#3A9950" strokeWidth={4.5} strokeLinecap="round" />
            <path className="gcm-frond gcm-pf7" d="M 78 9 C 114 2 152 -8 196 -14 C 160 -6 120 6 82 14" fill="none" stroke="#55C070" strokeWidth={4} strokeLinecap="round" />
          </svg>
        </div>

        {/* ── COCONUT BALLS (fall from frond level) ── */}
        <div className="gcm-coco gcm-coco-1" />
        <div className="gcm-coco gcm-coco-2" />

        {/* ── CRACKED COCONUTS (appear at trunk base) ── */}
        <div className="gcm-crack gcm-crack-1">
          <svg width="34" height="21" viewBox="0 0 34 21" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10.5 Q1 1 11 1 L16 1 L16 20 Q1 20 1 10.5Z" fill="#7B4A20" stroke="#4A2810" strokeWidth={0.9} />
            <path d="M3 10.5 Q3 3 11 3 L15 3 L15 18 Q3 18 3 10.5Z" fill="#F2DFB8" />
            <path d="M18 1 L23 1 Q33 1 33 10.5 Q33 20 18 20 L18 1Z" fill="#6B3A18" stroke="#4A2810" strokeWidth={0.9} />
            <path d="M19 3 L23 3 Q31 3 31 10.5 Q31 18 19 18 L19 3Z" fill="#E8D0A5" />
            <circle cx="9" cy="22" r="1.4" fill="#8B5A2B" opacity="0.5" />
            <circle cx="24" cy="22" r="1.2" fill="#6B3A18" opacity="0.45" />
            <circle cx="17" cy="23" r="1.7" fill="#7B4A20" opacity="0.35" />
          </svg>
        </div>
        <div className="gcm-crack gcm-crack-2">
          <svg width="29" height="18" viewBox="0 0 29 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9 Q1 1 9 1 L14 1 L14 17 Q1 17 1 9Z" fill="#7B4A20" stroke="#4A2810" strokeWidth={0.8} />
            <path d="M3 9 Q3 3 9 3 L13 3 L13 15 Q3 15 3 9Z" fill="#F2DFB8" />
            <path d="M16 1 L20 1 Q28 1 28 9 Q28 17 16 17 L16 1Z" fill="#6B3A18" stroke="#4A2810" strokeWidth={0.8} />
            <path d="M17 3 L20 3 Q26 3 26 9 Q26 15 17 15 L17 3Z" fill="#E8D0A5" />
          </svg>
        </div>

        {/* ── GUITAR CORNER ── */}
        <div className="gcm-gc-wrap">
          <span className="gcm-gc-text">Guitar Corner</span>
          <span className="gcm-gc-under" />
        </div>

        {/* ── MIAMI ── */}
        <span className="gcm-miami">Miami</span>

        {/* ── IMPACT RIPPLE ── */}
        <div className="gcm-impact" />

        {/* ── GUITAR ── */}
        <div className="gcm-guitar-wrap">
          <svg width="48" height="110" viewBox="0 0 48 110" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 0 L31 0 Q33 0 33 2 L33 19 Q33 21 31 21 L17 21 Q15 21 15 19 L15 2 Q15 0 17 0Z" fill="#6B4220" />
            {/* tuning pegs L */}
            <rect x="8" y="3" width="8" height="3.5" rx="1.5" fill="#5A3818" />
            <circle cx="7" cy="4.7" r="4" fill="#C8963E" />
            <circle cx="7" cy="4.7" r="1.7" fill="#E8B860" />
            <rect x="8" y="13" width="8" height="3.5" rx="1.5" fill="#5A3818" />
            <circle cx="7" cy="14.7" r="4" fill="#C8963E" />
            <circle cx="7" cy="14.7" r="1.7" fill="#E8B860" />
            {/* tuning pegs R */}
            <rect x="32" y="3" width="8" height="3.5" rx="1.5" fill="#5A3818" />
            <circle cx="41" cy="4.7" r="4" fill="#C8963E" />
            <circle cx="41" cy="4.7" r="1.7" fill="#E8B860" />
            <rect x="32" y="13" width="8" height="3.5" rx="1.5" fill="#5A3818" />
            <circle cx="41" cy="14.7" r="4" fill="#C8963E" />
            <circle cx="41" cy="14.7" r="1.7" fill="#E8B860" />
            {/* nut */}
            <rect x="15" y="20" width="18" height="3" rx="1.5" fill="#F0DEB8" />
            {/* neck */}
            <path d="M18 23 L30 23 L30 60 L18 60Z" fill="#8B6340" />
            <path d="M18 23 L20 23 L20 60 L18 60Z" fill="#7A5530" opacity="0.5" />
            <path d="M28 23 L30 23 L30 60 L28 60Z" fill="#7A5530" opacity="0.5" />
            {/* frets */}
            <line x1="18" y1="29" x2="30" y2="29" stroke="#D4B882" strokeWidth={1.2} />
            <line x1="18" y1="35" x2="30" y2="35" stroke="#D4B882" strokeWidth={1.2} />
            <line x1="18" y1="41" x2="30" y2="41" stroke="#D4B882" strokeWidth={1.2} />
            <line x1="18" y1="47" x2="30" y2="47" stroke="#D4B882" strokeWidth={1.2} />
            <line x1="18" y1="53" x2="30" y2="53" stroke="#D4B882" strokeWidth={1.2} />
            <circle cx="24" cy="44" r="1.8" fill="#F0DEB8" opacity="0.6" />
            {/* heel */}
            <rect x="16" y="57" width="16" height="5" rx="2" fill="#7B5230" />
            {/* upper bout */}
            <path d="M9 62 Q5 62 5 71 Q5 81 13 84 L35 84 Q43 81 43 71 Q43 62 39 62Z" fill="#C8963E" />
            <rect x="11" y="82" width="26" height="8" fill="#C8963E" />
            {/* lower bout */}
            <ellipse cx="24" cy="97" rx="19" ry="16" fill="#D4A054" />
            {/* outlines */}
            <path d="M9 62 Q5 62 5 71 Q5 81 13 84 L35 84 Q43 81 43 71 Q43 62 39 62Z" fill="none" stroke="#A07030" strokeWidth={1} />
            <ellipse cx="24" cy="97" rx="19" ry="16" fill="none" stroke="#A07030" strokeWidth={1} />
            <path d="M10 90 Q8 97 10 104" fill="none" stroke="#E8B870" strokeWidth={1.5} strokeLinecap="round" opacity="0.4" />
            {/* sound hole */}
            <circle cx="24" cy="93" r="7" fill="#5C3A18" />
            <circle cx="24" cy="93" r="5.5" fill="#4A2E12" />
            <circle cx="24" cy="93" r="7" fill="none" stroke="#C8963E" strokeWidth={1.2} strokeDasharray="3.5 2.5" />
            {/* bridge */}
            <rect x="17" y="103" width="14" height="4" rx="2" fill="#4A2E12" />
            <rect x="17" y="102" width="14" height="2.2" rx="1.1" fill="#F0DEB8" />
            {/* strings */}
            <line x1="20" y1="23" x2="18" y2="107" stroke="#D8C888" strokeWidth={0.65} opacity="0.9" />
            <line x1="22" y1="23" x2="21" y2="107" stroke="#D8C888" strokeWidth={0.65} opacity="0.9" />
            <line x1="24" y1="23" x2="24" y2="107" stroke="#D8C888" strokeWidth={0.65} opacity="0.9" />
            <line x1="26" y1="23" x2="27" y2="107" stroke="#D8C888" strokeWidth={0.65} opacity="0.9" />
            <line x1="28" y1="23" x2="30" y2="107" stroke="#D8C888" strokeWidth={0.65} opacity="0.9" />
          </svg>
        </div>
      </div>
      {/* /gcm-scene */}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CSS  —  all classes prefixed with gcm- to avoid global conflicts
   ───────────────────────────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Lobster&display=swap');

.gcm-scene {
  position: absolute; 
  top: -25px;
  left: 75px;
  
  width: 360px;
  height: 390px;
  overflow: visible;
  transform: scale(0.35);
  transform-origin: top left;
}

  /* ── Guitar Corner ── */
  .gcm-gc-wrap {
    position: absolute;
    left: 185px;
    top: 180px;
    line-height: 1;
    z-index: 2;
  }
  .gcm-gc-text {
    font-family: 'Dancing Script', cursive;
    font-size: 62px;
    font-weight: 700;
    color: #1a1a1a;
    white-space: nowrap;
    display: block;
    clip-path: inset(0 100% 0 0);
    animation: gcm-handwrite 2.4s cubic-bezier(0.4,0,0.2,1) forwards 0.4s;
  }
  @keyframes gcm-handwrite { to { clip-path: inset(0 0% 0 0); } }

  .gcm-gc-under {
    display: block;
    height: 2px;
    background: linear-gradient(90deg, transparent, #C8963E 10%, #C8963E 90%, transparent);
    border-radius: 2px;
    width: 0;
    margin-top: -2px;
    animation: gcm-ul-grow 0.45s ease-out forwards 2.78s;
  }
  @keyframes gcm-ul-grow { to { width: 100%; } }

  /* ── Miami ── */
  .gcm-miami {
    position: absolute;
    left: 215px;
    top: 248px;
    font-family: 'Lobster', cursive;
    font-size: 82px;
    background: linear-gradient(145deg, #FF4E9B 0%, #FF8830 48%, #FF4E9B 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
    opacity: 0;
    transform: scale(0.65) translateY(10px);
    transform-origin: left center;
    z-index: 2;
    animation:
      gcm-miami-pop 0.9s cubic-bezier(0.34,1.56,0.64,1) forwards 5.42s,
      gcm-shimmer 4s ease-in-out infinite 5s;
  }
  @keyframes gcm-miami-pop { to { opacity:1; transform:scale(1) translateY(0); } }
  @keyframes gcm-shimmer {
    0%,100% { background-position: 0% 50%; }
    50%      { background-position: 100% 50%; }
  }

  /* ── Palm tree ── */
  .gcm-palm-wrap {
    position: absolute;
    left: 50px;
    bottom: 18px;
    width: 220px;
    height: 285px;
    overflow: visible;
    transform-origin: 68px 285px;
    z-index: 3;
    opacity: 0;
    animation:
      gcm-reveal 0s forwards 2.8s,
      gcm-palm-shake 2s ease-out forwards 4.9s;
  }
  .gcm-palm-wrap svg { overflow: visible; }

  @keyframes gcm-reveal { to { opacity: 1; } }

  @keyframes gcm-palm-shake {
    0%   { transform: rotate(0deg); }
    7%   { transform: rotate(-5.5deg); }
    16%  { transform: rotate(4.5deg); }
    26%  { transform: rotate(-3.2deg); }
    36%  { transform: rotate(2.4deg); }
    47%  { transform: rotate(-1.5deg); }
    60%  { transform: rotate(0.9deg); }
    74%  { transform: rotate(-0.3deg); }
    100% { transform: rotate(0deg); }
  }

  .gcm-trunk {
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
    animation: gcm-draw 1.3s ease-out forwards 2.8s;
  }
  .gcm-frond {
    stroke-dasharray: 320;
    stroke-dashoffset: 320;
    animation: gcm-draw 0.48s ease-out forwards;
  }
  .gcm-pf1 { animation-delay: 3.12s; }
  .gcm-pf2 { animation-delay: 3.25s; }
  .gcm-pf3 { animation-delay: 3.38s; }
  .gcm-pf4 { animation-delay: 3.51s; }
  .gcm-pf5 { animation-delay: 3.64s; }
  .gcm-pf6 { animation-delay: 3.77s; }
  .gcm-pf7 { animation-delay: 3.90s; }
  @keyframes gcm-draw { to { stroke-dashoffset: 0; } }

  /* ── Coconuts ── */
  .gcm-coco {
    position: absolute;
    border-radius: 50%;
    z-index: 5;
    opacity: 0;
  }
  .gcm-coco-1 {
    left: 125px; top: 97px;
    width: 18px; height: 18px;
    background: radial-gradient(circle at 38% 32%, #A06830, #7B4A20);
    animation:
      gcm-coco-show 0.01s forwards 4.02s,
      gcm-coco-fall1 0.74s ease-in forwards 4.60s;
  }
  .gcm-coco-2 {
    left: 110px; top: 98px;
    width: 16px; height: 16px;
    background: radial-gradient(circle at 38% 32%, #906828, #6B3A18);
    animation:
      gcm-coco-show 1s forwards 4.10s,
      gcm-coco-fall2 0.70s ease-in forwards 4.6s;
  }
  @keyframes gcm-coco-show { to { opacity: 1; } }

  @keyframes gcm-coco-fall1 {
    0%   { opacity:1; transform:translate(0,0) rotate(0deg); }
    78%  { opacity:1; transform:translate(-10px,230px) rotate(312deg); }
    88%  { opacity:1; transform:translate(-10px,236px) rotate(324deg) scale(1.18); }
    100% { opacity:0; transform:translate(-10px,246px) scale(0.35); }
  }
  @keyframes gcm-coco-fall2 {
    0%   { opacity:1; transform:translate(0,0) rotate(0deg); }
    78%  { opacity:1; transform:translate(-6px,220px) rotate(298deg); }
    88%  { opacity:1; transform:translate(-6px,226px) rotate(308deg) scale(1.14); }
    100% { opacity:0; transform:translate(-6px,226px) scale(0.35); }
  }

  /* ── Cracked coconuts ── */
  .gcm-crack {
    position: absolute;
    z-index: 5;
    opacity: 0;
  }
  .gcm-crack-1 {
    left: 80px; top: 326px;
    animation: gcm-crack-pop 0.28s cubic-bezier(0.34,1.56,0.64,2) forwards 5.16s;
  }
  .gcm-crack-2 {
    left: 100px; top: 330px;
    animation: gcm-crack-pop 0.28s cubic-bezier(0.34,1.56,0.64,2) forwards 5.22s;
  }
  @keyframes gcm-crack-pop {
    0%   { opacity:0; transform:scale(0.15) rotate(-20deg); }
    100% { opacity:1; transform:scale(1)    rotate(0deg); }
  }

  /* ── Impact ripple ── */
  .gcm-impact {
    position: absolute;
    right: 38px; top: 248px;
    width: 0; height: 0;
    border-radius: 50%;
    background: rgba(255, 128, 0, 0.2);
    z-index: 6;
    opacity: 0;
    animation: gcm-impact-pulse 1s ease-out forwards 4.34s;
  }
  @keyframes gcm-impact-pulse {
    0%   { opacity:0.85; width:0; height:0; margin:0; }
    100% { opacity:0; width:85px; height:28px; margin:-14px -42px; }
  }

  /* ── Guitar ── */
  .gcm-guitar-wrap {
    position: absolute;
     left: 200px;
  top: -35px;
    width: 48px;
    z-index: 7;
    opacity: 0;
    transform-origin: 24px 0;
    animation: gcm-guitar-fall 1s ease-in forwards 3.84s;
  }

@keyframes gcm-guitar-fall {
  0% {
    transform: translate(-10px, 120px) rotate(60deg);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  30% {
    transform: translate(-25px, 170px) rotate(35deg);
  }

  55% {
    transform: translate(-45px, 230px) rotate(10deg);
  }

  75% {
    transform: translate(-65px, 265px) rotate(-5deg);
  }

  100% {
    transform: translate(-90px, 270px) rotate(-12deg);
    opacity: 1;
  }
}
  

  /* ── Replay button ── */
  .gcm-replay {
    font-family: 'Dancing Script', cursive;
    font-size: 18px;
    color: #888;
    background: none;
    border: 1.5px solid #ccc;
    border-radius: 30px;
    padding: 8px 24px;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    letter-spacing: 0.4px;
  }
  .gcm-replay:hover { color: #C8963E; border-color: #C8963E; }
`;
