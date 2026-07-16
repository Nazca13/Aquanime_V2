interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}

/**
 * Consistent max-width container used across all sections.
 * Centralizes the `mx-auto max-w-7xl px-6 lg:px-10` pattern.
 */
export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto max-w-7xl px-6 lg:px-10 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
