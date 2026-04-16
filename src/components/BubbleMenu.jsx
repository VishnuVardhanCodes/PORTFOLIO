import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaSun, FaMoon } from 'react-icons/fa';
import './BubbleMenu.css';

const BubbleMenu = ({ items, logo, toggleTheme }) => {
  const navRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light or false

  useEffect(() => {
    // Simple entrance animation for the pill
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (toggleTheme) {
      toggleTheme();
    }
  };

  return (
    <nav className="bubble-menu-container" ref={navRef}>
      <div className="bubble-menu-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="bubble-menu-nav">
        {items.map((item, index) => (
          <a key={index} href={item.href} className="bubble-nav-link">
            {item.label}
          </a>
        ))}
      </div>

      <div className="bubble-menu-actions">
        {/* Render theme toggle even if the prop is missing, for UI demo */}
        <button
          onClick={handleThemeToggle}
          className="theme-toggle-btn"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default BubbleMenu;
