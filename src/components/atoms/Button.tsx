import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`py-3 px-11 bg-accent shadow-md hover:bg-accent-light hover:scale-105 text-textWhite font-semibold rounded-full transition-all [transition-duration: 300ms] ${
        className || ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
