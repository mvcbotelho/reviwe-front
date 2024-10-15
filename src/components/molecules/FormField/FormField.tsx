import React from 'react';
import { FormFieldProps } from './FormField.type';
import { Input } from '../../atoms/Input';
import { Label } from '../../atoms/Label';

export const FormField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}: FormFieldProps) => {
  return (
    <div className="mb-4">
      <Label text={label} />
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
