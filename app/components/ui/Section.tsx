interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
  }
  
  export function Section({ title, children, className = '' }: SectionProps) {
    return (
      <section className={`mb-6 ${className}`}>
        {title && (
          <h2 className="text-2xl font-bold mb-4">
            {title}
          </h2>
        )}
        {children}
      </section>
    );
  }