interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverColor?: 'agency-blue' | 'agency-red' | 'agency-yellow' | 'agency-green' | 'agency-pink' | 'agency-violet' | 'none';
}

export function Card({ children, className = '', hoverColor = 'none' }: CardProps) {
  const hoverStyles = {
    none: '',
    'agency-blue': 'hover:bg-agency-blue/50',
    'agency-red': 'hover:bg-agency-red/50',
    'agency-yellow': 'hover:bg-agency-yellow/50',
    'agency-green': 'hover:bg-agency-green/50',
    'agency-pink': 'hover:bg-agency-pink/50',
    'agency-violet': 'hover:bg-agency-violet/50'
  };

  return (
    <div className={`
      rounded-lg border border-gray-200 bg-white
      transition-all duration-300
      hover:shadow-lg
      hover:border-gray-300
      ${hoverStyles[hoverColor]}
      ${className}
    `}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}