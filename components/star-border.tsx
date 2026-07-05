import type { CSSProperties } from "react";

type StarBorderProps = {
  text: string;
  /** Colour of the travelling star gradient */
  color?: string;
  href?: string;
  /** Animation duration, e.g. "5s" */
  speed?: string;
  className?: string;
};

/**
 * Pill with a star gradient travelling along its top/bottom border
 * (adapted from reactbits.dev). Colour + speed are props.
 */
export default function StarBorder({
  text,
  color = "#a374ff",
  href,
  speed = "5s",
  className = "",
}: StarBorderProps) {
  const glow: CSSProperties = {
    background: `radial-gradient(circle, ${color}, transparent 12%)`,
    animationDuration: speed,
  };

  const content = (
    <>
      <span className="star-border__glow star-border__glow--bottom" style={glow} />
      <span className="star-border__glow star-border__glow--top" style={glow} />
      <span className="star-border__inner">{text}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`star-border ${className}`.trim()}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={`star-border ${className}`.trim()}>
      {content}
    </button>
  );
}
