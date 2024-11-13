interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
  }
  
  export function Section({ title, children, className = '' }: SectionProps) {
    return (
      <section className={`mb-8 ${className}`}>
        {title && (
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
        )}
        {children}
      </section>
    );
  }