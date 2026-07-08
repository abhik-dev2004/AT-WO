import type { CSSProperties, ReactNode } from "react";

/** Single colour shared by every button — a deeper blue. */
const DEFAULT_COLOR = "#2d54a8";

type GlowButtonProps = {
  /** Button label */
  text: string;
  /** Base colour (any CSS colour) that drives the gradient + bloom */
  color?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  /** Optional trailing icon (e.g. a loading spinner); none by default */
  icon?: ReactNode;
};

/**
 * Reusable glowing pill button. Gradient fill + coloured halo are derived
 * from `color` via CSS `color-mix`; defaults to the shared dim colour.
 */
export default function GlowButton({
  text,
  color = DEFAULT_COLOR,
  href,
  type = "button",
  disabled,
  className = "",
  onClick,
  icon,
}: GlowButtonProps) {
  const style = { ["--c" as string]: color } as CSSProperties;
  const cls = `glow-btn ${className}`.trim();
  const content = (
    <>
      <span>{text}</span>
      {icon}
    </>
  );

  if (href) {
    return (
      <a href={href} style={style} className={cls} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      style={style}
      className={cls}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
