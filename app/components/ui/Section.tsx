interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
  }
  
  export function Section({ title, children, className = '' }: SectionProps) {
    return (
      <section className={`mb-12 ${className}`}>
        {title && (
          <h2 className="text-2xl font-semibold mb-6 text-purple-300">{title}</h2>
        )}
        {children}
      </section>
    );
  }