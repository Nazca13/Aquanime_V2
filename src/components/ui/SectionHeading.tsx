interface SectionHeadingProps {
  /** Main heading text (can include JSX for highlighted spans) */
  children: React.ReactNode;
  /** Optional subtitle/description paragraph */
  subtitle?: string;
  /** Text color scheme */
  variant?: "dark" | "light";
}

/**
 * Consistent section heading used across landing page sections.
 * Handles the repeated pattern of h2 + optional subtitle paragraph.
 */
export default function SectionHeading({
  children,
  subtitle,
  variant = "dark",
}: SectionHeadingProps) {
  const headingColor =
    variant === "light" ? "text-white" : "text-navy-950";
  const subtitleColor =
    variant === "light" ? "text-white/75" : "text-slate-600";

  return (
    <div>
      <h2
        className={`font-heading text-3xl font-extrabold leading-tight sm:text-4xl ${headingColor}`}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
