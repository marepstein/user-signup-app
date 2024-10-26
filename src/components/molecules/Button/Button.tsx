import classnames, { Argument } from 'classnames';
import {
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
  ReactElement,
} from 'react';

export interface IButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  rightSection?: ReactElement;
  loading?: boolean;
  className?: Argument;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  disabled,
  onClick,
  className,
  rightSection,
  loading,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classnames(
        `w-full h-full max-h-[60px] rounded p-5 text-ash50 bg-terracotta300 hover:bg-terracotta400 active:bg-terracotta500 focus:border focus:border-terracotta300`,
        {
          '[&]:bg-ash300 [&]:text-ash600 [&]:hover:bg-ash300 [&]:hover:text-ash600 cursor-not-allowed':
            disabled,
        },
        className
      )}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <span className="w-full flex flex-row justify-between items-center">
        {loading ? (
          <span className="text-center">
            <p>Loading...</p>
          </span>
        ) : (
          children
        )}
        {rightSection && <span>{rightSection}</span>}
      </span>
    </button>
  );
};
