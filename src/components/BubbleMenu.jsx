import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './BubbleMenu.css';

const BubbleMenu = ({ items, logo }) => {
  const navRef = useRef(null);

  useEffect(() => {
    // Smooth entrance animation
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const handleThemeChange = (e) => {
    const theme = e.target.value;
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <nav className="bubble-menu-container" ref={navRef}>
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        {items.map((item, index) => (
          <a key={index} href={item.href} className="nav-link-item">
            {item.label}
          </a>
        ))}
      </div>

      {/* Theme Dropdown */}
      <div className="nav-theme">
        <select
          className="theme-dropdown"
          onChange={handleThemeChange}
          defaultValue="default"
        >
          <option value="default">🌙 Default</option>
          <option value="retro">🎨 Retro</option>
          <option value="cyberpunk">⚡ Cyber</option>
          <option value="valentine">💖 Valentine</option>
          <option value="aqua">🌊 Aqua</option>
        </select>
      </div>
    </nav>
  );
};

export default BubbleMenu;
