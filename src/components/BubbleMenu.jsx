import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GlowButton from './GlowButton';
import './BubbleMenu.css';

const BubbleMenu = ({ items, logo }) => {
  const navRef = useRef(null);

  useEffect(() => {
    // Simple entrance animation for the pill
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const variants = ["blue", "pink", "green", "purple"];

  const handleThemeChange = (e) => {
    const theme = e.target.value;
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <nav className="bubble-menu-container flex flex-row items-center justify-between gap-4 p-3 rounded-full shadow-2xl transition-all duration-300" ref={navRef} style={{ background: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(15px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="bubble-menu-logo shrink-0">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full border-2 border-white/20 p-0.5" style={{ borderColor: 'var(--text-primary)' }} />
      </div>

      <div className="bubble-menu-nav flex flex-row items-center gap-2 overflow-x-auto no-scrollbar flex-nowrap mx-4">
        {items.map((item, index) => (
          <a key={index} href={item.href} className="no-underline shrink-0">
            <GlowButton variant={variants[index % variants.length]} className="!h-9 !px-4 !rounded-xl">
              <span className="text-xs lg:text-sm">{item.label}</span>
            </GlowButton>
          </a>
        ))}
      </div>

      <div className="bubble-menu-actions shrink-0">
        <select 
          className="select select-bordered select-sm bg-black/30 text-white rounded-xl border-white/10"
          onChange={handleThemeChange}
          defaultValue="default"
        >
          <option value="default">Default</option>
          <option value="retro">Retro</option>
          <option value="cyberpunk">Cyber</option>
          <option value="valentine">Val</option>
          <option value="aqua">Aqua</option>
        </select>
      </div>
    </nav>
  );
};

export default BubbleMenu;
