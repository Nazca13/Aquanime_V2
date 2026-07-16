import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  /** Visual style variant */
  variant?: "primary" | "outline" | "outline-dark";
  className?: string;
}

/**
 * Consistent CTA button link used across landing page sections.
 * Primary: solid cyan bg. Outline: white border. Outline-dark: navy border.
 */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-bold tracking-wide transition-all";

  const variantClasses = {
    primary:
      "bg-brand-cyan text-white hover:scale-105",
    outline:
      "border-2 border-white/80 text-white hover:bg-white hover:text-navy-950",
    "outline-dark":
      "border-2 border-navy-950/80 text-navy-950 hover:bg-navy-950 hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
