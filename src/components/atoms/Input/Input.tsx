import classnames, { Argument } from 'classnames';
import { FC } from 'react';
import { TFormFieldProps } from '@/components/organisms/Form/types';

export interface IInputProps extends TFormFieldProps {
  className?: Argument;
}

export const Input: FC<IInputProps> = ({
  className,
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => {
  return (
    <div className="w-full flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        className={classnames(
          `w-full rounded text-ash900 border border-ash100 hover:border-terracotta200 active:border-terracotta400 py-2 px-[10px] min-h-[50px] bg-ash50 ${error && 'bg-red50 border-red200 text-red800'}`,
          className
        )}
      />
    </div>
  );
};
