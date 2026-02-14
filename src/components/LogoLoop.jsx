import { useCallback, useEffect, useRef, useState, memo } from "react";
import "./LogoLoop.css";

const useResizeObserver = (callback, refs) => {
  useEffect(() => {
    const observer = new ResizeObserver(callback);
    refs.forEach((r) => r.current && observer.observe(r.current));
    callback();
    return () => observer.disconnect();
  }, [callback, refs]);
};

// Animation logic moved into LogoLoop component

const LogoLoop = memo(({ logos, speed = 0.5, logoSize = 56, direction = "left" }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Repeat logos multiple times to ensure no gap on very wide screens
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  const update = useCallback(() => {
    if (trackRef.current && logos.length > 0) {
      const items = trackRef.current.children;
      if (items.length > logos.length) {
        // Use the offset of the first item of the second set as the loop width
        const loopWidth = items[logos.length].offsetLeft;
        if (loopWidth > 0) setWidth(loopWidth);
      }
    }
  }, [logos.length]);

  useResizeObserver(update, [containerRef]);

  // Refined animation loop to support direction and seamless reset
  const raf = useRef();
  const offset = useRef(0);

  useEffect(() => {
    const animate = () => {
      if (width > 0) {
        const move = hovered ? speed * 0.2 : speed;

        // Update offset based on direction
        if (direction === "left") {
          offset.current += move;
        } else {
          offset.current -= move;
        }

        // Apply seamless modulo transform
        const x = ((offset.current % width) + width) % width;
        trackRef.current.style.transform = `translateX(-${x}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [speed, width, hovered, direction]);

  return (
    <div
      className="logoloop"
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="logoloop__track" ref={trackRef}>
        {repeatedLogos.map((item, i) => (
          <div
            className="logoloop__item"
            key={i}
            title={item.title}
          >
            <div className="logoloop__icon" style={{ fontSize: logoSize }}>
              {item.node}
            </div>
            <span className="logoloop__label">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default LogoLoop;
