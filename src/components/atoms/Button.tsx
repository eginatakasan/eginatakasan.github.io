import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        `flex flex-row items-center gap-2 py-3 px-8 md:px-11 min-h-14 bg-accent shadow-md hover:bg-accent-light hover:scale-105 text-textWhite text-sm md:text-base font-semibold rounded-full transition-all [transition-duration: 300ms]`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
