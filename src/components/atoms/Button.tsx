import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'filled' | 'outlined';
};

const Button = ({ children, className, variant = 'filled' }: ButtonProps) => {
  const baseClasses =
    'flex flex-row font-raleway items-center gap-3 py-3 px-8 md:px-11 min-h-14 text-sm md:text-base font-semibold rounded-full transition-all [transition-duration: 300ms]';

  const variantClasses = {
    filled:
      'bg-accent shadow-md hover:bg-accent-light hover:scale-105 text-textWhite',
    outlined:
      'bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white hover:scale-105',
  };

  return (
    <button className={clsx(baseClasses, variantClasses[variant], className)}>
      {children}
    </button>
  );
};

export default Button;
