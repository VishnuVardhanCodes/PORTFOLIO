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

const useAnimationLoop = (trackRef, speed, width, hovered) => {
  const raf = useRef();
  const offset = useRef(0);

  useEffect(() => {
    const animate = () => {
      offset.current += hovered ? speed * 0.2 : speed;
      trackRef.current.style.transform = `translateX(-${offset.current % width}px)`;
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [speed, width, hovered, trackRef]);
};

const LogoLoop = memo(({ logos, speed = 0.5, logoSize = 56 }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [hovered, setHovered] = useState(false);

  const update = useCallback(() => {
    setWidth(trackRef.current.scrollWidth / 2);
  }, []);

  useResizeObserver(update, [containerRef]);

  useAnimationLoop(trackRef, speed, width, hovered);

  return (
    <div
      className="logoloop"
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="logoloop__track" ref={trackRef}>
        {[...logos, ...logos].map((item, i) => (
          <div
            className="logoloop__item"
            key={i}
            style={{ fontSize: logoSize }}
            title={item.title}
          >
            {item.node}
          </div>
        ))}
      </div>
    </div>
  );
});

export default LogoLoop;
