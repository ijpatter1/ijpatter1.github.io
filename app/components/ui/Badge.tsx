interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: 'agency-blue' | 'agency-red' | 'agency-yellow' | 'agency-green' | 'agency-pink' | 'agency-violet' | 'none';
}

export function Badge({ children, className = '', color = 'none' }: BadgeProps) {
  const colorStyles = {
    none: 'bg-white border border-gray-200 text-gray-900',
    'agency-blue': 'bg-agency-blue/30 border border-agency-blue/20 text-gray-900',
    'agency-red': 'bg-agency-red/30 border border-agency-red/20 text-gray-900',
    'agency-yellow': 'bg-agency-yellow/30 border border-agency-yellow/20 text-gray-900',
    'agency-green': 'bg-agency-green/30 border border-agency-green/20 text-gray-900',
    'agency-pink': 'bg-agency-pink/30 border border-agency-pink/20 text-gray-900',
    'agency-violet': 'bg-agency-violet/30 border border-agency-violet/20 text-gray-900'
  };

  return (
    <span 
      className={`
        inline-flex items-center justify-center 
        whitespace-nowrap rounded 
        leading-none
        min-h-[1.5rem]
        transition-colors duration-200
        print:leading-normal
        print:min-h-[1.25rem]
        print:flex print:items-center print:justify-center
        ${colorStyles[color]}
        ${className}
      `}
    >
      <span className="inline-block align-middle print:transform print:translate-y-0">
        {children}
      </span>
    </span>
  );
}