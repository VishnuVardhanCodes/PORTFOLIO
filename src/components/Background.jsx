import Galaxy from "./Galaxy";

function Background() {
  return (
    <Galaxy
      mouseInteraction={true}
      mouseRepulsion={true}
      density={1.2}
      glowIntensity={0.4}
      saturation={0.6}
      hueShift={220}
      rotationSpeed={0.08}
      transparent={true}
    />
  );
}

export default Background;
