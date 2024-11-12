'use client'

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-700 text-gray-100 hover:bg-gray-600 transition-colors ${className}`}>
      {children}
    </span>
  );
}