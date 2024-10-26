import { TFormFieldProps } from '@/components/organisms/Form/types';
import classNames, { Argument } from 'classnames';
import React, { FC, useState } from 'react';

export interface ISelectProps
  extends Pick<TFormFieldProps, 'error' | 'register' | 'name'> {
  options: { label: string; value: string }[];
  value: string;
  label: string;
  className?: Argument;
}

export const Select: FC<ISelectProps> = ({
  options,
  value,
  name,
  register,
  label,
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  return (
    <select
      {...register(name)}
      value={selectedValue}
      onChange={(e) => {
        setSelectedValue(e.target.value);
        register(name, { value: selectedValue });
      }}
      className={classNames(
        'w-full py-2 px-[10px] min-h-[50px] bg-ash50 border border-ash100',
        className
      )}
    >
      {label && <label className="sm:text-xs md:text-md">{label}</label>}
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
