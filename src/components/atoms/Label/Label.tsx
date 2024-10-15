import React from 'react';
import { LabelProps } from './Label.type';

export const Label = ({ text }: LabelProps) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2">{text}</label>
  );
};
