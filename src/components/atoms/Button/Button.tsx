import React from 'react';
import { ButtonProps } from './Button.type';

export const Button = ({ text, onClick, className = ' ' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};
