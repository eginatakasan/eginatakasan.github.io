import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: 'filled' | 'outlined' | 'text';
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  'aria-label'?: string;
};

const Button = ({
  children,
  className,
  variant = 'filled',
  href,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'flex flex-row font-raleway items-center justify-center gap-3 text-sm md:text-base font-semibold rounded-full transition-all duration-200';

  const variantClasses = {
    filled:
      'py-3 px-8 md:px-11 min-h-14 bg-accent shadow-md hover:bg-accent-light hover:scale-105 text-textWhite',
    outlined:
      'py-3 px-8 md:px-11 min-h-14 bg-white border-2 border-gray-500 text-gray-600 hover:scale-105 hover:border-accent hover:text-accent',
    text: 'px-0.5 py-0.5 bg-transparent text-accent font-bold hover:text-accent-light hover:underline',
  };

  if (href) {
    return (
      <a
        href={href}
        className={clsx(baseClasses, variantClasses[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
