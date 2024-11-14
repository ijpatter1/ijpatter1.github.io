'use client'

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`border border-gray-200 rounded-md ${className}`}>  {/* Added rounded-md for consistency */}
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={`p-3 ${className}`}>  {/* Reduced from p-4 to p-3 */}
      {children}
    </div>
  );
}