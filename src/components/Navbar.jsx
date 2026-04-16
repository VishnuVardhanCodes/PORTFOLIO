import BubbleMenu from "./BubbleMenu";

const items = [
  {
    label: "About",
    href: "#about",
    ariaLabel: "About",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "Education",
    href: "#education",
    ariaLabel: "Education",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "Skills",
    href: "#skills",
    ariaLabel: "Skills",
    rotation: -6,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "Experience",
    href: "#experience",
    ariaLabel: "Experience",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "Projects",
    href: "#projects",
    ariaLabel: "Projects",
    rotation: -4,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
  {
    label: "Achievements",
    href: "#achievements",
    ariaLabel: "Achievements",
    rotation: 6,
    hoverStyles: { bgColor: "#ec4899", textColor: "#ffffff" },
  },
  {
    label: "Resume",
    href: "#resume",
    ariaLabel: "Resume",
    rotation: -4,
    hoverStyles: { bgColor: "#f43f5e", textColor: "#ffffff" },
  },
  {
    label: "Contact",
    href: "#contact",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#14b8a6", textColor: "#ffffff" },
  },
];

function NavbarComponent({ toggleTheme, isLightTheme }) {
  return (
    <BubbleMenu
      logo="/logo.jpg"
      items={items}
      toggleTheme={toggleTheme}
      isLightTheme={isLightTheme}
      menuAriaLabel="Toggle navigation"
      menuBg="#ffffff"
      menuContentColor="#111111"
      useFixedPosition={true}
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
    />
  );
}

export default NavbarComponent;
