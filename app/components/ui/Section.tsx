interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
  }
  
  export function Section({ title, children, className = '' }: SectionProps) {
    return (
      <section className={`mb-12 ${className}`}>
        {title && (
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {title}
          </h2>
        )}
        {children}
      </section>
    );
  }