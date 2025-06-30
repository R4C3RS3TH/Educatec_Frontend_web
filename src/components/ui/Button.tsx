import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  loading = false,
  ...props
}: ButtonProps) {
  const baseStyle =
    'rounded-xl font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-300',
    outline: 'border border-gray-400 text-gray-800 hover:bg-gray-100 focus:ring-gray-300',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-3',
  };

  return (
    <button
      className={clsx(baseStyle, variants[variant], sizes[size], className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? 'Cargando...' : children}
    </button>
  );
}

