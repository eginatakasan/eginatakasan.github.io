'use client';

import React from 'react';
import clsx from 'clsx';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type SearchBoxProps = {
  onChangeText: (text: string) => void;
  placeholder?: string;
  className?: string;
  value?: string;
  disabled?: boolean;
};

const SearchBox: React.FC<SearchBoxProps> = ({
  onChangeText,
  placeholder = 'Search...',
  className,
  value = '',
  disabled = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(e.target.value);
  };

  return (
    <div className={clsx('relative', className)}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          'w-full px-4 py-3 pl-12',
          'font-raleway text-sm md:text-base',
          'bg-white border-2 border-gray-200 rounded-full',
          'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20',
          'transition-all duration-300',
          'placeholder:text-lightGray',
          'disabled:bg-gray-100 disabled:cursor-not-allowed',
          'hover:border-gray-300',
        )}
      />
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="w-5 h-5 text-lightGray" />
      </div>
    </div>
  );
};

export default SearchBox;
