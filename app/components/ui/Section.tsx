interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`mb-4 ${className}`}>  {/* Reduced from mb-6 to mb-4 */}
      {title && (
        <h2 className="text-2xl font-bold mb-3">  {/* Reduced from mb-4 to mb-3 */}
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}